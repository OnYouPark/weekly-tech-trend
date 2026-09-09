---
title: 생산기술 신규기술 브리핑 - 2026년 9월 2주차
date: 2026-09-09
type: production
period: 2026년 9월 2주차
tags: [ARBURG, KraussMaffei, AQC Plus, Elmet SMARTshot, HB-Therm Flow-6, FANUC R-50iA, Palladyne AI, SMW Autoblok]
summary: 사출은 Fakuma 2026 사전 발표가 공정 제어 파라미터 자체로 이동해 KraussMaffei가 점도 대신 부품중량으로 보압을 자율 보정하는 AQC Plus를, Elmet은 캐비티 압력 센서 없이 콜드러너 신호만으로 캐비티를 자동 밸런싱하는 SMARTshot i를 공개. 로봇은 IMTS 2026 직전 FANUC 단독 발표로 CRX용 DC 직결 컨트롤러와 외부 힘센서 없는 조립 힘제어가 제시되고, EOAT 축에서는 툴체인저 접점을 비접촉 유도 커플링으로 대체한 구성이 확인됨
---

# 생산기술 신규기술 브리핑 - 2026년 9월 2주차

> 2026-09-03 – 2026-09-09 사출성형·로봇제조 신규 기술 변화

이번 주는 Fakuma 2026(2026-10-12 – 16) 사전 발표가 정점에 있었고, 로봇 축은 IMTS 2026(2026-09-14 – 19) 개막 직전으로 FANUC 외 주요 메이커의 발표가 아직 나오지 않은 공백 구간이었다. 확인 건수는 사출성형 9건, 로봇제조 8건이다.

## 금주 핵심 요약

### 사출성형기술

**KraussMaffei AQC Plus – 자율 공정제어의 기준값이 점도에서 부품중량으로 이동**

