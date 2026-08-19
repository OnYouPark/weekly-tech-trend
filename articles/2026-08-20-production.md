---
title: 생산기술 신규기술 브리핑 - 2026년 8월 3주차
date: 2026-08-20
type: production
period: 2026년 8월 3주차
tags: [WITTMANN, Ingrinder, Braunform, ROBOSHOT, EUROMAP 82, SABIC Ultem, Pudu MP2000, FactoryTalk Orchestration]
summary: 사출은 Fakuma 2026 사전 발표가 절정에 들어 WITTMANN이 취출·분쇄·재투입을 셀 내부에서 닫는 폐루프 구성을, FANUC은 전 캐비티 압력 계측과 EUROMAP 82.x 기반 주변장치 연계를 셀 표준 사양으로 제시. 로봇은 주요 산업용·협동로봇 메이커의 신규 발표가 한 건도 없었고, 대신 AMR 오케스트레이션과 촉각센서 공급망 쪽에서 변화가 확인됨
---

# 생산기술 신규기술 브리핑 - 2026년 8월 3주차

> 2026-08-14 – 2026-08-20 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

### WITTMANN Ingrinder 워크셀 – 취출·분쇄·재투입을 셀 밖으로 내보내지 않고 닫는 구성을 정량 사양과 함께 공개

