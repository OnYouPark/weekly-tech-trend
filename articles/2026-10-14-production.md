---
title: 생산기술 신규기술 브리핑 - 2026년 10월 3주차
date: 2026-10-14
type: production
period: 2026년 10월 3주차
tags: [Fakuma, ARBURG, ROBOSHOT, Mold-Masters, 코어백사출, KUKA, AutoStore, 휴머노이드핸드]
summary: "사출은 Fakuma 2026 개막과 함께 신설된 Innovation Award가 핫러너·게이트 제어 쪽에 집중되고, Mold-Masters DeXa는 사이드게이트 제어 단위를 드롭에서 팁으로 내림. FANUC ROBOSHOT은 전 캐비티 압력 취득을 핫러너 밸런싱 시뮬레이션과 묶은 C세대 2기종을 공개하고, ARBURG는 취출로봇을 사출기 제어기에서 분리해 단독 판매로 전환. 로봇은 KUKA가 AI 비전을 로봇 컨트롤러 내부 GPU에서 실행하는 구성을 내놓고, Boston Dynamics는 Atlas 핸드를 13개 동일 액추에이터 4지 구조로 재설계"
---

# 생산기술 신규기술 브리핑 - 2026년 10월 3주차

> 2026-10-08 – 2026-10-14 사출성형·로봇제조 신규 기술 변화

이번 주 사출 축은 Fakuma 2026(2026-10-12 – 10-16, 프리드리히스하펜, 제30회) 개막일 발표에 집중됐다. 전시 사전 보도분(9월 – 10월 초)은 조사 기간 밖이거나 기보고분이어서 제외하고, 개막 이후 공개된 수상 결과·현장 발표·공식 전시 페이지만 반영했다. 로봇 축은 전시회 공백기로 신규 건수가 적었고, 제어기 내장 AI와 휴머노이드 하드웨어 설계 공개가 주를 이뤘다.

## 금주 핵심 요약

### 사출성형기술

#### FANUC ROBOSHOT S180C / S350C — 전 캐비티 압력 취득을 핫러너 밸런싱 시뮬레이션과 결합한 C세대 전동식 2기종

