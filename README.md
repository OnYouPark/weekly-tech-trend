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
├── index.html              # 기사 목록 페이지 (검색)
├── article.html            # 기사 상세 페이지 (?slug=... 로 호출)
├── explore.html            # 탐색 페이지 (주제별·날짜별)
├── assets/
│   └── style.css           # 전체 스타일시트
├── articles/
│   ├── index.json          # 기사 메타데이터 인덱스
│   └── YYYY-MM-DD-slug.md  # 기사 본문 (frontmatter 포함)
├── outbox/                 # 발송 대기 데이터 (자동 생성)
└── README.md
```

## 새 기사 추가 절차

1. `articles/` 폴더에 `YYYY-MM-DD-slug.md` 파일을 생성합니다.
   - 파일 이름의 `slug`는 영문 소문자·숫자·하이픈만 사용합니다 (URL 파라미터로 직접 사용됨).
   - 파일 상단에 다음 frontmatter를 포함합니다.

```
---
title: 기사 제목
date: 2026-06-26
tags: [태그1, 태그2]
summary: 한 줄 요약
---

(이후 본문을 마크다운으로 작성)
```

   - `tags`는 그 기사에 실제 등장한 핵심 기업·기술을 기준으로 부여합니다 (예: `NVIDIA`, `디지털트윈`, `협동로봇`). 고유명사는 원문, 일반 기술어는 한글로 표기하며, 기사당 최대 8개를 권장합니다.

2. `articles/index.json`의 `articles` 배열에 메타데이터를 추가합니다. `index.json`에 등록되지 않은 기사는 목록·탐색에 노출되지 않습니다. **`tags`는 frontmatter와 동일하게 맞춥니다.**

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
