---
title: 생산기술 신규기술 브리핑 - 2026년 11월 2주차
date: 2026-11-11
type: production
period: 2026년 11월 2주차
tags: [Krevera, ENGEL duo 12000, 소딕 V-LINE-Complete, Gemini Robotics 2.5, GR00T 2, Aptiv, Kawasaki S-type, LG CLOiD]
summary: 사출은 Krevera가 취출 셀 외관 판정 결과로 다음 샷 성형조건을 자동 보정하는 비전 폐루프를 약 86대에 배치했고, Tacoma PA6 적재함은 SPE 그랜드 어워드와 함께 12,000 US ton급 전용 사출기에서 구조 크로스멤버 3개를 인서트 오버몰딩하는 공정이 공개됐으며, 소딕은 분쇄재 50% 이상을 리펠렛 없이 성형하는 V-LINE-Complete 데모를 IPF Japan 출품으로 확정함. 로봇은 DeepMind·Apptronik이 Mercedes-Benz 가동 라인 키팅 PoC 성공률 96%를 공개하고, NVIDIA GR00T 2는 과제당 시연 5회로 처음 보는 50개 과제 성공률 95%를 제시했으며, Aptiv는 它石智航·上海电气 체화 로봇 수백 대를 전장부품 공장에 단계 투입하고 Aptiv 컴퓨팅·전원 부품을 로봇에 역공급하기로 함
---

# 생산기술 신규기술 브리핑 - 2026년 11월 2주차

> 2026-11-05 – 2026-11-11 사출성형·로봇제조 신규 기술 변화

이번 주 사출은 사출기 본체 신제품 발표 없이, 취출 셀의 외관 판정을 성형조건 보정으로 잇는 비전 폐루프의 양산 배치, 미국 SPE 자동차 혁신상(현지 11-04 시상) 수상작의 공정 정보, IPF Japan 2026 출품 확정이 주요 변화였다. 로봇은 휴머노이드가 완성차·Tier1 가동 라인에서 수치로 검증되기 시작했고(Mercedes-Benz 키팅 PoC, Aptiv 전장부품 공장), NVIDIA는 소량 시연으로 조립·삽입 과제에 적응하는 로봇 기반모델 GR00T 2를 공개했다. 로보월드 2026(11-04 – 11-07, KINTEX) 현장 발표는 직전 호 예고대로 개막일(11-04) 발표를 포함해 반영했다. EOAT 전업 벤더의 기간 내 신제품은 확인되지 않았다. 조사 도중 웹 검색 호출 한도가 소진돼 일부 업체 공식 페이지는 확인하지 못했고, 해당 업체는 각 절 말미에 적었다.

## 금주 핵심 요약

### 사출성형기술

**[Krevera / Kreate] 취출 셀 AI 비전 폐루프 — 외관 판정 결과로 다음 샷 성형조건을 자동 보정, 약 86대 배치·계열 신공장 가동**

