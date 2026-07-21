---
title: 생산기술 신규기술 브리핑 - 2026년 7월 4주차
date: 2026-07-22
type: production
period: 2026년 7월 4주차
tags: [WITTMANN, Sigmasoft, SABIC, KUKA AMP, FANUC, AgiBot, Atlas, Agility Robotics]
summary: WITTMANN 포장 통합 자동화 셀 FlexCell plus 공개, KUKA AMP 북미 차체공장 실가동, 현대차그룹 Atlas 공장 투입 로드맵 확정, FANUC–Fujitsu Physical AI 협력 개시
---

# 생산기술 신규기술 브리핑 - 2026년 7월 4주차

> 2026-07-16 – 2026-07-22 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

이번 주 대형 사출기 메이커(ENGEL, ARBURG, KraussMaffei, Sumitomo Demag)의 공식 신규 발표는 확인되지 않았고, 자동화 셀·시뮬레이션 SW·소재 축에서 변화가 확인됐다.

1. WITTMANN FlexCell plus — 취출로봇이 성형품을 크레이트·KLT·박스에 직접 포장하는 박스 이송 시스템을 자동화 셀에 통합. 사출셀 무인화 범위가 취출·컨베이어에서 포장 완결형으로 확장(Fakuma 2026 출품 예고, 전시 데모 단계).
2. Sigma Engineering Sigmasoft Virtual Molding 6.2 — 3차원 점탄성 재료모델 도입으로 박육·고속 충전 조건의 제팅·압력 예측 정확도 개선. 해석 리포트 자동 생성 기능 추가.
3. SABIC LNP Thermocomp OFM76 시리즈 — 800V급 전력모듈 절연 부품용 PPS 컴파운드 신규 출시. 벽두께 0.4mm에서 UL94 V0, CTI PLC 0.

### 로봇제조기술

1. KUKA AMP — AI 오케스트레이션 플랫폼 알파 버전이 북미 차체 양산공장 KTPO(Jeep Wrangler·Gladiator 차체, 로봇 285대)에서 실가동 개시. 초기 대상은 AMR 오케스트레이션. 브라운필드 설비에 AI 계층을 얹는 고도화 경로의 자사 공장 실증.
2. 현대차그룹·Boston Dynamics — Atlas를 미국 조지아 HMGMA에 2028년 부품 서열(sequencing) 공정 투입, 2030년 조립 공정 확대하는 로드맵을 공식 문서로 확정.
3. FANUC–Fujitsu — Physical AI 사업협력 논의 개시 합의. 로봇 제어(OT)와 공장 데이터 AI 인프라(IT)를 결합해 생산계획–제조–품질–보전 자율화를 겨냥.

## 사출성형기술 상세

#### [WITTMANN] FlexCell plus 자동화 셀 — 박스 이송 통합형 신규 버전 공개, Fakuma 2026 출품 예고

