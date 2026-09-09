/* =========================================
   사이트 네비게이션 — "심층 리포트 ▾" 드롭다운
   외부 라이브러리 없이 순수 JS로 구현

   - 데스크톱(hover 가능 포인터): 호버로 열림/닫힘 + 클릭 토글
     (호버로 열린 상태에서 트리거를 클릭하면 닫히지 않고 "고정" — 마우스가 떠나도 유지,
      다시 클릭·바깥 클릭·Esc로 닫힘. 마우스 사용자가 습관적으로 클릭해도 패널이 사라지지 않게)
   - 모바일/터치: 탭으로 펼침, 다시 탭하거나 바깥을 탭하면 닫힘
     (바깥 탭은 pointerdown 기준 — iOS Safari는 비인터랙티브 요소를 탭해도
      document 레벨 click을 발화하지 않으므로 click만으로는 닫히지 않음)
   - 키보드: Tab 포커스, Enter/Space 토글(button 기본 동작),
             Esc 닫기(포커스가 드롭다운 안이면 트리거로 복귀 — 호버로 연 패널도 닫힘),
             ↓/↑/Home/End 항목 이동
   - ARIA: aria-haspopup / aria-expanded / aria-controls
   ========================================= */
(function () {
  'use strict';

  var root = document.querySelector('[data-nav-dropdown]');
  if (!root) return;
  var trigger = root.querySelector('.nav-dropdown__trigger');
  var panel = root.querySelector('.nav-dropdown__panel');
  if (!trigger || !panel) return;

  /* 호버 가능한 정밀 포인터(마우스)일 때만 호버 열림 사용 — 터치는 탭 토글만 */
  var canHover = false;
  try {
    canHover = !!(window.matchMedia &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches);
  } catch (e) { canHover = false; }

  var hasPointer = !!window.PointerEvent;
  var DOWN_EVENTS = hasPointer ? ['pointerdown'] : ['mousedown', 'touchstart'];
  var UP_EVENTS = hasPointer ? ['pointerup', 'pointercancel'] : ['mouseup', 'touchend', 'touchcancel'];

  var closeTimer = null;
  var pinned = false;          /* 클릭·키보드로 열어 고정된 상태 — mouseleave로 닫지 않음 */
  var hoverOpened = false;     /* 현재 열림이 호버에 의한 것인지 */
  var pressingInside = false;  /* 드롭다운 안에서 포인터를 누르고 있는 중 — focusout으로 닫지 않음 */

  function clearCloseTimer() {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }
  }

  function isOpen() {
    return root.classList.contains('is-open');
  }

  /* 패널이 뷰포트 우측을 넘치면 트리거 기준 우측 정렬로 전환 */
  function positionPanel() {
    root.classList.remove('nav-dropdown--align-right');
    var rect = panel.getBoundingClientRect();
    var vw = document.documentElement.clientWidth || window.innerWidth || 0;
    if (vw && rect.right > vw - 8) {
      root.classList.add('nav-dropdown--align-right');
    }
  }

  /* byHover: 호버로 열림(일시적) / false: 클릭·키보드로 열림(고정) */
  function open(byHover) {
    clearCloseTimer();
    if (isOpen()) return;
    root.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    hoverOpened = !!byHover;
    pinned = !byHover;
    positionPanel();
  }

  /* 호버로 열린 패널을 고정 — 예약된 닫기 타이머(mouseleave 120ms)도 취소 */
  function pin() {
    clearCloseTimer();
    pinned = true;
    hoverOpened = false;
  }

  function close() {
    clearCloseTimer();
    pinned = false;
    hoverOpened = false;
    if (!isOpen()) return;
    root.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  /* 클릭 토글: 닫힘 → 열림(고정) / 호버로 열림 → 고정 / 고정 열림 → 닫힘 */
  function toggle() {
    if (!isOpen()) { open(false); return; }
    if (hoverOpened && !pinned) { pin(); return; }
    close();
  }

  function getItems() {
    return Array.prototype.slice.call(panel.querySelectorAll('.nav-dropdown__item'));
  }

  /* 클릭(탭) → 토글. Enter/Space는 button 기본 동작으로 click 이벤트가 발생 */
  trigger.addEventListener('click', function (e) {
    e.preventDefault();
    toggle();
  });

  /* 데스크톱 호버 — 트리거와 패널 사이 간격을 지날 때 깜빡이지 않도록 짧은 지연 후 닫기 */
  if (canHover) {
    root.addEventListener('mouseenter', function () {
      clearCloseTimer();
      if (!isOpen()) open(true);
    });
    root.addEventListener('mouseleave', function () {
      clearCloseTimer();
      if (pinned) return;
      closeTimer = setTimeout(close, 120);
    });
  }

  /* 포인터 누름 — 바깥이면 닫기(iOS Safari 대응), 안이면 "누르는 중" 표시
     (Safari는 링크·버튼 클릭 시 포커스를 주지 않아 focusout이 click보다 먼저 오므로,
      누르는 중에는 focusout으로 닫지 않아야 항목 클릭이 유실되지 않음) */
  function onPointerDown(e) {
    pressingInside = root.contains(e.target);
    if (!pressingInside && isOpen()) close();
  }
  function onPointerUp() {
    pressingInside = false;
  }
  DOWN_EVENTS.forEach(function (type) {
    document.addEventListener(type, onPointerDown, { passive: true, capture: true });
  });
  UP_EVENTS.forEach(function (type) {
    document.addEventListener(type, onPointerUp, { passive: true, capture: true });
  });

  /* 바깥 클릭 → 닫기 (pointerdown이 전달되지 않는 환경의 폴백) */
  document.addEventListener('click', function (e) {
    if (!isOpen()) return;
    if (root.contains(e.target)) return;
    close();
  });

  /* Esc → 닫기. 포커스가 어디 있든 동작(호버로 연 패널 포함), 드롭다운 안에 있었으면 트리거로 복귀 */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape' && e.key !== 'Esc') return;
    if (!isOpen()) return;
    var wasInside = root.contains(document.activeElement);
    close();
    if (wasInside) trigger.focus();
  });

  /* 항목 이동 키 */
  root.addEventListener('keydown', function (e) {
    var key = e.key;
    var items = getItems();
    if (!items.length) return;
    var idx = items.indexOf(document.activeElement);

    if (key === 'ArrowDown' || key === 'Down') {
      e.preventDefault();
      if (!isOpen()) open(false); else pin();
      var next = idx < 0 ? items[0] : items[Math.min(idx + 1, items.length - 1)];
      next.focus();
    } else if (key === 'ArrowUp' || key === 'Up') {
      e.preventDefault();
      if (idx <= 0) { trigger.focus(); } else { items[idx - 1].focus(); }
    } else if (key === 'Home' && isOpen()) {
      e.preventDefault();
      items[0].focus();
    } else if (key === 'End' && isOpen()) {
      e.preventDefault();
      items[items.length - 1].focus();
    }
  });

  /* 포커스가 드롭다운 바깥으로 이동(Tab 아웃)하면 닫기 — 포인터를 누르는 중이면 무시 */
  root.addEventListener('focusout', function (e) {
    if (pressingInside) return;
    var to = e.relatedTarget;
    if (to && root.contains(to)) return;
    setTimeout(function () {
      if (pressingInside) return;
      if (!root.contains(document.activeElement)) close();
    }, 0);
  });

  /* 뷰포트 크기 변경 시 열린 패널 재배치 */
  window.addEventListener('resize', function () {
    if (isOpen()) positionPanel();
  });

  /* 페이지 스크립트(article.html 등)에서 활성 항목을 지정할 수 있도록 최소 API 노출
     markCurrent=false면 aria-current는 붙이지 않음 (실제 현재 페이지가 아닌 기사 상세 등) */
  window.wttNav = {
    setActive: function (href, markCurrent) {
      if (!href) return;
      var current = (markCurrent !== false);
      var matched = false;
      getItems().forEach(function (a) {
        var same = (a.getAttribute('href') === href);
        a.classList.toggle('is-active', same);
        if (same) matched = true;
        if (same && current) { a.setAttribute('aria-current', 'page'); }
        else { a.removeAttribute('aria-current'); }
      });
      trigger.classList.toggle('is-active', matched);
    }
  };
})();
