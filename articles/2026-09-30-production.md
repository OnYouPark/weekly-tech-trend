---
title: 생산기술 신규기술 브리핑 - 2026년 10월 1주차
date: 2026-09-30
type: production
period: 2026년 10월 1주차
tags: [ENGEL e-motion 380, Plus10 Hopper, WITTMANN R9, 우진플라임 WABOT, ABB E-Device, ANYbotics ANYmal, 뉴로메카 LAM, Avient Nymax FR]
summary: "사출은 Fakuma 2026 사전 발표가 설비 하드웨어에서 제어기 내부로 이동해 ARBURG가 외부 AI(Plus10 Hopper)를 GESTICA에 처음 통합하고 WITTMANN은 취출로봇 제어기 R9가 주변기기 컨트롤러를 흡수하는 구성을 제시. ENGEL은 전동식 e-motion 380으로 사출속도 500 mm/s 박육 영역에 진입. 로봇은 주요 메이커 신제품 발표가 없었고, 대신 ABB가 ISO 10218:2025 대응 범용 단말 조작 인터페이스를, ANYbotics는 로봇에 디지털 신원을 부여해 출입통제 구역을 통과하는 구성을 공개"
---

# 생산기술 신규기술 브리핑 - 2026년 10월 1주차

> 2026-09-24 – 2026-09-30 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

**ARBURG Plus10 Hopper의 GESTICA 통합 — 외부 AI 소프트웨어가 사출기 제어기 내부로 들어옴**

- 확인 내용: Fakuma 2026 전시용 NextGen Medical Solution 셀(전동식 ALLROUNDER 570 A 클린룸 사양, 8캐비티, 사이클 약 10초)에서 Plus10의 Hopper 툴을 GESTICA 제어기에 처음 통합. 설비·공정 데이터를 실시간 분석해 이상 패턴을 자체 식별하고, 공정변수와 품질의 상관을 학습해 품질을 예측하며, 편차 발생 시 최적 파라미터를 제안해 즉시 적용할 수 있게 한다. 목표는 검사 대신 공정 데이터로 출하를 승인하는 Parametric Release 대응. aXw Control 제품군에는 설비에서 직접 DoE 방식으로 공정창을 결정·검증하는 DoEAssist, 설비 데이터 기반 자동 연산으로 초기 입상을 단축하는 FirstShotAssist가 신규 추가됐다.
- 관련 근거: [ARBURG 보도자료, 2026-09-24](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-nextgen-medical-solution/) [공식 발표] / [Plastics Machinery & Manufacturing, 2026-09-24](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55407120/arburg-will-demonstrate-a-range-of-technologies-at-fakuma-2026) [2차 인용]
- 기존 대비 변화: 기존 NextGen Medical Solution은 설비·금형·주변기기의 디지털 연결이 중심이었다. 이번에는 ARBURG 자체 어시스턴트가 아닌 서드파티 AI를 제어기에 내장해 "제안 – 즉시 적용"까지 들어온 점이 변화다. 9월 16일 보고한 ENGEL EVA의 작업자 승인 후 파라미터 직접 쓰기와 같은 방향이며, 이번에는 외부 소프트웨어 통합이라는 형태로 나타났다.
- 생산기술 시사점: 전수검사 비용이 큰 부품에서 검사 의존도를 낮추는 논리다. 다만 파라미터 자동 반영은 변경관리·이력추적 체계와 충돌할 수 있어, 양산 적용 전 PPAP·변경승인 프로세스와의 정합 검토가 선행돼야 한다.
- 적용 수준: 전시 데모 + 기술자료
- 확인 필요: Hopper의 학습 데이터 요건·수렴 시간, 예측정확도 정량값, 파라미터 자동 변경 이력의 감사추적 방식, 별도 라이선스 여부.

**WITTMANN R9 컨트롤러 — 취출로봇 제어기가 셀 내 주변기기 컨트롤러를 흡수**

