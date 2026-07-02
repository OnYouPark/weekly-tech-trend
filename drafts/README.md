# drafts — 종합·중국 리포트 초안 보관소

이 폴더는 Cowork가 생성한 **주간·월간 종합 및 중국 제조 동향 리포트 초안**이 놓이는 곳입니다.
이곳의 파일은 사이트에 노출되지 않습니다. (`articles/index.json`에 등록된 기사만 게시되므로, 여기에 있는 초안은 어차피 사이트에 뜨지 않습니다.)

## 초안 검토·등록 절차

1. `drafts/`의 초안(`.md`)을 검토·수정합니다.
2. 완성된 초안을 `articles/`로 옮깁니다. 파일명은 `YYYY-MM-DD-slug.md` 규칙을 따릅니다.
3. `articles/index.json`의 `articles` 배열에 메타데이터를 등록하면 게시됩니다.

## frontmatter (종합·중국 기사)

```
---
title: ...
date: 2026-06-26
type: weekly          # daily / weekly / monthly / china. 없으면 daily로 간주
period: 2026-06-4주    # 종합·중국 기사의 대상 기간 (daily는 생략)
tags: [...]
summary: ...
---
```

## index.json 항목 (종합·중국 기사)

```
{
  "slug": "...",
  "title": "...",
  "date": "2026-06-26",
  "type": "weekly",
  "period": "2026-06-4주",
  "tags": [...],
  "summary": "..."
}
```

- `type`이 없는 항목은 `daily`로 취급됩니다(기존 기사 호환).
- `type`에 따라 게시 위치가 정해집니다: `weekly` → 주간 브리핑, `monthly` → 월간 브리핑, `china` → 중국 제조 동향.
- **중국(`china`) 기사의 태그는 탐색(explore.html)의 태그 집계에 포함되지 않습니다.** 탐색은 일일 브리핑(daily) 전용입니다.
