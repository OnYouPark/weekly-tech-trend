---
title: 생산기술 신규기술 브리핑 - 2026년 8월 2주차
date: 2026-08-10
type: production
period: 2026년 8월 2주차
tags: [Sumitomo Demag, Oerlikon HRS Flow, WITTMANN, Variotherm, FCC Covered List, Path Robotics, Kistler, AMR]
summary: 사출은 Fakuma 2026 사전 발표가 시작되며 투명·후육 부품의 광학품질을 온도제어 계통으로 푸는 접근이 사출기·핫러너 양쪽에서 동시 제시. 로봇은 대형 메이커 신규 발표가 없는 대신 미국 FCC의 외국산 이동로봇 규제와 물리 AI 용접의 생산 계약 전환이 확인됨
---

# 생산기술 신규기술 브리핑 - 2026년 8월 2주차

> 2026-08-04 – 2026-08-10 사출성형·로봇제조 신규 기술 변화

## 금주 핵심 요약

### 사출성형기술

이번 주 사출 축 신규 공개는 전량 Fakuma 2026(2026-10-12 – 16, 프리드리히스하펜) 사전 발표다. 기술 방향은 두 갈래로 모인다. 첫째, 투명·후육 부품의 잔류응력과 광학품질을 금형 설계가 아니라 온도제어 계통(Variotherm, 노즐 열제어, 게이트 씰)으로 해결하려는 접근이 사출기 측과 핫러너 측에서 같은 주에 각각 제시됐다. 둘째, 재생 소재 적용 범위가 후육 투명·의료 정밀 영역까지 확대되며 그에 맞춰 게이트·노즐 하드웨어가 갱신되고 있다. 기간 내 사출기 본체 신모델 발표는 없었다.

### 로봇제조기술

우선 조사 대상 로봇 메이커(FANUC, ABB, KUKA, Yaskawa, Denso, Universal Robots, 두산로보틱스 등)와 로봇 SW 업체의 기간 내 신규 발표는 0건이다. 대신 조달 전제를 바꾸는 규제 변화 1건과, 물리 AI 로봇이 파일럿에서 생산 계약으로 넘어간 사례 1건이 이번 주의 무게 중심이다.

**[미국 FCC] 외국산 첨단 로봇기기 Covered List 등재 — 이동형 로봇의 미국 신규 기기인증 경로 차단**

