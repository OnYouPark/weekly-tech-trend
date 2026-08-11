---
title: 생산기술 신규기술 브리핑 - 2026년 8월 2주차
date: 2026-08-12
type: production
period: 2026년 8월 2주차
tags: [ONI, Covestro, Kollekt, MTF Technik, FANUC M-810, ROBOGUIDE, KUKA iiQKA.OS2, FlexLink RC20]
summary: 사출은 Fakuma 2026 사전 발표가 사출기 본체가 아닌 냉각수 수질·유량계측·다회로 온조 계통과 취출 후 분리 공정으로 이동. 로봇은 FANUC이 절삭력 적응제어형 대형 가공로봇 M-810과 ROBOGUIDE–Isaac Sim 통합을 동시 공개하고, KUKA는 컨트롤러 OS를 iiQKA.OS2로 통합
---

# 생산기술 신규기술 브리핑 - 2026년 8월 2주차

> 2026-08-06 – 2026-08-12 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

### ONI Oni-AquaHeRO 및 고온 유량계측 확대 – 금형 온도제어를 냉각수 수질까지 포함한 계통으로 확장

- 확인 내용: Fakuma 2026 대상 신규 라인업 공개. 신규 역삼투(RO) 설비 Oni-AquaHeRO는 신수(新水) 중 박테리아·중금속·염 함량을 최대 99 % 저감하고, 적응형 제어로 동일 투과수 품질 기준 기존 RO 설비 대비 용수 사용량을 최대 45 % 절감. 유지보수·마모가 없는 유량 계측 방식 3종을 매체온도 +160 °C까지 확대(+125 °C까지 Vortex 또는 초음파, +160 °C까지 전용 설계 초음파 센서). 다회로 금형온도제어 시스템·워터 디스트리뷰터·온조기의 디지털 조작을 지원하는 어시스턴트 기능을 함께 공개. 적용 수준: 신제품 출시 + 전시 데모.
- 관련 근거: [PlastXnow, 2026-08-12](https://www.plastxnow.de/fakuma-2026-oni-nachhaltige-kuehl-und-wassertechnik-a-ed406d85b0334a25082b71ac6dbae94a/) [공식 발표]
- 기존 대비 변화: 종전 개선은 온조기 본체 성능(펌프·히터) 중심이었다. 이번에는 냉각수 수질(RO) – 유량계측 – 다회로 제어 소프트웨어를 하나의 계통으로 묶었다. 유량계측 상한을 +160 °C까지 올린 점은 고온 온조 회로에서 마모형 센서를 대체할 수 있는 범위 확대다.
- 생산기술 시사점: 냉각수 수질 악화는 금형 냉각회로 스케일·부식으로 이어져 국부 열전달 편차와 치수·외관 산포를 만든다. 수질 관리와 회로별 유량 감시를 온조 제어계에 통합하면 금형 냉각 성능 저하를 설비 단에서 조기 검출할 수 있다. 고온 유량계측 확대는 고내열 수지·박육 부품용 고온 회로의 감시 사각지대를 줄인다.
- 확인 필요: 45 % 절수·99 % 저감의 측정 조건(원수 수질·회수율), 어시스턴트 기능의 제어 알고리즘, 양산 레퍼런스, 국내 공급 여부.

### Covestro 연구 프로젝트 Kollekt 개시 – 차량 조명용 PC의 재생 경로와 AI 로봇 해체 셀을 한 과제로 통합

- 확인 내용: Forvia Hella 주관, BMW·Covestro·Geba·Fraunhofer IEM·Fraunhofer Umsicht·파더보른대 등 참여. 기간 2026-06 – 2029-05, 독일 BMFTR "CircularGlowUp" 프로그램으로 총 4.371백만 유로 지원. Covestro는 차량 조명에서 회수되는 폴리카보네이트 및 PC 블렌드의 재활용 경로를 담당. 별도 축으로 AI 기반 유연 로봇 해체 셀을 개발하고, 디지털 제품 트윈과 소재·공정 데이터 연계로 단일 소재 분리도를 높이는 것을 목표로 한다. 적용 수준: 연구·개발(양산 아님).
- 관련 근거: [plasticker (독일어), 2026-08-11](https://plasticker.de/Kunststoff_News_48999_Kollekt_Forschungsprojekt_fr_recyclingfhige_Fahrzeugbeleuchtung_gestartet) [2차 인용, Covestro 보도자료 기반]
- 기존 대비 변화: 기존 PCR 논의가 소재 물성 확보 중심이었다면, 이번 과제는 설계 단계(Design for Circularity) – 자동 해체 – 소재별 분리 – 재투입을 한 과제로 묶었다. PC 렌즈·금속·전자부품이 혼재한 조립체를 대상으로 한 점이 단일 소재 회수 과제와 다르다.
- 생산기술 시사점: 회수 PC의 재사출 적용이 확대되면 광학 품질에 직결되는 황변·분자량 저하·잔류응력 관리가 신규 공정 변수로 추가된다. 해체 용이성 요구는 게이트 위치·용착·인서트 구조 등 금형 설계 제약으로 전이될 수 있다.
- 확인 필요: 재생 PC의 광학 등급 물성 목표치, 재생재 투입 비율 목표, 사출 공정 조건 변경 범위.

### 로봇제조기술

### FANUC M-810 시리즈 – 절삭력 실시간 적응제어를 표준 탑재한 대형 가공 로봇 출시

- 확인 내용: 6축 다관절 가공 로봇 2모델. M-810/270-27B는 가반하중 270 kg·리치 2.7 m, M-810/190-20B는 가반하중 190 kg. iRCalibration Signature 기반 절대위치·경로정도 유지, 가공 중 절삭력을 자동 검출해 제어 파라미터를 실시간 보정하는 기능을 탑재. J3암·손목부 IP67, R-50iA 컨트롤러 조합. 밀링·드릴링·디버링 대상이며, 기가캐스팅 등 대형 구조부품을 고정한 상태에서 로봇이 주위를 돌며 가공하는 셀 구성을 제시. 반복정도는 190 kg 모델 ±0.02 mm, 270 kg 모델 0.03 mm(2차 인용 수치). 적용 수준: 신제품 출시.
- 관련 근거: [P&T Review, 2026-08-07](https://www.ptreview.co.uk/news/113538-fanuc-presents-high-accuracy,-high-stiffness-robot) [2차 인용] / [Automationspraxis (독일어), 2026-08-11](https://automationspraxis.industrie.de/ki/fanuc-auf-der-amb-2026-fokus-auf-ki-und-software/) [2차 인용]
- 기존 대비 변화: 기존 가공용 로봇 대비 가반하중·작업영역이 확대됐고, 절삭력 실시간 적응제어가 표준이 됐다. 대형 공작기계 대체를 명시적 목표로 제시한 점이 종전 핸들링 중심 대형기와 다르다.
- 생산기술 시사점: 대형 다이캐스팅·구조부품의 게이트 절단, 버 제거, 홀 가공을 고정형 대형 MCT 대신 로봇 셀로 구성하는 선택지가 넓어진다. 절삭력 적응제어는 로봇 강성 부족에 따른 채터·경로 편차를 완화하는 방향이며, 소량 다품종 대형부품 라인의 설비 투자 구조에 영향을 줄 수 있다.
- 확인 필요: FANUC 본사·유럽 공식 보도자료 원문(직접 확인 못 함), 정식 판매 개시 시점·지역, 절삭 조건별 실측 정밀도.

### Hirebotics Cobot Welder – 3개 공장 58대 규모 협동로봇 용접 실가동과 용접 조건 중앙 관리 확인

- 확인 내용: Tate Inc.가 아칸소·버지니아·켄터키 3개 공장에 Cobot Welder 58대 배치를 완료. 2023-09 최초 2대 도입 후 2024년 전면 전환을 결정했다. 클라우드 기반 노코드 Beacon Pro로 스마트폰·태블릿에서 프로그래밍·운전·모니터링하며, 작업자 교육 소요는 10 – 20분. 용접 프로그램·파라미터·플레이리스트를 3개 공장 간 실시간 공유한다. 아칸소 공장은 협동로봇이 상류 공정의 정밀 태킹·가조립을 담당하고 하류 산업용 로봇에 투입하는 구조로 운용한다. 구조 조립품 기준 용접공 1인당 처리량 12배 증가는 사용자 자체 보고치. 적용 수준: 양산.
- 관련 근거: [The Robot Report, 2026-08-10](https://www.therobotreport.com/tate-deploys-58-hirebotics-cobot-welders-across-multiple-facilities/) [업계 분석, 업체 인터뷰 기반]
- 기존 대비 변화: 단일 셀 실증이 아니라 다수 공장·58대 규모의 실가동 사례이며, 용접 파라미터의 중앙 관리와 공장 간 프로그램 공유가 실제 운용 중임이 확인됐다.
- 생산기술 시사점: 힘·출력 제한형 협동로봇을 펜스 없이 다수 배치하고 용접 조건을 서버에서 표준화·배포하는 운용 모델이 실제로 작동함을 보여준다. 다거점 공장의 용접 품질 편차 관리에 프로그램 중앙화가 유효한 수단이 될 수 있다.
- 확인 필요: 12배 수치의 산정 기준(대상 부품·비교 조건), 사용 협동로봇 기종·용접 전원 사양, 사이클타임·직행률.

## 사출성형기술 상세

### WITTMANN Drymax basic 120 – 제습건조기 조작부를 심벌 기반 컬러 그래픽으로 전환

- 확인 내용: 기존 Drymax basic 120에 3.5인치 TFT LCD 컬러 디스플레이를 신규 적용. 모든 설정 항목을 아이콘으로 표시해 언어 의존도와 오조작 위험을 낮추는 것이 목적. 사양은 건조공기 발생량 120 m³/h, 수지 처리량 최대 75 kg/h, 제습 카트리지 2기. 재생(regeneration)의 시간·강도를 실수요에 맞춰 조절하고, 설비 정지 또는 건조 부하 감소 시 자동 온도 저감. 고온·고습 지역용 SmartCare 옵션은 소량의 압축공기를 공정에 투입해 더 낮고 안정적인 노점을 확보. Fakuma 2026 홀 B1, 부스 1204. 적용 수준: 신제품 출시 + 전시 데모.
- 관련 근거: [WITTMANN 공식 보도자료 "Dry-air drying made intuitive", 2026년 8월](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-pr-08-26-fakuma_2026_drymax_basic_120_en.pdf) [공식 발표] / [K-Zeitung (독일어), 2026-08-08](https://www.k-zeitung.de/index%2Ephp/wittmann-trockenlufttrockner-drymax-basic-120-fakuma) [2차 인용]
- 기존 대비 변화: 건조 성능 수치(120 m³/h, 75 kg/h)는 동일하고 조작 UI만 심벌 기반 컬러 그래픽으로 전환됐다. 앞서 다룬 EcoPrimus·HiQ Packing·FlexCell plus와는 별개 품목이다.
- 생산기술 시사점: 수지 건조 조건 오설정은 은조·기포 등 외관·강도 불량의 반복 원인이다. 다국적 인력·교대 근무 환경에서 건조기 HMI의 언어 의존도를 낮추면 셋업 편차에 기인한 초물 불량을 줄이는 방향으로 작용한다. 정지 시 자동 온도 저감은 다품종 소량 라인의 대기 시간 에너지 손실과 연결된다.
- 확인 필요: basic 시리즈 타 용량 모델 적용 확대 여부, 보도자료 정확한 발행 일자(월 단위만 명시), 국내 공급 시점.

### MTF Technik 세그먼트 분리 드럼 및 Multi-Control – 3D 프린팅 세그먼트 판 교체로 제품·게이트 분리 형상 대응

- 확인 내용: 스테인리스 드럼 케이지에 3D 프린팅으로 제작한 개별 구성 가능 세그먼트 판을 장착하는 구조. 작은 부품(게이트·스프루)은 구멍으로 낙하하고 큰 양품은 드럼에 남아 최종 단계에서 별도 배출한다. 제작사는 종래 복잡한 자동화 설비로만 가능하던 제품·게이트 분리 과제를 대체할 수 있다고 설명. 함께 공개한 Multi-Control은 회전 분배 설비·리니어 버퍼·이송 버퍼·캐러셀 데포 스테이션에 공용으로 쓰는 터치 디스플레이 제어부로, 용기 교체를 개수 기준 또는 시간 기준으로 선택할 수 있다. 적용 수준: 전시 예고.
- 관련 근거: [K-Zeitung (독일어), 2026-08-07](https://www.k-zeitung.de/index%2Ephp/separiertrommel-trennt-unkompliziert-teile-und-anguesse) [2차 인용]
- 기존 대비 변화: 고정 형상 드럼에서 3D 프린팅 세그먼트 판 교체 방식으로 전환해 품종별 분리 형상 대응의 리드타임·비용 구조를 바꿨다. 버퍼 제어는 설비별 전용 제어에서 범용 표준 제어로 통합됐다.
- 생산기술 시사점: 취출 후 게이트 분리를 로봇 셀 대신 기구식 분리기로 처리할 수 있는 범위가 넓어진다. 다품종 라인에서 형상 변경 대응을 소모성 세그먼트 판 교체로 흡수하면 자동화 투자와 전환 시간을 줄이는 방향으로 작용한다. 용기 교체를 개수 기준으로 제어하면 무인 운전 지속 시간 설계가 명확해진다.
- 확인 필요: 세그먼트 판 재질·내마모 수명, 분리 정확도(혼입률), 적용 가능 부품 중량·치수 범위, 양산 적용 실적. 현 근거는 전시 예고이며 양산 검증 자료는 없다.

### EPF Supata Smart Feeder – 공급·정렬·핸들링·비전 검사·추적성을 1개 로봇 스테이션으로 통합

- 확인 내용: 자체 개발 진동 테이블(호퍼 포함), 딥러닝 기반 머신비전, 부품 핸들링 로봇을 단일 유닛으로 통합한 로봇 스테이션. 복수의 플라스틱 부품을 하나의 생산 흐름에서 처리하고, 통합 화상처리로 치수와 표면을 전수 검사하며, 로트 데이터를 자동 매핑해 추적성을 확보한다. 빠른 레시피 전환, 옵션인 그리퍼 자동 교체, 자동화 라인 연계를 지원. Fakuma 2026 라이브 시연 예정. 적용 수준: 전시 예고.
- 관련 근거: [K-Zeitung (독일어), 2026-08-11](https://www.k-zeitung.de/multifunktionale-automationsloesung-mit-ki) [2차 인용]
- 기존 대비 변화: 공급기·검사기·핸들링을 개별 설비로 구성하던 방식에서 진동 공급 + 딥러닝 비전 + 로봇 + 데이터 매핑을 한 스테이션으로 묶은 통합형으로 전환했다. 그리퍼 자동 교체와 레시피 전환이 표준 기능에 포함됐다.
- 생산기술 시사점: 부품 공급 – 검사 – 추적을 한 셀에 묶으면 셀 간 이송·재파지 단계가 줄고, 로트 추적 데이터가 검사 결과와 같은 지점에서 생성되어 품질 추적성 구축 부담이 준다. 다만 딥러닝 비전은 학습 데이터 확보와 판정 기준 검증 체계가 선행돼야 한다.
- 확인 필요: 처리 능력(부품/분), 오검출률, 대응 부품 크기·중량, 양산 적용 사례. EPF 공식 제품 페이지는 직접 확인하지 못했다.

### Haitian Zhafir Zeres 1200V – 전동 수직 사출기가 독일 SKZ 공인 자격 과정 실습 장비로 편성

- 확인 내용: Haitian International Germany가 SKZ 뷔르츠부르크 사업장에 형체력 1,200 kN의 Zhafir Zeres 1200V/300/B36mm를 교육용으로 제공. 해당 기종은 HT.Extend 시스템을 탑재한 전동 구동 방식이다. 뷔르츠부르크에서는 연간 약 1,000명이 사출성형 교육 과정을 이수하며, 신규 설비는 기초 과정과 공인 사출 셋업 기술자(Geprüfter Einrichter Spritzgießen), 공인 금형 설계자(Geprüfter Werkzeugkonstrukteur) 자격 과정에 투입될 예정. 적용 수준: 교육·서비스망 변화.
- 관련 근거: [plasticker (독일어), 2026-08-07](https://plasticker.de/Kunststoff_News_48981_SKZ_Neue_Haitian_Spritzgiemaschine_fr_die_Fachkrftequalifizierung) [2차 인용, SKZ·Haitian 발표 기반]
- 기존 대비 변화: 기존 Peine 단일 거점에서 뷔르츠부르크로 교육 설비 배치가 확대됐고, 유압식이 아닌 전동 수직기가 자격 과정 실습 장비로 편성됐다.
- 생산기술 시사점: 인서트 사출이 주 용도인 수직형 전동기가 유럽 공인 자격 과정의 표준 실습 환경이 되면, 셋업 기술자·금형 설계자의 기준 조작 환경이 전동·수직 기반으로 이동한다. 인서트 사출 공정의 표준 작업 절차와 교육 커리큘럼 정합성을 점검할 근거가 된다.
- 확인 필요: HT.Extend 구성 항목의 세부 사양, 커리큘럼 개정 여부, 국내 유사 교육기관 도입 여부.

### Dr. Boy Fakuma 2026 출품 구성 – 최소 사양 사출기 2대 병렬 마이크로 사출, LSR·PLA·재생 NAS 적용

- 확인 내용: 7개 전시물 전량을 신규 디자인으로 처음 공개. 핵심은 마이크로 사출로, 최소 사양 사출기 2대를 나란히 배치해 육안 식별이 어려운 의료용 마이크로 부품을 생산하며 LSR과 PLA 기반 부품을 다룬다. Boy 50 Electric은 협동로봇 연계 셀에서 NAS 30 Eco 소재 컵을 성형하고, Boy 100 Electric은 LSR 접이식 깔때기를 생산해 통합 LR 5로 컨베이어에 배출. 적용 수준: 전시 데모.
- 관련 근거: [PlastXnow (독일어), 2026-08-11](https://www.plastxnow.de/dr-boy-fakuma-2026-mikrospritzguss-medizinanwendungen-a-d450ac32fc6099df00a0e97d5eade34f/) [공식 발표 기반 2차 인용]
- 기존 대비 변화: 종전 개별 소형기 단품 전시에서 최소 사양기 2대 병렬 구성과 전동기 전 라인업의 신규 설계 적용으로 바뀌었다. 소재 실증 범위도 LSR·PLA·재생 NAS까지 넓어졌다.
- 생산기술 시사점: 마이크로 사출은 계량 정밀도와 사출 응답성이 성형성을 좌우한다. 소형 전동기의 계량 분해능과 자동화 연계 구성은 커넥터·센서 하우징 등 소형 부품 공정의 참조가 된다. 다만 전시 구성이므로 양산 적용 근거로 쓰기는 부적절하다.
- 확인 필요: 마이크로 부품의 샷 중량·치수 공차, 사이클 타임, 반복 정밀도, 양산 레퍼런스.

## 로봇제조기술 상세

### FANUC AMB 2026 출품 예고 – R-50iA 컨트롤러와 ROBOGUIDE–NVIDIA Isaac Sim 통합, Agentic Digital Twin 공개

- 확인 내용: 2026-09-15 – 19 슈투트가르트 AMB 출품 내용 공개. 신형 R-50iA 컨트롤러는 컴팩트 설계·연산성능 향상·인증 사이버보안을 특징으로 한다. M-10/12 – 14D 로봇셀에서 R-50iA 모션제어 + 힘센서 + 3D 비전 조합으로 복합 가공공정을 시연할 예정. 시뮬레이션 SW ROBOGUIDE를 NVIDIA Isaac Sim 오픈 레퍼런스 프레임워크에 통합해 로봇 동작 가상 시뮬레이션·프로그램 티칭·실행·검증을 수행한다. Agentic Digital Twin은 MCP 서버를 통한 시뮬레이션 절차 자동화 등 CNC 작업을 지원한다. 적용 수준: 전시 예고.
- 관련 근거: [Automationspraxis (독일어), 2026-08-11](https://automationspraxis.industrie.de/ki/fanuc-auf-der-amb-2026-fokus-auf-ki-und-software/) [2차 인용]
- 기존 대비 변화: 2026-03 FANUC–NVIDIA Physical AI 협력 대비, ROBOGUIDE와 Isaac Sim의 구체적 통합 형태와 MCP 서버 기반 에이전트형 디지털 트윈이 처음 제시됐다. 컨트롤러 세대는 R-30iB 계열에서 R-50iA로 전환됐다.
- 생산기술 시사점: OLP·가상시운전 도구가 범용 시뮬레이션 프레임워크와 연결되면 로봇 셀 설계 검증과 AI 학습 데이터 생성이 동일 환경에서 이뤄질 수 있다. 컨트롤러 단 사이버보안 인증은 공장 네트워크에 연결된 로봇의 보안 요건 대응과 직접 관련된다.
- 확인 필요: 전시 예고이며 양산 적용 사례가 아니다. ROBOGUIDE–Isaac Sim 통합의 정식 릴리스 버전·제공 시점, R-50iA 사이버보안 인증 규격(IEC 62443 여부) 미확인.

### KUKA AMB 2026 출품 예고 – KR C5 계열과 LBR iisy를 iiQKA.OS2로 통합, 가상시운전 도구 동반

- 확인 내용: 신형 KR Cybertech 세대는 가반하중 35 kg, 신규 개발 센터핸드(중공 손목)를 적용해 핸들링·공작기계 로딩·시험 용도로 제시. 신형 LBR iisy는 iiQKA.OS2 기반 가반하중 11 kg 컴팩트 산업용 협동로봇으로 핸드가이딩을 지원한다. KR C5 및 KR C5 micro 컨트롤러가 iiQKA.OS2 기반이며 AI-ready 설계로 소개됐다. iiQKA.mxAutomation으로 기존 기계 제어기에 로봇을 통합하고, iiQWorks.Sim으로 계획·가상시운전·최적화를 지원한다. 파트너 전시로 KMP 1500P 자율이동 플랫폼의 가공 스테이션 간 워크피스 반송, 비전·AI 기반 빈피킹 셀, KR Agilus ultra 기반 바이스 핸들링 셀이 제시됐다. 적용 수준: 전시 예고.
- 관련 근거: [Automationspraxis (독일어), 2026-08-11](https://automationspraxis.industrie.de/news/kuka-auf-der-amb-durchgaengige-automation-fuer-die-metallbearbeitung/) [2차 인용]
- 기존 대비 변화: 2026-05 interpack에서 공개된 KR Cybertech 신세대·KR Agilus ultra의 적용 범위가 금속가공으로 확장됐다. LBR iisy와 KR C5 계열이 iiQKA.OS2로 통합되어 컨트롤러 OS 세대 전환이 명시됐다.
- 생산기술 시사점: 로봇 제어기 OS 단일화와 mxAutomation 방식 통합은 설비 측 PLC 언어로 로봇을 다루는 운용 구조를 유지하면서 로봇을 추가하는 접근이다. 기존 라인 증설 시 로봇 전용 프로그래밍 인력 부담을 줄이는 방향으로 작용한다.
- 확인 필요: 전시 예고이며 양산 적용이 아니다. KUKA 공식 뉴스룸 원문은 직접 열지 못했다. LBR iisy 11 kg 모델의 정식 형번·출시 시점, iiQWorks.Sim 버전 미확인.

### VicOne Radeis Extension – NVIDIA Isaac Sim용 사이버-세이프티 검증 확장 무료 배포

- 확인 내용: 2026-08-09 무료 배포 개시. Isaac Sim에 사용자 자체 로봇 모델·목표 작업을 올린 뒤 큐레이션된 공격 시나리오(조작된 시각 입력, 명령 하이재킹, AI 정책 오염, 연결 인터페이스 악용)를 적용해 로봇 거동 변화를 관찰하는 확장 기능. VLM(비전-언어 모델)이 적대적 시각 프롬프트·센서 조작에 견디는지 검증할 수 있다. 모델·SW·센서·통신·제어 경로가 바뀔 때마다 반복 시험이 가능하다. DEF CON 34 Robotic Hacking Community의 Physical AI Safety Stress Test CTF(16개 팀, 25건 성공) 결과를 시나리오로 정형화했다. 적용 수준: 도구 배포.
- 관련 근거: [The Robot Report, 2026-08-10](https://www.therobotreport.com/vicone-releases-free-nviida-isaac-sim-cybersecurity-extension-based-def-con-34-research/) [공식 발표 인용]
- 기존 대비 변화: 기존 Isaac Sim은 물리·기능 검증 중심이었다. 배포 전 사이버 위협이 로봇 거동에 미치는 영향을 시뮬레이션에서 반복 검증하는 도구는 새로운 범주다.
- 생산기술 시사점: AI 기반 인식·판단을 쓰는 로봇 셀이 늘어나면 기능안전 검증만으로는 부족하고, 보안 침해 시 거동 변화까지 사전 검증 항목에 포함해야 한다. ISO 10218:2025 개정판이 사이버보안 요구를 포함한 흐름과 방향이 일치한다.
- 확인 필요: 지원 Isaac Sim 버전 범위, 산업용 6축 로봇·협동로봇 모델에 대한 적용 실적.

### FlexLink RC20 – 협동 팔레타이징 적용 범위를 가반하중 17 kg 중량물 라인까지 확대

- 확인 내용: 2026-08-11 신규 표준화 팔레타이징 셀 RC20 출시. 기존 RC12(가반하중 10 kg)와 대형 산업용 팔레타이저 사이 구간을 메우는 모델이다. 가반하중 17 kg, 처리량 분당 6박스(더블 픽 적용 시 분당 12박스), 최대 적재 높이 2.4 m. 처리량·적재 높이는 박스 사양·팔레트 규격·적재 패턴에 따라 달라진다고 명시됐다. 로봇 암은 FANUC CRX-20iA/L 힘·출력 제한형 협동로봇을 적용했고 CE 인증·UL 준수. 안전 스캐너·펜스 없이 작업자가 근접 통과해도 정지·감속 없이 운전을 지속한다고 설명한다. 소프트웨어 Robot Config로 팔레트 패턴을 수 분 내 설정하고, 백그라운드 시뮬레이션으로 패턴을 검증해 실제 시운전을 생략한다. 적용 수준: 신제품 출시.
- 관련 근거: [Automated Warehouse, 2026-08-11](https://www.automatedwarehouseonline.com/flexlink-launches-rc20-collaborative-robot-palletizer/) [공식 발표]
- 기존 대비 변화: 협동 팔레타이징 라인업의 가반하중 상한이 10 kg에서 17 kg으로 상향됐다. 펜스·스캐너 없이 근접 통과를 허용하는 안전 구성을 표준 셀 사양에 포함했고, 패턴 설정을 시뮬레이션 검증으로 대체했다.
- 생산기술 시사점: EOL 포장 공정의 중량 박스 구간은 그동안 펜스형 산업용 팔레타이저가 필요했다. 가반하중 17 kg·펜스리스 구성이 표준 셀로 제공되면 라인 옆 협소 공간에서의 중량 박스 팔레타이징을 검토할 여지가 생긴다. 다품종 소량 생산에서는 SKU 변경 시 패턴 재설정 시간이 셀 가동률에 직접 영향을 준다.
- 확인 필요: 펜스리스 안전 구성의 근거 규격(ISO/TS 15066 대비 검증 방식), SKU 변경 소요 시간 실측치, 분당 6박스 조건의 박스 규격·중량 기준, 국내 공급·서비스 채널.

### AMC Automation 차세대 ZPA 컨베이어 – 존 단위 주문형 구동으로 무압 단품 반송, 공압 부품 배제

- 확인 내용: 2026-08-10 상세 사양 공개. 제품 자체는 Automate 2026(6월) 전시에서 처음 소개됐고 이번은 후속 상세 보도다. 존(zone) 단위 지능형 제어로 제품 간 접촉·배압 없이 누적하며, 존끼리 통신해 컨베이어 중간에 존을 추가·재결합하면 자동으로 상호 인식하는 plug-and-play 모듈 구조다. 24V DC 기어모터 + run-on-demand 방식으로 제품이 있는 존만 구동하고 빈 존은 대기한다. 업체는 기존 컨베이어 대비 에너지 소비 75 % 이상 절감이 가능하다고 설명한다. 공압 부품은 배제했다. 적용 수준: 상용 소개(제조 라인 양산 적용 사례 미확인).
- 관련 근거: [Automated Warehouse, 2026-08-10](https://www.automatedwarehouseonline.com/amc-automation-introduces-conveyor-system-single-piece-flow/) [공식 발표, 업체 GM 인터뷰 기반]
- 기존 대비 변화: 공압식·상시 구동 어큐뮬레이션 컨베이어를 24V DC 존 제어·주문형 구동으로 대체했다. 존 추가·제거가 배선 재작업 없이 가능한 모듈 구조가 신규 설계 요소다.
- 생산기술 시사점: 다품종이 혼류로 흐르는 라인사이드 반송에서 배압에 의한 제품 손상과 상시 구동 전력이 상존 과제다. 존 단위 무압 반송과 주문형 구동은 손상률과 전력·소음을 함께 낮추는 접근이다. 공압 배제는 공장 압축공기 부하 저감 관점에서도 검토 대상이 된다.
- 확인 필요: 에너지 75 % 절감의 비교 기준 조건(대조군 사양·가동률), 최대 반송 중량·속도, 존 길이 단위, 제조 라인 양산 적용 사례, 상용 출하 시점.

### RoboStore Robo Inc. 설립 – 이동·휴머노이드 로봇의 미국 내 조립·통합 경로 신설

*2026-08-10 브리핑에서 다룬 미국 FCC 외국산 이동로봇 규제 건의 후속 진전으로만 기재한다.*

- 확인 내용: 2026-08-10 RoboStore가 미국 기반 로봇 제조·시스템 통합 법인 Robo Inc.를 출범. 미국 내 조립, 현지화된 데이터 인프라, 국내 통합을 결합한 구조이며, 데이터 흐름·네트워크 접근·소프트웨어 제어·운영 환경별 위험 검토를 통합 프로세스에 반영한다고 밝혔다. 뉴욕 롱아일랜드에 약 6,132 m²(66,000 sq ft) 생산 시설 개설을 계획하고 2027년 1분기 완전 가동을 목표로 한다. 적용 수준: 사업 구조 변경(기술 검증 아님).
- 관련 근거: [The Robot Report, 2026-08-10](https://www.therobotreport.com/robostore-launches-robo-inc-to-help-u-s-organizations-deploy-robots/) [공식 발표. 무역 규제 연관 해석 부분은 업계 분석]
- 기존 대비 변화: 유통 중심 사업에서 미국 내 조립·엔지니어링·통합·시험·서비스를 포함하는 구조로 전환했다. 규제 대응 목적의 공급망 현지화가 구체적 생산 시설 계획으로 제시된 점이 이전 대비 진전이다.
- 생산기술 시사점: 이동·휴머노이드 로봇을 제조 라인에 도입할 때 국가별 규제·데이터 보안 요건이 공급사 선정 조건에 편입되는 흐름이 확인된다. 도입 검토 시 하드웨어 사양 외에 데이터 흐름, 네트워크 접근 통제, 현지 서비스망 존속 여부를 사양서 단계에서 확인할 항목으로 다룰 필요가 있다.
- 확인 필요: 실제 제조 범위(조립 수준인지 부품 국산화 포함인지), 제조 라인용 적용 실적, 롱아일랜드 시설의 착공 상태.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 측 Fakuma 2026 사전 발표가 사출기 본체가 아닌 냉각수 수질·유량계측·다회로 온조 소프트웨어와 취출 후 분리 공정으로 이동 | 성형기 사양이 아니라 금형 주변 계통의 감시 범위가 품질 산포를 좌우하는 국면. 온조 회로 감시 항목을 사양서 단계에서 정의할 필요 |
| 기술 변화 | 로봇 측은 컨트롤러 OS 세대 전환(FANUC R-50iA, KUKA iiQKA.OS2)과 시뮬레이션 도구의 범용 프레임워크 통합이 동시 진행 | 셀 설계·가상시운전·AI 학습 데이터 생성을 한 환경에서 처리하는 구조로 이동. 기존 OLP 자산의 이관 경로 확인이 과제 |
| 업체 변화 | FANUC이 절삭력 적응제어형 대형 가공 로봇(M-810)으로 대형 공작기계 대체를 명시 | 대형 다이캐스팅·구조부품의 후가공을 로봇 셀로 구성하는 선택지 확대 |
| 업체 변화 | Covestro·Forvia Hella·BMW가 차량 조명 PC 재생을 설계–해체–분리–재투입 단일 과제로 구성 | 광학 부품용 재생 PC 적용 시 황변·분자량 저하 관리가 신규 공정 변수로 편입될 전망 |
| 적용사례 변화 | Hirebotics Cobot Welder가 3개 공장 58대 규모로 실가동, 용접 조건을 서버에서 중앙 관리 | 협동로봇 용접이 실증 단계를 지나 다거점 표준화 운용 단계로 이동한 사례 |
| 확인 필요 | ONI 45 % 절수·AMC 75 % 절감·Hirebotics 12배는 모두 업체·사용자 자체 보고치로 비교 기준 미공개 | 정량 비교 조건 확보 전에는 판단 근거로 쓰지 않음 |
| 확인 필요 | FANUC M-810·KUKA AMB 건은 공식 뉴스룸 원문 접근 실패로 독일·영국 산업지 2차 인용에 의존 | 다음 주 공식 보도자료 원문 재확인 필요 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | FANUC M-810 시리즈 공식 보도자료 원문 및 유럽 판매 개시 시점 | 로봇 | 절삭력 적응제어 사양·정밀도 실측치 확인 |
| 2 | Fakuma 2026(2026-10 개최) 잔여 사전 발표 – ENGEL·KraussMaffei·ARBURG·Sumitomo Demag | 사출 | 사출기 본체 신기종 발표 유무 확인 |
| 3 | Ewikon Pro Shot / Pro Tect / L2X 핫러너 신제품 게시일 | 사출 | 신규성 판정을 위한 발표 시점 확인(현재 미확인) |
| 4 | FANUC ROBOSHOT 4,500 kN 신기종 발표 시점 | 사출 | 전동 사출기 형체력 상한 확대 여부 확인 |
| 5 | ROBOGUIDE–NVIDIA Isaac Sim 통합 정식 릴리스 | 로봇 SW | 기존 OLP 자산 이관 가능 범위 확인 |
| 6 | Kunststoff-Institut Lüdenscheid·BKV 공동 프로젝트 Recycling 3(2026-09 개시) | 사출 소재 | PCR 규제·소재 가용성 정리 자료 확보 |
| 7 | Tacta Systems TactaBot 촉각 기반 조립 핸드 | 로봇 | 힘제어 조립 티칭 데이터 수집 방식의 실공정 검증 여부(2027년 초 출하 예정) |
| 8 | 국내 업체(우진플라임·LS Mtron·두산로보틱스·한화로보틱스) 하반기 발표 | 사출·로봇 | 기간 내 신규 발표 미확인, 국내 산업지 재확인 필요 |

## 출처

### 사출성형기술

- [PlastXnow (독일어), ONI Fakuma 2026 냉각·용수기술, 2026-08-12](https://www.plastxnow.de/fakuma-2026-oni-nachhaltige-kuehl-und-wassertechnik-a-ed406d85b0334a25082b71ac6dbae94a/)
- [plasticker (독일어), Kollekt 연구 프로젝트 개시, 2026-08-11](https://plasticker.de/Kunststoff_News_48999_Kollekt_Forschungsprojekt_fr_recyclingfhige_Fahrzeugbeleuchtung_gestartet)
- [plasticker (독일어), SKZ Haitian 사출기 도입, 2026-08-07](https://plasticker.de/Kunststoff_News_48981_SKZ_Neue_Haitian_Spritzgiemaschine_fr_die_Fachkrftequalifizierung)
- [PlastXnow (독일어), Dr. Boy Fakuma 2026 마이크로 사출, 2026-08-11](https://www.plastxnow.de/dr-boy-fakuma-2026-mikrospritzguss-medizinanwendungen-a-d450ac32fc6099df00a0e97d5eade34f/)
- [WITTMANN 공식 보도자료, Dry-air drying made intuitive (Drymax basic 120), 2026-08](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-pr-08-26-fakuma_2026_drymax_basic_120_en.pdf)
- [K-Zeitung (독일어), WITTMANN Drymax basic 120 신규 디스플레이, 2026-08-08](https://www.k-zeitung.de/index%2Ephp/wittmann-trockenlufttrockner-drymax-basic-120-fakuma)
- [K-Zeitung (독일어), MTF Technik 세그먼트 분리 드럼, 2026-08-07](https://www.k-zeitung.de/index%2Ephp/separiertrommel-trennt-unkompliziert-teile-und-anguesse)
- [K-Zeitung (독일어), EPF Supata Smart Feeder, 2026-08-11](https://www.k-zeitung.de/multifunktionale-automationsloesung-mit-ki)

### 로봇제조기술

- [P&T Review, FANUC 고정도·고강성 가공 로봇 M-810, 2026-08-07](https://www.ptreview.co.uk/news/113538-fanuc-presents-high-accuracy,-high-stiffness-robot)
- [Automationspraxis (독일어), FANUC AMB 2026 AI·소프트웨어, 2026-08-11](https://automationspraxis.industrie.de/ki/fanuc-auf-der-amb-2026-fokus-auf-ki-und-software/)
- [Automationspraxis (독일어), KUKA AMB 2026 금속가공 자동화, 2026-08-11](https://automationspraxis.industrie.de/news/kuka-auf-der-amb-durchgaengige-automation-fuer-die-metallbearbeitung/)
- [The Robot Report, VicOne Isaac Sim 사이버보안 확장 무료 배포, 2026-08-10](https://www.therobotreport.com/vicone-releases-free-nviida-isaac-sim-cybersecurity-extension-based-def-con-34-research/)
- [The Robot Report, Tate Hirebotics 협동로봇 용접 58대 배치, 2026-08-10](https://www.therobotreport.com/tate-deploys-58-hirebotics-cobot-welders-across-multiple-facilities/)
- [The Robot Report, RoboStore Robo Inc. 출범, 2026-08-10](https://www.therobotreport.com/robostore-launches-robo-inc-to-help-u-s-organizations-deploy-robots/)
- [Automated Warehouse, FlexLink RC20 협동로봇 팔레타이저, 2026-08-11](https://www.automatedwarehouseonline.com/flexlink-launches-rc20-collaborative-robot-palletizer/)
- [Automated Warehouse, AMC Automation 단품 흐름 컨베이어, 2026-08-10](https://www.automatedwarehouseonline.com/amc-automation-introduces-conveyor-system-single-piece-flow/)
