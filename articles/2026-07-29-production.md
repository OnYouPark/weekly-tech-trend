---
title: 생산기술 신규기술 브리핑 - 2026년 7월 5주차
date: 2026-07-29
type: production
period: 2026년 7월 5주차
tags: [우진플라임, PLAIMM-X, Meusburger, WITTMANN, HiQ Packing, EcoPrimus, Unitree, RobotStudio HyperReality]
summary: 우진플라임 PLAIMM-X의 플래시 감지·형체력 자동 최적화 판정 원리 공개, Meusburger 이젝터 컨피규레이터 절단 특주 통합, WITTMANN Fakuma 2026 생산셀 3종 구성 특정. 로봇 축은 기간 내 신규 공개 없음
---

# 생산기술 신규기술 브리핑 - 2026년 7월 5주차

> 2026-07-23 – 2026-07-29 사출성형·로봇제조 신규 기술 변화

이번 주는 4축 합계 5건으로 한산했다. 유럽 사출기 업체의 Fakuma 2026(10/12 – 16) 사전 보도자료가 7월 초 – 7월 22일에 집중 배포되어 조사 기간 직전에 몰렸고, 로봇 축은 6월 Automate 2026과 7월 중순 발표 이후 공백 구간에 들어갔다. 분량은 확인된 근거 범위로 제한했다.

## 금주 핵심 요약

### 사출성형기술

#### 우진플라임 PLAIMM-X — 플래시 감지·형체력 자동 최적화의 판정 원리가 기능 단위로 공개됨

