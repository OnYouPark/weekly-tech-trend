---
title: 생산기술 신규기술 브리핑 - 2026년 8월 4주차
date: 2026-08-26
type: production
period: 2026년 8월 4주차
tags: [Schaeffler, 스트레인웨이브 감속기, Techman TM45S, Jetson Orin Nano 2, Negri Bossi, Tempro primus, FSoE, DYNA-2]
summary: 사출은 Fakuma 2026 사전 발표가 상위 신기종에서 보급형 주변기기 계열과 셀 통합 운용 데이터로 이동. 로봇은 Schaeffler가 휴머노이드용 스트레인웨이브 감속기를 절삭에서 성형 공법으로 전환해 2027년 양산을 확정하고, 모바일 매니퓰레이터 제어를 EtherCAT·FSoE 표준 위에 올린 아키텍처가 공개됨
---

# 생산기술 신규기술 브리핑 - 2026년 8월 4주차

> 2026-08-20 – 2026-08-26 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

**[WITTMANN] Primus 계열 일괄 공개 — 보급형 주변기기 계열의 제어·가반하중 상향**

- 확인 내용: Fakuma 2026(10/12–16, 프리드리히스하펜)에서 Primus 포트폴리오 전체를 처음으로 한 자리에 전시. 신규 온조기 Tempro primus 90은 기존 7세그먼트 표시부를 3.5인치 TFT LCD 컬러 디스플레이로 교체하고 PT1000 온도센서 적용, 냉각코일 직경을 확대해 냉각능력을 보강. 선형 로봇 Primus 118은 가반하중 8 kg, 밸브 슬롯 최대 10개·진공회로 최대 8개, SmartRemoval 기본 탑재로 형체력 250톤급까지 장착 가능. 주빔 홀 패턴은 기존 시리즈와 동일해 기존 설비에 교체 장착 가능. 측면 배치형 치차롤 분쇄기 S-Max primus는 50 Hz에서 27 rpm 저속 운전으로 유리섬유 강화재 포함 엔지니어링 플라스틱에 대응.
- 관련 근거: [PolyForm NEXT, 2026-08-20](https://www.polyformnext.de/automation/wittmann-at-fakuma-2026-primus-products-for-temperature-control--recycling--and-automation.htm) [2차 인용]
- 기존 대비 변화: Primus 라인은 그동안 개별 품목 단위로 소개돼 왔으나 이번에 온조·건조·분쇄·이송·취출·사출기까지 한 계열로 묶어 제시. Primus 118은 기존 Primus 로봇의 상한 가반하중을 8 kg으로 끌어올린 확장 모델이며 설치 인터페이스는 하위 호환.
- 생산기술 시사점: 보급형 주변기기 계열에서도 온조기 표시·제어 정밀도와 로봇 가반하중이 올라가면, 중량 200 g – 1 kg급 취출이나 단순 온조 회로에 상위 기종을 배치하지 않아도 되는 구간이 생긴다. 빔 홀 패턴 유지는 노후 셀에서 로봇만 교체하는 부분 개선을 가능하게 한다.
- 확인 필요: Tempro primus 90의 온도 범위·유량·가열/냉각 용량, 제어 정밀도(±K), EUROMAP 82.x 연계 지원 여부. Primus 118의 축 속도·반복정밀도. 적용 수준은 전시 예고 단계.

**[WITTMANN / Siemens] 사출 스마트제조 — 데이터 수집 범위가 사출기에서 연결 주변장치로 확장, OPC UA 개방성 제약이 실무 병목으로 명시**

- 확인 내용: WITTMANN Group 미국 영업담당 부사장은 IIoT가 종전에는 사출기 레벨에서 멈췄으나 현재는 연결된 주변장치에서도 데이터를 수집한다고 언급하면서, 온조기 제조사와 타사 사출기, 자사 로봇과 타사 MES 간 통신이 여전히 난제라고 지적. Siemens Digital Industries 측은 전 구간 센서화가 아니라 헤더 하류·스트레이너 직전 등 유효 지점만 계측하는 선별적 센서 배치와 품목별 기준을 붙인 조건 감시를 제시. 신형 설비가 OPC UA에 대응하더라도 기계 제조사가 데이터를 유료 계층 뒤에 두는 경우가 있어 사용자가 IO 매핑을 직접 개발하거나 벤더에 요청해야 한다고 언급. 예지보전의 비계획 정지 저감 폭은 15 – 30% 수준으로 제시(양측 모두 개략치로 동의).
- 관련 근거: [Plastics Today, 2026-08-25](https://www.plasticstoday.com/industry-trends/smart-manufacturing-transforms-injection-molding-industry-operations) [업계 분석]
- 기존 대비 변화: 제품 출시가 아닌 기존기술 고도화 범위의 공급사 진술. 데이터 수집 대상이 사출기 단독에서 연결 주변장치로 넓어졌다는 점을 공급사가 명시한 것, 그리고 OPC UA 대응 설비라도 데이터 접근이 벤더에 의해 제한될 수 있다는 제약이 구체적으로 기술된 점이 확인 포인트.
- 생산기술 시사점: 주변장치 데이터를 사출 조건 이력과 함께 축적하려면 설비 사양서 단계에서 OPC UA 노드 공개 범위와 IO 매핑 제공 여부를 계약 조건으로 명시해야 한다. 센서 증설은 전 구간이 아니라 고장 모드가 특정되는 지점에 한정하는 편이 데이터 유효성이 높다.
- 확인 필요: 주변장치에서 수집하는 항목의 구체 목록(건조 노점, 온조 유량, 분쇄기 부하 등), EUROMAP 82.x 대응 여부, 15 – 30% 수치의 원출처.

### 로봇제조기술

**[Schaeffler] 성형 공법 스트레인웨이브 감속기 — 휴머노이드용 검증 완료, 2027년 양산 착수 확정**

- 확인 내용: 휴머노이드 로봇용 성형(forming) 스트레인웨이브 감속기의 검증 시험을 완료했고 2027년 대량 생산 개시가 가능하다고 발표. 기존 방식은 정밀 절삭가공으로 감속기 기어 형상을 만들지만, 고압 프레스로 수 초 내 형상을 성형하는 공법을 적용. 제조 원가 25% 이상 절감, 소재 사용량 75% 이상 절감, 공정 시간은 분 단위에서 초 단위로 단축한다고 제시하며 토크·효율은 절삭 가공품과 동등 수준이라고 주장. 독일에서 먼저 생산 후 타 지역 확대 계획. 액추에이터가 휴머노이드 총 제조원가의 약 절반을 차지한다고 명시했고, 자동차용으로 지난 10년간 성형 스트레인웨이브 감속기 200만 개 이상을 공급한 이력을 휴머노이드로 전환한다는 설명.
- 관련 근거: [The Robot Report, 2026-08-21](https://www.therobotreport.com/schaeffler-plans-to-mass-manufacture-gearboxes-for-humanoids-in-2027/) [2차 인용, Schaeffler 임원 직접 인용 포함]
- 기존 대비 변화: 기존기술 고도화. 스트레인웨이브 감속기 자체는 신규가 아니며, 변화점은 절삭에서 성형으로의 제조공법 전환과 양산 시점 확정이다.
- 생산기술 시사점: 휴머노이드 원가 구조의 최대 항목이 액추에이터이고 그 병목이 감속기 정밀가공이라는 점이 부품사 관점에서 명시적으로 확인됐다. 자동차 부품 제조에서 축적한 냉간·온간 성형 설비와 공정관리 역량이 로봇 구동부품 영역으로 전환 가능한 경로가 실증 단계에 진입했다는 의미가 있다.
- 확인 필요: 성형품의 정격 토크·감속비 범위, 반복 위치정밀도(arcsec), 수명 시험 조건. Schaeffler 공식 릴리스 원문은 미확인.

**[Dexterity / Beckhoff] Mech 모바일 매니퓰레이터 — 물리 AI 제어를 EtherCAT·FSoE 산업 표준 위에 구성한 아키텍처 공개**

- 확인 내용: 양팔 모바일 매니퓰레이터 Mech의 제어 아키텍처를 Beckhoff Automation과 공동 구축한 내용이 공개됨. EtherCAT 기반으로 PLC 기능·모션·안전·내비게이션을 단일 시스템에 통합하고 Beckhoff PC 기반 제어 플랫폼에서 별도 프로세서 없이 병행 실행. 안전 계층은 FSoE(Fail Safe over EtherCAT)로 구성해 고객 사이트별로 안전 센서·기기 구성을 가변 적용하는 모듈형 안전 시스템을 설계 요구사항으로 삼았다. 물리 AI가 센서 값·액추에이터 데이터·폴트 코드 등 설비 정보 전체에 접근 가능하도록 노출하는 것을 핵심 설계 원칙으로 제시. 적용 작업은 트럭 상·하차, 오더 풀필먼트, 팔레타이징·디팔레타이징이며, 예외 상황에서 로봇이 사람에게 요청하는 human-in-the-loop 구조.
- 관련 근거: [Automated Warehouse, 2026-08-20](https://www.automatedwarehouseonline.com/dexterity-superhumanoid-robot-uses-physical-ai-truck-loading-unloading/) [2차 인용, 양사 담당자 인터뷰]
- 기존 대비 변화: EtherCAT·FSoE 자체는 기존 산업 표준. 변화점은 물리 AI 제어를 자체 안전 컨트롤러가 아닌 표준 필드버스·안전 프로토콜 위에 얹는 구조를 구체적으로 명시한 점이다.
- 생산기술 시사점: 모바일 매니퓰레이터를 기존 공장 안전 인프라에 편입할 때 FSoE 같은 표준 안전 프로토콜을 쓰면 사이트별 안전 기기 구성 변경을 소프트웨어로 흡수할 수 있다. AI 제어 도입 시 설비 데이터 개방 범위가 성능을 좌우한다는 지적은 컨트롤러 선정 기준에도 영향을 준다.
- 확인 필요: Mech의 페이로드·처리량, 실제 양산 사이트 수, PL/SIL 등급.

## 사출성형기술 상세

이번 주 사출 축은 신규 확인 2건, 셀 운용·데이터 축 2건으로 총 4건이다. Fakuma 2026 사전 발표의 정점은 8/17 – 8/19에 몰렸고 8/20 이후 발표 빈도가 급격히 줄었다. 축 ②의 우선 조사 업체(Yushin, Sepro, Star, Harmo, Matsui, Moretto, Motan, Conair, Piovan, Hekuma, Waldorf Technik) 공식 뉴스룸을 직접 순회했으나 기간 내 발표는 0건이었다.

### 사출기·금형·소재

**[Negri Bossi / Nissei] Fakuma 2026 전동식 셀 2종 — LSR 식품포장 셀과 의료용 클린룸 셀을 협력사 통합 구성으로 제시**

- 확인 내용: 모회사 Nissei Plastic, 자동화 계열사 Sytrama와 공동으로 전동식 사출기 2대를 턴키 셀 형태로 전시. Nova5e110T H1540(형체력 1,080 kN)은 LSR 전용 사양으로 식품용 머핀틀을 성형하며, Ewikon 핫러너·콜드러너의 4캐비티 금형, Binks Reinhardt-Technik 실리콘 정량공급기, Sytrama S8 로봇, Ravizza Packaging 포장기까지 셀 내부에 연결. Nova5e220T-H820(형체력 2,160 kN)은 Petek 라미나 플로우 박스를 적용해 재밀폐형 의료용 단회 투여 병을 성형하며, 자동화는 스테인리스·아노다이징 알루미늄 재질에 표면을 평활 처리한 소형 회전형 로봇으로 클린룸에 대응. 부스에는 MB Conveyors 컨베이어, Piovan 건조·계량, Innovo 생산 분석 소프트웨어를 함께 배치.
- 관련 근거: [PolyForm NEXT, 2026-08-21](https://www.polyformnext.de/spritzgiessen/negri-bossi-auf-der-fakuma-2026-spritzgiessloesungen-fuer-verpackung-und-medizintechnik.htm) [2차 인용]
- 기존 대비 변화: 개별 사출기 사양 발표가 아니라 LSR 정량공급–금형–취출–포장, 또는 클린룸 자동화–공정 데이터 분석까지 협력사 조합으로 완결하는 셀 단위 제안이다. Nissei 계열이 유럽 전시에서 Negri Bossi 브랜드와 Sytrama 자동화를 묶어 제시하는 형태.
- 생산기술 시사점: 다재질·특수 소재(LSR) 성형에서 사출기 단품보다 정량공급기–금형–취출–후공정의 인터페이스 정합이 실질 수율을 좌우한다는 접근이다. 자동차 부품에서도 시일·가스켓류 LSR 인서트 공정을 검토할 때 동일한 셀 구성 논리가 적용된다. 클린룸 로봇의 재질·표면 사양은 도장 전 부품이나 광학 부품 취급 라인에도 참고 가능하다.
- 확인 필요: 두 셀의 사이클타임·캐비티당 중량·불량률 등 정량 데이터 미공개. 적용 수준은 전시 데모이며 양산 적용 사례는 제시되지 않음. Ewikon 금형의 콜드러너 방식(밸브게이트 여부) 미확인.

### 사출자동화·주변장치

**[WITTMANN × Rugby Plastics] Wittmann 4.0 + TEMI+ 통합 사출셀 — 주변장치 일괄 연결 셀의 양산 적용 사례와 에너지 실측치 공개**

- 확인 내용: 영국 Rugby Plastics(Thomas Dudley 그룹)가 Wittmann 4.0 및 TEMI+ MES 패키지를 도입. 셀 구성은 SmartPower 120 사출기에 5축 빔 로봇, 중량식 계량·배합 장치, 트윈 제습건조기, 트윈 수온조절기, FlowCon 금형 유량 조절 장치를 4.0으로 통합한 형태. TEMI+가 생산계획·셀 모니터링·KPI·설비 상태·금형 스케줄링을 담당. 자사 SmartPower 사출기와 구형기를 외부 계측기 및 사출기 내장 에너지 모니터링 기능으로 대조 측정한 결과 1,000개당 80.4 kWh 절감, 절감률 82.3%로 제시. MES 요건으로 OPC 계열 프로토콜 기반 사출기–MES 실시간 양방향 인터페이스, OEE·OTIF·설비 정지시간·사이클타임 편차 리포트, 금형 보전 스케줄링, 사출 조건 사이클 업로드·다운로드를 열거.
- 관련 근거: [Interplas Insights(BP&R), 2026-08-21](https://interplasinsights.com/plastics-machinery/injection-moulding-machine-news/use-the-data-work-smarter/) [업계 분석, 인용 수치는 사용자 측 관리이사 진술]
- 기존 대비 변화: Wittmann 4.0과 TEMI+는 2020년대 초부터 존재하므로 신규 기술이 아니라 신규 적용사례로 분류한다. 사출기–로봇–건조·이송·온조·유량조절까지 단일 셀에 4.0으로 묶은 구성이 실가동 사례로 확인된 점, 에너지 절감 수치가 처리량 기준(kWh/1,000 parts)으로 공개된 점이 새롭다.
- 생산기술 시사점: 주변장치를 개별 관리하던 방식 대비, 온조·건조·계량·유량조절을 셀 단위로 묶어 MES에 직결하면 조건 이력과 에너지 원단위를 부품 단위로 귀속시킬 수 있다. 다만 에너지 비교가 신·구형 사출기 대조 조건이므로 주변장치 통합만의 기여분은 분리되지 않는다. 도입 검토 시 사출기 교체분과 통합 제어분을 구분한 측정 설계가 필요하다.
- 확인 필요: 82.3% 절감의 비교 대상 구형기 사양·형체력·성형 품목, 측정 기간. WITTMANN 공식 자료로는 미확인.

## 로봇제조기술 상세

이번 주 로봇 축은 신규 확인 13건이다. 특징은 우선 조사 대상 메이저 로봇 메이커(FANUC, ABB, KUKA, Yaskawa, Kawasaki, Nachi, Denso, Epson, Mitsubishi Electric, Omron, Stäubli, Universal Robots, 두산로보틱스, 한화로보틱스, 현대로보틱스)의 로봇 신규 발표가 기간 내 0건이었고, 물류·EOAT 축의 우선 업체(MiR, OMRON, Locus, AutoStore, Boston Dynamics, Figure, Agility, Apptronik, SCHUNK, OnRobot, Robotiq, Festo 등)도 0건이었다는 점이다. 실질 변화는 전량 목록 외 업체와 구동부품·엣지 컴퓨트·제어 아키텍처 층위에서 나왔다.

### 산업·협동로봇·로봇 SW

**[Techman Robot] TM45S 중가반 양팔 협동로봇 — 팔당 50 kg·양팔 동기 100 kg 신모델 공개, POC 단계**

- 확인 내용: 대만 타이베이 국제산업자동화전(8/19)에서 TM45S 공개. 팔당 가반하중 50 kg, 양팔 동기 운전 시 100 kg. 비전 위치보정을 내장해 부품이 틀어졌을 때 픽앤플레이스 위치를 자동 보정. 현재 서버·반도체 라인에서 POC를 진행 중이며 판매 개시는 2026년 말, 고객 인도는 2027년 1분기 예정. Techman은 신베이시 린커우에서 생산하며, 2026년 1 – 7월 매출 NT$11.4억(약 US$3,570만) 중 AMR과 협동로봇 결합 제품이 약 30%.
- 관련 근거: [Taipei Times, 2026-08-20](https://www.taipeitimes.com/News/biz/archives/2026/08/20/2003862776) [2차 인용]
- 기존 대비 변화: 기존 TM 협동로봇 라인은 TM5 – TM25 계열의 단완 중심이었다. 양팔 동기 100 kg은 협동로봇 가반하중 상한을 산업용 로봇 영역으로 끌어올린 것으로, 2026년 상반기 ABB PoWa·AUBO G시리즈로 이어진 협동로봇의 산업급 성능화 흐름의 연장선이다.
- 생산기술 시사점: 단일 협동로봇으로 다루기 어려웠던 대형·중량 부품(모듈 어셈블리, 하우징, 대형 사출품)의 안전펜스 없는 반송·조립을 검토할 여지가 생긴다. 다만 양팔 동기 제어의 정밀도·사이클타임 데이터가 미공개여서 조립 공정 적용 판단은 이르다.
- 확인 필요: Techman 공식 뉴스 페이지에 미게시(자사 최신 게시물 2026-07-01). 반복정밀도, 양팔 동기 제어 방식, 안전정격(ISO 10218 카테고리) 미공개.

**[NVIDIA] Jetson Orin Nano 2 — 엔트리급 로봇 엣지 AI 모듈 추론 성능 2배**

- 확인 내용: 2026-08-25 발표. AI 연산 78 TOPS, 메모리 8 GB, 8코어 Arm CPU. Tensor Core 개선과 메모리 대역폭 증가로 전세대(Jetson Orin Nano Super) 대비 추론 성능 2배, 15 W 모드 동일 성능 기준 전력 40% 절감. 엣지에서 Cosmos, Nemotron, Gemma 4, Qwen 3 구동. 초기 채택사에 Cognex(머신비전)와 Doosan Bobcat 포함. 모듈·개발킷 공급은 2027년 상반기이며 생태계 파트너 20개사 이상(ADLINK, Advantech, Aptiv, Connect Tech 등).
- 관련 근거: [NVIDIA Newsroom, 2026-08-25](https://nvidianews.nvidia.com/news/nvidia-announces-jetson-orin-nano-2-robotics-computer-to-redefine-entry-level-edge-ai) [공식 발표]
- 기존 대비 변화: 기존기술 고도화. 아키텍처 변경이 아닌 성능·전력 개선이다. Cognex가 초기 채택사로 명시된 점이 비전 검사 장비 쪽 엣지 추론 이관 신호다.
- 생산기술 시사점: 외관검사·비전가이드 픽킹처럼 현장 추론이 필요한 설비에서, 산업용 PC 없이 카메라·컨트롤러 단에 AI 추론을 내장하는 구성의 원가·전력 여건이 개선된다. 다만 공급이 2027년 상반기여서 당장 설비 사양에 반영할 단계는 아니다.
- 확인 필요: 산업 온도 등급, 기능안전 인증 여부, 국내 공급 일정.

**[Dyna Robotics] DYNA-2 World-Action Model — 인간 1인칭 영상 사전학습 기반 로봇 파운데이션 모델**

- 확인 내용: 2026-08-24 공개. 기존 VLA(Vision-Language-Action) 구조 대신 영상 생성 기반 World-Action Model을 채택하고, 인간 1인칭 영상 100만 시간 이상(약 170년 분량)으로 사전학습. 고정밀 제조 태스크에서 작업 성공률을 20%에서 80 – 90%로 사전학습 규모만으로 향상시켰다고 발표. DYNA-1 대비 태스크 완료 1.55배, 고객 실배치 환경 합격률 87% 대 46%, 지시 이행 성능은 영상 코-트레이닝으로 133% 향상. 수 시간 수준의 현장 파인튜닝으로 적응 가능하며 병뚜껑 개방 태스크는 13분 데이터로 학습했다고 제시.
- 관련 근거: [Robotics 24/7, 2026-08-24](https://www.robotics247.com/article/dyna-robotics-unveils-dyna-2-world-action-model) [2차 인용]
- 기존 대비 변화: 로봇 학습의 병목이던 로봇 시연 데이터 수집을 인간 영상으로 대체하려는 접근이다. 2026년 7월 Yaskawa–SoftBank VLA 와이어하니스 실증과 같은 흐름이나 아키텍처 자체를 VLA에서 world model로 바꾼 점이 다르다.
- 생산기술 시사점: 다품종 소량 조립·체결처럼 티칭 공수가 큰 공정에서, 프로그래밍 방식이 좌표 티칭에서 데이터 학습으로 이동할 가능성을 시사한다. 다만 수치가 벤더 자체 발표이고 태스크 정의가 불명확해 현 시점 양산 적용 근거로는 부족하다.
- 확인 필요: 고정밀 제조 태스크의 구체 내용, 공차 수준, 사이클타임, 반복 재현성. 제3자 검증 없음.

**[IDS Imaging] Nion 3D ToF 카메라 — 1.2 MP 산업용 ToF 카메라 양산 전환**

- 확인 내용: 2026-08-21 공개. 해상도 1.2 MP @ 30 fps, 측정 범위 0.3 – 7.5 m, IP67 하우징, PoE 단일 케이블 설치. onsemi AR0130 뎁스 센서 채용으로 일반 ToF 대비 노이즈·주변광·모션 안정성이 개선됐다고 주장. 발표 단계에서 양산 및 웹스토어 판매로 전환.
- 관련 근거: [A3 Automate, 2026-08-21](https://www.automate.org/news/high-resolution-1-2-mp-time-of-flight-technology-for-fast-precise-3d-data-in-any-environment) [2차 인용]
- 기존 대비 변화: 기존기술 고도화. 산업용 3D ToF 해상도가 VGA급에서 1.2 MP급으로 올라가고 IP67·PoE로 현장 설치 조건이 단순화됐다.
- 생산기술 시사점: 비전가이드 로봇의 빈피킹·팔레타이징, 부품 유무·위치 확인용 3D 센싱에서 배선·방진방수 대응 부담이 줄어든다. 정밀 조립용 정합 정확도는 별도 검증이 필요하다.
- 확인 필요: 깊이 정확도(mm) 수치, 로봇 컨트롤러 연동 인터페이스.

**[알에스오토메이션] 피지컬 AI 표준 구동플랫폼 — 로봇 모션제어 풀스택 국책과제 착수**

- 확인 내용: 2026-08-25 보도. 산업용 로봇 모션제어(서보·컨트롤러·액추에이터)를 AI와 결합한 표준 구동플랫폼 개발 과제에 착수. 총사업비 53억 7,300만 원(정부지원금 36억 원 이내), 기간 2026 – 2029년 45개월. 목표는 TRL 5에서 8, 핵심 구동·제어 기술 국산화율 90%. 4개 핵심기술은 지능형 다축 에지 컨트롤러 iMEC, 스마트 통합 액추에이터 SIA, AI 자동튜닝 다축 서보, 제어데이터 파이프라인이며 공동연구기관 세이지가 PHM·시뮬레이션을 담당. 협동로봇·휴머노이드 공용 표준을 지향.
- 관련 근거: [로봇신문, 2026-08-25](https://www.irobotnews.com/news/articleView.html?idxno=48081) [2차 인용]
- 기존 대비 변화: 신규 과제 착수 단계다. 개별 서보·컨트롤러 국산화가 아니라 AI 자동튜닝·PHM까지 묶은 스택 단위 접근이라는 점이 기존과 다르다.
- 생산기술 시사점: 국내 로봇·자동화 설비의 서보·컨트롤러 조달 구조에 중장기 영향 요인이다. 다만 TRL 8 달성 목표가 2029년이므로 당분간 조달 판단에 영향은 없다.
- 확인 필요: 참여 로봇 메이커, 실증 라인, iMEC·SIA의 구체 사양.

**[Foxglove] Agentic Data Platform + Semantic Search — 로봇 데이터 플랫폼에 자연어 검색 추가**

- 확인 내용: 2026-08-21 Actuate 26(샌프란시스코)에서 발표. 앱 내장 Agent Sidebar가 자연어로 기록 검색·추론·레이아웃 구성·로그 로딩을 수행. Semantic Search는 토픽별 초당 1프레임 임베딩에 대한 벡터 검색을 사용하며, 벡터를 오브젝트 스토리지의 Lance 테이블에 저장하고 디바이스·시간·토픽 기준 구조적 필터링 후 코사인 유사도로 랭킹. 프레임 시퀀스 단위 동작 검색은 NVIDIA Cosmos 월드 모델 기반.
- 관련 근거: [Robotics 24/7, 2026-08-21](https://www.robotics247.com/article/actuate-26-foxglove-introduces-agentic-data-platform-for-physical-ai-and-semantic-search) [2차 인용]
- 기존 대비 변화: 기존 로봇 로그 시각화 도구에서 자연어 질의·에이전트 기반 분석으로 확장. 로봇 운용 데이터의 사후 분석 방식 변화다.
- 생산기술 시사점: 로봇 셀 이상·정지 원인 분석 시 로그 수동 탐색 공수를 줄이는 방향이다. 다만 현재 대상이 로봇 개발·연구 데이터 중심이고 산업용 로봇 컨트롤러 로그 연동 여부가 확인되지 않아 라인 적용성은 불명확하다.
- 확인 필요: 산업용 로봇 컨트롤러 데이터 커넥터 지원 여부, 온프레미스 구축 가능 여부.

### 물류·휴머노이드·EOAT

**[Logic Robotics] Octopus 천장 설치형 다암 케이스 피킹 시스템 — 툴 교체 대신 툴별 암 병렬 배치**

- 확인 내용: 2026-08-25 주간 발표. 천장 현수형 갠트리 로봇으로, 다암 구성의 각 암이 독립 동작하며 흡착컵·클램프·그리퍼 등 서로 다른 EOAT를 동시에 장착한다. 모든 툴이 동시에 활성 상태여서 기계적 툴 교체로 인한 정지 시간이 발생하지 않는 툴체인저 대체 개념. 자사 AMR인 Logic Pallet과 연동해 AMR이 품목·오더별로 적합한 암 아래로 이동·정위치하는 goods-to-robot 방식으로 운용. Logic Interface Network(LINK)가 로봇암·AMR·센서·비전 데이터를 단일 결정 계층으로 통합해 Octopus의 공간 인식, AMR의 중량 데이터, 이미지·제품코드를 중앙 item master와 실시간 대조하며 픽·플레이스마다 검증. 바닥 면적을 점유하지 않아 통로 폭을 소모하지 않는다.
- 관련 근거: [Automated Warehouse, 2026-08-25](https://www.automatedwarehouseonline.com/logic-octopus-picks-cases-overhead-loading-zones/) [2차 인용]
- 기존 대비 변화: 신제품. 바닥 설치형 고정 팔레타이징 셀에서 천장 갠트리와 이동형 팔레트 조합으로 구조를 반전시켰다. EOAT 관점의 변화점은 툴 교체 대신 툴별 암 병렬 배치다.
- 생산기술 시사점: 다품종 혼류 라인에서 툴체인저 교체 시간이 택트 손실의 주요 원인일 때, 툴을 순차 교체하지 않고 병렬 배치하는 접근이 대안이 된다. 다만 다암 갠트리는 셀 초기 투자와 천장 구조 보강이 전제이며, 물류센터 사례로 사출·조립 라인 적용 실적은 없다.
- 확인 필요: 처리량(cases/hr), 암 개수·페이로드, 가격, 실제 도입 사이트.

**[KUKA] Pack Expo 2026 팔레타이징 데모 — AMR 상시 결합 양면 셀과 ISO 10218:2025 대응 표기**

- 확인 내용: 2026-08-20 발표. 2026-10-18 – 21 시카고 McCormick Place에서 파트너 3사와 실제 워크셀 데모를 진행한다고 예고. Compendium Group 셀은 KR AGILUS 6축 로봇 2대가 협조 동작해 1대가 카톤을 잡고 다른 1대가 판지 인서트를 투입하며, 셀 프로그래밍은 KUKA.PLC mxAutomation(PLCopen 인증 인터페이스)으로 PLC 환경 내에서 직접 수행하고 진단·상태 정보가 컨트롤러로 역전송된다. FOCUS Integration 셀은 양면형 CUBE 팔레타이징·디팔레타이징 구성에 KR IONTEC과 KMP 1500P AMR을 조합해, 완성 팔레트를 AMR이 자율 반출하는 동안 반대편에서 팔레타이징을 계속하는 무중단 구성이다. iiQKA.OS2 OS, KR C5-2 컨트롤러, iiQWorks.Sim 오프라인 시뮬레이션을 적용했고, iiQKA.OS2가 ISO 10218:2025 및 사이버 회복력 요구에 대응한다고 명시. AMR 세션에서는 VDA 5050 기반 혼합 벤더 플릿 상호운용성을 다룰 예정.
- 관련 근거: [Automated Warehouse, 2026-08-20](https://www.automatedwarehouseonline.com/kuka-show-automation-packaging-food-pack-expo-2026/) [2차 인용]
- 기존 대비 변화: 적용 수준은 전시 예고이며 개별 제품은 기존 라인업이다. 변화점은 팔레타이징 셀 내 AMR 상시 결합 구성과 ISO 10218:2025 대응 표기다. 2026-08-12자로 보고한 iiQKA.OS2 통합의 후속 진전에 해당한다.
- 생산기술 시사점: 완성 팔레트 반출을 AMR이 담당해 셀 정지를 없애는 양면 구성은 라인사이드 물류와 EOL 자동화의 경계를 없애는 방향이다. PLC 환경 내 로봇 프로그래밍은 로봇 전용 티치펜던트 의존도를 낮춰 설비보전 인력 운영 측면에서 검토 가치가 있다. ISO 10218:2025 대응과 VDA 5050 혼합 플릿은 신규 발주 사양서 항목으로 반영 가능하다.
- 확인 필요: 데모 셀의 사이클타임·처리량, iiQKA.OS2의 ISO 10218:2025 적합성 인증 여부(현재는 자사 주장 수준).

**[Brightpick] Autopicker 44대 추가 도입 — 모바일 매니퓰레이터 3년 스케일업 궤적 공개**

- 확인 내용: 2026-08-21 발표. 유럽 제약 유통사 Dr. Max Group에 Autopicker 모바일 매니퓰레이터 44대를 추가 배치해 기존 프라하 DC 30대와 합쳐 총 74대. 신규 배치처는 Viapharma Ostrava 22대(재고 보충·의약품 피킹)와 Dr. Max Bratislava 22대(온라인 오더 처리·피킹)이며 2026년 하반기 완료 목표. Autopicker는 3D 비전과 자체 물리 AI를 탑재해 창고 통로 내에서 직접 피킹·오더 통합을 수행하며 창고 구조 변경 없이 확장 가능하다고 주장. 프라하 실적으로 일 20,000개 품목 처리, 수작업 피킹 인력 95% 감소, 창고 용량 40% 증가를 제시(업체 주장 수치). 최초 도입은 2023년 말 9대.
- 관련 근거: [Automated Warehouse, 2026-08-21](https://www.automatedwarehouseonline.com/brightpick-to-deploy-44-more-robots-with-dr-max-group/) [2차 인용]
- 기존 대비 변화: 신규 적용사례이며 제품 자체는 기존이다. 변화점은 9대에서 30대, 74대로 이어진 3년 스케일업 궤적이 공개된 점이다.
- 생산기술 시사점: 모바일 매니퓰레이터의 실증에서 확산으로 이어지는 곡선을 정량적으로 볼 수 있는 사례다. 창고 구조 변경 없이 대수 증설로 캐파를 늘리는 방식은 브라운필드 라인사이드 물류 자동화의 단계적 투자 모델로 참고 가능하다. 다만 대상이 의약품 유통 물류이며 제조 라인 부품 공급 적용 실적은 아니다.
- 확인 필요: Autopicker 페이로드·픽률(picks/hr), 그리퍼 형식, 자동차 부품 형상 대응 가능 여부.

**[Movu Robotics / Jungheinrich] 4방향 셔틀 Atlas와 WMS 통합 — 상호 우선 파트너 체결**

- 확인 내용: 2026-08-24 공개. Movu Robotics(벨기에 Lokeren, stow Group 계열)가 Jungheinrich를 자사 셔틀의 우선 통합 파트너로, Jungheinrich는 Movu를 우선 공급사로 지정. 4방향 셔틀 Atlas(다열 심층 팔레트 입출고)를 Jungheinrich WMS·소프트웨어 생태계에 직접 통합하고 표준화된 소프트웨어 인터페이스로 시운전·기존 시스템 연결 기간을 단축한다는 내용. 셔틀·컨베이어·모바일 로봇을 Jungheinrich 통합 소프트웨어 스택에서 오케스트레이션. Movu 셔틀은 200개 이상 창고에 도입돼 있으며 진행 중 사례로 네덜란드 Almere의 Mascot online 팔레트 창고(약 11,500 팔레트 로케이션, 4방향 셔틀 10대)를 언급.
- 관련 근거: [Automated Warehouse, 2026-08-24](https://www.automatedwarehouseonline.com/movu-robotics-picks-jungheinrich-as-its-preferred-integrator/) [2차 인용]
- 기존 대비 변화: 적용 범위 확대와 소프트웨어 통합. 제품은 기존 Atlas 셔틀이며 변화점은 셔틀 하드웨어와 지게차·WMS 벤더 소프트웨어의 표준 인터페이스 통합이다.
- 생산기술 시사점: 고밀도 팔레트 보관과 사내 물류 장비를 단일 소프트웨어 스택으로 묶는 흐름이다. 부품 자동창고 신설·증설 시 셔틀 벤더와 WMS 벤더를 분리 발주할 때 발생하던 인터페이스 개발 공수를 줄일 수 있는 조합이다.
- 확인 필요: 인터페이스 표준(VDA 5050 여부), 시운전 기간 단축 실측치.

### 참고: 도입 여건 관련 조사 결과

**[Intel] The Robotics Readiness Gap — 안전 표준 부재가 로봇 도입 지연 요인으로 정량 확인**

- 확인 내용: 원보고서 2026-08-21 발표, 국내 보도 08-23. 6개국 800명(연매출 5억 달러 이상 기업 임원) 대상 조사. 60%가 5년 내 로봇 운영체제 구축을 예상하나 실제 전략 수립은 40%이며, 한국은 기대 76% 대 전략 수립 27%로 격차가 가장 컸다. 한국 응답자 82%가 100 ms 이내 의사결정을 요구하고 그중 38%는 10 ms 이내를 요구해 조사국 중 가장 높았다. 55%가 안전 문제로 도입 지연을 경험(한국 51%)했고, 68%가 명확한 글로벌 표준이 도입을 가속한다고 응답(한국 64%).
- 관련 근거: [산업일보, 2026-08-23](https://kidd.co.kr/news/247109) [업계 분석]
- 기존 대비 변화: 2026년 7월에 다룬 ISO 10218 개정 건의 후속 맥락 데이터다. 표준 개정 자체의 진전은 아니고, 도입 현장에서 표준 부재가 병목으로 작용한다는 정량 근거가 추가됐다.
- 생산기술 시사점: 협동로봇 도입 시 안전성 평가(ISO/TS 15066 기반 접촉력 측정 등) 절차를 사내 표준으로 선제 정비해 두는 것이 도입 리드타임 단축에 기여한다는 근거가 된다.
- 확인 필요: 원보고서 원문 URL 미확인(국내 2차 보도로만 확인). 조사 대상 6개국 구성, 제조업 비중 미확인.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 휴머노이드 감속기 제조공법이 절삭에서 성형으로 전환(Schaeffler, 2027년 양산) | 로봇 구동부품 원가 병목이 정밀가공이라는 점이 공식 확인. 자동차 부품 성형 공정 역량의 전환 경로가 열림 |
| 기술 변화 | 물리 AI 제어를 EtherCAT·FSoE 등 산업 표준 안전 프로토콜 위에 구성(Dexterity–Beckhoff) | 모바일 매니퓰레이터의 기존 공장 안전 인프라 편입 방식이 구체화. 사이트별 안전 구성을 소프트웨어로 흡수 |
| 기술 변화 | 사출 데이터 수집 대상이 사출기에서 연결 주변장치로 확장. OPC UA 대응과 실제 데이터 접근권이 별개라는 제약 명시 | 설비 사양서에 OPC UA 노드 공개 범위와 IO 매핑 제공 여부를 계약 조건으로 명시할 필요 |
| 업체 변화 | 메이저 로봇 메이커(FANUC·ABB·KUKA·Yaskawa·UR·국내 3사) 로봇 신규 발표 기간 내 0건. 변화는 전량 구동부품·엣지 컴퓨트·제어 아키텍처 층위 | 로봇 경쟁축이 완성 로봇 사양에서 구동부품 원가와 제어·안전 스택으로 이동 중 |
| 업체 변화 | 협동로봇 가반하중 상향 경쟁 지속(Techman 양팔 100 kg, 앞선 ABB PoWa·AUBO 40 kg) | 대형·중량 부품의 무펜스 반송·조립 검토 여지 확대. 다만 정밀도 데이터 미공개 |
| 적용사례 변화 | Wittmann 4.0 + TEMI+ 통합 셀 영국 양산 적용(1,000개당 80.4 kWh 절감 제시), Brightpick 모바일 매니퓰레이터 9대에서 74대로 3년 확산 | 셀 통합·모바일 매니퓰레이터가 파일럿에서 다대수 운영 단계로 넘어가는 궤적이 정량 확인됨 |
| 적용사례 변화 | Fakuma 2026·Pack Expo 2026 전시 데모 다수(Negri Bossi 셀 2종, WITTMANN Primus, KUKA 양면 팔레타이징) | 모두 전시 예고·데모 수준. 양산 적용과 구분 필요 |
| 확인 필요 | Schaeffler 성형 감속기 정격 토크·수명, Techman TM45S 반복정밀도, Wittmann 82.3% 절감의 비교 조건, iiQKA.OS2의 ISO 10218:2025 인증 여부 | 모두 벤더 주장 단계. 정량 근거 확보 후 판단 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Schaeffler 성형 스트레인웨이브 감속기 공식 릴리스 원문 | 로봇 구동부품 | 정격 토크·감속비·반복 위치정밀도·수명 시험 조건 확인 |
| 2 | HD현대로보틱스 베이징현대 4공장 통합 자동화(8/18 보도, 차체조립 로봇 299대·용접 자동화율 100%) | 로봇 적용사례 | 조사 기간 직전 건. 4개 차종 유연생산 구성의 기술 근거 확인 |
| 3 | Netstal Elion 3200 CAP(8/19 공식 블로그, 형체 3,200 kN·사출압 2,400 bar·72캐비티 1.8초) | 사출기 | 조사 기간 직전 건. 전동 라인업 대형화 및 2027년 보강 계획 후속 |
| 4 | i-mold TGBL 터널게이트 인서트(8/19, 용융 흐름 최대 270° 전환, 내측 게이팅) | 금형·게이팅 | 외관면 게이트 자국 제거 방식의 적용 조건·수지 대응 범위 |
| 5 | Fakuma 2026(10/12 – 16) 사전 발표 2차 물결 | 사출 전반 | ENGEL·ARBURG·KraussMaffei 등 미발표 메이저의 전시 사양 |
| 6 | JSW 공식 뉴스(스크립트 렌더링으로 취득 실패) | 사출기 | 기간 내 발표 유무 재확인 |
| 7 | EUROMAP·OPC UA 규격 2026년 개정 여부 | 표준 | 주변장치 연계 인터페이스 표준의 실제 변경 여부 |
| 8 | Techman TM45S 공식 사양 게시 | 협동로봇 | 반복정밀도·안전정격(ISO 10218 카테고리) 확인 |

## 출처

### 사출성형기술

- [PolyForm NEXT, WITTMANN at Fakuma 2026: Primus products for temperature control, recycling and automation, 2026-08-20](https://www.polyformnext.de/automation/wittmann-at-fakuma-2026-primus-products-for-temperature-control--recycling--and-automation.htm) (독일어 매체, 영문 게재)
- [PolyForm NEXT, Negri Bossi auf der Fakuma 2026: Spritzgießlösungen für Verpackung und Medizintechnik, 2026-08-21](https://www.polyformnext.de/spritzgiessen/negri-bossi-auf-der-fakuma-2026-spritzgiessloesungen-fuer-verpackung-und-medizintechnik.htm) (독일어)
- [Interplas Insights(BP&R), Use the data, work smarter, 2026-08-21](https://interplasinsights.com/plastics-machinery/injection-moulding-machine-news/use-the-data-work-smarter/)
- [Plastics Today, Smart manufacturing transforms injection molding industry operations, 2026-08-25](https://www.plasticstoday.com/industry-trends/smart-manufacturing-transforms-injection-molding-industry-operations)
- [Netstal, Live auf der Fakuma: vollelektrische Power für 72 Verschlüsse in 1,8 Sekunden, 2026-08-19](https://www.netstal.com/live-auf-der-fakuma-vollelektrische-power-fuer-72-verschluesse-in-18-sekunden/) (독일어, 기간 직전 참고)
- [PolyForm NEXT, i-mold at Fakuma 2026: new inserts allow for injection molding on the inside, 2026-08-19](https://www.polyformnext.de/hot-runner-systems/i-mold-at-fakuma-2026-new-inserts-allow-for-injection-molding-on-the-inside.htm) (기간 직전 참고)
- [WITTMANN Group, Sales Northern Germany, 2026-08 확인](https://www.wittmann-group.com/en/article-sales-northern-germany) (발표일 미확정, 참고)

### 로봇제조기술

- [The Robot Report, Schaeffler plans to mass manufacture gearboxes for humanoids in 2027, 2026-08-21](https://www.therobotreport.com/schaeffler-plans-to-mass-manufacture-gearboxes-for-humanoids-in-2027/)
- [Automated Warehouse, Dexterity superhumanoid robot uses physical AI for truck loading and unloading, 2026-08-20](https://www.automatedwarehouseonline.com/dexterity-superhumanoid-robot-uses-physical-ai-truck-loading-unloading/)
- [Automated Warehouse, KUKA to show automation for packaging and food at Pack Expo 2026, 2026-08-20](https://www.automatedwarehouseonline.com/kuka-show-automation-packaging-food-pack-expo-2026/)
- [Automated Warehouse, Brightpick to deploy 44 more robots with Dr. Max Group, 2026-08-21](https://www.automatedwarehouseonline.com/brightpick-to-deploy-44-more-robots-with-dr-max-group/)
- [Automated Warehouse, Movu Robotics picks Jungheinrich as its preferred integrator, 2026-08-24](https://www.automatedwarehouseonline.com/movu-robotics-picks-jungheinrich-as-its-preferred-integrator/)
- [Automated Warehouse, Logic Octopus picks cases in overhead loading zones, 2026-08-25](https://www.automatedwarehouseonline.com/logic-octopus-picks-cases-overhead-loading-zones/)
- [Taipei Times, Techman Robot unveils dual-arm cobot, 2026-08-20](https://www.taipeitimes.com/News/biz/archives/2026/08/20/2003862776)
- [NVIDIA Newsroom, NVIDIA announces Jetson Orin Nano 2 robotics computer, 2026-08-25](https://nvidianews.nvidia.com/news/nvidia-announces-jetson-orin-nano-2-robotics-computer-to-redefine-entry-level-edge-ai)
- [Robotics 24/7, Dyna Robotics unveils DYNA-2 World-Action Model, 2026-08-24](https://www.robotics247.com/article/dyna-robotics-unveils-dyna-2-world-action-model)
- [Robotics 24/7, Actuate 26: Foxglove introduces agentic data platform and semantic search, 2026-08-21](https://www.robotics247.com/article/actuate-26-foxglove-introduces-agentic-data-platform-for-physical-ai-and-semantic-search)
- [A3 Automate, High-resolution 1.2 MP time-of-flight technology, 2026-08-21](https://www.automate.org/news/high-resolution-1-2-mp-time-of-flight-technology-for-fast-precise-3d-data-in-any-environment)
- [로봇신문, 알에스오토메이션, 피지컬 AI 표준 구동플랫폼 국책과제 착수, 2026-08-25](https://www.irobotnews.com/news/articleView.html?idxno=48081) (한국어)
- [산업일보, 인텔 The Robotics Readiness Gap 조사, 2026-08-23](https://kidd.co.kr/news/247109) (한국어)
- [FANUC, ニュースリリース 2026-08-24](https://www.fanuc.co.jp/ja/profile/pr/newsrelease/2026/news20260824.html) (일본어, 5축 가공 관련으로 본 브리핑 대상 외 – 확인용)
- [더구루, HD현대로보틱스 베이징현대 4공장, 2026-08-18](https://www.theguru.co.kr/news/article.html?no=105877) (한국어, 기간 직전 참고)
