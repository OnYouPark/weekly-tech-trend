# weekly-tech-trend

**Weekly Tech Trend Analyst — 제조업 기술 트렌드 브리핑**

제조업·생산기술 관점에서 기술 트렌드를 정리해 매일 게시하는 정적 사이트입니다. GitHub Pages 호스팅을 전제로 하며, 별도 빌드 도구 없이 순수 HTML/CSS/JS만으로 동작합니다.

## 주요 기능

- **기사 목록·상세** — 날짜순 정렬, 마크다운 본문 렌더링
- **탐색(Explore)** — 주제별(태그) / 날짜별(달력) 두 축으로 전체 기사 탐색
- **태그 시스템** — 기사 내용 기반으로 기업·기술 태그를 자동 부여
- **검색** — 제목·요약·태그 텍스트 검색
- **다크모드** — 토글 지원, 설정 유지
- **읽기 보조** — 읽기 진행률 표시, 자동 목차(TOC), 읽은 기사 표시
- **참고자료·인용** — 출처 링크 카드, 본문 인용 복사
- **댓글·통계** — 댓글 수집 및 방문 통계 연동

기사 게시와 발송은 자동화 파이프라인으로 운영되며, 운영 세부 절차는 별도 내부 문서로 관리합니다.

## 사이트 구조

```
./
├── index.html              # 일일 브리핑 목록 (daily 기사만, 검색)
├── weekly.html             # 주간 브리핑 종합 (type=weekly)
├── monthly.html            # 월간 브리핑 종합 (type=monthly)
├── explore.html            # 탐색 페이지 (주제별·날짜별 — daily 전용)
├── china.html              # 중국 제조 동향 (type=china) — 심층 리포트 드롭다운
├── production.html         # 생산기술 브리핑 (type=production) — 심층 리포트 드롭다운
├── exhibition.html         # 글로벌 전시회 리포트 (type=exhibition) — 심층 리포트 드롭다운
├── article.html            # 기사 상세 페이지 (?slug=... 로 호출)
├── assets/
│   ├── style.css           # 전체 스타일시트
│   ├── nav.js              # "심층 리포트 ▾" 드롭다운 동작 (순수 JS)
│   └── og-image.svg        # Open Graph 공유 이미지
├── articles/
│   ├── index.json          # 기사 메타데이터 인덱스
│   └── YYYY-MM-DD-slug.md  # 기사 본문 (frontmatter 포함)
├── outbox/                 # 발송 대기 데이터 (자동 생성)
└── README.md
```

### 콘텐츠 유형과 네비게이션

기사는 `type` 필드로 6종으로 구분됩니다. 상단 네비게이션은 5개로 고정하고, 특정 주제를 심층 정리하는 리포트 3종은 **"심층 리포트 ▾" 드롭다운**으로 묶습니다.

```
일일 브리핑 · 주간 브리핑 · 월간 브리핑 · 탐색 · 심층 리포트 ▾
                                                    ├ 중국 제조 동향
                                                    ├ 생산기술 브리핑
                                                    └ 글로벌 전시회 리포트
```

| type | 네비 위치 | 페이지 | 카드 표시 |
| --- | --- | --- | --- |
| `daily` (또는 미지정) | 일일 브리핑 | `index.html` | 날짜 + 제목 + 요약 + 태그 |
| `weekly` | 주간 브리핑 | `weekly.html` | 기간 + 게시일 + 요약 |
| `monthly` | 월간 브리핑 | `monthly.html` | 기간 + 게시일 + 요약 |
| `china` | 심층 리포트 ▸ 중국 제조 동향 | `china.html` | 기간 + 게시일 + 요약 + 태그 |
| `production` | 심층 리포트 ▸ 생산기술 브리핑 | `production.html` | 기간 + 게시일 + 요약 + 태그 |
| `exhibition` | 심층 리포트 ▸ 글로벌 전시회 리포트 | `exhibition.html` | **제목(전시회명)** + 개최기간 + 장소(있을 때) + 요약 + 태그 (게시일은 정렬에만 사용) |

- `type`이 없는 항목은 `daily`로 취급합니다(기존 기사 호환).
- 탐색(`explore.html`)의 주제별 태그·날짜별 달력 집계는 **daily 기사만** 대상으로 합니다. 종합·중국·생산기술·전시회 기사 태그는 탐색에 포함되지 않습니다.
- `production`은 사출성형·로봇제조 기술을 업체·기술 중심으로 심층 정리하는 주간 리포트입니다. `period`는 "2026년 7월 1주차" 형태가 기본이며, 상반기 통합 기사 등은 "2026년 상반기" 같은 자유 표기도 허용합니다.
- `exhibition`은 국내외 주요 전시회를 조사해 기술 동향을 정리하는 리포트입니다. 다른 유형과 달리 **제목(전시회명)이 곧 식별자**이므로 카드와 상세 페이지 모두 제목을 전면에 표시합니다.
  - `period`에는 **개최 기간**을 담습니다. 자유 텍스트 허용 (예: `2026-04-21 ~ 04-24`, `2025년 10월 8-15일`).
  - `venue`(선택)에는 개최 장소를 담습니다 (예: `중국 상하이 NECC`). 있으면 카드·상세에 표시하고, 없으면 생략합니다.
  - 상세 페이지(`article.html`)에서는 "글로벌 전시회 리포트" 배지 아래 제목, 그 바로 아래 `개최: {period} · {venue}` 줄이 표시됩니다 (`venue`가 없으면 `개최: {period}`).