- 확인 내용: 2026-11-09 보도. 취출로봇이 꺼낸 성형품을 매 샷 검사해 양품·불량·재작업으로 분류하고, 다음 샷 전에 사출 조건을 자동 조정한 뒤 후속 샷 검사로 보정 효과를 확인한다. 검출 대상은 플래시, 미성형, 싱크, 탄화, 은줄, 웰드라인이다. 카메라 어레이·엣지 추론 유닛·클라우드 저장으로 구성되고 사출기 브랜드와 무관하게 붙으며, 모듈형 거치대는 약 30분이면 설치되고 상부·측면 취출 셀 모두에 맞는다. 배치 실적은 약 86대로 대부분 소유주 계열 14개 공장에 있고, 누적 수지 절감 127만 lb(약 576 t)는 회사 주장이다. 2027–2028년 외부 대형 성형사 3곳과 공급 계약을 맺었다. 같은 날 보도에 따르면 계열사 Kreate의 미국 오하이오 Tiffin 공장은 2026-10 가동했고 iQ weight control을 단 ENGEL 사출기 32대, FANUC 협동로봇, AGV, 자동 포장을 갖췄다.
- 관련 근거: [Plastics Machinery & Manufacturing, 2026-11-09](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55413461/kreveras-ai-vision-system-enables-autonomous-injection-molding-quality-control) [업계 분석] / [Plastics Machinery & Manufacturing, 2026-11-09](https://plasticsmachinerymanufacturing.com/injection-molding/article/55413507/nickolas-asset-management-kreate-opening-advanced-plant-employing-krevera-ai-vision-technology) [업계 분석] / 선행 보도 [Plastics Machinery & Manufacturing, 2026-08-17](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55397998/wittmann-connects-injection-molding-automation-auxiliaries-and-ai-for-smarter-production) [업계 분석]
- 기존 대비 변화: 2026-08에는 WITTMANN과 NPE2027용 데모를 개발하는 단계였고, 이번에 배치 규모·외부 고객 계약·공장 단위 가동이 처음 수치로 공개됐다. 범용 AI 비전은 판정까지, ENGEL EVA(09-16 브리핑)는 작업자 승인 후 조정, 스미토모 AI-Drive Optima+(직전 호)는 금형 내압을 보정 입력으로 쓰는 데 비해, Krevera는 외관 판정 결과를 성형조건 변경까지 자동으로 잇는다.
- 생산기술 시사점: 외관 전수검사를 취출 셀 안에 두고 불량 선별을 다음 샷 보정 입력으로 바꾸는 구조여서, 싱크·은줄·웰드라인이 주 불량인 내외장 사출품의 스크랩 저감과 직접 연결된다. 자동차 부품에 쓰려면 자동 조정 범위를 승인된 공정 창(process window) 안으로 제한하고, 변경 이력을 로트 추적 데이터에 남기며, 캐비티 압력 등 공정 신호와 교차 검증하는 4M 변경관리 체계가 전제다.
- 적용 수준: 양산(소유주 계열 공장 중심, 외부 고객은 계약 단계). 분류는 신규 적용사례
- 확인 필요: 검출률·과검률, 조정 대상 파라미터와 사출기 쓰기 인터페이스(EUROMAP 77·OPC UA 여부), 사이클 영향, 자동차 부품 적용 여부(확인된 제품은 소비재 수납용기), 회사 공식 자료(접근 실패)

**[Toyota · Vuteq · BASF / ENGEL · Haidlmair] Tacoma PA6 사출 적재함 — SPE 그랜드 어워드 수상, 12,000 US ton급 전용 사출기에서 구조 크로스멤버 3개를 인서트 오버몰딩하는 공정 공개**

- 확인 내용: 2026-11-04(현지) 제55회 SPE 자동차 혁신상에서 2026 Tacoma 숏베드용 사출 적재함이 전 부문 그랜드 어워드와 바디 익스테리어 부문상을 받았다. ENGEL은 이 부품 전용으로 형체력 110,000 kN(12,000 US ton)급 duo 12000 US를 제작했고, 생산 시스템은 듀얼 사출 유닛, 약 125 t 금형, 샷 약 30 kg 조건이다. 미리 성형한 아치형 구조 크로스멤버 3개를 금형에 넣은 뒤 본 샷으로 감싸 체결구 없이 일체화한다. 소재는 Ultramid B3ZG10 HSP UV Ccycled 5(단섬유 유리섬유 50% 강화, 내충격 개질 PA6)로, 도장한 장섬유 SMC 설계를 무도장 열가소성으로 대체했다. 충전·섬유배향·치수안정성·구조 성능은 Ultrasim CAE 예측과 실측의 상관으로 검증했다. Vuteq는 양산 증가에 맞춰 공정 스크랩을 재용융해 신재와 섞는 회수 체계를 검토 중이고, Toyota–BASF는 폐차 단계 회수 MOU를 맺었다(기술 검증 전제). 참여사는 Cascade Engineering을 포함해 6사다.
- 관련 근거: [BASF 보도자료, 2026-11-04 게시(본문 일자 11-05)](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-43) [공식 발표] / 장비 배경 [Plastics Technology, 2026-04-24](https://www.ptonline.com/news/engel-delivers-worlds-largest-injection-molding-machine) [업계 분석] / [SPE Automotive Division 수상 페이지, 2026-11-11 확인](https://speautomotive.com/spe-automotive-div-innovation-awards/) [공식 발표]
- 기존 대비 변화: 10-21 호는 후보 단계에서 샷 30 kg·12,000 ton급 규모만 다뤘다. 이번에 수상이 확정됐고 구조 부재 사전 성형 후 인서트 오버몰딩, 금형 중량, 소재 등급, CAE–실측 상관 검증, 스크랩 재투입 계획이 공식 자료로 확인됐다. 장비 최대 사양(4월 보도 기준 12,365 US ton, 최대 금형 187 t) 대비 실제 운용 샷은 약 30 kg이다.
- 생산기술 시사점: 도장 SMC 조립품을 사출 일체 성형으로 바꿀 때 병목은 소재보다 장비 규모, 125 t급 금형 취급, 듀얼 사출 동기화, 대형 부품의 섬유배향·휨 예측 정확도로 옮겨간다. 대형 인서트 오버몰딩은 인서트 위치 고정과 계면 접합 관리가 품질의 핵심이고, 샷 30 kg 단위 스크랩을 재투입하려면 혼합비별 물성 관리 기준이 먼저 있어야 한다.
- 적용 수준: 양산. 분류는 신규 적용사례
- 확인 필요: 사이클타임, 크로스멤버의 소재·성형 방식, Cascade Engineering의 역할, 스크랩 재투입 허용 비율. SPE 공식 전체 수상 목록은 11-11 기준 미게시

**[소딕(Sodick)] V-LINE-Complete — 분쇄재 50% 이상을 리펠렛·건조 없이 성형하는 데모를 IPF Japan 2026 출품으로 공식 확정**

- 확인 내용: 2026-11-09 보도자료로 IPF Japan 2026(12-01 – 12-05, 마쿠하리 멧세) 출품을 공개했다. V-LINE(가소화·사출 분리, 역류 방지로 계량 편차 억제)에 벤트 기구를 이용한 건조리스 성형을 결합하고, 벤트 구멍 근방의 수지 상태를 감시해 스크루와 피더를 자율 제어한다. 데모는 해양생분해성 플라스틱 분쇄재를 50% 이상 섞어 리펠렛 공정 없이 박육 성형하는 내용이다. 함께 광커넥터 MT 페룰용 성형기 LP10EH5-MT 실기, 1사이클 1초 미만 로터리식 수직형 사출기 드라이 운전, LSR 성형 자동화(성형기·금형·검사·포장 일괄)를 선보인다.
- 관련 근거: [PR TIMES 소딕 보도자료 (일본어), 2026-11-09](https://prtimes.jp/main/html/rd/p/000000092.000142070.html) [공식 발표] / [소딕 IPF 특설 페이지 (일본어), 2026-11-11 확인](https://www.sodick.co.jp/feature/ipf2026/) [공식 발표] / [소딕 AI-VENT IPF 페이지 (일본어), 2026-11-11 확인](https://info-bp.sodick.co.jp/products/injection/special-purpose/ai-vent/ipfjapan2026) [공식 발표] / LP10EH5 배경 [VOIX biz (일본어), 2026-09-28](https://voix.jp/biz/?p=179198) [2차 인용]
- 기존 대비 변화: 직전 호는 게시일 없는 특설 페이지만 참고로 다뤘고, 이번 보도자료로 데모 내용이 확정됐다. 벤트업 징후를 검지해 가소화 조건을 보정하는 AI-VENT는 기존 제품 기능이며(최초 공개 시점 확인 필요), 이번에는 이를 고비율 분쇄재의 리펠렛·건조 생략 직접 투입 용도로 넓혔다. LP10EH5-MT는 2026-09-28 발표 기종(제어 주기 100 µs에서 50 µs, 소비전력 24% 감소)의 실기 공개다.
- 생산기술 시사점: 사내 분쇄재를 펠릿화·건조 없이 고비율로 재투입하면 재생 루프의 공정 단계와 에너지가 줄어든다. PC·PA 같은 가수분해성 수지에서 벤트 탈기가 건조 공정을 대체할 수 있는지가 관건이며, 자동차 부품은 재생재 혼합비 사양 제한이 있어 혼합비별 물성·치수 데이터가 판단 근거가 된다. 벤트업을 피더·스크루 자율 제어로 막는 기능은 무인 연속 운전의 전제 조건이다.
- 적용 수준: 전시 데모(12월 예정). 분류는 기존기술 고도화
- 확인 필요: 데모 외 수지 대응 범위, 분쇄재 혼합 시 물성·수분 허용치, 벤트 근방 감시 신호의 종류, V-LINE-Complete 판매 모델과 형체력 범위

### 로봇제조기술

**[Google DeepMind · Apptronik · Mercedes-Benz] Gemini Robotics 2.5 — 가동 중인 완성차 라인 키팅 PoC에서 휴머노이드 자율 작업 성공률 96% 공개**

- 확인 내용: DeepMind가 2026-11-10 VLA 모델 Gemini Robotics 2.5를 공개했다. Mercedes-Benz 케치케메트(헝가리)·진델핑겐(독일) 공장의 가동 라인에서 Apptronik Apollo 2(5지 22자유도 핸드)가 벌크 빈의 금속 브래킷을 차량 투입 순서에 맞춰 시퀀싱 용기에 담는 작업을 수행했고 성공률은 96%다. 공정 흐름 추적은 Gemini Robotics ER, 손·팔 제어는 2.5가 나눠 맡는 2계층 구조다. DeepMind 자체 200여 과제 평가에서는 성공률 30–100% 향상, 소요시간 20–30% 단축, 장애물·사람 주변 과제의 안전 완료율 각각 33%·43% 개선을 제시했다. Apptronik·Mercedes-Benz 등 파트너에 배포를 시작했고, Apptronik은 수 주의 사후학습 뒤 양산 라인으로 옮겼을 때 성능 저하가 작았다고 밝혔다.
- 관련 근거: [Google DeepMind 블로그, 2026-11-10](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/) [공식 발표] / [The Decoder, 2026-11-10](https://the-decoder.com/google-deepminds-gemini-robotics-2-5-scores-96-percent-sorting-metal-parts-in-a-mercedes-benz-assembly-pilot/) [업계 분석]
- 기존 대비 변화: 2026-07 Gemini Robotics 2(전신 제어)의 후속이다. Apptronik의 직전 공식 발표(2026-06-30)는 데이터 수집 거점 Robot Park였고, Apptronik–Mercedes-Benz 협업에서 가동 라인 과업의 성공률이 수치로 공개된 것은 이번이 처음이다.
- 생산기술 시사점: 벌크 빈에서 서열 용기로 옮기는 키팅이 휴머노이드의 1차 적용 공정으로 굳어지고 있다. 작업 관리와 동작 제어가 분리돼 있어 서열 정보·MES 연계 지점을 정의하기 쉽다. 다만 96%는 사람 개입 없이 라인 택트를 맞추는 수준과 거리가 있고, 라인 이식에 수 주의 사후학습이 필요했으므로 부품·공정 변경 시 재학습 기간을 도입 일정에 넣어야 한다.
- 적용 수준: 파일럿(PoC). 분류는 신규 적용사례
- 확인 필요: 사이클타임·처리량, 96%의 산정 기준(시도 수), 사람 개입 빈도, 투입 대수, 양산 전환 일정, Mercedes-Benz 측 공식 자료

**[NVIDIA] GR00T 2 — 조립·삽입 과제를 과제당 시연 5회(로봇 데이터 3분 미만)로 적응시키는 세계-행동 모델 공개**

- 확인 내용: 2026-11-09(미국 현지) CoRL 2026에 맞춰 공개했다. 하나의 확산 트랜스포머가 미래 영상과 로봇 행동을 함께 예측하는 세계-행동 모델(WAM)이며, 1인칭 작업 영상 402,730시간, 핸드헬드 UMI 그리퍼 시연 10,184시간, 로봇 원격조작 23,500시간으로 사전학습했다. 대상 로봇에서 본 적 없는 50개 과제의 무시연 평균 성공률은 40%(50개 중 40개 과제는 1회 이상 성공)이고, 시연 1회로 71%, 5회(RTX 5090 1장에서 LoRA 30분 미세조정)로 95%다. 22자유도 핸드로 GB300 메모리 모듈 장착 85%를 냈고, 접촉이 많은 삽입 과제 3종은 실기 강화학습으로 40–76%에서 88–96%로 올랐다. 추론 에이전트가 GR00T 2를 도구로 호출하는 구성에서는 이더넷 케이블 5개 연속 삽입이 20회 중 19회(강화학습 전 12회), 장난감 3종 연속 조립이 각 100회 중 97–98회 성공했다. 코드는 12월 공개 예정이며, NVIDIA는 Foxconn의 서버 제조 자동화 적용과 Siemens의 평가를 파트너 사례로 언급했다.
- 관련 근거: [NVIDIA GEAR GR00T 2 페이지, 2026-11 게시·11-11 확인](https://research.nvidia.com/labs/gear/gr00t-2/) [공식 발표] / [NVIDIA 블로그, 2026-11-09](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/) [공식 발표]
- 기존 대비 변화: 이전 세대 GR00T 1.x(N1.6·1.7)는 VLA 모델이었고, GR00T 2는 장면 변화를 함께 예측하는 WAM으로 구조가 바뀌었다. 시뮬레이션 데이터를 더했을 때 실기 분포 밖(OOD) 성공률이 GR00T 2 Turbo는 6.7%에서 63.3%로, GR00T 1.7은 40.0%로 올랐다. 10-28 호의 Isaac Lab 3.0이 학습 인프라였다면 이번은 그 위에서 쓰는 모델 자체의 세대교체다.
- 생산기술 시사점: 커넥터·케이블 삽입, 피팅 체결, 모듈 장착처럼 품종마다 티칭이 필요했던 전장·조립 작업에 과제당 수 회 시연으로 적응하는 경로가 제시됐다. 다만 95–98%의 성공률은 ppm 단위 불량 관리와 거리가 있고 사이클타임 데이터가 없어, 양산 적용 전에 재현성·사이클·안전 기능 검증이 먼저다. 제시 수치는 연구 환경 결과다.
- 적용 수준: 기술자료(연구 공개). 분류는 신규
- 확인 필요: Foxconn 적용 단계, 가중치 라이선스, 산업용 6축 암 대응 데이터, 사이클타임

**[Aptiv · 它石智航(TARS) · 上海电气] 전장부품 공장에 체화 로봇 수백 대 단계 투입 — 로봇 도입과 로봇용 컴퓨팅·전원 부품 공급을 함께 계약**

- 확인 내용: Aptiv가 2026-11-06 중국국제수입박람회에서 它石智航, 上海电气와 각각 전략협력을 체결했다. 양사 체화 로봇 수백 대를 Aptiv 생산 현장에 단계적으로 투입해 기술 검증과 방안 최적화를 진행하고, 생산 현장 데이터를 모델 개선에 환류한다. 역방향으로는 Aptiv의 고성능 컴퓨팅 플랫폼과 스마트 전원관리 솔루션을 양사 로봇에 우선 적용하고 연내 양산할 계획이다. 상하이증권보 보도에 따르면 它石 A계열(바퀴형)은 첫 물량이 실 라인에서 상시 가동 중이며 연말까지 단일 공장 100대급으로 늘려 상하역·순회점검·레이저 각인 등 8개 공정·33개 시나리오를 맡기고, 上海电气는 안팅(安亭) 공장에서 제품 검사·커넥터 조립 검증·정기 순찰에 100대급 적용을 추진한다. 박람회에서는 它石 A3가 커넥터 자율 조립을 시연했다.
- 관련 근거: [新华财经/东方财富网 (중국어), 2026-11-06](https://finance.eastmoney.com/a/202611063924958162.html) [2차 인용] / [上海证券报/同花顺 (중국어), 2026-11-08](http://stock.10jqka.com.cn/20261108/c681582075.shtml) [2차 인용] / [OFweek (중국어), 2026-11-10](https://mp.ofweek.com/im/a056714048647) [업계 분석]
- 기존 대비 변화: 它石智航은 2026-06 하네스 업체와 하네스 조립 공정 적용을 발표한 바 있고(보도 기준), 이번에는 글로벌 Tier1 자체 공장으로 범위를 넓히며 부품 역공급이 더해졌다.
- 생산기술 시사점: 커넥터 체결·검증, 상하역, 순회점검처럼 소형·유연 부품과 비정형 작업이 체화 로봇의 우선 공정으로 정리되고 있다. 자동차 전장 공급망(컴퓨팅·전원·하네스)이 로봇 부품 공급망으로 확장되는 경로이기도 하다. '수백 대'는 단계 투입 계획이어서 가동률과 공정별 성과 데이터 없이 규모만으로 성숙도를 판단하기 어렵다.
- 적용 수준: 파일럿(일부 상시 가동). 분류는 신규 적용사례
- 확인 필요: 실 가동 대수·가동률, 공정별 성공률·사이클, Aptiv 공식 보도자료, '수백 대'와 '사별 100대급' 표기의 관계

## 사출성형기술 상세

### 사출기·금형·소재

**[Ford · Supavut Thailand · BASF] Ford Everest 내장 도어핸들 베젤 — 급속 가열·냉각(RHCM) 금형 없이 표준 단일 공정 사출로 Class-A 고광택 무도장 (SPE 소재 부문상)**

- 확인 내용: 2026-11-05 발표. Supavut Thailand가 Ultramid Deep Gloss D3K(PA6 블렌드)로 사출하며, 사출 중 급속 가열·냉각이 필요 없고 표준 단일 공정으로 Class-A 무도장 고광택 표면을 얻는다. 단일 소재 구성이어서 폐차 시 재료 회수가 단순하다.
- 관련 근거: [BASF 보도자료, 2026-11-05](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-41) [공식 발표]
- 기존 대비 변화: 피아노블랙 계열 고광택 내장 부품은 도장하거나 Variotherm·RHCM 금형으로 웰드라인·광택 얼룩을 억제해 왔다. 이번 건은 동적 금형온도 설비 없이 소재로 표면 품질을 확보한 양산 사례다.
- 생산기술 시사점: RHCM을 생략하면 금형 가열 설비(스팀·유도·고온수), 가열·냉각에 따른 사이클 증가, 에너지 비용이 빠진다. 대신 내스크래치, 웰드라인 가시성, 광택 균일성은 소재와 게이트·금형 표면 설계에 의존하므로 기존 RHCM 부품과 같은 조건의 비교 검증이 필요하다.
- 적용 수준: 양산. 분류는 신규 적용사례
- 확인 필요: 금형온도·사이클타임, 내스크래치 등급, D3K 등급의 출시 시점·지역 공급

**[참고] SPE 자동차 혁신상 기타 수상·후보**: Celanese의 탄소포집 POM 연료 모듈(Aisan)은 지속가능성 부문상을 받았으나 10-28 호에서 다룬 드롭인 사례의 수상 진전이고, Cooper Standard TPV 도어 실(공정·조립 부문)은 사출 공정 연계가 확인되지 않았다. BASF·Stellantis·L&L Products의 Jeep Grand Cherokee 터널 보강재(섀시 부문)는 재생 60% PA6를 썼으나 사출 오버몰딩 여부가 공식 자료에 없다. 코오롱스페이스웍스 PV5 MIC 복합재 후드는 최종 후보(미수상)로 보도 기준 LFI 공법이며 공법 상세는 확인이 필요하다. [FinancialContent(Business Wire), 2026-11-05](https://www.financialcontent.com/article/bizwire-2026-11-5-celanese-materials-innovation-powers-two-spe-automotive-innovation-award-winners) / [BASF, 2026-11-05](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-42) / [연합뉴스 한민족센터 (한국어), 2026-11-05](https://www.koreancenter.or.kr/news/articleView.html?idxno=1435271)

**[참고] 일일 브리핑 단서 판단**:

- 소딕 사출성형기 생산능력 증강(11-04 발표, 2028년 출하를 2026년의 약 3배로 계획)은 생산능력 투자다. [MONOist (일본어), 2026-11-10](https://monoist.itmedia.co.jp/mn/articles/2611/10/news038.html)
- Moldex3D 사용자 콘퍼런스(11-04, 서울)는 HKMC 메탈릭 MIC 해석–실물 검증 등 발표 주제만 공개됐고 정량 결과가 없다. [산업일보 (한국어), 2026-11-04](https://kidd.co.kr/news/248001)
- Gerresheimer 'Digital Mold'(K-Zeitung 11-10 보도)는 원발표가 2026-07-17이고 정량 효과가 없다. [Manufacturing Chemist, 2026-07-17](https://manufacturingchemist.com/gerresheimer-significantly-accelerates-mould-development-in-medical-technology)
- HIPUS 금형대장 SaaS 'SACT'(11-06 보도)는 2026-01 출시 서비스이며, 보도의 파나소닉 '17만 형' 수치는 원문을 열지 못해 확인이 필요하다(공식 페이지 기준 약 35만 건 관리, 업무량 30% 이상 감소). [HIPUS (일본어), 2026-11-11 확인](https://www.hipus.com/sact/)
- KEBA의 IPF 출품작(KePlast i1200, KeDrive D3)은 K 2025 공개 제품의 재소개이고, 시바우라기계 IPF 안내(재생재 대응 성형조건 자동보정 등)는 게시일이 없어 기간 내 신규 여부를 판단할 수 없다. MoldMaking Technology의 기간 내 게재분(Mikron 5축 밀링+지그 그라인딩 기고, Makino EDAF2i Ultra, Husky Fakuma 출품)은 기고·재보도다.

**신규 없음으로 확인**: ENGEL(미디어센터 최신 10-28), ARBURG(기간 내 게시는 대리점 기념 2건), Mold-Masters(최신 10-29), 시바우라기계(제품 뉴스 최신 09-30)는 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. 검색 한도 소진으로 KraussMaffei, Haitian, Milacron, Netstal, JSW, 닛세이수지, FANUC ROBOSHOT, 도요기계금속, 메이키, UBE, 스미토모중기계·SHI Demag, 핫러너·센서·온조기 업체(Husky, Synventive, HASCO, Meusburger, Ewikon, Günther, Gammaflux, HRSflow, Kistler, Priamus, HB-Therm, Regloplas, Single), 우진플라임, LS엠트론, 소재사 다수는 확인하지 못했다. K-Zeitung의 Sinit·Haidlmair 기사와 Envalior Pocan BFN4135(11-03 보도) 원문도 열지 못했다.

### 사출자동화·주변장치

**[나우로보틱스] ECON — 기존 스마트 취출로봇 대비 가격 75% 수준의 경제형 직교 취출로봇 라인 추가(로보월드 2026)**

- 확인 내용: 로보월드 2026에 직교형 취출로봇 3개 라인을 전시했다. 대형 사출기용 고하중 EPIK, 중소형 사출기용 UNIK에 경제형 ECON을 더했고, ECON은 드라이 사이클로만 시연했다. 보도에 따르면 ECON은 기존 스마트 취출로봇과 성능이 비슷하고 가격은 75% 수준이며, 사전 생산분은 개막 전 기존 고객사에 전량 계약됐고 11월부터 추가 생산한다. 취출로봇 사업 기반은 2026-06 흡수합병한 한양로보틱스(1997년 설립, 고객 약 3,000곳)다. 같은 부스에서 2027년 출시 예정인 다관절 NX 시리즈 6종도 공개했다.
- 관련 근거: [로봇신문 (한국어), 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49436) [2차 인용] / [아시아경제 (한국어), 2026-11-06](https://view.asiae.co.kr/article/2026110607361780815) [2차 인용] / [머니투데이 더벨(서플 전재) (한국어), 2026-11-06](https://supple.kr/news/cmw464nqrroopal9p8y2unri0) [2차 인용]
- 기존 대비 변화: 사출기 규모로만 나뉘던 라인업에 가격 계층을 추가했다. 직전 호 우진플라임 WABOT A310(3축, 10 kg) 사양 공개에 이은 국내 취출로봇 라인업 확장이다.
- 생산기술 시사점: 중소형 사출기를 여러 대 운영하는 라인에서 취출 자동화의 대당 투자액이 낮아진다. '성능 유사'의 근거가 공개되지 않아 도입 검토 시 가반하중, 스트로크, 취출 시간, 반복정밀도, EUROMAP 67 인터페이스를 기존 모델과 대조해야 한다.
- 적용 수준: 전시 데모(드라이 사이클), 초도 생산분 계약. 분류는 신규
- 확인 필요: 축 구성·가반하중·적용 톤수, 제어기, 원가 절감 항목, 출시일·가격, 공식 제품 페이지

**[참고] 기간 내 보도 중 신규 기술 제외 건**: WITTMANN TEMI Next MES(11-09 보도)는 처음으로 SaaS 구독형을 도입하고 사출 외 조립·충전·포장 공정까지 한 모델로 묶으며 기계·부품·로트 단위 에너지·CO2를 산출하나, Fakuma 2026 공개분으로 원발표가 기간 이전이다. WITTMANN G-Max primus 13 분쇄기 사양 공개, Matsui의 Moditec 인수(9월 완료 M&A), Conair 미국 증설(11-03 투자)은 기술 변화가 아니다. 아이엘 로보월드 현장(11-07 보도)은 PoC 사례 소개·상담만 확인돼 직전 호 이후 새 정량·기종·과업 정보가 없고, Mokon 온조기 재보도(11-06)에서도 지원 프로토콜명은 공개되지 않았다. [Plastics Technology, 2026-11-09](https://www.ptonline.com/products/wittmanns-temi-next-mes-supports-ai-shifts-to-subscription-model) / [빅데이터뉴스 (한국어), 2026-11-07](https://www.thebigdata.co.kr/view.php?ud=2026110717314550539aeda69934_23)

**직전 호 확인 필요 항목 후속**: 하모 대형 취출로봇은 TRX-3600/4000Si(2,000–4,000 t, 90 kg) 기존 사양 외 신형 정보가 없다([Harmo, 2026-11-11 확인](https://eng.injection-molding.jp/products/robot/trx-3600-4000si)). ARBURG Standalone 로봇 공식 페이지에는 EUROMAP 77·79 언급이 없고, WITTMANN WS90은 공식 스프루 피커 페이지(WP80만 게재)에 명칭이 없어 명칭 재확인이 필요하다. ARBURG ALS 웨비나(11-23)는 행사 페이지에 게재되지 않았고, EUROMAP 77·79·82.x의 신규 버전 공개는 확인하지 못했다.

**신규 없음으로 확인**: WITTMANN(뉴스 최신 09월), 유신정기(최신 10-17 IR·10-16 IPF 공지), Piovan(전시 참가 공지뿐), 하모(IPF 페이지에 신규 기종명 없음)는 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. Sepro, 스타세이키, Hekuma, Waldorf Technik, 마쓰이, Moretto, Motan, Conair 뉴스룸, 가와타, Plus10, Intravis와 우진플라임의 로보월드 출품 여부는 검색 한도 소진·접근 실패로 확인하지 못했다.

## 로봇제조기술 상세

### 산업·협동로봇·로봇 SW

**[Kawasaki Heavy Industries] F 시리즈 컨트롤러 S-type — 사용자 인증·로그·암호화 통신·무결성 확인을 컨트롤러에 내장한 사이버보안 대응형 발매**

- 확인 내용: 2026-11-05 발매를 발표했다. 사용자 인증, 권한·세션 관리, 조작·보안 로그, SSH·FTPS·HTTPS 통신, 패킷 필터링, 파일 암호화, OS 기동 시 무결성 확인, 애플리케이션 실행 제어, 보안 소프트웨어 업데이트를 추가했고 PROFIsafe를 지원한다. 2026-11 핸들링 용도부터 순차 전개하며, EU 기계규칙 (EU) 2023/1230, ISO 10218-1:2025, IEC 62443-4-1(개발 프로세스 인증, 2024-09 취득)을 명시했다.
- 관련 근거: [가와사키중공업 보도자료 (일본어), 2026-11-05](https://digitalpr.jp/pdf.php?r=147589) [공식 발표] / [Automation International, 2026-11-10](https://www.automation-mag.com/news/117151-kawasaki-enhances-cybersecurity-for-industrial-robots) [업계 분석]
- 기존 대비 변화: 기존 F 컨트롤러의 조작성·확장성을 유지하면서 보안 기능을 컨트롤러 내부에 넣었다. 직전 호의 FANUC 안전 소프트 PLC가 기능안전을 컨트롤러로 흡수한 사례라면, 이번은 사이버보안을 흡수한 사례다.
- 생산기술 시사점: 원격 보수·MES 연계로 네트워크에 노출된 로봇에서 계정별 권한 분리, 변경 이력, 서명된 업데이트를 로봇 단에서 확보할 수 있다. EU 기계규칙 적용(2027-01-20)과 CRA 대응을 앞두고 설비 구매 사양에 컨트롤러 보안 기능과 로그 보존 요건을 넣을 근거가 된다.
- 적용 수준: 양산(판매 개시). 분류는 기존기술 고도화
- 확인 필요: 대상 기종, 기존 F 컨트롤러 업그레이드 가능 여부, 용접·도장 용도 전개 시점

**[UC Berkeley · NVIDIA · Siemens] VABAR·DexBench, Isaac Lab-Arena 0.4 — 셀·센서는 고정하고 부품 형상·자세만 변하는 '가변 자동화' 과제의 정책 평가 벤치마크**

- 확인 내용: 2026-11-09 공개. VABAR는 공구 분류, 공구 걸기, 기어 맞물림, 주사기 포장, USB-C 케이블 삽입, 케이블 라우팅 6개 과제군에 부품 형상·자세 변동, 난이도 2단계, 성공 기준을 표준화했고, Newton과 Isaac Lab-Arena 두 환경으로 구현해 33개 스킬 라이브러리를 포함한다. 코딩 에이전트 8종이 정책 코드를 작성·수정한 결과는 최고 77%로 사람이 작성한 정책(82%)에 못 미쳤다. DexBench는 소매·물류·제조·접객 4개 장면 15개 과제로 구성된다. 같은 발표의 AlphaNIST는 NIST 조립 태스크보드 20개 과제를 단일 정책으로 학습해 훈련 성공률 98% 이상(과제별 정책 81%)을 냈다.
- 관련 근거: [VABAR 프로젝트 페이지, 2026-11-09](https://berkeleyautomation.github.io/vabar-website/) [공식 발표] / [NVIDIA 블로그, 2026-11-09](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/) [공식 발표]
- 기존 대비 변화: 기존 공개 벤치마크가 가정·주방 과제 중심이었던 데 비해, 제한 범위의 부품 변동을 별도 범주로 정의했고 Siemens 연구자가 공저자로 참여했다.
- 생산기술 시사점: 다품종 셀의 AI PoC에서 부품 변동 범위·난이도·성공 기준을 사전에 정의하는 평가 틀로 쓸 수 있다. 사람이 작성한 정책이 여전히 앞서므로 코딩 에이전트가 만든 로봇 프로그램은 엔지니어 검토를 전제로 운영해야 한다.
- 적용 수준: 기술자료. 분류는 신규
- 확인 필요: 실기 결과와의 상관, 상위 난이도 테스트셋 공개 시점

**[두산로보틱스 / NVIDIA] Newton 기반 샌딩 접촉압력 시뮬레이션 — 연마 패드 변형·압력 분포 계산으로 연마 조건 설정을 시뮬레이션으로 이전**

- 확인 내용: 2026-11-09 NVIDIA AI Day Seoul에서 발표했다. Newton의 변형체 솔버(VBD)로 연마 패드 변형과 압력 분포를 계산하고 3D 프린팅 시험 부품의 압력 필름 측정값·FEA 결과와 비교했다. 단일 가압 해석은 FEA 약 1시간에서 약 28초로 줄었고, 표면 굴곡에 따라 최대 접촉압력이 10배 이상, 접촉면적이 6배 이상 달라지는 것을 확인했다. 목표 거칠기에 맞는 조건을 자동 생성하는 에이전트를 개발 중이며 픽앤플레이스, 케이블·커넥터 조립으로 확대할 계획이다.
- 관련 근거: [팍스경제TV (한국어), 2026-11-09](http://www.paxetv.com/news/articleView.html?idxno=286422) [2차 인용]
- 기존 대비 변화: 기존에는 부품별 연마 조건 설정에 수시간에서 1주 이상 걸렸고, 힘제어로는 총하중만 조절할 뿐 압력 분포를 알 수 없었다. 10-28 호의 Schaeffler Newton 채택이 범용 물리엔진 도입이라면, 이번은 접촉 연마 레시피 산출에 특화된 적용이다.
- 생산기술 시사점: 곡면 부품의 샌딩·폴리싱·디버링에서 같은 힘으로 눌러도 제거량이 달라지는 문제를 사전에 계산해 시험 연마 횟수를 줄일 수 있다. 검증 대상이 시험 부품까지여서 실부품·패드 마모 조건의 검증이 남아 있다.
- 적용 수준: 기술자료. 분류는 기존기술 고도화
- 확인 필요: 회사 공식 보도자료(뉴스룸 최신 10-19), 실부품 검증 결과, 제품 반영 시점

**[휴먼텍] 3D 비전·협동로봇 샌딩·폴리싱 — 스캔 기반 경로 자동 생성, 도장 범퍼 후공정 적용 협의(로보월드 2026)**

- 확인 내용: 로보월드 2026에 출품했고 2026-11-05 보도됐다. 대상을 스캔하면 로봇이 작업 위치·경로를 생성해 샌딩·도장·폴리싱을 수행한다. 범퍼 등 플라스틱 부품 업체와 도장 후 이물·표면 불량 폴리싱 자동화를 협의 중이며, 상용화를 준비해 2027년 상반기 자동차 정비업체 현장 테스트를 계획한다. 로보월드 어워드 디스팅션을 받았다.
- 관련 근거: [산업일보 (한국어), 2026-11-05](https://kidd.co.kr/news/248041) [업계 분석]
- 기존 대비 변화: 작업자가 표면을 보고 판단하던 연마를 스캔 기반 경로 자동 생성으로 바꾸려는 개발 단계 솔루션이다.
- 생산기술 시사점: 결함 위치가 매번 달라 수작업 비중이 높은 도장 범퍼·외장 부품 폴리싱에서는 결함 검출과 국소 연마 경로 생성의 결합이 관건이다. 검출 정확도와 사이클타임 데이터가 확보돼야 라인 적용을 판단할 수 있다.
- 적용 수준: 전시 데모. 분류는 신규
- 확인 필요: 로봇 기종, 결함 검출 정확도, 사이클타임, 협의 업체 적용 일정

**[아이벡스 · 후성정공] 열간단조 스크롤 AI 검사·빈피킹 폐루프 — 로봇이 검사 자세를 만들고 판정 데이터를 재학습에 환류**

- 확인 내용: 2026-11-05 중기부 스마트공장 지원사업 공급기업으로 선정돼 협약을 체결했다. 대상은 자동차 컴프레서용 열간단조 스크롤이다. AIVision이 비정렬 부품의 위치·자세를 인식하고, AIVot이 빈피킹 후 검사 시인성이 나오도록 자세를 조정하며, 판정 결과는 AIVOps에 쌓여 재학습에 쓰인다.
- 관련 근거: [헬로티 (한국어), 2026-11-05](https://www.hellot.net/news/article.html?no=116045) [2차 인용]
- 기존 대비 변화: 고정형 비전으로는 나선형의 깊은 내부를 보기 어려웠고, 열처리·쇼트 후 흐트러진 정렬을 로봇 자세 제어로 보완한다.
- 생산기술 시사점: 단조·주조품 외관 검사에서 로봇이 검사 자세를 만들고 재학습 루프를 셀 설계에 포함한 사례다. 판정 모델 재학습이 품질 판정 기준 변경에 해당하는지 변경관리 기준을 미리 정해야 한다.
- 적용 수준: 확인 필요(구축 협약 단계). 분류는 신규 적용사례
- 확인 필요: 가동 시점, 검출률·사이클타임

**[중국 工业和信息化部] 로봇 제품 식별코드 관리 잠정판법(의견수렴안) — 출하 전 대당 1개 코드 부여·국가 플랫폼 등록 추진**

- 확인 내용: 2026-11-06 의견수렴을 시작했고 기한은 12-05다. 중국에서 생산한 산업용·서비스·특수 로봇 완제품이 대상이며, 코드는 제조사·제품설명·순번·기타 4개 부분으로 구성된다. 출하 전에 부여하고 디지털 저장·사람 판독·기계 판독 방식으로 영구·변조 불가하게 표시하며, 기존 출하분은 제조사 자체 시리얼을 플랫폼에 등록한다.
- 관련 근거: [北京青年报/新浪财经 (중국어), 2026-11-07](https://finance.sina.cn/2026-11-07/detail-inixwxpw8058393.d.html) [2차 인용] / [证券之星 (중국어), 2026-11-07](https://wap.stockstar.com/detail/KX2026110700009937) [2차 인용]
- 기존 대비 변화: 제조사별 자체 시리얼만 있던 체계에 전 품목 공통 식별 체계와 국가 플랫폼 등록을 출하 요건으로 더하는 초안이다. 중국 주간(11-09)의 제도 개요에 코드 구조와 표시 방식을 보완했다.
- 생산기술 시사점: 확정되면 중국산 산업용·협동로봇의 자산대장·보전 이력을 국가 코드 기준으로 관리할 수 있게 된다. 중국 거점에서 로봇을 운용하거나 중국산 로봇을 도입하는 경우 설비 이력 관리 체계의 식별자 항목을 검토할 대상이다.
- 적용 수준: 기술자료(의견수렴 초안). 분류는 표준 변화
- 확인 필요: 공업정보화부 원문, 연계 국가표준 GB/T 48541-2026의 발행·시행 상태(보도 간 상충)

**[참고] 일일 브리핑 단서 및 기타 판단**:

- 상하이전기 가스터빈 블레이드 유연 라인(11-10 보도)은 같은 라인이 2025-09에 피킹 99.9% 이상·MES·QMS 연계로 소개된 바 있어 재소개로 판단했다(11-10 원문 미확인). [NEPCON Asia (중국어), 2025-09](https://www.nepconasia.com/zh-cn/news-center/news/2025/9/43.html)
- 케이쓰리아이 모터 하우징 용접·검사 자율화 과제(75억 원, 목표 자율화율 90%)는 과제 참여 발표다. [뉴스핌 (한국어), 2026-11-09](https://www.newspim.com/news/view/20261109000365)
- 푸른로보틱스 심포니-40S(40 kg급, 본체 80 kg대, 로보월드 어워드 디스팅션)는 경량화·속도 향상을 밝혔으나 이전 모델 대비 수치가 없다. [뉴스핌 (한국어), 2026-11-05](https://www.newspim.com/news/view/20261104001052)
- ABB AI Robot Trainer(11-09 보도)는 CIIF 2026(10월) 발표의 재보도이고, Universal Robots Gen 7의 electronica(11-10 – 11-13) 유럽 첫 전시는 2026-09-14 발표 제품이다. Kassow·Bosch Rexroth 등의 AMR+협동로봇 키팅, Visual Components–Kia Slovakia 엔진 조립 시뮬레이션은 원 사례 공개일과 정량 효과가 없다.
- Path Robotics 시리즈 E(11-10)는 투자 건이며, 함께 언급된 Obsidian 모델·이동형 용접 Rove는 2026-04 기공개로 검색돼 제외했다(원문 확인 필요). 도요타 로보틱스 신설(11-05)과 중국의 소프트뱅크 ABB 로보틱스 중국 사업 인수 불허(11-05)는 조직·규제 사안으로 제외했다.

**신규 없음으로 확인**: FANUC(11-05 IR 공시만, 마지막 로봇 신상품 10-27), Universal Robots(뉴스센터 최신 10-21), 두산로보틱스(공식 뉴스 최신 10-19)는 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. KUKA·Beckhoff(뉴스 목록 동적 로딩), ABB(뉴스룸 접근 실패)와 Yaskawa, Nachi, Epson, Mitsubishi Electric, Denso, Omron, Stäubli, Techman, AUBO, 한화로보틱스, HD현대로보틱스, Comau, Siemens, Rockwell, RoboDK, Dassault Systèmes는 검색 한도 소진으로 확인하지 못했다.

### 휴머노이드·모바일 매니퓰레이터

**[LG전자] CLOiD 세탁기 공장 약 1년 실증 공개 — 학습 데이터 목표 50만 시간으로 상향, 액추에이터 AXIUM 2027년 외부 판매**

- 확인 내용: 2026-11-09 NVIDIA AI Day Seoul에서 세탁기 상판을 행거에 거는 작업의 약 1년 실증 과정을 공개했다. 개발은 숙련자 동작 분석, 원격조작·시뮬레이션 데이터 수집, Isaac GR00T 기반 VLA 학습, Cosmos 증강·Isaac Sim 가상공정, 현장 검증·환류의 5단계로 진행했다. 시연 자체는 며칠 만에 가능했으나 반복 작업 중 부품 위치 편차와 조명 변화 대응이 가장 어려웠다고 밝혔다. 학습 데이터 목표는 10만 시간에서 50만 시간으로 올렸다. 같은 날 인베스터 포럼 관련 보도(증권사 리포트 인용)에서는 확보 데이터 17만 시간, 액추에이터 AXIUM의 2027년 외부 판매, 이족 휴머노이드의 2027년 1분기 공개가 언급됐다.
- 관련 근거: [헤럴드경제 (한국어), 2026-11-10](https://biz.heraldcorp.com/article/10931605) [2차 인용] / [천지일보 (한국어), 2026-11-09](https://www.newscj.com/news/articleView.html?idxno=3447229) [2차 인용] / [파이낸셜뉴스 (한국어), 2026-11-10](https://www.fnnews.com/news/202611100809176510) [2차 인용]
- 기존 대비 변화: 직전 호는 창원 액추에이터 파일럿 라인의 생산 준비까지 다뤘다. 이번에 실 공장 과업, 개발 절차, 현장 난제가 처음 구체적으로 공개됐고 액추에이터 외부 판매 시점이 제시됐다.
- 생산기술 시사점: 며칠짜리 시연과 1년간의 강건화 사이 격차가 크다. 휴머노이드 도입 검증 기간을 데모 기준으로 잡으면 안 되며, 부품 공급 위치 편차와 조명 같은 공정 변동 관리가 로봇 성능만큼 중요하다.
- 적용 수준: 파일럿. 분류는 신규 적용사례
- 확인 필요: 상판 중량(보도 간 4 kg과 약 10 kg으로 상이), 실증 공장 위치, 성공률·사이클타임, AXIUM 사양

**[레인보우로보틱스] RB-Y2 — 바퀴형 양팔 모바일 매니퓰레이터 샘플 생산 착수, 2027년 6월 양산(로보월드 2026 개막일)**

- 확인 내용: 2026-11-04 CTO가 샘플 생산 착수와 2027년 6월경 양산 계획을 밝혔다. 자체 AMR 베이스·양팔·리프트로 구성되며 팔당 가반하중 6 kg(RB-Y1 대비 2배)이고, 자연어 지시용 AI 미들웨어를 개발 중이다. 연말 초도 물량은 고객 현장 검증용으로 사전예약이 끝났고(보도에 따라 약 20대 또는 12대), 평균가는 2억 원대 초중반(RB-Y1의 약 1.5배)이다. 안전인증을 진행 중이며 일부 수출은 FCC 문제로 일정이 잠정 중단됐다.
- 관련 근거: [지디넷코리아 (한국어), 2026-11-04](https://zdnet.co.kr/view/?no=20261104172211) [2차 인용] / [녹색경제신문 (한국어), 2026-11-04](https://www.greened.kr/news/articleView.html?idxno=353828) [2차 인용] / [로봇신문 (한국어), 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49437) [업계 분석]
- 기존 대비 변화: 2026-04 SIMTOS 첫 공개 이후 처음으로 양산 시점, 초도 물량, 가격대가 제시됐다.
- 생산기술 시사점: 바퀴형 양팔이 국내 양산 1순위 폼팩터로 굳어지고 있다. 팔당 6 kg은 소형 부품 키팅·머신텐딩 수준이며, 안전인증·전파인증 같은 비기술 요인이 공급 일정을 좌우한다.
- 적용 수준: 파일럿(초도 실증 물량). 분류는 기존기술 고도화
- 확인 필요: 안전인증 규격, 리프트 스트로크, 배터리 운용 시간, 초도 판매 대수

**[뉴로메카] 휴머노이드 EIR — 산업 안전인증 획득 주장, 2027년 양산·초기 연 1,000대(로보월드 2026 개막일)**

- 확인 내용: 2026-11-04 회사는 EIR이 최근 산업안전 인증을 획득했고 제조 현장에서 실증 중이라고 밝혔다. 2027년 양산, 초기 연 1,000대, 자동차 현장 중심 공급 계획이며, 전시에서 VLA·제로샷 피킹을 시연했다. 관절 모듈(CORE)과 하모닉 감속기(ND20)를 내재화했다.
- 관련 근거: [비즈니스포스트 (한국어), 2026-11-04](https://www.businesspost.co.kr/BP?command=article_view&num=451146) [2차 인용] / [로봇신문 (한국어), 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49437) [업계 분석]
- 기존 대비 변화: 10-14 간담회에서는 출품 예고뿐이었고, 개막일에 인증 획득 주장과 양산 규모가 추가됐다.
- 생산기술 시사점: 휴머노이드 구매 요건으로 안전 인증 보유가 부상하고 있으나, 인증 규격·범위가 공개되지 않아 협동 운전 범위를 판단할 수 없다.
- 적용 수준: 전시 데모(실증 병행). 분류는 기존기술 고도화
- 확인 필요: 인증 규격·인증기관, 실증 공정·성공률

**[Embodied AI(스위스)] AIR — 텐던 구동 경량 팔로 펜스 없이 작업자 옆에 투입하는 바퀴형 양팔 로봇**

- 확인 내용: 2026-11-06 Humanoid Europe(뮌헨)에서 공개했다. 모터·감속기를 몸통에 두고 팔은 텐던으로 구동해 가볍고 접촉 시 밀려나는 구조이며, ISO/TS 15066:2016 기준으로 설계했고 CE 마킹은 2027년 계획이다. 첫 근무부터 원격조작으로 일하며 그 기록으로 학습해 통상 1개월 안에 자율로 전환하는 운용 방식이다. 기존 고정형 양팔 셀에서 검증한 AI 스택을 쓰며, 전자 제조사 케이블 핸들링 과제에서 목표 90% 대비 98%를 달성했다고 밝혔다. 가격·가반하중·납기는 공개하지 않았다.
- 관련 근거: [Business Wire 보도자료(Bastille Post 게재), 2026-11-06](https://www.bastillepost.com/global/article/6333075-embodied-ai-unveils-air-a-physically-safe-humanoid-robot-that-learns-on-the-job) [공식 발표] / [Humanoids Daily, 2026-11-06](https://www.humanoidsdaily.com/news/embodied-ai-air-wheeled-humanoid-factory-humanoid-europe) [업계 분석]
- 기존 대비 변화: 10-28 호의 Agility Digit 5가 AI 인지 기반 안전 기능의 제3자 인증으로 접근했다면, AIR는 구동 구조 자체의 본질 안전으로 접근한다.
- 생산기술 시사점: 하네스·케이블 같은 유연물과 자주 바뀌는 수작업 공정이 대상이다. 원격조작 인력·통신·보안이 새 운영비 항목이 되고, EU 기계규칙 적용(2027-01-20) 일정과 CE 마킹 시점이 맞물린다.
- 적용 수준: 전시 데모. 분류는 신규
- 확인 필요: 가반하중·배터리 시간·가격, 성공률 수치 범위(보도 95%, 보도자료 98%)

**[클로봇 컨소시엄] 휴머노이드 2대 협업 이송 국책과제 — KG모빌리티 평택공장 디캔팅 공정 실증 목표**

- 확인 내용: 2026-11-10 주관기관 선정을 발표했다. 기간은 2026-07 – 2031-03, 총 55.6억 원이다. 대상은 도어 패널(약 20 kg)과 2.2 m 헤드라이닝이며, 목표는 성공률 95% 이상, 2대 협업 가반하중 30 kg 이상, 동기화 응답 50 ms 이하, 협업 효율 85% 이상, 가상–실제 궤적 오차 5% 이하다. 4차년도 모의장 8개월, 5차년도 실 라인 4개월 실증을 계획한다.
- 관련 근거: [로봇신문 (한국어), 2026-11-10](https://www.irobotnews.com/news/articleView.html?idxno=49505) [2차 인용]
- 기존 대비 변화: 직전 호의 다중대차 견인 AMR 과제에 이어, 다수 로봇 관제를 휴머노이드 여러 대의 실시간 하중 분담으로 확장한 과제다.
- 생산기술 시사점: 휴머노이드 1대의 가반하중 한계를 다수 협업으로 넘는 접근이다. 대형·비정형 내장 부품 디캔팅을 설비 개조 없이 처리할 수 있는지가 관건이며, 2대 동기 제어의 안전 기능 설계가 실증 범위를 정한다.
- 적용 수준: 기술자료(과제 착수). 분류는 신규
- 확인 필요: 사용 기종, 사이클타임 목표, 적용 안전 규격

**[Boston Dynamics] Atlas On a Roll — 발목 액추에이터에 휠을 달아 구동계 한계를 검증한 연구용 Atlas**

- 확인 내용: 2026-11-09 공개했다. 기성 스쿠터 림을 어댑터 1개로 발목 액추에이터에 달고 소프트웨어에서는 휠을 무한 회전 발목으로 모델링했다. 기존 전신 강화학습 정책을 보상·명령 범위·자세 세 가지만 조정해 전이했고 모터 모델 튜닝으로 시뮬레이션–실기 격차를 줄였다. 상품이 아닌 연구 테스트베드이며 결과는 표준 Atlas에 반영 중이고, 다음 과제는 액추에이터 고장 시 대응이다.
- 관련 근거: [Boston Dynamics 블로그, 2026-11-09](https://bostondynamics.com/blog/atlas-on-a-roll/) [공식 발표] / [Humanoids Daily, 2026-11-09](https://www.humanoidsdaily.com/news/boston-dynamics-atlas-wheels-rl-actuator-test) [업계 분석]
- 기존 대비 변화: 10-14 호의 핸드 재설계에 이어 구동계 신뢰성 검증 방법을 공개했다. 정비 용이 설계로 휠 교체가 자전거 바퀴 교체 수준이었다고 밝혔다.
- 생산기술 시사점: 휴머노이드 액추에이터가 연속 토크·속도 부하 조건으로 검증되는 단계에 들어섰다. 액추에이터 공급사에 토크–속도·열 특성 데이터를 요구하는 일이 늘 것으로 본다[추정].
- 적용 수준: 기술자료. 분류는 기존기술 고도화
- 확인 필요: 시험 부하·연속 운전 시간·온도 데이터

**[참고] 휴머노이드 관련 기타 판단**:

- 현대차 Atlas 배터리 구성(삼성SDI 2170 셀 70개, 약 1.3 kWh, 같은 셀의 Spot 2 월 100대 선양산)은 디일렉 단독 보도이며, 로봇신문은 공식 사양(최대 4시간, 자율 교체 약 3분) 외 셀 구성은 공식 확인되지 않았다고 명시했다. [디일렉 (한국어), 2026-11-06](https://www.thelec.kr/news/articleView.html?idxno=65065) / [로봇신문 (한국어), 2026-11-08](https://www.irobotnews.com/news/articleView.html?idxno=49454)
- 티로보틱스는 전원 차단 없이 5분 안에 스스로 배터리를 교체하는 시스템·AI BMS 국책과제(총 77.4억 원, 2030-03까지)에 공동기관으로 참여한다고 밝혔다. 같은 로보월드에서 에이로봇도 자율 배터리팩 교체를 지원하는 ALICE M2를 공개해, 배터리 무정지 운용이 국내 공통 과제로 부상했다. [로봇신문 (한국어), 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49438)
- 小米 인간형 로봇의 자동차 공장 서열 공정 8시간 5분 작업은 원 공개가 11-03으로 기간 밖이며, 기간 내에는 충전 2회와 떨어뜨린 부품을 바퀴형 로봇이 회수한 세부만 추가됐다. [Humanoids Daily, 2026-11-03](https://www.humanoidsdaily.com/news/xiaomi-humanoids-eight-hour-auto-factory-sorting)
- 현대차그룹 모베드 얼라이언스 로보월드 전시(11-04)는 2026-03 출범분이고 전시품 다수가 순찰·배송용이다. 智元 G2 Max의 양팔 40 kg 운반·디팔레타이징 적용은 원발표가 10-29다. Agility Robotics 나스닥 상장(11-05)과 Figure 03 본사 영상(11-06 – 11-07)은 제조 적용 정보가 없고, 유엔디로보틱스 양산형 모듈러 휴머노이드의 로보월드 출시를 확인하는 기간 내 보도는 없었다.

### AMR·라인사이드 물류

**[Knewbots(ThunderSoft 자회사) · 베이징 휴머노이드로봇 혁신센터] '하나의 두뇌·다종 로봇' 산업 플랫폼 — 휴머노이드·무인지게차·AMR을 단일 스케줄러로 연계(CeMAT Asia 2026)**

- 확인 내용: CeMAT Asia 2026(11-03 – 11-06, 상하이)에서 범용 체화지능 플랫폼과 산업용 운영 플랫폼을 결합한 구성을 공개했다. 현장에서는 휴머노이드가 밸브 코어 조립·부품 상하역을, 무인지게차가 팔레트 고단 적재를, AMR이 창고–작업장 간 용기 이동을 맡아 하나의 스케줄러로 연계했다.
- 관련 근거: [로봇신문 (한국어), 2026-11-10](https://www.irobotnews.com/news/articleView.html?idxno=49514) [2차 인용]
- 기존 대비 변화: 2026-01 협력 이후 행사 시연 위주였고, 이번에 창고와 라인을 잇는 산업 플랫폼으로 공개했다.
- 생산기술 시사점: 자동창고에서 라인사이드·조립까지 이종 로봇을 한 스케줄러로 묶는 흐름이다. ISO 21423·VDA 5050과의 호환이 확인되지 않아 폐쇄형 관제와 표준 기반 관제 중 무엇을 택할지가 선택 이슈다.
- 적용 수준: 전시 데모. 분류는 신규
- 확인 필요: 원 발표 일자, 표준 인터페이스 지원, 실 적용처

**[참고] CeMAT 기타 발표**: 树根科技 물류로봇사업부는 무인지게차 5단·8 m 밀집 보관(보관 용량 25% 증가 사례)과 차량 탑재 센서만으로 사전 모델링·고정 경로망 없이 처리한다는 트럭 상하차 솔루션을 발표했으나(11-09 보도), 모델명·사이클타임이 없어 주장 수준이다. ISO 21423·VDA 5050의 기간 내 신규 업체 지원 발표는 찾지 못했다. [科技日报 (중국어), 2026-11-09](https://www.stdaily.com/web/gdxw/2026-11/09/content_610870.html)

### EOAT·그리퍼·툴체인저

이번 주 신규 기술 변화 없음. SCHUNK의 최신 발표는 2026-10 SPS 출품 예고(SLD 리니어 축)이고, 검색으로 확인된 Robotiq 2FC(10-22)·OnRobot 2FGP20(10-12)은 조사 기간 밖이다.

**신규 없음으로 확인**: SCHUNK, OTTO by Rockwell(최신 04-09), Agility Robotics(상장 관련뿐), Apptronik(공식 보도자료 최신 06-30, 기간 내 성과는 DeepMind 발표로 공개), Locus(언론 보도만)는 공식 페이지 기준 기간 내 신규 기술 발표가 없었다. MiR, OMRON, AutoStore, ForwardX, Seegrid, Agilox, Zebra, Hikrobot(추가 진전), Quicktron, Standard Robots, Youibot, Tesla Optimus, Sanctuary AI, Unitree, Fourier, UBTECH, 1X, 현대모비스(의왕 시제품 착수 공식 확인)와 EOAT 벤더(Zimmer, Piab, SMC, ATI, DESTACO, Festo, Gimatic)는 검색 한도 소진으로 확인하지 못했다.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 사출 공정 보정 입력이 외관 판정 결과로 확장(Krevera 폐루프), RHCM 없는 Class-A 고광택 무도장(Ford Everest 베젤), 분쇄재 고비율 리펠렛·건조 생략 투입(소딕 데모) | 금형 가열·건조·리펠렛 같은 부대 공정을 소재·장비 기능으로 대체하고, 품질 판정 결과가 공정 보정에 직접 쓰이는 흐름. 자동 보정은 승인 공정 창과 변경 이력 관리가 전제 |
| 기술 변화 | 소량 시연 적응형 로봇 기반모델(GR00T 2), 가변 자동화 벤치마크(VABAR), 컨트롤러 내장 사이버보안(Kawasaki S-type), 시뮬레이션 기반 연마 조건 산출(두산로보틱스) | 로봇 AI 평가가 부품 변동 범위·성공 기준 단위로 정의되기 시작했고, 보안·기능안전이 컨트롤러 기본 사양으로 들어옴 |
| 업체 변화 | 완성차·Tier1 가동 라인의 휴머노이드 실증 수치 공개(Mercedes-Benz 키팅 96%, Aptiv 수백 대 단계 투입, LG CLOiD 1년 실증), 국내 바퀴형 양팔·휴머노이드 양산 일정 제시(RB-Y2 2027-06, 뉴로메카 EIR 2027) | 키팅·커넥터 체결·이송 과업과 바퀴형 양팔 폼팩터로 수렴. 시연에서 강건화까지의 기간(수 주 – 1년)이 도입 일정의 변수 |
| 적용사례 변화 | 양산: Tacoma 적재함, Ford Everest 베젤, Krevera 계열 공장 / 파일럿: Mercedes-Benz 키팅, Aptiv, LG CLOiD / 전시 데모: 소딕, 나우로보틱스 ECON, 휴먼텍, Embodied AI AIR / 과제 착수: 클로봇 | 사출은 양산 사례, 로봇은 파일럿·데모 중심. 로봇 쪽 수치는 대부분 회사 발표 또는 2차 인용 |
| 표준·규제 변화 | 중국 로봇 식별코드 의견수렴(출하 전 대당 1코드, 12-05 마감), Kawasaki S-type의 EU 기계규칙·ISO 10218-1:2025·IEC 62443-4-1 명시 | 설비 구매 사양에 보안 기능·로그·식별자 항목 추가 검토 |
| 확인 필요 | Krevera 검출률·조정 파라미터, Mercedes-Benz 96% 산정 기준·사이클, Aptiv 실 가동 대수, Atlas 배터리 공식 확인, LG CLOiD 부품 중량, 소딕 데모 수지 범위, 검색 한도로 미확인한 주요 업체(KraussMaffei·JSW·KUKA·ABB·Yaskawa 등) | 다음 조사에서 공식 자료 확보 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | IPF Japan 2026(12-01 – 12-05) 사전 공개 | 사출기·취출로봇 | JSW·닛세이·FANUC·스미토모(AI-Drive Optima+ 상세)·도요기계금속 출품 내용, 하모 세미나(12-02)의 신형 취출로봇 사양 |
| 2 | SPS 2026(11-24 – 11-26, 뉘른베르크) 사전 발표 | 로봇 SW·구동·EOAT | Beckhoff 피지컬 AI 출품, SCHUNK SLD 리니어 축, Yaskawa MotoPick4·MOTOMAN NEXT 구성, 로봇 컨트롤러 보안 기능 |
| 3 | Formnext 2026(11-17 개막, 프랑크푸르트) | 금형(적층) | 적층 금형 인서트·컨포멀 쿨링의 내구·사이클 데이터 |
| 4 | SPE 자동차 혁신상 공식 전체 수상 목록 게시 | 사출·소재 | 기타 부문 사출 관련 수상작의 공정 정보 |
| 5 | Plastimagen 2026(11-10 – 11-13)·Molding 2026 컨퍼런스(11-18 – 11-19) | 사출 셀·데이터 | ENGEL·ARBURG·Piovan 현장 발표, 사출 AI 공정제어 사례 |
| 6 | Mercedes-Benz 키팅 PoC 후속, Aptiv 它石 A계열 연말 100대급 배치 진척 | 휴머노이드 | 사이클타임·개입 빈도·가동률 등 양산 전환 판단 데이터 |
| 7 | GR00T 2 코드 공개(12월 예정)·VABAR 상위 테스트셋 | 로봇 SW | 라이선스, 산업용 암 대응 범위 |
| 8 | 중국 로봇 식별코드 의견수렴 마감(12-05)·GB/T 48541-2026 상태 | 표준 | 확정안의 수입품·기존 설비 적용 범위 |
| 9 | 현대모비스 Atlas 액추에이터 시제품·Atlas 배터리 사양 공식 확인 | 휴머노이드 공급망 | 사양·물량의 공식 근거 확보 |

## 출처

### 사출성형기술

- [Plastics Machinery & Manufacturing, Krevera's AI Vision System Enables Autonomous Injection Molding Quality Control, 2026-11-09](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55413461/kreveras-ai-vision-system-enables-autonomous-injection-molding-quality-control)
- [Plastics Machinery & Manufacturing, Nickolas Asset Management·Kreate 신공장 가동 보도, 2026-11-09](https://plasticsmachinerymanufacturing.com/injection-molding/article/55413507/nickolas-asset-management-kreate-opening-advanced-plant-employing-krevera-ai-vision-technology)
- [Plastics Machinery & Manufacturing, WITTMANN Connects Injection Molding Automation, Auxiliaries and AI for Smarter Production, 2026-08-17](https://www.plasticsmachinerymanufacturing.com/injection-molding/article/55397998/wittmann-connects-injection-molding-automation-auxiliaries-and-ai-for-smarter-production)
- [BASF, BASF, Toyota and Vuteq receive the 2026 SPE Automotive Innovation Grand Award for the 2026 Toyota Tacoma truck bed, 2026-11-04](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-43)
- [Plastics Technology, ENGEL Delivers World's Largest Injection Molding Machine, 2026-04-24](https://www.ptonline.com/news/engel-delivers-worlds-largest-injection-molding-machine)
- [SPE Automotive Division, Innovation Awards 페이지, 2026-11-11 확인](https://speautomotive.com/spe-automotive-div-innovation-awards/)
- [PR TIMES 소딕 (일본어), IPF Japan 2026 출품 보도자료, 2026-11-09](https://prtimes.jp/main/html/rd/p/000000092.000142070.html)
- [소딕 (일본어), IPF Japan 2026 특설 페이지, 2026-11-11 확인](https://www.sodick.co.jp/feature/ipf2026/)
- [소딕 (일본어), AI-VENT IPF Japan 2026 페이지, 2026-11-11 확인](https://info-bp.sodick.co.jp/products/injection/special-purpose/ai-vent/ipfjapan2026)
- [VOIX biz (일본어), 소딕 LP10EH5 발표 보도, 2026-09-28](https://voix.jp/biz/?p=179198)
- [BASF, BASF, Ford and Supavut Thailand win the SPE Automotive Innovation Award for the interior door handle bezels on the 2026 Ford Everest, 2026-11-05](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-41)
- [FinancialContent(Business Wire), Celanese Materials Innovation Powers Two SPE Automotive Innovation Award Winners, 2026-11-05](https://www.financialcontent.com/article/bizwire-2026-11-5-celanese-materials-innovation-powers-two-spe-automotive-innovation-award-winners)
- [BASF, BASF·Stellantis·L&L Products 터널 보강재 SPE 섀시 부문 수상 보도자료, 2026-11-05](https://www.basf.com/us/en/media/news-releases/2026/11/P-US-26-42)
- [연합뉴스 한민족센터 (한국어), 코오롱스페이스웍스 PV5 후드 SPE 최종 후보 보도, 2026-11-05](https://www.koreancenter.or.kr/news/articleView.html?idxno=1435271)
- [MONOist (일본어), 소딕 사출성형기 생산능력 증강 보도, 2026-11-10](https://monoist.itmedia.co.jp/mn/articles/2611/10/news038.html)
- [산업일보 (한국어), 2026 Moldex3D User Conference 보도, 2026-11-04](https://kidd.co.kr/news/248001)
- [Manufacturing Chemist, Gerresheimer Significantly Accelerates Mould Development in Medical Technology, 2026-07-17](https://manufacturingchemist.com/gerresheimer-significantly-accelerates-mould-development-in-medical-technology)
- [HIPUS (일본어), SACT 서비스 페이지, 2026-11-11 확인](https://www.hipus.com/sact/)
- [로봇신문 (한국어), 나우로보틱스 로보월드 2026 취출로봇 3개 라인 전시, 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49436)
- [아시아경제 (한국어), 나우로보틱스 경제형 취출로봇 ECON 보도, 2026-11-06](https://view.asiae.co.kr/article/2026110607361780815)
- [머니투데이 더벨(서플 전재) (한국어), 나우로보틱스 ECON 보도, 2026-11-06](https://supple.kr/news/cmw464nqrroopal9p8y2unri0)
- [Plastics Technology, WITTMANN's TEMI Next MES Supports AI, Shifts to Subscription Model, 2026-11-09](https://www.ptonline.com/products/wittmanns-temi-next-mes-supports-ai-shifts-to-subscription-model)
- [빅데이터뉴스 (한국어), 아이엘 로보월드 2026 현장 보도, 2026-11-07](https://www.thebigdata.co.kr/view.php?ud=2026110717314550539aeda69934_23)
- [Harmo, TRX-3600/4000Si 제품 페이지, 2026-11-11 확인](https://eng.injection-molding.jp/products/robot/trx-3600-4000si)

### 로봇제조기술

- [Google DeepMind, Gemini Robotics 2.5 Accelerates Real-World Physical Intelligence, 2026-11-10](https://deepmind.google/blog/gemini-robotics-2-5-accelerates-real-world-physical-intelligence/)
- [The Decoder, Gemini Robotics 2.5 Mercedes-Benz 조립 파일럿 96% 보도, 2026-11-10](https://the-decoder.com/google-deepminds-gemini-robotics-2-5-scores-96-percent-sorting-metal-parts-in-a-mercedes-benz-assembly-pilot/)
- [NVIDIA GEAR, GR00T 2: Scaling Robot Foundation Models for Generalization, Dexterity, and Adaptation, 2026-11](https://research.nvidia.com/labs/gear/gr00t-2/)
- [NVIDIA Blog, Practice Makes Precise: At CoRL, NVIDIA and Partners Reveal How Robots Rehearse Delicate Work in Simulation, 2026-11-09](https://blogs.nvidia.com/blog/robotics-simulation-advancements-corl/)
- [VABAR 프로젝트 페이지, 2026-11-09](https://berkeleyautomation.github.io/vabar-website/)
- [新华财经/东方财富网 (중국어), 安波福携手它石智航·上海电气 拓展具身智能业务布局, 2026-11-06](https://finance.eastmoney.com/a/202611063924958162.html)
- [上海证券报/同花顺 (중국어), Aptiv 체화 로봇 배치 보도, 2026-11-08](http://stock.10jqka.com.cn/20261108/c681582075.shtml)
- [OFweek (중국어), Aptiv 체화지능 협력 분석, 2026-11-10](https://mp.ofweek.com/im/a056714048647)
- [가와사키중공업 (일본어), F 시리즈 컨트롤러 S-type 발매 보도자료, 2026-11-05](https://digitalpr.jp/pdf.php?r=147589)
- [Automation International, Kawasaki Enhances Cybersecurity for Industrial Robots, 2026-11-10](https://www.automation-mag.com/news/117151-kawasaki-enhances-cybersecurity-for-industrial-robots)
- [팍스경제TV (한국어), 두산로보틱스 Newton 기반 샌딩 시뮬레이션 발표 보도, 2026-11-09](http://www.paxetv.com/news/articleView.html?idxno=286422)
- [산업일보 (한국어), 휴먼텍 AI 비전과 로봇 결합해 샌딩·도장 자동화 추진, 2026-11-05](https://kidd.co.kr/news/248041)
- [헬로티 (한국어), 아이벡스–후성정공 스마트공장 공급기업 협약 보도, 2026-11-05](https://www.hellot.net/news/article.html?no=116045)
- [北京青年报/新浪财经 (중국어), 로봇 제품 식별코드 관리 잠정판법 의견수렴 보도, 2026-11-07](https://finance.sina.cn/2026-11-07/detail-inixwxpw8058393.d.html)
- [证券之星 (중국어), 로봇 식별코드 의견수렴 보도, 2026-11-07](https://wap.stockstar.com/detail/KX2026110700009937)
- [NEPCON Asia (중국어), 상하이전기 블레이드 유연 라인 소개, 2025-09](https://www.nepconasia.com/zh-cn/news-center/news/2025/9/43.html)
- [뉴스핌 (한국어), 케이쓰리아이 국책과제 참여 보도, 2026-11-09](https://www.newspim.com/news/view/20261109000365)
- [뉴스핌 (한국어), 푸른로보틱스 심포니-40S 공개 보도, 2026-11-05](https://www.newspim.com/news/view/20261104001052)
- [헤럴드경제 (한국어), LG전자 CLOiD 세탁기 공장 실증 보도, 2026-11-10](https://biz.heraldcorp.com/article/10931605)
- [천지일보 (한국어), 10kg 세탁기 부품 거는 데 1년… LG 휴머노이드의 공장 실험, 2026-11-09](https://www.newscj.com/news/articleView.html?idxno=3447229)
- [파이낸셜뉴스 (한국어), LG전자 내년 로봇 사업 본격화, 2026-11-10](https://www.fnnews.com/news/202611100809176510)
- [지디넷코리아 (한국어), 레인보우로보틱스 휴머노이드에 AI 결합 보도, 2026-11-04](https://zdnet.co.kr/view/?no=20261104172211)
- [녹색경제신문 (한국어), 레인보우로보틱스 RB-Y2 보도, 2026-11-04](https://www.greened.kr/news/articleView.html?idxno=353828)
- [로봇신문 (한국어), 로보월드 2026 휴머노이드 출품 종합, 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49437)
- [비즈니스포스트 (한국어), 뉴로메카 휴머노이드 EIR 보도, 2026-11-04](https://www.businesspost.co.kr/BP?command=article_view&num=451146)
- [Bastille Post(Business Wire), Embodied AI Unveils AIR, a Physically Safe Humanoid Robot That Learns on the Job, 2026-11-06](https://www.bastillepost.com/global/article/6333075-embodied-ai-unveils-air-a-physically-safe-humanoid-robot-that-learns-on-the-job)
- [Humanoids Daily, Embodied AI AIR 공개 보도, 2026-11-06](https://www.humanoidsdaily.com/news/embodied-ai-air-wheeled-humanoid-factory-humanoid-europe)
- [로봇신문 (한국어), 클로봇 다중 휴머노이드 협업 기술 개발 국책과제 보도, 2026-11-10](https://www.irobotnews.com/news/articleView.html?idxno=49505)
- [Boston Dynamics, Atlas On a Roll, 2026-11-09](https://bostondynamics.com/blog/atlas-on-a-roll/)
- [Humanoids Daily, Boston Dynamics Atlas 휠 구동 시험 보도, 2026-11-09](https://www.humanoidsdaily.com/news/boston-dynamics-atlas-wheels-rl-actuator-test)
- [디일렉 (한국어), 현대 아틀라스에 삼성SDI 배터리 70개 탑재, 2026-11-06](https://www.thelec.kr/news/articleView.html?idxno=65065)
- [로봇신문 (한국어), 보스턴다이내믹스 아틀라스 삼성SDI 배터리 70개 탑재 전망, 2026-11-08](https://www.irobotnews.com/news/articleView.html?idxno=49454)
- [로봇신문 (한국어), 티로보틱스 휴머노이드 핵심 핫스왑 기술 개발, 2026-11-06](https://www.irobotnews.com/news/articleView.html?idxno=49438)
- [Humanoids Daily, Xiaomi 인간형 로봇 자동차 공장 8시간 작업 보도, 2026-11-03](https://www.humanoidsdaily.com/news/xiaomi-humanoids-eight-hour-auto-factory-sorting)
- [로봇신문 (한국어), 중국 산업용 체화지능 플랫폼 CeMAT 공개 보도, 2026-11-10](https://www.irobotnews.com/news/articleView.html?idxno=49514)
- [科技日报 (중국어), 树根科技 물류로봇 CeMAT 신제품 보도, 2026-11-09](https://www.stdaily.com/web/gdxw/2026-11/09/content_610870.html)
