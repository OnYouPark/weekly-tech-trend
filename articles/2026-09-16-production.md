---
title: 생산기술 신규기술 브리핑 - 2026년 9월 3주차
date: 2026-09-16
type: production
period: 2026년 9월 3주차
tags: [ENGEL EVA, Kistler ComoNeo, Husky HyCAP, Moretto, Universal Robots Gen 7, Agility Digit 5, ISO 21423, IMTS 2026]
summary: 사출은 AI가 조언 단계를 넘어 작업자 승인 후 사출기 제어계에 파라미터를 직접 쓰는 구조가 ENGEL에서 처음 제시되고, Kistler는 캐비티 압력에 금형 온도 신호를 더해 사출-보압 절환을 제어하는 구성을 공개. 로봇은 IMTS 2026 개막에 맞춰 Universal Robots가 힘-토크 센싱과 임피던스 제어를 암 내부로 흡수한 7세대 플랫폼을, Agility Robotics는 가동 대 충전 비율을 10대 1로 끌어올린 Digit 5를 공개
---

# 생산기술 신규기술 브리핑 - 2026년 9월 3주차

> 2026-09-10 – 2026-09-16 사출성형·로봇제조 신규 기술 변화

이번 주는 두 전시회의 발표 주기가 겹쳤다. 사출은 Fakuma 2026(10/12 – 10/16, 프리드리히스하펜) 사전 발표의 2차 물결이, 로봇은 9월 14일 개막한 IMTS 2026(시카고, 9/14 – 9/19) 현장 발표가 동시에 나왔다. 4축 합계 신규 건수는 18건이며, 이 중 중복을 정리한 15건을 아래에 싣는다.

## 금주 핵심 요약

### 사출성형기술

#### ENGEL — Virtual Assistant EVA, 조언에서 제어계 쓰기로 이동

