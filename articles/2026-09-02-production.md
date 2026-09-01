---
title: 생산기술 신규기술 브리핑 - 2026년 9월 1주차
date: 2026-09-02
type: production
period: 2026년 9월 1주차
tags: [KraussMaffei, LRXplus Twin, HASCO, FCS, Yaskawa HC12, Feedmax Clean, Locus Array, 하이젠알앤엠]
summary: 사출은 취출로봇이 단일 기구학에서 24축 통합제어 다중 기구학으로 확장되고, 금형 냉각회로 오염·유량을 제어 대상으로 끌어올린 구성이 사출기·표준부품 양쪽에서 제시. 로봇은 Yaskawa가 협동로봇 후속기에서 가반 확대 대신 설치 풋프린트 38% 축소를 택했고, EOAT 축은 흡착 단독에서 흡착·핀치 병용과 접촉 센싱 요건 정의로 이동
---

# 생산기술 신규기술 브리핑 - 2026년 9월 1주차

> 2026-08-27 – 2026-09-02 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

**KraussMaffei LRXplus Twin — 취출로봇을 단일 기구학에서 24축 통합제어 다중 기구학으로 확장**

- 확인 내용: LRXplus 계열에 Twin X·Twin Z 2개 변형 추가. 가반하중 35–100 kg. 축을 기계적으로 결합해 병렬 동작과 이송 중 파지 전환(flying handover)을 구현. 신규 smartControl MC7이 6축 로봇 최대 4대, 총 24축을 단일 좌표계에서 중앙 프로그래밍·제어. 알루미늄·강 혼합 축 구조로 최고속 변형을 억제하고, 충돌 시 손상을 표면 수준으로 한정하는 설계. 제어반을 바닥 배치로 옮겨 정비 접근성과 고주위온도 연속운전 대응을 개선. 자사 신·구 제어세대 및 타사 사출기에 통합형·독립형 양쪽 적용.
- 관련 근거: [KraussMaffei 보도자료, 2026-08-27](https://press.kraussmaffei.com/en/news/lrxplus-twin-from-kraussmaffei-new-multiple-kinematic-system-for-maximum-efficiency-in-injection-molding-automation) [공식 발표], [Plastech, 2026-08-27](https://www.plastech.pl/en/news/kraussmaffei-expands-lrxplus-automation-range-22656) [2차 인용]
- 기존 대비 변화: 2024년 LRXplus는 단일 기구학 리니어로봇이었다. 축 결합형 복수 기구학과 로봇 4대·24축의 단일 좌표계 통합이 새로 얹힌 상위 라인이다.
- 생산기술 시사점: 취출 후 게이트 컷팅·검사·적재를 별도 반송으로 넘기던 구성을 하나의 로봇 시스템 내부 수수(受渡)로 묶을 여지가 생긴다. 다품종 인서트 사출·2K 셀에서 로봇 대수를 늘리지 않고 공정을 통합할 때 검토 대상이며, 타사 사출기 대응 명시는 혼재 설비 라인의 자동화 표준화 후보가 된다는 의미다.
- 확인 필요: 사이클타임 단축 정량치, Twin X·Twin Z의 구조적 차이, 반복정밀도, EUROMAP 67·OPC 40079 대응 여부, 국내 공급 일정.

**FCS SA-160 / CT-120 — 금형온도를 온조기 토출이 아닌 냉각회로 유량 폐루프로 잡는 구성, 단계별 에너지 계측 병행**

- 확인 내용: TaipeiPlas 2026(9/15–19) 출품 예정. SA-160에 두 기능 신규 탑재. 첫째, AI 가상계측 기반 품질 자가감시를 제어함 내장 방식(Zero-Retrofit)으로 구현해 형개 전 실시간으로 제품 중량·치수를 예측. 둘째, "온도 제어에 앞선 유량 제어" 원칙으로 내장 조절밸브가 공장 수압 변동을 보상해 금형온도 ±2°C 유지, 비침습 막힘 감지와 원키 자동 퍼징으로 금형 교체당 10–15분 다운타임 절감을 제시. CT-120 전동기는 CYCU와 공동 개발한 다단계 실시간 에너지 계측으로 형개폐·가소화·사출·보압 단계별 소비를 분리 측정, EU PCF·DPP 및 EUROMAP 60.1 에너지 등급 대응과 PCR 소재 가공 안정성 모니터링에 활용. 대형기 SA-1000(1,000톤)은 기존 750톤급 설치면적에 배치, 동급 대비 전장 최대 17% 단축.
- 관련 근거: [Plastech, 2026-08-31](https://www.plastech.pl/en/news/fcs-to-show-smart-injection-molding-at-taipeiplas-2026-22670) [업계 분석]
- 기존 대비 변화: 기존 iMF 4.0은 설비 모니터링 계층이었다. 이번에는 형개 전 품질예측과 냉각회로 유량 폐루프 제어를 사출기 제어함 내부로 끌어들였다.
- 생산기술 시사점: 다회로 대형 금형에서 회로별 유량 편차가 누적되어 금형온도 편차로 나타나는 문제에 온조기 성능이 아닌 회로 측 보상으로 대응하는 접근이다. 단계별 에너지 계측은 부품 단위 탄소 데이터 요구에 대한 설비 측 대응 방향을 보여준다. 현 단계는 전시 데모이며 양산 적용은 확인되지 않았다.
- 확인 필요: ±2°C의 측정 위치(공급·회수·금형 표면), AI 예측 정확도 지표, EUROMAP 60.1 등급 실측 결과, 양산 적용 여부.

### 로봇제조기술

**Yaskawa MOTOMAN-HC12 — 협동로봇 후속기에서 가반 확대가 아닌 설치 풋프린트 38% 축소를 택함**

- 확인 내용: 2026-08-31 판매 개시. 가반질량 12 kg, 최대 리치 1,410 mm. 기존 MOTOMAN-HC10DTP의 후속기다. 신개발 토크센서로 충돌 시 반응속도를 높여, 인접 작업 시에도 작업속도를 유지하면서 충돌 영향을 억제. 핸드가이드 조작성 개선. 설치 풋프린트는 φ170 mm로 HC10DTP의 φ275 mm 대비 축소. Cat6A 이더넷 포함 애플리케이션 케이블을 손목부까지 표준 내장. 용도로 핸들링·나사체결·아크용접·검사를 명시.
- 관련 근거: [安川電機 뉴스릴리스(일본어), 2026-08-31](https://www.yaskawa.co.jp/newsrelease/product/1681577) [공식 발표]
- 기존 대비 변화: 동일 클래스에서 가반 10 kg → 12 kg, 베이스 직경 275 mm → 170 mm. 협동로봇 성능 개선의 축이 가반·리치 확대에서 안전 응답속도와 설치 밀도로 이동했다.
- 생산기술 시사점: 협동로봇 도입의 실제 제약은 안전속도 저하에 따른 택타임 손실과 펜스 대체 시 필요 면적이다. 토크센서 응답 개선은 안전 성능을 유지하면서 감속 구간을 줄일 여지를 주고, φ170 mm 베이스는 기존 수작업 스테이션을 유지한 채 로봇을 삽입하는 개조형 자동화에 유리하다. 나사체결·검사를 표준 용도로 명시한 점은 부품 조립 공정 직접 적용을 상정한 것이다.
- 확인 필요: 반응속도 향상폭 정량값, ISO/TS 15066 기준 접촉력 실측치, 본체 질량, 반복정밀도, 국내 출시 시점.

## 사출성형기술 상세

**HASCO Fakuma 2026 표준부품 — 냉각회로·핫러너 오염을 표준부품 계층에서 관리 대상으로 편입**

- 확인 내용: 신규 항목은 리니어 볼부시 방식 금형판 센터링 유닛, 온조 회로용 Z9911 필터(오염물 포집으로 유량·금형온도·부품 품질 일정 유지), 고성능 그리스 Z2601(이젝터·가이드필러·밸브·게이트, 식품 분야 사용 가능), H1210 배선 테스터용 커넥터 확대, Fakuma 이후 Cadenas 3Dfindit 플랫폼 CAD 데이터 배포다. 핫러너 H5055 필터(전단 저감으로 물성 보존, 열분해로 없이 조대 오염물 세정)는 2025년 양산 검증 후 라인업 확대, Single Shot H63.. Ø25 모노 노즐은 2026-06 발표분의 전시 확장이다.
- 관련 근거: [ETMM(Vogel), 2026-08-29](https://www.etmm-online.com/hasco-fakuma-2026-mould-base-hot-runner-cad-tools-a-6b063505fcf098037eca6ef62732fc8c/) [업계 분석]
- 기존 대비 변화: 신규는 센터링 유닛·Z9911 필터·Z2601 그리스·3Dfindit 배포다. 나머지는 기존기술 고도화 또는 전시 확장으로 분류된다.
- 생산기술 시사점: 냉각회로 오염은 금형온도 편차와 치수 산포의 상시 원인이나, 통상 온조기 성능 문제로 오인된다. 회로 측 필터를 표준부품으로 편입하면 온조기가 아닌 회로 상태를 관리 항목으로 세울 수 있다. 이는 같은 주 FCS의 유량 우선 제어와 동일한 방향이다. 3Dfindit 배포는 금형 설계 단계의 표준품 선정 공수를 줄인다.
- 확인 필요: Z9911 여과 등급·차압 사양, 센터링 유닛 정렬 정밀도, 국내 유통 시점.

**WITTMANN Feedmax Clean 300 — 제진 일체형 진공 로더 처리량 2배 확장**

- 확인 내용: Fakuma 2026 최초 공개. 반송량이 다른 2개 변형, 최대 처리량 80 kg/h로 기존 Feedmax Clean 최대치의 2배. 반송 사이클 중 1,000 µm 미만 입자를 최대 80% 연속 제거. 재료 접촉부는 옵션 글라스부를 제외하고 전부 스테인리스강. 분쇄기·건조기·배합기·로더를 조합한 Smart Recycling 패키지 형태로 공급.
- 관련 근거: [Plastech, 2026-09-01](https://www.plastech.pl/en/news/wittmann-expands-feedmax-clean-for-higher-throughputs-22676) [2차 인용, 공식 발표 기반]
- 기존 대비 변화: 기능 변경이 아니라 처리량 상한 확장이다. 소형 셀 전용이던 제진 로더를 중대형 사출기·중앙 공급 라인 범위로 넓혔다.
- 생산기술 시사점: 재생수지 투입 비율을 올릴 때 병목은 건조기가 아니라 반송 단계의 미분 관리인 경우가 많다. 미분은 게이트 막힘·표면 결함·계량 편차로 직결된다. 반송에 제진을 통합하면 별도 탈분기 설비와 그에 따른 배관·레이아웃을 줄일 수 있다. 다만 80% 분리율은 조건이 명시되지 않은 공급사 값이다.
- 확인 필요: 80% 분리율의 측정 조건(재료·입도 분포·반송 거리), 2개 변형의 구체 사양, 압력손실·소비전력.

**ENGEL – Billion SAS 파트너십 — 프랑스 사출기 서비스망 재편, 신규기 권장 공급사 전환**

- 확인 내용: 2026-09-01 발효. Billion은 독립 기업으로 유지되며 기존 Billion 설치기의 서비스 1차 창구를 계속 담당하고, ENGEL이 신규 설비 구매 시 권장 공급사가 된다. 필요 시 Billion이 ENGEL의 글로벌 서비스망·기술 리소스를 활용. ENGEL은 Wissous 영업거점 외에 Billion Tech Centre에 자사 설비를 전시·시연할 예정이다. ENGEL CEO 발언 기준 양사 기계 컨셉이 호환되어 기존 금형을 ENGEL 기계에서 계속 사용할 수 있다고 명시했다.
- 관련 근거: [Plastech, 2026-09-01](https://www.plastech.pl/en/news/billion-and-engel-enter-strategic-partnership-22671) [2차 인용, 양사 공동 발표 기반]
- 기존 대비 변화: 확인된 변화는 서비스 책임 구조와 신규기 공급 채널이다. Billion의 자체 사출기 개발·제조 지속 여부는 이 자료에서 확인되지 않았다.
- 생산기술 시사점: 유럽 거점에서 Billion 설비를 운용하는 라인은 중장기 설비 교체 시 ENGEL 플랫폼으로 수렴할 가능성이 있다. 금형 마운팅·타이바 간격 호환이 성립하면 기존 금형 자산의 전환 비용이 낮아지므로, 설비 갱신 계획 시 금형 재사용 범위를 사전 검증할 실익이 있다.
- 확인 필요: 금형 호환의 구체 범위(형체력 대역·플래튼 규격·이젝터 인터페이스), Billion 신규기 생산 지속 여부.

**Musashi AI Cendiant Gen 2 — 외관검사 AI 플랫폼을 애플리케이션 개별 설계에서 모듈형 표준으로 전환**

- 확인 내용: 부품 크기 범위에 걸쳐 확장 가능한 모듈형 아키텍처 채택. Active I 딥러닝 소프트웨어가 복수 신경망 방식을 단일 아키텍처로 결합해 적은 학습 데이터로 결함 검출·분류를 수행. 2단계 검사 구조로 1단계에서 결함 가능성 영역을 특정하고 2단계에서 해당 영역만 상세 분석해 연산 부하를 낮춘다. 확대광학계 없이 50 µm 이상 이상(anomaly) 검출, 결함 검출률 99% 초과, 양품 20–30개만으로 모델 학습 착수 가능. 2026년 6월 Automate 2026에서 공개된 항목의 전개 확대다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-08-27](https://www.plasticsmachinerymanufacturing.com/product-innovations/product/55397885/cendiant-inspection-platform-now-easier-to-deploy) [업계 분석]
- 기존 대비 변화: 이전 세대의 애플리케이션별 개별 설계에서 모듈형 표준 플랫폼으로 전환. 신규 품번 전개 시 데이터 수집·엔지니어링 공수가 축소된다.
- 생산기술 시사점: 사출 셀에 취출 직후 인라인 외관검사를 붙일 때 최대 장벽은 검사 성능이 아니라 품번마다 반복되는 학습 데이터 확보와 셋업 공수다. 양품 20–30개로 착수 가능하다는 점은 다품종 라인의 검사 자동화 진입 문턱을 낮춘다.
- 확인 필요: 투명·유광·흑색 등 난검사 표면 실적, 검사 tact time, 과검출률·미검출률, 사출기·취출로봇 인터페이스 방식, 국내 지원 체계.

**기타 확인 항목**

- Wintec(ENGEL 그룹) t-win 6500: Fakuma 2026 라이브 셀. 형체력 6,500 kN 2플래튼기, 4+4 패밀리 금형, 사이클 약 40초, viper 20 취출. iQ weight control(사출량 자기보정)을 표준 사양으로 명시한 점이 변경점이다. 패밀리 금형 대형 성형에서 캐비티 간 충전 불균형이 중량 편차로 직결되므로, 자기보정을 옵션이 아닌 표준으로 두는 구성은 불량률 관리 방식을 바꾼다. 적용 수준은 전시 데모다. [Plastech, 2026-08-27](https://www.plastech.pl/en/news/how-the-wintec-t-win-combines-speed-resource-efficiency-and-22651) [업계 분석]
- Sigma Engineering SIGMASOFT 6.2: Fakuma 2026 공개. 신규 계산 모델 도입과 효율 개선. 실제 금형·제품 .stp 데이터를 30분 내 자동 메싱하고 소재 데이터를 할당해 해석에 착수하는 시연 방식. 금형 전체 자동 메싱이 30분 수준이면 견적·DFM 단계에서 수축·휨 예측을 실무 루틴에 넣을 시간 예산이 된다. 다만 개선 폭이 정량으로 제시되지 않았다. [Plastech, 2026-08-28](https://www.plastech.pl/en/news/sigma-to-present-sigmasoft-6-2-at-fakuma-2026-22658) [업계 분석]
- Cold Jet TEC1200: 드라이아이스 세정에 가열 압축공기를 분리 경로로 공급해 노즐 내부에서 합류시키는 방식. 펠릿 무결성을 유지한 채 입자 속도를 높이고 열로 오염물 결합을 파괴한다. 난제거 오염 제거를 표준 방식 대비 최대 25배 빠르게 처리한다고 발표. 금형 벤트·가스 잔사 대응에서 용제·블라스트 대체 수단 후보이나, 25배는 극단 조건 포함 값이므로 금형 세정 조건과 동일시할 수 없다. 정밀 캐비티·경면·코팅면 적용 검증은 확인 필요. [Plastech, 2026-09-01](https://www.plastech.pl/en/news/cold-jet-launches-tec1200-thermally-enhanced-cleaning-system-22677) [2차 인용]
- 조사 윈도우 내 신규 발표가 확인되지 않은 대상: ARBURG, Sumitomo Demag, FANUC ROBOSHOT, JSW, Nissei, Toyo, Shibaura, Haitian, Milacron, Husky, Mold-Masters, Meusburger, HB-Therm, Kistler, 우진플라임, LS엠트론, 소재 메이커 전반(SABIC, Covestro, Röhm, LG화학, 롯데케미칼 등). 취출·주변장치에서도 Yushin, Sepro, Star Seiki, Harmo, Matsui, Conair, motan, Moretto, Piovan은 기간 내 신규 발표가 없었다. Fakuma 2026 사전 발표가 8월 중순에 집중된 결과로 판단된다.

## 로봇제조기술 상세

**Siemens SINUMERIK MTR Essential — CNC 제어 기반 가공 로봇에 보급형 라인 추가, KUKA와 CNC 통합 머신텐딩 공동 세션**

- 확인 내용: IMTS 2026(9/14–19, 시카고)에서 Danobat과 함께 SINUMERIK MTR Essential을 소개한다고 공식 페이지에 명시. MTR 계열은 SINUMERIK 제어와 로봇 기구를 결합한 CNC 밀링 로봇으로, 절대 경로정밀도 200% 이상 개선, 생산성 최대 40% 향상, 작업영역 전역의 동적 강성 향상을 제시한다. 별도로 Siemens–KUKA 공동 세션(9/15)에서 SINUMERIK CNC에 로봇 제어를 직접 통합해 머신텐딩 엔지니어링 공수를 줄이는 방식과, 디지털 트윈으로 CNC–로봇 상호작용을 양산 전 검증하는 방법을 다룬다.
- 관련 근거: [Siemens IMTS 2026 공식 페이지, 확인일 2026-09-02](https://www.siemens.com/en-us/events/imts/) [공식 발표], [Siemens SINUMERIK CNC Robotics 제품 페이지, 확인일 2026-09-02](https://www.siemens.com/en-us/industries/machine-tools/cnc-robotics/) [공식 발표]
- 기존 대비 변화: MTR 본체 라인은 2025-03 발표분이므로 신규가 아니다. 신규 요소는 Essential이라는 하위·보급형 파생 라인 추가와, Siemens–KUKA 공동으로 CNC 통합 로봇 머신텐딩을 공식 세션화한 점이다.
- 생산기술 시사점: 로봇 컨트롤러와 CNC를 각각 운용하던 가공·머신텐딩 셀을 CNC 단일 플랫폼으로 묶는 접근이다. 로봇 티칭 인력과 CNC 인력이 분리 운영되는 구조를 CNC 기반으로 단일화할 수 있고, OLP·가상시운전을 CNC 디지털 트윈에 통합해 라인 셋업 기간을 줄일 여지가 있다. 다만 로봇 기구는 파트너(autonox, Danobat) 공급 구조여서 기구 선택 폭이 제한된다.
- 확인 필요: MTR Essential 정식 발표일, 가반·리치·경로정밀도 사양, 기존 MTR 대비 차별점, 아시아 공급 여부.

**Locus Robotics NeuraGrasp — 모바일 매니퓰레이터 EOAT를 흡착 단독에서 흡착·핀치 병용으로 교체**

- 확인 내용: 2025년 3월 공개한 모바일 매니퓰레이터 Locus Array를 표준 흡착컵 그리퍼로 초기 고객 인도 중이며, 인수한 Nexera Robotics의 NeuraGrasp(흡착+핀치 병용 소프트 엔드이펙터)를 Array 개발 스트림에 통합했다. Array가 설계 단계에서 공압·전원 공급 구조를 갖춰 후반 통합이 가능했다. Nexera 창업자 겸 현 Locus 파지 담당 SVP는 창고 작업의 60–70%는 흡착으로 충분하고 나머지 30–40%에서 핀치 파지가 필요하다고 구분했다. 정식 공급 시점은 미공개다.
- 관련 근거: [The Robot Report, 2026-08-28](https://www.therobotreport.com/locus-getting-grasp-one-robotics-biggest-challenges-manipulation/) [2차 인용]
- 기존 대비 변화: 단일 흡착 방식에서 흡착·핀치 하이브리드로 전환. 다공성 폴리백·직물 등 기존 흡착 실패 품목까지 파지 범위가 넓어진다.
- 생산기술 시사점: 부품 형상·재질이 혼재된 라인사이드 피킹에서 EOAT 선정 기준이 속도에서 커버리지 대비 신뢰도로 이동하고 있다. Locus가 PPH(시간당 피킹수)보다 파손·이중파지·미스픽 억제를 우선 지표로 제시한 점은 다품종 소량 부품 공급 자동화의 실질 원가 지표와 일치한다. 촉각 센싱 부재를 최대 병목으로 지목한 점도 EOAT 사양 검토 시 참고 항목이다.
- 적용 수준: 기술 통합 완료·고객 인도 초기 단계(양산 적용 아님)
- 확인 필요: NeuraGrasp 탑재 Array의 파지 성공률·사이클타임, 정식 출시 시점.

**OnRobot Physical AI 대응 EOAT 요건 4항목 — 그리퍼를 부속품이 아닌 데이터 취득 계층으로 재정의**

- 확인 내용: OnRobot 글로벌 사업개발 총괄이 Physical AI 적용 로봇의 EOAT 선정 기준 4가지를 제시했다. 첫째, 부품 크기·형상·재질 편차를 수용하는 파지 파라미터 가변성. 둘째, 파지 성립 여부를 모델에 되돌리는 파지·부품 검출 피드백. 셋째, 시뮬레이션·비전으로 재현이 어려운 접촉 데이터(마찰·슬립·변형) 확보를 위한 근접 센싱(접촉 전)과 힘·토크 센싱(접촉 중)의 조합. 넷째, 2지·3지·진공·자성 툴과 툴체인저를 단일 인터페이스로 묶는 툴링 레이어 유연성.
- 관련 근거: [The Robot Report(OnRobot 기고), 2026-08-31](https://www.therobotreport.com/how-better-grippers-can-unlock-physical-ai/) [공식 발표]
- 기존 대비 변화: 신제품 발표가 아니다. EOAT를 마지막에 붙이는 부품이 아니라 학습 시스템의 데이터 취득·실행 계층으로 재정의한 공급사 공식 입장이다.
- 생산기술 시사점: AI 기반 파지 도입 검토 시 그리퍼 사양서에 파지력 가변 범위, 파지 검출 신호, 근접·힘/토크 출력 인터페이스, 툴체인저 호환성을 명시적 요구항목으로 넣어야 한다는 근거가 된다. 접촉 데이터는 시뮬레이션 대체가 어렵다는 점에서 실기 검증 공수를 사전 계상할 필요가 있다.
- 적용 수준: 기술자료
- 확인 필요: 해당 요건을 반영한 신규 제품·펌웨어 출시 계획.

**하이젠알앤엠 고중량 작업용 휴머노이드 국책과제 — 가반 40 kg급, QDD 구동 기반**

- 확인 내용: 산업통상부 로봇산업핵심기술개발 신규 과제 주관기관 선정. 2026년 8월부터 2029년 12월까지 41개월, 총 연구개발비 81억 원. 한국로봇융합연구원, 삼성중공업 RX센터, 오픈패스로보틱스가 공동연구개발기관으로 참여한다. 개발 대상은 키 170 cm, 가반하중 40 kg 이상 고강성 휴머노이드이며, QDD(Quasi-Direct Drive) 구동모듈 4종, 40 kg급 고하중 작업용 그리퍼, 피지컬 AI 기반 전신 통합제어 소프트웨어가 핵심 요소다. 삼성중공업 거제조선소에서 실증 예정.
- 관련 근거: [로봇신문(한국어), 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48222) [공식 발표]
- 기존 대비 변화: 국내 휴머노이드 개발 목표가 경량 물류 핸들링에서 40 kg급 고하중·비정형 환경 작업으로 상향됐다. 액추에이터도 고감속비 감속기가 아닌 QDD 기반을 명시했다.
- 생산기술 시사점: 자동차 부품 제조에도 20 kg를 넘는 부품의 사람 취급 공정이 남아 있어, 40 kg급 가반과 전용 고하중 그리퍼 조합은 중장기 대체 검토 대상이 될 수 있다. QDD 구동은 백드라이버빌리티가 높아 접촉 작업에 유리하나 발열과 정밀도 확보가 과제이므로, 사양 확정 시 연속 duty 조건 확인이 필요하다.
- 적용 수준: 국책 R&D 착수(실증 예정, 양산 아님)
- 확인 필요: QDD 모듈 정격 토크·감속비, 그리퍼 파지력, 실증 착수 시점.

**기타 확인 항목**

- Skild AI S1: 사후학습 없이 문맥 내 학습으로 신규 작업을 수행한다고 주장하는 로봇 파운데이션 모델. 텔레오퍼레이션 데이터·사람 작업 영상·시뮬레이션·데이터 수집 글러브 4종을 결합해 사전학습했고, 최대 10분 수준 장기 작업과 사족보행·휴머노이드·고정형 암 공통 적용 구조를 제시했다. 다만 공개 데모는 분갈이·커피 제조 등 비제조 작업이며 제조 공정 적용 사례는 미공개다. 도입 검토가 아니라 기술 방향 추적 대상으로 분류하는 것이 타당하다. [The Robot Report, 2026-08-31](https://www.therobotreport.com/skild-ai-unveils-s1-flagship-robot-foundation-model/) [2차 인용]
- 클로봇 – 두산로지스틱스솔루션 인수 완료(2026-08-31 공시): 로봇 관제 소프트웨어(RCS)·이기종 통합관제(CROMS)에 물류센터 설계·자동화 설비 구축·WMS/WCS 시스템 통합 역량을 결합. AMR Fleet 관제와 창고제어가 별도 레이어로 분리돼 있던 구조를 통합 오퍼링으로 묶는 방향이다. 다기종 AMR 운용 계획이 있는 경우 관제 계층 벤더의 WCS 연계 역량을 사전 평가 항목에 포함할 필요가 있다. 통합 제품은 미출시. [로봇신문(한국어), 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48226) [공식 발표]
- 티로보틱스 포드 ESS 라인 자동화 추가 수주(2026-09-01): 약 263만 달러 규모로 설비·설치·시운전·제어시스템 개발 및 통합을 포함. 2026년 5월 약 150억 원 규모 AMR 공급에 이은 후속 건이다. AMR 반송과 공정 자동화 설비를 동일 공급사가 제어 통합까지 묶어 수행하는 발주 형태가 확산되는 사례로, AMR 인터페이스와 라인 제어(PLC·MES) 연동을 분리 발주할 때 발생하던 책임 경계 문제를 줄이는 방향이다. [로봇신문(한국어), 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48240) [공식 발표]
- 조사 윈도우 내 신규 발표가 확인되지 않은 대상: FANUC, ABB, KUKA, Kawasaki, Nachi, Denso, Universal Robots, 두산로보틱스, 한화로보틱스, Rockwell. SCHUNK도 기간 내 신규 게시 없음. Boston Dynamics·Figure·Agility Robotics·Apptronik은 공식 뉴스룸 직접 접근이 되지 않아 확인 필요로 남긴다. 검색 결과에 최신처럼 노출된 Zimmer–Schmalz MATCH 에코시스템(2021-04), ROEQ TMS-C1500(2021-10)은 원문 확인 결과 신규가 아니다.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 금형온도 관리의 초점이 온조기 성능에서 냉각회로 상태(유량·오염)로 이동. FCS는 사출기 제어함 내 유량 폐루프로, HASCO는 회로 필터 표준부품으로 각각 접근 | 금형온도 편차·치수 산포의 원인 진단 기준이 바뀐다. 기존 온조기 스펙 중심 사양 검토를 회로 진단·보상 항목까지 확장할 필요 |
| 기술 변화 | 협동로봇 개선 축이 가반·리치 확대에서 안전 응답속도와 설치 밀도로 이동(Yaskawa HC12: 가반 +2 kg, 베이스 −38%) | 기존 수작업 스테이션을 유지한 채 로봇을 삽입하는 개조형 자동화의 성립 조건이 완화된다 |
| 업체 변화 | KraussMaffei가 취출로봇을 단일 기구학에서 24축 통합제어 다중 기구학으로 확장하며 타사 사출기 대응을 명시 | 사출기 메이커의 자동화 사업이 자사 셀 한정에서 혼재 설비 라인 표준화로 확장되는 신호 |
| 업체 변화 | ENGEL이 Billion과 파트너십으로 프랑스 서비스망·신규기 공급 채널을 재편 | 유럽 사출기 공급사 재편이 진행 중. 설비 갱신 시 금형 자산 호환 범위를 사전 검증할 실익 |
| 적용사례 변화 | 신규 양산 적용 사례는 티로보틱스 포드 ESS 라인 공급 1건. 나머지는 전시 데모(Wintec, FCS), 초기 인도(Locus), R&D 착수(하이젠알앤엠) | 이번 주 확인 항목 대부분이 양산 검증 이전 단계다. 적용 수준 구분 없이 도입 근거로 쓰기 어렵다 |
| 확인 필요 | FCS의 금형온도 ±2°C 측정 위치, WITTMANN 80% 제진율의 측정 조건, Yaskawa 반응속도 향상폭, MTR Essential 사양 | 공급사 제시 수치가 조건 미명시 상태다. 다음 조사에서 Fakuma·IMTS·TaipeiPlas 현장 기술자료로 재확인 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | IMTS 2026(9/14–19) 사전 발표 | 로봇 SW·가공 | SINUMERIK MTR Essential 정식 사양, Siemens–KUKA CNC 통합 머신텐딩 구현 방식 |
| 2 | AMB 2026(9/15–19, 슈투트가르트) | 산업용 로봇 | KUKA KR CYBERTECH 신세대 관련 추가 발표 및 KR C5 slim 대응 범위 |
| 3 | TaipeiPlas 2026(9/15–19) 사전 발표 | 사출기 | FCS 외 대만·중국 사출기 메이커의 유량 제어·에너지 계측 대응 동향 |
| 4 | Fakuma 2026(10/12–16) 2차 발표 | 사출기·주변장치 | 8월 중순 집중 발표 이후 잔여 신규 항목, 특히 ARBURG·Sumitomo Demag·Yushin·Sepro |
| 5 | ABB 주도 산업용 로봇 에너지 소비 측정 ISO TS | 표준 | 2026년 8월 완료 예정으로 기재됐으나 발행 여부·TS 번호 미확인 |
| 6 | EUROMAP 102 및 OPC 40079 진전 | 표준 | 사출기·주변장치 인터페이스 표준의 2026년 개정 상황 |
| 7 | Boston Dynamics·Figure·Agility·Apptronik | 휴머노이드 | 이번 주 공식 뉴스룸 접근 실패로 미확인. 제조라인 투입 진전 여부 재확인 |
| 8 | Musashi AI Cendiant Gen 2 사출품 적용 실적 | 검사 자동화 | 난검사 표면(투명·유광·흑색) 검출 성능과 과검출률 |

## 출처

### 사출성형기술

- [KraussMaffei 보도자료, LRXplus Twin, 2026-08-27](https://press.kraussmaffei.com/en/news/lrxplus-twin-from-kraussmaffei-new-multiple-kinematic-system-for-maximum-efficiency-in-injection-molding-automation)
- [Plastech, KraussMaffei expands LRXplus automation range, 2026-08-27](https://www.plastech.pl/en/news/kraussmaffei-expands-lrxplus-automation-range-22656)
- [Plastech, Wintec t-win 6500 Fakuma live cell, 2026-08-27](https://www.plastech.pl/en/news/how-the-wintec-t-win-combines-speed-resource-efficiency-and-22651)
- [ETMM(Vogel), HASCO at Fakuma 2026, 2026-08-29](https://www.etmm-online.com/hasco-fakuma-2026-mould-base-hot-runner-cad-tools-a-6b063505fcf098037eca6ef62732fc8c/)
- [Plastech, Sigma to present SIGMASOFT 6.2 at Fakuma 2026, 2026-08-28](https://www.plastech.pl/en/news/sigma-to-present-sigmasoft-6-2-at-fakuma-2026-22658)
- [Plastech, FCS to show smart injection molding at TaipeiPlas 2026, 2026-08-31](https://www.plastech.pl/en/news/fcs-to-show-smart-injection-molding-at-taipeiplas-2026-22670)
- [Plastech, Billion and ENGEL enter strategic partnership, 2026-09-01](https://www.plastech.pl/en/news/billion-and-engel-enter-strategic-partnership-22671)
- [Plastech, WITTMANN expands Feedmax Clean for higher throughputs, 2026-09-01](https://www.plastech.pl/en/news/wittmann-expands-feedmax-clean-for-higher-throughputs-22676)
- [Plastech, Cold Jet launches TEC1200, 2026-09-01](https://www.plastech.pl/en/news/cold-jet-launches-tec1200-thermally-enhanced-cleaning-system-22677)
- [Plastics Machinery & Manufacturing, Cendiant inspection platform now easier to deploy, 2026-08-27](https://www.plasticsmachinerymanufacturing.com/product-innovations/product/55397885/cendiant-inspection-platform-now-easier-to-deploy)

### 로봇제조기술

- [安川電機 뉴스릴리스 (일본어), MOTOMAN-HC12, 2026-08-31](https://www.yaskawa.co.jp/newsrelease/product/1681577)
- [Siemens IMTS 2026 공식 페이지, 확인일 2026-09-02](https://www.siemens.com/en-us/events/imts/)
- [Siemens SINUMERIK CNC Robotics 제품 페이지, 확인일 2026-09-02](https://www.siemens.com/en-us/industries/machine-tools/cnc-robotics/)
- [The Robot Report, Locus getting a grasp on manipulation, 2026-08-28](https://www.therobotreport.com/locus-getting-grasp-one-robotics-biggest-challenges-manipulation/)
- [The Robot Report, How better grippers can unlock Physical AI (OnRobot 기고), 2026-08-31](https://www.therobotreport.com/how-better-grippers-can-unlock-physical-ai/)
- [The Robot Report, Skild AI unveils S1 robot foundation model, 2026-08-31](https://www.therobotreport.com/skild-ai-unveils-s1-flagship-robot-foundation-model/)
- [로봇신문 (한국어), 하이젠알앤엠 고중량 휴머노이드 국책과제, 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48222)
- [로봇신문 (한국어), 클로봇 두산로지스틱스솔루션 인수 완료, 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48226)
- [로봇신문 (한국어), 티로보틱스 포드 ESS 라인 자동화 추가 수주, 2026-09-01](https://www.irobotnews.com/news/articleView.html?idxno=48240)
- [advancedmanufacturing.org, ABB Robotics leads robot energy measurement standardization, 확인일 2026-09-02](https://www.advancedmanufacturing.org/news-desk/press-releases/abb-robotics-leads-effort-to-standardize-industrial-robot-energy-consumption-measurement/article_27a1a80d-7087-4d69-8537-16a981465dee.html)