- 확인 내용: Fakuma 2026 자동화 존의 중심을 R9 컨트롤러로 구성. R9는 최대 12개 서보축을 통합하며, 네트워크화된 생산셀에서 주변기기의 통신 플랫폼 역할을 맡아 별도 컨트롤러 없이 추가 시스템 구성품을 편입할 수 있다. 아날로그·디지털 I/O를 갖추고 OPC UA 인터페이스를 표준 탑재. TextEditor에서 라인 단위 프로그래밍이 가능하고, 로봇에서 실행한 동작을 버튼 조작으로 프로그램에 전사할 수 있다. TeachBox 인터페이스를 PC로 전면 이식 가능. 신형 WX253 리니어 로봇에 탑재해 전시.
- 관련 근거: [PolyForm NEXT, 2026-09-25](https://www.polyformnext.de/automation/wittmann-at-fakuma-2026-robot-control-system-integrates-peripherals-into-injection-molding-cells.htm) [2차 인용, WITTMANN 발표 기반]
- 기존 대비 변화: 9월 23일 보고한 WX253은 하드웨어 건이었고, 이번은 제어기 측 진전이다. 취출로봇 제어기가 주변장치 컨트롤러를 흡수하는 구조와 OPC UA 표준 탑재, PC 기반 오프라인 티칭 이식이 명시됐다.
- 생산기술 시사점: 취출로봇·컨베이어·게이트 컷팅 유닛·온조기의 개별 제어기를 로봇 제어기로 통합하면 셀당 제어반 수와 배선이 줄고, MES 연동 포인트가 단일화된다. 8월 20일 FANUC이 제시한 EUROMAP 82.x 기반 주변장치 연계와 목적은 같으나, 사출기가 아니라 취출로봇 제어기를 허브로 삼는다는 점이 다르다.
- 적용 수준: 전시 데모 + 기술자료
- 확인 필요: 지원 EUROMAP 프로파일 범위, 통합 가능한 기기 종류·대수 상한.

**ENGEL e-motion 380 — 전동식 사출속도를 500 mm/s까지 올려 박육 영역으로 확장**

- 확인 내용: e-motion 신세대 1호기로 Fakuma 2026에서 최초 공개. 드라이 사이클 1.2초, 스크루 직경 70 mm 사출유닛으로 사출속도 최대 500 mm/s. 전시 데모는 6캐비티 IML 요구르트컵으로 두께 0.28 mm, 유동장 대 두께비 370, 부품중량 6.33 g. 형체부와 사출유닛을 동시에 개선했고, 신형 형체부를 향후 e-motion 전 시리즈에 적용할 예정. 하이브리드·유압기 대비 에너지 약 30% 절감을 현장 시연으로 제시.
- 관련 근거: [ENGEL 보도자료, 2026-09-24](https://www.engelglobal.com/en/company/media-center/news-press/higher-margins-per-cup-the-optimised-e-motion-for-thin-wall-packaging) [공식 발표] / [Plastech, 2026-09-28](https://www.plastech.pl/en/news/engel-targets-thin-wall-packaging-with-e-motion-380-22811) [2차 인용]
- 기존 대비 변화: 종래 ENGEL은 박육 전동식을 PET 사출압축 사례로 제시했으나, 이번에는 범용 PP 박육 포장 영역으로 적용 범위를 넓혔다. ENGEL 전동식 중 최고 출력 기종이다.
- 생산기술 시사점: 고속 박육에서 전동식이 유압식을 대체할 수 있는 사출속도 경계가 500 mm/s급으로 올라왔다는 점이 핵심이다. 박육 커버류·경량화 부품의 전동화 검토 근거가 된다. 30% 절감은 전시 시연 조건 기준이므로 실제 공정 조건 환산이 필요하다.
- 적용 수준: 전시 데모
- 확인 필요: 30% 절감의 비교 기준기·측정 조건, 형체력 사양, 신형 형체부의 전 기종 전개 시점.

### 로봇제조기술

**ABB Robotics E-Device — OmniCore 로봇을 고객 소유 태블릿·PC로 조작하는 안전 인터페이스**

- 확인 내용: OmniCore 컨트롤러 기반 산업용·협동로봇 전 제품군을 고객의 태블릿 또는 PC에서 조작·프로그래밍·모니터링할 수 있게 하는 소형 안전 인터페이스. 비상정지 버튼과 3-포지션 인에이블 스위치 등 수동 조작용 물리 안전장치를 내장하고, ISO 10218:2025 대응에 CE·UL 인증을 취득. 티치펜던트·태블릿·PC가 동일한 OmniCore UI를 쓰며, RobotStudio 오프라인 프로그래밍과 노코드 화면 생성 툴 AppStudio를 사무실에서 사용한 뒤 같은 단말을 라인에 가져가 배포하는 흐름을 지원. 단말 1대를 E-Device가 장착된 복수 로봇 간에 이동 사용할 수 있다.
- 관련 근거: [RoboticsTomorrow(ABB 보도자료 전문), 2026-09-21](https://www.roboticstomorrow.com/news/2026/09/21/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices/27130) [공식 발표] / [Design World, 2026-09-23](https://www.designworldonline.com/abb-launches-e-device-safety-interface-for-omnicore-robots/) [2차 인용]
- 기존 대비 변화: 전용 티치펜던트를 전제로 하던 조작 단말이 범용 기기로 확장됐다. ISO 10218:2025 개정판 준거를 명시한 조작 단말이 공급되기 시작한 점이 안전 규격 측면의 변화다.
- 생산기술 시사점: 다품종 셀이 늘수록 티치펜던트 대수와 교육 공수가 비례 증가한다. 단말 공용화는 로봇 대수 대비 조작 단말 수를 줄이고, 오프라인 프로그래밍 결과물을 같은 단말로 현장 반영하는 경로를 단축한다. ISO 10218:2025 대응 명시는 신규 셀 안전 문서화·검증 시 참조 기준이 된다.
- 적용 수준: 제품 출시(양산 적용 사례 미공개)
- 확인 필요: 국내 출시 시점, 지원 OS·단말 사양 범위, 기존 OmniCore 설치 로봇에 대한 소급 적용 가능 여부. ABB 공식 뉴스룸 원문은 이번 조사에서 직접 열지 못했다.

## 사출성형기술 상세

**Avient Nymax FR REC / Maxxam NHFR — 비할로겐 난연과 재생함량을 동시에 충족한 신규 그레이드**

- 확인 내용: Fakuma 2026에서 두 계열 신규 출시. Nymax FR REC는 비할로겐 난연 재생 PA로 공정 재생(PIR) 함량 42 – 77%, PA6·PA66 기반에 GF 15 – 40% 및 무충전 옵션. 0.8 mm에서 UL 94 V-0, GWFI 960°C, CTI 최대 600 V, non-PFAS 처방. Maxxam NHFR은 비할로겐 난연 폴리올레핀으로 2.0 mm에서 UL 94 5VA, GWFI 960°C.
- 관련 근거: [Plastech, 2026-09-29](https://www.plastech.pl/en/news/avient-to-launch-flame-retardant-polymers-at-fakuma-2026-22816) [2차 인용]
- 기존 대비 변화: 난연 재생수지는 난연성과 재생함량이 통상 상충했으나, V-0(0.8 mm)과 CTI 600 V를 유지하면서 PIR 42 – 77%를 확보한 조합으로 제시됐다. PFAS 규제 선제 대응 처방도 추가됐다.
- 생산기술 시사점: 재생함량이 높은 난연 PA는 로트 간 점도·수분 편차가 크다. 건조 조건, 보압·절환 제어, 캐비티압 기반 보정 등 공정 안정화 수단과 묶어 검토해야 한다. 전장부품 하우징·커넥터류의 EU 재생함량 규제 대응 옵션으로 의미가 있다.
- 적용 수준: 신제품 출시(양산 적용 사례 미공개)
- 확인 필요: 그레이드별 수축률·유동성, 사출 조건 창, 로트 편차, Avient 공식 보도자료 원문(미확인), 국내 공급 일정.

**Mocom Wic PA 12 30 / Wic PARA 30, Alfater XL PA12 접착 TPV — 재생 탄소섬유 컴파운드와 프라이머 없는 2K 조합**

- 확인 내용: 재생 탄소섬유 30% 함유 컴파운드 2종 신규 공개. PA12 매트릭스는 흡습이 낮아 치수안정성과 저온 충격성을 유지하고, Wic PARA 30은 반방향족 PA 기반으로 조습 상태에서도 물성 유지. 재생 CF 적용으로 신재 CF 대비 GWP 최대 65% 저감. Alfater XL 계열에는 PA12 전용 TPV를 신규 도입해 프라이머 없이 PA12 기재에 직접 사출하는 하드-소프트 2K 조합을 제시.
- 관련 근거: [Plastech, 2026-09-28](https://www.plastech.pl/en/news/mocom-to-present-new-compounds-at-fakuma-2026-22810) [2차 인용]
- 기존 대비 변화: 기존 Altech PARA는 유리섬유 강화 중심이었다. TPV 측은 PA12 접착 대응 그레이드가 추가돼 별도 접착층 없이 2K 성형이 가능한 기재 범위가 넓어졌다.
- 생산기술 시사점: 프라이머·접착층 공정을 없애는 직접접합 TPV는 2K 금형 설계와 공정 단계 축소에 직접 영향을 준다. PA12 기재 커넥터·튜브류의 씰 일체화 검토 대상이다. 재생 CF 컴파운드는 섬유 길이 편차로 게이트 마모와 유동 이방성 관리가 과제다.
- 적용 수준: 신제품 공개(전시 예정)
- 확인 필요: 접착강도 정량값과 시험 규격, 오버몰딩 시 기재 온도·인터벌 조건, 재생 CF의 마모 대책, Mocom 공식 자료 원문(미확인).

**WITTMANN 적용사례 — 취출로봇·셀 내 분쇄 통합 셀의 양산 운용 결과 공개**

- 확인 내용: 미국 골프장비 제조사 Ping이 약 3년 전 도입한 페룰 생산 셀(SmartPower 35/130 사출기, 3축 리니어 로봇 W808, Tempro plus D 온조기, S-Max 분쇄기, B8 제어기 일괄 제어)의 운용 결과가 공개됐다. 작업자 1인이 사출기 2대 운전, 생산량 2배, 2교대 중 1교대 폐지, 금형 4캐비티에서 8캐비티로 전환. 도입 전 폐기하던 런너를 재분쇄해 리그라인드 40% 사용 상태에서도 숏 대 숏 재현성을 유지했고, 연 약 60,000 lb의 스크랩을 전량 재사용으로 전환했다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-09-29](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55385373/golf-club-maker-ping-tees-up-success-with-automation) [2차 인용, 사용자 인터뷰]
- 기존 대비 변화: 전시 데모가 아니라 실제 양산 라인의 정량 결과가 공개된 사례다. 8월 20일 보고한 WITTMANN Ingrinder의 셀 내부 폐루프 구상이 기존 구성으로도 구현되고 있음을 보여준다.
- 생산기술 시사점: 표준 형상·고물량 품번에서 취출로봇과 기내 분쇄, 온조기를 사출기 제어기로 묶는 구성은 교대 축소와 런너 재투입을 동시에 얻는 전형적 패턴이다. 리그라인드 40%에서 재현성이 유지됐다는 점은 리그라인드 비율 상향 검토 시 참고 근거가 된다. 단 골프 부품 기준이므로 치수·외관 요구가 높은 부품에 그대로 적용할 수 없다.
- 적용 수준: 양산
- 확인 필요: 리그라인드 40%에서의 치수 산포·기계적 물성 데이터.

**우진플라임 WABOT 기반 셀 단위 공급 — 사출기·로봇·소프트웨어 통합 공급 모델 구체화**

- 확인 내용: 2026년 4월 보은 사업장 로봇 전용 공장 준공 후 취출로봇 WABOT 6종을 양산 중이며, 오스트리아 연구법인과 3년간 공동 개발해 다관절 로봇 라인업 추가를 계획하고 있다. 사출기 단품 판매에서 벗어나 WABOT과 생산·공정 운용 소프트웨어 PLAIMM-X, 실시간 생산데이터 관리 CMS를 묶어 자동화 셀 단위로 공급하는 방향을 추진한다. 보은공장 명목 생산능력은 연 2,500대, 2025년 생산실적은 1,128대.
- 관련 근거: [뉴스핌, 2026-09-28 (한국어)](https://www.newspim.com/news/view/20260928000363) [업계 분석]
- 기존 대비 변화: 기존에는 외부 취출로봇을 매입해 재판매했다. 자체 로봇과 소프트웨어, 사후관리까지 단일 공급으로 묶는 구조 변화다. WABOT 양산 자체는 2026년 4월 건이고, 이번 주 신규는 셀 단위 공급 모델의 구체화다.
- 생산기술 시사점: 설비와 로봇, MES 연동 검증 및 시운전 부담을 공급사가 흡수하는 모델은 신규 라인 셋업 리드타임에 영향을 준다. 실제 도입 판단에서는 EUROMAP 67/79 연동 검증 범위와 외부 MES 연계 가능 여부가 기준이 된다.
- 적용 수준: 양산(로봇) / 셀 단위 공급은 확인 필요
- 확인 필요: WABOT 6종 모델별 사양(가반하중·스트로크·축 구성), PLAIMM-X·CMS의 외부 설비 연동 범위와 통신 규격, 셀 단위 수주 사례, 공식 보도자료 원문(미확인).

**FANUC Fakuma 2026 전시 구성 — ROBOSHOT S180C/S350C와 CRX 음성 프로그래밍**

- 확인 내용: 공식 캠페인 페이지 기준, 신규 ROBOSHOT S180C를 캐비티 압력 모니터링과 시뮬레이션 기반 핫러너 밸런싱을 포함한 기술 성형 응용으로 라이브 시연하고, 신규 ROBOSHOT S350C는 로봇 핸들링과 소형 카토닝을 결합한 자동 셀에서 운용한다. Physical AI 항목으로 CRX 협동로봇의 생성형 AI 기반 음성 명령 프로그래밍을 시연한다.
- 관련 근거: [FANUC Europe Fakuma 2026 캠페인 페이지, 확인일 2026-09-30](https://www.fanuc.eu/eu-en/campaign/fanuc-fakuma-2026) [공식 발표]
- 기존 대비 변화: S180C·S350C가 신규 기종으로 표기됐다. 음성 명령 기반 로봇 프로그래밍은 기존 티칭 방식 대비 신규 인터페이스다.
- 생산기술 시사점: 사출 조건 모니터링이 캐비티 압력과 핫러너 밸런싱 시뮬레이션의 조합으로 제시되는 흐름이 이어진다. 음성 프로그래밍은 현 시점 전시 데모 수준이다.
- 적용 수준: 전시 데모
- 확인 필요: 해당 페이지의 게시·갱신 일자를 확인하지 못해 조사 기간 내 신규 게시 여부가 미확정이다. S180C/S350C의 형체력·사출속도·제어 세대와 정식 출시 시점도 확인 필요.

조사 기간 내 신규 발표가 확인되지 않은 영역: 금형·핫러너·금형온도 제어(Mold-Masters, Husky, HASCO, Meusburger, Kistler, HB-Therm, Ewikon, Günther), 주요 소재사(SABIC, Covestro, Mitsubishi Chemical, Röhm, Teijin, Asahi Kasei, LG화학, 롯데케미칼, Trinseo), LS엠트론, 취출·주변장치 업체(Yushin, Star Seiki, Harmo, Sepro, Hekuma, Waldorf Technik, Matsui, Moretto, motan, Conair).

## 로봇제조기술 상세

**ANYbotics ANYmal 출입문 통과 애드온 — 로봇에 디지털 신원을 부여해 출입통제 구역을 통과**

- 확인 내용: dormakaba, LEGIC Identsystems와 공동 개발. 비잠금문은 레이더 센서가 로봇 접근을 감지해 기존 문에 후설치한 dormakaba ED 100/ED 250 스윙도어 오퍼레이터를 작동시킨다. 잠금문은 로봇이 LEGIC 보안 페이로드로 디지털 신원을 갖고 dormakaba exos 출입관리 시스템에 전자적으로 권한을 요청하며, 구역·시간대·작업 단위로 사전 정의된 권한에 따라 개폐된다. 문 교체 없이 후설치 가능하고 실내·실외·방화문 사양에 대응하며, 자격증명 스캔과 통과 이력이 타임스탬프와 함께 기록된다. 아일랜드 GE Vernova Whitegate 발전소에서 수 주간 실환경 파일럿 검증을 마쳤다.
- 관련 근거: [The Robot Report, 2026-09-24](https://www.therobotreport.com/anybotics-opens-the-door-for-inspections-with-anymal-robots/) [공식 발표]
- 기존 대비 변화: 문을 열어두거나 사람이 개입해야 했던 구간을, 출입통제 체계를 우회하지 않고 로봇에 신원을 부여해 해결하는 방식이다.
- 생산기술 시사점: 부품 공장도 방화구획·클린룸·위험물 구역으로 동선이 분할돼 AMR 커버리지가 제한되는 구조가 일반적이다. 로봇을 기존 출입관리 시스템에 감사 로그까지 포함해 편입시키는 방식은 안전·보안 규정을 유지한 채 AMR 운영 구역을 넓히는 설계 대안이다. 엘리베이터·게이트 연계도 검토 중이라고 밝혀 층간 이동 요건 정의에도 참고 가치가 있다.
- 적용 수준: 파일럿 검증 완료, 연내 애드온 제공 예정
- 확인 필요: 4족 보행 로봇 기준 검증 결과의 바퀴형 AMR 적용 가능 여부, 문 통과 소요시간·성공률, 국내 출입통제 제품과의 호환 범위.

**뉴로메카 LAM 기반 곡블록 자율용접 — 경로 생성 자체를 모델이 담당하는 구조로 과제 착수**

- 확인 내용: 과학기술정보통신부 '인간-AI 협업형 LAM(Large Action Model) 개발·글로벌 실증' 사업의 세부과제 '곡면 외판 구조물 용접 공정 융합데이터 수집 및 실증 기술개발'의 주관연구개발기관으로 선정. 과제 기간 2026년 8월 – 2030년 12월, 총 175억 원 규모(정부지원 연구개발비 105억 원). 곡블록 용접에서 발생하는 형상·공간정보, 용접선 위치, 로봇 동작, 용접조건, 센서·품질정보를 융합데이터로 구축해 LAM 학습과 로봇 제어에 활용한다. 로봇이 용접선을 탐색하고 작업경로를 생성하며, 공정 중 조립오차·열변형에 맞춰 궤적과 용접조건을 실시간 보정하는 방식을 목표로 한다.
- 관련 근거: [로봇신문, 2026-09-28 (한국어)](https://www.irobotnews.com/news/articleView.html?idxno=48714) [2차 인용, 기업 발표 인용]
- 기존 대비 변화: 기존 로봇 용접은 티칭 또는 OLP로 생성한 고정 경로에 심트래킹 수준의 보정을 더하는 구조였다. 이번 과제는 경로 생성 자체를 모델이 담당하도록 목표를 설정한 점이 다르다.
- 생산기술 시사점: 공차 누적과 열변형으로 실제 형상이 도면과 벌어지는 용접 조립 공정은 OLP 경로만으로 품질 확보가 어렵다. 용접선 탐색과 경로 생성, 조건 실시간 보정을 묶은 접근은 소롯트 다품종 용접 셀의 티칭 공수 절감 방향과 같은 선상에 있다. 다만 조선 곡블록 대상 과제이므로 박판·고속 사이클 공정으로의 전이는 별도 검증이 필요하다.
- 적용 수준: 연구개발 착수(양산 아님)
- 확인 필요: 사용 로봇 플랫폼, 데이터 수집 규모, 실증 야드, 중간 목표 시점. 공식 보도자료 원문은 직접 확인하지 못했다.

**Agility Robotics 바퀴형 폼팩터 검토 — 이족 전용 노선에서 선회 확인**

- 확인 내용: Digit 5 공개 영상 말미에 등장한 바퀴형 로봇 렌더링에 대해 CEO Jonathan Hurst가 바퀴를 포함한 다양한 설계·폼팩터를 검토 중이라고 확인했다. Digit의 바퀴 버전인지 별도 신규 기종인지는 밝히지 않았고 출시 시기도 미정이다.
- 관련 근거: [The Robot Report, 2026-09-25](https://www.therobotreport.com/agility-robotics-maker-of-digit-humanoid-exploring-wheeled-robots/) [공식 발표, 제품 발표는 아님]
- 기존 대비 변화: 이족 보행 기반 정체성을 유지해온 업체가 바퀴형 검토를 공식 인정했다. Digit 5에서 역굽힘 무릎 구조를 폐기한 데 이어 설계 전제를 재검토하는 흐름의 연장이다.
- 생산기술 시사점: 평탄한 공장 바닥과 고정 동선 환경에서는 이족 대비 바퀴형이 안정성·소비전력·기구 단순성에서 유리하다는 논지를 공급사 측이 수용한 사례다. 휴머노이드 도입 검토 시 사람형이 필요한 공정과 바퀴형으로 충분한 공정을 분리해 평가할 근거가 된다.
- 적용 수준: 연구개발 검토 단계
- 확인 필요: 개발 착수 여부, 목표 가반하중·적용 공정, 출시 시기 일체 미공개.

**참고 - IFR World Robotics 2026**: 2025년 산업용 로봇 세계 운용 대수 500만 대(전년 대비 9% 증가), 연간 설치 60만 대 초과(11% 증가). 미국이 일본을 제치고 설치 대수 2위(약 38,500대, 12% 증가), 한국 4위(30,000대, 1% 감소), 중국 354,000대로 전 세계의 59%. 기술 변화는 아니나 설비 투자 흐름의 참고 지표다. 출처: [The Robot Report, 2026-09-24](https://www.therobotreport.com/5-million-robots-now-working-factories-worldwide-ifr-reports/) [업계 분석]

조사 기간 내 신규 발표가 확인되지 않은 영역: 주요 산업용·협동로봇 메이커(FANUC, KUKA, Yaskawa, Kawasaki, Denso, Nachi, Mitsubishi Electric, Omron, Stäubli, Universal Robots, 두산로보틱스, 한화로보틱스, HD현대로보틱스, Techman), 로봇 SW(Siemens, Beckhoff, Rockwell, RoboDK, Visual Components), EOAT(SCHUNK, Zimmer, OnRobot, Piab, SMC, Robotiq, ATI, DESTACO, Festo, Gimatic), 물류 AMR(MiR, OMRON, Geek+, Locus, AutoStore, Seegrid, Agilox). 이번 주에는 해당 분야 전시회가 없었다(IMTS 9월 19일 종료, PACK EXPO·RoboBusiness·FABTECH는 10월 개최).

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 AI 기능이 조언·제안을 넘어 제어기 내부에 상주하는 구조로 이동(ARBURG Plus10 Hopper, aXw DoEAssist·FirstShotAssist) | 검사 대신 공정 데이터로 품질을 보증하는 방향. 단 변경관리·감사추적 체계와의 정합이 전제 |
| 기술 변화 | 셀 통합 제어의 허브가 사출기에서 취출로봇 제어기로도 확장(WITTMANN R9, 12축 통합·OPC UA 표준) | 셀당 제어반·배선·MES 연동 포인트 축소. 통합 상한과 프로파일 범위 확인 필요 |
| 기술 변화 | 전동식 사출속도 한계가 500 mm/s급으로 상향(ENGEL e-motion 380) | 고속 박육 부품의 유압기 전동화 검토 경계선이 이동 |
| 업체 변화 | 우진플라임이 사출기 단품에서 로봇·SW 포함 셀 단위 공급으로 전환 추진 | 국내 공급사 기준 셋업 리드타임·연동 검증 부담의 이전 가능성 |
| 업체 변화 | 로봇 메이커 신제품 발표는 2주 연속 소강. 대신 조작 단말·안전 규격(ABB E-Device, ISO 10218:2025) 쪽에서 변화 | 신규 셀 안전 문서화 기준이 2025년 개정판 기준으로 이동 중 |
| 적용사례 변화 | 전시 데모 위주 주간이나, WITTMANN Ping 사례에서 리그라인드 40% 조건의 양산 재현성 수치가 공개 | 런너 재투입 비율 상향 검토의 참고 근거 |
| 확인 필요 | FANUC Fakuma 페이지 게시일 미확인, Avient·Mocom·우진플라임·뉴로메카 공식 원문 미확보, ABB 공식 뉴스룸 원문 미확보 | 다음 주 공식 보도자료로 재확인 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Fakuma 2026(10월 12 – 16일) 개막 직전 사전 발표 잔여분 | 사출기·금형·자동화 | 개막 2주 전 집중 발표 구간. 신기종 사양 확정치 확보 |
| 2 | ARBURG Plus10 Hopper의 라이선스·데이터 요건 공식 자료 | 사출 AI 공정제어 | 파라미터 자동 반영의 이력추적 방식 확인 |
| 3 | WITTMANN R9의 EUROMAP 프로파일 지원 범위 | 사출 셀 통합제어 | 주변기기 통합 상한과 MES 연동 조건 확인 |
| 4 | ABB E-Device 국내 출시·소급 적용 조건 | 로봇 안전·조작 | ISO 10218:2025 대응 단말의 실제 도입 조건 확인 |
| 5 | PACK EXPO International(10월 18 – 21일) 사전 발표 | 물류·포장 자동화 | 라인사이드 물류·EOAT 신규 발표 확인 |
| 6 | FANUC ROBOSHOT S180C/S350C 정식 사양 공개 | 전동식 사출기 | 형체력·사출속도·제어 세대 확인 |

## 출처

### 사출성형기술
- [ENGEL, Higher margins per cup: the optimised e-motion for thin-wall packaging, 2026-09-24](https://www.engelglobal.com/en/company/media-center/news-press/higher-margins-per-cup-the-optimised-e-motion-for-thin-wall-packaging)
- [ARBURG, Fakuma 2026: NextGen Medical Solution, 2026-09-24](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-nextgen-medical-solution/)
- [Plastics Machinery & Manufacturing, Arburg will demonstrate a range of technologies at Fakuma 2026, 2026-09-24](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55407120/arburg-will-demonstrate-a-range-of-technologies-at-fakuma-2026)
- [Plastics Machinery & Manufacturing, Golf club maker Ping tees up success with automation, 2026-09-29](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55385373/golf-club-maker-ping-tees-up-success-with-automation)
- [PolyForm NEXT, Wittmann at Fakuma 2026: robot control system integrates peripherals, 2026-09-25 (독일어)](https://www.polyformnext.de/automation/wittmann-at-fakuma-2026-robot-control-system-integrates-peripherals-into-injection-molding-cells.htm)
- [Plastech, Engel targets thin-wall packaging with e-motion 380, 2026-09-28](https://www.plastech.pl/en/news/engel-targets-thin-wall-packaging-with-e-motion-380-22811)
- [Plastech, Avient to launch flame retardant polymers at Fakuma 2026, 2026-09-29](https://www.plastech.pl/en/news/avient-to-launch-flame-retardant-polymers-at-fakuma-2026-22816)
- [Plastech, Mocom to present new compounds at Fakuma 2026, 2026-09-28](https://www.plastech.pl/en/news/mocom-to-present-new-compounds-at-fakuma-2026-22810)
- [FANUC Europe, Fakuma 2026 캠페인 페이지, 확인일 2026-09-30](https://www.fanuc.eu/eu-en/campaign/fanuc-fakuma-2026)
- [뉴스핌, 우진플라임 관련 분석, 2026-09-28 (한국어)](https://www.newspim.com/news/view/20260928000363)

### 로봇제조기술
- [RoboticsTomorrow, ABB Robotics E-Device simplifies robot interaction on customers' own devices, 2026-09-21](https://www.roboticstomorrow.com/news/2026/09/21/abb-robotics-e-device-simplifies-robot-interaction-on-customers-own-devices/27130)
- [Design World, ABB launches E-Device safety interface for OmniCore robots, 2026-09-23](https://www.designworldonline.com/abb-launches-e-device-safety-interface-for-omnicore-robots/)
- [The Robot Report, ANYbotics opens the door for inspections with ANYmal robots, 2026-09-24](https://www.therobotreport.com/anybotics-opens-the-door-for-inspections-with-anymal-robots/)
- [The Robot Report, Agility Robotics exploring wheeled robots, 2026-09-25](https://www.therobotreport.com/agility-robotics-maker-of-digit-humanoid-exploring-wheeled-robots/)
- [The Robot Report, 5 million robots now working in factories worldwide, IFR reports, 2026-09-24](https://www.therobotreport.com/5-million-robots-now-working-factories-worldwide-ifr-reports/)
- [로봇신문, 뉴로메카 곡블록 자율용접 과제 주관기관 선정, 2026-09-28 (한국어)](https://www.irobotnews.com/news/articleView.html?idxno=48714)