- 확인 내용: FCC 공공안전·국토안보국이 2026-07-28 외국산 첨단 로봇기기(foreign-produced advanced robotic devices)를 Covered List에 등재. 대상은 지상 이동형 기기 중 원격 작동, 도크 포함 4.4 lb(약 2 kg) 초과, 센서 탑재, 200 kbps 이상 통신, 제어 소프트웨어 보유 조건을 모두 충족하는 것. 휴머노이드, 4족보행, AMR, 휠·궤도형 지상 플랫폼이 명시 포함되고 고정형 산업용 로봇은 제외. 외국산 판정은 Buy American Act의 국산 부품 원가 비중 기준(2028년 인도분까지 65%, 2029년부터 75%)을 차용. 구제 절차인 Conditional Approval은 국방부 단독 심사이며 신규 신청 마감은 2028-01-01. 기존 인증 제품의 판매·사용은 제한되지 않으나, Covered List 장비는 permissive change 절차에서 배제되어 소프트웨어·펌웨어 갱신에 별도 웨이버가 필요하다(2029-01-01 한시).
- 관련 근거: [IEEE Spectrum, 2026-08-04](https://spectrum.ieee.org/fcc-covered-list-mobile-robots) [공식 발표 + 업계 분석], [Sidley Austin, 2026-08-07](https://www.sidley.com/en/insights/newsupdates/2026/08/fcc-adds-all-foreign-produced-advanced-robotic-devices-to-the-covered-list) [업계 분석]
- 기존 대비 변화: 2025-12 무인기, 2026-03 라우터에 이은 3번째 생산지 기준 일괄 등재. 이전과 달리 부품을 별도 목록화하지 않고 원가 비중으로만 판정하며, 상무부 커넥티드 차량 규칙과 달리 모델연도 단계 적용 없이 즉시 발효.
- 생산기술 시사점: 미국 소재 사업장의 라인사이드 AMR·자율지게차 신규 도입 시 벤더의 FCC ID 취득 시점과 국산 부품 원가 비중이 사양 검토 항목으로 추가된다. 기 인증 모델은 계속 조달 가능하나 후속 모델 단종 위험이 있어 다년 증설 계획에서는 기종 연속성 확인이 필요하다. 고정형 산업용 로봇·컨베이어는 대상 밖이므로, 물류 자동화 방식을 이동형과 고정형 중 무엇으로 가져갈지에 규제 변수가 새로 붙었다.
- 확인 필요: 국방부 Conditional Approval 승인 사례와 심사 기간 미공개. 아시아·유럽 AMR 공급사 중 실제 신청 기업 명단 미확인.

**[HII / Path Robotics / GrayMatter Robotics] 물리 AI 용접·연삭 자동화 — 7년 최대 9억 달러 성과연동형 생산 계약 체결**

- 확인 내용: 2026-08-06 HII가 Path Robotics(로봇 용접), GrayMatter Robotics(로봇 연삭)와 7년간 최대 9억 달러 규모의 성과연동형 생산 계약을 체결. 2026-04 개시한 HYPR 프로그램의 확장이다. 계약은 2단계로, 개발 단계에서 자율 용접·연삭·블라스팅·도장·조립·검사를 검증·인증해 자율 생산라인에 통합하고, 인도 단계에서 원가·납기·품질 실적 충족 시 실제 물량이 발주된다. 자금 집행은 기술성숙도·제조성숙도 마일스톤 달성 조건부. Path Robotics의 Rove는 자사 Obsidian 물리 AI 모델을 4족 보행 로봇에 결합해 고정 셀 밖의 대형 구조물에 직접 접근하는 용접 구성이다.
- 관련 근거: [The Robot Report, 2026-08-06](https://www.therobotreport.com/hii-signs-up-to-900m-agreement-with-path-robotics-graymatter-robotics/) [공식 발표], [ASSEMBLY, 2026-08-06](https://www.assemblymag.com/articles/100299-hii-commits-up-to-900-million-to-expand-physical-ai-in-shipbuilding) [공식 발표]
- 기존 대비 변화: 2026-04 HYPR은 협력 프레임워크 수준이었으나 이번에 구속력 있는 장기 생산 계약으로 전환됐다. 물리 AI 용접이 파일럿에서 마일스톤 연동 양산 발주 구조로 넘어간 첫 대형 사례다.
- 적용 수준: 개발·검증 단계(계약 체결). 양산 인도는 마일스톤 충족 후.
- 생산기술 시사점: 두 가지가 주목된다. 고정 셀을 벗어난 이동형 용접 로봇이 대형·비정형 구조물 용접의 대안으로 실증 단계에 진입했다는 점, 그리고 로봇 자동화 조달이 장비 납품형에서 공정 성능 마일스톤 연동형으로 이동하고 있다는 점이다. 다품종·저물량 용접 및 연삭에서 전용 지그 투자 없이 대응하는 접근으로 참고 가치가 있다.
- 확인 필요: Obsidian 모델의 용접 품질 지표(비드 형상, 결함률), 사이클타임, 조선 외 산업 이식 가능성.

## 사출성형기술 상세

**[Sumitomo (SHI) Demag] IntElect S / IntElect 75 — PC 투명부품 저응력 성형에 Variotherm 금형온도 제어 적용, 전동식의 고캐비티 패키징 확장**

- 확인 내용: 2026-08-04자 보도자료. technotrans와 공동 부스(Hall B1, Booth 1103). IntElect S 280에서 HTW 48캐비티 금형으로 음료용 클로저를 생산하며, 전동식 IntElect S 계열의 첫 고출력 패키징 적용 사례로 명시했다. 냉각은 technotrans 공랭식 칠러 weco 85(자연냉매 R290) + 고압 펌프, Enesty Orca Plus 워터 매니지먼트, Eisbär 클로저 냉각·금형부 제습으로 구성. IntElect 75에서는 PC 투명 카드박스를 생산하며 technotrans·Contura·CycleTemp의 Variotherm 가변 금형온도 제어로 내부 응력을 낮춰 복굴절·헤이즈·광학 왜곡을 억제한다. 취출은 자사 SAM-C 로봇. 전 구성요소를 사출기에서 OPC UA로 중앙 제어한다.
- 관련 근거: [Polymerupdate 보도자료(신디케이트 원문), 2026-08-04](https://www.polymerupdate.com/PressRelease/Details/41447) [공식 발표]
- 기존 대비 변화: IntElect S를 정밀·의료 중심에서 고캐비티 패키징으로 확장한 점, 광학품질 확보 수단을 금형 설계가 아닌 Variotherm 온도제어와 냉각 최적화의 조합으로 제시하고 이를 OPC UA 단일 제어축에 묶은 점이 달라졌다.
- 적용 수준: 전시 데모 예정(2026-10) + 기술자료
- 생산기술 시사점: 자동차 투명 부품에서 잔류응력에 의한 복굴절은 치수정밀도와 별개의 불량축이다. 금형온조기·칠러·유량 관리를 사출기 제어에 통합해 사이클 내 온도 프로파일을 관리하는 방식은 저응력 광학 성형의 설비 구성안으로 참고할 수 있다. 다만 냉각·제습·유량 관리를 벤더 4곳이 나눠 담당하는 구성이라 통합 검증 부담이 있다.
- 확인 필요: PC 부품의 복굴절·잔류응력 정량 개선폭, Variotherm 승온·강온 범위와 사이클타임 페널티, IntElect S 280의 사이클타임·에너지 소비 수치 미공개.

**[Oerlikon HRS Flow] Stargate HRS / Xp 노즐 시리즈 — 무니들 핫러너 소재 확대, 후육 투명부품용 밸브게이트 신규 시리즈 공개**

- 확인 내용: 2026-08-06 게재. Fakuma 2026(Hall A1, Stand A1-1211) 출품 내용. 다이어프램 방식 무니들 핫러너 노즐 Stargate HRS는 기존 PP·r-PP 중심에서 PMMA·ABS 처리까지 적용 범위를 넓혔다. 신규 Xp 밸브게이트 노즐 시리즈는 후육 투명부품 전용으로, 노즐 정밀 열제어와 신규 게이트 씰 구조로 샷 중량 70 g까지 대응하고 (r-)PET·PETG·PCTA·PCTG 재생 코폴리에스터에 적용된다. Eastman PET Cristal One Renew IM812 적용 시 살두께 12 mm까지 사출 가능하며 질량수지 기준 재생 함량 최대 100%. Techflow HRS는 노즐 엔드링을 외장형으로 바꿔 강화·난연 첨가 연마성 수지에 대한 내마모성을 높였다. Glow HRS는 자동차 외관부품의 게이트 주변 광륜(헤일로)을 억제해 후가공 공정을 줄이는 용도로 제시됐다.
- 관련 근거: [ETMM, 2026-08-06](https://www.etmm-online.com/oerlikon-hrs-flow-stargate-hrs-fakuma-2026-a-fb922c623268c0889139647ff2495403/) [2차 인용 – 업체 제공 자료 기반 산업지 게재]
- 기존 대비 변화: Stargate HRS는 출시 시 PP 패키징이 주 타깃이었으나 소재군이 넓어진 기존기술 고도화에 해당한다. Xp는 후육 투명 성형이라는 새 용도로 게이트 씰 구조를 바꾼 신규 시리즈다.
- 적용 수준: Stargate HRS·Glow HRS는 출시 제품의 적용범위 확대, Xp는 신규 시리즈 공개 + 전시 데모.
- 생산기술 시사점: 무니들 핫러너는 밸브핀 구동부·핀 마모·핀 자국이 없어 다캐비티 외관부품의 관리 항목이 줄어드는 방향이다. PMMA·ABS 확장은 자동차 내외장 광택부품·렌즈류로의 적용 가능성을 시사한다. 살두께 12 mm급 후육 투명 성형은 통상 싱크마크와 사이클타임 제약이 큰 영역으로, 이를 게이트 씰과 노즐 열제어로 접근한 사례로 검토할 만하다.
- 확인 필요: 사이클타임·중량 감소 정량치, PMMA·ABS 적용 시 허용 온도·전단 조건, Glow HRS의 헤일로 억제 정량 지표.

**[WITTMANN] Drymax basic 120 — 제습건조기에 심볼 기반 컬러 디스플레이 적용**

- 확인 내용: 3.5인치 TFT LCD 컬러 디스플레이를 신규 적용하고 모든 설정 항목을 심볼로 표시해 언어 장벽과 오조작 위험을 낮췄다. 건조 공기 발생량 120 m³/h, 수지 처리량 최대 75 kg/h, 건조제 카트리지 2기로 연속 공정공기를 공급한다. 온도 제어 재생의 지속시간·강도를 실수요에 맞춰 조정하고 성형기 정지 시 자동으로 온도를 낮춘다. 고온·다습 환경용 SmartCare 옵션은 소량 압축공기를 투입해 노점을 더 낮고 일정하게 유지한다.
- 관련 근거: [WITTMANN 공식 보도자료 PR-08-26, 2026년 8월](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-pr-08-26-fakuma_2026_drymax_basic_120_en.pdf) [공식 발표], [K-Zeitung(독일어), 2026-08-08](https://www.k-zeitung.de/index%2ephp/wittmann-trockenlufttrockner-drymax-basic-120-fakuma) [2차 인용]
- 기존 대비 변화: 기존 basic 라인은 단순 세그먼트 표시 기반 조작이었고, 변경 범위는 조작계·표시계에 한정된다. 건조 성능 수치 자체의 변경은 확인되지 않았다.
- 적용 수준: 전시 예고(양산 적용 사례 미확인)
- 생산기술 시사점: 수지 건조는 은조·기포·물성 저하의 상류 원인으로, 건조 파라미터 오설정이 곧 불량률로 연결된다. 심볼 기반 UI는 다국적·교대 인력이 운용하는 사출 라인의 설정 편차를 줄이는 방향이다. 정지 시 자동 온도 강하는 대기시간 비중이 큰 다품종 소롯트 라인의 건조 에너지 절감에 유효하다.
- 확인 필요: 디스플레이 적용의 basic 시리즈 전 모델 확대 여부, 국내 공급 시점.

**[MTF Technik] 세그먼트 분리 드럼 + Multi-Control — 게이트·양품 자동 분리를 3D 프린팅 교체 세그먼트 구조로 대체**

- 확인 내용: 신규 세그먼트 분리 드럼은 스테인리스 드럼 케이지에 3D 프린팅 세그먼트 플레이트를 조합하는 구조다. 플레이트 형상을 개별 구성할 수 있어 소형 부품·게이트는 구멍으로 낙하하고 대형 양품은 드럼 내에 남아 최종 단계에서 별도 배출된다. 함께 공개된 Multi-Control은 회전분배기, 리니어 버퍼, 시프트 버퍼, 캐러셀 데포 스테이션 등 이종 버퍼 시스템을 하나의 터치 디스플레이로 통합 제어하며, 용기 교체를 개수 기준 또는 시간 기준으로 선택할 수 있다.
- 관련 근거: [K-Zeitung(독일어), 2026-08-07](https://www.k-zeitung.de/separiertrommel-trennt-unkompliziert-teile-und-anguesse) [업계 분석 – 업체 발표 기반]
- 기존 대비 변화: 기존 분리기 프로그램의 확장 모델로, 드럼 세그먼트를 3D 프린팅 교체 부품으로 만든 점이 핵심 변경이다. 품번 변경 시 드럼 전체가 아니라 세그먼트 플레이트만 교체한다. 버퍼 제어는 시스템별 전용 제어에서 범용 통합 제어로 바뀌었다.
- 적용 수준: 전시 예고
- 생산기술 시사점: 게이트 컷팅 후 게이트와 제품을 분리하는 공정은 소형 다품번 사출에서 인력 의존도가 높은 구간이다. 세그먼트 교체식 구조는 품번별 전용 자동화 설비 투자 없이 형상 대응이 가능해 다품번 라인의 자동화 손익분기를 낮추는 방향이다. 버퍼 제어의 계수·시간 기반 용기 교체는 성형기 무인 운전 시간 산정을 표준화하는 데 쓰인다.
- 확인 필요: 세그먼트 플레이트 재질·내마모 수명, 오분류율 정량치, MTF 공식 보도자료 원문 미확인.

**[Meusburger] Fakuma 2026 출품 구성 — 클린룸용 표준부품을 플레이트부터 핫러너까지 풀라인으로 통합 제시**

- 확인 내용: 2026-08-06 게재. 클린룸 적용 제품군을 별도 캠페인으로 전개하며, 플레이트·부품에서 핫러너 시스템까지 파티클 발생원을 최소화하도록 조합된 표준부품·소재를 풀라인으로 공급한다. 설계 측면에서는 Meusburger CAD 툴이 전체 표준부품 라이브러리 접근과 설치공간 자동 반영 형상 구성을 지원하며 복수 CAD 시스템과 호환된다. 양산 사례로 Jell과 공동으로 ENGEL 사출기에서 정밀 표준부품 + 용도별 핫러너 조합으로 백클립을 시제품부터 양산까지 개발한 건을 시연한다.
- 관련 근거: [ETMM, 2026-08-06](https://www.etmm-online.com/meusburger-fakuma-2026-standard-components-cad-cleanroom-a-00aca5c2abbdfa0aec85721cfaffd685/) [2차 인용]
- 기존 대비 변화: 클린룸 대응을 개별 품목이 아니라 플레이트–부품–핫러너까지 묶은 풀라인으로 제시한 점이 이전 표준부품 카탈로그 중심 발표와 다르다.
- 적용 수준: 전시 예고 + 기술자료(Jell 사례만 양산)
- 생산기술 시사점: 클린룸 사출은 통상 별도 사양 관리와 벤더 분산으로 리드타임이 길어지는 영역이다. 표준부품 단위에서 파티클 발생원 관리를 규정하면 금형 사양 검토 항목을 줄일 수 있다.
- 확인 필요: 대응 ISO 클린룸 등급, 파티클 저감 정량 데이터, 신규 표준부품 품번·사양.

참고로 WITTMANN은 Fakuma 2026에서 Primus 계열 주변장치(Drymax Primus, 신규 Tempro Primus 금형온조기, S-Max Primus 인라인 리사이클링, Feedmax Primus, Primus 로봇, EcoPrimus 전동 사출기)를 하나의 전시 구역으로 묶어 표준 사출셀 패키지로 제시한다. Primus 118 리니어 로봇 자체는 2025년 10월 K 2025 초출 제품으로 신규가 아니며, 이번 주 확인된 변화는 포트폴리오 통합 제시와 Tempro Primus의 신규 편입이다([K-Zeitung(독일어), 2026-08-05](https://www.k-zeitung.de/peripheriegeraete-mit-primus-guenstig-und-doch-effizient) [2차 인용]). Tempro Primus의 온도 범위·유량·제어 사양은 확인 필요.

## 로봇제조기술 상세

**[Kistler / TEAM Automation Berlin / SKF] NCFE 전동 압입 모듈 + maXYmos NC — 1,000종 이상 변종 대응 고혼류 조립 라인 양산 적용**

- 확인 내용: 2026-08-05 게재 사례. 독일 SI인 TEAM Automation Berlin이 SKF 윤활 분배기 조립 자동화 라인을 구축했다. 종방향 이송 시스템 기반 모듈형 라인으로 공급·조립·검사·포장을 전 공정 자동화하고 워크피스 캐리어 이동을 고정 택트로 동기화한다. 다수 변종이 수백 개 단위 소량 배치이며 밀봉 디스크는 변종별로 크기·두께·재질이 다르다. Kistler NCFE 전동식 접합 모듈을 채택해 압입 사이클타임은 약 5초(고속 진입 – 정밀 압입 – 급속 후퇴)이며, 모듈 내장 힘·변위 센서와 maXYmos NC 공정 모니터링으로 매 압입의 힘-변위 곡선을 기록하고 정의된 측정 윈도우로 합부를 판정한다. 제어계가 변종별 압입 조건을 기계적 조정 없이 자동 전환한다.
- 관련 근거: [ASSEMBLY, 2026-08-05](https://www.assemblymag.com/articles/100292-servo-press-enables-high-mix-production) [2차 인용 – 필자가 Kistler 소속으로 공급사 관점 기고]
- 기존 대비 변화: 신제품 발표가 아니라 기존 서보 압입·공정 모니터링 기술의 초고혼류 신규 적용 사례다. 변종 전환 시 기계적 셋업 변경을 제거한 점이 핵심이다.
- 적용 수준: 양산(SKF 라인 가동)
- 생산기술 시사점: 자동차 부품의 다품종 소량 압입·체결 공정에서 변종 전환 시간이 라인 가동률을 좌우한다. 힘-변위 곡선을 전수 기록해 품질 추적성을 확보하면서 제어 파라미터만으로 변종을 전환하는 구성은 사양 파생이 많은 부품군의 조립 라인 설계 시 참고 대상이다. 5초 택트에서 압입 정밀도와 전수 계측을 동시에 만족한 점이 참고 지표다.
- 확인 필요: 실제 변종 수, 라인 가동률, 압입 합부 판정 정확도와 불량 유출률.

**[KUKA / Contoro Robotics] 이동형 트레일러 하역 시스템 — 3PL 물류센터 실운영, 교대당 처리 트레일러 2–3대에서 4–5대로 증가**

- 확인 내용: 3PL 사업자 States Logistics가 캘리포니아 물류센터에 KUKA 산업용 로봇과 Contoro의 AI 소프트웨어를 결합한 이동형 하역 시스템을 도입했다. 시스템 전체가 모바일 플랫폼에 탑재돼 트레일러 내부로 진입한 뒤 전면부로 이동하며 박스를 순차 하역하고, Contoro 소프트웨어가 비전으로 박스 위치를 특정해 하역 동작을 제어한다. 도입 전에는 작업자 2–4명이 교대당 트레일러 2–3대를 수작업 처리했으나 도입 후 4–5대를 처리한다. 도입 동기는 반복 상하차에 따른 요추 염좌 산재 청구 증가다.
- 관련 근거: [Automated Warehouse, 2026-08-04](https://www.automatedwarehouseonline.com/kuka-and-contoro-bring-automated-trailer-unloading-to-logistics-facilities/) [2차 인용]
- 기존 대비 변화: 고정 셀 기반 디팔레타이징이 아니라 로봇을 이동 플랫폼에 얹어 비공조 트레일러 내부라는 비정형 공간으로 진입시키는 구성이다.
- 적용 수준: 실운영(단일 사이트)
- 생산기술 시사점: 자동차 부품 제조에서 입고 도크의 컨테이너·트레일러 하역은 수작업이 가장 많이 남은 구간이다. 바닥 개조 없이 도크에 접근하는 이동형 하역 구성은 라인사이드 공급 이전 단계의 인력 의존도를 줄이는 대안이다. 다만 처리량 근거가 단일 사이트 교대 기준이라 혼적·중량물 비중이 높은 부품 입고에 그대로 적용하기는 어렵다.
- 확인 필요: 로봇 기종·페이로드·사이클타임 미공개. 양사 공식 보도자료 원문 미확인.

**[XYZ Robotics] RockyOne / RockyOne SE — 컨테이너 하역부터 팔레트 적재까지 일괄 자동화, BAUHAUS 중앙물류센터 가동**

- 확인 내용: 독일 크레펠트의 BAUHAUS 중앙물류센터에 입고 자동화가 가동됐다. 해당 센터는 1만 SKU 이상, 일 수천 건 입고를 처리하며 박스 형상·중량·적재 상태 편차가 크다. RockyOne이 컨테이너에 자율 진입해 크기·방향이 제각각인 낱개 박스를 하역하고 바코드 스캐닝으로 개별 식별해 실시간 분류하면, RockyOne SE가 고객 정의 패턴으로 팔레트를 적재한다. 최대 30 kg 박스를 취급하고 컨테이너 내 여러 면에서 동시 다중 픽이 가능하다. BAUHAUS 측은 가동 이후 수동 개입 없이 24시간 운영 중이며 사내 다른 거점 확대를 검토한다고 밝혔다.
- 관련 근거: [Automated Warehouse, 2026-08-05](https://www.automatedwarehouseonline.com/bauhaus-deploys-xyz-robotics-automation-at-its-central-warehouse/) [2차 인용]
- 기존 대비 변화: 하역 로봇 단품이 아니라 컨테이너 하역 – 식별·분류 – 팔레타이징을 한 흐름으로 묶은 구성이다. XYZ Robotics는 이 건을 계기로 유럽 현지 조직을 확충한다고 밝혀 서비스망 확대에도 해당한다.
- 적용 수준: 실운영
- 생산기술 시사점: 다품종·비정형 포장재가 섞이는 입고 구간에서 모바일 매니퓰레이터가 팔레타이저와 직결되면 입고 검수·재적재를 별도 인력 없이 통과시킬 수 있다. 30 kg 취급 한계는 일반 부품 박스 대부분을 포괄하나 중량 소재·주조품 입고에는 별도 검토가 필요하다.
- 확인 필요: 사이클타임(박스/시간), 인식 실패율, 투입 대수, 계약 형태 미공개.

**[GAM Enterprises / Schaeffler] PSC 정밀 감속기 — IP·기술 자산 인수로 로봇 감속기 공급 주체 변경**

- 확인 내용: 2026-08-05 발표. GAM Enterprises가 Schaeffler로부터 Schaeffler Ultra Precision Drives의 일부 자산을 인수했으며, PSC 제품 생산에 필요한 지식재산과 기술이 포함된다. 거래 조건은 비공개. 독일 하멜른 소재 신규 법인 GAM-Melior GmbH를 설립해 PSC 제품 지원·생산을 담당한다. SUPD는 2022년 Schaeffler가 인수한 Melior Motion GmbH가 전신이며, PSC는 GAM 주력 제품 GPL의 핵심 기어 기술로 기존부터 사용해 온 부품이다.
- 관련 근거: [The Robot Report, 2026-08-05](https://www.therobotreport.com/gam-enterprises-to-produce-schaefflers-psc-gear-reducers/) [공식 발표]
- 기존 대비 변화: 제품 성능 변화가 아니라 로봇용 정밀 감속기의 소유·생산 주체 변경이다. 기존 PSC 고객 지원은 승계된다.
- 적용 수준: 기업 자산 거래(공급망·서비스망 변화)
- 생산기술 시사점: 로봇 감속기는 조달 리드타임과 단가 변동이 설비 투자 일정에 직접 영향을 주는 품목이다. 대형 부품 그룹이 정밀 감속기 사업에서 물러나고 전문 모션 업체로 이관되는 흐름은 중장기 조달처 다변화 검토 시 참고 사항이다.
- 확인 필요: 기존 PSC 고객의 공급 조건·납기 승계 범위, 생산 이관 일정.

**[Tacta Systems] TactaBot — 촉각 센서 기반 다지 그리퍼와 스킬 학습 시스템의 사양 공개**

- 확인 내용: 공식 출시 발표는 2026-07-27이며, 조사 기간 내인 2026-08-07 보도로 사양이 구체화됐다. Tacta Hand, Skill Capture 시스템, Dexterous Intelligence AI 모델의 3부 구성이다. 인간 크기 5지 그리퍼로 손가락당 3자유도 총 15자유도, 손가락당 25 N 파지력, 3지·5지 구성을 제공한다. Fluidic Tendon 구동 방식으로 손가락을 얇게 만들고 손 부위 발열을 없앴으며 기구부 수명은 3,000만 사이클, 지문부 센서는 소모품 교체형이다. 촉각 센서는 250 Pa – 700,000 Pa 범위를 감지하고 온도 분해능 0.1 ℃, 센서 피치 1 mm다. Tacta Glove는 손가락 끝당 256개 촉각 센서와 후면 모션캡처를 갖춰 작업자가 현장 작업 중 힘·모션·영상·온도를 수집하고 이를 사전학습 모델에 파인튜닝한다. 첫 출하 목표는 2027년 초다.
- 관련 근거: [The Robot Report, 2026-08-07](https://www.therobotreport.com/tacta-systems-takes-aim-high-skilled-manufacturing-work-tactabot/) [업계 분석 – 사양은 업체 주장, 3자 검증 미확인]
- 기존 대비 변화: 기존 물리 AI 로봇이 비전 중심이었던 데 반해 촉각(수직력·전단력·접촉·변형·미끄러짐·온도·질감)을 학습 데이터의 1차 채널로 삼는 구성이다.
- 적용 수준: 제품 공개(출하 전). 양산 적용 사례 없음.
- 생산기술 시사점: 힘제어 조립 자동화의 병목은 결합력·삽입 저항의 실시간 판별이었다. 장갑형 데이터 수집으로 숙련 작업자의 촉각 판단을 라인 정지 없이 데이터화하는 접근은 커넥터 삽입, 클립 체결, 베어링 압입 등 촉각 의존 공정의 자동화 데이터 확보 방식으로 검토 가치가 있다. 다만 지문부 센서가 소모품이라는 점은 라인 유지보수 비용 구조에 직접 영향을 준다.
- 확인 필요: 실제 조립 태스크 성공률, 사이클타임, 센서 교체 주기·단가, 산업용 6축 로봇과의 인터페이스.

## 금주 변동 포인트

| 구분 | 내용 | 생산기술 관점 |
|------|------|-------------|
| 기술 변화 | 투명·후육 부품 광학품질을 Variotherm·노즐 열제어·게이트 씰 등 온도제어 계통으로 푸는 접근이 사출기(Sumitomo Demag)와 핫러너(Oerlikon HRS Flow) 양쪽에서 동시 제시 | 금형 설계 변경 없이 성형 조건·설비 구성으로 잔류응력을 관리하는 방향. 검증 부담은 온도제어 계통의 다벤더 통합에 집중됨 |
| 기술 변화 | 재생 소재(r-PET, PETG·PCTG, 화학적 재활용 PBT)의 적용 범위가 후육 투명·의료 정밀까지 확대되고 그에 맞춘 게이트·노즐 하드웨어가 갱신 | 재생 수지 적용 검토 시 소재 승인과 별개로 핫러너·게이트 사양 재검토가 필요해짐 |
| 업체 변화 | 로봇 4대 메이커(FANUC, ABB, KUKA, Yaskawa) 및 로봇 SW 업체의 기간 내 신규 발표 0건. 변화는 주변 생태계(SI 계약, 촉각 그리퍼, 감속기 공급망)에서 발생 | 로봇 본체보다 응용·부품·계약 구조에서 변화가 먼저 나타나는 국면 |
| 업체 변화 | Schaeffler가 정밀 감속기 사업 자산을 GAM에 이관 | 로봇 감속기 조달처 재편. 리드타임·단가 영향은 중장기 관찰 필요 |
| 적용사례 변화 | Kistler·SKF 고혼류 압입 라인(양산), KUKA·Contoro 트레일러 하역(실운영), XYZ Robotics BAUHAUS 입고 자동화(실운영) | 조립 계측과 입고 물류 양쪽에서 실운영 데이터가 나오기 시작. 다만 모두 단일 사이트 기준 |
| 규제 변화 | 미국 FCC가 외국산 첨단 로봇기기를 Covered List에 등재(2026-07-28), 이동형 로봇 신규 기기인증 경로 차단 | 미국 사업장 AMR·자율지게차 도입 시 FCC ID 취득 시점과 국산 부품 원가 비중이 사양 검토 항목으로 추가 |
| 확인 필요 | Fakuma 사전 발표 대부분이 정량 데이터 없이 구성만 공개. MTF·KUKA·XYZ 건은 업체 공식 원문 미확인 | 10월 Fakuma 개최 전후로 정량 사양 재확인 필요 |

## 다음 주 모니터링 항목

| 우선순위 | 모니터링 항목 | 카테고리 | 확인 목적 |
|---------|-------------|---------|----------|
| 1 | Fakuma 2026 사전 발표(ENGEL, ARBURG, KraussMaffei, Netstal, Haitian) | 사출기 | 사출기 본체 신모델 발표 여부. 이번 주까지 본체 신모델은 없었음 |
| 2 | 미국 FCC Covered List 후속 – 국방부 Conditional Approval 심사 기준·승인 사례 | 규제·물류로봇 | 미국 사업장 AMR 조달 가능 기종 범위 확정 |
| 3 | 현대모비스 6축 로봇 + 3D 비전 기반 와이어하니스 커넥터 삽입·체결 자동화 | 조립 자동화 | 2026-08-03 공개(조사 기간 직전). 연내 R&D 종료 후 파일럿 검증 예정으로 후속 확인 필요 |
| 4 | Oerlikon HRS Flow Xp 시리즈 정량 사양 | 핫러너 | 살두께 12 mm 후육 투명 성형의 냉각시간·사이클타임 |
| 5 | WITTMANN Tempro Primus 금형온조기 사양 | 주변장치 | 온도 범위·유량·제어 사양 미공개 |
| 6 | Path Robotics Obsidian 모델의 용접 품질 지표 | 물리 AI 로봇 | 이동형 용접 로봇의 실제 비드 품질·결함률 |
| 7 | EU Data Act 및 ISO 21423의 AMR Fleet 계약 적용 | 물류로봇 | RaaS 도입 시 데이터 반출·감사 조항 설계 근거 |

## 출처

### 사출성형기술

- [Polymerupdate, Sumitomo (SHI) Demag Fakuma 2026 보도자료, 2026-08-04](https://www.polymerupdate.com/PressRelease/Details/41447)
- [ETMM, Oerlikon HRS Flow Stargate HRS·Xp 시리즈 Fakuma 2026, 2026-08-06](https://www.etmm-online.com/oerlikon-hrs-flow-stargate-hrs-fakuma-2026-a-fb922c623268c0889139647ff2495403/)
- [ETMM, Meusburger 표준부품·CAD·클린룸 Fakuma 2026, 2026-08-06](https://www.etmm-online.com/meusburger-fakuma-2026-standard-components-cad-cleanroom-a-00aca5c2abbdfa0aec85721cfaffd685/)
- [WITTMANN 공식 보도자료 PR-08-26, Drymax basic 120, 2026년 8월](https://www.wittmann-group.com/sites/default/files/2026-08/wittmann-pr-08-26-fakuma_2026_drymax_basic_120_en.pdf)
- [K-Zeitung (독일어), WITTMANN Drymax basic 120, 2026-08-08](https://www.k-zeitung.de/index%2ephp/wittmann-trockenlufttrockner-drymax-basic-120-fakuma)
- [K-Zeitung (독일어), MTF Technik 세그먼트 분리 드럼, 2026-08-07](https://www.k-zeitung.de/separiertrommel-trennt-unkompliziert-teile-und-anguesse)
- [K-Zeitung (독일어), WITTMANN Primus 주변장치 라인, 2026-08-05](https://www.k-zeitung.de/peripheriegeraete-mit-primus-guenstig-und-doch-effizient)
- [WITTMANN 공식 Fakuma 2026 이벤트 페이지, 2026-08-10 확인](https://www.wittmann-group.com/en/event-fakuma-2026)

### 로봇제조기술

- [IEEE Spectrum, FCC Covered List에 이동형 로봇 추가, 2026-08-04](https://spectrum.ieee.org/fcc-covered-list-mobile-robots)
- [Sidley Austin, FCC Adds All Foreign-Produced Advanced Robotic Devices to the Covered List, 2026-08-07](https://www.sidley.com/en/insights/newsupdates/2026/08/fcc-adds-all-foreign-produced-advanced-robotic-devices-to-the-covered-list)
- [The Robot Report, HII–Path Robotics·GrayMatter Robotics 9억 달러 계약, 2026-08-06](https://www.therobotreport.com/hii-signs-up-to-900m-agreement-with-path-robotics-graymatter-robotics/)
- [ASSEMBLY, HII Commits Up to 900 Million to Expand Physical AI, 2026-08-06](https://www.assemblymag.com/articles/100299-hii-commits-up-to-900-million-to-expand-physical-ai-in-shipbuilding)
- [ASSEMBLY, Servo Press Enables High-Mix Production (Kistler·TEAM·SKF), 2026-08-05](https://www.assemblymag.com/articles/100292-servo-press-enables-high-mix-production)
- [Automated Warehouse, KUKA·Contoro 트레일러 하역 자동화, 2026-08-04](https://www.automatedwarehouseonline.com/kuka-and-contoro-bring-automated-trailer-unloading-to-logistics-facilities/)
- [Automated Warehouse, BAUHAUS XYZ Robotics 도입, 2026-08-05](https://www.automatedwarehouseonline.com/bauhaus-deploys-xyz-robotics-automation-at-its-central-warehouse/)
- [The Robot Report, GAM Enterprises–Schaeffler PSC 감속기 자산 인수, 2026-08-05](https://www.therobotreport.com/gam-enterprises-to-produce-schaefflers-psc-gear-reducers/)
- [The Robot Report, Tacta Systems TactaBot, 2026-08-07](https://www.therobotreport.com/tacta-systems-takes-aim-high-skilled-manufacturing-work-tactabot/)
- [Automated Warehouse, RaaS 로봇 데이터 소유권 및 EU Data Act, 2026-08-07](https://www.automatedwarehouseonline.com/who-owns-data-when-robot-is-rented/)
- [ASSEMBLY, 현대모비스 와이어하니스 조립 로봇 계획, 2026-08-03 (조사 기간 직전, 모니터링 항목)](https://www.assemblymag.com/articles/100285-hyundai-mobis-plans-to-use-robots-to-assemble-wiring-harnesses)