- 확인 내용: Fakuma 2026(2026-10-12 – 10-16, 홀 B1 부스 1204)에서 자사 부품 EcoFritz 클램프를 부스 내 라이브 생산. 셀 구성은 서보유압 SmartPower 60 + WX90 서보 취출기 + S-Max 분쇄기, Röttger 2캐비티 금형, 유리섬유 강화 PA를 Airmould 가스사출로 성형. 사출기·로봇·컨베이어·인라인 분쇄기를 공장 출하 단계에서 하나의 유닛으로 통합하고 보호 하우징을 기계에 직접 고정한다. 스프루를 셀 밖으로 반출하지 않고 셀 내부에서 분쇄해 원료에 재혼합하며, 이송은 Feedmax Clean 진공 로더가 담당해 1,000 µm 미만 입자 기준 최대 80 % 분리율로 분진·미분을 제거한다. 품질 안정화는 HiQ Flow가 담당해 사출 구간 용융 점도를 연속 분석하고 설정값 이탈 시 동일 사이클 내에서 절환점과 보압을 즉시 보정한다. Airmould용 질소는 부스 내 N2easy 질소발생기로 현장 생성. 독일 뉘른베르크 테크니컬센터에서는 주말 자율 무인 생산(자가 태양광 전력, 재생재 비율 최대 100 %)으로 동일 부품을 실제 생산 중. 적용 수준: 전시 데모 + 자사 사업장 양산.
- 관련 근거: [WITTMANN 공식 보도자료 "Systematic process integration for high-grade recycling", 2026년 8월](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-press-release-08-26-ecofritz-en.pdf) [공식 발표] / [umweltwirtschaft.com (독일어), 2026-08-19](https://www.umweltwirtschaft.com/solutions/wittmann-zeigt-geschlossenen-materialkreislauf-auf-der-fakuma-214513) [2차 인용]
- 기존 대비 변화: 스프루 재활용 자체는 기존 기술이다. 이번 발표에서 새로운 부분은 취출기 기종·분쇄기·로더·질소발생기까지 특정된 실제 구성과 제진 성능의 정량치(1,000 µm 미만 80 %)가 함께 공개된 점, 그리고 재생재 혼입에 따른 점도 변동을 별도 공정 조정이 아니라 동일 사이클 내 보정으로 흡수하도록 역할을 나눈 점이다.
- 생산기술 시사점: 재생재 투입률을 올릴 때 실무 병목은 미분 혼입에 따른 계량 편차와 용융 점도 산포 두 가지다. 이번 구성은 전자를 로더 단계의 물리 분리로, 후자를 점도 계측 기반 보정으로 각각 분담시킨다. 유리섬유 강화 PA와 가스사출 조합에서 시연한다는 점에서 구조 부품 계열의 자가 리사이클 설계에 참고 가치가 있다.
- 확인 필요: 80 % 분리율의 측정 조건(재생재 종류·이송 거리·비교 대상), 재생 혼합률 상한과 물성 저하 정도, HiQ Flow 적용 시 실측 중량 편차, 보도자료 정확한 배포 일자(문서에 월 단위만 표기).

### FANUC ROBOSHOT S180C / S350C – 전 캐비티 압력 계측과 EUROMAP 82.x 기반 주변장치 연계를 셀 표준 사양으로 제시

- 확인 내용: Fakuma 2026(홀 7, 부스 A7-7304)에서 전동 ROBOSHOT 셀 2기 운용 예고. S180C는 기술부품용 구성으로 전 캐비티에 대한 캐비티 내압 모니터링과 시뮬레이션 연계 핫러너 밸런싱을 탑재해 사출 사이클 중 압력 편차를 보정한다. S350C는 의료 포장용 통합 생산 셀로 취출·포장 로봇이 기계 인터페이스에서 직접 언로딩·포장하도록 기계적으로 동기화된다. CRX 협동로봇은 생성형 AI로 음성 지시를 로봇 경유점으로 변환해 초기 티칭의 수동 코딩을 대체하고, 머신비전으로 부품 자세를 계산해 핸들링 궤적을 동적 보정한다. 디지털 계층은 LINKi2와 MES 연계로 구성되며, 사출기 – 온조기 – 핸들링 장치 간 데이터 교환은 EUROMAP 82.1 및 82.2 표준 인터페이스로 처리한다. WebAPI와 Moldex3D 시뮬레이션 데이터를 연동해 해석 예측값과 실기 성능을 대조한다. 적용 수준: 전시 데모(양산 적용 사례 미제시).
- 관련 근거: [Automation International, 2026-08-18](https://www.automation-mag.com/news/113805-fanuc-showcases-smart-injection-moulding,-robotics-digital-manufacturing-at-fakuma-2026) [2차 인용, FANUC 보도자료 기반] / [Industry EMEA, 2026-08-18](https://www.industryemea.com/news/113805-fanuc-showcases-smart-injection-moulding,-robotics-digital-manufacturing-at-fakuma-2026) [2차 인용]
- 기존 대비 변화: 캐비티 압력 센싱과 핫러너 밸런싱은 개별 옵션으로 존재하던 기능이다. 이번에는 전 캐비티 계측과 해석 연계 밸런싱을 기종 표준 셀 구성으로 묶어 제시했고, 온조기까지 EUROMAP 82.2로 포함한 데이터 계통을 명시했다. Moldex3D 해석 데이터를 실기 데이터와 대조하는 구성도 함께 제시됐다.
- 생산기술 시사점: 전 캐비티 압력을 사이클 단위로 취득하면 다캐비티 금형의 게이트별 편차를 시운전 단계에서 수치로 다룰 수 있고, 캐비티 단위 품질 추적성의 전제 조건이 확보된다. 온조기·취출기까지 표준 인터페이스로 묶는 구조는 설비 이기종 혼용 라인의 데이터 수집 스키마를 통일하는 방향이므로, 신규 셀 사양서의 인터페이스 요구 항목으로 검토 가치가 있다.
- 확인 필요: 압력 센서 방식(직접식·간접식)과 계측 가능 캐비티 수 상한, 밸런싱 알고리즘의 자동 보정 범위, LINKi2의 주변장치 데이터 수집 범위. 두 매체 기사 하단 "Additional Context" 절은 편집부가 추가한 내용으로 공식 발표가 아니며 해당 수치는 인용하지 않았다.

### 로봇제조기술

### 주요 산업용·협동로봇 메이커 – 조사 기간 내 신규 기술 발표 없음

- 확인 내용: FANUC, ABB, KUKA, Yaskawa, Kawasaki, Nachi, Epson, Mitsubishi Electric, Denso, Omron, Stäubli, HD현대로보틱스, Universal Robots, 두산로보틱스, Techman Robot, AUBO, 한화로보틱스, Siemens, RoboDK, Visual Components, Rockwell, Beckhoff의 공식 뉴스룸을 직접 순회한 결과 2026-08-14 – 2026-08-20 구간에 신규 제품·기능 발표가 확인되지 않았다. FANUC 일본 What's New와 Yaskawa 일본 뉴스는 해당 기간 게시물이 모두 IR·결산 항목이었다. 산업 매체(The Robot Report, control.com, A3, 로봇신문) 게재분도 전수 확인했으나 해당 범주 발표는 없었다.
- 관련 근거: [FANUC What's New, 확인일 2026-08-20](https://www.fanuc.co.jp/en/whatsnew/) [공식 발표] / [Yaskawa 뉴스릴리스, 확인일 2026-08-20](https://www.yaskawa.co.jp/newsrelease) [공식 발표] / [The Robot Report 산업용 로봇, 확인일 2026-08-20](https://www.therobotreport.com/category/robots-platforms/industrial-robots/) [업계 분석]
- 기존 대비 변화: 2026-08-12 회차에서 FANUC M-810과 KUKA iiQKA.OS2가 동시에 나온 직후의 공백 구간이다. 다음 발표 밀집 구간은 AMB 2026(2026-09-15 – 09-19, 슈투트가르트) 개막 전후로 예상된다.
- 생산기술 시사점: 로봇 본체·컨트롤러의 세대 전환 발표는 8월 초에 집중됐고, 이번 주 변화는 로봇 단품이 아니라 상위 운영 계층(자재 이동 오케스트레이션)과 하위 부품 계층(촉각센서 공급망)에서 나타났다.
- 확인 필요: KUKA 공식 뉴스룸은 JavaScript 렌더링으로 목록 직접 확인에 실패했다. 8/12자 KUKA AMB 2026 사전 공개 건은 조사 기간 직전이므로 이번 회차 대상에서 제외했다.

### Rockwell Automation FactoryTalk Orchestration – AMR 자재 이동을 생산수요와 동기화하고 자사 공장 적용 수치를 공개

- 확인 내용: OTTO Motors AMR을 포트폴리오에 편입한 이후 개발한 소프트웨어. AMR을 제조사의 IT·OT 시스템에 개별 커스텀 연동하던 방식을 대체해 주문 생성 – 재고 관리 – 라인 투입 – 생산 통과 – 창고 출고까지 자재 이동을 생산수요 기준으로 조율한다. Rockwell이 오하이오주 Twinsburg 자사 공장에 먼저 적용했다. 기존에는 AMR이 작업자 수동 카트를 대체하되 자재 필요 시점 신호와 이동 지시는 사람이 담당했고, 이를 생산수요와 연결한 결과 재공재고(WIP) 약 50 % 감소, 처리량 약 20 % 개선을 보고했다. 카트·재고 스테이징에 쓰던 공간을 생산 공간으로 전환할 수 있다고 설명한다. 적용 수준: 자사 공장 양산 적용(외부 고객 실적 미공개).
- 관련 근거: [Automated Warehouse, 2026-08-18](https://www.automatedwarehouseonline.com/beyond-conveyor-automation-connects-packaging-warehouse-operations/) [2차 인용, Rockwell 생산물류 담당 발언 기반]
- 기존 대비 변화: AMR 플릿 관리(FMS) 수준을 넘어 생산 스케줄 변동에 따라 자재 이동 시점 자체를 재산출하는 계층이 추가됐다. 개별 설비는 동작하나 전체 운영과 단절된 이른바 자동화 섬 문제를 소프트웨어 계층으로 연결하는 접근이다.
- 생산기술 시사점: 자동차 부품 제조에서 AMR 도입 효과 산정이 반송 인시 절감에 머무는 사례가 많은데, 생산수요 연동 시 WIP·처리량 지표로 효과가 이전된다는 사내 실적 데이터가 공개된 사례다. AMR 투자 회수 계산에 반송 공수 외 WIP 항목을 포함할 근거로 참조할 수 있다.
- 확인 필요: 50 %·20 % 수치의 산정 기준·기간, 외부 고객 레퍼런스, 비 OTTO 계열 AMR 연동 범위.

## 사출성형기술 상세

### WITTMANN EcoPrimus – 형체력 1,000 kN 전동 사출기 신규 기종과 보압 구간 제어 어시스트 HiQ Packing 동반 공개

- 확인 내용: 1액 컴팩트 사출 전용으로 설계된 신규 전동식 사출기. 형체력 1,000 kN, 최대 사출속도 200 mm/s, B8X 제어 세대 탑재. Fakuma 전시 데모는 Kistler 8캐비티 금형으로 인슐린펜 보호캡을 생산한다. 프로세스 제어에는 어시스트 시스템 HiQ Packing을 적용해 절환점(Umschaltpunkt) 및 보압 구간의 스크루 거동을 제어하고, 다캐비티 금형에서 압력 분포와 캐비티 충전을 안정화한다. 자동화는 FlexCell plus(선형로봇·컨베이어·박스 이송을 한 셀에 통합, 셀 측면 이동으로 금형부 접근, 타사 사출기와도 호환)로 구성. 적용 수준: 신제품 공개 + 전시 데모.
- 관련 근거: [plasticker (독일어), 2026-08-18](https://plasticker.de/Kunststoff_News_48896_Wittmann_Gruppe_Vollelektrische_Spritzgielsungen_fr_energie__und_materialeffiziente_Produktion) [공식 발표, 보도자료 기반]
- 기존 대비 변화: 기존 EcoPower(서보 다이렉트 드라이브, 제동에너지 회수) 계열과 별개로 1액 컴팩트 사출에 특화된 저형체력 라인이 추가됐다. 어시스트 계통에서도 기존 HiQ Flow가 용융 점도를 기준으로 삼는 데 비해 HiQ Packing은 절환·보압 구간의 스크루 거동 자체를 제어 대상으로 한다.
- 생산기술 시사점: 다캐비티 정밀 소물 사출에서 캐비티 간 충전 편차를 금형 밸런싱이 아니라 절환·보압 제어로 흡수하려는 접근이다. 다캐비티 소형 기능부품(커넥터·클립류) 라인의 캐비티 간 중량 산포 관리에 같은 논리를 적용할 수 있다.
- 확인 필요: HiQ Packing의 제어 입력 신호(스크루 위치·속도·압력 중 기준값), 다캐비티 산포 개선 정량치, 양산 적용 여부.

### WITTMANN MicroPower 15/10 – 3D 프린팅 캐비티 인서트로 채널 직경 0.04 mm급 투명 PP 부품 성형 데모

- 확인 내용: 전동식 MicroPower 15/10에서 투명 PP 소재 Lab-on-a-Chip 부품을 성형. 시편 채널 직경 0.04 mm, 코너 반경 최소 0.005 mm. NanoVoxel의 3D 프린팅 2캐비티 금형 인서트를 Ernst Wittner 금형 베이스에 장착했다. 기종 사양은 샷 중량 0.05 – 4 g, 설치면적 약 2 m²에 회전 테이블·자동화·온조·품질검사를 통합하며, 사출 플런저가 금형 분할면까지 도달해 쿠션과 스프루를 축소하고 범용 표준 그래뉼을 사용한다. 적용 수준: 전시 데모.
- 관련 근거: [plasticker (독일어), 2026-08-18](https://plasticker.de/Kunststoff_News_48896_Wittmann_Gruppe_Vollelektrische_Spritzgielsungen_fr_energie__und_materialeffiziente_Produktion) [공식 발표, 보도자료 기반]
- 기존 대비 변화: 마이크로 사출용 캐비티 인서트를 절삭이 아닌 3D 프린팅으로 제작한 조합을 전시 사양으로 제시한 점이 새롭다.
- 생산기술 시사점: 미세 유로·미세 리브 형상에서 인서트 제작 리드타임을 단축하는 경로다. 다만 3D 프린팅 인서트의 표면조도와 내구 수명이 양산 조건에서 검증됐는지는 별도 확인이 필요하다.
- 확인 필요: 인서트 소재와 수명(샷 수), 투명 PP 부품의 광학 사양 충족 여부, 양산 적용 사례.

### Braunform Lift&Strip2 / Flexible Molds Concept / RotaricE2 – 파일럿에서 양산으로 넘어갈 때 이형·게이팅 원리를 유지하는 스케일업 설계 공개

- 확인 내용: Fakuma 2026 출품 예고. Lift&Strip2는 특허 기반 전(全)기계식 수평 이형으로, 성형품을 동기화 동작으로 들어올린 뒤 스트리핑하며 이 복합 동작 덕분에 밸브게이트 직접 게이팅이 가능하다. 이형용 유압·공압·전기 구동부가 불필요해 부품 수가 줄고 반복정밀도가 높아진다. 스트립 동작은 캠 커브로 제어해 동작 내 구간별 속도 프로파일을 다르게 설정할 수 있어 박육·취약 형상·강제 이형 시 성형품 부하를 조절할 수 있다. 동기 연결된 추가 이젝터 단이 미니 슬라이드 2개를 구동한다. 전시 파일럿은 8캐비티, 양산은 32캐비티로 확장 예정이며 기계·공정 원리는 유지한다. Flexible Molds Concept는 단일 캐비티 모듈 아키텍처로 캐비티 교체를 사출기에서 직접 수행하고, 제품 버전 변경 시 코어만 교체하며 버전 식별은 기계식 또는 QR코드로 한다. RotaricE2는 다재질 사출과 서보전동 구동 동작, 금형 내 캡핑을 결합한 4+4 캐비티 파일럿이다. 적용 수준: 전시 예고.
- 관련 근거: [plasticker (독일어), 2026-08-18](https://plasticker.de/Kunststoff_News_48869_Braunform_Skalierbare_Werkzeugkonzepte_fr_den_bergang_von_der_Pilot__zur_Serienfertigung) [공식 발표, 보도자료 기반]
- 기존 대비 변화: 파일럿 금형과 양산 금형의 이형·게이팅·동작 원리를 동일하게 유지하고 캐비티 수만 확장하는 것을 명시적 설계 기준으로 제시했다. 이형 구동부를 전량 기계식으로 대체하면서 밸브게이트 직접 게이팅을 병립시킨 구성이 핵심이다.
- 생산기술 시사점: 파일럿에서 양산으로 넘어갈 때 이형 방식이 바뀌면 공정 조건을 재수립해야 한다. 원리 동일성을 유지하는 설계는 양산 이관 시 검증 부하를 줄이는 방향이다. 박육·강제 이형 부품에서 스트립 속도 프로파일을 구간별로 나눌 수 있다는 점은 변형·백화 관리와 직접 관련된다.
- 확인 필요: 8캐비티에서 32캐비티 확장 시 실제 사이클타임·불량률 데이터, 의료·제약 외 부품군 적용 사례.

### Sumitomo (SHI) Demag SAM-C 취출로봇 – 셀 전 구성요소를 사출기 측 OPC UA로 중앙 제어하는 구성 명시

- 확인 내용: Fakuma 2026(홀 B1 부스 1103, technotrans 공동 부스)에서 IntElect 75로 투명 PC 카드박스를 생산하는 셀을 공개. 취출은 자사 SAM-C 로봇이 담당하며 컴팩트 설계와 로우코드 프로그래밍 기반의 사출 전용 소프트웨어를 특징으로 제시한다. 금형 온도는 technotrans·Contura·Cycletemp의 배리오썸 온조로 제어해 내부응력에 의한 복굴절·헤이즈·광학 왜곡을 저감한다. 셀 내 전 구성요소는 사출기를 통해 OPC UA로 중앙 제어한다. 별도로 IntElect S 280 + HTW 48캐비티 음료 캡 셀도 공개한다. 적용 수준: 전시 데모.
- 관련 근거: [ETMM Online, 2026-08-17](https://www.etmm-online.com/sumitomo-shi-demag-all-electric-injection-moulding-fakuma-2026-a-360d365de638a431d10aef8758757f17/) [2차 인용, Sumitomo (SHI) Demag 자료 출처 표기]
- 기존 대비 변화: 배리오썸 온조와 냉각 파트너 구성은 2026-08-12 회차에서 이미 다룬 범위다. 이번에 새로 확인된 부분은 취출을 외부 로봇이 아닌 자사 SAM-C로 처리하며 로우코드 프로그래밍을 전면에 내세운 점, 그리고 온조·냉각·취출을 포함한 셀 전체를 사출기 측 OPC UA로 중앙 제어한다고 명시한 점이다.
- 생산기술 시사점: 취출기를 사출기 제어계에 종속시켜 OPC UA 단일 계층에서 다루는 구성은 셀 단위 데이터 수집·추적성 설계를 단순화한다. 다만 취출기 벤더 종속이 커지므로 취출기 벤더가 혼재된 환경에서는 인터페이스 개방성(EUROMAP 67, OPC 40079 대응 여부)을 별도로 확인해야 한다.
- 확인 필요: SAM-C의 타사 사출기 연동 가능 여부, 로우코드 환경의 게이트 컷팅·후공정 연계 지원 범위, 복굴절 저감의 정량 지표.

### LK Injection Molding Machinery + Haien Molding – 13,000톤급 2판식 초대형 사출기 공동 개발 착수

- 확인 내용: 양사가 13,000톤급 초대형 2판식(two-platen) 사출성형기 구축 전략 협력에 서명. 형체톤수, 스크루 사출 유닛, 형체 프레임 구조, 금형 플래튼 크기, 샷 볼륨 항목에서 사양을 갱신하는 것을 목표로 제시했다. 적용 수준: 협약·프로젝트 착수(실기 사양 미확정).
- 관련 근거: [Adsale CPRJ, 2026-08-18](https://www.adsalecprj.com/en/news/article_details/89141.html) [2차 인용, 업체 발표 기반]
- 기존 대비 변화: 대형 2판식 사출기의 형체력 상한이 다시 올라간다. 2026-03 발표된 ENGEL duo 12000 US(110,000 kN, 투영면적 2.5 m² 이상, 본 조사 기간 외)를 상회하는 톤급의 프로젝트 착수 발표다.
- 생산기술 시사점: 대형 구조 부품을 일체 성형으로 통합하려는 수요가 설비 톤급 경쟁을 계속 끌어올리고 있음을 보여준다. 다만 현 단계는 협약 발표이며 실기 사양이 확정된 것은 아니다.
- 확인 필요: 표기 톤수의 kN 환산 기준, 플래튼 치수·샷 볼륨, 완성·출하 일정, 적용 부품군.

### SABIC Ultem DU762 / LNP Elcrin DC0051RC1 – 금속 절삭 대체를 겨냥한 PEI 사출 그레이드와 PCR 75 % 탄소섬유 컴파운드 출시

- 확인 내용: Ultem DU762는 스마트폰 미들프레임용 PEI(폴리에테르이미드) 그레이드로, 비전도성 PVD 스퍼터링 공정과 호환돼 금속 질감 표면을 구현한다. 티타늄·스테인리스·알루미늄이 절삭 가공을 요하는 데 비해 고속·대량 사출성형으로 제조 가능하며 중량이 낮다. 비전도성 금속화 폴리머이므로 미들프레임의 안테나 분할선이 불필요하다. 기존 대안인 유리섬유 강화 PC는 NCVM 다층 코팅에서 모서리 두께 축적과 유리섬유 이동에 따른 표면 불균일 문제가 있으나, 무강화 Ultem DU762는 고광택면 유지와 내마모·내크랙 성능이 낫다고 명시했다. 내열성과 화학물질 내성을 보유하며 전 세계 공급. 함께 발표된 LNP Elcrin DC0051RC1은 PCR 75 %를 함유한 탄소섬유 강화 컴파운드로, PC는 물병·CD 회수분, 탄소섬유는 골프 샤프트·풍력 블레이드·낚싯대 회수분을 사용하고 ISCC+ 인증을 받았다. 적용 수준: 신제품 출시.
- 관련 근거: [PlasticsToday, 2026-08-18](https://www.plasticstoday.com/materials/sabic-launches-ultem-resin-for-smartphone-frames) [2차 인용, 업체 발표 기반]
- 기존 대비 변화: 고내열 PEI를 금속 절삭 대체, 사출 성형, PVD 금속화의 조합으로 명시한 신규 그레이드다. 재생 계열에서는 탄소섬유 강화 컴파운드에 PCR 75 %를 적용한 첫 제품으로 소개됐다.
- 생산기술 시사점: 금속 가공 부품을 사출로 대체할 때 걸림돌이던 외관 요구(금속감·모서리 선예도)를 소재와 도금 공정 조합으로 푸는 접근이다. 유리섬유 강화 PC 대신 무강화 PEI를 택해 표면 균일성을 확보한 점은 외관 요구가 높은 사출 부품의 소재 선정 논리로 참고할 수 있다.
- 확인 필요: 유동성·수축률 등 사출 성형성 데이터, 두께별 성형 한계, 자동차 부품 적용 여부, PCR 컴파운드의 물성 유지 수준.

### Cognex In-Sight 3900 및 Krevera – 룰 기반과 AI를 한 검사 셀에서 병행하는 하이브리드 구성 제시

- 확인 내용: Cognex는 In-Sight 3900을 포함한 신형 비전 시스템에서 AI를 부가 기능이 아닌 코어로 설계하고, 동일 검사 셀 안에서 룰 기반 툴(치수·조립 특징 검증)과 AI 툴(외관·가변 결함)을 병행 운용하는 구성을 제시했다. AI 연산을 엣지에서 수행해 생산 속도에서 전수 인라인 검사가 가능하다고 설명한다. 최신 릴리스는 듀얼 통신 포트를 갖춰 현장 실시간 판정과 상위 모니터링 시스템으로의 데이터 교환을 동시 지원한다. 대상 결함은 스크래치, 싱크마크, 플래시, 쇼트샷, 변색, 번마크, 미세 표면 결함이다. Krevera는 사출 전용 비전 시스템으로 플래시·쇼트샷·스플레이·벤트 불량 기인 번마크 검출을 제시하며, 자사 고객 재무팀 확인 기준으로 스크랩 70 – 90 % 저감, 직접인력 약 80 % 저감을 주장한다. 적용 수준: 기술자료 및 벤더 발언(양산 적용 고객명 비공개).
- 관련 근거: [PlasticsToday "AI-Powered Vision Systems Transform Plastics Quality Control", 2026-08-17](https://www.plasticstoday.com/injection-molding/ai-powered-vision-systems-transform-plastics-quality-control) [업계 분석, 벤더 인터뷰 기반]
- 기존 대비 변화: AI 비전 자체는 신규가 아니다. 진전된 부분은 검사 셀 1대에서 룰 기반과 AI를 혼용하는 하이브리드 구조를 표준 구성으로 제시한 점, 그리고 듀얼 통신 포트로 현장 제어 신호와 상위 데이터 업로드를 분리 처리하는 하드웨어 구성이 최신 릴리스에서 확인된 점이다.
- 생산기술 시사점: 자동차 내외장 사출품은 재질·색상·텍스처·투명도가 혼재해 룰 기반 단독으로는 오검출률이 높다. 룰 기반과 AI를 한 셀에서 병행하는 구성은 치수 검증 신뢰성을 유지하면서 외관 결함 자동화 범위를 넓히는 절충안이다. 통신 포트 분리는 검사 결과를 취출·분류 신호로 즉시 쓰면서 동시에 추적성 DB에 적재하는 구조 설계에 유리하다.
- 확인 필요: In-Sight 3900의 사출 라인 실적용 사례와 사이클타임 영향. Krevera 제시 수치는 벤더 자체 주장이며 제3자 검증이 없다.

## 로봇제조기술 상세

### 유니켐 – Loomia Technologies 인수, 자동차 내장재 업체가 로봇 촉각센서 공급망에 진입

- 확인 내용: 한국 안산 소재 자동차 내장 가죽 소재사 유니켐이 2026년 8월 미국 Loomia Technologies 지분 100 %를 약 86억 원(600만 달러)에 인수. 대금은 현금 400만 달러, 유니켐 보통주 100만 달러, 언아웃 클로백 100만 달러로 분할하며, 신설 자회사와의 역삼각합병 방식으로 2026-10-15 절차 완료 예정이다. Loomia는 LEL(Loomia Electronic Layer) 기술로 회로를 직물·가죽에 유연 접합하며, 인쇄전자의 굴곡 시 단선 문제를 비인쇄·저저항 메시 기술로 해결했다고 설명한다. Festo와 협업 이력이 있다. Loomia와 글로벌 Tier 1 R&Y(독일 Bösel, 미국 Wixom, 중국 창저우 거점)는 수직 압력과 전단력(shear force)을 동시 검출하는 제품을 공동 개발 중이며, R&Y는 최초 엔지니어링 샘플을 2027년 1월 인도 예정이다. Volkswagen이 시트 부품사 Sabelt를 통해 Loomia를 차세대 시트 히팅 시스템 공급사로 선정했다. 적용 수준: 기업 인수 + 공동개발(로봇용 양산 적용 미확정).
- 관련 근거: [The Robot Report, 2026-08-18](https://www.therobotreport.com/unichem-acquires-loomia-accelerate-entry-humanoid-skin-market/) [공식 발표 + 2차 인용]
- 기존 대비 변화: 촉각센서가 로봇 전용 부품 공급망이 아니라 자동차 내장재·인쇄전자 양산 인프라를 경유해 대량 생산으로 넘어가는 경로가 구체화됐다. 센서 사양도 수직압 단독 검출에서 수직압과 전단력 동시 검출로 확장됐다.
- 생산기술 시사점: 그리퍼·핸드의 미끄러짐 검출에 필요한 전단력 센싱이 사출·정밀가공·인쇄전자 양산 설비를 보유한 Tier 1에서 생산될 경우, 로봇 EOAT용 촉각센서의 단가와 조달 안정성 전제가 바뀔 수 있다. 다만 엔지니어링 샘플 인도가 2027년 1월이라 당장의 조달 대상은 아니다.
- 확인 필요: 전단력 센서의 정격·분해능·내구 사이클, 인수 절차 완료 여부, 로봇 업체 채택 여부.

### Pudu Robotics MP2000 – 인프라 설치 없이 운용하는 2,000 kg급 파렛트 반송 AMR 출시

- 확인 내용: 2026-08-18 출시. 적재하중 2,000 kg. 반사판·QR코드·전용 인프라 없이 환경 매핑으로 내비게이션과 워크플로를 설정한다. 3D 라이다와 뎁스카메라 멀티센서 융합으로 저상·상부 장애물을 식별하고 동적 장애물에 대응한다. 포크인 최소 20초. 3-runner 파렛트, perimeter-base 파렛트 및 비표준 로드캐리어에 대응한다. 로봇 개별 실시간 판단과 플릿 단위 태스크 조율을 병행하며, 외부 네트워크 단절 시에도 플릿 조율을 유지한다. 적재물 크기·형상을 실시간 평가해 협소 통로 통과 여부를 판단한다. 기존 T300·T600 경량 반송 AMR에 이어 파렛트·중량물 반송으로 하중대를 확장했다. 적용 수준: 신제품 출시(양산 적용 실적 미공개).
- 관련 근거: [Automated Warehouse, 2026-08-19](https://www.automatedwarehouseonline.com/pudu-launches-mp2000-autonomous-forklift-pallet-handling/) [공식 발표]
- 기존 대비 변화: 자율주행 지게차 도입 시 통상 요구되던 사이트 개조·전용 인프라·플랫폼 연동 부담을 표준 제품 형태로 축소한 점이 차별점이다.
- 생산기술 시사점: 라인사이드 파렛트 보급에서 반사판·마그네틱 테이프 설치 없이 도입 가능한 AMR 선택지가 늘었다. 포크인 20초와 네트워크 단절 시 플릿 조율 유지는 다품종 소량 라인의 정지 리스크 평가 지표로 쓸 수 있다.
- 확인 필요: 안전 규격 인증(ISO 3691-4 등) 취득 여부, 실제 공장 도입 사례, 가격·리드타임.

### Generalist AI GEN-1 – 그리퍼 비의존 학습에 필요한 데이터량을 시간 단위로 정량 공개

- 확인 내용: TRI·컬럼비아대·스탠퍼드대의 UMI(Universal Manipulation Interface) 연구를 기반으로 한 모델. 태스크별 사람 시연 데이터 수집량은 최소 2시간에서 최대 약 80시간이며, 이후 사람 데이터만으로 학습한 모델을 로봇에서 실행해 로봇 데이터를 추가 수집하는 단계는 최소 4분에서 최대 80분 수준이다. 테이프 디스펜서 태스크는 로봇 데이터 50에피소드·4분 수집만으로 10회 연속 성공 가능한 모델을 확보했다. 하드웨어는 1자유도 그리퍼를 고수하며, 라인이 5분마다 멈추면 안 되므로 핑거 교체가 2분 내에 끝나야 한다는 설계 기준을 명시했다. 특정 태스크 데이터셋에 없는 복구 동작이 대규모 데이터셋에서 전이돼 발현됐다. 2026년 6월 Automate에서 Universal Robots 암(골판지 박스 접기·조립)과 Flexiv 암(로봇청소기 수리) 두 시스템에 정책을 즉석 생성하는 시연을 수행했다. 휴머노이드 실행 이력은 없다. 적용 수준: 전시 데모 + 기술자료(양산 라인 적용 미공개).
- 관련 근거: [The Robot Report, 2026-08-17](https://www.therobotreport.com/how-generalist-uses-human-demonstration-data-robot-learning/) [2차 인용, 창업 엔지니어 인터뷰 기반]
- 기존 대비 변화: 엔드이펙터 비의존 모델은 그동안 개념 수준으로 제시됐으나, 이번에 태스크당 필요 데이터량(사람 시연 2 – 80시간 + 로봇 데이터 4 – 80분)이 정량 공개된 것이 진전이다.
- 생산기술 시사점: 다품종 조립·핸들링 태스크의 로봇 교시 공수를 시간 단위로 추정할 근거가 생겼다. 그리퍼를 1자유도로 단순화하고 핑거만 교체하는 방식이 라인 정지시간 관점에서 다지 핸드보다 유리하다는 반대 논리도 함께 제시됐다.
- 확인 필요: 산업 고객 실적용 사례, 사이클타임·성공률 정량치, 모델 배포 형태.

### Raymond 자동 스윙리치 트럭 및 AMC Automation ZPA 컨베이어 – 포장과 물류 연결 구간의 자세 제어 요구 확대

- 확인 내용: Raymond(Toyota Material Handling)는 초협소 통로(VNA) 전용 자동 스윙리치 트럭을 공개했다. 통로 내부는 와이어 가이던스, 통로 외부는 라이다 기반 내비게이션으로 주행하며, 카메라 기반 인지로 사람·적재물·파렛트 포켓을 식별하고 파렛트 접근 시 미세 보정을 수행한다. 자율 처리 불가 상황은 원격 조작자가 개입하고 AI 알고리즘이 개입 이력을 학습해 유사 상황의 개입 필요를 축소한다. 병행해 고밀도 보관 레인용 Radio Shuttle과 레인 간 수평 이동을 추가한 Radio Shuttle Duo를 엘리베이터와 조합해 다층 운용한다. AMC Automation(Coesia 계열)은 차세대 ZPA(Zero-Pressure Accumulation) 컨베이어를 도입해 패키지 간 접촉 없이 이송·축적함으로써 단품 흐름에서 손상을 줄이고 개체 식별·경로 분기를 용이하게 한다. Direct Conveyors는 로봇이 개별 케이스를 회전시키지 않도록 컨베이어가 파렛트 패턴 구획별로 박스 그룹을 사전 정렬해 공급하는 요구가 늘고 있다고 설명한다. 적용 수준: 전시 데모(Automate 2026) 및 기존 제품 사양 설명.
- 관련 근거: [Automated Warehouse, 2026-08-18](https://www.automatedwarehouseonline.com/beyond-conveyor-automation-connects-packaging-warehouse-operations/) [2차 인용, 전시 내용 및 벤더 인터뷰 기반]
- 기존 대비 변화: 컨베이어의 역할이 단순 반송에서 하류 로봇·비전을 위한 자세 제어(회전·저면 노출·그룹 정렬)로 이동했다. 자동 지게차의 인지 오류를 원격 개입과 학습으로 흡수하는 운용 모델이 명시됐다.
- 생산기술 시사점: 팔레타이징 셀의 사이클타임 개선을 로봇 단독이 아니라 상류 컨베이어의 사전 정렬로 확보하는 접근은 자동차 부품 포장·출하 공정에도 적용 가능하다. 검사·라벨링의 수작업 대체는 로봇보다 비전 시스템 개선의 기여가 크다는 현장 인식이 함께 확인됐다.
- 확인 필요: 자동 스윙리치 트럭의 상용 출시 시점·사양, ZPA 컨베이어 처리 능력.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 측 Fakuma 2026 사전 발표가 사출기 본체 사양에서 셀 내부 물질 순환(취출 – 분쇄 – 제진 – 재투입)과 그로 인한 점도 변동의 실시간 보정으로 이동 | 재생재 투입률을 올릴 때의 병목이 물리 분리와 계측 보정으로 분담되는 구조. 자가 리사이클 셀 사양서에 제진 성능과 점도 보정 방식을 항목으로 넣을 필요 |
| 기술 변화 | 캐비티 압력 계측이 옵션에서 기종 표준 셀 구성으로 이동하고, 온조기·취출기까지 EUROMAP 82.1/82.2로 묶는 데이터 계통이 명시됨 | 캐비티 단위 품질 추적성의 전제 조건. 이기종 설비 혼용 라인의 데이터 스키마 통일 관점에서 신규 설비 사양서 검토 항목 |
| 기술 변화 | 금형 측에서 파일럿과 양산의 이형·게이팅 원리 동일성을 설계 기준으로 명시하는 접근이 제시됨(Braunform) | 양산 이관 시 공정 조건 재수립 부하를 설계 단계에서 줄이는 방향 |
| 업체 변화 | 주요 산업용·협동로봇 메이커 22개사 공식 뉴스룸에서 조사 기간 내 신규 발표 0건 | 8월 초 세대 전환 발표 이후의 공백 구간. 다음 밀집 구간은 AMB 2026(2026-09-15 – 09-19) |
| 업체 변화 | 자동차 내장재 업체(유니켐)가 유연 촉각센서 업체를 인수해 로봇 EOAT 부품 공급망에 진입 | 촉각센서의 생산 인프라가 로봇 전용에서 자동차 부품 양산 라인으로 이동하면 단가·조달 안정성 전제가 바뀔 수 있음 |
| 적용사례 변화 | Rockwell이 AMR 자재 이동을 생산수요와 연동해 자사 공장에서 WIP 약 50 % 감소, 처리량 약 20 % 개선을 보고 | AMR 투자 회수 계산에 반송 공수 외 WIP 항목을 포함할 근거. 단 산정 기준 미공개 |
| 확인 필요 | WITTMANN 80 % 분리율, Rockwell 50 %·20 %, Krevera 70 – 90 % 는 모두 업체 자체 보고치로 비교 기준 미공개 | 정량 비교 조건 확보 전에는 판단 근거로 쓰지 않음 |
| 확인 필요 | KUKA 공식 뉴스룸은 JavaScript 렌더링으로 목록 직접 확인 실패. Moretto·motan·Sepro 공식 뉴스룸도 접근 실패 | 다음 회차에서 대체 경로로 재확인 필요 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Fakuma 2026 잔여 사전 발표 – ENGEL·KraussMaffei·ARBURG·Haitian·Dr. BOY | 사출 | 사출기 본체 신기종 발표 유무 및 전동기 형체력 상한 변화 확인 |
| 2 | AMB 2026(2026-09-15 – 09-19) 개막 전 사전 발표 – KUKA·FANUC·ABB | 로봇 | 8월 공백 이후 로봇 신제품·SW 발표 재개 시점 확인 |
| 3 | WITTMANN HiQ Packing 기술자료 원문 | 사출 | 절환·보압 제어의 입력 신호와 다캐비티 산포 개선 정량치 확인 |
| 4 | FANUC ROBOSHOT 전 캐비티 압력 계측 사양 | 사출 | 센서 방식·계측 캐비티 수 상한, LINKi2 주변장치 수집 범위 확인 |
| 5 | LK–Haien 13,000톤급 2판식 사출기 후속 발표 | 사출 | 실기 사양(형체력 kN 환산·플래튼 치수·샷 볼륨) 확정 여부 |
| 6 | Loomia–R&Y 전단력 촉각센서 엔지니어링 샘플(2027-01 예정) | 로봇 EOAT | 정격·분해능·내구 사이클 및 로봇 업체 채택 여부 |
| 7 | 국내 업체(우진플라임·LS Mtron·두산로보틱스·한화로보틱스·HD현대로보틱스) 하반기 발표 | 사출·로봇 | 3주 연속 기간 내 신규 발표 미확인, 국내 산업지 재확인 필요 |
| 8 | Braunform Lift&Strip2 32캐비티 양산 확장 실적 | 금형 | 파일럿 대 양산 원리 동일성 유지의 실효성 검증 |

## 출처

### 사출성형기술

- [WITTMANN 공식 보도자료, Systematic process integration for high-grade recycling (EcoFritz·Ingrinder), 2026-08](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-press-release-08-26-ecofritz-en.pdf)
- [WITTMANN Fakuma 2026 이벤트 페이지, 확인일 2026-08-20](https://www.wittmann-group.com/en/event-fakuma-2026)
- [umweltwirtschaft.com (독일어), WITTMANN 폐루프 소재 순환 Fakuma 전시, 2026-08-19](https://www.umweltwirtschaft.com/solutions/wittmann-zeigt-geschlossenen-materialkreislauf-auf-der-fakuma-214513)
- [plasticker (독일어), WITTMANN 그룹 전동 사출 솔루션 (EcoPrimus·MicroPower 15/10), 2026-08-18](https://plasticker.de/Kunststoff_News_48896_Wittmann_Gruppe_Vollelektrische_Spritzgielsungen_fr_energie__und_materialeffiziente_Produktion)
- [plasticker (독일어), Braunform 파일럿–양산 전환용 스케일러블 금형 콘셉트, 2026-08-18](https://plasticker.de/Kunststoff_News_48869_Braunform_Skalierbare_Werkzeugkonzepte_fr_den_bergang_von_der_Pilot__zur_Serienfertigung)
- [Automation International, FANUC Fakuma 2026 사출·로보틱스·디지털 제조, 2026-08-18](https://www.automation-mag.com/news/113805-fanuc-showcases-smart-injection-moulding,-robotics-digital-manufacturing-at-fakuma-2026)
- [Industry EMEA, FANUC Fakuma 2026 출품 내용, 2026-08-18](https://www.industryemea.com/news/113805-fanuc-showcases-smart-injection-moulding,-robotics-digital-manufacturing-at-fakuma-2026)
- [ETMM Online, Sumitomo (SHI) Demag 전동 사출기 Fakuma 2026, 2026-08-17](https://www.etmm-online.com/sumitomo-shi-demag-all-electric-injection-moulding-fakuma-2026-a-360d365de638a431d10aef8758757f17/)
- [Adsale CPRJ, LK–Haien 13,000톤 2판식 사출기 협력, 2026-08-18](https://www.adsalecprj.com/en/news/article_details/89141.html)
- [Adsale CPRJ, WITTMANN Fakuma 2026 폐루프 셀, 2026-08-19](https://www.adsalecprj.com/en/news/article_details/89195.html)
- [PlasticsToday, SABIC Ultem 스마트폰 프레임용 그레이드 출시, 2026-08-18](https://www.plasticstoday.com/materials/sabic-launches-ultem-resin-for-smartphone-frames)
- [PlasticsToday, AI 비전 시스템의 플라스틱 품질관리 적용, 2026-08-17](https://www.plasticstoday.com/injection-molding/ai-powered-vision-systems-transform-plastics-quality-control)

### 로봇제조기술

- [The Robot Report, 유니켐 Loomia 인수, 2026-08-18](https://www.therobotreport.com/unichem-acquires-loomia-accelerate-entry-humanoid-skin-market/)
- [The Robot Report, Generalist의 사람 시연 데이터 기반 로봇 학습, 2026-08-17](https://www.therobotreport.com/how-generalist-uses-human-demonstration-data-robot-learning/)
- [The Robot Report 산업용 로봇 카테고리, 확인일 2026-08-20](https://www.therobotreport.com/category/robots-platforms/industrial-robots/)
- [Automated Warehouse, Pudu MP2000 파렛트 핸들링 AMR 출시, 2026-08-19](https://www.automatedwarehouseonline.com/pudu-launches-mp2000-autonomous-forklift-pallet-handling/)
- [Automated Warehouse, 컨베이어를 넘어선 포장·창고 운영 연결(Rockwell·Raymond·AMC), 2026-08-18](https://www.automatedwarehouseonline.com/beyond-conveyor-automation-connects-packaging-warehouse-operations/)
- [FANUC What's New (일본어), 확인일 2026-08-20](https://www.fanuc.co.jp/en/whatsnew/)
- [Yaskawa 뉴스릴리스 (일본어), 확인일 2026-08-20](https://www.yaskawa.co.jp/newsrelease)
- [Universal Robots 뉴스센터, 확인일 2026-08-20](https://www.universal-robots.com/news-and-media/news-center/)
- [Techman Robot 뉴스, 확인일 2026-08-20](https://www.tm-robot.com/en/company/news)
- [SCHUNK 뉴스, 확인일 2026-08-20](https://schunk.com/us/en/latest-news/news)
- [Locus Robotics 뉴스, 확인일 2026-08-20](https://locusrobotics.com/news)
