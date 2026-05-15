# weekly-tech-trend
Weekly Tech Trend Analyst — 주간 기술 트렌드 분석

제조업·생산기술 관점에서 주간 단위로 기술 트렌드를 정리해 게시하는 정적 사이트입니다.
GitHub Pages 호스팅을 전제로 하며, 별도 빌드 도구 없이 순수 HTML/CSS/JS만으로 동작합니다.

## 사이트 구조

```
./
├── index.html                 # 기사 목록 페이지
├── article.html               # 기사 상세 페이지 (?slug=... 로 호출)
├── assets/
│   └── style.css              # 전체 스타일시트
├── articles/
│   ├── index.json             # 기사 메타데이터 인덱스
│   └── YYYY-MM-DD-slug.md     # 기사 본문 (frontmatter 포함)
└── README.md
```

## 새 기사 추가 절차

1. `articles/` 폴더에 `YYYY-MM-DD-slug.md` 파일을 생성합니다.
   - 파일 이름의 `slug`는 영문 소문자·숫자·하이픈만 사용합니다 (URL 파라미터로 직접 사용됨).
   - 파일 상단에 다음 frontmatter를 포함합니다.

   ```markdown
   ---
   title: 기사 제목
   date: 2026-05-15
   tags: [태그1, 태그2]
   summary: 한 줄 요약
   ---

   (이후 본문을 마크다운으로 작성)
   ```

2. `articles/index.json`의 `articles` 배열에 메타데이터를 추가합니다.
   `index.json`에 등록되지 않은 기사는 목록 페이지에 노출되지 않습니다.

   ```json
   {
     "slug": "2026-05-15-smart-manufacturing",
     "title": "스마트제조 2026 상반기 핵심 동향",
     "date": "2026-05-15",
     "tags": ["스마트제조", "디지털전환"],
     "summary": "한 줄 요약"
   }
   ```

3. commit & push 하면 GitHub Pages가 자동으로 재배포합니다.

   ```bash
   git add articles/
   git commit -m "feat(articles): 새 기사 추가 - <제목>"
   git push
   ```

## 로컬 미리보기

`index.html`을 더블클릭으로 열면 브라우저가 `file://` 스킴으로 동작하여 `fetch()`가 CORS 정책에 막힙니다.
반드시 정적 서버를 통해 접근해야 합니다.

방법 A — VS Code "Live Server" 확장
- VS Code Marketplace에서 "Live Server"를 설치합니다.
- `index.html`을 우클릭 → "Open with Live Server" 선택.

방법 B — Python 내장 서버
```bash
python -m http.server 8000
```
이후 브라우저에서 `http://localhost:8000` 접속.

## 디자인 원칙

- 가독성 중심의 미니멀 레이아웃 (Medium / Notion 분위기)
- 본문·제목은 세리프(Noto Serif KR), UI·메타는 산세리프(Pretendard)
- 박스 그림자 없이 얇은 보더만으로 구분, 색상은 절제해서 사용
- 모바일 가독성을 고려한 반응형 패딩
