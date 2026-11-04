---
title: 생산기술 신규기술 브리핑 - 2026년 11월 1주차
date: 2026-11-04
type: production
period: 2026년 11월 1주차
tags: [스미토모중기계 AI-Drive, WABOT A310, ISO 21423, MOTOMAN NEXT, Stretch Gen 2, Sinamics E210, Hikrobot, 현대모비스]
summary: 사출은 IPF Japan 2026 사전 공개가 시작돼 스미토모중기계가 양산 중 성형조건 AI 자동조정의 감시 항목에 금형 내압을 추가한 AI-Drive Optima+를 예고했고, 우진플라임은 자동차 그릴·엔진 미드쉘 취출용 3축 취출로봇 WABOT A310의 모델 사양을 처음 공개함. 로봇은 제조사가 다른 이동로봇·플릿 매니저·설비가 위치·상태·작업 정보를 공통 형식으로 주고받는 국제표준 ISO 21423이 정식 발행되고, Yaskawa는 이음부 갭 인식부터 용접 후 검사·보정까지 로봇이 판단하는 MOTOMAN NEXT 셀을 GR KART 프레임 실생산에 투입, Boston Dynamics는 10만 시간 운영 데이터로 비계획 정지 원인을 겨냥한 Stretch Gen 2를 공개
---

# 생산기술 신규기술 브리핑 - 2026년 11월 1주차

> 2026-10-29 – 2026-11-04 사출성형·로봇제조 신규 기술 변화

이번 주 사출은 주요 사출기 메이커의 공식 채널에서 하드웨어 신제품 발표가 확인되지 않은 가운데 IPF Japan 2026(12-01 – 12-05) 사전 공개가 시작됐고, 국내 취출로봇의 모델 사양과 금형 부품·서비스망 변화가 확인됐다. 로봇은 이동로봇 상호운용 국제표준 ISO 21423 발행, AI 용접 셀의 실생산 투입, 트레일러 하역 로봇의 세대교체가 겹쳤고 CeMAT Asia 2026(11-03 – 11-06, 상하이)이 개막했다. 로보월드 2026(11-04 – 11-07, KINTEX)은 작성 시점에 개막 전이어서 현장 발표는 다음 호에 반영한다. 2026-10-28 현지시각 발표 중 직전 브리핑 게시 이후 공개된 건은 이번 호에 포함했고, 직전 호에서 누락된 FANUC의 JIMTOF 로봇 신상품 3건은 로봇 상세에 보완했다.

## 금주 핵심 요약

### 사출성형기술

**[스미토모중기계공업(住友重機械工業)] AI-Drive Optima+ — 양산 중 성형조건 AI 자동조정의 감시 항목에 금형 내압 추가, IPF Japan 2026 출품 예고**