- 확인 내용: 실시간 데이터 수집·분석 기반 통합 제어 플랫폼으로 6개 기능군이 명시됐다. Flash Monitoring은 대형 투플레이튼기에서 타이바 위치 변화, 중소형 토글기에서 타이바 신장력을 지표로 플래시 발생을 실시간 판정한다. Anti Flash는 버가 발생하지 않는 최소 형체력을 자동 설정한다. 그 외 Weight Control(재생원료 사용 환경의 중량 편차 보정), Energy Monitoring(사출·형체·계량·냉각 공정별 소비 및 제품당 에너지 비용 산출), Smart Sequencer, Edge Controller(금형온조기·칠러·드라이어를 단일 플랫폼 연계)로 구성된다. 불량률·에너지 절감률 등 정량 수치는 제시되지 않았다.
- 관련 근거: [산업일보(한국어), 2026-07-23](https://kidd.co.kr/news/246799) [2차 인용] — 업체 서면 코멘트 인용, 공식 보도자료 원문 미확인
- 기존 대비 변화: PLAIMM-X 플랫폼 자체는 K 2025 및 IN-HOUSE 2026(4월)에서 이미 공개됐다. 신규성은 기능 단위 구성과 판정 원리의 구체화에 있다. 형체 기구 종류에 따라 서로 다른 물리량을 플래시 판정 지표로 쓰고, 그 신호를 형체력 자동 하향 최적화로 되돌리는 폐루프 구성이 명시된 점이 진전이다. 분류: 기존기술 고도화.
- 생산기술 시사점: 캐비티 압력 센서를 금형에 내장하지 않고 사출기 측 타이바 신호만으로 버를 판정하는 접근이다. 금형 개조 없이 기존 설비에 얹을 수 있다는 점이 실무상 의미가 있으나, 캐비티 압력 계측 대비 감도·응답성은 별도 검증 대상이다. 형체력을 필요 최소로 자동 하향하는 기능은 금형 마모·타이바 부하 저감과 형체 에너지 절감을 동시에 겨냥한 것으로, 대형 금형·고형체력 조건에서 효과 폭이 커지는 성격이다.
- 확인 필요: 적용 수준(양산 적용 여부 / 기술 소개 단계) 불명확. 적용 가능 기종 범위, 기능별 옵션·기본 탑재 구분, 형체력 저감 폭과 에너지 절감 정량치, Edge Controller 지원 통신 규격(OPC UA·EUROMAP 등) 모두 미확인.

### 로봇제조기술

이번 주 공식 출처 기준 신규 기술 변화 없음. 축 ③(산업·협동로봇·SW)은 0건, 축 ④(물류·휴머노이드·EOAT)는 제품 공개 1건과 벤치마크 신설 1건이 확인됐으나 모두 1차 근거를 확보하지 못해 핵심 요약에 올리지 않았다. 상세는 아래 참조.

## 사출성형기술 상세

### Meusburger 이젝터 컨피규레이터 — 절단 가공 특주까지 온라인 구성·가격·납기·CAD 즉시 산출

- 확인 내용: 표준 이젝터 선정과 함께 "길이 절단 후 즉시 조립 가능" 사양을 컨피규레이터에서 직접 구성할 수 있고, 길이 공차 0/+0.02 mm로 제공된다. 구성 완료 시 가격·납기·CAD 데이터가 즉시 산출되며, 컨피규레이터가 표준품 여부와 해당 표준품을 절단 치수의 기준품으로 쓸 수 있는지를 자동 검증한다. 병행 공개된 이젝터 포트폴리오는 DLC 코팅 이젝터(마찰·마모 저감), 회전방지(anti-twist) 이젝터·코어핀(버 저감·재현성), 벤팅용 이젝터핀(핀 샤프트 거의 전장에 벤팅면, 임의 길이 절단 가능, 기존 금형 레트로핏 적합 명시), 블레이드 이젝터(장 스트로크용 연장 사양, 전 치수 DLC 코팅 사양)로 구성된다.
- 관련 근거: [ETMM(Vogel), 2026-07-23](https://www.etmm-online.com/meusburger-launches-new-configurator-for-faster-ejector-selection-a-6934e7162e2fdaf2d26d82a10afb6daf/) [공식 발표] — Meusburger 공식 보도자료 기반
- 기존 대비 변화: Meusburger는 컨피규레이터 계열 도구를 이전부터 운영해 왔다. 신규 부분은 이젝터 전용 도구가 표준품 선정에 그치지 않고 절단 가공 특주까지 동일 흐름에서 처리하고, 표준품 기준 적용 가능성을 자동 판정하는 점이다. 벤팅 기능 통합 이젝터핀의 레트로핏 적용 명시도 카탈로그 대비 적용 범위 확대에 해당한다. 분류: 기존기술 고도화 및 적용 범위 확대.
- 생산기술 시사점: 금형 설계와 구매·제작 사이의 반복 견적·도면 확인 공수를 줄이는 방향이다. 0/+0.02 mm 절단 공차가 표준 제공되면 금형 제작 현장의 이젝터 길이 맞춤 가공을 외주 표준품으로 대체할 여지가 생긴다. 벤팅 이젝터핀은 가스빼기 불량(탄화·미성형)이 문제되는 기존 금형에 코어 재가공 없이 대응할 수 있는 수단으로, 금형 유지보수 관점의 실용성이 있다. DLC 코팅 표준화는 이젝터 소착·마모에 따른 설비 정지 요인을 줄이는 방향이다.
- 확인 필요: 컨피규레이터의 대상 지역·언어 및 국내 이용 가능 여부, 절단 특주품 실제 납기, DLC 코팅품 수명 정량 데이터, 벤팅 이젝터핀의 벤팅 갭 치수·적용 가능 수지 범위, 회전방지 이젝터의 위치 정밀도 수치 모두 미확인.

### WITTMANN Fakuma 2026 생산셀 3종 — FlexCell plus의 셀 구성·투입 로봇 기종·보조 공정제어 기능이 처음 특정됨

- 확인 내용: 적용 수준은 전시 데모 예고이며 양산 적용 사례가 아니다. 셀 1은 전동식 EcoPrimus(형체력 1,000 kN, 사출속도 최대 200 mm/s, B8X 제어)로 인슐린펜 보호캡을 Kistler 8캐비티 금형으로 성형하고, FlexCell plus 자동화 셀에 Primus 116 리니어 로봇을 결합한다. 박스 이송 시스템이 안전 하우징과 일체 구조이며, FlexCell은 타사 성형기에도 리트로핏 가능하다고 명시됐다. 디지털 보조 기능 HiQ Packing은 전환점 및 보압 구간의 스크루 거동을 제어해 캐비티 간 압력 분포·충전 균일화를 목표로 한다. 셀 2는 MicroPower 15/10(사출중량 0.05 – 4 g)으로 lab-on-a-chip 시험편(투명 PP, 채널경 0.04 mm, 코너 R 0.005 mm)을 NanoVoxel 3D프린팅 2캐비티 인서트로 성형하며, 회전테이블·온조기·품질검사까지 2 m² 내 통합하고 라미나플로우 박스로 클린룸에 대응한다. 셀 3은 EcoPower 110/350 B8X LSR 사양에 4캐비티 금형, W918 리니어 로봇, Nexus Elastomer Systems ServoMix X200 배합·계량기를 조합한다.
- 관련 근거: [PlastXnow(독일어), 2026-07-24](https://www.plastxnow.de/fakuma-2026-wittmann-ecoprimus-vollelektrische-spritzgiessmaschine-effizienz-a-8e3e07053289e827b11f49cdc7e7bf39/) [공식 발표] — WITTMANN 보도자료 기반. [WITTMANN Group 공식 이벤트 페이지, 확인일 2026-07-29](https://www.wittmann-group.com/en/event-fakuma-2026) [공식 발표]
- 기존 대비 변화: FlexCell plus 자체는 2026-07-22자로 기보도했다. 이번 진전은 결합 로봇 기종이 Primus 116으로 특정된 점, 자율 포장 셀과 보조 공정제어(HiQ Packing)를 동일 셀에서 묶어 제시한 점, 마이크로 성형 셀을 2 m² 통합 구성으로 제시한 점, LSR 셀의 취출로봇과 외부 계량기 연동 구성을 공개한 점이다. 분류: 기존기술 고도화.
- 생산기술 시사점: 다캐비티 소형 부품(커넥터 캡, 클립류)의 취출–적재–포장을 셀 내부에서 완결하는 구성이 표준 모듈로 정착하는 흐름이며, 후공정 인력 배치와 중간 재공 버퍼 설계에 영향을 준다. 보압 구간 스크루 거동 제어형 보조기능은 다캐비티 충전 불균일에 기인한 치수 편차 관리 수단으로, 캐비티별 압력 센서 기반 관리와 병행 검토 대상이다.
- 확인 필요: HiQ Packing의 캐비티 간 중량·치수 산포 개선율 미공개. FlexCell plus 무인 운전 지속시간이 "수 시간"으로만 표기되고 박스 용량·기종별 값 미공개. Primus 116의 페이로드·사이클타임 및 대형 성형기 대응 범위 미확인. WITTMANN 공식 영문 보도자료의 정확한 게시 일자는 월 단위만 표기되어 독일 산업지 게시일로 대체 확인.

### 축 ①·② 기간 내 신규 발표 없음(공식 뉴스룸 직접 확인)

| 업체 | 확인된 최신 항목 | 판정 |
|------|----------------|------|
| ARBURG | 2026-07-02 Fakuma, 2026-07-20 Vietnamplas | 기간 외 |
| ENGEL | 공식 뉴스룸 JS 렌더링으로 목록 미취득 | 확인 필요 |
| Sumitomo (SHI) Demag | Fakuma 참가 기종 공지(기술 신규성 없음) | 제외 |
| Yushin | 상품 뉴스 최신 2025-09-02 | 기간 내 0건 |
| Star Automation | 2026-07-02 공지 | 기간 내 0건 |
| Harmo | 2026-04-30 공지 | 기간 내 0건 |
| Matsui | 2026-07-01 현지법인 공지 | 기간 내 0건 |
| Sepro | 2026-06-16 하반기 전시 일정 | 기간 내 0건 |
| Conair | 2026-01-22 MD&M West 데모 | 기간 내 0건 |
| 소재(Covestro·Röhm·Trinseo·Mitsubishi Chemical·LG화학·롯데케미칼) | 기간 내 사출 관련 신규 그레이드·양산 적용 발표 미확인 | 기간 내 0건 |
| motan·Moretto·Sailor·Alfa Robot·Hekuma·Waldorf Technik | 공식 뉴스룸 직접 열람 실패 | 미확인 |

Haitian X-Injection, FANUC ROBOSHOT S350C, KraussMaffei CFP·PX 시리즈, LS엠트론 Molding 365(2026-07-02), 유도 TINA PLS-AG(2026-06-26)는 모두 2026년 발표이나 조사 기간 밖이다.

## 로봇제조기술 상세

### 축 ③ 산업·협동로봇·로봇 SW — 기간 내 신규 공개 0건

FANUC(2026-07-16), Yaskawa(2026-07-15), Kawasaki(2026-07-16), ABB(2026-07-22), Techman Robot(2026-07-01), Universal Robots(2026-06-18), Nachi(2026-03-20) 공식 뉴스룸과 The Robot Report·Automation World·A3 Automate·로봇신문의 해당 주 게시물을 직접 확인했으나, 조사 기간 내 신규 제품·기능·적용 사례·표준 변화는 확인되지 않았다. KUKA·두산로보틱스 뉴스 목록은 JS 렌더링으로 본문 미취득, Epson·Denso Wave·Mitsubishi Electric·Stäubli·Omron·한화로보틱스·Siemens·Beckhoff·Rockwell·RoboDK·Visual Components는 직접 열람에 실패해 확인 필요로 남긴다.

기간 경계 항목으로 ABB Robotics가 2026-07-22 NVIDIA와 공동 발간한 Physical AI 백서 및 RobotStudio HyperReality(RobotStudio + NVIDIA Omniverse)가 있다. 선별 고객 시험을 거쳐 2026년 하반기에 RobotStudio 사용자 6만 명 이상에게 공개 예정으로, 로봇 비전 리스크 검증을 실물 라인에서 설계 단계로 앞당기는 방법론을 제시한다. 근거는 [A3 Automate, 2026-07-22](https://www.automate.org/robotics/news/abb-robotics-and-nvidia-white-paper-defines-transformative-impact-of-physical-ai-on-manufacturing) [공식 발표]. 공개일이 조사 기간 직전이므로 핵심 항목에서는 제외하되, 하반기 일반 공개 시점에 재확인이 필요하다. 비전 가이드 로봇 도입 검증 공수를 줄이는 상용 경로가 제시된 점이 생산기술 관점의 의미다. 실제 배포 시점, 기존 라이선스와의 관계, 양산 라인 적용 사례는 미확인.

### 축 ④ 물류·휴머노이드·EOAT — 2건, 모두 1차 근거 미확보

#### Unitree Super Athlete AS2-W — 휠·레그 하이브리드 이동 플랫폼 공개, 연속 적재 16 kg·무적재 주행 30 km 이상

- 확인 내용: 회사가 직접 제시한 수치는 연속 적재 16 kg, 무적재 주행거리 30 km 이상 두 가지다. 휠과 레그를 결합한 4족 계열 플랫폼으로, 평지는 휠 주행으로 항속거리를 확보하고 계단·요철 구간에서 레그를 사용한다. 제어는 실시간 강화학습 기반 저수준 컨트롤러로 설명된다. 휴머노이드가 아니라 4족 이동 플랫폼이다.
- 관련 근거: [explainx.ai, 2026-07-25](https://explainx.ai/blog/unitree-as2-w-wheel-legged-robot-july-2026) [2차 인용] — 원문은 Unitree 공식 X 게시물이나 본문 반환 실패로 1차 확인 불가
- 기존 대비 변화: 기존 AS2 계열에 휠 구동을 추가해 항속거리를 확보한 파생 구성이다. 질량·표준 적재·장애물 통과 높이 등 2차 매체 수치는 AS2 패밀리 값과 혼재되어 일관되지 않으며, AS2-W 전용 데이터시트는 미공개다. 분류: 신제품 공개, 제조 적용 미확인.
- 생산기술 시사점: 공장 내 옥외·비평탄 구간(야드, 동 간 이동, 배관·설비 순회 점검)의 이동 자원으로 검토 가치가 있다. 연속 16 kg은 라인사이드 대차·파렛트 반송급 하중이 아니므로 AMR 대체재가 아니라 점검·소물 운반 보완재로 보는 것이 적절하다.
- 확인 필요: 전용 공식 데이터시트(질량, IP 등급, 장애물 통과 높이, 가격), 산업용·EDU SKU 구분, 국내 서비스망, 수출 규제 분류 모두 미확인.

#### IEEE-RAS Humanoids 2026 Loco-Manipulation Challenge — 상용 휴머노이드와 연구용 로봇을 동일 서킷에서 비교하는 공개 벤치마크 신설

- 확인 내용: 2026-07-24 논문 접수 마감, 200편 이상 접수. 12월 6 – 9일 Santa Clara 본회의에 Loco-Manipulation Challenge가 신설되며, 10 – 15개 팀이 연습 1일·경기 2일 구성으로 이동성, 조작·손재주, 추론 3개 항목을 평가받는다. 일부 상용 휴머노이드 플랫폼이 학술 연구 로봇과 동일 서킷에서 채점되고 결과가 공개된다. 채점은 자율 수행에 가점을 주되 원격조작 수행에도 점수를 인정한다. 워크숍·경기 팀 제안 마감은 8월 3일이다.
- 관련 근거: [Tech Times, 2026-07-25](https://www.techtimes.com/articles/321587/20260725/humanoid-robots-enter-factory-ieee-humanoids-2026-sets-labor-displacement-its-defining-theme.htm) [2차 인용] — 학회 공식 페이지 직접 확인 미수행
- 기존 대비 변화: 그간 휴머노이드 성능 근거는 업체 자체 시연과 파일럿 사례에 의존했다. 제3자가 설계한 동일 서킷에서 상용기와 연구기를 함께 채점하고 결과를 공개하는 구조는 이 축에서 처음이다. 원격조작 수행에 점수를 인정하는 설계는 현재 자율 수준의 상한을 드러내는 장치로 볼 수 있다.
- 생산기술 시사점: 휴머노이드 도입 판단의 최대 난점은 업체 제시 성능을 교차 검증할 공통 척도가 없다는 점이다. 12월 결과가 공개되면 이동과 조작 동시 수행 능력을 업체 간 동일 기준으로 비교할 수 있다. 다만 대회 성적은 정형화된 서킷 성능이며 양산 가동률·MTBF와는 별개다.
- 확인 필요: 참가 확정 상용 플랫폼 명단, 과제 서킷 세부 규격, 채점표 공개 범위 미확인.

### 축 ④ 기간 밖으로 확인되어 제외한 항목

7월 24 – 26일 다수 유통된 BMW Figure 03 Spartanburg 물류 시퀀싱 투입(40대) 보도는 2026-06-25 BMW 공식 발표의 재보도다. BMW Leipzig Hexagon AEON 파일럿 및 Physical AI 역량센터는 2026-02-27 발표, Agility Digit – Toyota Canada 상업 계약은 2026-02-19 발표, NEURA Robotics NEURA Gym은 2026-07-22, Samsung RX 사업추진실 신설은 2026-07-21, OMRON LD-150·LD-300은 Automate 2026(6월), ABB Flexley Stack F712·AMR Studio는 2026-07-07, 두산 PalletizHD+는 2026-07-09이다. Agility Robotics 상장 관련(2026-07-28), Humanoid Series A(2026-07-23)는 투자·상장 항목으로 제외했다. Boston Dynamics Atlas 초도 상용기 출하 완료 여부는 공식 근거를 확인하지 못했다(확인 필요).

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출기 측 센서 신호(타이바 위치·신장력)만으로 버를 판정하고 형체력을 자동 하향하는 폐루프 구성 공개 | 금형 개조 없이 기존 설비에 적용 가능한 품질·에너지 관리 경로. 캐비티 압력 계측 대비 감도 검증이 전제 |
| 기술 변화 | 금형 표준부품 조달이 절단 특주·CAD·납기까지 온라인 구성으로 통합 | 금형 제작 리드타임 단축 및 사내 맞춤 가공 공수 외주 대체 여지 |
| 업체 변화 | 사출기 업체가 성형기·자동화 셀·주변장치·보조 공정제어를 단일 제어 플랫폼으로 묶어 제시하는 흐름이 지속 | 설비 발주 단위가 단품에서 셀로 이동. 사양 검토 시 통신 규격 개방성이 판단 기준으로 부상 |
| 적용사례 변화 | 신규 양산 적용 사례 0건. 확인된 것은 전시 데모 예고(Fakuma 2026)와 제품 공개 수준 | 하반기 전시 이후 양산 데이터 공개 시점에 재평가 필요 |
| 확인 필요 | 우진플라임 PLAIMM-X 정량 성능, ENGEL·KUKA·두산로보틱스 등 JS 렌더링 뉴스룸 미취득, Unitree AS2-W 데이터시트, Atlas 출하 실적 | 다음 조사에서 공식 보도자료 원문 및 데이터시트 확보 우선 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | 우진플라임 PLAIMM-X 공식 보도자료·기술자료 | 사출 공정제어 | 플래시 판정 정확도, 형체력 저감 폭, 지원 통신 규격, 적용 기종 확정 |
| 2 | ENGEL Fakuma 2026 사전 보도자료 배포 | 사출기 | 축 ① 주요 업체 중 유일하게 미배포. 신규 기종·제어 기능 확인 |
| 3 | ABB RobotStudio HyperReality 배포 일정 및 라이선스 조건 | 로봇 SW | 하반기 일반 공개 여부, 양산 라인 적용 사례 유무 |
| 4 | Fakuma 2026 후속 보도자료(KraussMaffei, Sumitomo Demag, Netstal 등) | 사출기·금형 | 10월 전시 전 8 – 9월 배포분에서 신규 기종·기능 확인 |
| 5 | Boston Dynamics Atlas 상용기 출하 및 초기 가동 데이터 | 휴머노이드 | 로드맵 확정 이후 실제 출하·가동 근거 확보 |
| 6 | motan·Moretto·Hekuma·Waldorf Technik 공식 뉴스룸 | 사출 주변장치 | 이번 주 열람 실패 구간의 발표 유무 확인 |

## 출처

### 사출성형기술

- [산업일보(한국어), 우진플라임 PLAIMM-X 관련 보도, 2026-07-23](https://kidd.co.kr/news/246799)
- [ETMM(Vogel), Meusburger launches new configurator for faster ejector selection, 2026-07-23](https://www.etmm-online.com/meusburger-launches-new-configurator-for-faster-ejector-selection-a-6934e7162e2fdaf2d26d82a10afb6daf/)
- [PlastXnow(독일어), Fakuma 2026 WITTMANN EcoPrimus, 2026-07-24](https://www.plastxnow.de/fakuma-2026-wittmann-ecoprimus-vollelektrische-spritzgiessmaschine-effizienz-a-8e3e07053289e827b11f49cdc7e7bf39/)
- [WITTMANN Group, Fakuma 2026 이벤트 페이지, 확인일 2026-07-29](https://www.wittmann-group.com/en/event-fakuma-2026)
- [ARBURG, News & Press Releases, 확인일 2026-07-29](https://www.arburg.com/en/us/company/news-press-releases/)
- [Yushin(일본어), 상품 뉴스릴리스, 확인일 2026-07-29](https://www.yushincompany.jp/newsrelease/product/)
- [Sepro, News, 확인일 2026-07-29](https://www.sepro-group.com/about-us/news)
- [Matsui(일본어), 뉴스, 확인일 2026-07-29](https://matsui.net/jp/info/news/)
- [Conair, News & Press, 확인일 2026-07-29](https://www.conairgroup.com/about/news-press/)
- [Plastics Today, Injection Molding, 확인일 2026-07-29](https://www.plasticstoday.com/plastics-processing/injection-molding)

### 로봇제조기술

- [A3 Automate, ABB Robotics and NVIDIA white paper, 2026-07-22](https://www.automate.org/robotics/news/abb-robotics-and-nvidia-white-paper-defines-transformative-impact-of-physical-ai-on-manufacturing)
- [explainx.ai, Unitree AS2-W wheel-legged robot, 2026-07-25](https://explainx.ai/blog/unitree-as2-w-wheel-legged-robot-july-2026)
- [Tech Times, IEEE Humanoids 2026, 2026-07-25](https://www.techtimes.com/articles/321587/20260725/humanoid-robots-enter-factory-ieee-humanoids-2026-sets-labor-displacement-its-defining-theme.htm)
- [FANUC(일본어), What's New, 확인일 2026-07-29](https://www.fanuc.co.jp/en/whatsnew/)
- [Yaskawa(일본어), 뉴스릴리스, 확인일 2026-07-29](https://www.yaskawa.co.jp/newsrelease)
- [Kawasaki, Newsroom Robotics, 확인일 2026-07-29](https://global.kawasaki.com/en/corp/newsroom/category/robot/index.html)
- [Universal Robots, News Center, 확인일 2026-07-29](https://www.universal-robots.com/news-and-media/news-center/)
- [Techman Robot, News, 확인일 2026-07-29](https://www.tm-robot.com/en/company/news)
- [The Robot Report, Industrial Robots, 확인일 2026-07-29](https://www.therobotreport.com/category/robots-platforms/industrial-robots/)
- [BMW Group PressClub, humanoid robots in production in Germany, 2026-02-27](https://www.press.bmwgroup.com/global/article/detail/T0455864EN/bmw-group-to-deploy-humanoid-robots-in-production-in-germany-for-the-first-time?language=en)
- [Locus Robotics, News, 확인일 2026-07-29](https://locusrobotics.com/news)
- [AutoStore, News, 확인일 2026-07-29](https://www.autostoresystem.com/news)
- [Zimmer Group, Product News, 확인일 2026-07-29](https://www.zimmer-group.com/en-us/company/news/product-news)
- [OMRON(일본어), 뉴스 2026, 확인일 2026-07-29](https://www.omron.com/jp/ja/news/2026/)
