---
title: 제조업 기술 트렌드 일일 브리핑 - 2026년 9월 23일
date: 2026-09-23
tags: [Intrinsic, ABB, 포스코DX, 로크웰오토메이션, 휴머노이드, 합성데이터, 오픈소스로보틱스, 사출성형]
summary: Intrinsic이 산업용 로봇의 실시간 제어와 6-DoF 자세 추정, 모션·그래스프 플래닝을 Apache 2.0 오픈소스로 공개하고 CNC 머신텐딩 레퍼런스 설계 OMTS를 함께 냈으며, 동반 공개된 115개국 5,000명 규모 조립 챌린지에서 상위 10개 팀 전원이 인지에는 파운데이션 모델을 썼으나 90퍼센트가 삽입 단계는 규칙기반 로직으로 처리했고 최종 실기 100퍼센트 성공은 2개 팀에 그쳤다. 휴머노이드 서밋은 실리콘밸리와 런던, 도쿄에 이어 다섯 번째로 9월 22일 서울 코엑스에서 열려 경쟁축을 하드웨어에서 현장 데이터와 신뢰성으로 이동시켰고 로브로스는 이그리스-C의 실시간 전신 원격조작을 공개했다. 포스코DX는 제조 AI의 병목을 기술이 아닌 데이터 소유권으로 규정하며 학습 데이터의 70에서 80퍼센트가 가상공장 물리엔진 합성데이터이고 자동화율 80에서 85퍼센트 도달 후 남는 비정형 예외가 암묵지에 의존한다고 밝혔다. 북미 2분기 플라스틱 가공기계 출하는 2억 3,580만 달러로 전분기 대비 14.8퍼센트 줄었으나 미국 실질 민간 설비투자는 연율 27.7퍼센트 늘어 발주 잔고 축적 구간이 확인됐고, 사출성형기만 전년 동기 대비 4.5퍼센트 증가로 플러스를 지켰다.
---

# 제조업 기술 트렌드 일일 브리핑 - 2026년 9월 23일

## 1. 핵심 요약

**스마트제조·자동화 — Intrinsic이 산업용 로봇 제어·비전 스택을 Apache 2.0으로 전면 공개했고, 동반 공개된 115개국 5,000명 규모 조립 챌린지에서 실기 100% 성공은 2개 팀에 그쳤다** [Intrinsic 공식 블로그, 2026-09-22](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)

실시간 제어 프레임워크, NVIDIA FoundationPose 기반 6-DoF 자세 추정, 모션·그래스프 플래닝, 카메라 캘리브레이션을 하드웨어 비종속 모듈로 분리해 GitHub에 배포했고, CNC 머신텐딩 레퍼런스 설계 OMTS를 함께 냈다 [공식 발표]. 챌린지 상위 10개 팀 전원이 인지에는 파운데이션 모델을, 90%는 삽입 단계에 규칙기반 로직을 썼다.

**SL·국내 제조업 관점**: 기회 — 비전·모션 계층을 로봇 벤더 종속 없이 내재화할 무상 기반이 생겨, 다품종 셀의 재구성 비용과 SI 의존도를 낮출 검토 근거가 된다.