- 확인 내용: 2026년 7월자 보도자료에서 Fakuma 2026(10월 12–16, 프리드리히스하펜) 출품 구성 공개. FlexCell의 plus 버전은 취출로봇이 금형에서 꺼낸 부품을 크레이트·KLT·골판지 박스에 직접 포장하는 완전 자동 박스 이송 시스템을 셀에 통합. 무작위 적재·지정 적층 패턴을 모두 지원하고 수 시간 무인 자율 생산을 목표로 한다. 박스 이송 시스템과 보호 하우징을 하나의 유닛으로 결합해 옆으로 밀면 금형 공간 접근성이 확보되는 구조. 타사 브랜드 사출기 호환·기존 라인 레트로핏 가능. 전시 데모는 전동 EcoPrimus(형체력 1,000kN, 사출속도 최대 200mm/s)와 HiQ Packing 자율 공정최적화 SW를 결합해 인슐린펜 보호캡(8캐비티)을 생산.
- 관련 근거: [WITTMANN 공식 보도자료 PDF, 2026-07 (확인일 2026-07-22)](https://www.wittmann-group.com/sites/default/files/2026-07/wittmann-presse-07-26-fakuma-2026-all-electric-precision-en_0.pdf), [Fakuma 2026 프리뷰 페이지](https://www.wittmann-group.com/en/article-fakuma-2026) [공식 발표]
- 기존 대비 변화: 기존 FlexCell은 로봇+컨베이어 중심 구성. plus 버전은 후공정인 박스 포장·이송까지 셀 내부로 통합해 취출–적재–포장을 단일 보호영역에서 처리. 적용 수준은 전시 데모 예고 단계.
- 생산기술 시사점: 다캐비티·대량 생산 품목에서 야간 무인 운전 시간을 늘리는 방향. 기계 브랜드 비종속·레트로핏 가능 구조는 기존 설비가 혼재된 공장의 셀 표준화에 유리하다.
- 확인 필요: 보도자료의 일 단위 발행일, 박스 매거진 용량·무인 운전 지속시간 정량치, 판매 개시 시점.

#### [Sigma Engineering] Sigmasoft Virtual Molding 6.2 — 3차원 점탄성 재료모델·자동 리포트 기능 추가

- 확인 내용: 2026-07-16 신버전 6.2 출시 공표. 3차원 점탄성 재료모델 도입으로 충전 해석 시 유동 거동·압력 형성·제팅 예측 정확도 개선. 해석 설정·결과를 PowerPoint로 자동 생성하는 Smartreport, 수지 물성 데이터 완결성을 시각화하는 Fingerprint, 게이트부를 등가 대체모델로 처리해 메시 품질 개선·계산시간을 단축하는 Surrogate 모델, 재료 DB 확충 포함. 즉시 사용 가능.
- 관련 근거: [plasticker, 2026-07-16](https://plasticker.de/Kunststoff_News_48860_Sigma_Engineering_Neue_Version_der_Spritzguss_Simulationssoftware_Sigmasoft_Virtual_Molding?seite=2) [업계 분석]
- 기존 대비 변화: 재료모델이 점탄성 3D 모델로 확장, 리포트 작성이 수작업에서 자동 생성으로 전환. 기존기술 고도화(소프트웨어).
- 생산기술 시사점: 박육·고속 충전 조건에서 제팅·압력 예측 정확도가 오르면 외관·광학 부품의 게이트·성형조건 설계 시행착오를 줄일 수 있다. 게이트 Surrogate 모델은 다캐비티·핫러너 해석의 계산 부하 절감에 직접적이다.
- 확인 필요: 정확도 개선 정량치, 라이선스·가격 정책, Sigma 공식 보도자료 원문.

#### [SABIC] LNP Thermocomp OFM76XXP·OFM76EXP — 800V급 전력모듈용 PPS 컴파운드 신규 출시

- 확인 내용: 2026-07-16 공개. 고전압 전력모듈 절연 부품용 PPS 컴파운드. CTI 최고 등급 PLC 0, 벽두께 0.4mm에서 UL94 V0, 200°C에서 1,000시간 열노화 후 기계 강도·절연 성능 약 90% 유지. OFM76EXP는 레이저 마킹성·실리콘 실런트 접착·내크랙성 강화. 백색·밝은 색상 제공. 전 세계 판매 개시.
- 관련 근거: [plasticker, 2026-07-16](https://plasticker.de/Kunststoff_News_48837_Sabic_Neue_PPS_Compounds_fr_Hochvolt_Leistungsmodule?seite=2) [업계 분석]
- 기존 대비 변화: 기존 LNP 포트폴리오에 800V 이상 고전압 대응 PPS 그레이드 신설. 신제품(소재).
- 생산기술 시사점: 전동화 차량 인버터·급속충전 부품에서 0.4mm 박육 V0 달성은 절연 구조물의 소형·박육 사출 설계 여지를 넓힌다. PPS 특성상 고금형온(140°C 내외) 성형과 금형온도 제어가 품질 변수다.
- 확인 필요: 유리섬유 함량·유동성 등 성형 물성치, 양산 적용 사례, SABIC 공식 자료 원문.

#### [Trelleborg·Arlanxeo] 저탄소 EPDM 컴파운드 E7T11·E8T12 — 성형품 기준 PCF 최대 55% 저감 씰링 소재

- 확인 내용: 2026-07-21 공개. 70·80 Shore A 2종. 바이오매스 기반 EPDM 원료(Arlanxeo Keltan Eco-BC, ISCC Plus 매스밸런스 인증)와 폐타이어 재생 카본블랙 사용. 성형품 기준 CO2 저감 최대 33%·55%. 기계 물성은 기존 EPDM 동등을 주장. O-링·개스킷·커스텀 성형품 대상, 자동차 포함. Dekra 검증 진행 중.
- 관련 근거: [plasticker, 2026-07-21](https://plasticker.de/Kunststoff_News_48870_Trelleborg_EPDM_Compounds_mit_reduziertem_CO+8322_Fuabdruck_fr_industrielle_Dichtungsanwendungen) [업계 분석]
- 기존 대비 변화: 기존 화석계 EPDM 씰링 컴파운드의 지속가능 대체 그레이드 신설. 신제품(소재).
- 생산기술 시사점: 전장 하우징 방수 씰 등 EPDM 성형부품에서 물성 동등을 전제로 한 탄소저감 소재 선택지가 생겼다. 매스밸런스 방식이라 기존 배합·가황 공정 변경 부담이 작다.
- 확인 필요: 압축영구줄음률 등 상세 물성, 가격 프리미엄, Dekra 검증 완료 시점.

#### [Gapi] PAI 컴파운드 GLon XA55 — 독일 프리미엄 OEM 전기 액슬에서 금속 스러스트 와셔 대체 적용

- 확인 내용: 2026-07-20 공개. 전기 액슬(e-axle) 유성기어 세트의 금속 스러스트 와셔에서 양산 직전 마모·소음·효율 저하 문제가 발생, 트라이볼로지 최적화 PAI(폴리아미드이미드) 소재로 대체. 벤치·내구 시험에서 금속 대비 마모·마찰·NVH 개선을 확인했다고 발표. 적용 수준은 양산(업체 주장).
- 관련 근거: [plasticker, 2026-07-20](https://plasticker.de/Kunststoff_News_48816_Gapi_Hochleistungskunststoff_ersetzt_Metall_im_elektrischen_Achsantrieb) [업계 분석]
- 기존 대비 변화: 금속 부품의 고성능 플라스틱 대체 신규 양산 적용사례.
- 생산기술 시사점: 고면압·윤활 부족 조건의 구동계 습동 부품까지 수지 대체가 진입한 사례. PAI는 후경화가 필요한 고난도 소재로 정밀 치수관리가 관건이다.
- 확인 필요: OEM명·차종, 성형공법(사출/기계가공 여부), 정량 마모·효율 데이터.

#### [WITTMANN] MicroPower 마이크로 성형셀 — 취출로봇 그리퍼 통합 인캐비티 음향·레이저 검사 적용사례 공개

- 확인 내용: 2026년 7월자 고객 적용사례 리포트로 실리콘 가공업체 starlim(오스트리아)의 마이크로 사출 운영을 공개. 보청기 부품(6×5×1mm, LSR+PBT 2컴포넌트, 공차 ±2µm)을 MicroPower 셀에서 양산하며, 멤브레인 진동 특성을 성형 직후 캐비티 안에서 인라인 검사하는 구성(음향 이미터+레이저 측정을 취출로봇 그리퍼에 통합)을 계획.
- 관련 근거: [WITTMANN 공식 리포트, 2026-07 (확인일 2026-07-22)](https://www.wittmann-group.com/en/report-starlim) [공식 발표]
- 기존 대비 변화: MicroPower 셀 자체는 기존 제품. 취출로봇 EOAT에 검사 계측을 통합해 재정렬 공정 없는 인라인 전수검사를 구현하는 구성이 새로 공개됨. 적용사례(양산 적용 계획 단계).
- 생산기술 시사점: 취출로봇 그리퍼가 파지 기구를 넘어 검사 스테이션 역할을 겸하는 방향. 전장·센서류 미세 부품의 전수검사·품질 추적성 확보 시 사이클 손실 없는 대안이 될 수 있다.
- 확인 필요: 인캐비티 검사의 양산 적용 시점·검사 택트, MES 연계 여부.

#### [Shibaura Machine] 유럽 법인 LWB — 프랑스·북아프리카 판매 파트너 선임

- 확인 내용: 2026-07-16 공개. Shibaura Machine Europe LWB가 프랑스·북아프리카 신규 판매 파트너로 Azhar를 선임, EMEA 판매·고객 접점 확대.
- 관련 근거: [plasticker, 2026-07-16](https://plasticker.de/news/?kat=&seite=2) [업계 분석]
- 기존 대비 변화: 사출기 메이커의 해외 판매·서비스망 변화.
- 생산기술 시사점: 유럽·북아프리카 생산거점에서 Shibaura 사출기 도입·보수 접근성 개선. 설비 다변화 검토 시 현지 지원망 평가 요소.
- 확인 필요: A/S 범위 포함 여부, 공식 발표 원문.

## 로봇제조기술 상세

#### [KUKA] KUKA AMP — 북미 자동차 양산공장(KTPO)에서 첫 실가동 개시

- 확인 내용: 2026-07-20 발표. AI 오케스트레이션 플랫폼 KUKA AMP(Automation Management Platform) 알파 버전을 미국 오하이오 KTPO에 배치, 실제 생산 운영을 지원하는 가동 상태 진입. 초기 적용 대상은 AMR 오케스트레이션. KTPO는 Jeep Wrangler·Gladiator 차체를 일 300대 이상 생산하며 로봇 285대, 연결 디바이스 6만 개 이상을 운용하는 KUKA 자체 차체공장.
- 관련 근거: [KUKA SE 보도자료(PresseBox), 2026-07-20](https://www.pressebox.com/pressrelease/kuka-aktiengesellschaft-augsburg/KUKA-AMP-Goes-Live-in-North-American-Automotive-Production/boxid/1305786) [공식 발표]
- 기존 대비 변화: 3월 NVIDIA GTC에서 발표된 KUKA AMP가 4개월 만에 자사 양산공장 알파 테스트로 진입. 고객사 AI 모델을 플랫폼에 통합하는 공유 컨텍스트 레이어 구조가 기존 폐쇄형 로봇 컨트롤러 SW와 다르다. 적용 수준: 자사 공장 파일럿(양산 라인 내 가동).
- 생산기술 시사점: 기존 대규모 자동화 설비를 교체하지 않고 AI 계층을 얹어 데이터 활용·유연성을 높이는 브라운필드 고도화 경로를 로봇 제조사가 직접 실증. 부품 공장의 기존 로봇·AGV 자산에 대한 SW 고도화 모델로 참고 가치가 있다.
- 확인 필요: 정량 효과(가동률 등) 미공개, 일반 고객 대상 상용 출시 시점.

#### [현대차그룹·Boston Dynamics] Atlas 공장 투입 로드맵 공식화 — HMGMA 2028년 부품 서열 투입, 2030년 조립 확대

- 확인 내용: 2026-07-16 현대차그룹 공식 성명에서 Atlas를 미국 조지아 HMGMA에 2028년부터 부품 서열(sequencing) 작업에 투입하고, 기술 검증을 전제로 2030년까지 부품 조립 공정으로 확대한다고 명시. 23kg 중량물 리프팅·운반 시연을 산업 적용 검증 근거로 제시. 2026년 Atlas 생산분은 그룹 Robotics Metaplant Application Center와 Google DeepMind 물량으로 전량 배정.
- 관련 근거: [Hyundai Motor Group 뉴스룸, 2026-07-16](https://www.hyundai.com/worldwide/en/newsroom/detail/0000001225) [공식 발표]
- 기존 대비 변화: 기존 "투입 검토" 수준에서 공정(부품 서열, 조립)·연도(2028, 2030)를 특정한 단계별 로드맵으로 확정. 중량물(23kg급) 취급을 검증 지표로 명시한 점도 새롭다.
- 생산기술 시사점: 완성차 공장에서 휴머노이드의 1차 진입 공정이 부품 서열·라인사이드 물류로 수렴함을 재확인(Figure–BMW 서열 작업과 동일 패턴). 조립 공정 투입은 2030년 시계로 설정돼, 향후 수년간은 물류·서열이 실질 적용 영역이라는 기준선을 제공한다.
- 확인 필요: HMGMA 투입 대수·구체 공정 범위. 상용 판가(약 32만 달러설)는 [2차 인용] 수준.

#### [FANUC] Fujitsu와 Physical AI 사업협력 논의 개시 — 로봇 제어와 공장 데이터 AI 인프라의 결합 추진

- 확인 내용: 2026-07-16 FANUC이 Fujitsu와 Physical AI 분야 사업협력 논의 개시에 합의했다고 공식 발표. 양사 공동 파트너인 NVIDIA 기술을 함께 활용. FANUC은 2025년 12월 iREX에서 오픈 플랫폼 기반 Physical AI 시스템 공개 이후 음성 지시 로봇 조작, AI 에이전트 기반 부품 키팅 자율 수행 등 실장 사례가 늘고 있다고 밝혔고, Fujitsu의 현장 데이터 기반 AI 인프라를 결합해 생산계획–제조–품질–보전 전 라이프사이클 자율화를 겨냥.
- 관련 근거: [FANUC 공식 보도자료, 2026-07-16](https://www.fanuc.co.jp/en/profile/pr/newsrelease/2026/notice20260716.html) [공식 발표]
- 기존 대비 변화: 5월 Google·NVIDIA 협업 발표에 이어 IT·데이터 인프라 기업과의 결합으로 Physical AI 파트너십 확장. 개별 로봇 지능화에서 공장 시스템 연계(MES·품질·보전)로 적용 범위를 넓히는 단계.
- 생산기술 시사점: 로봇 셀 단위 AI가 아니라 MES·품질 데이터와 연동되는 공장 단위 Physical AI 아키텍처 경쟁이 시작됐다. 로봇 도입 시 컨트롤러의 오픈 플랫폼 대응 여부가 향후 AI 기능 확장성을 좌우할 수 있다.
- 확인 필요: 구체 협력 범위·상용 서비스 시점(논의 개시 단계), 적용 공정·정량 목표.

#### [Agility Robotics] Fremont Physical AI 개발 거점 개소 — Digit v5 수주 잔고 3억 달러 공개

- 확인 내용: 2026-07-16 캘리포니아 Fremont에 약 5,600m2(60,000sq ft) 규모 Physical AI 개발 시설 개소. 오리건 RoboFab 생산기지와 별도로 Digit의 AI 학습·테스트·신규 스킬 개발을 전담. AI/ML·필드 운영 인력 약 200명 채용 계획. Digit v5 다년 수주 3억 달러 이상(마일스톤 조건부)·고객 파이프라인 30개사 이상, Schaeffler·GXO·Toyota Motor Manufacturing Canada 등 상시 가동 배치를 공식 명시.
- 관련 근거: [Agility Robotics 보도자료, 2026-07-16](https://www.agilityrobotics.com/content/agility-opens-new-fremont-facility-to-accelerate-physical-ai-development) [공식 발표]
- 기존 대비 변화: 하드웨어 양산(RoboFab)과 소프트웨어 고도화(Fremont)의 조직적 분업이 명확해졌다. 수주 규모·고객 수의 공식 수치 공개는 처음.
- 생산기술 시사점: 휴머노이드 공급사의 경쟁축이 기체 양산능력에서 "배치 후 신규 공정 스킬을 얼마나 빨리 추가 학습시키는가"로 이동 중. 라인사이드 물류 적용 검토 시 벤더의 AI 운영 인프라가 선정 기준이 된다는 신호.
- 확인 필요: Digit v5 사양·양산 시점, 수주의 고객별 구성.

#### [AgiBot(智元)] WAIC 2026 신제품 공개 — 산업용 임무 로봇 G2 Max·직구동 핸드 OmniHand 3 Ultra-M, 양산라인 적용 실적 공식화

- 확인 내용: 2026-07-18 상하이 WAIC 2026에서 첫 힘제어 산업용 임무 로봇 G2 Max(힘제어 양팔, 전방향 휠 구동, 배터리 교환·자율 충전, 자재 이송·팔레타이징용)와 직구동 덱스터러스 핸드 OmniHand 3 Ultra-M(20 능동 자유도, 630g, 파지 하중 5kg, 개폐 0.3초, 반복정밀도 ±0.2mm, 촉각 센서 통합) 등 4종 공개. 아울러 Longcheer Technology 난창공장 태블릿 품질검사 라인에 기존 G2를 투입해 라인 통합 36시간, 교대당 약 3,000대 처리, 누적 64시간 이상 연속 가동, 다운타임 손실 4% 미만의 실적을 공개.
- 관련 근거: [AgiBot 공식 보도자료, 2026-07-18](https://www.agibot.com/article/231/detail/85.html) [공식 발표], [Robotics & Automation News, 2026-07-20](https://roboticsandautomationnews.com/2026/07/20/agibot-unveils-four-new-robots-at-waic-2026-as-it-expands-industrial-embodied-ai-portfolio/103505/) [업계 분석]
- 기존 대비 변화: 범용 임바디드 플랫폼(G2)에서 중량 반복작업 특화 파생 기종(G2 Max)으로 라인업 확장. 1회성 데모가 아닌 라인 통합 소요시간·처리량·다운타임 등 양산라인 KPI를 제시한 점이 진전. 적용 수준: G2 Max는 전시 공개, G2 검사라인은 양산 적용(공급사 발표 기준, 제3자 검증 필요).
- 생산기술 시사점: 중국 임바디드 AI 로봇이 검사 로딩/언로딩·이송 공정에서 기존 라인 재구축 없이 편입되는 단계에 도달. 전용기 투자 대비 유연성이 요구되는 다품종 공정에서 이동형 힘제어 로봇이 대안으로 검토될 수 있다.
- 확인 필요: G2 Max 가반하중·판가·출하 시점, Longcheer 라인 투입 대수·지속 운영 여부.

#### [mimic Robotics] 텐던 구동 로봇 핸드 M1·데이터 수집 플랫폼 발표 — EOAT의 AI 학습 일체형 접근

- 확인 내용: 2026-07-18 보도 기준, 스위스 mimic Robotics(ETH 스핀오프)가 M1 핸드(21관절·15 능동 자유도, 텐던 구동, 원통 파워 그립 25kg 이상, 지문부 촉각 센서), 인간 시연 데이터 수집용 외골격 U1, 자체 미들웨어를 묶은 수직 통합 플랫폼 발표.
- 관련 근거: [Robotics & Automation News, 2026-07-18](https://roboticsandautomationnews.com/2026/07/18/mimic-robotics-unveils-full-stack-platform-for-dexterous-robot-manipulation/103473/) [업계 분석]
- 기존 대비 변화: 핸드 하드웨어 단품에서 시연 데이터 수집 장비·통신 계층까지 묶은 제품화. EOAT가 그리퍼에서 "AI 학습 데이터 생성 장치"로 재정의되는 흐름의 최신 사례. 적용 수준: 제품 발표(기술자료) 단계.
- 생산기술 시사점: 커넥터·하니스·소형 조립 등 비정형 부품 핸들링에서 전용 지그·그리퍼 교체 대신 범용 핸드+학습 기반 접근의 상용 옵션이 늘고 있다. 산업 현장 내구성·사이클 검증은 미공개.
- 확인 필요: 판가·출하 시점, 산업 고객 파일럿 여부, 내구 수명 데이터.

#### [Unitree] H1 Pro 휴머노이드 유럽 상용 출시 — 3주 내 유럽·아시아·북미 순차 투입 보도

- 확인 내용: 업계 보도 기준, 2026-07-22 H1 Pro의 유럽 상용 출시를 시작으로 8월 아시아·북미 순차 출시 계획. 용도는 검사·물류 모니터링·경량 매니퓰레이션(가반 3–5kg급)으로 보도됨. RaaS(구독) 모델 병행.
- 관련 근거: [Tech Times, 2026-07-20](https://www.techtimes.com/articles/321011/20260720/unitree-humanoid-robot-enters-europe-days-after-pentagon-flags-it-chinese-military-tech.htm) [2차 인용 — 재확인 필요]
- 기존 대비 변화: 기존 서구권 판매는 연구·교육용 중심이었으나 상용 배치로 전환. 단, H1 Pro의 제품 계보상 위치는 공식 미확인.
- 생산기술 시사점: 저가 휴머노이드의 공장 투입은 당분간 검사·모니터링·경량 이송에 한정. 도입 검토 시 EU AI Act 고위험 적합성 평가, 데이터 국외 전송·보안 취약점 실사가 가격 이점과 별도의 비용 항목으로 정착 중.
- 확인 필요: Unitree 공식 출시 발표문, H1 Pro 사양·판가, 유럽 첫 고객·적용 현장.

#### [참고·경계일] Yaskawa MOTOMAN NEXT — Gemini Robotics ER 1.6 결합 Agentic Robot System 개발 발표(2026-07-15)

- 확인 내용: 조사 윈도우 직전일(07-15) 발표로 참고 수록. MOTOMAN NEXT에 Google DeepMind의 Gemini Robotics ER 1.6을 통합한 Agentic Robot System 개발을 발표. "부품을 분류하라" 수준의 지시만으로 생성형 AI가 작업 절차를 구성하고, 표준 탑재 서비스(머신비전·경로계획·힘감지)가 실행을 담당. 사전 티칭 불요, 작업 중 오류 자율 복구, 생산관리 시스템 연동을 특징으로 제시.
- 관련 근거: [Yaskawa 공식 보도자료, 2026-07-15](https://www.yaskawa-global.com/newsrelease/news/179679) [공식 발표]
- 기존 대비 변화: 직전 주 보고된 Yaskawa–SoftBank VLA 실증과 별건. 산업용 로봇 대기업이 범용 추론 모델을 상용 로봇 시스템에 직접 통합하는 사례. 적용 수준: 기술 개발 발표(제공 시점 미정).
- 생산기술 시사점: 티칭 없는 작업 지시형 로봇 운용이 협동로봇을 넘어 산업용 6축급으로 확장되는 신호.
- 확인 필요: 적용 분야·제공 시점.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 자동화 셀의 포장 통합(WITTMANN), 시뮬레이션 점탄성 모델 확장(Sigmasoft 6.2), 로봇 SW의 공장 단위 AI 오케스트레이션(KUKA AMP) | 셀 무인화 범위 확장과 브라운필드 SW 고도화가 동시 진행 |
| 업체 변화 | FANUC–Fujitsu 등 로봇(OT)–IT 인프라 기업 간 Physical AI 제휴 확산, Agility의 AI 학습 전담 거점 분리 | 로봇 경쟁력이 기체에서 AI 운영 인프라·데이터 계층으로 이동 |
| 적용사례 변화 | KUKA AMP 자사 차체공장 실가동(파일럿), AgiBot G2 태블릿 검사라인 양산 적용(공급사 발표), Atlas 공장 투입 로드맵 확정(2028/2030) | 휴머노이드·임바디드 로봇의 1차 진입 공정은 서열·검사·이송으로 수렴 |
| 확인 필요 | WITTMANN 2건의 일 단위 게시일, Unitree H1 Pro 공식 발표문, AgiBot 실적의 제3자 검증, Gapi 적용 OEM | 다음 주 공식 소스 재확인 대상 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Tesla Optimus V3 Fremont 양산 개시 공식 발표(7월 말 예고) | 휴머노이드 | 양산 개시 여부·초기 용도 확인 |
| 2 | Unitree H1 Pro 공식 출시 발표·사양 | 휴머노이드 | 2차 인용 보도의 공식 확인 |
| 3 | Universal Robots 7월 28일 온라인 이벤트 | 협동로봇 | 신제품·SW 발표 가능성 |
| 4 | LS엠트론 Molding 365 서비스 앱 후속(7월 초 발표) | 사출기 | 국내 사출기 서비스 디지털화 진전 확인 |
| 5 | Oerlikon HRSflow 기술행사 Flow Beyond 2026(9월) 사전 공개 내용 | 핫러너 | 신기술 공개 여부 추적 |
| 6 | FANUC ROBOSHOT AI 자동보정 기능(12월 탑재 예정) 공식 발표 | 사출기 | 5월 언론 보도의 공식 확인 |

## 출처

### 사출성형기술
- [WITTMANN, Fakuma 2026 보도자료 PDF, 2026-07 확인 2026-07-22](https://www.wittmann-group.com/sites/default/files/2026-07/wittmann-presse-07-26-fakuma-2026-all-electric-precision-en_0.pdf)
- [WITTMANN, Fakuma 2026 프리뷰, 확인 2026-07-22](https://www.wittmann-group.com/en/article-fakuma-2026)
- [WITTMANN, starlim 적용사례 리포트, 확인 2026-07-22](https://www.wittmann-group.com/en/report-starlim)
- [plasticker, Sigma Engineering Sigmasoft 6.2, 2026-07-16](https://plasticker.de/Kunststoff_News_48860_Sigma_Engineering_Neue_Version_der_Spritzguss_Simulationssoftware_Sigmasoft_Virtual_Molding?seite=2) (독일어)
- [plasticker, SABIC PPS 컴파운드, 2026-07-16](https://plasticker.de/Kunststoff_News_48837_Sabic_Neue_PPS_Compounds_fr_Hochvolt_Leistungsmodule?seite=2) (독일어)
- [plasticker, Trelleborg 저탄소 EPDM, 2026-07-21](https://plasticker.de/Kunststoff_News_48870_Trelleborg_EPDM_Compounds_mit_reduziertem_CO+8322_Fuabdruck_fr_industrielle_Dichtungsanwendungen) (독일어)
- [plasticker, Gapi PAI 금속대체, 2026-07-20](https://plasticker.de/Kunststoff_News_48816_Gapi_Hochleistungskunststoff_ersetzt_Metall_im_elektrischen_Achsantrieb) (독일어)
- [plasticker, 뉴스 목록(Shibaura LWB), 2026-07-16](https://plasticker.de/news/?kat=&seite=2) (독일어)

### 로봇제조기술
- [KUKA SE 보도자료(PresseBox), KUKA AMP Goes Live, 2026-07-20](https://www.pressebox.com/pressrelease/kuka-aktiengesellschaft-augsburg/KUKA-AMP-Goes-Live-in-North-American-Automotive-Production/boxid/1305786)
- [Hyundai Motor Group 뉴스룸, Atlas 로드맵, 2026-07-16](https://www.hyundai.com/worldwide/en/newsroom/detail/0000001225)
- [FANUC 보도자료, Fujitsu 협력, 2026-07-16](https://www.fanuc.co.jp/en/profile/pr/newsrelease/2026/notice20260716.html)
- [Agility Robotics 보도자료, Fremont 거점, 2026-07-16](https://www.agilityrobotics.com/content/agility-opens-new-fremont-facility-to-accelerate-physical-ai-development)
- [AgiBot 보도자료, WAIC 2026, 2026-07-18](https://www.agibot.com/article/231/detail/85.html)
- [Yaskawa 보도자료, Agentic Robot System, 2026-07-15](https://www.yaskawa-global.com/newsrelease/news/179679)
- [Robotics & Automation News, AgiBot WAIC 2026, 2026-07-20](https://roboticsandautomationnews.com/2026/07/20/agibot-unveils-four-new-robots-at-waic-2026-as-it-expands-industrial-embodied-ai-portfolio/103505/)
- [Robotics & Automation News, mimic Robotics, 2026-07-18](https://roboticsandautomationnews.com/2026/07/18/mimic-robotics-unveils-full-stack-platform-for-dexterous-robot-manipulation/103473/)
- [Tech Times, Unitree 유럽 출시, 2026-07-20](https://www.techtimes.com/articles/321011/20260720/unitree-humanoid-robot-enters-europe-days-after-pentagon-flags-it-chinese-military-tech.htm)
