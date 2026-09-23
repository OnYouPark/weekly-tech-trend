---
title: 생산기술 신규기술 브리핑 - 2026년 9월 4주차
date: 2026-09-23
type: production
period: 2026년 9월 4주차
tags: [ARBURG, Matriq, DOMINO, WITTMANN WX253, Epson AX6, Isaac ROS 5.0, Boston Dynamics Atlas, Robotiq Contact Core]
summary: "사출은 Fakuma 2026 사전 공개가 부품 단위 추적성으로 이동해 ARBURG가 금형 인서트에 마이크로히터 144개를 넣어 성형 중 데이터매트릭스를 각인하는 구성을, HASCO·POLAR-FORM과는 회전판 없는 2K 금형 DOMINO를 제시. 로봇은 Epson이 협동로봇 AX6로 첫 진입하고, NVIDIA Isaac ROS 5.0이 독자 가속 API를 표준 ROS 인터페이스로 교체. 휴머노이드는 Boston Dynamics가 완성차 공장 부지에 Atlas 훈련센터를 열어 부품 시퀀싱부터 실환경 학습에 착수."
---

# 생산기술 신규기술 브리핑 - 2026년 9월 4주차

> 2026-09-17 – 2026-09-23 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

**ARBURG·Kebo·Matriq 금형 내 마이크로히터 각인 — 마킹 후공정을 사출 공정에 내재화**

- 확인 내용: 전동식 ALLROUNDER 570 A(클린룸 사양)가 4캐비티 금형으로 오토인젝터 하우징을 약 11초 사이클로 성형하면서, 금형 인서트에 배치한 0.28×0.28 mm 마이크로히터 144개(개당 약 1.5 μg)로 부품마다 개별 데이터매트릭스 코드를 성형 중 각인한다. GESTICA 제어기와 Matriq 시스템이 OPC UA로 연동돼 부품 ID·사출압력·쿠션 볼륨을 데이터베이스에서 동기화한다.
- 관련 근거: [ARBURG 공식 뉴스, 2026-09-21](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-partner-project/) [공식 발표]
- 기존 대비 변화: 종래에는 개별 각인을 위해 레이저마킹 설비와 핸들링 로봇이 별도 공정으로 필요했다. 동적 금형온도(국부 급속가열) 개념을 마킹 목적으로 특화해 후공정 없이 금형 안에서 각인을 끝낸다.
- 생산기술 시사점: 부품 단위 추적성이 요구되는 공정에서 마킹 설비·핸들링 스텝·설치 면적을 동시에 줄일 수 있는 구성이다. 공정 데이터와 부품 ID가 성형 시점에 결합되므로, 사후 매칭 방식보다 이력 신뢰도가 높다.
- 확인 필요: 마이크로히터 인서트의 내구 사이클·교체 주기, 소재별 각인 가독성, 양산 적용 여부(현재 Fakuma 전시 데모 단계).

**WITTMANN WX253 취출로봇 — 동일 스트로크에서 X축 길이 100 mm 단축**