- 확인 내용: 2026-10-28 보도자료로 IPF Japan 2026 출품 내용을 공개했다. 셋업(立上げ)–양산–품질보증 전 단계의 성형조건 최적화를 AI로 지원하는 'AI-Drive' 시리즈다. 기출시된 1탄 'AI-Drive Optima'는 샷마다 충전 피크압·최소 쿠션 위치 등 성형기 실적값을 감시해 목표값에 가깝도록 V-P 절환 위치·충전 속도·보압을 자동 조정한다. 'Optima+'는 감시 항목에 금형 내압(型内圧)을 추가해 성형품 상태를 더 직접 파악하고 품질 변동 추종성을 높이는 것이 목표다. 기술연구소가 개발 중인 초기조건 조정 지원과 성형품질 예측도 함께 공개한다.
- 관련 근거: [PR TIMES 住友重機械工業 보도자료 (일본어), 2026-10-28](https://prtimes.jp/main/html/rd/p/000000157.000100192.html) [공식 발표] / [SHI PlasPlus 전시 소개 전편 (일본어), 2026-11-04 확인](https://www.shi.co.jp/plastics/blog/jp-0079.html) [공식 발표] / [SHI PlasPlus AI-Drive Optima 소개 (일본어), 2026-11-04 확인](https://www.shi.co.jp/plastics/blog/jp-0070.html) [공식 발표]
- 기존 대비 변화: 2024년 전시의 같은 개념 기능은 외부 장치가 필요한 참고 출품이었고, Optima에서 AI를 성형기에 탑재했다. Optima+는 피드백 입력을 성형기 측 실적값에서 금형 내부 수지압으로 넓혀, 금형 내압 신호를 AI 자동 조정의 입력으로 쓰는 단계다.
- 생산기술 시사점: 수지 로트 점도나 분쇄재 혼합비 변동은 쿠션 위치에 늦게 드러나는데, 캐비티 압력을 보정 입력으로 쓰면 충전 상태 변화를 더 일찍 잡을 수 있다. 캐비티 측 신호를 제어 입력으로 쓰는 방향은 Kistler ComoNeo(09-16 브리핑)가 계측기 쪽에서 제시해 왔고, 이번에는 성형기 메이커가 자체 AI 기능으로 흡수한다. 작업자 승인 후 AI가 파라미터를 쓰는 ENGEL EVA(09-16 브리핑)와 달리 Optima 계열은 양산 중 샷 단위 자동 조정으로 소개됐다. 자동차 부품 양산 적용에는 금형별 센서 비용과, AI 조정 폭을 승인된 공정 창(process window) 안으로 제한하고 변경 이력을 남기는 4M 변경관리가 전제다.
- 적용 수준: 전시 데모(Optima+는 출품 예고, Optima는 상용 기능). 분류는 기존기술 고도화
- 확인 필요: Optima+ 출시 시기·대상 기종, 대응 센서 방식(직접식·간접식)·채널 수, 자동 조정 파라미터 범위, 불량률·정지 횟수 등 정량 효과

**[우진플라임] WABOT A310 — 자동차 그릴·엔진 미드쉘 취출용 3축 기어 구동 취출로봇, 모델 단위 사양 첫 공개**

- 확인 내용: 2026-10-30 보도. 자체 개발한 기어 타입(Gear-Type) 시리즈 A 모델로 주행·상하·전후 3축 구조다. 최대 가반하중 10 kg, 주행축 2,000 mm, 상하축 1,300 mm, 전후축 1,090 mm이며 엔진 미드쉘·자동차 그릴 취출에 맞춰 구동 범위를 설정했다. 대응 형체력, 취출 시간, 제어기, 통신 인터페이스는 공개되지 않았다.
- 관련 근거: [산업일보 (한국어), 2026-10-30](https://kidd.co.kr/news/247937) [업계 분석] / 브랜드 첫 공개 [산업일보 (한국어), 2026-04-24](https://kidd.co.kr/news/245809) [업계 분석]
- 기존 대비 변화: 09-30 브리핑은 보은 로봇 전용 공장의 WABOT 6종 양산과 사출기·로봇·SW 셀 단위 공급 모델까지 다루고 모델별 가반하중·스트로크·축 구성을 확인 필요로 남겼다. 이번에 개별 모델의 정량 사양과 적용 부품이 처음 공개됐다.
- 생산기술 시사점: 10 kg은 EOAT를 포함한 하중이어서 그릴처럼 다점 흡착 EOAT가 필요한 대형 외장 부품은 EOAT 경량화가 선행 조건이다. 사출기와 취출로봇을 한 메이커가 공급하면 인터페이스 책임 분담은 단순해지지만, 이기종 사출기·MES가 섞인 라인에서는 EUROMAP 67 또는 OPC UA 기반 EUROMAP 79 지원 여부가 셀 통합과 부품 단위 추적의 관건이다.
- 적용 수준: 양산(판매 모델 공개, 고객 적용 실적 미공개). 분류는 신규
- 확인 필요: 대응 형체력, 취출 시간·반복정밀도, 제어기 플랫폼, EUROMAP 67·79 지원, 회사 공식 자료

### 로봇제조기술

**[ISO/TC 299 · A3] ISO 21423 정식 발행 — 제조사가 다른 이동로봇·플릿 매니저·설비 간 통신·상호운용 요건을 국제표준으로 확정**

- 확인 내용: A3가 2026-11-02 ISO 21423:2026(Robotics – Industrial mobile robots – Communications and interoperability) 발행을 공지했다. ISO/TC 299가 개발했고 산업용 이동로봇(IMR)·IMR 플릿 매니저·기타 설비가 정보를 교환하고 동작을 요청하는 방식을 규정한다. 로봇은 위치·속도·방향·상태·작업·가용성을 공유하며, 로봇이 담당하는 기계, ERP, 엘리베이터·자동문·경보 등 건물 설비, 모바일 기기를 쓰는 작업자와의 정보 교환도 범위에 든다. A3가 개발에 참여한 첫 비안전(non-safety) 로봇 표준이다. FDIS 미리보기 기준으로는 MQTT·JSON 기반 메시지, 공통 좌표계(기준점 3개 이상으로 각 사 지도 변환), 운전 모드·정지 범주(IEC 60204-1)·교착(BLOCKED) 등 상태 보고, 이동·일시정지·재개·취소 요청을 정의하며 안전·내비게이션 요구사항은 범위 밖이다.
- 관련 근거: [RoboticsTomorrow(A3 보도자료), 2026-11-02](https://www.roboticstomorrow.com/news/2026/11/02/new-iso-interoperability-standard-helps-mobile-robots-from-different-vendors-work-together/27330/) [공식 발표] / [Robotics 24/7, 2026-11-03](https://www.robotics247.com/article/iso-21423-helps-mobile-robots-from-different-vendors-communicate-together) [업계 분석] / [DIN Media 서지, 2026-11-04 확인](https://www.dinmedia.de/en/standard/iso-21423/407458544) [공식 발표] / [iTeh ISO/FDIS 21423 미리보기, 2026-11-04 확인](https://standards.iteh.ai/catalog/standards/iso/f772b16e-582a-4ed4-9f79-0a80ad376f40/iso-fdis-21423) [2차 인용] / [A3 사설, 게시일 미표기](https://www.automate.org/robotics/editorials/iso-21423-building-global-consensus-for-mobile-robot-interoperability) [공식 발표]
- 기존 대비 변화: 09-16 브리핑은 InOrbit.AI의 레퍼런스 구현 공개를 다루며 정식 발행 시점을 확인 필요로 남겼고, 2026-10 발행으로 확정됐다. A3 사설에 따르면 MassRobotics 상호운용 표준과 VDA 5050을 기반으로 MQTT·JSON 방식을 맞췄고, 중앙 플릿 매니저 할당을 전제로 한 VDA 5050과 달리 중앙·분산 구조를 모두 허용한다. FDIS 규범 인용에는 VDA 5050이 없어 두 규격 간 메시지 매핑은 별도 설계 대상이다.
- 생산기술 시사점: 여러 메이커의 AMR·자율 지게차가 같은 통로를 쓰는 부품 공장에서 교착·우선순위·점유 영역(footprint)을 공통 형식으로 주고받을 국제 근거가 생겼다. 설비 구매 사양서에 지원 버전, 공통 좌표계 기준점 운영, 엘리베이터·자동문 연동 범위를 요구 항목으로 넣을 수 있다. 기존 VDA 5050 관제와 병행하려면 게이트웨이나 상위 오케스트레이션 계층이 필요하고, 안전은 이동로봇 안전 표준(ANSI/A3 R15.08 시리즈, ISO 3691-4 등)으로 별도 관리해야 한다.
- 적용 수준: 기술자료(발행 표준). 분류는 표준 변화
- 확인 필요: 발행본과 FDIS의 차이, 적합성 시험·인증 체계, VDA 5050 2.x 매핑 지침, 주요 AMR 업체의 지원 일정

**[Yaskawa Electric / Toyota GAZOO Racing] MOTOMAN NEXT 자율 용접 셀 — 이음부 갭 인식부터 용접 후 검사·보정까지 로봇이 판단, GR KART 프레임 실생산 투입**

- 확인 내용: 2026-10-28 발표. 2026년 9월 GAZOO Racing의 '蒲郡 GR KART 工房'에 도입해 GR KART 프레임 제조 공정에서 실용화했다. GPU·AI를 탑재한 MOTOMAN NEXT가 파이프 프레임 조립 상태, 이음부 갭, 용접 후 결과를 인식해 동작을 스스로 정하고, 숙련 용접공이 하던 용접 후 품질검사와 보정까지 수행한다. 판정에는 외관 이미지와 함께 용접음·공정 데이터를 AI가 분석한다. 기반은 양사가 2024년 공동 개발한 SFA(Sequence Freezing Arc) 공법으로, 롤케이지 제작 리드타임을 2–3주에서 3일로 줄인 실적이 있다. Yaskawa는 이번 건을 검증·평가 단계를 넘은 고객 실생산 적용 사례로 규정했다.
- 관련 근거: [Yaskawa 뉴스릴리스, 2026-10-28](https://www.yaskawa-global.com/newsrelease/267239) [공식 발표] / [ニュースイッチ (일본어), 2026-10-30](https://newswitch.jp/p/50666) [2차 인용]
- 기존 대비 변화: 기존 로봇 아크 용접은 티칭 경로에 터치·아크 센싱 보정을 더하는 수준이었고 비드 검사와 수정은 후공정이나 작업자 몫이었다. 이번 셀은 갭 인식 → 동작 결정 → 용접 → 이미지·음향 검사 → 보정을 셀 안에서 닫는다. 07-15·07-22 브리핑의 MOTOMAN NEXT 건(VLA 유연물 핸들링 실증, Gemini 기반 에이전트 개발)이 검증 단계였다면 이번은 실생산 적용이며, 10-21 브리핑의 제3자 적응 용접 AI(레트로핏형)와 달리 로봇 메이커가 자체 컨트롤러 내 AI로 구현했다.
- 생산기술 시사점: 시트 프레임·서브프레임 보강재처럼 부품 공차와 지그 편차로 갭이 매번 달라지는 다품종 아크 용접에서 검사·리워크 공정을 셀 안으로 흡수하는 구성이다. 다만 판정 임계값, 오검출률, 보정(재용접) 이력의 추적 방식이 공개되지 않아 품질보증 체계에 넣기 전 판정 근거와 기록 방식을 검증해야 한다. 적용처가 소량 생산 카트 프레임이라는 점도 감안해야 한다.
- 적용 수준: 양산(실생산 공정 실용화, 생산 규모 미공개). 분류는 신규 적용사례
- 확인 필요: 로봇 기종·대수, 사이클타임·불량률 변화, 보정의 구체 방식, 판정 모델 학습 범위

**[Boston Dynamics] Stretch Gen 2 — 1세대 10만 시간 운영 데이터로 비계획 정지 원인을 겨냥한 트레일러 하역 로봇 2세대**

- 확인 내용: 2026-11-03 발표. 1세대의 10만 시간 이상 운영, 수천만 박스 하역 데이터에서 비계획 정지의 주요 원인을 추려 재설계했다. 자동차급 고내구 커넥터, 새 밸브 시스템과 정밀 센싱의 그리퍼, 하드스톱 없는 360° 초과 연속 회전 관절을 적용했고, 내부 배선을 81%(약 0.5마일) 줄여 간헐적 전기 고장의 최대 원인을 없앴다. 이동 배선과 복잡한 하네스를 없애고 체결구를 표준화해 스워브 드라이브 전체 교체가 하루에서 약 1시간으로 줄었으며, 온보드 진단 도구로 고객사 자체 정비 범위를 넓혔다. 처리량은 최대 1,000케이스/h(케이스 중량·적재 상태에 따라 다름), 배터리는 2교대, 고속 충전 약 75분에 90%다.
- 관련 근거: [Boston Dynamics 보도자료, 2026-11-03](https://bostondynamics.com/news/boston-dynamics-launches-next-generation-stretch-robot/) [공식 발표]
- 기존 대비 변화: 처리량 경쟁보다 가동률과 평균수리시간(MTTR) 단축 중심의 세대교체다. 재설계한 온보드 컴퓨팅에서 케이스 검출·모션 계획·피킹 전략을 정기 SW 릴리스로 플릿 전체에 개선한다. 1세대 대비 비교 수치는 공개하지 않았다.
- 생산기술 시사점: 부품 입고 도크의 트레일러·컨테이너 하역 무인화는 처리량보다 비계획 정지와 수리 시간이 운영 성패를 가른다. 진동·고토크 반복 환경의 대표 고장 모드(커넥터, 이동 배선, 회전 한계)를 설계로 없앤 접근은 공장용 이동로봇과 EOAT 사양 검토 항목으로 그대로 쓸 수 있다.
- 적용 수준: 양산(상용 제품 세대교체, 출하 시점 미표기). 분류는 기존기술 고도화
- 확인 필요: 출하 시점·가격, 1세대 대비 MTBF·가동률 개선치, 1세대 개조 가능 여부, 제조 공장 입고 도크 적용 사례

## 사출성형기술 상세

### 사출기·금형·소재

**[Progressive Components] DaterView — 금형 내부 데이트 플러그의 설정 월·연을 금형 밖에서 확인하는 표시 태그 출시**

- 확인 내용: 2026-10-30 공식 게시. 월·연 표시 휠을 매월 클릭으로 돌려 맞추는 12포지션 잠금 구조이며, 신규 금형용 볼트 고정형과 가동 중인 금형용 자석형(가공 불필요)이 있다. 사용 온도는 80 °C, 단열판 옵션 시 260 °C까지다.
- 관련 근거: [Progressive Components, 2026-10-30](https://procomps.com/progressive-introduces-new-daterview-mold-tag/) [공식 발표]
- 기존 대비 변화: 데이트 플러그 설정을 금형 내부나 성형품을 보지 않고 확인할 수 있게 했으나, 플러그와 기계적으로 연동되지 않아 수동으로 맞춰야 한다.
- 생산기술 시사점: 성형 일자 각인은 자동차 부품 추적성의 기본 요건이며 월 전환 누락을 일상 점검 항목으로 만들 수 있다. 태그와 실제 플러그가 어긋날 위험이 남아 초품 확인과 병행해야 한다.
- 적용 수준: 양산(판매 제품). 분류는 신규
- 확인 필요: 아시아 공급 여부, 자석형의 내열 한계

**[Mold-Masters] 인도 코임바토르 통합 시설 — 3개 거점을 12,350 m² 단일 시설로 통합해 핫러너 제조·설계·애프터서비스 일원화**

- 확인 내용: 2026-10-29 보도자료. 133,000 ft²(약 12,350 m²) 규모로 기존 3개 거점을 대체하며 면적은 약 4배다. 핫러너 시스템·온도 컨트롤러를 제조하고, 전 세계 생산 거점에 설계·CAE·CAM을 지원하는 엔지니어링 허브를 겸하며, 예비부품·수리·세척·현장 서비스를 한곳에서 제공한다.
- 관련 근거: [Mold-Masters, 2026-10-29](https://www.moldmasters.com/news-and-events/mold-masters-opens-new-facility-in-india) [공식 발표] / [ETMM, 2026-11-03](https://www.etmm-online.com/mold-masters-coimbatore-hot-runner-facility-india-a-0777b9f6473d885aae13812c7e7c2688/) [2차 인용]
- 기존 대비 변화: 분산된 제조·엔지니어링·서비스 기능을 한 건물로 모았다. 10-28 브리핑의 사우디 주바일 서비스 거점에 이은 신흥시장 서비스망 재편이다.
- 생산기술 시사점: 남아시아 사출 거점의 핫러너 공급·수리 리드타임이 줄어들 여지가 있고, 해외 거점 금형 발주 시 공급사의 설계 지원 위치를 확인 항목으로 둘 근거가 된다.
- 적용 수준: 양산(시설 가동). 분류는 서비스망 변화
- 확인 필요: 생산능력, 리드타임 목표, 서비스 대상 국가

**[참고] IPF Japan 2026 사전 공개 현황**: 조사 기간에 새로 나온 출품 발표는 스미토모중기계뿐이다. 소딕 특설 페이지(게시일 미표기)에는 벤트부 수지 상태를 감시해 스크류·피더를 자율 제어하는 V-LINE-Complete가 올라 있으나 관련 기종 발표(09-28)는 기간 밖이고, 시바우라기계(09-08)·유신정기(10-16) 등의 출전 공지도 기간 전 게시분 그대로다. [ソディック (일본어), 게시일 미표기](https://www.sodick.co.jp/feature/ipf2026) / [芝浦機械 (일본어), 2026-09-08](https://www.shibaura-machine.co.jp/jp/NEWS/event/20261201.html) / [ユーシン精機 (일본어), 2026-10-16](https://www.yushincompany.jp/newsrelease/archive/2026/ipf_japan_2026.html)

### 사출자동화·주변장치

**[아이엘(IL)] 사출 라인 휴머노이드 실증 — 공정 진단부터 고객사 현장 실증까지 5단계 운영 절차를 로보월드 2026에서 공개**

- 확인 내용: 2026-11-02 발표. 아이엘과 관계사 아이엘로보틱스가 로보월드 2026에 공동 참가한다. 자동차 전장 제조 계열사 아이엘모빌리티의 가동 중인 사출 생산라인을 테스트베드로 휴머노이드 공정 적용 기술을 검증하고 있으며, 전시에서는 공정 진단 → 시나리오 설계 → 데이터 수집 → 학습·검증 → 고객사 현장 실증(PoC)으로 이어지는 운영 방식을 소개한다. 방문 기업이 각자의 공정에 휴머노이드와 협동로봇을 적용할 수 있는지 검토하도록 구성했다.
- 관련 근거: [서울경제 (한국어), 2026-11-02](https://www.sedaily.com/article/20109127) [2차 인용] / [Seoul Economic Daily 영문판, 2026-11-02](https://en.sedaily.com/finance/2026/11/02/il-group-unveils-humanoid-robots-on-live-injection-molding) [2차 인용] / 선행 발표 [벤처스퀘어 (한국어), 2026-04-16](https://www.venturesquare.net/1076590/) [2차 인용]
- 기존 대비 변화: 외부 고객사 확대 방침은 2026-04 표준화 운영 패키지 발표에서 이미 나왔고, 일일 브리핑(11-03)의 '외부 PoC 확대'도 그 연장이다. 이번에 달라진 점은 도입 절차의 단계별 공개와 협동로봇 비교 제시이며 새 정량 데이터·고객사명은 없다.
- 생산기술 시사점: 취출 후 작업(검사·적재·후공정 투입)을 직교 취출로봇·협동로봇·휴머노이드 중 무엇에 맡길지 공정별로 비교하는 평가 틀로 쓸 수 있다. 공개 실적이 단일 계열사 라인 기준이고 전용 자동화와의 비교 데이터가 없어 투자 판단 근거로는 제한적이다.
- 적용 수준: 전시 데모(계열사 사출 라인 실증은 파일럿). 분류는 신규 적용사례
- 확인 필요: 로봇 기종, 담당 과업, 사출기 인터페이스 방식, 안전 구성, 외부 PoC 대상·건수

**[Mokon] Hydrotherm·Duratherm 금형온도조절기 — 통합 PLC를 표준 사양으로 적용해 공장 자동화 시스템과 연동**

- 확인 내용: 2026-10-29 보도. 두 제품군에 통합 PLC를 표준 탑재하고 산업 표준 통신 프로토콜로 공장 자동화 시스템과 통신한다. 제어 등급은 M-Control Essential(푸시버튼, 24 V 제어반)과 M-Control Advanced(진단 강화, 7인치 HMI 표준)로 나뉜다. 지원 프로토콜 명칭은 공개하지 않았다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-10-29](https://www.plasticsmachinerymanufacturing.com/product-innovations/product/55413605/mokon-adds-integrated-plcs-to-tcus) [업계 분석]
- 기존 대비 변화: PLC 통합을 표준 사양으로 명시하고 제어 등급을 2단계로 나눴다.
- 생산기술 시사점: 온조기가 상위 시스템에 붙으면 사출기 공정값과 금형온도 이력을 같은 로트 기록으로 묶을 수 있다. 온조기용 OPC UA 규격(EUROMAP 82.1) 지원 여부가 공개되지 않아 사출기 제어기 직결 범위는 판단할 수 없다.
- 적용 수준: 양산(표준 사양 변경, 적용 시점 미공개). 분류는 기존기술 고도화
- 확인 필요: 지원 프로토콜, 사출기 직접 연동 여부, 레트로핏 가능 여부, 회사 공식 자료

**[WITTMANN] WS90 — 서보 구동 소형 부품·스프루 취출기, 사출기 B8X 조작반에서 직접 제어(Fakuma 2026 사후 보도)**

- 확인 내용: 2026-11-03 보도. 서보 구동으로 압축공기·에너지 사용을 줄이고 가감속 값을 조정해 금형 영역 체류 시간을 줄인다. R9 제어기를 쓰며 WITTMANN 사출기와 묶은 셀에서는 사출기 B8X 조작반에서 직접 제어한다. 가반하중 최대 4.4 lb(약 2 kg), 대응 형체력 약 39–198 ton(보도 표기)이며 Fakuma 2026에서 처음 공개됐다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-11-03](https://www.plasticsmachinerymanufacturing.com/injection-molding/product/55416072/servo-drives-make-ws90-robot-efficient) [업계 분석] (WITTMANN 공식 자료 미확인)
- 기존 대비 변화: 공압 구동이 많은 스프루 피커 영역에 서보 구동을 적용했고, 09-30 브리핑의 R9 제어기를 소형 기종까지 넓혔다.
- 생산기술 시사점: 공압 실린더를 서보로 바꾸면 압축공기 사용이 줄고 동작 속도 조정 폭이 생겨 소형 셀의 에너지 절감·사이클 미세 조정 항목이 된다. 사출기 조작반 일원화는 소형 셀 다수를 소수 인원이 관리하는 운영에서 교육 부담을 줄인다.
- 적용 수준: 전시 데모(Fakuma 2026 데뷔), 출시 일정 확인 필요. 분류는 신규
- 확인 필요: 공식 사양·출시 시점, 스트로크, 사이클타임

**[참고] 성형품 비전·AI 권고 SW**: 일일 브리핑(11-03)에서 다룬 Zebra의 금형 잔류물·툴링 마모 감시는 인터뷰(11-02)에서 기존 제품군(2024-05 출시 3S 시리즈 등)의 적용 범위를 설명한 것으로 신제품이 아니며, Zebra 측도 공정 자동 보정은 아직 AI가 맡을 수준이 아니라고 밝혔다. Intravis의 AI 조치 권고 클라우드 IntraRecommender(10-28 보도)는 출시일이 확인되지 않았다. [PMM, 2026-11-02](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55413226/zebra-vision-systems-include-conventional-and-ai-tools) / [PMM, 2026-10-28](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55413211/intravis-systems-help-boost-efficiency-reduce-scrap)

**직전 브리핑 확인 필요 항목 후속**: 하모 신형 대형 취출로봇은 10-28 웨비나 이후에도 사양이 공개되지 않았다([ハーモ 제품 목록 (일본어), 2026-11-04 확인](https://www.injection-molding.jp/products/robot)). MATSUI Zeroteach-AMR의 금형 중량·위치결정 정밀도, ARBURG Standalone 로봇의 EUROMAP 77·79 지원, Koch-Technik 오접속 검지 신호의 인터록 연계, Shibaura Machine LWB MultiStation 실연 정량치도 추가 공개가 없었다. Envalior 할로겐 프리 난연 PBT(Pocan BFN4135) 관련 11-03 보도는 원문을 열지 못해 다음 호에서 확인한다.

**신규 없음으로 확인**: ARBURG, KraussMaffei, Haitian, 시바우라기계, 닛세이수지, LS엠트론, FANUC ROBOSHOT, 소딕, HB-Therm, Covestro, Sepro, 유신정기, 하모, 마쓰이, 가와타, motan, Moretto, Piovan, HEKUMA, Waldorf Technik은 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. ENGEL·JSW·Meusburger·HASCO는 공식 페이지 접근 실패로, Sumitomo (SHI) Demag 유럽·Milacron·Netstal·Synventive와 소재사 다수는 검색 한도로 이번 주 확인하지 못했다.

## 로봇제조기술 상세

### 산업·협동로봇·로봇 SW

**[HD현대로보틱스 / Palantir] 로봇 프로그램 분석 AI 에이전트 — 로봇 프로그래밍 관련 문제 해결 기간 평균 21.5일에서 7.9일로 약 63% 단축(시범 적용)**

- 확인 내용: 2026-11-01 발표. AI 에이전트가 기존 로봇 프로그램을 분석해 작업 순서·이동 경로·속도 개선안을 내면 엔지니어가 현장 경험으로 검토·보완하는 구조로, AI 에이전트·시뮬레이션·엔지니어 판단을 결합했다. 2026년 8월부터 문제 해결 과정에 적용해 평균 업무 기간을 21.5일에서 7.9일로 줄였다. 로봇 프로그래밍 비용 50% 이상 절감은 향후 목표치이고, 향후 HD현대로보틱스 로봇과 Palantir AIP를 연결할 계획이다.
- 관련 근거: [비즈니스플러스 (한국어), 2026-11-01](https://www.businessplus.kr/news/articleView.html?idxno=119065) [2차 인용] / [신아일보 (한국어), 2026-11-01](https://www.shinailbo.co.kr/news/articleView.html?idxno=5078198) [2차 인용]
- 기존 대비 변화: 숙련 엔지니어가 현장에서 순서·경로·속도를 반복 조정하던 방식이 'AI 제안 → 시뮬레이션 → 엔지니어 승인' 구조로 바뀌었다. 고장 진단·예지보전 기능은 언급되지 않아 유지보수 SW보다 프로그래밍·시운전 지원 SW로 보는 것이 정확하다.
- 생산기술 시사점: 차종 변경·라인 증설 때 로봇 프로그램 튜닝 리드타임은 SOP 일정의 병목이 된다. 63%는 문제 해결 리드타임이며 사이클타임 개선 수치가 아니다. 화낙이 JIMTOF에서 CNC에 적용한 'AI 제안 → 디지털 트윈 검증 → 작업자 승인' 구조와 같은 인간 승인형 설계다.
- 적용 수준: 파일럿(2026-08부터 시범 적용). 분류는 신규 적용사례
- 확인 필요: 대상 공정·로봇 기종·처리 건수, '문제 해결' 업무의 정의, 사용 시뮬레이터, 고객 현장 적용 여부

**[FANUC] JIMTOF 2026 로봇 신상품 3종 — 교시 없는 AI 3D 인식, 협동로봇용 DC 컨트롤러, 로봇 제어기 내장 안전 PLC(직전 호 누락 보완)**

- 확인 내용: 직전 호에서 FANUC을 '신규 없음'으로 분류했으나 JIMTOF 2026(10-26 개막)에 맞춰 일본 본사 신상품 페이지에 로봇 신상품 3건이 게시된 것을 확인해 보완한다(게시 2026-10, 조사 기간 이전). ① AI 마스터리스 비전: "원주 부품"처럼 일반 명사로 지시하면 처음 보는 이미지에서 3D 형상을 인식해 집으며 공작물별 비전 교시가 필요 없다. 투명·광택 공작물도 인식하며 출하 2027-01. ② R-50iA Compact DC: CRX 협동로봇용 DC 전원 입력 소형 컨트롤러로 AMR·AGV 탑재를 전제로 하며 출하 2026-11. ③ 안전 소프트 PLC: ISO 13849-1 PL e 기반 안전 PLC 기능을 R-50iA 제어기 소프트웨어(CODESYS, IEC 61131-3)로 구현해 외부 안전 PLC를 없앤다. 안전 EtherNet/IP로 안전기기와 직결하고 듀얼 체크 세이프티(DCS)의 동작 영역·속도 감시와 통합하며, ROBOGUIDE에서 로봇·안전 PLC 프로그램을 함께 가상시운전할 수 있다. 출하 2027-01.
- 관련 근거: [ファナック AIマスタレスビジョン (일본어), 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_aimasterlessvision.html) [공식 발표] / [ファナック R-50iA Compact DC (일본어), 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_r50iacompactdc.html) [공식 발표] / [ファナック 安全ソフトPLC (일본어), 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_safetysoftwareplc.html) [공식 발표]
- 기존 대비 변화: 비전 셀은 품종마다 비전 교시와 조명 조정이 필요했고, 안전 신호 시퀀스는 별도 하드웨어 안전 PLC와 실기 확인에 의존했다. 3건은 각각 교시 공수, 이동체 탑재 전원 구성, 안전 PLC 하드웨어·실기 확인을 줄이는 방향이다.
- 생산기술 시사점: 안전 PLC 내장과 가상시운전은 사람–로봇 공유 셀의 안전 시퀀스 검증을 사무실 단계로 앞당긴다. 대신 안전 기능 변경관리가 로봇 프로그램 관리 체계 안으로 들어오므로 안전 프로그램 버전 관리·승인 절차를 따로 정해야 한다. AI 마스터리스 비전은 광택 금속·투명 부품의 비전 셋업 부담을 줄이지만 인식 실패 처리와 사이클타임 데이터는 공개되지 않았다.
- 적용 수준: 기술자료(출하 2026-11 – 2027-01 예정), JIMTOF 실연. 분류는 신규
- 확인 필요: AI 마스터리스 비전의 인식 정확도·처리 시간·대상 형상 범위, 안전 소프트 PLC의 제3자 인증 현황, Compact DC 입력 전압 범위

**[Seiko Epson] AX6-A901S·RC-A101 — 협동로봇 일본 수주 개시와 함께 6 kg·900 mm 사양, AGV·AMR 탑재형 소형 컨트롤러 공개**

- 확인 내용: 2026-10-29 엡손재팬을 통해 수주를 시작했다(2025-06-03 개발 발표 제품). 가반 6 kg, 암 길이 900 mm이며 Python과 블록 프로그래밍을 지원한다. 소형 컨트롤러 RC-A101은 AGV·AMR 탑재에 대응하며, 보도 기준 반복정밀도 ±0.03 mm, 외부 연계 TCP/IP·REST·ROS 2·Modbus TCP, AC 100–240 V·DC 48 V 입력 대응이다.
- 관련 근거: [セイコーエプソン 뉴스릴리스 (일본어), 2026-10-29](https://corporate.epson/ja/news/2026/261029.html) [공식 발표] / [FabScene (일본어), 2026-11-02](https://fabscene.com/new/news/epson-ax6-a901s-collaborative-robot-rc-a101/) [2차 인용]
- 기존 대비 변화: 09-23 브리핑의 AX6 출시 보도에서 확인 필요로 남긴 가반하중·리치가 공개됐고 이동체 탑재형 컨트롤러가 함께 나왔다. 제품은 2025년 개발 발표분이어서 신규 기술이 아니라 지역 판매 개시로 분류한다.
- 생산기술 시사점: 6 kg·900 mm급은 소형 부품 조립·검사·머신텐딩의 표준 영역이다. FANUC R-50iA Compact DC와 함께 협동로봇 컨트롤러를 이동체 배터리 전원에 직결하는 구성이 일본 로봇 메이커의 공통 방향으로 확인된다.
- 적용 수준: 양산(일본 수주 개시, 출하 시기 미공개). 분류는 기존 발표 제품의 판매 개시
- 확인 필요: 출하 시기, ISO 10218-1:2025 적합·안전 성능 수준

**[참고] 일일 브리핑 단서 판단**: 화낙의 LLM–CNC 연계(11-02 일일)는 디지털 트윈 검증·작업자 승인 뒤에만 반영하는 CNC 측 기능으로 로봇 측 기능은 없고, 오쿠마의 온프레미스 AI 에이전트(11-03 일일)도 로봇 연계가 없다. 로이터가 인용한 CATL 배터리팩 공정의 유연 전선 삽입 성공률 99% 초과(11-03 일일)는 2025-12 CATL 발표를 재인용한 것으로 2026년 신규 기술이 아니다. [MONOist (일본어), 2026-10-30](https://monoist.itmedia.co.jp/mn/articles/2610/30/news047.html) / [MONOist (일본어), 2026-11-02](https://monoist.itmedia.co.jp/mn/articles/2611/02/news033.html) / [CnEVPost, 2025-12-18](https://cnevpost.com/2025/12/18/catl-launches-humanoid-robot-powered-battery-pack-line/)

### 휴머노이드·액추에이터

**[현대모비스] Atlas용 액추에이터 — 11월 의왕연구소 시제품 생산 착수, 2028년 공급 전 성능·신뢰성 검증, 핸드그리퍼·퍼셉션 모듈·제어기로 확장**

- 확인 내용: 2026-10-30 3분기 실적 발표에서 11월부터 의왕연구소에서 보스턴다이나믹스 Atlas용 액추에이터 시제품을 생산한다고 밝혔다. 2028년으로 예상되는 공급 시점에 맞춰 성능·신뢰성을 검증하고 표준화·모듈화로 성능을 개선한다. 수주가 확정된 액추에이터에 이어 핸드그리퍼·퍼셉션 모듈·제어기 기술을 확보해 다른 휴머노이드 업체로 고객을 넓히며, 핵심부품 다변화 조직을 신설하고 관련 인력을 약 2배로 늘린다.
- 관련 근거: [지디넷코리아 (한국어), 2026-10-30](https://zdnet.co.kr/view/?no=20261030151125) [2차 인용] / [인사이트코리아 (한국어), 2026-10-30](https://www.insightkorea.co.kr/news/articleView.html?idxno=257688) [2차 인용]
- 기존 대비 변화: 10-28 브리핑의 공급망 보도(1만 대분 준비 요청, 공식 미확인) 이후 회사가 생산 착수 시점, 2028 공급 전 검증 일정, 확장 품목을 직접 밝혔다. 1만 대분 물량은 여전히 공식 확인이 없다.
- 생산기술 시사점: 차량 전동 구동부품의 양산 역량을 휴머노이드 관절로 옮기는 '시제품 → 신뢰성 검증 → 양산' 경로가 일정으로 구체화됐다. 핸드그리퍼까지 부품사가 맡으면 휴머노이드 EOAT가 1차 협력사 모듈로 공급되는 구조가 늘어날 수 있다[추정].
- 적용 수준: 파일럿(시제품 생산). 분류는 신규 적용사례
- 확인 필요: 시제품 수량·사양(토크·감속기 형식), 시제품 라인 구성, 보스턴다이나믹스 공식 확인

**[LG전자] 휴머노이드 액추에이터 — 창원 파일럿 라인이 생산 준비 단계로, 학습용 데이터 팩토리 4분기 본격 가동**

- 확인 내용: 2026-10-28 3분기 실적 컨퍼런스콜에서 상반기 창원에 구축한 액추에이터 파일럿 라인이 설비 자동화·품질 강화 등 생산 준비 단계라고 밝혔고, 잠재 고객 대상 수주 활동을 병행한다. 데이터 팩토리는 4분기 본격 가동해 실제·가상 데이터를 결합한 학습 데이터를 내년까지 누적 약 50만 시간 확보할 계획이다. 10-31 보도에 따르면 클로이드는 외부 위탁 생산을 끝내고 자체 조립으로 전환했다(회사 공식 확인 없음).
- 관련 근거: [디지털데일리 (한국어), 2026-10-28](https://www.ddaily.co.kr/page/view/2026102818112931125) [2차 인용] / [지디넷코리아 (한국어), 2026-10-31](https://zdnet.co.kr/view/?no=20261031010426) [2차 인용]
- 기존 대비 변화: 액추에이터가 파일럿 라인 구축에서 설비 자동화를 포함한 생산 준비로 넘어갔다.
- 생산기술 시사점: 같은 주 현대모비스 발표와 함께 국내 자동차 부품·가전 업체가 휴머노이드 관절 모듈 양산 준비에 들어가 액추에이터 공급선이 다변화되는 흐름이다.
- 적용 수준: 파일럿. 분류는 신규 적용사례
- 확인 필요: 액추에이터 사양·생산능력·양산 개시 시점, 클로이드 자체 생산 공식 확인

### AMR·라인사이드 물류

**[Siemens] Sinamics E210·Simotics E-1EE1 — AGV·AMR용 24 V·48 V 초저전압(ELV) 구동계를 TIA Portal·Simove 체계에 통합**

- 확인 내용: 2026-11-02 발표. Sinamics E210은 배터리 구동 24 V·48 V 전용 소형 회생 컨버터로 주행·조향·리프트·보조축을 제어하며, 배터리 직결로 추가 전압 변환을 없앴고 통합 안전 기능·PROFIsafe·PROFINET IRT를 지원한다. Simotics E-1EE1 서보모터(축높이 40–63)는 14비트 BiSS-C 절대 안전 엔코더와 내부 이중 채널 구조로 SIL 2까지의 안전 용도를 지원하고, 전자 명판으로 E210이 모터 데이터를 자동으로 읽어 시운전을 단순화한다.
- 관련 근거: [Siemens 보도자료, 2026-11-02](https://press.siemens.com/global/en/pressrelease/siemens-launches-new-elv-drive-solution-agvs-and-mobile-robotics) [공식 발표]
- 기존 대비 변화: 배터리 직결 ELV 컨버터, SIL 2 엔코더 모터, 공장 PLC 엔지니어링 환경(TIA Portal)·이동체 모듈 체계(Simove)를 한 공급사 체계로 묶었고, ELV 모터를 더 높은 출력·토크 영역으로 넓혔다.
- 생산기술 시사점: 라인사이드 견인차·리프트형 AGV를 자체 제작하거나 개조할 때 구동, 안전 통신, 상위 PLC 연동을 한 환경에서 설계해 안전 개념 검증 공수와 DC/DC 변환 부품을 줄일 여지가 있다. 특정 PLC 생태계 종속 여부는 따로 검토해야 한다.
- 적용 수준: 기술자료(제품 출시 발표). 분류는 신규
- 확인 필요: 정격 전류·출력 범위, 안전 기능 종류·인증 등급, 출하 시점, 플릿 인터페이스(VDA 5050·ISO 21423) 지원

**[Hikrobot(海康机器人)] CeMAT Asia 2026 — 교차통로 STU·明智 Z1/Z2 첫 실물 공개, 고반사 주조품 상하역 3D 비전·서브프레임 인라인 측정 셀 시연**

- 확인 내용: 11-03 개막한 CeMAT Asia 2026에 40여 종을 출품했다. 단일통로 양측 STU와 교차통로 STU를 처음 실물 공개했고(STU 2초 박스 취출·적치, T50 릴레이 대당 80박스/h), 서버 없이 차체에서 판단하는 明智 Z1-300(0.6 m 통로)·Z2-1500(1.9 m 통로 포크 진입)은 교차로에서 서로 통행을 협상한다. 작업 셀은 레이저 스테레오 카메라 기반 고반사 사형 주조품 상하역(Z축 반복 0.08 mm), 3D 서브프레임 인라인 측정(±0.2 mm, 점당 최단 2초, 드리프트 자가 보정)을 시연했고, 6만 m² 자동차 제조 전 공정 시뮬레이션(PlantMirror)도 선보였다.
- 관련 근거: [新浪科技(A5创业网) (중국어), 2026-11-03](https://finance.sina.com.cn/tech/roll/2026-11-03/doc-inixncmx8696136.shtml) [2차 인용] / [FX168 (중국어), 2026-11-03](https://www.fx168news.com/article/1111776) [2차 인용]
- 기존 대비 변화: 10-28 브리핑에서 다룬 STU·T50 운영모델과 明智 시리즈가 처음 실물로 공개됐고, 물류 전시에 주조품·서브프레임 공정 셀이 함께 나왔다.
- 생산기술 시사점: AMR 공급사의 범위가 창고 반송에서 비전 상하역·인라인 측정·공장 시뮬레이션으로 넓어져 물류와 공정 셀의 경계가 겹친다. ±0.2 mm 인라인 측정은 서브프레임 치수 관리에 쓸 수 있는 수준이나 측정 조건과 게이지 R&R 데이터가 필요하다.
- 적용 수준: 전시 데모. 분류는 기존기술 고도화(일부 신규)
- 확인 필요: 교차통로 STU 출시 시점·타사 관제 연동, 각 제품 출하 시점, 회사 공식 보도자료

**[Geek+(极智嘉)] RoboPallet — 기존 빔 랙을 유지하는 고위·저위 포크 AMR 분업형 팔레트 자동화, 2027-01 양산 예정(CeMAT 사전 공개)**

- 확인 내용: 2026-11-02 보도. RP11 고위 포크 AMR이 수직 입출고를, RP2 저위 포크 또는 P 시리즈가 저위 버퍼–워크스테이션 이송을 맡고 RMS가 통합 관제한다. 기존 빔 랙과 田·川자·목재 팔레트를 그대로 쓰며 천장 13 m 이하 수동 지게차 창고가 대상이다. 2027-01 양산 예정이고 ROI 최단 1년·피킹 효율 3배 이상은 회사 주장이다.
- 관련 근거: [ITBear (중국어), 2026-11-02](https://www.itbear.com.cn/html/2026-11/1580271.html) [2차 인용]
- 기존 대비 변화: 고밀도 4방향 셔틀 계열 외에 '기존 랙 유지 + 포크 AMR 분업' 노선을 추가하고 양산 시점을 처음 제시했다.
- 생산기술 시사점: 수동 지게차 기반 부품·완성품 창고를 랙 교체 없이 단계적으로 자동화하는 선택지다.
- 적용 수준: 전시 데모(2027-01 양산 예정). 분류는 신규
- 확인 필요: RP11 리프트 높이·하중, 안전 인증, 회사 공식 보도자료

**[클로봇 컨소시엄] 다중대차 견인형 자율주행 물류로봇 — 최대 3 t·대차 5대 견인, 전기차 배터리팩 제조시설 실증(국책과제 막바지)**

- 확인 내용: 11-03 개막한 2026 AIoT 국제전시회(코엑스)에 한국통합물류협회가 출품했다. 산업통상부 과제(2023년 – 2026-12-31)로 클로봇이 주관하고 한국통합물류협회·가우리기술·한국로봇융합연구원·부경대학교산학협력단·화신이 공동 개발한다. 공정 내부와 작업장 간 실내외 이송을 자율주행으로 수행하며 최대 3 t·대차 5대를 견인하고, 최대 10° 경사로 주행과 270° 범위 장애물 인식·회피가 가능하다. 배터리팩 공장의 중량 자재 이송에서 지게차를 대체하는 것이 목표다.
- 관련 근거: [산업일보 (한국어), 2026-11-03](https://kidd.co.kr/news/247979) [2차 인용]
- 기존 대비 변화: 공개 자료에 기존 기술 대비 비교는 없으며, 과제 목표상 다중 대차 연결 견인과 실내외 공정 간 이송을 함께 겨냥한다.
- 생산기술 시사점: 지게차 의존도가 높은 중량 부품의 공정 간 이송을 대차 열차 방식으로 무인화하는 선택지다. 다중 대차 견인은 회전 반경과 후속 대차의 궤적 추종이 통로 폭을 좌우하므로 레이아웃 검토가 선행돼야 한다.
- 적용 수준: 파일럿(실증, 개발 막바지). 분류는 신규 적용사례
- 확인 필요: 실증 결과(가동률·속도), 대차 연결·분리 자동화 여부, 안전 인증, 상용화 일정

### EOAT·그리퍼·툴체인저

**[유엔디로보틱스] MAGBOT 툴체인저 기반 모듈러 휴머노이드·D-Air 전동 그리퍼 — 양팔 모바일 매니퓰레이터의 손목 인터페이스로 무선 마그네틱 ATC 적용**

- 확인 내용: 2026-10-28 보도(업체 발표). FIX 2026에서 초안을 공개한 바퀴형 모듈러 휴머노이드는 한화로보틱스 협동로봇 양팔 끝단에 자체 개발 MAGBOT 무선 스위칭 마그네틱 ATC(교체 0.2초)를 달아 그리퍼·센서·전동공구를 자동 교체하고, 500 kg급 전방향 AMR을 베이스로 쓴다. 공압 배관·컴프레서 없이 DC로 제어하는 형상기억 전동 그리퍼 D-Air도 공개했다. 국내 대기업 로봇 자동화 1차 협력사 등록을 마쳤고(대기업명 미공개), 로보월드 2026에서 양산형을 출시할 예정이다.
- 관련 근거: [로봇신문 (한국어), 2026-10-28](https://www.irobotnews.com/news/articleView.html?idxno=49267) [2차 인용]
- 기존 대비 변화: 고정형 로봇 손목용이던 툴체인저를 이동형 양팔 로봇의 손목 인터페이스로 넓혔고, 공압 없는 그리퍼로 배터리 구동 모바일 매니퓰레이터의 에어 공급 문제를 피했다.
- 생산기술 시사점: 한 대가 공정별 EOAT를 바꿔 체결·삽입·핸들링을 이어 수행할 수 있어 라인사이드 다품종 작업에서는 툴 스테이션 배치와 EOAT 인터페이스 표준화가 설계 요소가 된다. 공압 없는 그리퍼는 AMR 탑재 시 컴프레서·탱크를 없애 탑재 중량을 줄인다.
- 적용 수준: 전시 데모(양산형은 로보월드 출시 예정). 분류는 신규
- 확인 필요: 1차 협력사 등록처와 적용 공정, ATC 반복정밀도·허용 하중, D-Air 파지력·응답 속도, 안전 인증

**신규 없음으로 확인**: Universal Robots(최신 10-21), Techman Robot, 두산로보틱스(영문), NVIDIA(로봇 관련 최신 10-21), 가와사키중공업, 나치후지코시, Agility Robotics(기간 내 금융 공시만), Figure, Apptronik, SCHUNK는 공식 페이지 기준 기간 내 해당 기술 발표가 없었다. Boston Dynamics는 Stretch Gen 2 외 Atlas 관련 발표가 없었고, AutoStore의 11-02 국내 보도 신제품은 10-14 브리핑에서 다룬 2026년 가을 릴리스와 같은 내용이어서 제외했다. ABB·KUKA·미쓰비시전기·DENSO Wave·Stäubli·Omron·HD현대로보틱스·한화로보틱스·레인보우로보틱스의 공식 뉴스룸, 중국 로봇·AMR사, Tesla·Unitree·AgiBot, EOAT 전업 벤더(Zimmer·Piab·Festo·SMC·Robotiq·OnRobot 등)는 접근 실패·검색 한도로 이번 주 확인하지 못했다.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 AI 공정제어의 피드백 입력이 성형기 실적값(쿠션·피크압)에서 금형 내압으로 확장(스미토모 AI-Drive Optima+), 금형온도조절기 PLC 표준 탑재(Mokon) | 공정 보정의 기준이 성형기 측 간접 신호에서 캐비티 측 직접 신호로 옮겨가고, 주변기기 데이터가 셀 단위 로트 기록에 들어올 조건이 갖춰짐 |
| 기술 변화 | AI 용접이 인식·판단·검사·보정을 셀 안에서 닫는 형태로 실생산 투입(Yaskawa), 안전 PLC의 로봇 제어기 내장과 가상시운전(FANUC, 직전 호 보완) | 후공정 검사·리워크와 안전 시퀀스 실기 확인이 셀 설계·사무실 검증 단계로 앞당겨짐 |
| 기술 변화 | 이동체 전원 직결 구성 확산: 협동로봇용 DC 컨트롤러(FANUC R-50iA Compact DC, Epson RC-A101), AGV·AMR용 ELV 구동계(Siemens E210) | 모바일 매니퓰레이터·자체 제작 AGV에서 전압 변환·배선을 줄이는 부품 선택지가 늘어남 |
| 표준 변화 | ISO 21423 정식 발행(이기종 IMR·플릿 매니저·설비 간 통신) | 여러 메이커 AMR을 혼용하는 공장의 구매 사양·관제 설계에 국제 기준 적용 가능 |
| 업체 변화 | 휴머노이드 관절 모듈 양산 준비(현대모비스 11월 시제품 생산, LG전자 생산 준비), 물류 자동화의 기존 설비 유지형 옵션 확대(Geek+ 기존 랙 유지, Hikrobot 서버리스 AMR) | 액추에이터 공급망이 자동차·가전 부품사로 넓어지고, 창고 자동화의 재공사 부담이 줄어듦 |
| 적용사례 변화 | Yaskawa × GR 실생산(양산), HD현대로보틱스 AI 에이전트(파일럿), 아이엘 사출 라인 휴머노이드 PoC 절차(전시), 클로봇 배터리팩 공장 견인 AMR(실증), Stretch Gen 2(상용 세대교체) | AI 적용 성과가 동작 생성보다 엔지니어링·검사·정비 공수 절감 수치로 먼저 나오는 흐름 |
| 확인 필요 | Optima+ 출시 시기·센서 사양, WABOT A310 대응 형체력·인터페이스, ISO 21423 발행본과 FDIS의 차이, Stretch Gen 2 출하 시점, ENGEL·JSW 공식 발표(접근 실패) | 다음 조사에서 공식 자료 확보 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | 로보월드 2026(11-04 – 11-07, KINTEX) 현장 발표 | 협동로봇·휴머노이드·EOAT | 유엔디로보틱스 양산형 모듈러 휴머노이드·MAGBOT 사양, 아이엘 사출 라인 실증 상세, 국내 협동로봇·AMR 신제품, HD현대로보틱스 양팔로봇 공식 사양(참가 여부 포함) |
| 2 | CeMAT Asia 2026(11-03 – 11-06) 사후 보도 | AMR·물류 | Hikrobot 교차통로 STU 출시 시점·타사 관제 연동, Geek+ RoboPallet 사양 |
| 3 | SPE 자동차혁신상 결과(미국 현지 11-04 시상) | 사출·소재 | 사출·소재 수상작의 공정 조건·양산 정보 |
| 4 | IPF Japan 2026(12-01 – 12-05) 사전 공개 | 사출기·취출로봇 | 스미토모중기계 전시 소개 후편, 하모 대형 취출로봇 사양, JSW·닛세이·화낙 출품 내용 |
| 5 | ISO 21423 대응 발표 | AMR 상호운용 | 주요 AMR·플릿 관리 업체의 지원 일정, VDA 5050 매핑 지침 |
| 6 | A3 국제로봇안전회의(IRSC, 11-03 – 11-05, 디트로이트) | 로봇 안전 | ISO 10218·R15.08 적용 지침, AI 인지 기반 안전 기능 관련 발표 |
| 7 | Formnext 2026(11-17 개막) | 금형(적층) | 적층 금형 인서트·컨포멀 쿨링의 내구·사이클 데이터 |
| 8 | ARBURG ALS(MES) 웨비나(11-23) | 사출 데이터 | ALS 신규 AI 기능·주변장치 데이터 통합 범위 |
| 9 | SPS 2026(11-24 – 11-26, 뉘른베르크) 사전 발표 | 구동·안전·로봇 SW | Siemens E210 안전 기능 상세, 로봇·PLC 통합 엔지니어링 발표 |

## 출처

### 사출성형기술

- [PR TIMES 住友重機械工業 (일본어), 「IPF Japan 2026（国際プラスチックフェア）」に出展します, 2026-10-28](https://prtimes.jp/main/html/rd/p/000000157.000100192.html)
- [住友重機械工業 PlasPlus (일본어), ReThink with us. 展示の見どころ紹介 前編, 2026-11-04 확인](https://www.shi.co.jp/plastics/blog/jp-0079.html)
- [住友重機械工業 PlasPlus (일본어), 成形条件調整は経験則からAIサポートへ, 2026-11-04 확인](https://www.shi.co.jp/plastics/blog/jp-0070.html)
- [산업일보 (한국어), 우진플라임 자동차 부품 사출성형 공정용 취출로봇 WABOT A310, 2026-10-30](https://kidd.co.kr/news/247937)
- [산업일보 (한국어), 우진플라임 WABOT 브랜드 공개, 2026-04-24](https://kidd.co.kr/news/245809)
- [Progressive Components, Progressive Introduces New DaterView Mold Tag, 2026-10-30](https://procomps.com/progressive-introduces-new-daterview-mold-tag/)
- [Mold-Masters, Mold-Masters Opens New Facility in India, 2026-10-29](https://www.moldmasters.com/news-and-events/mold-masters-opens-new-facility-in-india)
- [ETMM, Mold-Masters Coimbatore Hot Runner Facility, 2026-11-03](https://www.etmm-online.com/mold-masters-coimbatore-hot-runner-facility-india-a-0777b9f6473d885aae13812c7e7c2688/)
- [ソディック (일본어), IPF JAPAN 2026 특설 페이지, 게시일 미표기](https://www.sodick.co.jp/feature/ipf2026)
- [芝浦機械 (일본어), IPF JAPAN 2026 出展案内, 2026-09-08](https://www.shibaura-machine.co.jp/jp/NEWS/event/20261201.html)
- [ユーシン精機 (일본어), IPF JAPAN 2026 出展案内, 2026-10-16](https://www.yushincompany.jp/newsrelease/archive/2026/ipf_japan_2026.html)
- [서울경제 (한국어), 아이엘그룹 사출 생산라인 휴머노이드 공정 실증 공개, 2026-11-02](https://www.sedaily.com/article/20109127)
- [Seoul Economic Daily, IL Group Unveils Humanoid Robots on Live Injection Molding, 2026-11-02](https://en.sedaily.com/finance/2026/11/02/il-group-unveils-humanoid-robots-on-live-injection-molding)
- [벤처스퀘어 (한국어), 아이엘 휴머노이드 표준화 운영 패키지, 2026-04-16](https://www.venturesquare.net/1076590/)
- [Plastics Machinery & Manufacturing, Mokon Adds Integrated PLCs to TCUs, 2026-10-29](https://www.plasticsmachinerymanufacturing.com/product-innovations/product/55413605/mokon-adds-integrated-plcs-to-tcus)
- [Plastics Machinery & Manufacturing, Servo Drives Make WS90 Robot Efficient, 2026-11-03](https://www.plasticsmachinerymanufacturing.com/injection-molding/product/55416072/servo-drives-make-ws90-robot-efficient)
- [Plastics Machinery & Manufacturing, Zebra Vision Systems Include Conventional and AI Tools, 2026-11-02](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55413226/zebra-vision-systems-include-conventional-and-ai-tools)
- [Plastics Machinery & Manufacturing, Intravis Systems Help Boost Efficiency, Reduce Scrap, 2026-10-28](https://www.plasticsmachinerymanufacturing.com/manufacturing/article/55413211/intravis-systems-help-boost-efficiency-reduce-scrap)
- [ハーモ (일본어), 취출로봇 제품 목록, 2026-11-04 확인](https://www.injection-molding.jp/products/robot)

### 로봇제조기술

- [RoboticsTomorrow(A3 보도자료), New ISO Interoperability Standard Helps Mobile Robots from Different Vendors Work Together, 2026-11-02](https://www.roboticstomorrow.com/news/2026/11/02/new-iso-interoperability-standard-helps-mobile-robots-from-different-vendors-work-together/27330/)
- [Robotics 24/7, ISO 21423 Helps Mobile Robots from Different Vendors Communicate Together, 2026-11-03](https://www.robotics247.com/article/iso-21423-helps-mobile-robots-from-different-vendors-communicate-together)
- [DIN Media, ISO 21423 서지 정보, 2026-11-04 확인](https://www.dinmedia.de/en/standard/iso-21423/407458544)
- [iTeh Standards, ISO/FDIS 21423 미리보기, 2026-11-04 확인](https://standards.iteh.ai/catalog/standards/iso/f772b16e-582a-4ed4-9f79-0a80ad376f40/iso-fdis-21423)
- [A3, ISO 21423 Building Global Consensus for Mobile Robot Interoperability, 게시일 미표기](https://www.automate.org/robotics/editorials/iso-21423-building-global-consensus-for-mobile-robot-interoperability)
- [Yaskawa, Yaskawa Electric and GAZOO Racing Advance Welding Technology Proven in Motorsports, 2026-10-28](https://www.yaskawa-global.com/newsrelease/267239)
- [ニュースイッチ (일본어), 安川電機·GAZOO Racing 자율 용접 기술 보도, 2026-10-30](https://newswitch.jp/p/50666)
- [Boston Dynamics, Boston Dynamics Launches Next Generation Stretch Robot, 2026-11-03](https://bostondynamics.com/news/boston-dynamics-launches-next-generation-stretch-robot/)
- [비즈니스플러스 (한국어), HD현대로보틱스 팔란티어와 피지컬 AI 고도화, 2026-11-01](https://www.businessplus.kr/news/articleView.html?idxno=119065)
- [신아일보 (한국어), HD현대로보틱스 팔란티어 협력 성과, 2026-11-01](https://www.shinailbo.co.kr/news/articleView.html?idxno=5078198)
- [ファナック (일본어), AIマスタレスビジョン, 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_aimasterlessvision.html)
- [ファナック (일본어), 協働ロボット向けDCコントローラ R-50iA Compact DC, 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_r50iacompactdc.html)
- [ファナック (일본어), 安全ソフトPLC, 2026-10](https://www.fanuc.co.jp/ja/product/new_product/2026/202610_robot_safetysoftwareplc.html)
- [セイコーエプソン (일본어), エプソン初の人協働ロボット『AX6-A901S』と小型コントローラー『RC-A101』を新発売, 2026-10-29](https://corporate.epson/ja/news/2026/261029.html)
- [FabScene (일본어), Epson AX6-A901S·RC-A101 보도, 2026-11-02](https://fabscene.com/new/news/epson-ax6-a901s-collaborative-robot-rc-a101/)
- [MONOist (일본어), 화낙 JIMTOF 2026 피지컬 AI CNC 보도, 2026-10-30](https://monoist.itmedia.co.jp/mn/articles/2610/30/news047.html)
- [MONOist (일본어), 오쿠마 온프레미스 AI 에이전트 보도, 2026-11-02](https://monoist.itmedia.co.jp/mn/articles/2611/02/news033.html)
- [CnEVPost, CATL Launches Humanoid Robot-Powered Battery Pack Line, 2025-12-18](https://cnevpost.com/2025/12/18/catl-launches-humanoid-robot-powered-battery-pack-line/)
- [지디넷코리아 (한국어), 현대모비스 내달 아틀라스 부품 시제품 생산, 2026-10-30](https://zdnet.co.kr/view/?no=20261030151125)
- [인사이트코리아 (한국어), 현대모비스 로보틱스 핵심부품 확대, 2026-10-30](https://www.insightkorea.co.kr/news/articleView.html?idxno=257688)
- [디지털데일리 (한국어), LG전자 로봇 액추에이터 생산 준비, 2026-10-28](https://www.ddaily.co.kr/page/view/2026102818112931125)
- [지디넷코리아 (한국어), LG전자 클로이드 자체 조립 전환, 2026-10-31](https://zdnet.co.kr/view/?no=20261031010426)
- [Siemens, Siemens Launches New ELV Drive Solution for AGVs and Mobile Robotics, 2026-11-02](https://press.siemens.com/global/en/pressrelease/siemens-launches-new-elv-drive-solution-agvs-and-mobile-robotics)
- [新浪科技 (중국어), 海康机器人全系产品亮相CeMAT, 2026-11-03](https://finance.sina.com.cn/tech/roll/2026-11-03/doc-inixncmx8696136.shtml)
- [FX168 (중국어), 海康机器人 CeMAT 2026 보도, 2026-11-03](https://www.fx168news.com/article/1111776)
- [ITBear (중국어), 极智嘉 RoboPallet 보도, 2026-11-02](https://www.itbear.com.cn/html/2026-11/1580271.html)
- [산업일보 (한국어), 대차 5대 끄는 자율주행 로봇으로 제조현장 물류 이송 자동화, 2026-11-03](https://kidd.co.kr/news/247979)
- [로봇신문 (한국어), 유엔디로보틱스 모듈러 휴머노이드·D-Air 그리퍼, 2026-10-28](https://www.irobotnews.com/news/articleView.html?idxno=49267)