#### 심층 리포트 드롭다운 동작

- 데스크톱: 호버로 열림, 클릭으로도 토글(호버로 열린 상태에서 클릭하면 닫히지 않고 고정되어 마우스가 떠나도 유지, 다시 클릭하면 닫힘). 모바일/터치: 탭으로 펼침, 다시 탭하거나 바깥을 탭하면 닫힘.
- 키보드: Tab 포커스 → Enter/Space 토글, Esc 닫기, ↓/↑ 항목 이동. `aria-haspopup` / `aria-expanded` / `aria-controls` 부여.
- `china.html` / `production.html` / `exhibition.html`에서는 "심층 리포트"가 active로 표시되고 드롭다운 안의 해당 항목도 강조됩니다. `article.html`에서도 해당 유형 기사를 보고 있을 때 같은 방식으로 표시됩니다.
- 구현은 `assets/nav.js` 하나로 8개 페이지가 공유하며, 외부 라이브러리를 사용하지 않습니다.

## 새 기사 추가 절차

1. `articles/` 폴더에 `YYYY-MM-DD-slug.md` 파일을 생성합니다.
   - 파일 이름의 `slug`는 영문 소문자·숫자·하이픈만 사용합니다 (URL 파라미터로 직접 사용됨).
   - 파일 상단에 다음 frontmatter를 포함합니다.

```
---
title: 기사 제목
date: 2026-06-26
type: weekly          # daily / weekly / monthly / china / production / exhibition. 없으면 daily로 간주
period: 2026-06-4주    # 종합·중국·생산기술 기사의 대상 기간 표시용 (daily는 생략) / exhibition은 개최 기간
tags: [태그1, 태그2]
summary: 한 줄 요약
---

(이후 본문을 마크다운으로 작성)
```

   - `type`·`period`는 선택 필드입니다. 일반 일일 브리핑은 둘 다 생략하면 됩니다(자동으로 `daily` 취급).
   - 종합·중국·생산기술·전시회 리포트도 동일하게 `articles/`에 파일을 추가하고 `index.json`에 등록하면 바로 게시됩니다. (`type`을 `weekly`/`monthly`/`china`/`production`/`exhibition`으로 지정)
   - 전시회 리포트(`exhibition`)는 `title`에 전시회명을, `period`에 개최 기간을 적고, 장소가 있으면 `venue`를 추가합니다.

```
---
title: CIMT 2027 — 제19회 중국 국제 공작기계 전시회
date: 2027-04-20
type: exhibition
period: 2027-04-12 ~ 04-17
venue: 중국 베이징 CIEC
tags: [공작기계, 5축 가공, 자동화]
summary: 한 줄 요약
---
```

   - `tags`는 그 기사에 실제 등장한 핵심 기업·기술을 기준으로 부여합니다 (예: `NVIDIA`, `디지털트윈`, `협동로봇`). 고유명사는 원문, 일반 기술어는 한글로 표기하며, 기사당 최대 8개를 권장합니다.

2. `articles/index.json`의 `articles` 배열에 메타데이터를 추가합니다. `index.json`에 등록되지 않은 기사는 목록·탐색에 노출되지 않습니다. **`tags`는 frontmatter와 동일하게 맞춥니다.** `type`·`period`·`venue`도 frontmatter와 같은 값을 `index.json`에 넣어야 목록 카드에 반영됩니다(목록은 `index.json`만 읽습니다).

```
{
  "slug": "2026-06-26-smart-manufacturing",
  "title": "기사 제목",
  "date": "2026-06-26",
  "tags": ["NVIDIA", "디지털트윈", "협동로봇"],
  "summary": "한 줄 요약"
}
```

3. commit & push 하면 GitHub Pages가 자동으로 재배포합니다.

```
git add articles/
git commit -m "feat(articles): 새 기사 추가 - <제목>"
git push
```

## 로컬 미리보기

`index.html`을 더블클릭으로 열면 브라우저가 `file://` 스킴으로 동작하여 `fetch()`가 CORS 정책에 막힙니다. 반드시 정적 서버를 통해 접근해야 합니다.

**방법 A — VS Code "Live Server" 확장**
- VS Code Marketplace에서 "Live Server"를 설치합니다.
- `index.html`을 우클릭 → "Open with Live Server" 선택.

**방법 B — Python 내장 서버**

```
python -m http.server 8000
```

이후 브라우저에서 `http://localhost:8000` 접속.

## 디자인 원칙

- 가독성 중심의 미니멀 레이아웃 (Medium / Notion 분위기)
- 본문·제목·UI 모두 산세리프(Pretendard)로 통일, 위계는 굵기(weight)로 표현 (제목 700 / 섹션 600 / 본문 400)
- 박스 그림자 없이 얇은 보더만으로 구분, 색상은 절제해서 사용 (메인 컬러 남색 계열)
- 다크모드 및 모바일 가독성을 고려한 반응형 디자인