- 확인 내용: Fakuma 2026 사전 공개 자료에서 신규 리니어 로봇 WX253을 처음 제시. 가반 최대 35 kg, 동일 스트로크 기준 X축 길이 100 mm 단축, Z축 제어반·Y축 밸브블록 하우징 소형화, Y축 가이드 캐리지 접근성 개선. R9 컨트롤러와 조합해 최대 12서보축을 통합하고 OPC UA 인터페이스를 표준 탑재한다.
- 관련 근거: [WITTMANN Group 공식 프레스릴리스, 2026-09](https://www.wittmann-group.com/sites/default/files/2026-09/wittmann-pr-09-26-fakuma_2026_automation_technology_en.pdf) [공식 발표] / [plasticker.de(독일어), 2026-09-22](https://plasticker.de/Kunststoff_News_49393_Wittmann_R9_Steuerung_vernetzt_Automatisierungskomponenten___Neuer_Linearroboter_WX253) [2차 인용]
- 기존 대비 변화: 전작 WX153 대비 구조 소형화와 정비성 개선에 초점. R9 컨트롤러 자체는 2016년 출시·2022년 개정된 기존 제품으로, 이번 신규성은 WX253과의 셀 조합에 있다.
- 생산기술 시사점: 취출로봇 축 길이 단축은 사출기 열 간격과 셀 통로 폭에 직접 영향을 준다. 지난 4주간 확인된 취출·주변장치 발표가 성능 확대보다 설치 면적·정비성 쪽으로 모이는 흐름과 같은 방향이다.
- 확인 필요: 정확한 스트로크·축 구성 수치, 국내 공급 일정.

### 로봇제조기술

**Boston Dynamics RMAC 개소 — 휴머노이드 훈련이 전시장에서 완성차 공장 부지로 이동**

- 확인 내용: 2026-09-21 조지아주 현대차그룹 메타플랜트 아메리카(HMGMA) 부지 내에 Robotics Metaplant Application Center(RMAC)를 개소. Atlas가 실제 생산 환경에서 부품 물류와 시퀀싱(조립 순서 배치) 작업을 우선 학습하며, 2030년까지 부품 조립 작업으로 확대할 계획이다. RMAC은 2027년 현재 규모의 약 10배로 확장 이전 예정.
- 관련 근거: [Boston Dynamics 공식 보도자료, 2026-09-21](https://bostondynamics.com/news/boston-dynamics-opens-robotics-metaplant-application-center-to-train-humanoid-robots-for-manufacturing-tasks/) [공식 발표]
- 기존 대비 변화: 2026년 초 양산형 Atlas 공개는 전시 수준이었다. 이번은 실제 완성차 공장 부지에서 장기 훈련·데이터 수집 단계로 넘어간 것으로, 적용 수준은 파일럿 훈련이며 정규 라인 투입은 아니다.
- 생산기술 시사점: 휴머노이드의 제조 진입점이 완전 자율 조립이 아니라 부품 시퀀싱·라인사이드 물류처럼 반복적이면서 변동성이 있는 중간 공정임을 구체적으로 보여준다. 대량 배치 전 현장 훈련 단계를 명시적으로 두는 도입 순서도 함께 확인된다.
- 확인 필요: 공장별 배치 일정, RMAC 실제 가동 대수, 시퀀싱 작업의 사이클타임·성공률.

**NVIDIA Isaac ROS 5.0 — 독자 가속 API를 표준 ROS 버퍼 인터페이스로 교체**

- 확인 내용: 2026-09-22 ROSCon에서 공개. ROS 2 Lyrical·Ubuntu 24.04 지원을 추가하고, 기존 NITROS 가속 메시징 API를 표준 ROS 버퍼 인터페이스로 대체(Open Source Robotics Alliance와 공동 기여). FoundationPose 객체 자세추정을 최대 5.5배 가속하고 pick-and-place를 독립 에이전트 스킬로 제공. Universal Robots는 자사 AI Accelerator SDK에 Isaac ROS를 내장해 비정렬 부품 인식으로 고정지그 의존도를 낮춘다고 명시했다.
- 관련 근거: [NVIDIA 공식 블로그, 2026-09-22](https://blogs.nvidia.com/blog/isaac-ros-5-0-agentic-open-source-robotics/) [공식 발표]
- 기존 대비 변화: 8월에 확인된 ROBOGUIDE–Isaac Sim 통합이 시뮬레이션 계층의 연결이었다면, 이번은 런타임 가속 인터페이스를 벤더 독자 규격에서 표준 규격으로 내리는 변화다. 타 가속기와의 호환 경로가 열린다.
- 생산기술 시사점: 비전가이드 픽앤플레이스·머신텐딩의 인식 스택을 로봇 메이커에 종속되지 않고 구성할 여지가 커진다. 고정지그 의존도 축소는 다품종 소량 셀의 치공구 물량과 품종 전환 시간에 직결되는 항목이다.
- 확인 필요: 인용된 적용 사례(Flexiv 용접암, Intrinsic 머신텐딩)의 양산 여부는 미확인으로, 현재는 기술자료·데모 수준으로 판단된다.

## 사출성형기술 상세

**ARBURG·HASCO·POLAR-FORM DOMINO — 회전판·인덱스 없이 닫힌 금형 안에서 2K 성형**

- 확인 내용: 3사 공동 개발 2K 금형 콘셉트 DOMINO를 Fakuma 2026 ARBURG 부스(A3-3101)에서 가동 시연한다. 회전판(turntable)이나 인덱스 이동 없이 금형 내부의 정의된 동작만으로 닫힌 금형 안에서 2차 컴포넌트를 성형하며, 적층제조로 제작한 핫러너가 컴팩트한 2K 구조에 필요한 유로 설계 자유도를 제공한다. 32캐비티 도미노 조각(2색)을 데모에 사용. "Produkte des Jahres 2026" 금형·툴링 부문 1위 수상.
- 관련 근거: [TechnologieBox(POLAR-FORM 보도자료 전재, 독일어), 2026-09-21](https://www.technologiebox.de/2026/09/21/ausgezeichnetes-2k-werkzeugkonzept-domino-live-auf-der-fakuma/) [공식 발표]
- 기존 대비 변화: 종래 2K 사출은 회전반 또는 인덱스 플레이트로 1차 성형품을 2차 캐비티로 옮기는 구조가 일반적이며, 이 때문에 사출기 형체 구조와 금형 두께에 제약이 생긴다. DOMINO는 이를 금형 내부 동작과 적층제조 핫러너 배치로 대체한다.
- 생산기술 시사점: 회전 메커니즘 없이 상대적으로 작은 사출기로 2K를 구현할 여지가 생긴다. 적층제조 핫러너가 미관 요소가 아니라 금형 소형화의 전제 조건으로 쓰인 점이 실무적으로 유의미하다.
- 확인 필요: 실제 사이클타임, 형체력 요구 수준, 상용 제품군 여부. 현재는 수상 후 전시 데모 단계.

**ARBURG ALLROUNDER 475 V + Leonhard Kurz PLF — 재생 PC/ABS에 보호코팅 생략형 IMD 적용**

- 확인 내용: 수직형 ALLROUNDER 475 V가 Fakuma 2026에서 자동차 리모컨 키 커버를 시연 성형한다. 산업 재생수지(PIR) 기반 PC/ABS를 사용하고, Leonhard Kurz PLF(Protective Layer Finish) 필름 인몰드 데코와 구조화 금형 인서트를 결합한다. 종래 전사(transfer) 방식이 아니라 영구 잔류형 PET 캐리어 필름을 금형 내에서 백몰딩해 별도 보호 코팅 없이 표면을 마감한다. ARBURG 서보유압시스템(ASH)은 기존 유압기 대비 에너지 최대 60% 절감(기존 스펙).
- 관련 근거: [ARBURG 공식 뉴스, 2026-09-17](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-allrounder-475-v/) [공식 발표]
- 기존 대비 변화: ASH와 IMD는 각각 기존 기술이며, 신규성은 재생수지와 보호코팅 생략형 필름을 자동차 부품에 함께 적용한 조합에 있다. 분류상 기존기술 고도화에 해당한다.
- 생산기술 시사점: 재생수지 사용과 표면 품질 요구가 동시에 걸리는 외관 부품에서, 후공정 도장·코팅을 생략하는 경로를 제시한다. VOC 설비 부하와 공정 스텝 수 양쪽에 영향이 있다.
- 확인 필요: 재생수지 함량 비율, 내후성·내스크래치 양산 검증 데이터, 실제 고객 적용 여부. 현재 전시 데모 단계.

**축 ② 그 외 주변장치 — 이번 주 신규 발표 확인되지 않음**

Yushin, Sepro, Star Automation, Harmo, Hekuma, Waldorf Technik, Matsui, motan, Conair 공식 뉴스룸과 업계지를 확인했으나 2026-09-17 – 2026-09-23 사이 신규 게시물이 확인되지 않았다. Moretto Fakuma 예고는 2026-09-11 게재로 조사 기간 이전이며 지난주 리포트에서 다뤘다. EUROMAP 102 초안(2026-01-16 공개)은 이번 주 진전이 확인되지 않았다.

## 로봇제조기술 상세

**Epson AX6 — SCARA·6축 중심 업체의 첫 협동로봇 정식 출시**

- 확인 내용: 2026-09-22 Epson Robots가 6축 라인업에 AX6를 추가. 파워·포스 제한 방식으로 위험성 평가 결과에 따라 안전펜스 없이 운용 가능하며, 탄소섬유 구조로 경량화했다. IP54, ISO Class 5 클린룸 등급. 노코드 프로그래밍 소프트웨어(AX Portal), Python 개발환경, 3D 시뮬레이터를 포함하며 유통 파트너 채널로 즉시 판매를 시작했다.
- 관련 근거: [Epson 공식 보도자료, 2026-09-22](https://news.epson.com/news/ax6-6-axis-collaborative-robot) [공식 발표]
- 기존 대비 변화: Epson은 SCARA와 산업용 6축 중심이었고 협동로봇 라인이 없었다. AX6로 고속 산업용·협동·통합형 3분류 포트폴리오를 갖췄다. 2026년 6월 Automate에서 프리뷰만 했던 제품의 정식 출시다.
- 생산기술 시사점: 클린룸 등급을 갖춘 협동로봇 공급처가 하나 늘었다. 기존 SCARA로 대응하기 어려운 불규칙 형상 핸들링과 작업자 인접 공정으로 적용 폭이 넓어지는 방향이다.
- 확인 필요: 가반하중·리치 등 구체 사양이 보도자료에 명시되지 않아 별도 확인이 필요하다.

**Kawasaki Robotics RL030N — 8축 로봇암을 휴머노이드용 양산 플랫폼으로 전환**

- 확인 내용: 2026-09-22 Kawasaki Robotics와 미국 Dexterity가 협력 확대를 발표. Kawasaki가 개발한 8자유도 로봇암 RL030N을 Dexterity 휴머노이드 "Mech"에 탑재해 트레일러 상하차 등 창고 물류에 적용하며, 양산·배치 확대 단계로 전환한다. Dexterity의 Foresight World Model 등 소프트웨어 스택과 결합한다.
- 관련 근거: [Evertiq, 2026-09-22](https://evertiq.com/design/2026-09-22-kawasaki-robotics-partners-with-dexterity-to-advance-warehouse-logistics) [2차 인용]
- 기존 대비 변화: 개발 단계 협력에서 양산형 로봇암 플랫폼 공급으로 단계가 올라갔다.
- 생산기술 시사점: 적용 영역은 창고 물류이며 제조 라인 직접 적용 사례는 아니다. 다만 산업용 로봇 메이커가 휴머노이드용 다자유도 암을 양산 부품으로 공급하기 시작한 점은, 휴머노이드 상체가 기존 산업용 로봇 공급망 위에서 조달되는 구조를 보여준다.
- 확인 필요: RL030N 가반하중·리치 사양, 제조 공정 적용 여부, 실제 가동 데이터.

**RLWRLD·CJ대한통운 물류 특화 Robotics Foundation Model 공동개발 MOU**

- 확인 내용: 2026-09-21 RLWRLD와 CJ대한통운이 물류 특화 Robotics Foundation Model(RFM) 공동개발 MOU를 체결. 초기 적용 물류 공정을 선정해 실제 작업 환경에서 동작 검증(PoC)을 진행한 뒤 적용 범위를 확대하며, 장기적으로 Logistics as a Service 상용화를 목표로 한다. RLWRLD는 시각·센서 데이터로 실환경을 해석하는 RFM RLDX-1을 개발 중이다.
- 관련 근거: [The Korea Times(한국어 매체 영문판), 2026-09-21](https://www.koreatimes.co.kr/business/companies/20260921/rlwrld-cj-logistics-expand-partnership-to-build-smarter-warehouse-robots) [2차 인용]
- 기존 대비 변화: 개별 로봇 파일럿에서 파운데이션 모델을 물류사와 공동 개발·검증하는 구조로 협력 범위가 넓어졌고, 실환경 데이터를 모델 고도화에 되먹이는 경로를 명시했다.
- 생산기술 시사점: 라인사이드 물류에 파운데이션 모델형 제어를 쓰면 품종·레이아웃 변경 시 재교시 부담이 줄어들 여지가 있다. 다만 현재는 PoC 착수 단계이며 성능 근거는 공개되지 않았다.
- 확인 필요: PoC 대상 공정, RLDX-1이 지원하는 하드웨어 범위(휴머노이드 외 AMR·매니퓰레이터 포함 여부).

**Robotiq Contact Core — 어댑티브 그리퍼 SDK·ROS 2 패키지·Isaac Sim 자산 공식 오픈소스화**

- 확인 내용: 2026-09-22 Robotiq이 어댑티브 그리퍼용 C++ SDK, 공식 ROS 2 패키지, 갱신된 NVIDIA Isaac Sim 자산 3종을 오픈소스로 공개했다. ROS 2 패키지는 기존 커뮤니티 드라이버와 인터페이스를 맞춘 드롭인 대체품이며, Isaac Sim 자산은 그리퍼 폐루프 기구학 시뮬레이션을 지원한다. 물리적 AI 소프트웨어 레이어 Contact Core의 첫 구성요소이며, 접촉점 임베디드 지능 기능은 4분기 출시 예정으로 명시됐다.
- 관련 근거: [RoboticsTomorrow(Robotiq 보도자료 게재), 2026-09-22](https://www.roboticstomorrow.com/news/2026/09/22/robotiq-releases-open-source-software-packages-for-the-physical-ai-ecosystem/27136) [공식 발표]
- 기존 대비 변화: 종래에는 커뮤니티가 ROS 2 드라이버와 시뮬레이션 모델을 자체 유지보수했다. 이를 제조사가 직접 소유·최적화하는 공식 지원 체계로 바꿨다.
- 생산기술 시사점: EOAT가 파지 하드웨어에서 학습·시뮬레이션 파이프라인의 표준 구성요소로 위치를 옮기고 있다. 그리퍼 폐루프 기구학을 시뮬레이터에서 정확히 재현할 수 있으면 오프라인 검증 범위가 그리퍼 접촉 구간까지 넓어진다.
- 확인 필요: 4분기 예정 접촉점 임베디드 지능의 구체 사양, 실제 파지 성공률 개선 데이터.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 추적성이 후공정 마킹에서 금형 내 각인으로 이동(ARBURG·Matriq) | 부품 ID와 공정 데이터가 성형 시점에 결합돼 이력 신뢰도가 올라가고, 마킹 설비·핸들링 스텝이 줄어듦 |
| 기술 변화 | 2K 금형이 회전판·인덱스 구조에서 금형 내부 동작 + 적층제조 핫러너 구성으로 대체 시도(DOMINO) | 2K 공정의 사출기 크기·설치 면적 제약을 완화할 가능성. 적층제조 핫러너가 미관이 아닌 소형화 전제 조건으로 사용됨 |
| 기술 변화 | 로봇 SW 가속 인터페이스가 벤더 독자 규격에서 표준 ROS 규격으로 하향 통합(Isaac ROS 5.0) | 비전가이드 인식 스택의 로봇 메이커 종속도가 낮아지고, 고정지그 의존도 축소 방향과 맞물림 |
| 업체 변화 | Epson이 협동로봇으로 첫 진입, Kawasaki가 휴머노이드용 8축 암을 양산 공급 | 산업용 로봇 메이커가 협동·휴머노이드 영역으로 제품군을 넓히며, 휴머노이드 상체가 기존 산업용 공급망에서 조달되는 구조가 드러남 |
| 업체 변화 | 취출로봇 발표가 4주 연속 성능 확대보다 설치 면적·정비성 개선에 집중(WITTMANN WX253) | 사출셀 설계 제약이 가반·속도보다 공간·다운타임 쪽으로 옮겨가고 있음 |
| 적용사례 변화 | 휴머노이드 훈련이 전시 데모에서 완성차 공장 부지 내 상설 훈련센터로 이동(Boston Dynamics RMAC) | 제조 진입점이 조립이 아니라 부품 시퀀싱·라인사이드 물류임이 구체화. 적용 수준은 파일럿 훈련 |
| 확인 필요 | 금주 확인된 사출 3건은 모두 Fakuma 2026(10월) 전시 데모 단계 | 사이클타임·내구·양산 검증 데이터는 전시 개최 후 재확인 필요 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Fakuma 2026(10/12–16) 잔여 사전 발표 — ENGEL, KraussMaffei, Sumitomo Demag, Netstal | 사출기 | 9월 말 집중되는 프리뷰에서 제어·계측 신기능 확인 |
| 2 | ARBURG 마이크로히터 각인 방식의 인서트 내구·소재 적용 범위 | 금형 | 전시 데모에서 기술자료 단계로 넘어가는지 확인 |
| 3 | DOMINO 2K 금형의 형체력·사이클타임 공개 여부 | 금형 | 회전판 방식 대비 정량 비교 가능성 |
| 4 | Epson AX6 가반하중·리치 사양 공개 | 협동로봇 | 기존 SCARA·6축 라인과의 적용 경계 판단 |
| 5 | Isaac ROS 5.0 표준 인터페이스 전환의 로봇 메이커 채택 동향 | 로봇 SW | UR 외 추가 채택 여부가 종속도 완화의 실효성을 좌우 |
| 6 | Boston Dynamics RMAC 시퀀싱 작업 성능 데이터 | 휴머노이드 | 파일럿 훈련에서 라인 투입으로의 전환 시점 판단 |
| 7 | 국내 업체(LS Mtron, 우진프라임, 두산로보틱스, 한화로보틱스) 하반기 신제품 | 사출기·로봇 | 이번 주 국내 신규 발표 미확인, 지속 확인 필요 |
| 8 | Robotiq Contact Core 4분기 접촉점 임베디드 지능 사양 | EOAT | 그리퍼 접촉 데이터의 실제 활용 형태 확인 |

## 출처

### 사출성형기술

- [ARBURG, FAKUMA 2026 partner project(성형 중 데이터매트릭스 각인), 2026-09-21](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-partner-project/)
- [ARBURG, FAKUMA 2026 ALLROUNDER 475 V(재생 PC/ABS + PLF 인몰드 데코), 2026-09-17](https://www.arburg.com/en/company/news-press/detail/fakuma-2026-allrounder-475-v/)
- [TechnologieBox (독일어), POLAR-FORM·HASCO·ARBURG 2K 금형 콘셉트 DOMINO, 2026-09-21](https://www.technologiebox.de/2026/09/21/ausgezeichnetes-2k-werkzeugkonzept-domino-live-auf-der-fakuma/)
- [WITTMANN Group, WITTMANN automation technology at Fakuma 2026(WX253·R9), 2026-09](https://www.wittmann-group.com/sites/default/files/2026-09/wittmann-pr-09-26-fakuma_2026_automation_technology_en.pdf)
- [plasticker (독일어), WITTMANN R9 컨트롤러·신형 리니어로봇 WX253, 2026-09-22](https://plasticker.de/Kunststoff_News_49393_Wittmann_R9_Steuerung_vernetzt_Automatisierungskomponenten___Neuer_Linearroboter_WX253)

### 로봇제조기술

- [Boston Dynamics, Robotics Metaplant Application Center 개소, 2026-09-21](https://bostondynamics.com/news/boston-dynamics-opens-robotics-metaplant-application-center-to-train-humanoid-robots-for-manufacturing-tasks/)
- [NVIDIA, Isaac ROS 5.0 릴리스, 2026-09-22](https://blogs.nvidia.com/blog/isaac-ros-5-0-agentic-open-source-robotics/)
- [Epson, AX6 6축 협동로봇 출시, 2026-09-22](https://news.epson.com/news/ax6-6-axis-collaborative-robot)
- [Evertiq, Kawasaki Robotics·Dexterity 협력 확대(RL030N), 2026-09-22](https://evertiq.com/design/2026-09-22-kawasaki-robotics-partners-with-dexterity-to-advance-warehouse-logistics)
- [The Korea Times, RLWRLD·CJ대한통운 물류 RFM 공동개발 MOU, 2026-09-21](https://www.koreatimes.co.kr/business/companies/20260921/rlwrld-cj-logistics-expand-partnership-to-build-smarter-warehouse-robots)
- [RoboticsTomorrow, Robotiq 오픈소스 SW 패키지 공개(Contact Core), 2026-09-22](https://www.roboticstomorrow.com/news/2026/09/22/robotiq-releases-open-source-software-packages-for-the-physical-ai-ecosystem/27136)