- 확인 내용: EVA가 자연어 질의를 설비·현재 잡 문맥에 매핑해 조치를 제안하고, 작업자가 승인하면 변경값을 사출기 제어계로 직접 전달하는 4단계 구조(Understand – Interpret – Explain and recommend – Act with control)로 개정됐다. 기반은 신규 공개된 ENGEL AI Interface로, 설비 문맥을 구조화해 AI 애플리케이션에 제공하는 데 Model Context Protocol(MCP)을 일부 채택했다. 신규 ENGEL·WINTEC 셀에는 옵션, CC300 또는 C3 제어기 탑재 기존 설비에는 레트로핏으로 제공. Fakuma 2026(Hall A5, Stand 5203)에서 e-mac 80 기반 자율 사출셀로 시연 예정.
- 관련 근거: [PlasticsToday, 2026-09-11](https://www.plasticstoday.com/injection-molding/engel-s-ai-assistant-now-controls-injection-molding-machines) [공식 발표] / [ETMM, 2026-09-14](https://www.etmm-online.com/engel-eva-ai-virtual-assistant-injection-moulding-a-0a8d95da685297424cd3a1c800571727/) [공식 발표]
- 기존 대비 변화: K 2025에서 공개된 EVA는 문서 검색·체크리스트 생성 중심의 질의응답 도구였다. 이번 릴리스에서 승인 기반 쓰기(write) 경로가 열려 AI 기능이 자문에서 실행으로 이동했다. MCP 채택과 레트로핏 경로 명시도 이번이 처음이다.
- 생산기술 시사점: 사출 공정의 AI 적용이 이상 감지·권고에서 승인 기반 자동 보정으로 넘어가는 구간이다. 작업자 승인 단계를 유지한 반자율 구조는 품질 책임 소재를 남기면서 조건 이탈 대응 시간을 줄이는 절충이다. 다만 AI가 조건값을 직접 쓰는 이상, IATF 16949 관점의 변경점 관리(승인자·시각·근거 이력)와 파라미터 상하한 잠금이 도입 전제 조건이 된다. 레트로핏 대상이 CC300·C3로 한정된 점은 보유 설비 세대별 적용 범위 판단 기준이다.
- 확인 필요: 쓰기 가능한 파라미터 범위(보압·사출속도·계량·온조 중 어디까지), 감사추적 기록 형식, 레트로핏 비용·소요 기간, 양산 라인 적용 실적. 현재는 제품 출시 발표 및 전시 데모 예고 수준.

#### Kistler — MedRelease Suite, 캐비티 압력에 금형 온도 신호를 더한 절환 제어

- 확인 내용: Fakuma 2026(Hall A3, Stand 3210) 공개. 구성은 직경 1 mm 캐비티 압력센서 6183D, 신세대 ComoNeo 공정 모니터링·제어기(21인치 디스플레이, 사이클별 품질 판정), 모델 기반 개별 성형품 품질 예측 ComoNeoPREDICT, 모델 개발·검증용 OPTIMIZE, 중앙 플릿 관리 및 사용자별 권한·audit trail을 담당하는 AkvisIO. 신규 기능으로 제어 알고리즘이 압력 신호에 더해 금형 온도 신호를 사용할 수 있게 됐고, ComoNeoMULTIFLOW가 핫러너 금형 충전 균일화와 사출-보압 절환 최적점 결정을 지원한다. 온도 기반 절환은 설비 내장형 차지앰프 5159A에서도 사용 가능.
- 관련 근거: [Plastech, 2026-09-15](https://www.plastech.pl/en/news/kistler-to-present-real-time-release-testing-at-fakuma-22745) [2차 인용, Kistler 보도자료 기반]
- 기존 대비 변화: ComoNeo 계열은 기존에도 캐비티 압력 기반 모니터링을 제공했다. 이번 신규분은 (1) 압력 단독이 아닌 금형 온도를 제어 입력으로 쓰는 절환 제어, (2) 신세대 하드웨어, (3) 모델 검증(OPTIMIZE)과 감사추적(AkvisIO)을 묶어 샘플링 검사 축소 논리까지 패키지화한 점이다.
- 생산기술 시사점: 다캐비티 핫러너에서 충전 불균일을 압력 신호만으로 잡기 어려운 경우에 대한 대안이다. 캐비티 압력 프로파일을 개별 부품 단위 품질기록으로 남기고 모델 검증 이력까지 묶는 구조는 추적성 요구가 높은 라인의 참조 모델이 된다. 다만 캐비티당 센서·차지앰프 추가에 따른 금형 설계 부담과 초기 투자는 별도 검토 대상이다.
- 확인 필요: 예측모델 검증에 필요한 최소 데이터량과 검증 기간, EUROMAP·OPC UA 인터페이스 대응 범위, 비의료 분야(자동차) 적용 사례. 모두 미공개.

### 로봇제조기술

#### Universal Robots — Gen 7 플랫폼, 힘-토크 센싱과 임피던스 제어를 암 내부로 흡수

- 확인 내용: 9월 14일 IMTS 현장에서 7세대 플랫폼 공개. 신규 암 3종 UR10g-1750, UR17g-1300, UR18g-950(명명 규칙은 가반중량 kg-도달거리 mm). 힘-토크 센싱, 임피던스 제어, RTDE를 본체 표준 탑재해 외장 F/T 센서 없이 힘 제어 조립에 대응한다. g-Series 신규 툴 플랜지가 데이터·전원·안전 신호를 플랜지까지 직접 공급해 손목 카메라·고대역폭 센서의 외부 배선을 제거했다. 신규 CB7 Core 컨트롤러는 이전 세대 대비 연산 성능 40% 증가, 설치 면적 30% 축소이며 스탠드얼론과 제어반 내장형 2종으로 출시, 기존 e-Series·UR Series 암과 호환. TP7 Core 티치펜던트는 중량 20% 이상 경감. 안전은 ISO 13849-1 PLd Cat.3 구조, g-Series 전 기종 TÜV ISO 10218-1 및 UL1740 인증, Teradyne Robotics는 IEC 62443-4-1 ML3 사이버보안 인증 취득. Inbolt 3D 비전 가이던스가 별도 비전 PC 없이 UR 컨트롤러에서 네이티브 구동한다.
- 관련 근거: [Universal Robots 공식 뉴스센터, 2026-09-14](https://www.universal-robots.com/news-and-media/news-center/universal-robots-unveils-gen-7-new-platform-industrial-automation-physical-ai/) [공식 발표] / [The Robot Report, 2026-09-14](https://www.therobotreport.com/universal-robots-launches-its-seventh-generation-robot-platform-at-imts/) [공식 발표] / [Automation World, 2026-09-14](https://www.automationworld.com/factory/robotics/news/55404812/universal-robots-unveils-gen-7-platform-at-imts-2026-in-chicago) [2차 인용]
- 기존 대비 변화: 기존 UR 협동로봇은 힘 제어 시 외장 F/T 센서를 그리퍼 사이에 끼우고, 비전 적용 시 별도 비전 PC와 암 외부 배선이 필요했다. 세 요소가 각각 암 내부·컨트롤러·플랜지로 흡수됐다. 컨트롤러가 관리형 스위치 기능을 내장해 PLC·MES·IPC·비전 계층별 트래픽 분리를 로봇에서 설정한다.
- 생산기술 시사점: 압입·삽입 등 힘 감응 조립에서 셀 구성 요소 수가 줄어 배선과 캐비닛 점유가 감소한다. 배선 외부 포설은 EOAT 교체 시 재작업과 단선 불량의 주요 원인이므로 플랜지 통합은 툴체인지 소요시간과 유지보수 부하를 직접 줄인다. 다만 해당 플랜지는 벤더 고유 규격이므로 기존 ISO 9409-1 기반 EOAT 자산과의 호환 범위를 사전에 확인해야 한다. ISO 10218-1 인증과 IEC 62443 사이버보안 인증이 세트로 제시된 점은 OT 보안 요건이 있는 라인의 도입 심사 항목을 명확히 한다.
- 확인 필요: 신규 암 3종의 실제 출하 시점과 국내 공급 일정, 내장 힘-토크 센싱의 분해능·반복정밀도, g-Series 플랜지의 ISO 9409-1 호환 여부와 커넥터 사양, 기존 e-Series 사용자의 CB7 업그레이드 조건. 모두 미공개.

#### Agility Robotics — Digit 5, 가동 대 충전 비율 10대 1과 ISO 마운팅 플랜지 채택

- 확인 내용: 5세대 Digit 공개. 반복 인상 하중 22.7 kg으로 40% 증대, 신규 다리 구조에 자체 사이클로이드 감속 액추에이터 적용. 신형 배터리는 90분 가동 – 9분 충전으로 run-to-charge 비율이 Digit 4의 2대 1에서 10대 1로 바뀌어 24시간 중 20시간 이상 가동이 가능하다고 밝혔다. 리치 2.2 m(기존 1.68 m), 중량 129 kg, 신장 1.81 m. ISO 표준 마운팅 플랜지 기반 교체형 그리퍼를 채택해 토트 핸들링에서 머신텐딩·키팅·시퀀싱·검사·팔레타이징으로 작업 범위를 확장했다. 독립 안전 컨트롤러와 인체 감지(회피·정지·착좌), 시각·청각 의도 표시로 방책 없는 협조 작업을 구성한다. NVIDIA IGX Thor와 Halos Core를 탑재했고, Agility Arc 클라우드로 MES·WMS·WES와 연동한다.
- 관련 근거: [PR Newswire(Agility Robotics 보도자료), 2026-09-15](http://www.prnewswire.com/news-releases/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale-302878540.html) [공식 발표]
- 기존 대비 변화: Digit 4는 토트 이송 단일 용도였고 충전 대기가 가동시간의 3분의 1을 잠식했다. 10대 1 비율은 1대로 교대 전체를 커버하는 운용을 처음 가능하게 하는 수치다. ISO 플랜지 채택으로 EOAT가 전용 사양에서 범용 툴체인저 생태계로 열렸다.
- 생산기술 시사점: 부품 공장에서 휴머노이드 도입의 실질 제약은 안전방책 면적과 충전 다운타임이었다. 두 항목이 동시에 해소되는 구성이 제시된 첫 사례다. ISO 플랜지 채택은 기존 산업용 그리퍼 자산을 휴머노이드에 전용할 수 있다는 의미로, EOAT 표준화 검토 시 참고 가치가 있다.
- 확인 필요: Digit 5는 2027년 상반기 얼리액세스, 2027년 말 일반 공급 예정으로 현재 양산 적용 사례가 없다. 실제 가동 중인 것은 Digit 4(누적 65,000시간)다. 안전 아키텍처의 제3자 인증 취득 여부 미확인.

## 사출성형기술 상세

### Husky Technologies — HyCAP 4.0, 금형 스택 접동부를 폴리머 부시로 대체

- 확인 내용: 음료용 캡 전용 차세대 툴링 플랫폼 출시. 핵심 변경은 주요 코어 부품 간 강대강(steel-to-steel) 접촉을 줄이는 폴리머 부시 통합으로, 마모와 기계적 파손 위험을 낮추고 예방정비 주기를 연장한다고 명시했다. 게이트·스택 형상을 재설계해 초경량 캡과 테더드 캡(tethered closure) 규제 대응 형상을 동일 플랫폼에서 지원하며, 테더드·비테더드 양쪽을 커버해 규제 전환 시 설비 재투자를 줄이는 것을 목표로 한다.
- 관련 근거: [PlasticsToday, 2026-09-14](https://www.plasticstoday.com/injection-molding/husky-technologies-unveils-hycap-4-0-tooling-platform) [공식 발표]
- 기존 대비 변화: 기존 HyCAP 계열 대비 스택 내 마찰부 재질 구성 변경, 복잡 형상 캡의 치수 안정성 확보를 위한 형상 최적화, 한 플랫폼에서 규제 전후 형상을 모두 대응하는 유연성이 추가됐다.
- 생산기술 시사점: 고캐비티·고속 사이클 금형에서 수명 제약 요인이 냉각보다 접동부 마모인 경우가 많다. 금속 접동면을 폴리머 부시로 대체하는 접근은 캡 금형을 넘어 다캐비티 소형 부품 금형의 정비 주기 설계에 참고가 된다. 규제 변경에 대해 금형 플랫폼 단위로 대응 여력을 남기는 설계 사상도 시사점이 있다.
- 확인 필요: 폴리머 부시 재질과 허용 온도, 수명 연장 정량치(샷 수), 정비 주기 연장 폭, 사이클타임 개선치를 제조사가 공개하지 않았다. 양산 적용 고객사도 미공개.

### Mantle·3D Systems — 금속 AM 컨포멀 쿨링 인서트, 두 경로의 양산 실적 공개

- 확인 내용: Mantle은 금속 페이스트를 적층한 뒤 CNC 가공으로 최종 형상을 내는 방식으로, 냉각 채널을 중공 상태로 출력해 분말 제거 공정이 불필요하다. 표면조도 1 – 3 µm Ra, 치수공차 ±0.001 in/in. 적용 사례로 EV 배터리용 와이어 하니스 부품(깊고 좁은 리브 형상)의 12×12 in 브리지 금형에 AM 인서트를 삽입해 사이클타임 최대 50% 단축(Elite Mold & Engineering, PCS Company 협업). 3D Systems는 DMP 분말 방식과 3DXpert 설계 소프트웨어를 조합하며 인서트 출력 1 – 3일, 후처리 1 – 2일. 고객 실적으로 B&J Specialty가 냉각시간 60초에서 40초로 단축하고 금형 내 온도편차 86% 감소, Bastech가 사이클타임 22% 단축과 EDM·드릴링 공정 제거를 제시했다.
- 관련 근거: [PlasticsToday, 2026-09-14](https://www.plasticstoday.com/injection-molding/advanced-3d-printing-revolutionizes-conformal-cooling-channels) [업계 분석, 공급사 공개 데이터 인용]
- 기존 대비 변화: 페이스트 방식이라는 분말 미사용 경로가 상용 단계에 도달해 클린룸·보호구 요구가 낮아졌고, 냉각채널 단면을 눈물방울형·다이아몬드형으로 설계해 지지재 없이 출력하는 실무 가이드가 정립됐다.
- 생산기술 시사점: 국부 후육부와 깊은 리브로 인한 싱크마크·휨을 냉각회로 재설계로 잡는 접근의 경제성이 개선되고 있다. 금형 전체가 아닌 인서트 단위로 기존 몰드베이스에 삽입하는 방식이므로 기존 금형 개조에도 적용 가능하다. 온도편차 86% 감소는 광학·외관 부품의 잔류응력 관리 관점에서도 의미가 있다.
- 확인 필요: 인용된 정량치는 공급사 자체 공개 자료 기반이며 제3자 검증 데이터가 없다. 인서트 단가, 소재별(마레이징강·스테인리스) 수명, 냉각수 수질에 따른 미세채널 막힘 리스크는 미확인.

### 핫러너 운용 기준 — 열적 밸런싱 배제와 밸브핀 상태 기반 예지보전

- 확인 내용: 오픈게이트에서 밸브게이트로의 전환이 핫러너 시장 성장을 견인한다는 분석과 함께, 예지보전 항목으로 히터 저항·볼트 토크·진동 시그니처·밸브핀 상태를 스마트 센서로 상시 수집해 SCADA(알람 관리)와 MES(추적성)로 전달하는 구성이 제시됐다. 캐비티 밸런싱에 대해서는 온도로 유동을 맞추는 열적 밸런싱을 지양하고 매니폴드 유로 자체를 설계 단계에서 밸런싱해야 한다는 견해가 제시됐다. 글로벌 핫러너 시장은 2024년 44억 달러에서 2030년 64억 달러 전망(Grand View Research 인용).
- 관련 근거: [PlasticsToday, 2026-09-15](https://www.plasticstoday.com/injection-molding/hot-runner-systems-optimize-injection-molding-efficiency) [업계 분석]
- 기존 대비 변화: 신제품 발표가 아니라 운용 기준의 정리다. 밸브핀 상태와 히터 저항을 예지보전 데이터 항목으로 명시하고 SCADA·MES 연계 구조를 제시한 점, 열적 밸런싱을 명시적으로 배제한 점이 기존 일반론 대비 구체적이다.
- 생산기술 시사점: 외관 부품의 게이트 흔적·헤지테이션 마크 대응에서 밸브핀 타이밍을 사출속도·압력 프로파일과 함께 최적화해야 한다는 점이 재확인된다. 핫러너를 무정비 부품으로 취급하는 관행이 1 – 2년 후 불량으로 되돌아온다는 지적과 금형가 대비 연 4 – 5% 수준의 정비 예산 예시는 정비 예산 편성 기준으로 참고 가능하다.
- 확인 필요: 제시된 예지보전 구성의 실제 도입 사례와 효과 정량치가 기사에 없다. 밸브핀 상태 센싱의 계측 방식도 미확인.

### Moretto — 이송 제어 자기학습화와 이송 전 제진·오결선 차단

- 확인 내용: Fakuma 2026(Hall B3, Stand 3208) 출품 구성 공개. Loadmatik은 작업자가 출발지·목적지만 지정하면 이송 파라미터를 자동 산출하며, One Wire 6 Plus(이송 파라미터 감시), X-Loader(Sentry+ 기반 실시간 파라미터 인식·보정), KruiseKontrol(운전 압력 동적 관리)을 결합해 펠릿 속도·운전 압력·배관 배출 시간·수신기 충진 레벨을 지속 분석한다. 신규 Deduster는 Vortex 효과와 기계식 분리, 원심력을 조합해 성형 전 펠릿 분진을 제거하고 이오나이저 통합 옵션을 제공하며, 재료 접촉부를 스테인리스로 한정했다. Delphy는 RFID로 출발지-목적지 연결 정합성을 1초 주기로 검증하고 컬러 LED로 결선을 가이드한다. X Comb는 17 – 20 4기종이 추가돼 테크노폴리머 기준 최대 60 kg/h, 설치 면적 0.6 m²다. 통합 감시 시스템 Mowis는 OPC UA로 기존 MES와 양방향 통신한다.
- 관련 근거: [Plastech, 2026-09-11](https://www.plastech.pl/en/news/moretto-to-present-plastics-automation-systems-at-fakuma-22730) [2차 인용, Moretto 보도자료 기반. 자사 뉴스룸 미게시 확인]
- 기존 대비 변화: X Comb는 기종 확장이며, Deduster는 신규 기종으로 이오나이저 통합이 이번 공개 포인트다. Delphy는 RFID 1초 주기 검증으로 개정됐고, Loadmatik의 Sentry+ 실시간 보정과 KruiseKontrol 조합은 이송 제어의 자기학습화 진전이다.
- 생산기술 시사점: 재생재·리그라인드 비중이 올라가는 라인에서 분진과 정전기는 표면 불량·이물 혼입의 직접 원인이다. 이송 전 단계에서 제진과 제전을 함께 처리하는 접근은 성형 후 검사 부하를 줄이는 방향이다. RFID 매니폴드는 다품종 라인의 수지 오투입을 물리적으로 차단하는 저비용 수단인 동시에 배치 추적성 기록원이 된다. Mowis의 OPC UA 양방향 MES 연계는 주변기기 데이터를 기존 MES에 흡수시킬 때의 표준 경로로 참고 가능하다.
- 확인 필요: Deduster의 입도별 제거율과 이오나이저 제전 성능, Loadmatik 자기학습의 수렴 시간 및 재료 변경 시 재학습 필요 여부, Mowis가 지원하는 OPC UA Companion Specification 범위(EUROMAP 82.x·86 등). 모두 미공개.

### Coperion K-Tron — K-Vision-III, 피더 24대 중앙 제어와 산업용 이더넷 게이트웨이화

- 확인 내용: 하드웨어와 소프트웨어 아키텍처를 전면 재설계한 피더 라인 컨트롤러. 1개 공정 라인에서 KCM 피더 제어모듈 최대 24대를 중앙 감시·제어한다. 신규 레시피 관리로 재료 구성·공정 레시피 생성 및 비율 배합, 단계적 기동·정지 시퀀스, 성분 우선순위 관리를 지원한다. 통신은 Modbus TCP, EtherNet/IP, Profinet을 지원하며 공장 DCS·PLC와 라인 내 피더 사이의 단일 통신 게이트웨이로 동작할 수 있다. 컨트롤러 파라미터 백업·복원 기능을 포함하고, 이전 세대의 화면 구조와 작업 흐름은 유지해 재교육 부담을 낮췄다.
- 관련 근거: [Plastech, 2026-09-15](https://www.plastech.pl/en/news/coperion-k-tron-launches-k-vision-iii-feeder-control-22738) [2차 인용, Coperion 보도자료 기반]
- 기존 대비 변화: K-Vision 계열의 세대 교체이며 레시피 관리, 산업용 이더넷 게이트웨이, 파라미터 백업·복원이 신규 항목이다.
- 생산기술 시사점: 계량·정량 공급을 다회로로 운용하는 라인에서 개별 피더를 각각 상위 제어에 연결하던 구조를 단일 게이트웨이로 정리할 수 있다. 파라미터 백업·복원은 컨트롤러 고장 시 복구 시간(MTTR) 단축에 직접 기여한다. 다만 본 제품의 주 적용처는 컴파운딩·압출 계열 피더 라인으로, 사출셀 직결 도징과는 적용 범위가 다르다.
- 확인 필요: 사출기 연계 시 EUROMAP·OPC UA 지원 여부(공개 내용은 Modbus TCP·EtherNet/IP·Profinet만 명시), 출시 지역과 시점, 기존 K-Vision 설비의 업그레이드 경로. 모두 미공개.

### Envalior — Fakuma 2026 소재 포트폴리오, 고전압 대응 그레이드와 순환 PA6 경로

- 확인 내용: Fakuma 2026(Hall B4, Stand 4302) 출품 예고. 800 V DC 아키텍처 대응으로 Pocan PBT(CTI 600), Xytron PPS, 아크 소호 특성을 강화한 Stanyl CR310, 열경화성 대체용 ForTii C11F를 제시한다. Stanyl PA46 오버몰딩 기반 초박형 모터 절연으로 모터 외형 확대 없이 토크 밀도를 높이는 구성과, 레이저 용착 가능한 Pocan PBT·Xytron PPS 기반 ADAS 레이더 부품을 포함한다. 폐식용유 기반 ISCC PLUS 인증 PPS 그레이드 Xytron B-MB를 공개했고, 재활용 스타트업 SECARA와의 MOU로 폐차 유래 플라스틱을 촉매 해중합해 고순도 카프로락탐을 얻는 순환 PA6 경로를 추진 중이다. EU 폐차(ELV) 규정의 재생원료 함량 요건 대응이 목표다.
- 관련 근거: [PlasticsToday, 2026-09-11](https://www.plasticstoday.com/automotive-mobility/envalior-to-unveil-sustainable-materials-at-fakuma-2026) [공식 발표]
- 기존 대비 변화: 기존 포트폴리오에 바이오 기반 인증 PPS 그레이드, 고전압 대응 아크 소호 강화 PA46 그레이드, 화학적 재활용 PA6 원료 경로가 새로 추가됐다.
- 생산기술 시사점: 고전압 부품용 난연 그레이드와 PPS·PA46 계열은 성형 온도가 높고 유동 특성이 좁아 금형 온조와 핫러너 온도 제어 요구가 커진다. ELV 규정 대응 재생 PA6이 상용화되면 재생수지 로트 편차에 대응하는 공정 자동보정 기능의 필요성도 함께 커진다.
- 확인 필요: 각 그레이드의 성형 조건(수지온도·금형온도·유동 길이), SECARA 협업의 파일럿·양산 일정, 순환 PA6의 물성 동등성 검증 데이터. 현재는 전시 예고 수준으로 양산 적용 여부 미확인.

### 업계 구도 — 취출로봇·비전·사출기를 잇는 폐루프가 복수 벤더에서 동시 진행

- 확인 내용: WITTMANN이 AI 비전 업체 Krevera와 공동 개발 중인 구성은 로봇이 성형품을 취출해 카메라가 검사하고, 결과를 사출기로 전송해 사출기가 운전 파라미터를 자율 보정하는 형태다. NPE2027(올랜도) 시연 계획. WITTMANN MES가 사출기뿐 아니라 AMR·기타 설비와 통신해 성형 후 반송·계수·창고 보관까지 자동화하는 수요가 늘고 있다는 언급도 함께 제시됐다. Haitian은 5세대 사출기에서 AI 소프트웨어 스위트를 표준 기능화하며 수지 품질 변동 시 사출 안정성 유지를 위한 미세 보정을 포함한다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-09-14](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55400132/plastics-machinery-makers-develop-more-smart-and-ai-driven-technology) [업계 분석]
- 기존 대비 변화: WITTMANN-Krevera 협업 자체는 8월 기사에서 먼저 공개됐고 이번은 재확인 수준이다. 신규로 읽을 부분은 취출로봇-비전-사출기 폐루프가 복수 벤더에서 동시에 진행 중이라는 구도다.
- 생산기술 시사점: 취출로봇이 단순 반송이 아니라 검사 트리거이자 피드백 경로의 일부가 되는 방향이다. 취출 EOAT 설계 시 검사 시야 확보와 파지 자세 일관성이 사양 항목으로 올라온다. 다만 시연 시점이 NPE2027이므로 현 시점의 양산 적용 근거는 없다. 전시 데모 계획 단계로 구분해야 한다.
- 확인 필요: Krevera 연동 인터페이스 규격(EUROMAP 79 등 표준 기반 여부), 보정 대상 파라미터, 사이클타임 영향. 모두 미공개.

## 로봇제조기술 상세

### Vention — MachineAgent·MachineMotion AI, 파운데이션 모델 기반 빈피킹과 경로 자동 생성

- 확인 내용: IMTS 2026에서 차세대 컨트롤러 MachineMotion AI를 공개했다. NVIDIA Jetson·Isaac, CUDA 가속 라이브러리, FoundationPose 오픈 모델 기반이다. 신규 MachineAgent는 평문 프롬프트로 자동화 레이아웃 생성, 자동화 프로그램 생성, 가동 데이터 분석을 수행한다. 현장 데모는 UR12e와 NVIDIA Isaac 파운데이션 모델을 조합해 실시간 부품 검출, 6-DoF 자세 추정, 충돌 회피 경로 생성, 적응형 재시도 로직을 적용한 딥 빈피킹(최초 피킹 성공률 최대 99% 제시), FANUC LR Mate에 온암 비전·디지털 트윈·AI 모션 플래닝을 결합해 중간 경유점 수동 티칭 없이 충돌 회피 경로를 자동 생성하는 구성, MachineMotion AI 데이지체인 최대 20축, FANUC CRX-10iA 기반 구성형 머신텐딩 등 6종이다.
- 관련 근거: [Robotics 24/7, 2026-09-10](https://www.robotics247.com/article/imts-2026-vention-facilitates-manufacturing-with-physical-ai-and-agentic-ai-in-one-platform) [공식 발표]
- 기존 대비 변화: 종래 빈피킹은 품목별 CAD 매칭과 티칭이 필요했으나 FoundationPose 계열 파운데이션 모델로 사전 학습 없는 자세 추정으로 이동하고 있다. OLP 측면에서는 경유점 수동 지정이 목표 지향 경로 자동 생성으로 대체되는 형태다.
- 생산기술 시사점: 다품종 소량 부품의 무작위 적재 공급에서 티칭 공수가 줄어들 여지가 있다. 충돌 회피 경로 자동 생성은 간섭물이 많은 기존 설비 사이에 로봇을 투입할 때 검토 항목이 된다. 다만 99%는 자사 데모 조건 기준이므로 실제 부품·용기 조건에서 별도 검증이 필요하다. OLP 기능이 로봇 메이커 툴(RobotStudio·ROBOGUIDE·KUKA.Sim 계열)이 아닌 셀 플랫폼과 파운데이션 모델 쪽으로 이동하는 흐름이 함께 관측된다.
- 확인 필요: 99% 성공률의 대상 부품·용기·사이클타임 조건, MachineAgent가 생성한 프로그램의 검증·승인 절차, 국내 지원 여부.

### Yaskawa Motoman — 비전 가이드 협동 체결 데모와 Pick Anything

- 확인 내용: IMTS 2026 출품 구성(부스 236601) 공개. Motoman NEXT와 YNX 컨트롤러 기반 Pick Anything 데모는 형상이 불규칙하고 고정되지 않은 부품군을 자율 취급한다. 비전 가이드 HC 협동로봇의 나사·러그너트 자동 체결 데모는 공유 작업공간에서 요구되는 토크·위치 센싱 능력을 실증한다. Motoman-HC35는 가반중량 35 kg, 도달거리 2,030 mm로 선행 모델 대비 작업 영역과 가반중량이 확대됐다. 이 외 GP8L 로봇과 Keyence RB-800 3D 빈피킹·CV-X 2D 검사 카메라·MagSwitch 그리퍼 조합, ArcWorld 2000 리니어 트랙(최대 14 m 스테이션), MH1-SH500 컴팩트 MIG 용접 셀을 전시한다.
- 관련 근거: [American Machinist, 2026-09-10](https://www.americanmachinist.com/automation-and-robotics/product/55404016/robotics-automation-and-intelligent-manufacturing-tech-yaskawa-motoman-imts-2026) [공식 발표]
- 기존 대비 변화: Motoman NEXT와 YNX는 2026년 상반기 발표 플랫폼이며, 이번 공개분은 북미 수요처 대상 적용 데모 구성이 핵심이다. 특히 체결 공정을 안전 펜스 없는 공유 작업공간에서 제시한 점이 종래 전용 너트러너 스테이션과 다르다.
- 생산기술 시사점: 부품 체결 공정의 토크 관리가 로봇 내장 센싱으로 처리될 경우 전용 토크툴 컨트롤러와의 역할 분담을 재검토할 여지가 생긴다. 다만 전시 데모 단계이며 양산 토크 품질보증 체계(토크-각도 이력, 추적성)는 별도 확인 대상이다.
- 확인 필요: 체결 데모의 토크 범위와 정밀도 등급, 토크 데이터 기록·판정 방식, Motoman-HC35의 선행 모델 대비 정량 개선폭, 양산 적용 레퍼런스 유무.

### FANUC America — R-50iA 컨트롤러와 CRX-3iA, AMR 탑재용 DC 직결

- 확인 내용: IMTS 2026(부스 338900)에서 CRX 협동로봇 전용 소형 컨트롤러 R-50iA를 공개했다. 24 V – 48 V DC 배터리 직결 구동으로 별도 인버터를 제거해 AMR 탑재 시 시스템 구성을 단순화한다. 사이버보안 인증, 이더넷, Python을 지원한다. 신규 CRX-3iA는 가반 3 kg, 본체 11 kg의 가반형이다. 데모 셀은 RoboDrill D74CS와 CRX-10iA/L 머신텐딩, CRX-20iA/L을 탑재한 AMR이 부품을 이송하고 Renishaw 검사·세척을 연계하는 구성이다.
- 관련 근거: [American Machinist, 2026-09-10](https://www.americanmachinist.com/automation-and-robotics/product/55404018/robotics-automation-physical-ai-and-cnc-innovation-fanuc-america-imts-2026) [2차 인용]
- 기존 대비 변화: 지난주 보고한 CRX용 DC 직결 컨트롤러의 정식 명칭과 사양이 이번에 확인됐다. 기존 AMR 탑재 협동로봇은 배터리 DC를 AC로 승압하는 인버터가 필수였고, 이 구간이 효율 손실과 고장 요인이었다. 신규 CRX-3iA의 사양 공개도 이번이 처음이다.
- 생산기술 시사점: 모바일 매니퓰레이터의 가동시간과 신뢰성을 좌우하는 것은 전력 변환 단이다. 컨트롤러 단에서 DC 직결을 지원하면 배터리 용량 대비 실가동시간이 개선되고 캐비닛 체적이 줄어 AMR 상부 적재 여유가 늘어난다. 머신텐딩 셀의 이동화 검토 시 구조 대안이 된다.
- 확인 필요: R-50iA 소비전력·정격, CRX-3iA 반복정밀도, 양산 공급 시점. FANUC 공식 보도자료 원문 미확인(전시 전문지 보도 기준).

### Hirebotics — Cobot Painter 라인 트래킹과 모듈형 리니어 레일

- 확인 내용: 9월 14일 IMTS 현장 발표. 라인 트래킹은 컨베이어를 정지시키지 않고 이동 중인 부품을 추종하며 프로그램된 도포 경로를 유지한다. 엔코더와 센서로 컨베이어 이동을 검출하고 부품 도착을 자동 감지해 작업을 개시하며, 컨베이어 속도 변동 시 자동 보정한다. 캘리브레이션은 노코드 클라우드 플랫폼 Beacon 내에서 수행한다. 모듈형 리니어 레일은 5 ft 단위 또는 커스텀 길이로, 기존 코봇 고정 작업영역(도달거리 68.9 in)을 초과하는 12 ft 프레임·20 ft 구조물 용접 등에 대응한다. 현재는 수동 위치 결정 방식이며 완전 자동 이송 버전은 2026년 말 예정이다.
- 관련 근거: [RoboticsTomorrow, 2026-09-14](https://www.roboticstomorrow.com/news/2026/09/14/hirebotics-expands-cobot-reach-and-flexibility-with-new-line-tracking-and-linear-rail-capabilities-at-imts/27089/) [공식 발표]
- 기존 대비 변화: 종래 로봇 라인 트래킹은 전용 프로그래밍과 통합 공수가 필요했으나 노코드 플랫폼 내 캘리브레이션 절차로 단순화됐다. 7축 주행축도 자동 제어가 아닌 수동 위치 결정부터 단계적으로 도입된다.
- 생산기술 시사점: 도포·실링 공정에서 컨베이어 정지 없이 작업이 가능하면 택트 손실과 부품 이재 공수를 줄일 수 있다. 다만 현 시점 리니어 레일은 수동 위치 결정 수준이므로 연속 자동 운전 라인에는 미적용 단계로 구분해야 한다.
- 확인 필요: 허용 컨베이어 속도 범위와 도포 궤적 추종 정밀도, 도막 막두께 편차 데이터, 자동 주행축 버전의 확정 일정.

### FANUC·Setco — 로봇 암 선단 고속 스핀들, 로봇 가공의 적용 경계 제시

- 확인 내용: IMTS 2026에서 Setco의 로봇용 스핀들을 FANUC 로봇 암 선단에 장착한 로봇 가공 시스템이 전시됐다. 스핀들은 엔드오브암 전용 설계로 하우징을 소형화해 로봇 정격 가반중량 잠식을 억제하고, 스핀들 모터·드라이브를 로봇의 가반중량·속도·토크·절삭 요구에 정합시키는 선정 방식을 취한다. 적용 경계로 공차 0.002 in 미만 영역은 여전히 전용 CNC 장비가 필요하다고 명시했다. 스핀들 수리 시 CNC 스핀들 교체 대비 40 – 70% 비용 절감을 주장했다.
- 관련 근거: [RoboticsTomorrow, 2026-09-14](https://www.roboticstomorrow.com/news/2026/09/14/imts-2026-puts-high-speed-robotic-machining-in-the-spotlight/27088/) [업계 분석]
- 기존 대비 변화: 로봇 가공은 종래 디버링·트리밍 중심이었으나 로봇 전용 고속 스핀들 상품화로 밀링·드릴링 영역으로 확장됐다. 적용 가능 공차 하한선이 공개 언급된 점이 판단 기준으로 유용하다.
- 생산기술 시사점: 알루미늄 다이캐스팅·플라스틱 부품의 게이트 절단이나 홀 가공 등 중공차 가공을 전용 머시닝센터 대신 로봇 셀로 이관할지 판단할 때 공차 0.002 in을 1차 스크리닝 기준으로 활용할 수 있다. 스핀들 베어링 마모가 성능 저하의 주 원인으로 지목돼 예지보전 항목 설정이 필요하다.
- 확인 필요: 스핀들의 최고 회전수·출력·중량, 적용 FANUC 기종, FANUC 로봇 G-code 기능과의 연동 범위, 양산 적용 사례.

### InOrbit.AI — OpenRobOps, ISO 21423 최초 레퍼런스 구현 오픈소스 공개

- 확인 내용: 산업용 모바일 로봇(IMR)과 플릿 매니저(IMRFM) 간 상호운용·데이터 교환 표준인 ISO 21423의 업계 최초 레퍼런스 구현을 포함한 운영·플릿 관리 스택을 Apache 2.0으로 공개했다. 불안정 네트워크 환경용 고처리량 텔레메트리 수집, 실시간 공간 추적 및 로봇 잠금 기반 원격조작, Git CI/CD 기반 configuration-as-code, 장애 자동 조치, 엣지·온프레미스·에어갭·클라우드 배포, Open-RMF 네이티브 어댑터를 포함하며 형상 비의존(휠·이족·사족)으로 설계됐다.
- 관련 근거: [The Robot Report, 2026-09-15](https://www.therobotreport.com/inorbit-ai-releases-openrobops-iso-21423-reference-implementation/) [공식 발표]
- 기존 대비 변화: VDA 5050이 플릿 매니저와 차량 간 인터페이스를 다루는 데 비해 ISO 21423은 상위 운영 계층까지 포함한다. 그간 문서 표준만 존재했고 실행 가능한 참조 구현이 없었다.
- 생산기술 시사점: 사내 물류에 복수 벤더 AMR이 혼재하면 플릿 매니저 종속이 발생한다. 오픈소스 참조 구현은 RFP 단계에서 상호운용 요구사항을 검증 가능한 형태로 명시할 근거가 된다. 휴머노이드까지 같은 운영 계층에 포함되도록 표준이 설계된 점도 중장기 검토 요소다.
- 확인 필요: ISO 21423 정식 발행 시점과 최종 번호, 주요 AMR 벤더의 채택 선언 여부. 모두 미확인.

### UBTECH — 류저우 휴머노이드 전용 공장, 자동차급 양산 체계 적용

- 확인 내용: 14,000 m²(유효고 13.8 m) 전용 공장 준공. 이족 Walker S/S2와 휠형 Cruzr S2/Y1을 컨베이어 없는 혼류 유연라인에서 혼합 생산하며 택트는 10분이다. 섀시당 50개 사양, 2,000개 이상 체결부에 대해 토크·각도 텔레메트리를 자동 기록하고 RFID로 섀시 이력을 관리한다. 65 m² 고층 ASRS로 완성품 112대를 버퍼링해 창고 면적을 50% 이상 축소했다. 라인 끝단에서 4시간 이상 동적 번인과 자동차급 조명 검사 터널을 운영한다. 라인 자체는 휠형 양팔 모바일 매니퓰레이터 Cruzr Y1/S2가 디팔레타이징·빈피킹·토트 보충·동적 키팅을 담당하고 자율지게차와 운반차가 병행한다. 상위 오케스트레이션은 UBTECH Yanshee MOM이며 Siemens Intelligence Center X와 연동하고, 착공 전 Siemens Plant Simulation으로 1대1 디지털트윈을 구축해 10분 택트를 검증했다.
- 관련 근거: [Humanoids Daily, 2026-09-13](https://www.humanoidsdaily.com/news/inside-ubtech-s-10-000-unit-super-factory-how-robots-are-building-humanoids-in-liuzhou) [업계 분석]
- 기존 대비 변화: 휴머노이드 생산은 그간 소량 수작업 조립이었다. 혼류 유연라인, 택트 관리, 전수 체결 이력, 번인 검사를 갖춘 자동차급 양산 체계가 적용된 첫 공개 사례다.
- 생산기술 시사점: 컨베이어를 없애고 모바일 매니퓰레이터로 공정 간 연결을 대체한 구성은 다품종 소량 부품 라인의 레이아웃 대안으로 검토 가치가 있다. 체결 토크·각도 전수 기록과 RFID 이력관리를 10분 택트에서 성립시킨 점, 디지털트윈으로 택트를 사전 검증한 절차가 참고점이다.
- 확인 필요: 2차 매체 보도이며 UBTECH 공식 보도자료 원문 미확인. 실제 가동률과 수율 미공개.

### AGIBOT — GE-Act 2.0, 교차 형상 전이의 정량 근거 제시

- 확인 내용: 웹 영상 생성모델을 전용한 것이 아니라 임베디드 조작 데이터로 사전학습한 World-Action Model을 오픈소스로 공개했다. 3단 구조로 Control-First Visual Tokenizer(프레임 64배 압축), Single-Step Visual Planner(단일 순전파, 폐루프 대응), Inverse Dynamics Model로 구성된다. 신규 KASO 기법으로 validity gap을 보정해 어블레이션에서 피킹 성공률이 22.5%에서 37.5%로 올랐다. 학습 데이터를 300시간에서 30,000시간으로 확장하면 100개 단위작업·20개 조작 범주에서 제로샷 성공률이 17.1%에서 44.1%(이족 G1-OP)로 개선됐고, 산업용 휠형 G2-90D는 13.4%에서 31.1%로 학습 데이터 비중이 2% 미만임에도 17.7%p가 전이됐다. 작업별로는 닦기(학습 824시간)가 76.7%, 빗자루 쓸기(학습 64시간)가 약 3.3%였다. 같은 주 Unitree도 전신 조작용 60억 파라미터 UnifoLM-WLA-1.0을 오픈소스로 공개했다.
- 관련 근거: [Humanoids Daily, 2026-09-11](https://www.humanoidsdaily.com/news/agibot-open-sources-ge-act-2-0-challenging-unitree-in-the-open-embodied-ai-race) [업계 분석]
- 기존 대비 변화: 기존 VLA 모델은 형상별 재학습이 전제였다. 데이터 비중 2% 미만 형상에서 17.7%p가 전이된 결과는 교차 형상 학습의 정량 근거를 처음 제시한 것이다.
- 생산기술 시사점: 작업별 성공률 편차(76.7% 대 3.3%)가 학습 시간에 비례한다는 점은 로봇 AI 도입 시 요구 데이터량을 공정 단위로 산정해야 함을 시사한다. 제로샷 44.1%는 양산 적용 수준이 아니며 티칭·지그 기반 결정론적 제어를 대체할 단계가 아니다.
- 확인 필요: 벤치마크가 자사 정의 과제 기준이며 제3자 검증이 없다. 실제 공장 조건(조명 변동·유분·재현성) 평가와 공식 기술 보고서 원문 미확인.

### Hai Robotics — Ferag Solutions 채널을 영국에서 EMEA 전역으로 확대

- 확인 내용: 기존 영국 한정이던 Ferag Solutions(스위스 힌빌, 인트라로지스틱스 인테그레이터)와의 파트너십을 유럽·중동·아프리카 전역으로 확대했다. Hai Robotics가 ACR(케이스 핸들링 모바일 로봇, HaiPick 계열) 장비·기술·사후지원을 공급하고 Ferag가 통합과 지역 대응을 담당한다. 5년간의 협력과 영국 내 복수 설치 실적을 기반으로 하며 EMEA 내 복수 프로젝트가 이미 계약됐다고 밝혔다.
- 관련 근거: [Automated Warehouse, 2026-09-11](https://www.automatedwarehouseonline.com/ferag-deploy-hai-robotics-technology-europe-middle-east-africa/) [공식 발표]
- 기존 대비 변화: 중국계 ACR 벤더의 유럽 대응이 영국 거점 단일 채널에서 EMEA 광역 인테그레이터 체계로 전환됐다. 서비스망 변화에 해당한다.
- 생산기술 시사점: ACR 방식 케이스 핸들링은 라인사이드 자재 보관·불출에 적용 가능한 형태다. 유럽 거점의 사후지원 체계가 확보되면 해외 공장 도입 시 유지보수 리스크 평가 항목이 달라진다.
- 확인 필요: 계약 프로젝트의 산업군·규모 미공개. 제조 현장 적용 사례 여부 미확인(현재 실적은 유통·물류 중심).

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 AI가 조언에서 제어계 쓰기로 이동(ENGEL), 캐비티 압력 단독에서 압력·온도 병용 절환 제어로 확장(Kistler) | 공정 AI의 경계가 판정에서 실행으로 넘어감. 변경점 관리·파라미터 잠금 설계가 도입 전제 조건이 됨 |
| 기술 변화 | 협동로봇이 힘-토크 센싱·임피던스 제어·비전 처리를 암과 컨트롤러 내부로 흡수(UR Gen 7) | 힘 감응 조립 셀의 구성 요소 수와 외부 배선이 줄어듦. EOAT 플랜지 규격 호환성이 새 검토 항목 |
| 업체 변화 | Fakuma 2026 사전 발표가 사출기 본체에서 주변장치·계측·소재 쪽으로 분산(Moretto, Kistler, Coperion, Envalior) | 공정 개선 여지가 성형기 단독이 아니라 이송·제진·계측·소재 계통에 분포한다는 신호 |
| 적용사례 변화 | 휴머노이드가 안전방책 없는 인접 작업과 교대 전체 가동 구성을 동시에 제시(Agility Digit 5), 휴머노이드 자체를 자동차급 양산 체계로 생산(UBTECH) | 휴머노이드 논의가 시연에서 운용 조건(가동률·안전·EOAT 호환)으로 이동. 단 Digit 5는 2027년 공급 예정으로 현 시점 양산 실적 없음 |
| 표준 변화 | ISO 21423(모바일 로봇-플릿 매니저 상호운용) 최초 오픈소스 레퍼런스 구현 공개 | 복수 벤더 AMR 혼재 시 플릿 매니저 종속을 RFP 단계에서 차단할 근거 확보 |
| 확인 필요 | ENGEL EVA의 쓰기 파라미터 범위·감사추적 형식, UR g-Series 플랜지의 ISO 9409-1 호환 여부, Kistler 온도 기반 절환의 자동차 적용 사례 | 다음 조사에서 공식 사양서·인터페이스 문서 확보 필요 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | IMTS 2026 현장 데모 보도(9/16 – 9/19분) | 로봇·EOAT | 개막일 이후 발행분에 EOAT·모바일 매니퓰레이터 실증 결과가 나올 가능성 |
| 2 | AMB Stuttgart 2026(9/15 – 9/19) 발표 | 로봇·EOAT | SCHUNK·KUKA 출전. 유럽계 EOAT·자동화 신규 발표 확인 |
| 3 | Fakuma 2026 개막 직전 2차 사전 발표 | 사출성형 | 10월 개막까지 ARBURG·KraussMaffei·Sumitomo Demag의 추가 발표 가능성 |
| 4 | Fakuma Innovation Award 2026 후보·수상 | 사출성형 | 6개 주제 부문 시상이 10월 12일 예정. 수상 기술의 성숙도 판단 |
| 5 | UR Gen 7 사양서·국내 공급 일정 | 협동로봇 | 내장 힘-토크 센싱 분해능, 플랜지 규격, e-Series 업그레이드 경로 |
| 6 | HD현대로보틱스 2세대 협동로봇 3종 출시 확인 | 협동로봇 | HDC 50-17 등 9월 출시 예정 보도의 확정 여부와 공식 사양 |
| 7 | ISO 21423 정식 발행 및 벤더 채택 | 물류 자동화 | 표준 번호 확정과 주요 AMR 벤더의 채택 선언 여부 |

## 출처

### 사출성형기술

- [PlasticsToday, "Engel's AI assistant now controls injection molding machines", 2026-09-11](https://www.plasticstoday.com/injection-molding/engel-s-ai-assistant-now-controls-injection-molding-machines)
- [ETMM, ENGEL EVA AI Virtual Assistant, 2026-09-14](https://www.etmm-online.com/engel-eva-ai-virtual-assistant-injection-moulding-a-0a8d95da685297424cd3a1c800571727/)
- [ENGEL, 공식 Fakuma 2026 페이지, 2026-09-16 확인](https://www.engelglobal.com/en/fairs-events/fakuma-2026)
- [PlasticsToday, "Husky Technologies unveils HyCAP 4.0 tooling platform", 2026-09-14](https://www.plasticstoday.com/injection-molding/husky-technologies-unveils-hycap-4-0-tooling-platform)
- [PlasticsToday, "Advanced 3D printing revolutionizes conformal cooling channels", 2026-09-14](https://www.plasticstoday.com/injection-molding/advanced-3d-printing-revolutionizes-conformal-cooling-channels)
- [PlasticsToday, "Hot runner systems optimize injection molding efficiency", 2026-09-15](https://www.plasticstoday.com/injection-molding/hot-runner-systems-optimize-injection-molding-efficiency)
- [PlasticsToday, "Envalior to unveil sustainable materials at Fakuma 2026", 2026-09-11](https://www.plasticstoday.com/automotive-mobility/envalior-to-unveil-sustainable-materials-at-fakuma-2026)
- [Plastech, "Kistler to present real-time release testing at Fakuma", 2026-09-15](https://www.plastech.pl/en/news/kistler-to-present-real-time-release-testing-at-fakuma-22745)
- [Plastech, "Moretto to present plastics automation systems at Fakuma", 2026-09-11](https://www.plastech.pl/en/news/moretto-to-present-plastics-automation-systems-at-fakuma-22730)
- [Plastech, "Coperion K-Tron launches K-Vision III feeder control", 2026-09-15](https://www.plastech.pl/en/news/coperion-k-tron-launches-k-vision-iii-feeder-control-22738)
- [Plastech, "30th Fakuma sets programme for October 2026", 2026-09-15](https://www.plastech.pl/en/news/30th-fakuma-sets-programme-for-october-2026-22740)
- [Plastics Machinery & Manufacturing, "Plastics machinery makers develop more smart and AI-driven technology", 2026-09-14](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55400132/plastics-machinery-makers-develop-more-smart-and-ai-driven-technology)

### 로봇제조기술

- [Universal Robots 공식 뉴스센터, "Universal Robots unveils Gen 7", 2026-09-14](https://www.universal-robots.com/news-and-media/news-center/universal-robots-unveils-gen-7-new-platform-industrial-automation-physical-ai/)
- [The Robot Report, "Universal Robots launches its seventh generation robot platform at IMTS", 2026-09-14](https://www.therobotreport.com/universal-robots-launches-its-seventh-generation-robot-platform-at-imts/)
- [Automation World, "Universal Robots unveils Gen 7 platform at IMTS 2026", 2026-09-14](https://www.automationworld.com/factory/robotics/news/55404812/universal-robots-unveils-gen-7-platform-at-imts-2026-in-chicago)
- [PR Newswire, Agility Robotics "Agility unveils Digit 5", 2026-09-15](http://www.prnewswire.com/news-releases/agility-unveils-digit-5-humanoid-robot-built-for-cooperatively-safe-work-at-scale-302878540.html)
- [The Robot Report, "InOrbit.AI releases OpenRobOps ISO 21423 reference implementation", 2026-09-15](https://www.therobotreport.com/inorbit-ai-releases-openrobops-iso-21423-reference-implementation/)
- [Robotics 24/7, "IMTS 2026: Vention facilitates manufacturing with physical AI and agentic AI in one platform", 2026-09-10](https://www.robotics247.com/article/imts-2026-vention-facilitates-manufacturing-with-physical-ai-and-agentic-ai-in-one-platform)
- [American Machinist, Yaskawa Motoman IMTS 2026, 2026-09-10](https://www.americanmachinist.com/automation-and-robotics/product/55404016/robotics-automation-and-intelligent-manufacturing-tech-yaskawa-motoman-imts-2026)
- [American Machinist, FANUC America IMTS 2026, 2026-09-10](https://www.americanmachinist.com/automation-and-robotics/product/55404018/robotics-automation-physical-ai-and-cnc-innovation-fanuc-america-imts-2026)
- [RoboticsTomorrow, "Hirebotics expands cobot reach and flexibility at IMTS", 2026-09-14](https://www.roboticstomorrow.com/news/2026/09/14/hirebotics-expands-cobot-reach-and-flexibility-with-new-line-tracking-and-linear-rail-capabilities-at-imts/27089/)
- [RoboticsTomorrow, "IMTS 2026 puts high-speed robotic machining in the spotlight", 2026-09-14](https://www.roboticstomorrow.com/news/2026/09/14/imts-2026-puts-high-speed-robotic-machining-in-the-spotlight/27088/)
- [Humanoids Daily, "Inside UBTECH's 10,000-unit super factory", 2026-09-13](https://www.humanoidsdaily.com/news/inside-ubtech-s-10-000-unit-super-factory-how-robots-are-building-humanoids-in-liuzhou)
- [Humanoids Daily, "AGIBOT open-sources GE-Act 2.0", 2026-09-11](https://www.humanoidsdaily.com/news/agibot-open-sources-ge-act-2-0-challenging-unitree-in-the-open-embodied-ai-race)
- [Automated Warehouse, "Ferag to deploy Hai Robotics technology across Europe, Middle East, Africa", 2026-09-11](https://www.automatedwarehouseonline.com/ferag-deploy-hai-robotics-technology-europe-middle-east-africa/)
- [Yaskawa Global, Agentic Robot System 개발 발표, 2026-07-15](https://www.yaskawa-global.com/newsrelease/news/179679) (참고, 윈도우 외)
