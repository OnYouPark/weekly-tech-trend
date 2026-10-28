---
title: 생산기술 신규기술 브리핑 - 2026년 10월 5주차
date: 2026-10-28
type: production
period: 2026년 10월 5주차
tags: [Mitsubishi Electric, ABB RobotStudio, Agility Robotics, NVIDIA Isaac, ROKAE, Celanese, 하이브리드금형, 가상시운전]
summary: 사출은 Fakuma 이후 장비 발표 공백 속에 적층 H13 인서트와 표준 몰드베이스를 병렬 제작해 금형 리드타임을 약 30% 줄인 사례와, 화학적으로 동일한 탄소포집 POM을 금형·성형조건 변경 없이 2개월 만에 승인받은 양산 사례가 공개됨. 로봇은 미쓰비시전기가 CNC 측 피지컬 AI로 휴머노이드에 작업을 배분하는 가공 시스템을 JIMTOF에서 시연하고, ABB는 인식·합성데이터까지 포함한 가상시운전 RobotStudio HyperReality를 사용자 6만 명에 배포, Agility는 Digit 5 안전 기능에 AI 인지 모델을 넣어 제3자 인증 절차에 들어감
---

# 생산기술 신규기술 브리핑 - 2026년 10월 5주차

> 2026-10-22 – 2026-10-28 사출성형·로봇제조 신규 기술 변화

이번 주 사출은 Fakuma 2026(10-12 – 10-16) 폐막 후 사출기·주변기기 메이커의 신규 하드웨어 발표가 사실상 없었고, 금형 제작 방식과 소재 승인 경로의 적용사례가 중심이다. 로봇은 NVIDIA GTC Berlin(10-21), FABTECH 2026(10-21 – 10-23), JIMTOF 2026(10-26 – 10-31)이 겹쳐 가상시운전·로봇 SW, 공작기계 연계, 휴머노이드 안전·공급망 발표가 몰렸다. 2026-10-21 현지시각 발표 중 직전 브리핑 게시 이후 공개된 건은 이번 호에 포함했다.

## 금주 핵심 요약

### 사출성형기술

**[Elite Mold & Engineering / PCS Company] 적층 H13 인서트 하이브리드 브리지 금형 — EDM 전극·벤칭 공정을 우회해 금형 리드타임 약 30% 단축**