- 확인 내용: 매 사이클 종료 후 부품 중량을 저울로 계측해 사출기 제어부로 되먹이고, 편차 발생 시 보압 프로파일을 사이클 내에서 자율 변경하는 신규 제어 시스템. Fakuma 2026에서 전동 PX 80(800 kN) 셀로 시연하며, LRX-Plus 리니어 로봇이 폴리아미드 전장부품을 취출·계량 후 기계 하우징 내 컨베이어에 적재하고 Getecha 소형 분쇄기가 스프루를 분쇄해 재투입한다. 샘플 측정을 대체하고 전수 자동 기록을 제공한다고 밝혔다.
- 관련 근거: [K-Zeitung, 2026-09-08](https://k-zeitung.de/spritzgiessmaschine-regelt-sich-selbst-uebers-bauteilgewicht) (독일어) [2차 인용]
- 기존 대비 변화: 기존 APC Plus는 용융 점도 지수를 기준으로 절환점을 보정했다. AQC Plus는 결과값인 부품 중량을 직접 기준으로 삼는다. 재생재·첨가제·필러의 밀도 변동은 점도 지표에 반드시 반영되지 않으므로, 제어 입력 자체가 바뀐 형태다.
- 생산기술 시사점: 재생재 혼입 비율이 올라가는 부품에서 로트 간 밀도 편차를 사이클 내에 흡수하는 접근이다. 계량 스테이션을 취출 로봇 동선에 통합하면 별도 검사 공정 없이 중량 전수 기록을 확보할 수 있어, 샘플 검사 기반 공정관리를 전수 기록으로 대체할 여지가 있다. 다만 저울 분해능과 셀 진동 환경이 실효 정밀도를 결정한다.
- 확인 필요: 저울 분해능·사이클 부담, 적용 가능 부품 중량 범위, 양산 적용 실적. 적용 수준은 전시 데모.

**Elmet SMARTshot i – 캐비티 압력 센서 없이 콜드러너 신호만으로 캐비티 자동 밸런싱**

- 확인 내용: 사출 과정의 고분해능 데이터로 캐비티를 자동 밸런싱하고 니들 위치를 자동 최적화한다. 캐비티 압력 센서를 사용하지 않으며, 승온 구간의 열적 변화도 니들 위치 연속 보정으로 흡수한다. 니들 위치 결정 정밀도는 서보 전동 구동으로 2 µm. 16캐비티 금형 시험에서 20샷 내 밸런싱을 완료해 종래 방식 대비 램프업 시간을 최대 95 % 단축했다고 제시했다.
- 관련 근거: [ETMM, 2026-09-03](https://www.etmm-online.com/elmet-smartshot-i-lsr-cold-runner-fakuma-2026-a-e16badd655031880f7616d11b22b32e6/) [2차 인용] / 개발 단계 공개는 [Elmet 공식 뉴스, 2025-05-27](https://elmet.com/en/news-press/servoelectric-cold-runner-molds-for-lsr-injection-molding-are-learning-to-think-for-themselves--4/) [공식 발표]
- 기존 대비 변화: 2025년 5월 시점에는 특허 출원 중 개념이었고 단축 폭도 약 90 %로 제시됐다. 이번에 SMARTshot i라는 제품명으로 전시 공개 단계에 진입했고 수치가 95 %로 갱신됐다. 기존 SMARTshot E 서보 전동 콜드러너의 상위 기능 계층에 해당한다.
- 생산기술 시사점: 캐비티 압력 센서 매립이 어려운 소형·다캐비티 금형과 패밀리 금형에서 충전 스터디 공수를 줄이는 방향이다. 동일 논리는 열가소성 핫러너 밸브게이트의 개별 니들 제어에도 참고 가능하나, LSR 콜드러너 전용 구성이므로 직접 이식은 별도 검증이 필요하다.
- 확인 필요: 양산 적용 실적, 대응 사출기 인터페이스 조건. 적용 수준은 전시 공개 예정.

### 로봇제조기술

**FANUC America R-50iA Compact DC Controller – CRX의 AMR 탑재를 전제로 한 DC 직결 컨트롤러**

- 확인 내용: IMTS 2026에서 데뷔하는 신제품. 24 V – 48 V DC 배터리 전원을 직접 입력받아 별도 인버터가 필요 없고, CRX를 AMR 위에 탑재하는 구성을 전제로 경량화했다. R-50iA 플랫폼 공통으로 사이버보안 인증, 비전 기능 강화, 이더넷 연결, Python 지원을 제공한다. 같은 릴리스에서 CRX-3iA(가반 3 kg, 본체 11 kg) 포터블 협동로봇도 함께 제시됐다.
- 관련 근거: [FANUC America 보도자료, 2026-09-03](https://www.prnewswire.com/news-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026-302869146.html) [공식 발표]
- 기존 대비 변화: 기존 CRX 컨트롤러는 AC 전원 기반이라 모바일 대차 탑재 시 인버터와 배전 설계가 별도로 필요했다. DC 직결로 이 구성 요소가 제거된다.
- 생산기술 시사점: 고정 셀 대신 로봇 탑재 AMR로 가공기 로딩·부품 반송·검사를 순회시키는 구성에서 전원·배선 설계 부담이 줄어든다. 셀 재배치가 잦은 시작·시제 라인 및 다품종 소량 라인에서 검토 대상이 된다.
- 확인 필요: 정격 출력·중량, 국내 공급 시점. 적용 수준은 신제품 발표 및 전시 데모 예정.

**SMW Autoblok PRS 툴체인저 + C40 유도 커플러 – EOAT 교환 인터페이스의 전기 접점 제거**

- 확인 내용: PRS 툴체인저, PX 공압 그리퍼, C40 유도 커플러를 묶은 통합 파지 시스템을 IMTS 2026(2026-09-14 – 19)에서 최초 공개한다. 기계식 핀 접점 의존을 제거하고 비접촉 유도 방식으로 전력·데이터를 전달하는 구조이며, 그리퍼 자동 교환과 툴링 정비로 인한 라인 정지 저감을 소구점으로 제시했다.
- 관련 근거: [MTDCNC, 2026-09-03](https://mtdcnc.com/news/smw-autoblok/new-pneumatic-gripping-system-set-for-imts-2026-debut/) [2차 인용] / 선행 발표: [MTDCNC, 2026-07-30](https://mtdcnc.com/news/smw-autoblok-telbrook-ltd/smw-autoblok-showcases-innovative-grippers-at-imts-2026/) [2차 인용]
- 기존 대비 변화: 7월 발표된 MOTIACT는 유도 커플링을 그리퍼 단품에 적용해 케이블 제거와 360° 회전을 확보한 수준이었다. 이번은 유도 커플러를 툴체인저–그리퍼 인터페이스로 확장해 교환 가능한 EOAT에 비접촉 급전·통신을 부여한 구성이다.
- 생산기술 시사점: 툴체인저 전기 접점은 반복 체결 마모·오염으로 인한 간헐 통신 불량의 주요 고장 모드다. 비접촉 커플링은 이를 구조적으로 제거하므로, 그리퍼 교환 빈도가 높은 조립·머시닝 셀의 툴체인저 사양 검토에서 접점식 대비 비교 항목이 된다.
- 확인 필요: 전송 전력 용량, 데이터 프로토콜(IO-Link 지원 여부), 허용 갭·미스얼라인먼트, 절삭유 환경 내성. 공식 자료 미확인으로 2차 인용 단계이며 적용 수준은 전시 데뷔 예고.

## 사출성형기술 상세

### ARBURG ALLROUNDER TREND + GESTICA lite – 표준기 등급에 신형 제어계 신설

- 확인 내용: ALLROUNDER 1000 e TREND로 PA12-GF30 커넥터 16개를 약 8초 사이클로 자동 생산하며, MULTILIFT SELECT 8이 취출 후 튜브 시스템으로 캐비티별 분리 적재한다. 별도 셀에서는 ALLROUNDER 1800 e TREND로 LSR 클로저를 시간당 약 9,200개 전자동 생산하고 MULTILIFT SELECT 16이 캐비티별 분리 및 드로어 적재를 수행한다. TREND 기종에 신규 GESTICA lite 제어(산업용 패널, 대시보드형 UI, 어시스트 기능)를 탑재했다.
- 관련 근거: [ARBURG 보도자료, 2026-09-03](https://www.arburg.com/en/us/company/news-press-releases/detail/fakuma-2026-allrounder-trend/) [공식 발표]
- 기존 대비 변화: 상위 GESTICA의 조작 논리를 유지하면서 표준기용으로 기능을 축소한 별도 제어 등급이 신설됐다. TREND 계열이 로봇·안전펜스 완전 통합 및 턴키 편입 대상으로 명시된 점도 기존 표준기 포지셔닝과 다르다.
- 생산기술 시사점: 다캐비티 GF 강화 PA 성형에서 캐비티별 분리 취출을 표준기 급으로 구현한 사례다. 캐비티 추적성이 요구되는 전장 부품 라인에서 설비 등급 선택지가 넓어진다.
- 확인 필요: GESTICA lite의 어시스턴트 지원 범위, EUROMAP 인터페이스 사양, 8초 사이클의 형체력·샷중량 조건. 적용 수준은 전시 데모.

### ARBURG ALLROUNDER 270 A 마이크로 사출 셀 – 샷중량 0.008 g급에 정전기 대책 통합

- 확인 내용: 전동식 ALLROUNDER 270 A에 마이크로 사출 모듈을 적용해 실현 샷중량 0.008 g. POM 마이크로 필터 4개(개당 0.002 g)를 약 7초 사이클로 스프루리스 생산한다. MULTILIFT SELECT 4가 캐비티별 분리 적재하며, 그리퍼에서 이온화 공기로 정전기를 제거하고 컨베이어의 이오나이징 바로 재대전을 방지한다.
- 관련 근거: [ARBURG 보도자료, 2026-09-08](https://www.arburg.com/en/us/company/news-press-releases/detail/fakuma-2026-micro-injection-molding/) [공식 발표]
- 기존 대비 변화: 마이크로 사출 자체는 기존 기술이며, 이번은 스프루리스·캐비티별 분리 취출·정전기 핸들링을 셀 단위로 묶은 통합 구성이 추가된 형태다.
- 생산기술 시사점: 미세 부품 취출에서 정전기에 의한 부착·산포는 실제 불량 요인이다. 그리퍼 이온화와 컨베이어 이오나이징 바를 셀 설계 단계에서 함께 정의하는 접근이 참고된다.
- 확인 필요: 마이크로 사출 모듈의 계량 정밀도, 양산 적용 실적. 적용 수준은 전시 데모.

### KraussMaffei LRX-Plus SE – 다캐비티·클린룸용 사이드엔트리 취출로봇 콘셉트 최초 공개

- 확인 내용: PX 160과 96캐비티 Männer 금형 조합 셀에서 신규 리니어 로봇 LRX-Plus SE를 콘셉트로 최초 공개한다. LRX-Plus 플랫폼 기반으로 축·구동부를 강화하고 클린룸 사양을 적용했으며, 검사·포장 등 후공정 주변기기 배치 공간 확보를 목적으로 사이드엔트리 구조를 채택했다.
- 관련 근거: [K-Zeitung, 2026-09-08](https://k-zeitung.de/spritzgiessmaschine-regelt-sich-selbst-uebers-bauteilgewicht) (독일어) [2차 인용]
- 기존 대비 변화: 2026-09-02에 확인된 LRXplus Twin이 다중 기구학 통합제어 방향이었다면, 이번은 진입 방향 자체를 톱엔트리에서 사이드엔트리로 바꾼 별도 기종 추가다.
- 생산기술 시사점: 96캐비티급 고캐비티 금형에서는 취출 로봇이 기계 상부를 점유하면 후공정 장비 배치가 제약된다. 사이드엔트리는 셀 레이아웃 자유도를 확보하는 선택지이나 강성·진동 조건 확인이 전제된다.
- 확인 필요: 가반중량, 취출 시간, 양산 출시 시점. 현재 콘셉트 단계.

### ENGEL victory electric 1565/220 – 타이바리스 전동기의 LSR 대형 실 적용 및 계량부 공급압 조기경보

- 확인 내용: 형체력 2,200 kN 전동 타이바리스기로 인버터용 LSR 실(484 × 202 × 29 mm)을 약 70초 사이클로 성형하며 윤곽 공차는 1/100 mm 수준. 재료는 Shin-Etsu KEG 2003H-50 A/B 2액형 LSR, 금형은 ACH Solution의 Servoshot 적용품으로 진공 벤팅과 이형성 최적화 캐비티면을 구성했다. viper 40 로봇이 고온 상태에서 취출한다. 계량 유닛 공급압 모니터링이 표준 탑재되어 50 bar에서 경보를 발생시키며 iQ weight control과 병행한다.
- 관련 근거: [Plastics Today, 2026-09-04](https://www.plasticstoday.com/injection-molding/engel-eliminates-flash-in-high-precision-lsr-molding) [2차 인용]
- 기존 대비 변화: 해당 기종은 K 2025에서 열가소성 용도로 먼저 공개됐고 이번에 LSR 대형 실로 적용 범위가 확대됐다. 기종 자체는 신규가 아니며 신규 적용 사례에 해당한다.
- 생산기술 시사점: 저점도 LSR은 미세 간극에서도 버가 발생하므로 형판 평행도가 직접적 품질 인자다. 타이바리스 구조로 형체력을 캐비티 전면에 균등 분포시켜 후공정 버 제거를 없애는 접근이며, 인버터·전장 실링처럼 접촉면 공차가 좁은 품목이 대상이다. 공급압 상승을 재료 배치 변동의 선행 지표로 삼아 50 bar 임계값에서 경보를 내는 방식은 추가 센서 없이 계량계 신호만으로 재료 이상을 잡는 저비용 감시 사례다.
- 확인 필요: 양산 적용 여부, 공급압 경보 기능의 적용 기종 범위.

### HB-Therm Flow-6 시리즈 확장 – 초음파 유량 계측 유닛 2026년 9월 시장 출시

- 확인 내용: 계측 전용과 제어 통합형(2027년 3월 공급) 두 사양으로 확장. 온도 사양 100 °C / 160 °C / 180 °C, 회로 수 4·6·8, 회로당 측정 범위 0.4 – 40 L/min. 가동부 없는 초음파 계측으로 오배관 검출이 가능하고 오염·수격에 둔감하다. 유체 접촉부 전량 스테인리스, 정밀 주조 유로로 압력손실을 낮췄다. 컴팩트 자립형이라 사출기 내부 설치가 가능하며 상위 연계는 OPC UA, Gate-6 경유 CAN·DIGITAL을 지원한다. 2026년 9월 출시 시점 기능은 유량·온도 감시, 임계값 설정, 알람, 이력 데이터 로컬 저장이며 2026년 11월 업데이트로 Thermo-6 없는 단독 운용을 지원한다.
- 관련 근거: [PlastXnow, 2026-09-04](https://www.plastxnow.de/hb-therm-flow-6-fakuma-2026-ultraschall-durchflussmessung-a-8224ef44f25cf24cf050f404f50fcc2a/) (독일어) [공식 발표 기반 2차 인용]
- 기존 대비 변화: Flow-6 자체는 K 2025에서 처음 공개된 제품군이다. 이번 신규분은 온도·회로 수 사양 확장, 제어형 추가, 그리고 실제 시장 출시와 단계별 기능 확장 일정 확정이다.
- 생산기술 시사점: 2026-09-02의 냉각회로 오염·유량 제어, 2026-08-12 ONI 수질·유량 계측과 같은 흐름이다. 회로별 유량을 상시 감시하고 OPC UA로 상위에 올리면 냉각 이상에 의한 치수 산포를 사후가 아니라 발생 시점에 분리할 수 있다. 병렬 배관 채택 시 회로별 가시성 확보가 전제 조건이 된다.
- 확인 필요: 압력손실 실측치, 기존 온조기 혼용 조건, 국내 공급·서비스 체계.

### WITTMANN PCR 화분 생산셀 – 취출로봇 Z축에 IR 카메라를 실은 인라인 전수 열화상 검사

- 확인 내용: SmartPower 300t(3,000 kN급)에 Cellmould 물리발포와 Borouge PCR-PP를 적용한 Fakuma 2026 라이브 셀. WX142 리니어 로봇이 탈형 후 검사 스테이션으로 이송하고, 적외선 카메라를 로봇 Z축 빔에 장착해 열화상을 기준 이미지와 비교한 뒤 이탈품을 품질 스위치로 분리한다. 열화상으로 표면 균질성과 내부 발포 구조 상태를 판정한다. 자동화는 FlexCell primus 구성으로 보호 하우징을 컨베이어 위에 배치해 별도 바닥면적을 요구하지 않으며, 컨베이어와 함께 측면 이동해 금형부 접근이 가능하다. 질소는 N2easy 발생기로 현장 생성한다.
- 관련 근거: [Plastech, 2026-09-04](https://www.plastech.pl/en/news/wittmann-to-show-pcr-planter-molding-at-fakuma-2026-22693) [2차 인용]
- 기존 대비 변화: 2026-07-29에 확인된 생산셀 3종과 별개의 추가 셀이다. 취출 로봇 축에 IR 카메라를 직접 실어 별도 검사 스테이션 없이 인라인 전수 열화상 검사를 구현한 점이 신규다.
- 생산기술 시사점: 발포·재생재 적용 부품에서 치수 검사만으로는 잡히지 않는 내부 구조 편차를 열화상으로 스크리닝하는 접근이다. 취출 로봇 축을 활용해 셀 면적 증가 없이 검사 공정을 추가하는 구성이 참고 대상이다.
- 확인 필요: 열화상 판정 오검율, 사이클타임 영향, 판정 데이터의 추적성 연계 여부.

### Matriq 금형 내 Data Matrix 마킹 – ARBURG·KEBO·HB-Therm 통합 데모

- 확인 내용: 사출 공정 중 금형 내부에서 부품에 고유 Data Matrix 코드를 직접 부여하는 통합 솔루션을 Fakuma 2026에서 라이브 시연한다. KEBO 금형에 마킹 기술을 내장하고 ARBURG 사출기에서 생산하며, 부스에서 생산 직후 코드를 판독·검증한다. HB-Therm과 Borouge International이 파트너로 참여한다.
- 관련 근거: [Plastech, 2026-09-04](https://www.plastech.pl/en/news/matriq-to-show-in-mold-part-marking-at-fakuma-2026-22694) [2차 인용]
- 기존 대비 변화: 개별 요소가 아니라 금형·사출기·온조·소재를 묶은 통합 셀 형태로 제시됐다. 적용 수준은 전시 데모이며 양산 적용 사례는 제시되지 않았다.
- 생산기술 시사점: 레이저·잉크 마킹 공정과 그에 딸린 반송·검사 스테이션을 제거하는 방향이다. 캐비티 단위 이력 관리가 요구되는 품목에서 캐비티 번호를 넘어 개체 단위 추적을 확보하는 선택지가 된다. 다만 코드 각인부의 외관·이형 영향 검증이 선행 과제다.
- 확인 필요: 코드 크기·판독률, 재생재·유리섬유 강화재에서의 각인 품질, 금형 인서트 수명 및 개조 비용.

### WITTMANN Feedmax Clean 300 – 집진 일체형 진공 이송기 처리량 2배 확대

- 확인 내용: 이송량이 다른 2개 사양으로 제공되며 최대 80 kg/h로 기존 Feedmax Clean 대비 처리량 2배. 이송 사이클 중 1,000 µm 미만 입자를 최대 80 % 연속 흡출한다. 소재 접촉부는 옵션 유리창부를 제외하고 스테인리스로 구성해 소재 교체 시 세정 시간을 줄였다. 스프루·불량품 인라인 재활용용 구성품을 패키지로 제공한다.
- 관련 근거: [K-Zeitung, 2026-09-07](https://k-zeitung.de/vakuumfoerdergeraet-fuer-den-rezyklat-einsatz) (독일어) [2차 인용]
- 기존 대비 변화: 2026-08-26에 확인된 Feedmax Clean의 상위 처리량 모델 추가다. 분리율 수치는 동일 수준이며 처리량만 확대됐다.
- 생산기술 시사점: 재생재 비율이 높은 대량 품목에서 계량 편차와 용융 균질도 저하의 원인이 되는 미분을 이송 단계에서 제거하는 접근이다. 인라인 재활용 폐루프 셀 구성 시 이송기 용량이 병목이 되지 않도록 하는 보완 성격이다.
- 확인 필요: 분리율의 소재·분진 조건 의존성, 흡출 분진 처리 방식.

### 사출 AI 어시스턴트 2건 – 데이터 활용 병목이 수집에서 조회·해석으로 이동

- 확인 내용: WITTMANN은 AIM4Help 신버전에 음성 입력을 추가했다. 사출기·로봇 제어반의 QR 코드를 스마트폰으로 스캔해 접속하며 공정 파라미터 입력, 로봇 시퀀스 프로그래밍, 고장 원인 추정, 신규 설비 셋업 안내를 다룬다. 학습 데이터는 사내 기술문서·표·고장 분석 자료다. Osphim은 자사 플랫폼에 대화형 어시스턴트 Claire를 추가해 자연어로 설비 정지 분석, 반복 공정 문제 식별, 생산 런 비교, 특정 금형에 적합한 설비 선정을 수행하며 특정 사례에서 정보 검색·문서화 시간을 최대 80 % 절감했다고 제시했다.
- 관련 근거: [Plastech, 2026-09-08](https://www.plastech.pl/en/news/wittmann-adds-voice-support-to-aim4help-22708) [2차 인용] / [K-Zeitung, 2026-09-08](https://k-zeitung.de/ki-chatbot-fungiert-als-fertigungsassistent) (독일어) [2차 인용]
- 기존 대비 변화: WITTMANN은 텍스트 챗봇에서 음성 입출력으로 확장했고, Osphim은 데이터 수집·모니터링 플랫폼에 대화형 분석 계층을 추가했다. 설비 벤더 종속 지식베이스와 플랫폼 사업자 측 접근이 같은 시기에 병존하는 구도다.
- 생산기술 시사점: 사출 MES·모니터링 데이터의 병목이 수집에서 조회·해석으로 이동 중임을 보여준다. 벤더 지식베이스형은 해당 설비 범위에서 정확도가 높은 대신 이기종 라인 전개가 제한되고, 플랫폼형은 반대 성격을 갖는다. 80 % 절감은 벤더 제시 수치이며 적용 사례 범위가 특정되지 않았다.
- 확인 필요: 응답 정확도 검증 방식, 온프레미스 지원 여부, 한국어 지원 여부, 데이터 소스 연동 범위(EUROMAP·OPC UA).

### Negri Bossi / Sytrama 신규 로터리 취출로봇 – 클린룸 대응 컴팩트 기종 추가

- 확인 내용: Fakuma 2026 의료용 셀(전동 Nova5e220T-H820, 2,160 kN, Petek 라미나 플로우 후드, BDL 다캐비티 금형, Mold-Masters SymFill 핫러너)에 신규 Sytrama 로터리 로봇을 적용한다. 구조를 단순화해 가동 신뢰성을 높이고 고속 동작으로 사이클 단축을 목표로 했으며, 클린룸 대응으로 스테인리스·아노다이징 알루미늄 중심 구성과 이물 축적을 줄이는 평활 표면 처리를 적용했다.
- 관련 근거: [Plastech, 2026-09-07](https://www.plastech.pl/en/news/negri-bossi-at-fakuma-2026-high-performance-moulding-22701) [2차 인용]
- 기존 대비 변화: Sytrama 라인업에 클린룸 지향 선회형 신기종이 추가됐다.
- 생산기술 시사점: 취출 로봇을 이물 저감 요구가 있는 셀에 넣을 때 표면 처리·재질이 선정 기준이 된다. 선회형은 직교형 대비 설치면적을 줄이는 대안이나 가반중량·정밀도 트레이드오프 확인이 필요하다.
- 확인 필요: 모델명, 가반중량, 취출 시간, 클린룸 등급(ISO Class) 모두 미공개.

### 금형 소재·코팅 선정 기준 – 재생수지 확대에 따른 코팅 기본화 전망

- 확인 내용: MISUMI Americas는 발주 내역·설계 피드백·소재 거동·프로그램 이력을 함께 읽어 숙련 엔지니어 수준의 검토를 전 프로그램에 적용하는 AI 기반 리스크 리뷰 플랫폼을 개발 중이라고 밝혔다. 소재 선정은 수지 종류, 요구 샷수, 부품 표면 요구의 3항목 순으로 정리되며 GF 강화 수지 투입 시 P20에서 H13으로의 전환이 실무 기준으로 제시됐다. 재생수지 확대에 따라 DLC·고급 PVD 코팅이 특수 옵션에서 기본 선택으로 이동할 것으로 전망했다. 원재료 그레이드 변경 후 수축률 차이로 치수 불량이 발생해 금형 전체 수정 대신 코어·캐비티 인서트 재가공으로 대응한 사례를 제시했다.
- 관련 근거: [Plastics Today, 2026-09-04](https://www.plasticstoday.com/injection-molding/strategic-material-selection-transforms-injection-mold-performance) [업계 분석]
- 기존 대비 변화: 금형강 선정을 T1 이후 시행착오가 아닌 DFM·유동해석 단계의 데이터 결정으로 이동시키자는 주장이며, 소재 그레이드 확정 시점을 게이트 설계·부품 형상 확정 이후로 늦춰야 한다는 실무 기준이 제시됐다.
- 생산기술 시사점: 재생수지 함량 확대가 금형 마모·부식 조건을 바꾸므로 물량 기준만으로 강종을 정하던 관행은 재검토 대상이 된다. 원재료 그레이드 변경 시 수축률 차이가 치수에 직결되므로 소재 변경 관리 절차에 금형 인서트 영향 검토를 포함시키는 것이 유효하다.
- 확인 필요: AI 플랫폼의 출시 시점·기능 범위(현재 개발 중), 정량 데이터 미공개. 적용 수준은 기술자료.

## 로봇제조기술 상세

### FANUC America CRX-30iA + R-50iA Mate – 외부 힘센서 없는 통합 힘제어 조립

- 확인 내용: IMTS 2026에서 CRX-30iA와 R-50iA Mate 컨트롤러 조합으로 유성기어 세트를 조립하는 트랜스미션 조립 데모를 공개한다. 공식 자료는 외부 힘센서 없이 통합 힘제어로 수행한다고 명시했다. 별도로 CRX-30iA 고토크 볼트 체결 애플리케이션(실시간 공정 피드백, 토크 검증, 품질 확인)도 제시됐다.
- 관련 근거: [FANUC America 보도자료, 2026-09-03](https://www.prnewswire.com/news-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026-302869146.html) [공식 발표]
- 기존 대비 변화: 협동로봇 힘제어 조립은 통상 손목 힘·토크 센서 추가가 전제였다. 센서리스 내장 힘제어는 조립 셀의 부품 수와 캘리브레이션 부담을 줄이는 방향이다.
- 생산기술 시사점: 감속기·기어류 압입, 커넥터 삽입 등 접촉 위주 조립 공정에서 협동로봇 단독 구성 가능성이 넓어진다. 다만 센서리스 힘제어의 분해능·재현성은 실물 검증이 필요한 영역이다.
- 확인 필요: 힘 분해능·최소 감지력, 사이클타임, 압입 하중 상한. 적용 수준은 전시 데모.

### FANUC Physical AI 데모군 – 이동 부품 볼트 체결과 비전·힘 융합 커넥터 조립

- 확인 내용: 듀얼암 CRX-5iA로 비전과 힘 데이터를 함께 사용해 커넥터 삽입·조립을 수행하는 데모, Inbolt의 트래킹과 NVIDIA 연산을 결합해 CRX-20iA/L과 R-30iB Mini Plus로 움직이는 부품에 볼트를 체결하는 데모, Google Cloud와 개발한 손글씨 작업지시 해석·키팅 데모, 자연어 명령으로 Python 코드와 로봇 프로그램을 생성하는 CRX Vibe Coding이 함께 제시됐다.
- 관련 근거: [FANUC America 보도자료, 2026-09-03](https://www.prnewswire.com/news-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026-302869146.html) [공식 발표]
- 기존 대비 변화: 기존 Physical AI 발표가 NVIDIA·Google과의 플랫폼 제휴 단계였다면, 이번은 커넥터 삽입과 이동체 볼트 체결이라는 구체 공정 단위 데모로 내려왔다.
- 생산기술 시사점: 라인 정지 없이 컨베이어 이동 중 체결이 성립한다면 인덱싱 정지 시간을 줄일 여지가 있다. 커넥터 조립은 전장 부품 공정에서 자동화 난도가 높은 구간으로, 비전·힘 융합 접근의 성숙도를 확인할 지점이다.
- 확인 필요: 라인 속도 상한, 체결 토크 정밀도, 재현성 데이터. 적용 수준은 전시 데모.

### FANUC R-2000 E 시리즈 + Isaac Sim – 스폿용접 라이브 디지털트윈과 양방향 동기화

- 확인 내용: 자동차 스폿용접 애플리케이션에 신형 R-2000 E 시리즈 2대를 투입한 전시를 예고했다. 유지보수 프리 설계, 축속도 향상, 손목 부하용량 증대를 제시했다. NVIDIA Isaac Sim이 로봇 스폿용접 애플리케이션의 라이브 디지털트윈에 적용되며 ROBOGUIDE와 연동된다. Digital Twin CRX-5iA 데모에서는 ROBOGUIDE 상 변경과 실기 변경이 양방향 동기화되는 구성을 보인다.
- 관련 근거: [FANUC America 보도자료, 2026-09-03](https://www.prnewswire.com/news-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026-302869146.html) [공식 발표]
- 기존 대비 변화: 2026-08-12에 확인된 ROBOGUIDE–Isaac Sim 통합의 후속 진전분이다. 적용 대상이 스폿용접 라이브 디지털트윈으로 특정됐고 시뮬레이션과 실기의 양방향 동기화가 명시됐다.
- 생산기술 시사점: 스폿용접 셀은 티칭·간섭 검증 공수가 큰 공정으로, 가상시운전 정합도가 올라가면 라인 개조 시 현장 검증 기간을 줄일 수 있다. 양방향 동기화는 변경 이력 관리 관점에서도 의미가 있다.
- 확인 필요: R-2000 E 시리즈 정식 사양(가반중량·리치·반복정밀도) 미공개, 동기화 지연·정합 오차.

### Palladyne AI × FANUC America – 산업용 로봇에 자율성 SW 스택 이식 협력

- 확인 내용: 2026-09-08 양사 전략적 협력 발표. FANUC 산업용 로봇 플랫폼에 Palladyne IQ를 최적화하고 AI 기반 모션 플래닝·적응 거동, 원격조작 및 인간 보조 학습, 배치 가속을 위한 시뮬레이션·AI 모델 학습, 제조·물류 고객 유스케이스 공동 검증, SI·엔드유저용 표준 배치 워크플로 개발을 추진한다.
- 관련 근거: [Palladyne AI 보도자료, 2026-09-08](https://www.palladyneai.com/press-releases/palladyne-ai-and-fanuc-america-announce-strategic-collaboration-to-advance-intelligent-robotic-automation/) [공식 발표]
- 기존 대비 변화: FANUC의 Physical AI 파트너가 NVIDIA·Google Cloud에 이어 로봇 자율성 SW 전문사로 확장됐다. 원격조작·인간 보조 학습과 표준 배치 워크플로는 티칭 공수 절감에 직접 걸리는 항목이다.
- 생산기술 시사점: 다품종 조립·검사에서 프로그래밍 대신 시연 기반 학습으로 전환하려는 흐름이 로봇 메이커와 AI SW사의 제휴 형태로 굳어지는 중이다. 현 단계는 협력 발표이며 제품·릴리스 일정은 없다.
- 확인 필요: 대상 기종 범위, 상용화 시점, 검증 유스케이스, 국내 적용 여부.

### 두산로보틱스 에이전틱 로봇 – 티칭 대체 구조와 3단계 로드맵 공개

- 확인 내용: 2026-09-07 서울 과학기술회관 2026 글로벌 기계기술 포럼에서 발표. 로드맵은 협동로봇에서 지능형 로봇 솔루션을 거쳐 산업용 휴머노이드로 이어지는 3단계다. 현장 협동로봇에서 실작업 데이터를 축적해 표면처리·용접 등 숙련 작업을 수행하는 지능형 솔루션으로 발전시키고, 한팔에서 양팔, 이동형 순으로 확장해 2028년 산업용 휴머노이드 PoC에 착수한다. 에이전틱 로봇은 사람이 목표만 지정하면 로봇이 환경을 이해해 작업계획을 세우고 실행 후 결과를 검증하며 실패 시 스스로 재계획하는 구조로 정의했다. 1차 실증 대상으로 가스터빈 부품 가공, 대형 중장비 유압계통 조립을 제시했다.
- 관련 근거: [아시아경제, 2026-09-08](https://view.asiae.co.kr/article/2026090809005349708) (한국어) [2차 인용]
- 기존 대비 변화: 기존 발표가 팔레타이징·샌딩 등 솔루션 패키지 중심이었다면, 이번은 작업지능을 먼저 정하고 폼팩터를 나중에 최적화한다는 개발 순서와 티칭 대체 구조를 명시했다.
- 생산기술 시사점: 좌표·경로 티칭 중심의 로봇 운용이 목표 관리 중심으로 이동한다는 방향성은 다품종 부품 라인의 준비 공수와 직결된다. 다만 현재는 로드맵 수준이며 검증 가능한 성능 수치는 제시되지 않았다.
- 확인 필요: 에이전틱 로봇 OS 사양·출시 시점, 지능형 솔루션의 현재 상용화 범위, 2028년 PoC 대상 공정.

### 나우로보틱스 HEV 배터리팩 홀더 조립설비 – 조립·열융착·레이저용접·전기검사 통합 라인 수주

- 확인 내용: 2026-09-07 공시. VPK와 23억 6,590만 원 규모 USA NQ6a HEV Holder Assy 조립설비 제작 계약을 체결했다. 미국향 하이브리드차 배터리팩 홀더 조립라인 구축 건으로 버스바 자동 공급·조립, 홀더 가이드와 버스바 열융착, FPCB 단자 레이저 용접, 절연·통전·저저항 검사, 용접부 비전 검사를 포함하며 제품별 생산·검사 이력 관리로 불량 원인 추적을 지원한다. 조립설비와 예비부품 공급을 계약 범위에 함께 담았다.
- 관련 근거: [로봇신문, 2026-09-08](https://www.irobotnews.com/news/articleView.html?idxno=48373) (한국어) [2차 인용, 공시 기반]
- 기존 대비 변화: 국내 로봇 업체의 자동차 부품 조립 자동화 수주가 단일 조립 공정이 아니라 조립·접합·전기검사·비전검사를 한 라인에 묶는 형태로 확장되는 사례다.
- 생산기술 시사점: 전기적 특성 검사가 필수인 부품은 조립과 검사를 분리하면 공정 간 대기·재취급 손실이 크다. 열융착과 레이저 용접을 같은 라인에 통합하고 용접부 비전 검사를 인라인에 두는 구성은 부품 이력 추적성 확보 관점에서 참고할 만하다. 예비부품을 계약 범위에 포함시킨 점은 해외 신설 라인 가동 안정화 리스크를 발주 단계에서 반영한 형태다.
- 확인 필요: 사이클타임, 검사 판정 기준, 로봇 기종·대수, 납기. 적용 수준은 양산 설비 수주(제작 단계).

### 미국 FCC 이동로봇 규제 – 판정 요건과 국산화율 임계값 수치 확인

- 확인 내용: MassRobotics가 회원사 14개사를 대상으로 조사한 결과를 2026-09-07 공개했다. 43 %가 유리 또는 매우 유리, 43 %가 불리 또는 매우 불리, 14 %가 영향 없음으로 응답이 양분됐고, 국내 생산 기반 보유 기업은 경쟁 우위로, 해외 공급망 의존 기업은 비용 부담으로 인식했다. 29 %는 온쇼어링 계획은 있으나 미착수 상태다. 규제 대상은 지상 이동형 연결 로봇 중 중량 1.9 kg 초과, 라이다·카메라 등 환경센서 탑재, 200 kbps 이상 연결성, 항법·인지 소프트웨어 의존의 4요건을 모두 충족하는 경우이며, 미국산 인정 기준은 부품 원가의 65 % 국내산으로 2029년 75 %로 상향된다. 조건부 승인 절차는 4 – 8주가 소요된다.
- 관련 근거: [The Robot Report, 2026-09-07](https://www.therobotreport.com/massrobotics-shares-member-survey-results-around-fcc-restrictions/) [업계 분석]
- 기존 대비 변화: 2026-08-10에 규제 존재를 다룬 데 이어, 이번에 판정 4요건과 국산화율 임계값, 승인 리드타임, 업계 인식의 정량 분포가 확인됐다.
- 생산기술 시사점: 북미 라인에 AMR·이동로봇을 신규 도입할 경우 벤더의 최종 조립지가 아니라 부품 원가 기준 국산화율 충족 여부가 반입 가능성을 좌우한다. 도입 검토 단계에서 벤더에 BOM 기준 국산화율 산정 근거와 2029년 기준 대응 계획을 요구하는 것이 리스크 관리상 필요하며, 승인 경로를 전제한 도입은 4 – 8주 리드타임을 일정에 반영해야 한다.
- 확인 필요: 국산화율 산정 방법론, 기존 설치 장비의 소급 적용 여부, 승인률.

### Teradyne Robotics의 JAKA 독일법인 제소 – 유럽 통합특허법원(UPC) 절차 개시

- 확인 내용: Universal Robots 모회사 Teradyne Robotics가 중국 JAKA의 독일 자회사를 상대로 협동로봇 하드웨어·소프트웨어 특허 침해를 주장하며 UPC 코펜하겐 지역부에 제소했다. 침해 행위가 덴마크 및 다른 EU 회원국에서 발생했다고 주장한다. 앞서 2026년 2월 Elite Robots 독일 자회사를 저작권 침해로 제소해 4월 함부르크 지방법원이 예비금지명령을 내린 바 있다.
- 관련 근거: [헬로티, 2026-09-03](https://www.hellot.net/news/article.html?no=114762) (한국어) [2차 인용]
- 기존 대비 변화: 미국의 수입 규제와 별개로 유럽에서는 특허·저작권 소송을 통한 시장 접근 제약이 병행되는 구도다. 4월 예비금지명령이 실제 인용된 선례가 있다는 점이 판단 요소다.
- 생산기술 시사점: 유럽 라인용 협동로봇·AMR 조달 시 특정 벤더에 예비금지명령이 발효되면 납기와 보수부품 공급이 즉시 중단될 수 있다. 단일 벤더 의존 구성보다 대체 벤더 검증을 병행하는 조달 전략의 필요성이 커졌다.
- 확인 필요: 대상 특허 번호·청구항, 문제된 기종, 판결 일정. 소장 원문 미확인.

### 그리퍼 압력 센싱 도입 평가 기준 – 슬립 검출 지연과 드리프트 중심 검증

- 확인 내용: 압력센서는 관절 토크가 아닌 접촉면 국부 응력을 측정하므로 동일 모터 전류·핑거 변위에서도 강성 금속부와 연질 폴리머부의 압력 분포가 다르며, 취약 대상물은 모터 토크에 유의미한 변화가 나타나기 전에 비대칭 붕괴가 발생한다. 센서 배치 방식에 따라 감도와 내구성이 상충하고, 엘라스토머 크리프로 베이스라인이 이동하므로 유휴 상태 동적 재교정이 필요하다. 단순 저역통과 필터는 노이즈를 줄이지만 슬립 검출을 지연시키며 수십 ms 차이가 낙하 여부를 가른다. 검증은 정적 파지 반복성, 동적 슬립 응답, 장수명 사이클의 3계층으로 수행해야 한다.
- 관련 근거: [The Robot Report, 2026-09-06](https://www.therobotreport.com/pressure-sensors-can-help-improve-robotic-gripping-accuracy/) [업계 분석]
- 기존 대비 변화: 2026-08-26에 다룬 촉각센서 공급망 이슈와 달리, 이번은 도입 측 검증 항목을 정리한 평가 관점 자료다.
- 생산기술 시사점: 촉각·압력 센싱 그리퍼 도입 평가에서 센서 분해능 스펙보다 슬립 검출 지연(ms), 히스테리시스, 포화 범위, 장수명 사이클 후 드리프트를 사양서 요구항목으로 명시하는 편이 실효적이다. 정밀 조립과 물류 핸들링은 양호한 파지의 정의 자체가 다르므로 제어 목표를 공정별로 분리 정의해야 한다.
- 확인 필요: 정성 서술 위주로 특정 제품의 검증 데이터는 아님. 적용 수준은 기술자료.

### 비정형 대상물 자동화 국내 동향 2건 – 휴머노이드 및 모듈형 워크셀

- 확인 내용: 빅웨이브로보틱스는 2026-09-08 목조 모듈러 주택 업체 공간제작소의 생산·시공 현장에 휴머노이드 로봇을 단계적으로 투입한다고 발표했다. 1차 적용 공정은 유리섬유 단열재 시공으로, 호흡기·피부 유해 자재이면서 유연·불규칙한 비정형 대상물이어서 기존 산업용 로봇으로 자동화 한계가 명확했던 공정으로 규정했다. 시선에이아이와 자회사 유온로보틱스는 2026-09-05 한화로보틱스와 협력해 시각 기반 파지 AI·정밀 제어 소프트웨어에 협동로봇·AMR 하드웨어 및 SI를 결합한 모듈형 워크셀 패키지를 개발하는 공동 TF를 가동한다고 발표했다. 농산물 산지유통센터에서 검증된 기술을 정밀 부품 핸들링·유통 패키징으로 전이시킨다는 구상이다.
- 관련 근거: [로봇신문, 2026-09-08](https://www.irobotnews.com/news/articleView.html?idxno=48352) (한국어) [2차 인용] / [헬로티, 2026-09-05](https://www.hellot.net/news/article.html?no=114785) (한국어) [2차 인용]
- 기존 대비 변화: 휴머노이드 적용 타깃이 운반·투입 위주에서 기존 로봇 자동화가 실패한 비정형 난공정으로 이동했다. 국내 공급망에서는 개별 요소기술 공급에서 인식·파지·제어를 묶은 워크셀 패키지 판매 형태로의 전환이 확인된다.
- 생산기술 시사점: 흡음·차음재, 개스킷, 웨더스트립, 하네스 등 유연 비정형재 취급 공정은 정형 로봇 자동화 실패율이 높고 작업환경 유해성이 겹치는 구간이다. 자동화 검토 시 인력 대체가 아니라 정형 로봇 자동화 실패 공정과 유해환경의 이중 조건을 스크리닝 기준으로 두는 접근이 참고된다. 벤더 선정에서는 그리퍼·비전·로봇 개별 조달 후 자체 통합과 워크셀 패키지 조달의 총소요공수 비교가 필요하다.
- 확인 필요: 투입 로봇 기종·대수, 사이클타임, 안전 방책 구성, 워크셀의 파지 대상 범위·성공률·상용화 시점. 적용 수준은 파일럿 착수 및 협력 착수.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 자율제어의 기준값이 점도(APC Plus)에서 부품중량(AQC Plus)으로, 캐비티 밸런싱 신호원이 압력센서에서 콜드러너 구동 데이터(SMARTshot i)로 이동 | 재생재 밀도 변동처럼 점도 지표에 잡히지 않는 변동을 결과값 기준으로 잡는 방향. 센서 매립이 어려운 금형에도 밸런싱 자동화가 열림 |
| 기술 변화 | EOAT 교환 인터페이스에서 기계식 전기 접점을 비접촉 유도 커플링으로 대체(SMW Autoblok) | 툴체인저 접점 마모·오염이라는 고장 모드를 구조적으로 제거. 그리퍼 교환 빈도가 높은 셀의 사양 비교 항목 |
| 기술 변화 | 협동로봇 힘제어가 외부 손목 센서에서 컨트롤러 내장 방식으로(FANUC CRX-30iA + R-50iA Mate) | 압입·삽입 조립 셀의 부품 수와 캘리브레이션 공수 감소 가능성. 분해능 실물 검증 필요 |
| 업체 변화 | ARBURG가 표준기 등급에 별도 제어(GESTICA lite)를 신설하고 TREND 계열을 턴키 편입 대상으로 명시 | 표준기와 상위기의 경계가 제어·자동화 통합 수준으로 재편. 설비 등급 선정 기준 변화 |
| 업체 변화 | FANUC의 Physical AI 파트너가 NVIDIA·Google Cloud에 이어 Palladyne AI로 확대 | 티칭 대체를 로봇 메이커 단독이 아닌 AI SW사 제휴로 푸는 구도가 고착. 국내 두산로보틱스도 같은 방향의 로드맵 제시 |
| 적용사례 변화 | 검사 공정이 별도 스테이션에서 취출 로봇 축 탑재로 이동(WITTMANN IR 카메라), 마킹이 후공정에서 금형 내부로 이동(Matriq) | 셀 면적 증가 없이 검사·추적성 공정을 흡수하는 구성. 다만 두 건 모두 전시 데모 단계 |
| 적용사례 변화 | 국내 로봇 SI의 북미향 전동화 부품 조립설비 수주가 조립·접합·전기검사·비전검사 통합 형태로 확대(나우로보틱스, 23억 6,590만 원) | 검사 분리 구성 대비 공정 간 대기·재취급 손실 저감. 예비부품 계약 범위 포함이 해외 라인 실무 참고점 |
| 규제 변화 | 미국 FCC 이동로봇 규제의 판정 4요건과 국산화율 65 %(2029년 75 %) 임계값 확인, 유럽에서는 UPC 특허 소송 진행 | 북미·유럽 라인 로봇 조달 시 벤더 BOM 국산화율과 소송 리스크가 납기 변수로 편입 |
| 확인 필요 | AQC Plus 저울 분해능, SMARTshot i 양산 실적, 센서리스 힘제어 분해능, R-2000 E 정식 사양, Sytrama 로터리 로봇 사양 모두 미공개 | 다음 조사에서 Fakuma·IMTS 개막 후 실물 사양 공개분을 우선 확인 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | IMTS 2026(2026-09-14 – 19) 개막 후 ABB·Yaskawa·Universal Robots·KUKA 신규 발표 | 산업·협동로봇 | 이번 주 FANUC 단독 발표 구간이었던 만큼 경쟁사 대응 사양 확인 |
| 2 | KraussMaffei AQC Plus 정식 사양(저울 분해능, 적용 중량 범위, 사이클 부담) | 사출 공정제어 | 중량 기반 자율제어의 실제 적용 한계 판정 |
| 3 | Elmet SMARTshot i 양산 적용 실적 및 대응 사출기 인터페이스 | 금형·콜드러너 | 센서리스 밸런싱의 상용 단계 진입 여부 |
| 4 | FANUC R-50iA Compact DC Controller 정격 사양 및 R-2000 E 시리즈 공식 카탈로그 | 로봇 하드웨어 | AMR 탑재 협동로봇 구성 및 신형 스폿용접 로봇 사양 확정 |
| 5 | SMW Autoblok C40 유도 커플러 전송 전력·프로토콜 사양 | EOAT | 접점식 툴체인저 대체 가능성 판정 |
| 6 | HB-Therm Flow-6 2026년 11월 소프트웨어 업데이트 및 국내 공급 체계 | 금형 온조·유량 | 단독 운용 기능 및 국내 서비스 대응 확인 |
| 7 | Fakuma 2026 개막(2026-10-12) 전 ENGEL e-motion 380 T 형체 유닛 정량 사양 | 사출기 | 신규 설계 형체 유닛의 실제 변경 내용 확인 |
| 8 | 미국 FCC 국산화율 산정 방법론 및 기존 설치 장비 소급 적용 여부 | 규제 | 북미 라인 이동로봇 도입 계획의 전제 조건 확정 |

## 출처

### 사출성형기술

- [ARBURG, ALLROUNDER TREND 및 GESTICA lite 보도자료, 2026-09-03](https://www.arburg.com/en/us/company/news-press-releases/detail/fakuma-2026-allrounder-trend/)
- [ARBURG, 마이크로 사출 셀 보도자료, 2026-09-08](https://www.arburg.com/en/us/company/news-press-releases/detail/fakuma-2026-micro-injection-molding/)
- [K-Zeitung (독일어), KraussMaffei AQC Plus 및 LRX-Plus SE, 2026-09-08](https://k-zeitung.de/spritzgiessmaschine-regelt-sich-selbst-uebers-bauteilgewicht)
- [K-Zeitung (독일어), WITTMANN Feedmax Clean 300, 2026-09-07](https://k-zeitung.de/vakuumfoerdergeraet-fuer-den-rezyklat-einsatz)
- [K-Zeitung (독일어), Osphim Claire, 2026-09-08](https://k-zeitung.de/ki-chatbot-fungiert-als-fertigungsassistent)
- [ETMM, Elmet SMARTshot i, 2026-09-03](https://www.etmm-online.com/elmet-smartshot-i-lsr-cold-runner-fakuma-2026-a-e16badd655031880f7616d11b22b32e6/)
- [Elmet, 서보 전동 콜드러너 개발 공개, 2025-05-27](https://elmet.com/en/news-press/servoelectric-cold-runner-molds-for-lsr-injection-molding-are-learning-to-think-for-themselves--4/)
- [Plastics Today, ENGEL LSR 성형, 2026-09-04](https://www.plasticstoday.com/injection-molding/engel-eliminates-flash-in-high-precision-lsr-molding)
- [Plastics Today, 금형 소재 선정, 2026-09-04](https://www.plasticstoday.com/injection-molding/strategic-material-selection-transforms-injection-mold-performance)
- [Plastics Today, Shibaura Machine Europe 스페인 판매망 변경, 2026-09-08](https://www.plasticstoday.com/injection-molding/shibaura-machine-europe-expands-spanish-market-presence)
- [PlastXnow (독일어), HB-Therm Flow-6, 2026-09-04](https://www.plastxnow.de/hb-therm-flow-6-fakuma-2026-ultraschall-durchflussmessung-a-8224ef44f25cf24cf050f404f50fcc2a/)
- [Plastech, WITTMANN PCR 화분 생산셀, 2026-09-04](https://www.plastech.pl/en/news/wittmann-to-show-pcr-planter-molding-at-fakuma-2026-22693)
- [Plastech, Matriq 금형 내 마킹, 2026-09-04](https://www.plastech.pl/en/news/matriq-to-show-in-mold-part-marking-at-fakuma-2026-22694)
- [Plastech, Negri Bossi 및 Sytrama, 2026-09-07](https://www.plastech.pl/en/news/negri-bossi-at-fakuma-2026-high-performance-moulding-22701)
- [Plastech, WITTMANN AIM4Help 음성 지원, 2026-09-08](https://www.plastech.pl/en/news/wittmann-adds-voice-support-to-aim4help-22708)

### 로봇제조기술

- [FANUC America, IMTS 2026 보도자료, 2026-09-03](https://www.prnewswire.com/news-releases/fanuc-america-brings-robotics-automation-physical-ai-and-cnc-innovation-to-imts-2026-302869146.html)
- [FANUC America, 보도자료 목록, 확인일 2026-09-09](https://www.fanucamerica.com/press-releases)
- [Palladyne AI, FANUC America 협력 발표, 2026-09-08](https://www.palladyneai.com/press-releases/palladyne-ai-and-fanuc-america-announce-strategic-collaboration-to-advance-intelligent-robotic-automation/)
- [MTDCNC, SMW Autoblok PRS 및 C40 유도 커플러, 2026-09-03](https://mtdcnc.com/news/smw-autoblok/new-pneumatic-gripping-system-set-for-imts-2026-debut/)
- [MTDCNC, SMW Autoblok MOTIACT 선행 발표, 2026-07-30](https://mtdcnc.com/news/smw-autoblok-telbrook-ltd/smw-autoblok-showcases-innovative-grippers-at-imts-2026/)
- [The Robot Report, MassRobotics FCC 규제 서베이, 2026-09-07](https://www.therobotreport.com/massrobotics-shares-member-survey-results-around-fcc-restrictions/)
- [The Robot Report, 그리퍼 압력 센싱 설계 요건, 2026-09-06](https://www.therobotreport.com/pressure-sensors-can-help-improve-robotic-gripping-accuracy/)
- [아시아경제 (한국어), 두산로보틱스 에이전틱 로봇 발표, 2026-09-08](https://view.asiae.co.kr/article/2026090809005349708)
- [로봇신문 (한국어), 나우로보틱스 HEV 홀더 조립설비 수주, 2026-09-08](https://www.irobotnews.com/news/articleView.html?idxno=48373)
- [로봇신문 (한국어), 빅웨이브로보틱스 모듈러 주택 휴머노이드 투입, 2026-09-08](https://www.irobotnews.com/news/articleView.html?idxno=48352)
- [헬로티 (한국어), 시선AI·유온로보틱스·한화로보틱스 협력, 2026-09-05](https://www.hellot.net/news/article.html?no=114785)
- [헬로티 (한국어), Teradyne Robotics의 JAKA 독일법인 UPC 제소, 2026-09-03](https://www.hellot.net/news/article.html?no=114762)