**로보틱스·모빌리티 — 휴머노이드 서밋이 실리콘밸리·런던·도쿄에 이어 5번째로 9월 22일 서울 코엑스에서 개막하고, 경쟁축을 하드웨어에서 현장 데이터·신뢰성으로 이동시켰다** [전자신문, 2026-09-22](https://www.etnews.com/20260922000286)

퍼소나AI는 공장이 이미 사람 폼팩터에 맞춰 표준화됐다는 논리를, 필드AI는 플랫폼 중립 범용 로봇 두뇌를 각각 제시해 폼팩터 결정론과 중립론이 같은 자리에서 충돌했다 [공식 발표]. 로브로스는 같은 날 이그리스-C의 실시간 전신 원격조작을 공개했다.

**SL·국내 제조업 관점**: 리스크 — 휴머노이드 파일럿을 받는 순간 숙련공 동작·치공구 취급 노하우가 로봇사 학습 자산으로 이전되므로, 도입 여부보다 데이터 소유권 조항을 먼저 확정해야 한다.

**AI·디지털전환 (2026-09-15 발행 제조 행동데이터 표준화의 후속) — 포스코DX가 제조 AI의 병목을 기술이 아닌 데이터 소유권으로 규정하고, 학습 데이터의 70–80%가 가상공장 물리엔진 합성데이터라고 공개했다** [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472)

자동화율 80–85% 도달 후 남는 15–20% 비정형 예외가 암묵지에 의존하는데, 1960년대생 고숙련자 은퇴가 5년 내로 임박했고 암묵지 제공 보상 기준이 없다는 지적이다 [업계 분석]. 후판 전단 공정 sLLM 적용으로 판단 응답은 2초에서 0.9초로 줄었다.

**SL·국내 제조업 관점**: 리스크 — 설비사·솔루션사와 공동 구축한 공정 AI의 합성데이터·파생모델 권리를 계약에 못 박지 않으면, 자사 라인에서 추출한 노하우가 경쟁사용 범용 솔루션으로 재판매되는 경로가 열린다.

**금형·사출 기술 — 북미 2분기 1차 플라스틱 가공기계 출하는 2억 3,580만 달러로 전분기 대비 14.8% 줄었으나, 같은 분기 미국 실질 민간 설비투자는 연율 27.7% 증가해 방향이 갈렸다** [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)

사출성형기만 전년 동기 대비 4.5% 증가로 플러스를 지킨 반면 단축 압출은 35.0%, 이축 압출은 60.1% 급감해 투자가 고부가 성형 쪽으로 쏠렸다 [공식 발표]. 9월 22일 가동한 Velocity Group 오하이오 공장은 사출기 11대를 전량 LS Mtron으로 채웠다.

**SL·국내 제조업 관점**: 기회 — 출하 감소와 설비투자 급증의 괴리는 발주 잔고 축적 구간을 뜻하므로, 북미 증설 견적과 금형 제작 슬롯을 지금 확정해 2027년 인도 리드타임 우위를 선점할 여지가 있다.

## 2. 분야별 상세 분석

### 2-1. 스마트제조·자동화

**이슈 개요**

알파벳 계열 산업용 로보틱스 기업 [Intrinsic](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)이 2026년 9월 22일 캐나다 토론토에서 열린 ROSCon 2026에서 자사 플랫폼 핵심 구성요소를 오픈소스로 공개한 [Intrinsic Core](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)를 발표했다. 실시간 제어 프레임워크, [NVIDIA FoundationPose 기반 6-DoF 자세 추정](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core), 모션·그래스프 플래닝, Gazebo 기반 시뮬레이션, 카메라 캘리브레이션, ROS 드라이버를 Apache 2.0 라이선스로 GitHub에 올렸고, CNC 머신텐딩용 개방형 레퍼런스 설계 [Open Machine Tending Solution(OMTS)](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)을 함께 냈다. 같은 날 공개된 제1회 [AI for Industry Challenge](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge) 결과는 전자 조립용 유연 케이블 삽입 과제에서 최종 실기 단계 100% 성공 팀이 2개뿐이었다는 사실을 드러냈다. 하드웨어 쪽에서는 [ABB Robotics가 9월 21일 E-Device](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices)를, [Active Silicon이 같은 날 100 Gbps CoaXPress over Fiber 프레임그래버](https://www.automate.org/vision/news/active-silicon-launches-100-gbps-firebird-coaxpress-over-fiber-frame-grabber)를 출시했다. 다벤더 AMR 상호운용 표준 [ISO 21423은 9월 기준 Stage 60.00](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language)에 진입했다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| Intrinsic Core 공개 | [2026년 9월 22일](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core) ROSCon 2026에서 발표. Apache 2.0 라이선스로 GitHub 공개. 하드웨어 비종속 실시간 제어, 6-DoF 자세 추정, 모션·그래스프 플래닝, Gazebo 시뮬레이션, ROS 드라이버, 네이티브 디지털 트윈 포함 | [Intrinsic 블로그](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core) | [공식 발표] |
| OMTS 레퍼런스 설계 | CNC 머신텐딩용 개방형 레퍼런스. [FANUC·Universal Robots 하드웨어](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core) 및 NVIDIA FoundationPose로 커스터마이즈 가능 | [A3](https://www.automate.org/ai/industry-insights/googles-intrinsic-launches-open-source-core-toolkit) | [공식 발표] |
| 챌린지 규모·결과 | [115개국 5,000명 개발자](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge) 참가, 6개월, 상금 18만 달러. 최종 실기 100% 성공 2개 팀. 상위 10개 팀 100%가 Intrinsic Vision Model로 인지 처리, 90%는 삽입에 규칙기반 로직 사용. 과제는 UR5e로 SC·SFP 커넥터 식별·파지·삽입 | [Intrinsic 블로그](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge) | [공식 발표] |
| ABB E-Device | [2026년 9월 21일 공개](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices). 고객 소유 태블릿·PC로 OmniCore 로봇 조작·프로그래밍. 비상정지와 3-포지션 인에이블링 스위치 내장, ISO 10218:2025 준수 및 CE·UL 인증 | [A3 / ABB](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices) | [공식 발표] |
| Active Silicon FireBird 1xCOF100G | [QSFP28 25 Gbps 4레인, 최대 100 Gbps](https://www.activesilicon.com/products/firebird-coaxpress-over-fiber-frame-grabber-100g/), PCIe 4.0 x8 최대 15.7 GB/s, 최대 8GB DDR4 버퍼. 100GBASE-LR 기준 2km 초과, ER 트랜시버 적용 시 최대 40km. CoaXPress v2.1 준거, v3.0은 비준 후 지원 | [Active Silicon 제품 페이지](https://www.activesilicon.com/products/firebird-coaxpress-over-fiber-frame-grabber-100g/) | [공식 발표] |
| ISO 21423 진행 단계 | [2026년 9월 기준 Stage 60.00](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language)으로 최종 발간 절차 진입. 다벤더 AMR·FMS·전사 자원 간 통신 프로토콜 규정 | [A3 Industry Insights, 2026-09-22](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language) | [업계 분석] |
| 국내 일정 | [The Next AI 2026](https://www.hellot.net/news/article.html?no=115100)이 10월 14–16일 창원컨벤션센터에서 SMATOF와 동시 개최, 40여 개 기업·기관 참여 예정 | [헬로티, 2026-09-22](https://www.hellot.net/news/article.html?no=115100) | [2차 인용] |

**기술적 의미**

기존 산업용 로봇 애플리케이션은 벤더별 폐쇄 스택에 묶여, 모션 플래닝과 3D 비전 캘리브레이션, 그리퍼 제어가 각 로봇사 전용 언어·툴체인에 종속돼 있었다. 라인 구성이 바뀔 때마다 재작성이 필요했던 이유다. Intrinsic Core의 차별점은 이 계층을 하드웨어 비종속 ROS 호환 모듈로 분리해 무상 배포한 데 있다. 로봇 암과 그리퍼, 센서를 교체해도 드라이버를 다시 쓸 필요가 없고, 센서 피드백으로 궤적 중간에 경로를 재계산하는 실시간 제어를 포함한다. 자세 추정은 FoundationPose를 내장해 별도 래퍼 없이 쓸 수 있어 강성 지그 의존을 줄인다. 챌린지 결과는 더 실무적인 신호다. 상위 팀 전원이 인지에는 파운데이션 모델을 썼으나 90%가 삽입 단계에서 스파이럴 서치 같은 고전 로직으로 되돌아갔다는 것은, 현 시점 신뢰 가능한 아키텍처가 인지와 체결의 명시적 분리라는 실증이다. 동시에 시뮬레이션이 힘 피드백, 커넥터 체결 시 촉각 클릭, 변형 케이블 물리를 재현하지 못한다는 sim-to-real 한계가 정량적으로 노출됐다. ABB E-Device는 티치펜던트를 고객 보유 단말로 대체하되 비상정지와 3-포지션 인에이블링 스위치라는 물리 안전 기구는 별도 모듈로 남겨 ISO 10218:2025를 직접 겨냥했다.

**제조업·생산기술 관점 시사점**

첫째, Intrinsic Core는 비전·모션 스택 내재화의 진입 장벽을 실질적으로 낮춘다. Apache 2.0은 개조 코드 공개 의무가 없는 허용적 라이선스여서 사내 수정본을 비공개로 양산 라인에 투입할 수 있다. OMTS가 CNC 머신텐딩 레퍼런스이고 FANUC·Universal Robots 자산 모델을 포함하므로 기존 가공 셀 자동화 검토에 바로 참조 가능하다. 다만 Intrinsic 자체가 로보틱스 기본 숙련도를 전제로 명시한 만큼, 통합 역량이 없는 조직에는 즉시 도입 대상이 아니다. 현실적 경로는 파일럿 워크셀에서 자세 추정·캘리브레이션 모듈만 부분 대체해 기존 벤더 솔루션과 정밀도·사이클타임을 대조하는 방식이다. 둘째, 챌린지 결과는 사내 AI 자동화 과제의 설계 기준으로 쓸 만하다. 커넥터 삽입과 와이어링 하네스 조립처럼 접촉이 지배적인 공정에서 순수 학습 정책에 전량을 맡기는 계획은 위험하며, 인지는 AI·체결은 결정론적 제어라는 분업을 기술 검토서 기본 전제로 삼아야 한다. 디지털 트윈 기반 사전 검증 과제의 수용 기준에는 실물 힘·토크 검증을 별도 게이트로 넣어야 한다. 셋째, 설비 사양서 관점에서 ABB의 ISO 10218:2025 대응은 신규 로봇 셀 발주 시 안전 규격 기준선이 2025년판으로 이동 중임을 보여주므로 RFQ 안전 준거 조항 갱신 검토가 필요하다. 100 Gbps 광 프레임그래버는 고해상도 다카메라 검사 라인에서 제어 PC를 클린룸·고소음 구역 밖으로 빼는 배치를 가능하게 하지만, 해당 보드가 CoaXPress v2.1 준거이고 v3.0은 비준 전이므로 도입 시 펌웨어 업데이트 조건을 계약에 반영해야 한다. ISO 21423은 아직 미발간이므로 AMR 조달에는 발간 후 준수 조항을 조건부로 삽입하는 정도가 현재 가능한 조치다.

**원문 자료**

- [Intrinsic, Introducing Intrinsic Core: An open source approach to Physical AI, 2026-09-22](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)
- [Intrinsic, Robotics is hard - it's much easier when 5,000 developers get involved, 2026-09-22](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge)
- [A3, Google's Intrinsic Launches Open-source Core Toolkit, 2026-09-22](https://www.automate.org/ai/industry-insights/googles-intrinsic-launches-open-source-core-toolkit)
- [A3 / ABB, ABB Robotics E-Device simplifies robot interaction on customers' own devices, 2026-09-21](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices)
- [A3 / Active Silicon, Active Silicon Launches 100 Gbps FireBird CoaXPress over Fiber Frame Grabber, 2026-09-21](https://www.automate.org/vision/news/active-silicon-launches-100-gbps-firebird-coaxpress-over-fiber-frame-grabber)
- [Active Silicon, FireBird CoaXPress over Fiber Frame Grabber 제품 사양, 게시일 미표기](https://www.activesilicon.com/products/firebird-coaxpress-over-fiber-frame-grabber-100g/)
- [A3, The Robot Industry Is Finally Getting a Common Language, 2026-09-22](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language)
- [헬로티, 창원서 10월 The Next AI 2026 개최, 2026-09-22](https://www.hellot.net/news/article.html?no=115100)

### 2-2. 로보틱스·모빌리티

**이슈 개요**

글로벌 로봇·AI 콘퍼런스 [휴머노이드 서밋 서울 2026](https://www.etnews.com/20260922000286)이 2026년 9월 22일 서울 코엑스 그랜드볼룸에서 개막해 23일까지 이틀간 열렸다. 2024년 실리콘밸리에서 시작해 런던과 도쿄를 거친 이 행사의 다섯 번째 개최지가 서울로 결정됐고, [과학기술정보통신부가 후원](https://www.newstree.kr/newsView/ntr202609210017)했으며 엔비디아, 퀄컴, 유니트리, 로보테라와 국내 리얼월드, 로보티즈가 연사로 참여했다. 현장에서 반복된 메시지는 휴머노이드 경쟁축이 하드웨어 성능 시연에서 실제 현장 투입 가능한 AI·데이터·개발 생태계로 이동했다는 것이다. 제조와 조선 등 인력 부족 산업이 초기 공략 시장으로 지목됐고 신뢰성과 sim-to-real 격차 해소가 상용화 과제로 꼽혔다. 같은 날 국내 기업 [로브로스는 이족보행 휴머노이드 이그리스-C의 실시간 전신 원격조작 기술](https://www.irobotnews.com/news/articleView.html?idxno=48645) 영상을 공개하고, 원격조작에서 축적되는 작업 데이터를 학습 자산으로 전환하겠다는 전략을 함께 제시했다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| 행사 개요 | [2026년 9월 22일](https://www.etnews.com/20260922000286) 서울 코엑스 그랜드볼룸 개막, [22–23일 양일간](https://www.newstree.kr/newsView/ntr202609210017) 진행. 미국 VC ALM벤처스 주최, 국내 리얼월드 기술 협력, 과기정통부 후원 | [전자신문 / 뉴스트리, 2026-09-22](https://www.etnews.com/20260922000286) | [공식 발표] |
| 개최 이력 | [2024년 실리콘밸리에서 시작해 런던·도쿄를 거쳐 서울이 5번째](https://www.etnews.com/20260922000286) | [전자신문, 2026-09-22](https://www.etnews.com/20260922000286) | [공식 발표] |
| 폼팩터 논지 | 퍼소나AI 마이클 페리 상업전략 총괄: [산업 현장은 이미 수많은 작업을 사람이라는 하나의 폼팩터에 맞춰 표준화해 놓았다](https://www.etnews.com/20260922000286). 전용 로봇보다 기존 도구를 그대로 쓰는 휴머노이드가 유리하다는 주장 | [전자신문, 2026-09-22](https://www.etnews.com/20260922000286) | [공식 발표] |
| 플랫폼 중립 논지 | 필드AI 알리 아가 CEO: 여러 플랫폼에 적용 가능한 [범용 로봇 두뇌](https://www.etnews.com/20260922000286)가 필요하며 핵심은 신뢰성과 실제 배치 가능성. 건설·광산·조선 등 비정형 환경 대응을 조건으로 제시 | [전자신문, 2026-09-22](https://www.etnews.com/20260922000286) | [공식 발표] |
| 국내 기업 전략 | [로보티즈 김병수 대표](https://www.etnews.com/20260922000286)가 휴머노이드 오픈소스 플랫폼 전략 발표. 액추에이터 기반 AI 사피엔스를 레퍼런스 모델로 두고 엔비디아 등과 시뮬레이션-학습-실기 개발환경 구축 중 | [전자신문, 2026-09-22](https://www.etnews.com/20260922000286) | [공식 발표] |
| 전신 원격조작 공개 | [로브로스가 9월 22일 이그리스-C의 실시간 전신 원격조작](https://www.irobotnews.com/news/articleView.html?idxno=48645) 영상 공개. 기존 상체 중심에서 하체까지 확대해 보행·자세·균형·상하체 동작 통합 제어. 시연은 샌드백 타격, 발로 공 차기 등 동적 균형 항목 | [로봇신문, 2026-09-22](https://www.irobotnews.com/news/articleView.html?idxno=48645) | [2차 인용] |
| 데이터 전략 | 로브로스는 전신 원격조작을 [학습 데이터 확보 수단으로 규정](https://www.irobotnews.com/news/articleView.html?idxno=48645). 위치·자세·작업 상황별 움직임 데이터를 축적해 작업 범위 확대에 활용할 계획 | [로봇신문, 2026-09-22](https://www.irobotnews.com/news/articleView.html?idxno=48645) | [공식 발표] |
| 표준화 인접 동향 | [ETRI가 ITU-T 체화 AI 포커스그룹(FG-EAI) 부의장·작업반 의장직 확보](https://www.irobotnews.com/news/articleView.html?idxno=48627). 제조 응용 작업반(TG6.1) 의장직 포함. 원 발표는 [2026-09-20](https://www.epnc.co.kr/news/articleView.html?idxno=407166)로 조사 기간 직전 | [로봇신문, 2026-09-21](https://www.irobotnews.com/news/articleView.html?idxno=48627) | [2차 인용] |

**기술적 의미**

두 사안을 관통하는 축은 데이터 수집 경로의 산업화다. 서밋에서 반복된 메시지는 하드웨어 사양 경쟁이 수렴 단계에 들어섰고 승부처가 고객 현장 맞춤 데이터 학습과 비정형 환경 신뢰성으로 옮겨갔다는 것이다. 퍼소나AI의 사람 폼팩터 표준화 논리는 설비·치공구·통로 폭·작업대 높이가 이미 인체 치수에 맞춰 설계돼 있으므로 라인 재설계 비용 없이 투입 가능한 폼팩터가 휴머노이드라는 주장이다. 반면 필드AI는 플랫폼 중립 범용 로봇 두뇌를 내세워 문제 유형에 따라 다른 폼팩터가 적합할 수 있다고 반박했다. 동일 행사에서 폼팩터 결정론과 플랫폼 중립론이 정면으로 맞선 점이 이번 서밋의 관전 포인트다. 로브로스의 전신 원격조작은 이 논쟁에 대한 국내 기업의 실무적 해법에 해당한다. 상체 원격조작은 로봇이 고정 위치에서 팔만 쓰는 작업에 국한되지만 하체를 포함한 전신 제어는 이동과 자세 전환, 양팔 조작이 결합된 작업을 커버한다. 사전 정의된 동작 재생이 아니라 작업자가 실시간으로 이동과 조작을 통합 제어한다는 점에서 보행 균형 제어와 상체 조작 제어를 동시에 만족시키는 전신 협응 문제를 다룬 것이며, 확보되는 데이터도 단순 팔 궤적이 아니라 이동·자세·접촉이 얽힌 다차원 시계열이다.

**제조업·생산기술 관점 시사점**

이번 기간의 신호는 휴머노이드 도입 검토 시점이 아니라 데이터 계약 조건 검토 시점이 왔다는 쪽에 가깝다. 퍼소나AI가 고객 현장 맞춤 데이터 학습 필요성을 명시했고 로브로스가 원격조작 데이터를 학습 자산으로 규정한 만큼, 부품사가 휴머노이드 파일럿을 수용하면 자사 공정 데이터, 즉 작업 순서와 치공구 취급 방식, 숙련공 동작 패턴이 로봇 업체의 모델 학습 자산으로 이전되는 구조가 형성된다. 파일럿 계약 단계에서 데이터 소유권과 재사용 범위, 경쟁사 적용 금지 조항을 사전에 규정하지 않으면 공정 노하우가 무상 이전되고 동일 기술이 경쟁사에 판매되는 상황이 발생할 수 있다. 기술적 한계도 분명하다. 로브로스가 공개한 것은 자율 작업이 아니라 원격조작이며, 작업자 1인이 로봇 1대를 실시간 조종하는 구조는 인건비 절감 효과가 없다. 시연 과제도 샌드백 타격과 공 차기 등 동적 균형 항목이어서 볼트 체결 토크 관리나 커넥터 삽입 같은 조립 공정의 정밀 조작 성능은 이 자료만으로 판단할 수 없다. 도입 검토 시 사이클 타임, 반복 정밀도, 가동률, 안전 펜스 유무 등 생산 지표를 별도 요구해야 한다. 한편 자동차 대량생산 역량이 곧 로봇 제조 역량이라는 현장 지적은 부품사에 공급자 포지션의 기회를 시사한다. 액추에이터, 감속기, 하네스, 센서 하우징 등 기존 자동차 부품 공정과 공차 관리 수준이 유사한 품목에서 완성 휴머노이드 도입 고객이 아니라 공급망 참여자로 진입하는 경로를 병행 검토할 필요가 있다. 다만 서밋 내용 대부분이 기업 주장과 전략 발표이며 수주 규모나 양산 단가는 공개되지 않아 투자 판단 근거로는 부족하다.

**원문 자료**

- [전자신문, 휴머노이드 경쟁축 이동, 현장 배치·AI·데이터가 승부처, 2026-09-22](https://www.etnews.com/20260922000286)
- [뉴스트리, 휴머노이드 서밋 서울 2026 22일 개막, 2026-09-22](https://www.newstree.kr/newsView/ntr202609210017)
- [로봇신문, 로브로스, 자체 개발 휴머노이드 이그리스-C 전신 원격조작 공개, 2026-09-22](https://www.irobotnews.com/news/articleView.html?idxno=48645)
- [로봇신문, ETRI, 피지컬 AI 국제표준화 주도한다, 2026-09-21](https://www.irobotnews.com/news/articleView.html?idxno=48627)
- [테크월드, ETRI, ITU-T 피지컬 AI 국제표준화 논의체 신설 주도, 2026-09-20](https://www.epnc.co.kr/news/articleView.html?idxno=407166)

### 2-3. AI·디지털전환

**이슈 개요**

9월 23일 서울에서 열린 제2회 지식재산전략포럼에서 [포스코DX AX융합연구소장이 제조 현장 AI 도입의 병목을 기술이 아닌 지식재산·데이터 소유권 문제로 규정](https://www.ebn.co.kr/news/articleView.html?idxno=1725472)했다. 숙련공 암묵지 추출 보상 기준의 부재와 합성데이터 소유권 귀속 공백을 공개 지적하면서, 자사 후판 전단 공정에 공정 특화 sLLM과 멀티 에이전트를 결합한 AI 오퍼레이터를 적용한 실적을 함께 공개했다. 같은 날 [스카이인텔리전스는 KAIST 제조피지컬AI연구소, 다임리서치와 9월 21일 체결한 3자 업무협약](https://www.etoday.co.kr/news/view/2628892)을 발표했다. 원천연구와 합성데이터, 디지털 트윈 시뮬레이션 및 이기종 로봇 오케스트레이션으로 역할을 분담한 구조다. 해외에서는 [로크웰 오토메이션이 9월 22일 17개국 1,500명 의사결정자 조사 보고서](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html)를 공개해 AI 확산과 IT/OT 융합이 운영 리스크를 키우는 구조를 정량화했고, [산업통상부는 9월 22일 AI와 기업의 미래 연구회를 발족](https://www.aitimes.kr/news/articleView.html?idxno=42039)했다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| 자동화 한계선 | 다수 제조 공장이 [80–85% 수준 자동화](https://www.ebn.co.kr/news/articleView.html?idxno=1725472)에 도달했으나 나머지 15–20% 비정형 예외는 베테랑 작업자 암묵지에 의존 | [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472) | [업계 분석] |
| 학습 데이터 구성 | 조업 중단이 불가한 산업 특성상 AI 학습 데이터의 [70–80%가 가상공장 물리엔진 기반 합성데이터](https://www.ebn.co.kr/news/articleView.html?idxno=1725472). 제조사·기술사·설비 공급사 간 소유권 가이드라인 부재 | [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472) | [업계 분석] |
| 적용 성과 | 포스코DX가 공정 특화 sLLM·멀티 에이전트 AI 오퍼레이터를 후판 전단 공정에 도입, [판단 응답 2초에서 0.9초로 단축](https://www.ebn.co.kr/news/articleView.html?idxno=1725472), 의사결정 정확도 95% 이상 확보 | [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472) | [2차 인용] |
| 인력 리스크 | 향후 [5년 내 1960년대생 고숙련자 대거 은퇴](https://www.ebn.co.kr/news/articleView.html?idxno=1725472) 예정으로 암묵지 확보 시간 부족. 보상 기준 미비 시 기술 은닉 유인 발생 | [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472) | [업계 분석] |
| 제조 피지컬 AI 3자 협약 | [스카이인텔리전스·KAIST 제조피지컬AI연구소·다임리서치가 9월 21일 MOU 체결](https://www.etoday.co.kr/news/view/2628892), 9월 23일 발표. KAIST는 원천기술, SKAI는 합성데이터 기반 고도화, 다임리서치는 디지털 트윈 시뮬레이션·이기종 로봇 통합관제 담당 | [이투데이, 2026-09-23](https://www.etoday.co.kr/news/view/2628892) | [공식 발표] |
| 글로벌 산업 조사 | [로크웰 오토메이션이 9월 22일 17개국 1,500명 대상 조사](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html) 결과 공개. 실제 응답 1,560명, 조사기관 Sapio Research | [PRNewswire, 2026-09-22](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html) | [공식 발표] |
| 운영 리스크 수치 | 지난 1년간 [46%가 사이버 사고 경험](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html)했으나 90%는 대응 역량에 자신. 45%가 향후 12개월 내 보안에 AI·ML 적용 계획, IT/OT 통합 지점이 두 번째로 취약한 영역 | [PRNewswire, 2026-09-22](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html) | [공식 발표] |
| 정책 거버넌스 | [산업통상부가 9월 22일 AI와 기업의 미래 연구회 출범](https://www.aitimes.kr/news/articleView.html?idxno=42039). 위원장 안동현 서울대 교수, 약 2개월 논의 후 민간 주도 정책 제언서 제출 예정 | [인공지능신문, 2026-09-22](https://www.aitimes.kr/news/articleView.html?idxno=42039) | [공식 발표] |

**기술적 의미**

이번 기간의 공통 축은 논점이 모델 성능에서 데이터 소유권과 운영 신뢰성으로 이동했다는 점이다. 포스코DX 사례는 범용 LLM이 아닌 공정 특화 sLLM과 멀티 에이전트 조합으로 응답 지연을 2초에서 0.9초로 줄인 것이 핵심이다. 0.1%의 오차가 가동 중단과 안전사고로 직결되는 장치산업에서는 정확도뿐 아니라 제어 루프에 물려도 되는 응답 지연이 도입 가능 여부를 가르며, 1초 미만 응답은 사람 판단을 대체하는 경계선에 해당한다. 또 하나는 학습 데이터의 70–80%가 가상공장 물리엔진에서 생성된 합성데이터라는 사실이다. 디지털 트윈이 시각화·모니터링 도구를 넘어 AI 학습 데이터 공장으로 기능하고 있음을 뜻하며, 트윈의 물리 정합성이 곧 모델 품질의 상한이 된다. SKAI·KAIST·다임리서치 협약은 이 구조를 분업으로 명시화한 사례로, 원천 AI·로보틱스 연구와 합성데이터 생성, 디지털 트윈 시뮬레이션 및 이기종 로봇 오케스트레이션을 별개 역량으로 분리해 엮었다는 점에서 단일 벤더가 전 스택을 제공하기 어렵다는 현실을 반영한다. 로크웰 조사는 이 스택이 확장될수록 IT/OT 통합 지점이 취약점이 된다는 반대편 제약을 수치로 제시했다.

**제조업·생산기술 관점 시사점**

자동차 부품사 관점에서 즉시 검토할 지점은 세 가지다. 첫째, 암묵지와 합성데이터의 권리 배분을 계약 단계에서 선제 정리해야 한다. 포스코DX가 제기한 쟁점은 철강에 국한되지 않는다. 부품사가 설비 공급사, AI 솔루션사와 함께 공정 AI를 구축할 때 생성되는 합성데이터와 학습 완료 모델의 소유권·재사용권이 불명확하면 같은 모델이 경쟁사 라인에 범용 솔루션으로 재판매되는 상황을 막을 근거가 없다. 발주 사양서에 데이터 생성물의 귀속, 파생 모델의 2차 활용 제한, 학습 로그 반출 범위를 명시하는 것이 선행 조건이다. 둘째, 숙련공 암묵지 확보에는 기술 과제보다 보상·평가 설계가 앞선다. 보상 기준이 없으면 숙련자가 노하우 제공을 회피한다는 지적은 현장 도입 프로젝트의 흔한 실패 원인이다. 도입 계획에 데이터 제공에 대한 직무발명 준용 여부와 보상 체계를 포함하지 않으면 투자 대비 데이터 수집률이 목표에 미달할 가능성이 높다. 셋째, 성과 지표를 정확도 단일 지표에서 응답 지연과 폐루프 개입률로 확장할 필요가 있다. 정확도 95%는 사람 검증을 전제한 보조 수준이며 무인 제어로 넘어가려면 예외 상황 처리 경로와 폴백 설계가 별도로 요구된다. 한계도 분명하다. 포스코DX와 SKAI 수치는 자사 발표를 매체가 전한 것으로 제3자 검증이 없고, 협약은 MOU 단계여서 실증 과제와 일정, 투자 규모가 공개되지 않았다. 로크웰 조사는 다업종 혼합 표본이므로 부품 업종 단독 수치로 인용하기에 부적절하다. 아울러 AI·디지털 트윈 확산과 동시에 IT/OT 연결 지점의 보안 설계를 같은 프로젝트 예산 안에서 다루지 않으면 라인 정지 리스크가 생산성 개선분을 상쇄할 수 있다.

**원문 자료**

- [EBN, 숙련공 은퇴 5년 남았는데, 제조업 AI 대전환 지식재산 암초 만났다, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472)
- [이투데이, KAIST-스카이인텔리전스-다임리서치, 제조 피지컬 AI 삼각 동맹 결성, 2026-09-23](https://www.etoday.co.kr/news/view/2628892)
- [PRNewswire, More Than One-Third of Industrial Organizations See Cybersecurity Risk as a Top Obstacle to Growth, 2026-09-22](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html)
- [인공지능신문, 산업부, AI 시대 기업·노동 미래 연구회 출범, 2026-09-22](https://www.aitimes.kr/news/articleView.html?idxno=42039)

### 2-4. 금형·사출 기술

**이슈 개요**

Fakuma 2026 사전 발표를 우선 확인했으나 조사 기간 48시간 내 신규 공개 건은 확인되지 않았다. [Hasco 몰드베이스·핫러너·CAD 툴](https://www.etmm-online.com/hasco-fakuma-2026-mould-base-hot-runner-cad-tools-a-6b063505fcf098037eca6ef62732fc8c/)과 [Boride 폴리싱 스톤](https://www.etmm-online.com/boride-ruby-dark-aluminium-oxide-mold-polishing-stone-a-1f0926bb809957875eb4eee91fabeffd/)은 8월 29일, [Elmet SmartShot i LSR 콜드러너](https://www.etmm-online.com/elmet-smartshot-i-lsr-cold-runner-fakuma-2026-a-e16badd655031880f7616d11b22b32e6/)는 9월 3일, [Haitian·Hennecke 인몰드 코팅](https://www.etmm-online.com/in-mould-coating-paint-free-automotive-production-a-702abfae8cf27e69ba636c9bc6f3e80c/)은 9월 14일, [Wittmann EcoFritz·Ingrinder 셀](https://www.plastech.pl/en/news/wittmann-at-fakuma-2026-consistent-process-integration-22622)은 8월 18일 게시로 모두 기간 밖이다. 대신 이번 기간의 유의미한 신규 건은 [북미 2분기 플라스틱 가공기계 통계](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)와 [Velocity Group 오하이오 신공장 가동](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant)에 집중됐다. 미국 Plastics Industry Association 산하 장비통계위원회 집계가 9월 21일 공개돼 출하 감소와 설비투자 급증의 괴리가 드러났고, 9월 22일에는 위탁 성형업체 Velocity Group이 사출기 11대를 전량 LS Mtron 신규기로 채운 80,000 ft² 신공장을 가동했다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| 2026년 2분기 출하액 | [2억 3,580만 달러](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter), 전분기 대비 -14.8%, 전년 동기 대비 -7.2% | [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter) | [공식 발표] |
| 공법별 증감 | 사출성형기 전분기 대비 -16.0%, 단축 압출 -21.7%, 이축 압출 +25.4%. 전년 동기 대비로는 [사출 +4.5%](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter), 이축 -60.1%, 단축 -35.0% | [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter) | [공식 발표] |
| 미국 거시 지표 | 2분기 실질 민간 설비투자 [연율 +27.7%](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)(1분기 +4.7%), GDP 속보치 1.5%(1분기 2.1%) | [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter) | [공식 발표] |
| 업계 심리 | 3분기 전망 [개선 35% 대 악화 35%](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)(직전 조사 32% 대 20%), 향후 12개월 개선 39% 대 악화 28% | [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter) | [공식 발표] |
| 교역 수지 | 수출 [7억 5,580만 달러](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter), 수입 2억 7,550만 달러, 흑자 4억 8,030만 달러로 전년 대비 +24.1% | [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter) | [공식 발표] |
| Velocity Group 신공장 | [80,000 ft²](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant), 오하이오주 캠브리지. 기존 2개 거점 통합, 생산 공간 25,000 ft² 이상 순증, 생산능력 3배 확대(회사 주장) | [Plastics Technology, 2026-09-22](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant) | [공식 발표] |
| 설비 구성 | 사출기 [11대, 형체력 33–1,100톤, 전량 LS Mtron 신규기](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant). 고정밀 부품과 데이터센터향 부품 대응 | [Plastics Technology, 2026-09-22](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant) | [공식 발표] |

**기술적 의미**

이 통계의 함의는 설비 사이클의 방향보다 공법 간 투자 배분의 재편에 있다. 압출계가 전년 대비 35–60% 수준으로 붕괴한 반면 사출성형기만 플러스를 유지했다는 것은 북미 투자가 범용 시트·필름·파이프에서 고부가 성형 부문, 즉 의료와 데이터센터, 전장 커넥터처럼 금형 정밀도가 곧 원가인 영역으로 이동하고 있음을 보여준다. 최근 금형 측 기술 흐름인 컨포멀 쿨링 인서트와 캐비티 압력 기반 절환 제어, 핫러너 예지보전이 왜 수요 측 지지를 받는지를 설명하는 대목이다. 출하와 설비투자의 괴리는 수주가 실물 인도로 전환되기까지 2–3분기 시차가 존재함을 뜻하며, 금형 발주가 통상 사출기 발주보다 선행하거나 병행하므로 금형 측 문의 증가는 통계에 잡히기 전 단계일 가능성이 높다. Velocity Group 사례에서 주목할 지점은 형체력 구성이다. 33톤부터 1,100톤까지 한 공장에 배치한 것은 단일 제품군 대량생산이 아니라 소형 정밀부터 중대형까지 한 지붕에서 커버하는 다품종 정밀 위탁성형 모델을 택했다는 뜻이며, 이 구성에서는 몰드베이스 규격과 냉각 커플링 위치, 이젝터 배열의 계열화 같은 금형 표준화와 금형 교환 시간이 가동률을 좌우한다. 데이터센터향 커넥터와 광트랜시버 하우징, 냉각 매니폴드류는 치수 안정성과 휨 관리가 핵심이어서 컨포멀 쿨링과 캐비티 내 압력·온도 계측, 게이트 위치 최적화가 직접 수율로 연결된다.

**제조업·생산기술 관점 시사점**

첫째, 북미 현지 사출 라인 증설을 검토 중이라면 지금이 견적과 리드타임 확보 국면이다. 설비투자가 연율 27.7% 증가했는데 출하는 줄었다는 것은 발주 잔고가 쌓이는 중이라는 뜻이고, 인도 지연과 금형 제작 슬롯 경쟁이 뒤따를 공산이 크다. 현지 증설 참여 의사가 있다면 2027년 상반기 인도 슬롯을 지금 협의하는 편이 유리하다. 둘째, 심리 조사에서 3분기 악화 응답이 직전 20%에서 35%로 급등해 개선 응답과 동률이 된 점은 경계 신호다. 단일 대형 증설보다 1차 최소 캐비티 수로 검증한 뒤 다캐비티로 확장하는 단계적 증설이 리스크 대비 유리하다. 셋째, 북미 위탁성형업체가 신규 증설에 한국산 사출기를 전량 채택한 사례가 나왔다는 것은 현지 증설에서 한국 설비·금형 패키지의 수용도가 낮지 않다는 근거다. 설비 단독이 아니라 금형·자동화·공정 셋업을 묶은 턴키 제안이 실질적 차별화 포인트가 될 수 있다. 넷째, 형체력 33–1,100톤이라는 폭넓은 구성은 금형 측 표준화 요구를 키우므로 몰드베이스 계열화, 냉각 회로 커플링 위치 통일, 핫러너 컨트롤러 인터페이스 표준화를 선제 정리해 두는 편이 유리하다. 한계로는 이 통계가 북미 1차 가공기계에 한정돼 금형 자체 발주나 아시아 물량을 포함하지 않는다는 점, 생산능력 3배는 회사 자체 주장이고 제3자 검증이 없다는 점을 감안해야 한다. 데이터센터향 부품은 자동차 대비 물량 변동성이 크고 사양 변경 주기가 짧아 금형 수명 설계 기준이 다르므로, 초기 캐비티 수를 보수적으로 잡고 인서트 교환형 구조로 설계하는 방식을 권한다.

**원문 자료**

- [Plastics Technology, Plastics Machinery Orders Rise but Shipments Drop in Second Quarter, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)
- [Plastics Technology, Velocity Group Opens New Ohio Injection Molding Plant, 2026-09-22](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant)
- [ETMM, Hasco at Fakuma 2026, 2026-08-29](https://www.etmm-online.com/hasco-fakuma-2026-mould-base-hot-runner-cad-tools-a-6b063505fcf098037eca6ef62732fc8c/)
- [ETMM, Elmet brings automated cold runner balancing to Fakuma, 2026-09-03](https://www.etmm-online.com/elmet-smartshot-i-lsr-cold-runner-fakuma-2026-a-e16badd655031880f7616d11b22b32e6/)

### 2-5. 인접 영역 동향 (금형·사출)

**초대형 2판식 사출기 (인접 영역)**

[CLF가 대만 최초의 5,000톤급 2판식 사출기 5000TPII를 공개](https://www.plastech.pl/en/news/clf-launches-taiwan-s-first-5-000-ton-injection-machine-22775)한 보도가 9월 21일 게재됐다 [2차 인용]. 자동차 부품과 물류 팔레트, 반도체 FOUP 등 초대형 성형을 겨냥하며 측면 진입 금형에 대응한다. 초대형 일체화 성형에서 2판식 구조의 형개 스트로크 확보와 측면 진입 금형 대응이 필수 요건이 되고 있음을 보여주지만, 원 발표가 9월 초에 있었던 재보도 성격이므로 신규 진전으로 보기는 어렵다(확인 필요).

**중소 몰더의 소프트웨어 자동화 전환 (인접 영역)**

[PlasticsToday가 9월 22일 스프레드시트 기반 생산관리를 연결형 생산시스템으로 대체하는 흐름](https://www.plasticstoday.com/automation/small-plastics-molders-embrace-software-automation-over-spreadsheets)을 다뤘다 [업계 분석]. 스크랩 사유 기록과 금형 이상 대응이 사후 대응에 머물러 품질관리가 어렵다는 점, 재생 원료 사용 기록 지연이 재고 오차를 낳는다는 점을 병목으로 지목했다. 인용된 제3자 통계로 제조사의 80%가 자동화를 최우선 과제로 꼽고 도입 시 비계획 다운타임 최대 50% 감소와 총 생산량 20% 증가가 보고된다고 소개했으나, 기사 외부 출처 인용이며 사출 공정 전용 검증치가 아니므로 참고 수준으로만 다뤄야 한다.

## 3. 실무 적용 검토 사항

**1) 공정 AI 공동개발 계약의 데이터 권리 조항 정비**

배경 및 필요성: 포스코DX가 제조 AI 도입의 실질 병목으로 지목한 것은 알고리즘이 아니라 합성데이터와 파생 모델의 귀속 공백이다. 학습 데이터의 70–80%가 가상공장에서 생성되는 구조에서는 데이터 생성 주체와 소유 주체가 분리되기 쉽고, 휴머노이드 파일럿에서도 동일한 구조가 반복된다. 권장 조치: 설비 공급사 및 AI 솔루션사와의 공동개발 계약 표준안에 데이터 생성물 귀속, 파생 모델의 2차 활용 제한, 경쟁사 적용 금지, 학습 로그 반출 범위를 조항으로 신설한다. 진행 중인 자동화·비전 과제 계약도 소급 점검해 공백 여부를 확인한다. 관련 출처: [EBN, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472), [로봇신문, 2026-09-22](https://www.irobotnews.com/news/articleView.html?idxno=48645)

**2) 접촉 지배 공정의 AI 자동화 아키텍처 기준 수립**

배경 및 필요성: 115개국 5,000명이 참가한 조립 챌린지에서 상위 10개 팀 전원이 인지에는 파운데이션 모델을 썼으나 90%가 삽입 단계는 규칙기반 로직으로 처리했고, 최종 실기 100% 성공은 2개 팀뿐이었다. 커넥터 삽입과 하네스 조립 같은 접촉 지배 공정에 학습 정책을 전량 적용하는 계획은 현 시점 기술 수준과 맞지 않는다. 권장 조치: 사내 AI 자동화 과제 검토서에 인지는 AI, 체결은 결정론적 제어라는 분업을 기본 전제로 명시하고, 디지털 트윈 기반 사전 검증 과제의 수용 기준에 실물 힘·토크 검증을 별도 게이트로 추가한다. 관련 출처: [Intrinsic, 2026-09-22](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge)

**3) 로봇 셀 발주 사양서의 안전 규격 기준선 갱신**

배경 및 필요성: ABB가 9월 21일 출시한 E-Device는 ISO 10218:2025 준수를 전면에 내세웠고, 다벤더 AMR 상호운용 표준 ISO 21423은 Stage 60.00으로 최종 발간 절차에 들어갔다. 신규 로봇 셀 조달의 안전·상호운용 준거가 이동 중이다. 권장 조치: RFQ 안전 준거 조항을 ISO 10218:2025 기준으로 갱신하고, AMR 조달 건에는 ISO 21423 발간 후 준수 조항을 조건부로 삽입한다. 티치펜던트 대체형 인터페이스 도입 시 비상정지와 인에이블링 스위치의 물리 모듈 분리 여부를 확인 항목으로 둔다. 관련 출처: [A3 / ABB, 2026-09-21](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices), [A3, 2026-09-22](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language)

**4) 북미 증설 대응 금형 제작 슬롯 사전 협의**

배경 및 필요성: 북미 2분기 가공기계 출하는 전분기 대비 14.8% 줄었으나 실질 민간 설비투자는 연율 27.7% 늘었다. 발주 잔고가 쌓이는 구간이며, 자본재 특성상 수주에서 인도까지 2–3분기 시차가 존재한다. 사출성형기만 전년 대비 플러스를 유지한 점도 고부가 성형 수요가 살아 있음을 뜻한다. 권장 조치: 북미 고객 증설 계획을 보유한 사업부는 2027년 상반기 인도 기준으로 금형 제작 슬롯과 사출기 견적을 지금 협의한다. 다만 3분기 악화 전망이 35%로 급등했으므로 단일 대형 증설보다 최소 캐비티 검증 후 확장하는 단계적 방식을 택한다. 관련 출처: [Plastics Technology, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)

**5) 다품종 대응 금형 표준화 항목 정리**

배경 및 필요성: Velocity Group이 형체력 33–1,100톤 사출기 11대를 한 공장에 배치한 것은 다품종 정밀 위탁성형 모델이다. 이 구성에서는 금형 교환 시간과 사양 호환성이 가동률을 직접 좌우하며, 데이터센터향 부품처럼 사양 변경 주기가 짧은 품목이 늘수록 표준화 효과가 커진다. 권장 조치: 몰드베이스 계열화, 냉각 회로 커플링 위치 통일, 핫러너 컨트롤러 인터페이스 표준화 항목을 사내 설계 표준에 반영한다. 변동성이 큰 품목은 초기 캐비티 수를 보수적으로 잡고 인서트 교환형 구조로 설계해 사양 변경 대응 비용을 낮춘다. 관련 출처: [Plastics Technology, 2026-09-22](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant)

## 4. 출처 (통합)

**스마트제조·자동화**

- [Intrinsic, Introducing Intrinsic Core: An open source approach to Physical AI, 2026-09-22](https://www.intrinsic.ai/blog/posts/introducing-intrinsic-core)
- [Intrinsic, Robotics is hard - it's much easier when 5,000 developers get involved, 2026-09-22](https://www.intrinsic.ai/blog/posts/ai-for-industry-challenge)
- [A3, Google's Intrinsic Launches Open-source Core Toolkit, 2026-09-22](https://www.automate.org/ai/industry-insights/googles-intrinsic-launches-open-source-core-toolkit)
- [A3 / ABB, ABB Robotics E-Device simplifies robot interaction on customers' own devices, 2026-09-21](https://www.automate.org/robotics/news/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices)
- [A3 / Active Silicon, Active Silicon Launches 100 Gbps FireBird CoaXPress over Fiber Frame Grabber, 2026-09-21](https://www.automate.org/vision/news/active-silicon-launches-100-gbps-firebird-coaxpress-over-fiber-frame-grabber)
- [Active Silicon, FireBird CoaXPress over Fiber Frame Grabber 제품 사양, 게시일 미표기](https://www.activesilicon.com/products/firebird-coaxpress-over-fiber-frame-grabber-100g/)
- [A3, The Robot Industry Is Finally Getting a Common Language, 2026-09-22](https://www.automate.org/robotics/industry-insights/the-robot-industry-is-finally-getting-a-common-language)
- [헬로티, 창원서 10월 The Next AI 2026 개최, 2026-09-22](https://www.hellot.net/news/article.html?no=115100)

**로보틱스·모빌리티**

- [전자신문, 휴머노이드 경쟁축 이동, 현장 배치·AI·데이터가 승부처, 2026-09-22](https://www.etnews.com/20260922000286)
- [뉴스트리, 휴머노이드 서밋 서울 2026 22일 개막, 2026-09-22](https://www.newstree.kr/newsView/ntr202609210017)
- [로봇신문, 로브로스, 자체 개발 휴머노이드 이그리스-C 전신 원격조작 공개, 2026-09-22](https://www.irobotnews.com/news/articleView.html?idxno=48645)
- [로봇신문, ETRI, 피지컬 AI 국제표준화 주도한다, 2026-09-21](https://www.irobotnews.com/news/articleView.html?idxno=48627)
- [테크월드, ETRI, ITU-T 피지컬 AI 국제표준화 논의체 신설 주도, 2026-09-20](https://www.epnc.co.kr/news/articleView.html?idxno=407166)

**AI·디지털전환**

- [EBN, 숙련공 은퇴 5년 남았는데, 제조업 AI 대전환 지식재산 암초 만났다, 2026-09-23](https://www.ebn.co.kr/news/articleView.html?idxno=1725472)
- [이투데이, KAIST-스카이인텔리전스-다임리서치, 제조 피지컬 AI 삼각 동맹 결성, 2026-09-23](https://www.etoday.co.kr/news/view/2628892)
- [PRNewswire, More Than One-Third of Industrial Organizations See Cybersecurity Risk as a Top Obstacle to Growth, 2026-09-22](https://www.prnewswire.com/news-releases/more-than-one-third-of-industrial-organizations-see-cybersecurity-risk-as-a-top-obstacle-to-growth-new-global-study-finds-302885138.html)
- [인공지능신문, 산업부, AI 시대 기업·노동 미래 연구회 출범, 2026-09-22](https://www.aitimes.kr/news/articleView.html?idxno=42039)

**금형·사출 기술**

- [Plastics Technology, Plastics Machinery Orders Rise but Shipments Drop in Second Quarter, 2026-09-21](https://www.ptonline.com/news/plastics-machinery-orders-rise-but-shipments-drop-in-second-quarter)
- [Plastics Technology, Velocity Group Opens New Ohio Injection Molding Plant, 2026-09-22](https://www.ptonline.com/news/velocity-group-opens-new-ohio-injection-molding-plant)
- [Plastech, CLF launches Taiwan's first 5,000-ton injection machine, 2026-09-21](https://www.plastech.pl/en/news/clf-launches-taiwan-s-first-5-000-ton-injection-machine-22775)
- [PlasticsToday, Small Plastics Molders Embrace Software Automation Over Spreadsheets, 2026-09-22](https://www.plasticstoday.com/automation/small-plastics-molders-embrace-software-automation-over-spreadsheets)
- [ETMM, Hasco at Fakuma 2026: Mould Bases, Hot Runners & CAD Tools, 2026-08-29](https://www.etmm-online.com/hasco-fakuma-2026-mould-base-hot-runner-cad-tools-a-6b063505fcf098037eca6ef62732fc8c/)
- [ETMM, Elmet brings automated cold runner balancing to Fakuma, 2026-09-03](https://www.etmm-online.com/elmet-smartshot-i-lsr-cold-runner-fakuma-2026-a-e16badd655031880f7616d11b22b32e6/)
- [ETMM, Haitian and Hennecke partner on in-mould coating, 2026-09-14](https://www.etmm-online.com/in-mould-coating-paint-free-automotive-production-a-702abfae8cf27e69ba636c9bc6f3e80c/)
- [ETMM, New Ruby Dark Mold Polishing Stone delivers longer life and consistent finishes, 2026-08-29](https://www.etmm-online.com/boride-ruby-dark-aluminium-oxide-mold-polishing-stone-a-1f0926bb809957875eb4eee91fabeffd/)
- [Plastech, Wittmann at Fakuma 2026 - consistent process integration, 2026-08-18](https://www.plastech.pl/en/news/wittmann-at-fakuma-2026-consistent-process-integration-22622)

> 본 보고서의 시장 규모·점유율 수치 중 일부는 2차 출처의 추정값을 인용한 것이다. 사내 의사결정에는 1차 출처(기업 공식 발표·표준화기구·학회 자료) 재확인이 필요하다.