- 확인 내용: 공식 Fakuma 2026 캠페인 페이지(Hall 7, Stand A7-7304)에서 두 기종을 신규로 명시. S180C는 기술 사출 영역에서 전 캐비티 캐비티압력 모니터링과 시뮬레이션 기반 핫러너 밸런싱을 결합해 공정 안정성·스크랩 저감을 시연. S350C는 의료용 패키징 부품을 로봇 핸들링·카토닝과 연계한 완전 자동 셀에서 시연. LINK i2, MES 연계, EUROMAP 인터페이스, WebAPI를 묶은 디지털 제조 구성과 생성형 AI 음성 명령 기반 CRX 프로그래밍도 함께 전시.
- 관련 근거: [FANUC Europe, FANUC at FAKUMA 2026, 확인일 2026-10-14](https://www.fanuc.eu/eu-en/campaign/fanuc-fakuma-2026) [공식 발표]
- 기존 대비 변화: 기존 ROBOSHOT α-SiA 계열에 "C" 세대 기종이 추가됨. 대표 캐비티 몇 곳이 아닌 전 캐비티에서 압력 신호를 취득하고, 이를 밸런싱 시뮬레이션과 연계한 구성이 차이점.
- 생산기술 시사점: 전 캐비티 압력 취득은 고캐비티 금형에서 캐비티별 충전 불균형을 샷 단위로 판별할 수 있게 한다. 시뮬레이션 밸런싱과 묶이면 시험사출 단계의 게이트·온도 조정 반복 횟수를 줄이는 방향으로 작용한다.
- 확인 필요: 형체력·사출속도·사출압 등 기본 사양이 공식 페이지에 미게시. 전 캐비티 압력의 구현 방식(직접 센서 / 간접 추정), 밸런싱 시뮬레이션 엔진 제공 주체, 공식 출시·수주 개시 시점 미확인.

#### ARBURG 스탠드얼론 로봇·rControl — 취출로봇을 사출기 제어기에서 분리해 단독 제품으로 전환

- 확인 내용: Multilift Select 선형로봇(가반 4 – 16 kg)과 Yaskawa SCARA·6축 로봇을 사출기 없이 단독 구성으로 출시. 확장 제어반과 신규 모바일 조작 패널 rControl을 탑재해 사출기와 무관하게 프로그래밍·운전이 가능하며, UI는 GESTICA 머신 제어기와 동일. 기존 생산환경 연결은 EUROMAP 67 로봇 인터페이스로 처리. 타사 사출기 적용 가능을 명시했고, 우선 유럽 고객 대상 공급. Fakuma에서는 사출기 전단의 독립 셀에서 복수 로봇이 부품 준비·조립·포장을 수행하는 구성을 시연. ARBURG는 이번 전시에서 신규 사출기를 발표하지 않고 자동화·디지털을 전면에 세웠다.
- 관련 근거: [K-Zeitung(독일어), 2026-10-09](https://k-zeitung.de/standalone-roboter-arburg-macht-automation-eigenstaendig) [공식 발표] / [Plastics Machinery Manufacturing, 2026-10-13](https://www.plasticsmachinerymanufacturing.com/injection-molding/news/55411204/arburg-touts-smart-factory-automation-at-fakuma-2026) [공식 발표]
- 기존 대비 변화: 기존 Multilift는 사출기 제어기 종속 구성이 전제였다. 로봇 측 제어·조작계가 독립하면서 로봇 단독 증설, 노후 사출기 레트로핏, 후공정 전용 셀 구성이 가능해졌다.
- 생산기술 시사점: 사출기 메이커의 로봇이 자사 설비 밖으로 나오면서 구형 사출기와 신규 자동화가 혼재한 라인의 선택지가 늘어난다. 조작계가 머신 제어기 UI와 동일해 작업자 교육 부하가 낮다. 반대로 셀 안전·CE 책임 분계가 로봇 공급사 쪽으로 이동하므로 발주 사양서에서 안전 범위 명시가 필요하다.
- 확인 필요: rControl 사양(화면 크기, 안전 등급, 다중 로봇 동시 제어 축수), 유럽 외 공급 시점, 가격 체계 미공개.

### 로봇제조기술

#### KUKA iiQKA.AI Vision — AI 비전을 외부 PC가 아닌 로봇 컨트롤러 내부 GPU에서 실행

- 확인 내용: 2026-10-08 공개. 2D·3D 물체 인식, 자세 산출, 파지점 계산을 수행하며 빈피킹·조립·품질검사·디팰레타이징에 적용. 소프트웨어가 로봇 컨트롤러 내부의 KUKA AI Extension 플랫폼(NVIDIA Jetson Orin 모듈 기반)에서 엣지 애플리케이션으로 직접 구동되어 외부 산업용 PC나 클라우드 연결이 필요 없고, 영상·점군 데이터는 로컬에서 처리·저장된다. 설정은 엔지니어링 환경 iiQWorks의 GUI에서 드래그앤드롭·템플릿·가이드 워크플로로 수행. 첫 시연은 2026-10-20 – 22 NVIDIA GTC Berlin 예정.
- 관련 근거: [Automationspraxis(독일어), 2026-10-08](https://automationspraxis.industrie.de/ki/kuka-integriert-ki-vision-direkt-in-die-robotersteuerung) [공식 발표]
- 기존 대비 변화: 기존 로봇 비전은 별도 비전 컨트롤러·산업용 PC와 로봇 컨트롤러 간 인터페이스 구성이 전제였다. 이 계층을 컨트롤러 내 GPU 모듈로 흡수했다. 2025년 iiQKA.OS2 출시 당시 옵션이던 NVIDIA 기반 확장 보드가 실제 비전 애플리케이션으로 구체화된 단계.
- 생산기술 시사점: 비전 셀은 로봇 메이커·비전 메이커·통합업체 3자 인터페이스가 트러블슈팅 비용의 상당 부분을 차지한다. 컨트롤러 통합형은 구성 품목과 네트워크 구간을 줄이고, 비전 전담 인력 없이 템플릿 기반으로 빈피킹 적용을 시도할 여지를 준다. 다만 비전 알고리즘이 로봇 메이커 생태계에 종속되므로 혼재 로봇 라인에서는 비전 표준 이원화 부담을 함께 봐야 한다.
- 확인 필요: 처리 주기, 인식 정확도·반복도, 지원 카메라 범위, 판매 개시일, 기존 KR C5 계열 소급 적용 가능 여부 모두 미공개.

#### Boston Dynamics Atlas 신형 핸드 — 4지 13자유도, 13개 동일 액추에이터·케이블 비경유 구조

- 확인 내용: 새끼손가락을 제거한 4지 13 DoF 직접구동 핸드. 13개 액추에이터를 모두 동일 사양으로 통일하고 전량 캡슐화했으며 관절을 가로지르는 케이블이 없다. 기존 핸드가 약 45 kg 이상을 들어올릴 수 있어 강도는 오히려 낮추고 액추에이터 백드라이버빌리티를 개선했다. 설계 요구는 엄지 지문면의 손가락 길이방향 슬라이딩, 엄지의 손가락 가로지름 슬라이딩, 정밀 핀치 시 엄지-검지 롤링, 트리거형 공구 손잡이 파워그립 4개 동작으로 정의. 시험 과제는 전동공구 사용, 케이블 취급, 나사 집기 등. 현재 본사 내부 사용 단계로 완성차 공장 적용센터 투입 전.
- 관련 근거: [The Robot Report, 2026-10-09](https://www.therobotreport.com/boston-dynamics-gives-more-insight-into-its-redesigned-humanoid-hand/) [공식 발표]
- 기존 대비 변화: 2026-09-23 기보고의 Atlas 훈련센터가 "학습 장소"였다면 이번은 하드웨어 사양과 설계 판단 기준의 공개다. 핸드 요구를 파지력이 아니라 시뮬레이션 정확도와 접촉 제어 관점으로 재정의한 점이 새롭다.
- 생산기술 시사점: 휴머노이드 핸드를 검토할 때 손가락 수·자유도보다 액추에이터 동일화와 케이블 비경유 구조가 보전성·교체 리드타임을 좌우한다. 핸드 사양을 작업 리스트가 아닌 필수 동작 집합으로 정의하면 공정별 적용 가부를 조기 판정할 수 있다.
- 확인 필요: 사이클 수명, 지문부 센싱 방식, 공구 체인저 호환 여부, 실환경 투입 시점.

## 사출성형기술 상세

### 축 ① 사출기·금형·소재

#### Fakuma Innovation Award 2026 — 공식 기술상 신설, 수상이 핫러너·금형 제어에 집중

- 확인 내용: 제30회 Fakuma에서 처음 제정된 Innovation Award의 6개 부문 1 – 3위가 2026-10-12 시상식에서 발표됐다. 사출성형 부문 1위 ANYBRID, 2위 Günther Heisskanaltechnik, 3위 Mold-Masters Europa. 금형·형틀/열성형 부문 1위 Leonhardt, 2위 HASCO + POLAR-FORM, 3위 Servomold. 컴파운딩·소재 부문 1위 Syensqo, 2위 FKuR, 3위 LG Chem Poland. 주변기기 부문 1위 royos joining solutions, 2위 ONI-Wärmetrafo, 3위 KraussMaffei. 응모 요건은 해당 기술을 전시장에서 양산품·기능 시제품·라이브 실연 중 하나로 직접 시연하는 것.
- 관련 근거: [Fakuma 공식 FAKUMA AWARD 2026 페이지, 2026-10-12 게시 / 10-13 수정](https://www.fakuma-messe.de/en/specials/fakuma-award/) [공식 발표]
- 기존 대비 변화: 기존 Fakuma에는 공식 기술상이 없었다. 사출성형·금형·소재·주변기기를 분리한 6부문 체계가 신설됐다.
- 생산기술 시사점: 사출성형 부문 2·3위가 모두 핫러너 업체이고 금형 부문 2위가 2K 금형이다. 사출 분야 기술 경쟁축이 기계 본체보다 용융 전달·금형 측 제어로 이동 중임을 보여준다. 핫러너·게이트 제어 벤더 선정 시 참고 가능한 외부 비교 기준이 하나 생긴 셈이다.
- 확인 필요: ANYBRID·Günther의 수상 대상 기술명과 사양, LG Chem Poland 수상 소재 등급은 공식 발표문에 미명시.

#### Mold-Masters DeXa — 사이드 게이트 제어 단위를 드롭에서 팁 단위로 세분화

- 확인 내용: 공식 미디어 어드바이저리에서 DeXa를 사이드 게이팅 기술로 소개하며 팁 개별 제어(individual tip control)를 통한 정밀 공정 제어와 부품 품질 최적화를 핵심으로 제시. Fakuma 2026 사출성형 부문 파이널리스트로 공시된 뒤 10-12 시상에서 3위로 확정. 전시 위치 Hall B3, Stand 3200.
- 관련 근거: [Mold-Masters 공식 Fakuma 2026 미디어 어드바이저리, 2026-10-06](https://www.moldmasters.com/news-and-events/fakuma2026-media-advisory) / [Fakuma 공식 수상 발표, 2026-10-12](https://www.fakuma-messe.de/en/specials/fakuma-award/) [공식 발표]
- 기존 대비 변화: 기존 Melt-CUBE·Melt-DISK 계열 사이드 게이팅은 드롭 단위 제어가 기본이었다. DeXa는 제어 단위를 팁으로 내린 신규 라인이다.
- 생산기술 시사점: 다캐비티 사이드 게이트 금형에서 캐비티별 충전 편차를 게이트 단에서 직접 보정할 수 있다. 커넥터·소형 하우징류 고캐비티 양산에서 밸런싱 공수 축소와 게이트 잔흔 편차 저감에 연결된다.
- 확인 필요: 팁 개별 제어의 구동 방식(서보/공압), 적용 가능 캐비티 수, 온도 제어 분해능 미공개. 현 단계는 전시 시연이며 양산 적용 실적 미확인.

#### Husky Technologies 통합 멜트 딜리버리 — 사출기·핫러너·금형온도 컨트롤러를 단일 제어 단위로 묶은 구성 시연

- 확인 내용: Fakuma 2026(Hall A1, Booth A1-1103)에서 머신, 핫러너, 금형온도 컨트롤러(Altanium)를 단일 최적화 시스템으로 결합한 구성을 시연. 공정 산포 축소, 가동 효율 개선, 생산 일관성 확보를 목적으로 제시했고 적용 범위로 박육·후육 용기, 페일, 커틀러리, 의료용 일회용품, 바이오 수지를 명시. 예지 모니터링 서비스 Advantage+Elite는 5단계 서비스 티어로 구성하며 ISO/IEC 27001 인증을 데이터 보안 근거로 제시.
- 관련 근거: [Plastics Today, 2026-10-13](https://www.plasticstoday.com/injection-molding/husky-showcases-technology-at-fakuma-2026) [2차 인용]
- 기존 대비 변화: 기존에는 핫러너·Altanium 컨트롤러·사출기를 개별 제품으로 공급했다. 세 요소를 하나의 제어 단위로 묶은 패키징으로 전환한 기존기술 고도화 건이다.
- 생산기술 시사점: 핫러너 온도·밸브게이트 타이밍·금형온도를 사출기 제어와 같은 레이어에서 다루면 샷 간 용융 이력 편차를 줄이는 데 유리하다. 다만 통합 범위가 넓어질수록 벤더 종속성과 기존 설비 혼용 시 인터페이스 제약이 커진다.
- 확인 필요: 단일 시스템의 실제 통합 수준(통신 프로토콜, 공용 HMI 여부), 공정 산포 축소 정량치 미제시, 양산 적용 사례 미확인.

#### Asahi Kasei 코어백 사출 기반 단일소재 인테리어 — 스킨·폼을 동일 소재계로 일체 성형

- 확인 내용: Fakuma 개막일 공개. 스티렌계 열가소성 엘라스토머로 스킨층과 폼층을 동일 소재 계열로 구성하고, 코어백 사출로 두 층을 단일 공정에서 성형한다. 층간 화학 결합으로 접착제가 불필요하다. 기존 인스트루먼트 패널·도어 패널·암레스트·센터 콘솔은 스킨/폼/구조 코어를 각기 다른 소재와 별도 공정으로 제조해 왔다. 같은 부스에서 PC 글레이징용 수계 하드코팅을 함께 전시하며 ECE R43 내마모 요건과 전면유리용 내후성 충족을 제시, PC 전면 창 실물을 전시했다.
- 관련 근거: [Plastics Today, 2026-10-12](https://www.plasticstoday.com/automotive-mobility/asahi-kasei-showcases-advanced-materials-at-fakuma-2026) [2차 인용]
- 기존 대비 변화: 다소재·다공정 구조를 동일 소재계 2층 구조로 치환. 접착 공정 제거와 재활용성 개선이 변화의 핵심이다.
- 생산기술 시사점: 코어백 사출은 캐비티 후퇴 타이밍과 형체력·금형온도 제어가 발포 셀 구조를 좌우하므로, 적용 시 캐비티 압력·형체 제어 정밀도 요구가 올라간다. 내장재 소재 단일화는 해체·분리 공정 부담 축소와 직결된다.
- 확인 필요: 코어백 스트로크·발포 배율·사이클타임 미공개. 현 단계는 전시이며 양산 적용 여부 미확인. 하드코팅의 양산 코팅 라인 적용 수준도 미확인.

#### Syensqo Ryton PPS XE3500 OR — DC 급속충전 버스바 절연용 등급, 양산 중 소재로 수상

- 확인 내용: 컴파운딩·소재 부문 1위. EV 배터리를 약 20분에 20 % – 80 %까지 충전하는 DC 급속충전 시스템의 버스바 절연 요구를 대상으로 설계된 PPS로, 고온 내성·절연 파괴강도·내충격성을 조합하고 고전압 식별용 오렌지 색상을 유지한다. Standard-Metallwerke가 제조한 압출 버스바 형태로 시연됐으며 이미 양산 단계임을 명시했다.
- 관련 근거: [Plastics Today, 2026-10-13](https://www.plasticstoday.com/automotive-mobility/syensqo-wins-fakuma-innovation-award-for-busbar-material) / [Fakuma 공식 수상 발표, 2026-10-12](https://www.fakuma-messe.de/en/specials/fakuma-award/) [공식 발표]
- 기존 대비 변화: 기존 Ryton PPS 계열 대비 급속충전 버스바 전용 등급으로 특화. 적용 공정은 압출이다.
- 생산기술 시사점: PPS는 고온·저수축 특성으로 커넥터·버스바 절연부에 쓰이나 유동성·게이트 설계 제약이 크다. 급속충전 전압 상승에 따라 고CTI·고내열 수지 수요가 사출 부품 쪽으로도 확산될 가능성을 보여주는 신호다.
- 확인 필요: 사출 성형용 등급 존재 여부, CTI·RTI 등급, 내열 온도 등 정량 물성치 미공개.

#### ENGEL iQ.boost — 기존 iQ 어시스턴스의 가동률을 교육으로 끌어올린 정량 적용 사례

- 확인 내용: 독일 사출업체 sinit 적용 사례. 동사는 타이바리스 victory 20대(형체력 500 – 3,000 kN)에 iQ weight control, iQ clamp control, iQ flow control과 viper 리니어 로봇, 숍플로어 모니터링을 갖췄으나 작업자 사용 기피로 기능이 실제 가동되지 않았다. 2일 과정 iQ.boost(5명 이하 소그룹, 가상 머신 실습 후 1.5일 실제 제품 시험사출, 종료 시 공정 개선 측정 리포트 제공) 도입 후 클레임률 1/2 축소, 초기 기동 불량 1/3 감소, iQ weight control로 기계 1대당 연 약 2,500유로(20대 기준 연 50,000유로) 절감, 숍플로어 모니터링으로 1일 3시간·연 750시간(시간당 50유로 환산 연 약 37,500유로) 절감, 합계 연 약 87,500유로. iQ clamp control의 자동 산출 형체력은 수동 설정 대비 평균 3 % 적은 에너지를 사용했고 금형 벤팅 개선으로 불량이 줄었다.
- 관련 근거: [PlastikMedia, 2026-10-12](https://www.plastikmedia.co.uk/engel-iq-boost-training/) [2차 인용]
- 기존 대비 변화: 신규 기능 추가가 아니라 이미 납품된 iQ 어시스턴스의 가동률을 교육으로 끌어올린 신규 적용사례다. 공급사 역할이 기능 판매에서 운용 정착 지원으로 확장된 형태.
- 생산기술 시사점: 자율 보정 기능의 도입 효과가 설비 사양이 아니라 현장 운용 정착 여부에 좌우된다는 점을 정량 데이터로 보여준다. 형체력 자동 산출이 벤팅 개선을 통해 에너지뿐 아니라 불량률에도 작용한다는 점은 형체력 설정 관행 재검토의 근거가 된다.
- 확인 필요: iQ.boost의 정식 상품화 시점·국내 제공 여부 미확인. 절감액은 sinit 자체 산정치이며 산정 근거 상세 미공개.

### 축 ② 사출자동화·주변장치

#### Nonnenmann 사출 자동화 확장 — 벌크 정렬공급기·AI 분류 카메라·알루미늄 그리퍼 동시 투입

- 확인 내용: 6축 로봇용 벌크 정렬공급기 2종 신규(유효면적 185 x 185 mm, 475 x 290 mm, 진동판 퀵체인지, 대상 부품 0.5 mm – 약 100 mm, 조건에 따라 분당 최대 100개 정렬, 외광 영향을 받지 않는 자체 투과조명 내장, 웹 UI 제어, 디지털 I/O 또는 Ethernet 통신). 사출 직후 검사용 컴팩트 카메라는 분류에 AI를 적용하며 해상도 1,600 x 1,200 또는 2,560 x 1,936 px, 처리속도 모델별 최대 80 fps / 44 fps, 백색·적색·적외 조명과 전동 포커스 렌즈 내장, 바코드·데이터코드·OCR 식별과 그리퍼 간섭 체크·Pick-by-View 지원, 레트로핏 가능. 그리퍼 계열에는 알루미늄 진공·래디얼 그리퍼와 프로파일을 추가해 기존 수지 그리퍼와 혼용 가능하게 했다.
- 관련 근거: [K-Zeitung(독일어), 2026-10-09](https://k-zeitung.de/nonnenmann-baut-automation-fuer-spritzgiesser-aus) [공식 발표]
- 기존 대비 변화: 종래 6축 로봇·7축·컨베이어·안전펜스·수지 진공그리퍼까지만 보유했다. 벌크 정렬(전공정)과 AI 비전 검사(후공정)가 추가돼 사출셀 주변 구성품을 단일 공급사에서 조달하는 형태가 됐다.
- 생산기술 시사점: 인서트 부품 수작업 정렬을 설비로 대체할 때 분당 100개·0.5 mm급 대응은 소형 금속 인서트(터미널, 부시 등) 투입과 적용 범위가 겹친다. AI 분류 카메라가 OCR과 데이터코드 식별을 함께 지원하므로 부품 단위 추적성 연계 구축 비용이 내려가는 방향이다.
- 확인 필요: AI 분류 모델의 학습 방식(온프레미스 학습 여부), 오검출률·재현성 수치, 정렬기 레시피 전환 시간 미공개.

#### Polymerge RoboMerge — 용착 프레스를 6축 로봇으로 치환하고 사출품 변형을 다축 힘제어로 보정

- 확인 내용: 사출 성형품 열가소성 용착 셀. 고정식 용착 프레스를 없애고 6축 로봇이 부품 파지·위치결정에 더해 용착 접근 동작까지 수행한다. 다축 힘측정 시스템을 내장해 용착력을 mm 단위로 제어하고, 치수 편차·휨을 공간 전 방향에서 부품을 이동·회전·기울여 동적으로 보정한다. 가열은 적외선 방식으로 용착부만 국부 가열해 종래 대비 에너지 소요 최대 40 % 절감, 별도 오븐 공정 불필요. 로봇 이송 시간 동안 예열을 병행해 사이클을 단축하며, 퀵체인지로 운전 중 전자동 툴 교환을 지원한다. 상부 프레스가 없어 설치면적과 투자비가 종래 용착설비보다 낮다고 제시.
- 관련 근거: [K-Zeitung(독일어), 2026-10-09](https://k-zeitung.de/kunststoffschweissen-wenn-der-roboter-selbst-fuegt) [공식 발표 / 전시 데모]
- 기존 대비 변화: 용착 공정의 가압 기구를 로봇 기구학으로 치환했다. 공차 보정이 지그 정밀도가 아닌 센서·로봇 제어로 넘어간 점이 종래 적외선 용착기와의 차이다.
- 생산기술 시사점: 사출 후 휨이 큰 대형·박육 하우징류의 용착 불량을 지그 재제작이 아닌 제어 파라미터로 흡수할 여지가 생긴다. 취출로봇·용착·검사를 하나의 로봇 셀로 묶는 구성과 궁합이 맞는다.
- 확인 필요: 다축 힘측정 분해능, 보정 가능한 변형량 한계, 용착 강도 재현성 데이터, 양산 적용 사례 모두 미공개. 현 단계는 전시 데모.

#### Labotek 건조·이송 신규군 — 계량기 직하 건조 통합과 PROFINET 캐스케이드 제어, 폐열회수의 PLC 종속 해제

- 확인 내용: MDS Balance Drydose는 사출기 투입구 직하에서 건조와 중량식 첨가제 계량을 한 유닛으로 통합해, 계량 스테이션 내부에서 수요에 맞춰 건조한 뒤 즉시 계량한다. 신규 모듈형 제어는 건조공기 발생기(DFD)에 10인치 터치패널을 통합해 하위 건조호퍼·진공스테이션·폐열회수 유닛 최대 14대를 제어하고, 각 유닛이 7인치 패널의 자체 컨트롤러를 가지며 전 구간을 PROFINET 캐스케이드로 연결해 배선량을 줄이고 증설 시 중앙 컨트롤러가 자동 인식한다. 외부 폐열회수(EHR)는 공장 폐열을 온수로 받아 공랭식 열교환기로 건조 공정공기에 전달하며 조건에 따라 전력 최대 85 % 절감, 종래 필수였던 PLC 통합 없이 스탠드얼론 적용이 가능해졌다. 이동식 건조기 DDM VII은 내외부 전면 V2A 스테인리스와 확대 청소도어를 적용. Labo-Net은 공정 스텝 순서와 작업자 이벤트 로그를 SQL DB에 기록하는 추적성 기능을 추가했다.
- 관련 근거: [PlastikMedia, 2026-10-12](https://www.plastikmedia.co.uk/labotek-at-fakuma-2026/) [공식 발표 전재]
- 기존 대비 변화: 건조·이송·계량이 각각 독립 제어되던 구조에서 계량기 직하 건조 통합, PROFINET 캐스케이드 증설, 폐열회수 PLC 종속 해제의 세 축이 동시에 바뀌었다. Labo-Net의 성격도 운전 HMI에서 공정·품질·에너지 관리 도구로 이동했다.
- 생산기술 시사점: 엔지니어링 플라스틱(PA, PBT 등) 적용에서 건조 이력은 치수·기계물성 산포의 주요 변동요인이다. 건조 스텝 순서와 작업자 개입 로그가 DB에 남으면 로트 단위 품질 소명 자료로 바로 쓸 수 있다. 계량기 직하 건조는 흡습성 첨가제의 재흡습 구간을 물리적으로 없애는 접근으로 미건조 기인 은조 대응과 적용 범위가 겹친다.
- 확인 필요: DDM VII 건조 능력(kg/h)·노점, MDS Balance Drydose의 계량 정밀도·대응 처리량, 폐열회수 85 % 절감의 기준 조건(온수 온도·유량) 미제시.

## 로봇제조기술 상세

### 축 ③ 산업·협동로봇·로봇 SW

금주 주요 로봇 메이커의 신제품 발표는 KUKA 1건(핵심 요약 참조)에 그쳤다. FANUC 공식 갱신정보의 기간 내 게시물은 공작기계 카탈로그 갱신과 전시 안내뿐이고, Yaskawa의 기간 내 신제품은 인버터용 기능안전 통신 옵션 카드로 로봇 영역이 아니다. 대신 로봇 소프트웨어 측에서 두 건이 확인됐다.

#### SafeWorld 로봇 안전 시뮬레이션 — 안전 검증 전용 시뮬레이션을 별도 제품 범주로 분리

- 확인 내용: 2026-10-08 스텔스 해제, 시드 12.2백만 달러. 로봇과 사람이 공존하는 희소·위험·고비용 시나리오를 시뮬레이션으로 검증한다. 과거 사고 기록, 안전 규격, 로봇 로그를 입력해 브라우저에서 시나리오를 구성하고, 반응형 인체 동작 모델로 수천 가지 변형을 돌려 안전 성능을 측정한다. 소프트웨어 업데이트·환경 변경 때마다 반복 실행해 안전 근거 기록을 누적하는 구조다. 고객은 산업·제조·물류·건설 분야 6개사 수준이라고 밝혔다.
- 관련 근거: [The Robot Report, 2026-10-08](https://www.therobotreport.com/safeworld-emerges-stealth-build-deploy-robot-safety-simulation-technologies/) [업계 분석]
- 기존 대비 변화: 기존 안전 검증은 위험성 평가 문서와 실물 시운전 중심이었고 시뮬레이션은 사이클타임·간섭 검증이 주 용도였다. 안전 검증 전용 시뮬레이션을 별도 제품으로 분리한 점이 다르다.
- 생산기술 시사점: 펜스 제거형 협동 셀이나 AI 제어 로봇 도입 시 안전 근거 문서화가 병목이 된다. 반복 재검증이 가능한 시뮬레이션 기반 기록은 설비 변경·SW 업데이트가 잦은 공정의 재평가 공수를 줄일 수 있다.
- 확인 필요: 지원 안전 규격 목록, 인증기관 수용 여부, 로봇 메이커 모델 라이브러리 범위, 제조 현장 적용 사례 모두 미공개. 스타트업 초기 단계로 ISO 10218 / TS 15066 적합성 인정 경로가 제시되지 않았다.

#### AWS·NVIDIA 오픈소스 Physical AI Toolchain — 합성데이터부터 엣지 배포·재학습까지 단일 워크플로로 패키징

- 확인 내용: 2026-10-08 공개. 합성 데이터 생성, 모델 학습, 시뮬레이션·검증, 엣지 배포, 지속 개선의 5단계를 묶었다. AWS는 SageMaker와 IoT Greengrass를, NVIDIA는 Isaac Sim, Isaac Lab, Isaac GR00T, Cosmos를 제공한다. 오픈소스이며 구성요소 개별 사용과 엔드투엔드 결합이 모두 가능하다. 하드웨어 중립을 유지해 특정 로봇을 전제하지 않으며, 현장 로봇이 수집한 데이터를 클라우드로 회수해 모델을 갱신하는 피드백 루프를 지원한다.
- 관련 근거: [The Robot Report, 2026-10-08](https://www.therobotreport.com/aws-launches-open-source-physical-ai-toolchain-for-robotics/) [공식 발표]
- 기존 대비 변화: 종전에는 Isaac Sim·Isaac Lab과 클라우드 학습 인프라를 사용자가 직접 연결해야 했다. 이번은 그 결합을 레퍼런스 아키텍처와 오픈소스 코드로 제공해 초기 구성 공수를 줄이는 수준이며, 신규 알고리즘이 아닌 통합·패키징 변화다.
- 생산기술 시사점: 로봇 OLP·가상시운전 환경이 경로 검증에서 AI 모델 학습·검증 쪽으로 확장되는 흐름의 사례다. 다품종 피킹·조립처럼 실데이터 확보가 어려운 작업은 합성데이터 생성 비중이 커질 수 있다.
- 확인 필요: 상용 로봇 컨트롤러(FANUC / ABB / KUKA / Yaskawa) 연동 지원 여부, 라이선스 조건, 제조 현장 적용 사례 미확인.

### 축 ④ 물류·휴머노이드·EOAT

#### AutoStore 2026년 가을 릴리스 — 그리드형 ASRS의 취급 품목과 보전 범위 확장

- 확인 내용: FlexBinsPort는 1개 워크스테이션에서 표준 빈 3개 높이를 모두 혼용 처리하며 보관 효율 10 – 15 % 개선을 추정치로 제시, 2026년 4분기 출시 예정. AutoCase는 600 x 400 mm 표준 케이스를 2027년 1분기부터 지원하고 복수 스테이션이 동일 태스크 그룹을 병렬 처리해 팔레타이징·포장 등 후공정에 연속 공급한다. Pio Pal은 RaaS로 제공되며 사전피킹 주문 기준 워크스테이션 540 order lines/h를 제시. CubeFleet는 실시간 데이터와 사전 정의 임계값으로 보전 알람·작업지시를 생성해 비계획 다운타임 35 – 45 % 감축을 추정치로 제시했다.
- 관련 근거: [Automated Warehouse, 2026-10-13](https://www.automatedwarehouseonline.com/autostore-expands-flexbinsport-capabilities-offers-pio-pal-through-raas/) [공식 발표]
- 기존 대비 변화: 종래 단일 빈 규격·이치(each) 중심에서 케이스 단위와 혼합 빈 높이를 같은 그리드에서 처리하는 방향으로 범위가 넓어졌고, 운영 단계 지표에 수치 목표가 붙었다.
- 생산기술 시사점: 부품 창고의 다품종·이형 포장 혼재 문제를 신규 설비 증설 없이 포트 측 변경으로 흡수하는 접근이다. ASRS 도입 검토 시 고정 PM 주기 대신 가동 데이터 기반 조건 기반 보전으로 전환하면 가용률 산정 전제가 달라진다.
- 확인 필요: 10 – 15 %, 35 – 45 %, 540 lines/h의 측정 조건과 기준 사이트 미공개. 출시 일정은 모두 예정이며 양산 적용 실적이 아니다.

#### Symbotic·cellumation celluveyor 인수 — 분류면을 기구물에서 소프트웨어 제어 셀로 치환

- 확인 내용: Symbotic이 독일 브레멘 cellumation GmbH(2017년 설립, 70명 이상) 인수를 2026-10-13 발표. celluveyor는 수백 개의 개별 제어 육각 셀에 전방향 휠을 적용해 각 셀이 임의 방향으로 물품을 이동시키며, 이동 중에 행선지를 결정한다. 우편·이커머스·물류 운영사에 이미 적용 중이다. cellumation은 사명·경영진을 유지하고 타 통합업체 직접 판매도 지속한다.
- 관련 근거: [Automated Warehouse, 2026-10-13](https://www.automatedwarehouseonline.com/symbotic-acquires-cellumation-software-driven-sortation/) [공식 발표]
- 기존 대비 변화: 고정 컨베이어의 분기·정렬을 기구물이 아닌 셀 단위 제어로 대체하는 방식이 대형 물류 자동화 포트폴리오에 편입됐다.
- 생산기술 시사점: 부품 수입검사·소터 구간처럼 레이아웃 변경이 잦고 바닥 면적이 제약인 구역에서, 분기 기구를 추가하지 않고 소프트웨어로 흐름을 바꾸는 선택지가 된다. 다만 하중·부품 형상 범위가 물류 기준이라 금속 부품 적용성은 별도 검증이 필요하다.
- 확인 필요: 셀당 하중, 최대 처리량, 반복 위치 정밀도, 비물류 제조 라인 적용 실적 미공개. 인수 금액·완료 시점도 미공개.

#### FANUC America PACK EXPO 2026 데모 — 협동 팔레타이징 가반 40 kg, 자연어 기반 로봇 설정

- 확인 내용: CRX-20iA(가반 20 kg)가 자연어 지시를 받아 생성형 AI가 Python 코드와 로봇 동작으로 변환하는 데모, CRX-10iA/L의 동적 모션 플래닝·머신비전·바코드 검증 기반 동적 근접 감시 데모, 신규 40 kg 가반 CRX/30-18A의 3D 비전·듀얼 케이스 그리퍼 협동 팔레타이징을 공개. CRX 3대 협조 워크셀이 비전 피킹부터 팔레타이징까지 일괄 수행하고, SR-9iA/R SCARA는 원형 라인 트래킹 중 툴을 자동 교환한다. 컨트롤러는 R-50iA, R-30iB Mini Plus.
- 관련 근거: [Automated Warehouse, 2026-10-09](https://www.automatedwarehouseonline.com/fanuc-america-brings-ai-packaging-cobots-pack-expo-2026/) [공식 발표]
- 기존 대비 변화: 협동로봇 팔레타이징 가반이 40 kg으로 올라갔고, 프로그래밍 입력이 티칭·스크립트에서 자연어로 바뀌는 구성이 추가됐다. 전시 데모이며 양산 적용 사례가 아니다.
- 생산기술 시사점: 포장·팔레타이징 공정에서 케이스 2개 동시 파지 그리퍼와 3D 비전 조합은 택트 단축 수단이 된다. 동적 근접 감시는 안전펜스 없이 가동률을 유지하는 방식이라 라인사이드 레이아웃 검토 시 참고할 수 있다.
- 확인 필요: 40 kg 가반 시 협동 운전(ISO/TS 15066) 속도 제약, 생성형 AI 생성 코드의 안전 검증 절차, 실제 출하 시점.

#### ANSCER Robotics FCC 조건부 승인 — AMR 조달에 규제 적격성 심사가 선행 항목으로 편입

- 확인 내용: FCC가 해외 생산 첨단 로봇을 사이버보안·경쟁 위험으로 판단해 Covered List 제한을 적용한 가운데, 인도 벵갈루루 본사의 ANSCER Robotics가 3개 플랫폼에 대해 조건부 승인을 받은 초기 기업 중 하나가 됐다. 승인에는 유효기간이 있으며 분기별 보고와 합의된 미국 내 생산 계획의 이행 실적 제출이 조건이다. 장비 인증 등 다른 요건은 별도로 남는다.
- 관련 근거: [Automated Warehouse, 2026-10-09](https://www.automatedwarehouseonline.com/anscer-robotics-gets-fcc-conditional-approval-for-mobile-robots/) [공식 발표]
- 기존 대비 변화: AMR 조달에서 기능·가격에 더해 규제 적격성이 선행 심사 항목이 됐음을 보여주는 구체 사례다.
- 생산기술 시사점: 북미 거점에 AMR을 도입할 경우 벤더의 Covered List 적격성과 조건부 승인 유효기간을 사양서 단계에서 확인해야 한다. 공급사의 생산 국가가 도입 일정 리스크로 직결된다.
- 확인 필요: 승인 대상 3개 플랫폼의 모델명, 유효기간, 미국 생산 계획의 구체 내용. 규제 범위에 AGV 전반이 포함되는지 여부도 미확인.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 제어 단위가 더 작아짐. 사이드게이트는 드롭에서 팁으로(Mold-Masters DeXa), 캐비티 압력은 대표 캐비티에서 전 캐비티로(FANUC ROBOSHOT C세대) | 다캐비티 금형의 밸런싱이 기구 설계·시험사출 반복에서 제어 파라미터 영역으로 이동 |
| 기술 변화 | 로봇 비전 연산이 외부 산업용 PC에서 로봇 컨트롤러 내부 GPU로 흡수(KUKA iiQKA.AI Vision) | 비전 셀의 구성 품목·인터페이스 수 감소. 반대급부로 로봇 메이커 생태계 종속 심화 |
| 업체 변화 | ARBURG가 Fakuma에서 신규 사출기 없이 자동화·디지털만 발표하고, 취출로봇을 사출기 제어기에서 분리해 단독 판매 | 사출기 메이커 경쟁축이 기계 사양에서 셀 자동화·제어 플랫폼으로 이동 |
| 업체 변화 | Fakuma가 공식 기술상을 신설하고 수상이 핫러너·2K 금형에 집중 | 용융 전달·금형 측 제어가 업계 기술 평가의 중심축이 됐음을 외부 기준으로 확인 |
| 적용사례 변화 | ENGEL iQ.boost 사례는 신규 기능이 아니라 기존 기능의 가동률을 교육으로 끌어올린 건(연 약 87,500유로, 클레임률 1/2) | 자율 보정 기능의 효과는 설비 사양보다 현장 정착 여부에 좌우됨을 정량 확인 |
| 적용사례 변화 | Asahi Kasei 코어백 사출 단일소재 인테리어, Syensqo PPS 버스바 절연재(양산) | 전자는 전시 단계, 후자는 양산 단계. 소재 단일화와 고전압 절연 요구가 동시에 진행 |
| 확인 필요 | ROBOSHOT S180C/S350C 기본 사양, DeXa 팁 제어 구동 방식, KUKA 비전 처리 주기·소급 적용 가능 여부 | 사양 공개 후 기존 설비 대비 비교 가능. 다음 조사에서 공식 제품 페이지 재확인 |
| 확인 필요 | Fakuma 폐막(10/16) 후 공개되는 수상 기술 상세, 현장 발표 미공개분 | 차주 조사에서 ANYBRID·Günther·LG Chem Poland 수상 기술 사양 확인 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Fakuma 2026 폐막(10/16) 후 공식 결산·수상 기술 상세 | 사출성형 | ANYBRID, Günther, Leonhardt, LG Chem Poland 수상 기술 사양 및 양산 여부 |
| 2 | FANUC ROBOSHOT S180C / S350C 제품 페이지 갱신 | 사출성형 | 형체력·사출속도 등 기본 사양, 전 캐비티 압력 구현 방식, 출시 시점 |
| 3 | Mold-Masters DeXa 제품 페이지 | 사출성형 | 팁 개별 제어 구동 방식, 적용 캐비티 수, 온도 제어 분해능 |
| 4 | NVIDIA GTC Berlin(10/20 – 22) KUKA iiQKA.AI Vision 첫 시연 | 로봇제조 | 처리 주기·인식 정확도, 기존 컨트롤러 소급 적용 가능 여부 |
| 5 | RoboBusiness 2026(10/20 – 21, 산타클라라) | 로봇제조 | 제조용 협동로봇·모바일 매니퓰레이터 신규 발표 |
| 6 | ARBURG 스탠드얼론 로봇 공식 제품 페이지 | 사출자동화 | rControl 사양, 유럽 외 공급 시점, 타사 사출기 연동 조건 |
| 7 | 2026 로보월드(11/4 – 11/7, 킨텍스) 사전 발표 | 로봇제조 | 두산로보틱스·한화로보틱스·현대로보틱스 신규 기종 예고 |
| 8 | SCHUNK SPS 2026 출품 예고(SLD Mini·SLD Midi) | EOAT | 리니어 다이렉트 축의 EOAT·핸들링 적용 범위 |

## 출처

### 사출성형기술

- [Fakuma 공식, FAKUMA AWARD 2026, 2026-10-12 게시 / 10-13 수정](https://www.fakuma-messe.de/en/specials/fakuma-award/)
- [FANUC Europe 공식, FANUC at FAKUMA 2026, 확인일 2026-10-14](https://www.fanuc.eu/eu-en/campaign/fanuc-fakuma-2026)
- [Mold-Masters 공식, Fakuma 2026 Media Advisory, 2026-10-06](https://www.moldmasters.com/news-and-events/fakuma2026-media-advisory)
- [Plastics Today, Husky Showcases Technology at Fakuma 2026, 2026-10-13](https://www.plasticstoday.com/injection-molding/husky-showcases-technology-at-fakuma-2026)
- [Plastics Today, Asahi Kasei Showcases Advanced Materials at Fakuma 2026, 2026-10-12](https://www.plasticstoday.com/automotive-mobility/asahi-kasei-showcases-advanced-materials-at-fakuma-2026)
- [Plastics Today, Syensqo Wins Fakuma Innovation Award for Busbar Material, 2026-10-13](https://www.plasticstoday.com/automotive-mobility/syensqo-wins-fakuma-innovation-award-for-busbar-material)
- [PlastikMedia, ENGEL iQ.boost Training, 2026-10-12](https://www.plastikmedia.co.uk/engel-iq-boost-training/)
- [PlastikMedia, Labotek at Fakuma 2026, 2026-10-12](https://www.plastikmedia.co.uk/labotek-at-fakuma-2026/)
- [K-Zeitung (독일어), Standalone-Roboter: Arburg macht Automation eigenständig, 2026-10-09](https://k-zeitung.de/standalone-roboter-arburg-macht-automation-eigenstaendig)
- [K-Zeitung (독일어), Nonnenmann baut Automation für Spritzgießer aus, 2026-10-09](https://k-zeitung.de/nonnenmann-baut-automation-fuer-spritzgiesser-aus)
- [K-Zeitung (독일어), Kunststoffschweißen: Wenn der Roboter selbst fügt, 2026-10-09](https://k-zeitung.de/kunststoffschweissen-wenn-der-roboter-selbst-fuegt)
- [Plastics Machinery Manufacturing, Arburg Touts Smart Factory, Automation at Fakuma 2026, 2026-10-13](https://www.plasticsmachinerymanufacturing.com/injection-molding/news/55411204/arburg-touts-smart-factory-automation-at-fakuma-2026)
- [Yushin 공식 (일본어), 제품 뉴스릴리스, 확인일 2026-10-14 (기간 내 신규 없음 확인)](https://www.yushincompany.jp/newsrelease/product/)

### 로봇제조기술

- [Automationspraxis (독일어), KUKA integriert KI-Vision direkt in die Robotersteuerung, 2026-10-08](https://automationspraxis.industrie.de/ki/kuka-integriert-ki-vision-direkt-in-die-robotersteuerung)
- [The Robot Report, Boston Dynamics Gives More Insight into Its Redesigned Humanoid Hand, 2026-10-09](https://www.therobotreport.com/boston-dynamics-gives-more-insight-into-its-redesigned-humanoid-hand/)
- [The Robot Report, SafeWorld Emerges from Stealth, 2026-10-08](https://www.therobotreport.com/safeworld-emerges-stealth-build-deploy-robot-safety-simulation-technologies/)
- [The Robot Report, AWS Launches Open-Source Physical AI Toolchain for Robotics, 2026-10-08](https://www.therobotreport.com/aws-launches-open-source-physical-ai-toolchain-for-robotics/)
- [The Robot Report, Jabil Discusses Pace of Humanoid Robot Development and Production, 2026-10-08](https://www.therobotreport.com/jabil-discusses-pace-humanoid-robot-development-production/)
- [Automated Warehouse, AutoStore Expands FlexBinsPort Capabilities, 2026-10-13](https://www.automatedwarehouseonline.com/autostore-expands-flexbinsport-capabilities-offers-pio-pal-through-raas/)
- [Automated Warehouse, Symbotic Acquires cellumation, 2026-10-13](https://www.automatedwarehouseonline.com/symbotic-acquires-cellumation-software-driven-sortation/)
- [Automated Warehouse, FANUC America Brings AI, Packaging Cobots to PACK EXPO 2026, 2026-10-09](https://www.automatedwarehouseonline.com/fanuc-america-brings-ai-packaging-cobots-pack-expo-2026/)
- [Automated Warehouse, ANSCER Robotics Gets FCC Conditional Approval for Mobile Robots, 2026-10-09](https://www.automatedwarehouseonline.com/anscer-robotics-gets-fcc-conditional-approval-for-mobile-robots/)
- [FANUC 공식 (일본어), 갱신정보, 확인일 2026-10-14 (기간 내 로봇 신규 없음 확인)](https://www.fanuc.co.jp/ja/whatsnew/)
- [Yaskawa 공식 (일본어), 뉴스릴리스, 확인일 2026-10-14 (기간 내 로봇 신규 없음 확인)](https://www.yaskawa.co.jp/newsrelease)