- 확인 내용: Tier 1 공급사의 EV 와이어 하니스·커넥터 부품(약 83 × 108 mm, 깊고 좁은 리브, 고유리섬유 강화 나일론)용 금형을 3주 납기로 제작했다. Mantle 장비로 금속 페이스트 적층 → 공정 중 절삭 → 소결 방식의 H13 캐비티·코어 인서트(약 102 × 152 mm)를 만들고 내부에 컨포멀 냉각 채널을 넣었다. PCS는 표준 몰드베이스(약 305 × 305 mm)의 인서트 포켓을 와이어 EDM으로 가공하고 CMM 검사까지 1주 안에 마쳤다. 인서트 적층과 베이스 가공을 병렬로 진행하고 EDM 전극 제작을 없애, 당초 검토한 기존 공법 대비 예상 리드타임을 약 30% 줄였다. 같은 공법의 후속 건에서 8캐비티 금형 1벌이 최대 50만 사이클을 가동했고, 1.5주 만에 만든 금형이 신차 초기 3개월 생산(약 1만 개)을 지원했다.
- 관련 근거: [MoldMaking Technology, 2026-10-26](https://www.moldmakingtechnology.com/articles/hybrid-ev-bridge-mold-cuts-estimated-lead-time-by-approximately-30) [업계 분석] / 동일 프로젝트 선행 보도 [Plastics Machinery & Manufacturing, 2026-03-05](https://digitaledition.plasticsmachinerymagazine.com/articles/racing-to-the-finish-line-at-elite-mold) [업계 분석]
- 기존 대비 변화: 깊은 리브 금형은 EDM 전극 제작·방전 시간과 수작업 다듬질(벤칭)이 일정을 지배했고, 알루미늄 시작 금형은 GF 나일론에 빨리 마모됐다. 이번 건은 적층 H13 인서트를 표준 베이스에 끼우는 구조로 전극 공정을 없애고 양산 겸용 내구성을 확보했다. 3월 보도는 납기 단축 사실까지였고, 이번 보도로 30% 비교 기준과 후속 양산 실적이 추가됐다.
- 생산기술 시사점: 설계 변경이 잦은 EV 전장 부품에서 인서트만 교체하는 브리지 금형이 시작·초기 양산 대응 수단이 된다. 깊은 리브부 컨포멀 냉각은 핫스팟과 치수 산포 관리에 유리하다. 다만 30%는 "예상" 대비 수치이고 적층 H13의 경도·연마성·열피로 데이터가 공개되지 않아 양산 금형 전환 시 별도 검증이 필요하다.
- 적용 수준: 브리지 금형 실적용, 동일 공법 후속 금형 양산 가동(회사 제시). 분류는 신규 적용사례(금속 적층 인서트 기술 자체는 기존 기술)
- 확인 필요: 30% 산정의 기준 일수, 인서트 적층 소요 시간, 컨포멀 냉각에 따른 사이클타임 변화, 50만 사이클 사례의 수지·부품 상세

**[Celanese] Celcon ECO-C M90 탄소포집 POM — 금형·성형조건·설계 변경 없이 OEM 승인 2개월, 2026-04 양산**

- 확인 내용: 2026년형 Toyota Tundra 연료펌프 모듈 하위부품에 적용됐다(SPE 자동차혁신상 지속가능성 부문 결선, 시상 11-04). 산업 배출 CO₂와 수소로 만든 메탄올을 POM 주원료로 써 소재 생산 CO₂를 90% 줄였다고 밝혔다. 표준 M90과 화학적으로 동일해 유동·탄성률·강도·충격·열변형온도가 같고, 금형·성형조건·설계를 바꾸지 않았다. 승인 기간은 통상 2–3년 대비 2개월이었다. 양산은 2026-04 시작했고 모듈 탄소발자국을 현재 4% 줄였으며 2029년 30%가 목표다.
- 관련 근거: [Plastics Today, 2026-10-22](https://www.plasticstoday.com/automotive-mobility/spe-names-three-sustainability-finalists-for-automotive-awards) [업계 분석] / 채택 발표 [Celanese 보도자료(재게재), 2026-06-08](https://stocktitan.net/news/CE/aisan-adopts-celanese-pom-eco-c-for-fuel-pump-modules-supplied-to-a-0n2gmmjfzbo5.html) [공식 발표]
- 기존 대비 변화: 06-08 발표는 Aisan Industry Kentucky의 북미 완성차향 모듈 채택과 질량수지(mass balance) 방식까지였다. 이번에 차종, 승인 기간, 양산 시점, 감축률이 처음 공개됐다.
- 생산기술 시사점: 저탄소 소재 전환은 PCR 혼합처럼 물성이 바뀌면 수축률·성형조건·치수 재검증이 필요해 승인이 길어진다. 화학 구조가 같은 원료 치환(드롭인)은 재검증 없이 승인 기간을 줄이는 경로임이 연료계 부품에서 확인됐다. 소재 선정 시 CO₂ 저감률과 함께 재검증 공수를 비교 항목으로 둘 근거가 된다.
- 적용 수준: 양산. 분류는 신규 적용사례(탄소포집 원료 POM의 자동차 첫 양산 적용으로 보도)
- 확인 필요: 질량수지 방식의 부품 귀속·인증 방법, 적용 하위부품 명칭, 표준 등급 대비 가격 차이

### 로봇제조기술

**[미쓰비시전기(三菱電機)] 휴머노이드–CNC 공작기계 연계 가공 시스템 — CNC 측 피지컬 AI가 자연어 태스크 단위로 로봇과 작업을 나눔**

- 확인 내용: 2026-10-21 발표(RD No.2623). 구성은 ① 오퍼레이터의 자연어 지시로 가공 태스크를 자동 생성해 공작기계와 휴머노이드에 배분·관리하는 AI 가공 태스크 플래너, ② 피지컬 AI를 탑재해 자연어로 조작 정보를 주고받으며 연계 가공하는 CNC, ③ 일반 휴머노이드다. 플래너와 CNC에는 미쓰비시전기의 AI 브랜드 Maisart 기반 피지컬 AI를 넣었다. 대상 작업은 셋업(段取り), 청소, 완성품 취출, 반송, 검사, 트러블 대응이며 로봇별 개별 시스템 통합 없이 연계하는 것이 목표다. JIMTOF 2026에서는 방문객의 음성 지시로 각인 문자를 받아 공정을 설계하고, 휴머노이드가 워크를 다른 로봇을 거쳐 공작기계에 투입·각인한 뒤 전달하는 데모를 진행 중이다. 실용화 목표는 2030년으로 보도됐다.
- 관련 근거: [三菱電機 뉴스릴리스 (일본어), 2026-10-21](https://www.mitsubishielectric.co.jp/ja/pr/2026/1021_rd/) [공식 발표] / [MONOist (일본어), 2026-10-22](https://monoist.itmedia.co.jp/mn/articles/2610/21/news073.html) [업계 분석] / [MONOist JIMTOF 현장 (일본어), 2026-10-27](https://monoist.itmedia.co.jp/mn/articles/2610/27/news041.html) [업계 분석]
- 기존 대비 변화: 기존 머신텐딩은 로봇마다 통신 기능과 제어 시퀀스(PLC I/O 핸드셰이크·인터록)를 개별 개발해야 했다. 이번 시스템은 CNC가 태스크 단위 의미 교환을 직접 지원해 연계의 주체가 공작기계 쪽으로 옮겨간다. 회사는 휴머노이드 연계를 전제로 한 NC 시스템으로 업계 최초라고 밝혔다.
- 생산기술 시사점: 가공 셀에서 마지막까지 사람이 남던 저빈도·비정형 작업(셋업, 칩 청소, 이상 대응)이 대상이다. 사출 셀의 금형 교환 보조·이물 제거 같은 주변 작업에도 같은 구조가 적용될 여지가 있으나[추정], 결정론적 인터록·안전 기능을 자연어 연계 계층과 어떻게 분리하는지가 실적용 검증의 핵심이다.
- 적용 수준: 전시 데모(연구개발 단계)
- 확인 필요: 사용 휴머노이드 기종·제조사, 자연어 메시지 규격과 표준화 여부, 안전 인터록 처리 방식, 사이클타임·성공률

**[ABB Robotics] RobotStudio HyperReality — 가상시운전 범위를 인식·합성데이터·AI 학습까지 넓힌 기능을 RobotStudio 사용자 6만 명에 배포**

- 확인 내용: GTC Berlin(10-21)에서 RobotStudio HyperReality를 전 세계 RobotStudio 사용자 60,000명에게 제공한다고 발표했다. NVIDIA Omniverse 라이브러리를 RobotStudio에 통합하고 실기와 같은 펌웨어로 도는 가상 컨트롤러를 결합해 시뮬레이션–실기 정확도 최대 99%를 주장한다. 제품 페이지 기준 기능은 포토리얼·물리 정확 환경, 실환경 편차를 반영한 합성데이터 생성, 인식 포함(perception in the loop) 가상시운전, VLA 등 피지컬 AI 모델의 시뮬레이션 학습이다. 회사 제시 효과는 셋업·시운전 시간 최대 80% 단축, 엔지니어링·생산 비용 최대 40% 절감이다. Enodo Robotics와 OpenUSD 기반으로 공동 개발했다.
- 관련 근거: [ABB 보도자료, GTC Berlin(원문 게시일 미표기)](https://www.abb.com/global/en/news/139691/prsrl-abb-robotics-sets-out-blueprint-for-physical-ai-education-at-nvidia-gtc-berlin) [공식 발표] / [ABB 제품 페이지, 2026-10-28 확인](https://www.abb.com/global/en/areas/robotics/innovation/robotstudio-hyperreality) [공식 발표] / [ENGtechnica, 2026-10-23](https://engtechnica.com/abb-robotics-nvidia-plan-physical-ai-training-program/) [업계 분석]
- 기존 대비 변화: 2026년 초 공개 후 이번에 사용자 전체 배포 단계로 넘어왔다. 기존 RobotStudio 가상시운전이 동작·간섭·사이클타임 검증 중심이었다면, 조명·반사·부품 편차에 따른 비전 인식 검증과 AI 모델 학습이 같은 환경으로 들어왔다.
- 생산기술 시사점: 비전 가이드 픽킹·검사 셀은 실물 시운전에서 조명·표면 반사 문제로 일정이 밀리는 경우가 많아, 이 리스크를 가상 단계로 앞당길 수 있다. 투명·고광택 부품처럼 인식 난도가 높은 품목일수록 효과와 한계가 함께 드러나는 영역이다. 99%의 산출 기준이 공개되지 않았으므로 자체 셀에서 시뮬레이션 대비 실측 편차를 검증하는 절차가 전제다.
- 적용 수준: 상용 배포(고객 적용 사례 미공개). 분류는 기존기술 고도화(2026년 초 공개 기능의 배포 개시)
- 확인 필요: 99% 정확도의 정의, 라이선스·가격, 제품 페이지에 "Coming to RobotStudio"로 표기된 기능의 현재 포함 범위

**[Agility Robotics / NVIDIA] Digit 5 — 온보드 컴퓨트를 IGX Thor로 단일화하고 AI 인지 모델을 사람 감지 안전 기능에 넣어 제3자 인증 절차 착수**

- 확인 내용: 2026-10-22 발표. Digit 5 일반 판매 버전의 온보드 컴퓨트를 NVIDIA IGX Thor 모듈로 표준화하고 NVIDIA를 단독 공급처로 정했다. IGX Thor와 NVIDIA Halos 모델을 자체 사람 감지 안전 시스템(safe human detection)에 통합해 인지 성능을 확장한다. 안전 관련 SW·AI 구성요소·사이버보안을 NVIDIA Halos AI Systems Inspection Lab에서 평가받은 뒤 최종 제3자 인증을 추진한다. 얼리 액세스는 2027년 상반기, 이후 6–9개월에 걸쳐 제조·물류 운영사로 공급을 넓히며 일반 판매는 2027년 말 목표다. 10-26에는 연 300만 대 이상 판매 완성차, 대형 자동차 기술·부품 개발사, 소비재 제조사 각 1곳이 특정 제조 과업 대상 유료 프로그램에 참여 중이고(사명 비공개) GXO 물류 거점이 2곳 늘어난다고 밝혔다.
- 관련 근거: [Agility Robotics 보도자료, 2026-10-22](https://www.agilityrobotics.com/content/agility-robotics-expands-nvidia-collaboration-as-it-prepares-digit-5-for-commercial-scale) [공식 발표] / [Agility Robotics 보도자료, 2026-10-26](https://www.agilityrobotics.com/content/agility-robotics-highlights-commercial-momentum-and-growing-enterprise-demand-for-digit-humanoid-robot) [공식 발표]
- 기존 대비 변화: 09-16 브리핑의 Digit 5 공개(가동 대 충전 10대 1) 이후, 컴퓨트 아키텍처 단일화와 AI 안전 기능의 인증 경로(검사 랩 평가 → 제3자 인증)가 구체화됐다.
- 생산기술 시사점: 사람 근접 작업용 휴머노이드는 안전 기능 자체에 AI 인지 모델이 들어가는 구조로 가고 있다. 도입 검토 시 기계 안전 등급과 별도로 AI 인지 모델의 검증 범위, 인증 주체, 모델 업데이트 시 재인증 조건을 확인 항목에 넣어야 한다. 완성차·부품사의 유료 평가는 토트·부품 상자 같은 라인사이드 반복 취급부터 시작될 가능성이 크다[추정].
- 적용 수준: 기술자료(얼리 액세스 2027년 상반기), 제조 고객 3곳은 유료 파일럿
- 확인 필요: 적용 안전 규격과 목표 성능 수준, 사람 감지 거리·반응 시간, 모델 업데이트 시 인증 유지 방식, 제조 고객 3곳의 과업·대수

## 사출성형기술 상세

**[Shibaura Machine LWB] MultiStation — 엘라스토머 사출·가류·탈형을 스테이션별로 병렬 운전하는 셀, 10-28 첫 실연**

- 확인 내용: 독일 Altdorf의 Next-Level Molding Days(10-28 – 10-29)에서 처음 공개한다. 사출·가류·탈형·장입 단계를 분리해 병렬 운전하고, 라인을 세우지 않고 개별 스테이션의 금형 교체·정비가 가능한 모듈 구성이다.
- 관련 근거: [ETMM, 2026-08-17](https://www.etmm-online.com/next-level-molding-days-shibaura-machine-lwb-2026-a-dc0fd9a226e53f8ab08f623bc5e4017d/) [2차 인용] / [Rubber World, 2026-08-18](https://rubberworld.com/?p=53670) [2차 인용] (08월 사전 발표 기준, 실연 후 보도 미확인)
- 기존 대비 변화: 수직형 고무 사출은 가류 시간 동안 사출기가 금형을 점유했다. 가류·탈형을 외부 스테이션으로 빼 사출 유닛 가동률을 높이는 구조다.
- 생산기술 시사점: 가류 시간이 사이클을 지배하는 자동차용 실·그로밋·부싱류에서 사출 유닛 1대가 맡는 금형 수를 늘리고, 금형 교체 중에도 라인을 돌려 다품종 OEE를 높이는 구성이다. 열가소성이 아닌 엘라스토머 공정이다.
- 적용 수준: 전시 데모
- 확인 필요: 스테이션 수, 사이클·가동률 수치, 금형 이송 방식, 양산 납품 여부

**[Mold-Masters] 사우디 주바일 핫러너 서비스 거점 — 계열사 Coperion 거점을 공유해 중동 현지 정비 체제로 전환**

- 확인 내용: 2026-10-22 보도자료. 신규 시설 없이 같은 Hillenbrand 계열 Coperion의 Jubail 2 거점을 공유한다. 그동안 중동 고객 다수는 인도 조직이 지원했다. 예비부품 재고, 핫러너 세척·수리·리퍼비시, 현장 출동, 예방정비를 제공하며 대형 매니폴드용 세척로(최대 적재 5,000 kg)를 갖추고 가동 중이다.
- 관련 근거: [Mold-Masters 보도자료, 2026-10-22](https://www.moldmasters.com/news-and-events/strengthens-middle-east-support) [공식 발표] / [Plastech, 2026-10-23](https://www.plastech.pl/en/news/mold-masters-expands-service-support-in-saudi-arabia-22946) [2차 인용]
- 기존 대비 변화: 인도 원격 지원에서 현지 거점 지원으로 바뀌었고, 신규 투자 대신 계열사 인프라를 공유했다.
- 생산기술 시사점: 핫러너 고장 시 금형 정지 기간은 매니폴드 반출·세척·수리 회송 기간이 좌우한다. 해외 사출 거점의 핫러너 공급사 선정 시 현지 정비 역량을 평가 항목으로 둘 근거가 된다.
- 적용 수준: 서비스 가동(서비스망 변화)
- 확인 필요: 상주 인력, 회송 기간 단축 수치, 컨트롤러·액추에이터 수리 범위

**[Koch-Technik] Impuls 재료 분배기 — 수동 호스 연결 순간 오접속을 검지하는 기계식 감시 커플링(Fakuma 2026 사후 보도)**

- 확인 내용: 수동 재료 분배 스테이션에 감시형 퀵커플링을 넣어 연결 순간 오접속을 검지하고 각 성형기에 지정 재료만 공급되게 한다. RFID 방식의 기계식 대안으로 제시됐다. 이송기 상태 표시 LED 후드와, 성형기 사이클에 롤러 속도를 맞추는 마스터배치 계량기 KEM-Touch 연동도 확인됐다.
- 관련 근거: [PolyForm NEXT, 2026-10-26](https://www.polyformnext.de/drying--conveying--dosing/cooking-technology-at-fakuma-2026-material-processing-with-greater-control.htm) [업계 분석]
- 기존 대비 변화: 10-07 사전 보도([PolyForm NEXT](https://www.polyformnext.de/drying--conveying--dosing/mixing--dosing--conveying--and-drying-what-happens-before-the-machine-makes-all-the-difference.htm))는 건조기·계량기 사양 중심이었고 오접속 검지 커플링은 이번에 확인됐다. 접속 확인을 RFID(예: [Moretto Delphy, 2026-09-10](https://www.moretto.com/en/news/2026/09/smart-solutions-for-the-plastics-industry-moretto-expertise-at-fakuma))가 아닌 기계식 감시로 구현했다.
- 생산기술 시사점: 다품종 셀에서 호스 오접속은 로트 전량 불량과 퍼지 손실로 이어지며, 연결 시점 검지는 호퍼 도달 전 차단이 가능하다. 다만 검지 신호의 성형기 인터록·MES 재료 이력 연계가 공개되지 않아 자동차 부품의 로트 추적 요건 충족 여부는 판단할 수 없다.
- 적용 수준: 전시 데모(Fakuma 2026 출품)
- 확인 필요: 최초 공개 시점, 신호 출력 방식(I/O·OPC UA), 인터록 연계

**[참고] IPF Japan 2026(12-01 – 12-05) 사전 공개 현황**: 조사 기간 내 새로 게시된 출전 안내는 없었다. 기존 게시분 중 시바우라기계는 재생재 대응 성형조건 자동보정(EC350SXⅢ-17A)과 성형조건 자동생성·가스 억제(EC100SXⅢ-3A)를, 소딕은 분쇄재를 리펠릿 없이 50% 이상 섞는 V-LINE 성형 데모를 예고했다. 하모는 10-28 웨비나에서 신형 대형 취출로봇을 소개한다고 공지했으나 사양은 공개되지 않았다. [芝浦機械 (일본어), 2026-09-08](https://www.shibaura-machine.co.jp/jp/NEWS/event/20261201.html) / [ソディック (일본어), 게시일 미표기](https://www.sodick.co.jp/feature/ipf2026/) / [ハーモ (일본어), 2026-09-28](https://www.injection-molding.jp/seminar/20261028)

**직전 브리핑 확인 필요 항목 후속**: Haidlmair Active Mould 구동 방식·정량치, HRSflow STARgate의 PMMA 광학 데이터, 우진플라임 Clean-Foam 적용 차종·부위, MATSUI Zeroteach-AMR 금형 중량·위치결정 정밀도는 이번 주 추가 공개가 없었다. ARBURG Standalone 로봇은 EUROMAP 67 로봇 인터페이스로 기존 설비에 통합된다는 보도([Plastics Technology, 2026-10-12](https://www.ptonline.com/products/arburg-debuts-standalone-robots-at-fakuma) [업계 분석])가 확인됐으나, OPC UA 기반 EUROMAP 77·79 지원 여부는 공식 자료로 확인되지 않았다.

**신규 없음으로 확인**: ARBURG, KraussMaffei, FANUC ROBOSHOT, 시바우라기계, 닛세이수지, TOYOイノベックス, 소딕, WITTMANN, Sepro, 유신정기, 하모, 가와타, 마쓰이, motan, Moretto, Piovan은 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. ENGEL, JSW, Sumitomo (SHI) Demag, LS엠트론, 우진플라임, Haitian, Husky, Kistler, HB-Therm과 소재사 다수는 공식 페이지 접근 실패와 검색 한도로 이번 주 확인하지 못했다.

## 로봇제조기술 상세

### 산업·협동로봇·로봇 SW

**[Comau] NVIDIA Jetson 탑재 차세대 로봇 컨트롤러·Isaac Sim 통합 — 컨트롤러 내 AI 연산과 강화학습 팔레타이징**

- 확인 내용: 2026-10-21 토리노 발표. 차세대 산업용 로봇 컨트롤러에 NVIDIA Jetson 엣지 컴퓨트를 결합해 AI 워크로드용 아키텍처를 구성한다. 산업용·협동(MyCo)·이동형 로봇 포트폴리오를 Isaac Sim에 통합하고 SimReady OpenUSD 자산을 공개 라이브러리에 제공한다. MI.RA 비전 계열은 Isaac Sim 물리, 이산사건 시뮬레이션(DES), Isaac Lab 학습으로 팔레타이징·디팔레타이징 제어 전략을 현장 투입 전에 강화학습한다.
- 관련 근거: [Comau 보도자료, 2026-10-21](https://www.comau.com/en/2026/10/21/comau-to-advance-physical-ai-for-industrial-robotics-with-nvidia/) [공식 발표]
- 기존 대비 변화: 외부 비전 PC에 두던 AI 연산을 컨트롤러로 옮기고, MI.RA는 인식 기능에서 시뮬레이션 학습 기반 제어 전략으로 확장됐다. KUKA(컨트롤러 내 GPU, 10-14 브리핑)와 같은 방향이다.
- 생산기술 시사점: 로봇 컨트롤러에 AI 추론 하드웨어가 기본 탑재되면 셀 구성에서 별도 비전 PC와 통신 계층이 줄어든다. 반면 AI 모델 버전 관리와 안전 컨트롤러 분리 구조를 셀 사양에 명시해야 한다.
- 적용 수준: 기술자료(출시 일정 미공개)
- 확인 필요: 컨트롤러 모델명·출시 시점, Jetson 등급, 안전 기능과의 분리 구조

**[NVIDIA] Isaac 플랫폼 확장 — SimReady Central(벤더 로봇 자산 2,000종 이상), Isaac Lab 3.0 정식 배포, Isaac OS, 레퍼런스 휴머노이드**

- 확인 내용: 2026-10-21 GTC Berlin. Hugging Face 기반 SimReady Central Library에 로봇·공장 시뮬레이션 자산 2,000종 이상을 올렸고 Comau·FANUC·Franka·Robotiq·Universal Robots·LG전자 등이 자산을 제공했다. Isaac Lab 3.0을 정식 배포(멀티 GPU, Newton·PhysX 물리엔진)하고, AI·센서·제어·로봇 하드웨어를 잇는 Holoscan 기반 오픈소스 런타임 Isaac OS를 공개했다. SICK는 고정 구역을 넘는 산업용 로봇 동적 안전에 Halos를 평가 중이다. 레퍼런스 휴머노이드 Agile ONE SN(Agile Robots)은 31자유도, 팔당 가반 3 kg, 손당 20자유도·1 kHz 힘제어 사양으로 2027년 초 연구기관 대상 공급 예정이다.
- 관련 근거: [NVIDIA Newsroom, 2026-10-21](https://nvidianews.nvidia.com/news/nvidia-advances-isaac-platform-for-general-purpose-robotics-with-new-reference-humanoid-frameworks-simulation-pipelines-and-data) [공식 발표]
- 기존 대비 변화: Isaac ROS 5.0(09-23 브리핑)이 ROS 인터페이스 정리였다면, 이번에는 벤더 로봇 자산 배포, 학습 프레임워크 정식화, 실기 런타임 계층을 한 스택으로 묶었다.
- 생산기술 시사점: 여러 제조사 로봇이 섞인 셀의 OLP·가상시운전에서 모델 준비 공수를 줄일 수 있다. 다만 SimReady 자산의 관절 한계·동특성이 제조사 OLP(ROBOGUIDE·RobotStudio 등) 수준과 맞는지 검증이 필요하고, Isaac OS는 로봇 안전·모션 루프와 별개 계층으로 보는 것이 타당하다.
- 적용 수준: 기술자료(Isaac Lab 3.0 정식 배포)
- 확인 필요: 제공 자산 기종 목록·동특성 포함 여부·라이선스, Isaac OS 지연 사양, Halos 동적 안전의 ISO 10218 연계 경로

**[Universal Robots / Sereact] Cortex VLA 양팔 시스템 — 단일 VLA 모델로 품목별 재학습 없이 다응용 처리, 유럽 현장 수백 대 가동**

- 확인 내용: 2026-10-21 공식 파트너십 발표. Sereact의 VLA 모델 Cortex가 UR 로봇을 구동하며, 양사는 UR 로봇 수백 대를 양팔 시스템으로 유럽 고객 현장에 출하했다. CEVA Logistics와 함께 Zalando 물류센터(독일 Greven, 폴란드 Świebodzin)에서 반품 의류를 자율 처리 중이다. 반품·보충·키팅을 같은 양산 모델 하나로 돌리며 품목·과업별 재학습이 없다고 밝혔고, 적용 후보에 머신텐딩·키팅을 포함했다. 셀 단 추론은 Jetson Thor에서 라인 속도로 수행한다.
- 관련 근거: [Universal Robots 뉴스센터, 2026-10-21](https://www.universal-robots.com/news-and-media/news-center/teradyne-robotics-and-sereact-partner-to-scale-physical-ai-solutions-for-retail-and-logistics/) [공식 발표]
- 기존 대비 변화: UR Gen 7(09-16 브리핑) 이후 표준 협동로봇 위에서 VLA 모델이 수백 대 규모로 실가동되는 단계가 확인됐다.
- 생산기술 시사점: 품목 변동이 큰 키팅·부품 피킹·머신텐딩에 "표준 협동로봇 + VLA" 조합이 후보가 된다. 다만 실가동은 물류 반품 처리이고 제조 공정의 위치 정밀도·사이클타임 충족은 검증되지 않았다. 모델 하나를 전 로봇이 공유·갱신하는 구조는 공정 변경관리(4M) 관점의 검증 절차를 함께 설계해야 한다.
- 적용 수준: 양산(물류), 제조 공정은 확인 필요. 분류는 신규 적용사례
- 확인 필요: 처리 속도·성공률, 실가동 대수, 제조 공정 적용 사례

**[Rockwell Automation] FactoryTalk Conductor — PLC 로직 작성·컨트롤러 에뮬레이션·Emulate3D 가상시운전을 다중 AI 에이전트로 연결**

- 확인 내용: 2026-10-21 발표. 자연어로 엔지니어링 작업을 시작하는 AI 오케스트레이션 플랫폼으로 Studio 5000 Logix Designer, Logix Echo(컨트롤러 에뮬레이션), Emulate3D, FactoryTalk Optix와 연동한다. 고객 자체 에이전트 추가와 로컬 오픈웨이트 LLM 선택이 가능하며 2027년 1분기 상용 예정이다.
- 관련 근거: [PR Newswire (Rockwell Automation), 2026-10-21](https://www.prnewswire.com/news-releases/rockwell-automation-introduces-factorytalk-conductor-an-ai-native-orchestration-platform-for-industrial-automation-302914710.html) [공식 발표]
- 기존 대비 변화: 단일 작업 보조형 코파일럿에서 로직 작성 → 에뮬레이션 → 3D 가상시운전을 잇는 다중 에이전트 워크플로로 넓어졌다.
- 생산기술 시사점: 로봇 셀 시운전 전 PLC·HMI·가상시운전 모델 작성 리드타임을 줄일 수 있으나, 로봇 벤더 OLP 연계 범위는 공개되지 않아 로봇–PLC 인터페이스 검증은 별도 공정으로 남는다.
- 적용 수준: 기술자료(프리뷰)
- 확인 필요: 타사 로봇 컨트롤러·OLP 연계, AI 생성 로직의 검증·이력 관리 방식

**[HD현대로보틱스] 지능형 양팔로봇 — 팔당 7 kg·작업반경 630 mm, 5지 핸드와 자체 로봇 파운데이션 모델(RFM)**

- 확인 내용: 2026-10-21 대구 FIX 2026에서 첫 공개했고 같은 날 FABTECH 2026에서도 북미 고객에 소개했다. 상반신형으로 양팔 각각 가반 7 kg·작업반경 630 mm, 5지 핸드를 갖췄다. 자체 RFM이 환경을 인식해 동작을 생성해 작업 순서·위치 입력 부담을 줄인다고 밝혔다. 에이딘로보틱스와 힘·촉각 센서를 고도화하고, 이동부는 바퀴형 플랫폼 후 이족보행으로 확장한다. 적용은 부품 묶음·조립 공정부터 시작해 용접·도장으로 넓힌다.
- 관련 근거: [더퍼블릭 (한국어), 2026-10-21](https://www.thepublic.kr/news/articleView.html?idxno=323201) [2차 인용] / [서울경제 영문, 2026-10-21](https://en.sedaily.com/finance/2026/10/21/hd-hyundai-robotics-unveils-dual-arm-robot-with-10-fingers) [2차 인용]
- 기존 대비 변화: 6축 산업용 로봇·HDC 협동로봇·용접 솔루션 중심 라인업에 양팔·다지 핸드·RFM 플랫폼이 추가됐다.
- 생산기술 시사점: 7 kg급은 소형 부품 취급 범위로, 와이어 하니스 묶음·커넥터 체결처럼 6축 로봇과 전용 그리퍼로 자동화하기 어려웠던 양손 작업이 대상이다. 힘·촉각 데이터로 삽입·체결 성공 여부를 판정할 수 있는지가 관건이다.
- 적용 수준: 전시 데모(개발 단계)
- 확인 필요: 팔당 자유도, 반복정밀도, 핸드 자유도·파지력, RFM 학습 방식, 상용화 일정, 회사 공식 자료

**[SAP] Physical AI — ERP·창고관리(EWM) 트랜잭션이 로봇 미션을 직접 발행하고 결과를 회수**

- 확인 내용: 2026-10-27 SAP TechEd 발표. ERP·EWM 트랜잭션이 로봇·물리 작업을 직접 트리거하고 결과를 구조화 데이터로 회수하는 하드웨어 중립 구조로, 감사 추적과 human-in-the-loop를 기본으로 한다. Foxconn(EWM 작업이 휴머노이드·자율 운송 장비 지휘), Arçelik-LG(휴머노이드 입고 적치), Intel 청두(이송 작업의 로봇 미션 변환 PoC) 사례를 제시했다.
- 관련 근거: [SAP News Center, 2026-10-27](https://news.sap.com/2026/10/sap-unveils-physical-ai-extends-autonomous-enterprise-real-world-sap-teched/) [공식 발표]
- 기존 대비 변화: ERP → WCS·MES → 플릿 매니저를 단계별로 통합하던 구조에서 ERP가 업무 맥락을 붙여 미션을 직접 발행한다. 같은 주 Rockwell(OT 엔지니어링)에 이어 ERP 계층도 로봇 지시 계층으로 들어왔다.
- 생산기술 시사점: 입고·적치·라인 공급 이송의 로봇 실행 결과가 재고·품질 기록에 바로 남아 추적성에 유리하다. 미션 발행 주체가 상위로 올라가는 만큼 플릿 매니저·안전 계층과의 책임 경계를 먼저 정해야 한다.
- 적용 수준: 파일럿(고객 사례)
- 확인 필요: VDA 5050 등 인터페이스 표준 지원, 출시 형태, 조립 공정 적용 여부

### 휴머노이드

**[ROKAE / Schaeffler] 휴머노이드 힘제어 암 누적 1만 대 — Schaeffler 타이창 라인 투입 기종은 Helios 5대로 확인**

- 확인 내용: 2026-10-26 발표. 1만 번째 휴머노이드 힘제어 암이 9월 산둥 생산기지에서 출하됐다(산업용·협동로봇 제외 집계). Schaeffler 타이창 등대공장의 휴머노이드 부품 조립라인에 AR 시리즈 암을 단 휠형 휴머노이드 Helios 5대가 부품 핸들링·조립·검사를 맡고 있다. AR 시리즈는 전 관절 힘제어이며, MAC 제어기(213 × 145.5 × 45 mm) 1대로 단팔 7축·양팔 14축·휴머노이드 20축 이상을 제어한다. 80개 이상 산업 파트너가 생산 용도에 통합했다(회사 수치).
- 관련 근거: [PR Newswire (ROKAE), 2026-10-26](https://www.prnewswire.com/news-releases/rokae-delivers-its-10-000th-humanoid-force-controlled-arm-302918206.html) [공식 발표]
- 기존 대비 변화: 10-21 브리핑에서 미확인이던 타이창 휴머노이드의 기종·공급사가 확인됐다. Schaeffler 측 발표(6대·5개 스테이션)와의 1대 차이는 설명되지 않았다.
- 생산기술 시사점: 상체(암+제어기)를 표준 모듈로 조달해 휠형 이동체에 얹는 구성이 조립·검사 공정에 실적용된 사례다. 제어기 1대로 20축 이상을 묶으면 셀 배선과 제어반 공간이 줄어든다.
- 적용 수준: 양산(암 공급), 타이창 라인 운용 중(성과 지표 미공개). 분류는 신규 적용사례
- 확인 필요: 가반하중·반복정밀도, 타이창 라인 사이클타임·개입 빈도

**[Schaeffler] 액추에이터 디지털 트윈의 Newton 물리엔진 기본 탑재, Wandelbots NOVA 전사 로봇 앱 플랫폼 채택**

- 확인 내용: 10-21 발표로 Schaeffler 액추에이터 모델이 Isaac Lab·Sim용 오픈소스 물리엔진 Newton의 기본 구성요소로 들어간다. 휴머노이드 1대에 손을 빼고 약 26개 액추에이터가 들어간다고 밝혔으며, 고충실도 모델로 현장 훈련을 최소화한 "제로샷 배치"를 목표로 한다. 10-22에는 Wandelbots NOVA를 산업용·휴머노이드 로봇 공용 앱 플랫폼으로 공동 개발해 전 공장에 표준화하겠다고 발표했다. 이기종 로봇 연결, Omniverse·Isaac Sim 가상 검증, 검증된 앱을 다른 공장으로 옮기는 스킬 스토어가 골자이며 자동화 수명주기 비용 최대 40% 절감을 주장했다.
- 관련 근거: [Schaeffler 보도자료, 2026-10-21](https://www.schaeffler.com/en/media/press-releases/press-releases-detail.jsp?id=88222912) [공식 발표] / [Schaeffler 보도자료, 2026-10-22](https://www.schaeffler.com/en/media/press-releases/press-releases-detail.jsp?id=88223233) [공식 발표]
- 기존 대비 변화: 시뮬레이터의 액추에이터 기본 모델이 범용 모델에서 양산 액추에이터 제조사 모델로 바뀐다. 10-21 브리핑의 타이창 디지털 트윈·액추에이터 양산의 후속이다.
- 생산기술 시사점: 실제 구동부 특성이 시뮬레이션에 반영되면 학습 정책의 현장 이전 편차와 라인 투입 전 검증 기간이 줄 수 있다. 벤더 중립 앱 계층(NOVA)은 공장 간 로봇 응용 재사용의 기준이 되지만, 타사 액추에이터·로봇에서의 정합성은 별도 확인이 필요하다.
- 적용 수준: 기술자료
- 확인 필요: 제공 모델 종류(회전·선형), 실측 대비 오차 지표, NOVA 적용 공장·로봇 기종

**[Tesla] Optimus — 프리몬트 대량생산 라인에서 생산 품질 로봇 출하, 공시 설비능력표에 "Early Ramp" 등재**

- 확인 내용: 10-21(미국 현지) 3분기 실적 자료의 설비능력표에 Robotics 항목을 두고 California Optimus를 "Early Ramp", Texas를 "Construction"으로 표기했다(용량 수치 없음). 프리몬트 대량생산 라인에서 생산을 시작했고 이 라인 출하분을 첫 생산 품질 로봇으로 규정했다. 실적 통화를 정리한 보도에 따르면 연 100만 대 기준 라인 설비 대부분이 설치됐고, 주 2만 대 도달까지 최소 1년이 걸리며, 손 설계가 확정되지 않은 상태로 공급망·제조·AI를 병행 개발 중이고 외부 고객 인도는 2027년 말로 전망했다.
- 관련 근거: [Tesla Q3 2026 Update (SEC 8-K Exhibit 99.1), 2026-10-21](https://www.sec.gov/Archives/edgar/data/0001318605/000162828026066738/exhibit9914.htm) [공식 발표] / [Humanoids Daily, 2026-10-22](https://www.humanoidsdaily.com/news/tesla-q3-2026-optimus-production-fremont-2027-deliveries) [업계 분석]
- 기존 대비 변화: 라인 전환·설비 설치 단계에서 생산 품질 로봇 출하 단계로 넘어갔고, 생산 개시가 공식 공시에 처음 반영됐다.
- 생산기술 시사점: 차량 라인을 전환한 휴머노이드 라인의 증산 속도는 가장 준비가 늦은 부품·공정에 묶인다. 손 설계가 확정되지 않은 초기 출하분은 사양 변경·개조 가능성을 전제로 봐야 하며, 외부 현장 적용은 2027년 말 이후다.
- 적용 수준: 양산(로봇 생산 초기 증산 단계), 외부 현장 적용 전
- 확인 필요: 주간 생산량·누적 대수, 생산 기종 세대, 사내 투입 공정

**[Boston Dynamics / 현대모비스] Atlas 부품 공급사 확정·1만 대분 준비 요청 보도 — 공식 미확인**

- 확인 내용(보도 기준): 10-26 공급사에 개별 통보하고 2027년 말까지 1만 대분 부품 준비를 요청했다. 관절 액추에이터(31개)·손 그리퍼는 현대모비스, 카메라 모듈·배터리셀·충전·구조부품은 국내 부품사에 배정됐고, 액추에이터가 부품 원가의 약 70%라고 보도됐다. 첫 구매주문 시점은 보도마다 다르다.
- 관련 근거: [한국경제 (한국어), 2026-10-27](https://www.hankyung.com/article/2026102787761) [2차 인용] / [한국경제 (한국어), 2026-10-27](https://www.hankyung.com/article/2026102786921) [2차 인용] / [Humanoids Daily, 2026-10-27](https://www.humanoidsdaily.com/news/boston-dynamics-atlas-korean-suppliers-10000-preparations) [2차 인용]
- 기존 대비 변화: 공급 구성이 액추에이터를 넘어 그리퍼·카메라·셀·구조부품까지 처음 보도됐다. 공식 확인은 없다.
- 생산기술 시사점: 휴머노이드 BOM이 자동차 전동화·전장 부품 공급망으로 옮겨가며, 원가 비중이 큰 액추에이터의 모터·감속기·제어기 공정이 차량 전동화 부품 공정과 겹친다.
- 적용 수준: 확인 필요
- 확인 필요: Boston Dynamics·현대모비스 공식 확인, 구매주문 시점, 손 자유도·센서 구성

### AMR·라인사이드 물류

**[DENSO / 도요타자동직기(豊田自動織機)] 자동차 부품 공장 트럭 상하차 자동화 — 자율 지게차와 인프라 LiDAR 연동**

- 확인 내용: 인버터를 생산하는 덴소 안조제작소 204공장에서 트럭 상하차 자동화를 시작했다. 도요타자동직기의 상하차용 자율 지게차 Rinova Autonomous와 덴소 고정밀 LiDAR LiDsEYE를 연동해 지게차 주변을 넘어 트럭 야드 전체의 사람·장애물을 검지한다. LiDsEYE로 화물 위치·크기를 인식하는 기술을 검증 중이며, 현재 지게차 카메라로 생성하는 상하차 경로에 LiDAR 정보를 연계할 계획이다.
- 관련 근거: [MONOist (일본어), 2026-10-26](https://monoist.itmedia.co.jp/mn/articles/2610/26/news056.html) [업계 분석] (덴소 원문 미열람)
- 기존 대비 변화: 지게차 단독 안전기능에서 인프라 센서와 연계한 야드 단위 안전으로 넓어졌고, 화물 인식을 차량 밖 센서로 보완한다.
- 생산기술 시사점: 부품 공장 물류에서 사람 손이 마지막까지 남는 구간인 트럭 상하차에 자율 지게차가 들어간 사례다. 출하장 레이아웃과 인프라 센서 배치를 함께 설계해야 하며, 다양한 화물 형태 대응은 현장에서 운영 노하우를 쌓는 단계다.
- 적용 수준: 파일럿(현장 도입 개시). 분류는 신규 적용사례
- 확인 필요: 투입 대수·처리량, 대응 트럭·팔레트 규격, 사람 작업 구역과의 분리 방식

**[BMW Group / Embotech] 공장 내 자동주행 누적 100만 대 — 일 3,500대 이동, 가용률 99.5% 이상**

- 확인 내용: 10-27 발표. 4개 공장(Dingolfing, Leipzig, Regensburg, MINI Oxford)에서 24시간 운영하며 일 약 3,500대를 자동 이동시키고 가용률 99.5% 이상을 기록했다. Embotech의 인지·예측·계획 AI 소프트웨어와 별도의 결정론적 안전 아키텍처(TÜV SÜD 독립 인증)가 안전 경계를 정의·강제한다. 2022년 파일럿으로 시작해 첫 50만 대에 15개월, 다음 50만 대에 7개월이 걸렸고, BMW는 전 세계 확대 방침을 밝혔다. Oxford는 차량을 리프팅 장치 옆에 정위치시키는 등 설비와의 상호작용을 기존 제어 시스템에 연결한 첫 거점이다.
- 관련 근거: [Embotech 보도자료(EIN Presswire), 2026-10-27](https://www.einpresswire.com/article/952426215/one-million-vehicles-moved-using-automated-driving-technology-bmw-group-and-embotech-reach-production-milestone) [공식 발표] / [BMW Group 보도자료(WebWire), 2026-10-27](https://www.webwire.com/ViewPressRel.asp?aId=363407) [공식 발표]
- 기존 대비 변화: 단순 이동에서 공정 설비와의 자동 연동으로 범위가 넓어졌고, 누적 속도가 2배 이상 빨라졌다.
- 생산기술 시사점: AI 판단 계층과 인증된 결정론적 안전 계층을 분리한 구조는 공장 내 자율 이동체 전반의 안전 설계 참고 모델이 된다. 출하·검사 구역의 레이아웃과 인프라 센서를 함께 설계해야 하는 점도 확인됐다.
- 적용 수준: 양산. 분류는 기존기술 적용 확대
- 확인 필요: 공장당 센서 구성·투자비, 인력 대비 효과, 장애 시 복구 절차

**[Hikrobot(海康机器人)] 박스 저장·피킹 운영모델 재구성과 서버리스 AMR '명지(明智)' 시리즈**

- 확인 내용: 10-23 발표. 통로 안 운반은 레일형 토트 로봇 STU가, 통로 입구 인계만 잠입형 AMR T50이 맡도록 분업을 바꿨고, T50을 30% 줄인 조건에서 작업 완료율이 100%에서 123.5%로 올랐다고 밝혔다(회사 수치). 원호 레일로 인접 통로를 잇는 교차통로 STU도 공개했다. 서버리스 AMR 명지 시리즈(잠입형 300 kg, 포크형 1,500 kg)는 현장 개조 없이 최단 30분 만에 투입하고 중앙 관제 없이 분산 협조로 교행한다.
- 관련 근거: [雷峰网 (중국어), 2026-10-23](https://www.leiphone.com/category/robot/h4vGHMyQ6b8drzy6.html) [업계 분석] / [新浪科技 (중국어), 2026-10-24](https://finance.sina.com.cn/tech/roll/2026-10-24/doc-iniwhtfu4945419.shtml) [업계 분석]
- 기존 대비 변화: 장비 성능이 아니라 분업·레일 구조로 대수 대비 처리량을 올렸고, 중앙 서버 필수 구조에 소규모 단독 도입 옵션이 추가됐다.
- 생산기술 시사점: 부품 창고·라인 공급용 토트 자동창고에서 반송 AMR 대수를 줄이는 설계 대안이다. 서버리스 AMR을 기존 관제와 혼용할 경우 교통 관리 주체를 먼저 정해야 한다.
- 적용 수준: 제품 출시(성능 수치는 회사 제시)
- 확인 필요: 123.5% 산출 조건, 교차통로 STU 출시 시점, VDA 5050 등 타사 관제 연동

**[DMG MORI] GX Flex 갠트리 로더·AMR 2000 — 그리퍼 헤드 자동교환과 공구·칩 버킷 AMR 반송 연계 무인 셀**

- 확인 내용: 10-23 발표된 GX Flex는 공작기계 상부를 반송 경로로 쓰는 갠트리 로더로, 그리퍼 헤드 자동 교환으로 공작물·척 조·절삭공구를 한 시스템에서 교환한다(최대 공작물 길이 750 mm, 지름 300 mm, 40 kg). JIMTOF에서는 AMR 2000이 조립된 공구를 GX Flex 매거진에 보충하고 칩 버킷·마모 공구를 회수하는 무인 셀을 시연했다.
- 관련 근거: [MONOist (일본어), 2026-10-26](https://monoist.itmedia.co.jp/mn/articles/2610/26/news024.html) [업계 분석] / [MONOist JIMTOF 현장 (일본어), 2026-10-28](https://monoist.itmedia.co.jp/mn/articles/2610/28/news042.html) [업계 분석]
- 기존 대비 변화: 동일 공작물 반복 반송용 갠트리 로더가 품종 교체 셋업까지 맡고, 공구·칩 부대 물류가 AMR로 연결됐다.
- 생산기술 시사점: 다품종 셀 무인 운전의 제약이던 공구 보충·칩 배출이 자동화 대상이 됐다. 라인사이드 물류 범위가 공작물에서 소모품·부산물로 넓어지며, 금형 가공 셀의 야간 무인 운전 범위 산정에도 같은 기준이 적용된다.
- 적용 수준: 전시 데모
- 확인 필요: 출시 시점, AMR 2000 가반하중·안전 사양, AMR–로더 통신 방식

### EOAT·그리퍼·툴체인저

이번 주 신규 기술 변화 없음. SCHUNK·OnRobot·Robotiq 공식 채널을 직접 확인했으나 기간 내 신제품 발표가 없었다.

**신규 없음으로 확인**: FANUC(America 보도자료 최신 10-19, JIMTOF 출품은 기존 기종·기발표 기능 중심), Yaskawa, 두산로보틱스, Kawasaki, Boston Dynamics(공식 채널 기준), Figure(뉴스룸 기준), Apptronik, MiR, OMRON, Locus Robotics, AutoStore는 기간 내 신규 기술 발표가 없었다. Nachi, DENSO Wave, Epson, Stäubli, Techman, 한화로보틱스, 뉴로메카, 레인보우로보틱스, EOAT 전업 벤더(Zimmer·Piab·Festo·SMC), Geek+·Unitree 등은 검색 한도로 이번 주 확인하지 못했다.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출에서 금형 일정 병목(EDM 전극·벤칭)을 적층 H13 인서트와 표준 베이스 병렬 제작으로 우회, 저탄소 소재는 화학적으로 동일한 원료 치환(탄소포집 POM)으로 재검증 생략 | 금형 리드타임과 소재 승인 기간을 줄이는 수단이 성형조건이 아니라 제작 방식·원료 경로에서 나옴 |
| 기술 변화 | 가상시운전 범위가 동작·사이클 검증에서 인식·합성데이터·AI 학습으로 확장(ABB HyperReality 배포, Comau·NVIDIA SimReady), 컨트롤러 내 AI 연산 탑재 확산(Comau Jetson) | 비전 셀 시운전 리스크가 가상 단계로 이동하고, 벤더 시뮬레이션 자산 제공 여부가 셀 엔지니어링 공수를 좌우 |
| 기술 변화 | 공작기계(CNC)가 로봇 연계의 주체가 되는 구조(미쓰비시전기), 휴머노이드 안전 기능에 AI 인지 모델 편입·제3자 인증 경로(Agility·NVIDIA Halos) | 머신텐딩 인터페이스 표준화와 사람 근접 작업 안전 인증 기준이 동시에 쟁점화 |
| 업체 변화 | 로봇 지시 계층이 OT 엔지니어링(Rockwell)과 ERP(SAP)까지 확대, Schaeffler는 액추에이터 모델을 시뮬레이터 기본 구성요소로 공급 | 로봇 미션 발행 계층과 책임 경계 설정이 시스템 설계 과제로 부상 |
| 업체 변화 | 휴머노이드 핵심 부품 양산 진척(ROKAE 힘제어 암 누적 1만 대, Tesla Optimus 초기 증산, Atlas 공급망 자동차 부품사 중심 배정 보도) | 액추에이터·힘제어 암 공급망이 자동차 전동화 부품 공급망과 겹침 |
| 적용사례 변화 | BMW 공장 내 자동주행 100만 대(양산), DENSO 부품 공장 트럭 상하차 자율 지게차(파일럿), UR·Sereact VLA 양팔 수백 대(물류 양산), Agility 제조 고객 3곳(유료 파일럿) | 공장 물류 자동화가 출하·상하차 구간으로 확대되고, VLA는 물류에서 먼저 실가동 |
| 확인 필요 | Shibaura LWB MultiStation 실연 수치, HD현대로보틱스 양팔로봇 공식 사양, Atlas 공급망 공식 확인, HyperReality 99% 산출 기준, ENGEL·JSW·Sumitomo Demag·LS엠트론·우진플라임 공식 발표(금주 미확인) | 다음 조사에서 공식 자료 확보 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | JIMTOF 2026 폐막(10-31) 후 보도 | 로봇·머신텐딩 | 미쓰비시전기 데모 휴머노이드 기종·연계 규격, DMG MORI GX Flex 출시 시점 |
| 2 | 로보월드 2026(11-04 – 11-07 예정, KINTEX) | 협동로봇·휴머노이드 | HD현대로보틱스 양팔로봇 공식 사양, 국내 협동로봇·AMR 신제품 |
| 3 | SPE 자동차혁신상 시상(11-04) | 사출·소재 | 탄소포집 POM 등 결선작 결과와 추가 사양 |
| 4 | Shibaura Machine LWB MultiStation 실연 사후 보도 | 사출(엘라스토머) | 스테이션 수·사이클·가동률 정량치 |
| 5 | IPF Japan 2026(12-01 – 12-05) 사전 공개 | 사출기·취출로봇 | 시바우라기계 재생재 성형조건 자동보정, 소딕 분쇄재 직접 투입, 하모 신형 대형 취출로봇 사양 |
| 6 | CeMAT Asia 2026(11-03 – 11-06) | AMR | Hikrobot 교차통로 STU 출시 시점·타사 관제 연동 |
| 7 | Boston Dynamics·현대모비스 공식 발표 | 휴머노이드 | Atlas 부품 공급 구성·물량 공식 확인 |
| 8 | Formnext 2026(11-17 개막) | 금형(적층) | 적층 인서트·컨포멀 쿨링의 내구·사이클 데이터 |

## 출처

### 사출성형기술

- [MoldMaking Technology, Hybrid EV Bridge Mold Cuts Estimated Lead Time by Approximately 30%, 2026-10-26](https://www.moldmakingtechnology.com/articles/hybrid-ev-bridge-mold-cuts-estimated-lead-time-by-approximately-30)
- [Plastics Machinery & Manufacturing, Racing to the Finish Line at Elite Mold, 2026-03-05](https://digitaledition.plasticsmachinerymagazine.com/articles/racing-to-the-finish-line-at-elite-mold)
- [Plastics Today, SPE Names Three Sustainability Finalists for Automotive Awards, 2026-10-22](https://www.plasticstoday.com/automotive-mobility/spe-names-three-sustainability-finalists-for-automotive-awards)
- [StockTitan(Celanese 보도자료 재게재), Aisan Adopts Celanese POM ECO-C for Fuel Pump Modules, 2026-06-08](https://stocktitan.net/news/CE/aisan-adopts-celanese-pom-eco-c-for-fuel-pump-modules-supplied-to-a-0n2gmmjfzbo5.html)
- [Mold-Masters, Mold-Masters Strengthens Middle East Support, 2026-10-22](https://www.moldmasters.com/news-and-events/strengthens-middle-east-support)
- [Plastech, Mold-Masters Expands Service Support in Saudi Arabia, 2026-10-23](https://www.plastech.pl/en/news/mold-masters-expands-service-support-in-saudi-arabia-22946)
- [ETMM, Next-Level Molding Days at Shibaura Machine LWB 2026, 2026-08-17](https://www.etmm-online.com/next-level-molding-days-shibaura-machine-lwb-2026-a-dc0fd9a226e53f8ab08f623bc5e4017d/)
- [Rubber World, Shibaura Machine LWB Next-Level Molding Days, 2026-08-18](https://rubberworld.com/?p=53670)
- [PolyForm NEXT, Koch-Technik at Fakuma 2026, 2026-10-26](https://www.polyformnext.de/drying--conveying--dosing/cooking-technology-at-fakuma-2026-material-processing-with-greater-control.htm)
- [PolyForm NEXT, Mixing, Dosing, Conveying and Drying, 2026-10-07](https://www.polyformnext.de/drying--conveying--dosing/mixing--dosing--conveying--and-drying-what-happens-before-the-machine-makes-all-the-difference.htm)
- [Moretto, Smart Solutions for the Plastics Industry at Fakuma, 2026-09-10](https://www.moretto.com/en/news/2026/09/smart-solutions-for-the-plastics-industry-moretto-expertise-at-fakuma)
- [Plastics Technology, Arburg Debuts Standalone Robots at Fakuma, 2026-10-12](https://www.ptonline.com/products/arburg-debuts-standalone-robots-at-fakuma)
- [芝浦機械 (일본어), IPF JAPAN 2026 出展案内, 2026-09-08](https://www.shibaura-machine.co.jp/jp/NEWS/event/20261201.html)
- [ソディック (일본어), IPF JAPAN 2026 특설 페이지, 게시일 미표기](https://www.sodick.co.jp/feature/ipf2026/)
- [ハーモ (일본어), 신형 대형 취출로봇 웨비나 공지, 2026-09-28](https://www.injection-molding.jp/seminar/20261028)

### 로봇제조기술

- [三菱電機 (일본어), 業界初、ヒューマノイドとCNC工作機械が連携する加工システムを開発, 2026-10-21](https://www.mitsubishielectric.co.jp/ja/pr/2026/1021_rd/)
- [MONOist (일본어), 미쓰비시전기 휴머노이드–CNC 연계 가공 시스템, 2026-10-22](https://monoist.itmedia.co.jp/mn/articles/2610/21/news073.html)
- [MONOist (일본어), JIMTOF 2026 현장 보도, 2026-10-27](https://monoist.itmedia.co.jp/mn/articles/2610/27/news041.html)
- [ABB, ABB Robotics Sets Out Blueprint for Physical AI Education at NVIDIA GTC Berlin, 게시일 미표기(GTC Berlin 10-21)](https://www.abb.com/global/en/news/139691/prsrl-abb-robotics-sets-out-blueprint-for-physical-ai-education-at-nvidia-gtc-berlin)
- [ABB, RobotStudio HyperReality 제품 페이지, 2026-10-28 확인](https://www.abb.com/global/en/areas/robotics/innovation/robotstudio-hyperreality)
- [ENGtechnica, ABB Robotics and NVIDIA Plan Physical AI Training Program, 2026-10-23](https://engtechnica.com/abb-robotics-nvidia-plan-physical-ai-training-program/)
- [Agility Robotics, Expands NVIDIA Collaboration as It Prepares Digit 5 for Commercial Scale, 2026-10-22](https://www.agilityrobotics.com/content/agility-robotics-expands-nvidia-collaboration-as-it-prepares-digit-5-for-commercial-scale)
- [Comau, Comau to Advance Physical AI for Industrial Robotics with NVIDIA, 2026-10-21](https://www.comau.com/en/2026/10/21/comau-to-advance-physical-ai-for-industrial-robotics-with-nvidia/)
- [NVIDIA Newsroom, NVIDIA Advances Isaac Platform for General-Purpose Robotics, 2026-10-21](https://nvidianews.nvidia.com/news/nvidia-advances-isaac-platform-for-general-purpose-robotics-with-new-reference-humanoid-frameworks-simulation-pipelines-and-data)
- [Universal Robots, Teradyne Robotics and Sereact Partner to Scale Physical AI Solutions, 2026-10-21](https://www.universal-robots.com/news-and-media/news-center/teradyne-robotics-and-sereact-partner-to-scale-physical-ai-solutions-for-retail-and-logistics/)
- [PR Newswire(Rockwell Automation), FactoryTalk Conductor, 2026-10-21](https://www.prnewswire.com/news-releases/rockwell-automation-introduces-factorytalk-conductor-an-ai-native-orchestration-platform-for-industrial-automation-302914710.html)
- [더퍼블릭 (한국어), HD현대로보틱스 지능형 양팔로봇 공개, 2026-10-21](https://www.thepublic.kr/news/articleView.html?idxno=323201)
- [서울경제 영문, HD Hyundai Robotics Unveils Dual-Arm Robot with 10 Fingers, 2026-10-21](https://en.sedaily.com/finance/2026/10/21/hd-hyundai-robotics-unveils-dual-arm-robot-with-10-fingers)
- [SAP News Center, SAP Unveils Physical AI, 2026-10-27](https://news.sap.com/2026/10/sap-unveils-physical-ai-extends-autonomous-enterprise-real-world-sap-teched/)
- [PR Newswire(ROKAE), ROKAE Delivers Its 10,000th Humanoid Force-Controlled Arm, 2026-10-26](https://www.prnewswire.com/news-releases/rokae-delivers-its-10-000th-humanoid-force-controlled-arm-302918206.html)
- [Schaeffler, 휴머노이드 액추에이터 디지털 트윈·NVIDIA 협력, 2026-10-21](https://www.schaeffler.com/en/media/press-releases/press-releases-detail.jsp?id=88222912)
- [Schaeffler, Wandelbots NOVA 전사 플랫폼 채택, 2026-10-22](https://www.schaeffler.com/en/media/press-releases/press-releases-detail.jsp?id=88223233)
- [Agility Robotics, Highlights Commercial Momentum and Growing Enterprise Demand, 2026-10-26](https://www.agilityrobotics.com/content/agility-robotics-highlights-commercial-momentum-and-growing-enterprise-demand-for-digit-humanoid-robot)
- [Tesla, Q3 2026 Update (SEC 8-K Exhibit 99.1), 2026-10-21](https://www.sec.gov/Archives/edgar/data/0001318605/000162828026066738/exhibit9914.htm)
- [Humanoids Daily, Tesla Q3 2026 Optimus Production in Fremont, 2026-10-22](https://www.humanoidsdaily.com/news/tesla-q3-2026-optimus-production-fremont-2027-deliveries)
- [한국경제 (한국어), 보스턴다이내믹스 아틀라스 부품 공급사 확정, 2026-10-27](https://www.hankyung.com/article/2026102787761)
- [한국경제 (한국어), 아틀라스 공급망 분석, 2026-10-27](https://www.hankyung.com/article/2026102786921)
- [Humanoids Daily, Boston Dynamics Taps Korean Suppliers for Atlas, 2026-10-27](https://www.humanoidsdaily.com/news/boston-dynamics-atlas-korean-suppliers-10000-preparations)
- [MONOist (일본어), 덴소·도요타자동직기 트럭 상하차 자동화, 2026-10-26](https://monoist.itmedia.co.jp/mn/articles/2610/26/news056.html)
- [EIN Presswire(Embotech), One Million Vehicles Moved Using Automated Driving Technology, 2026-10-27](https://www.einpresswire.com/article/952426215/one-million-vehicles-moved-using-automated-driving-technology-bmw-group-and-embotech-reach-production-milestone)
- [WebWire(BMW Group), Automated Driving In-Plant 보도자료, 2026-10-27](https://www.webwire.com/ViewPressRel.asp?aId=363407)
- [雷峰网 (중국어), 海康机器人2026移动机器人新品发布会, 2026-10-23](https://www.leiphone.com/category/robot/h4vGHMyQ6b8drzy6.html)
- [新浪科技 (중국어), 海康机器人 신제품 보도, 2026-10-24](https://finance.sina.com.cn/tech/roll/2026-10-24/doc-iniwhtfu4945419.shtml)
- [MONOist (일본어), DMG MORI GX Flex 발표, 2026-10-26](https://monoist.itmedia.co.jp/mn/articles/2610/26/news024.html)
- [MONOist (일본어), DMG MORI JIMTOF 2026 무인화 데모, 2026-10-28](https://monoist.itmedia.co.jp/mn/articles/2610/28/news042.html)
