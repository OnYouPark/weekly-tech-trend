---
title: 제조업 기술 트렌드 일일 브리핑 - 2026년 6월 24일
date: 2026-06-24
tags: [Automate2026, Autobrains, Uber, NVIDIA, Vention, Teradyne, Yaskawa, 가상시운전]
summary: Automate 2026 신규 발표 중심. 스마트제조는 미국 제조시설 80퍼센트 미자동화 배치 격차(MarketScale), 로보틱스는 Autobrains·Uber·Nvidia 뮌헨 유럽 최초 상용 로보택시 시범, AI는 Vention·Teradyne UR 디지털 트윈과 Yaskawa Motoman NEXT 출하. 금형·사출은 신규 동향 없음.
---

# 제조업 기술 트렌드 일일 브리핑 - 2026년 6월 24일

> 금일 신규 핵심 동향이 한산하여 핵심과 인접 영역 위주로 정리함. (직전 발행 6월 23·24일에 다룬 Automate 2026 주요 발표(가와사키 RL030N, 로크웰 FactoryTalk Orchestration, InOrbit ISO 21423 등)는 재보도에서 제외하고, 같은 전시 기간의 신규 발표·신규 각도만 추렸다.)

## 1. 핵심 요약

**스마트제조·자동화 (2026-06-23 발행 후속) — 미국 제조시설 80%가 자동화 전무, Automate 2026 신제품 홍수 속 "배치 격차"가 경쟁 변수로 부각** [MarketScale, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated)

기술 공급 속도가 현장 도입 속도를 앞지르면서 공급사 경쟁축이 기능 추가에서 "구축 속도(speed-to-value)"로 이동했다는 분석이다. Deloitte 조사에서 제조사 92%가 AI를 핵심으로 답했으나 실제 광범위 도입은 소수에 그친다는 인식 대 실행 격차도 함께 제시됐다 [업계 분석]. (80%·92% 원전 수치는 1차 출처 직접 열람 확인 필요)

**SL·국내 제조업 관점**: 기회 — 다품종·소량 부품 라인의 ROI·구축속도·전환시간(changeover)을 자동화 도입 1차 평가축으로 재설정할 근거.

**로보틱스·모빌리티 — Autobrains·Uber·Nvidia, 유럽 최초 뮌헨 상용 로보택시 시범 발표(6월 23일), 자율주행 SW·플랫폼·HW 3계층 분업 명시** [Jerusalem Post, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069)

소프트웨어(Autobrains)·호출 플랫폼(Uber)·하드웨어(Nvidia)를 확장형 로보택시 배치의 3대 필수 계층으로 규정했고, 초기 운행은 인간 감독(safety driver) 하에 규제 승인을 기다린다 [공식 발표]. 6월 19일 휴스턴(Uber·Nuro·Lucid) 건에 이은 흐름이나 유럽 시장·신규 주체라는 점에서 구분된다.

**SL·국내 제조업 관점**: 기회 — 자율주행 스택의 수평 분업화로 완성차·부품사가 자기 차량을 외부 자율주행 생태계에 통합·실증할 진입 경로가 열림. 모빌리티 부품·SW 공급망 재편 신호.

**AI·디지털전환 — Vention·Teradyne, UR 협동로봇 셀 전용 디지털 트윈 플랫폼 공동 개발(6월 22일) / Yaskawa, NVIDIA Jetson Orin 내장 피지컬 AI 로봇 Motoman NEXT 이달 출하** [StockTitan, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html)

물리 셀 구축 전 도달범위·운동학을 가상 검증하는 가상 시운전(virtual commissioning)을 표준 워크플로로 끌어올렸고, Yaskawa는 컨트롤러에 GPU를 직접 탑재해 경로계획·비전·힘제어를 로봇 단에서 처리한다 [공식 발표].

**SL·국내 제조업 관점**: 기회 — 가상 시운전으로 자동화 셀 도입의 설계-검증-재작업 반복 비용을 구조적으로 절감. 사출·금형 후공정 자동화 셀 기획 단계에 직접 적용 가능.

## 2. 분야별 상세 분석

### 2-1. 스마트제조·자동화

**이슈 개요**

조사 기간(2026-06-22–06-24) 내 핵심 신규 콘텐츠는 산업 매체 [MarketScale이 6월 23일 게시한 배치 격차(deployment gap) 분석](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated)이다. Automate 2026(시카고, 6월 22–25일) 현장에 엣지 AI·머신비전·실행 아키텍처 신제품이 쏟아지는 가운데, 미국 제조시설의 약 80%가 여전히 자동화가 전무하다는 진단을 정면으로 다뤘다. 핵심 논지는 기술 공급(개발) 속도가 현장 도입(배치) 속도를 크게 앞질러, 공급사들이 이제 "구축 속도"를 경쟁축으로 삼아 도입 장벽을 낮추는 데 집중한다는 것이다. 기사에 등장하는 개별 벤더 발표 원문(지멘스 Simatic AX 확장 등)은 6월 18일자로 조사 기간을 벗어나며, 기간 내 사건은 이들 제품의 현장 라이브 시연과 이를 묶어낸 6월 23일 분석 자체다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| 미국 제조시설 자동화 공백 | 미국 제조시설의 80%가 자동화 전무(원전 Manufacturing Dive 인용) | [MarketScale, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated) | [2차 인용] |
| AI 인식 대 실행 격차 | Deloitte 2025 조사에서 제조사 92%가 AI를 미래 핵심으로 응답, 실제 광범위 도입은 소수 | [MarketScale, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated) | [2차 인용] |
| 지멘스 Simatic AX 확장 | XLad(텍스트 기반 래더 프로그래밍) 추가, S7-1200 G2 지원, Git·CI/CD 연계. 보도자료 6월 18일(기간 외), Automate 현장 시연 | [Siemens Press, 2026-06-18](https://press.siemens.com/global/en/pressrelease/siemens-expands-accessibility-software-defined-automation-simatic-ax) | [공식 발표] |
| 경쟁축 이동 | 공급사 차별화 초점이 기능 추가에서 "구축 속도(speed-to-value)"·도입 마찰 제거로 이동 | [MarketScale, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated) | [업계 분석] |

**기술적 의미**

이번 기간의 기술적 차별점은 "지능형 기능 추가"보다 "도입 마찰(integration friction) 제거"로 무게중심이 이동했다는 점이다. 소프트웨어 정의 제어, 엣지 추론 근접화, 결정론적 통신, 배치 시간 단축이 공통 요소다. 지멘스 Simatic AX의 XLad는 래더 로직에 Git·CI/CD·자동 테스트 같은 IT 소프트웨어 공정을 도입하고, 그래픽·텍스트 양방향 편집과 AI-ready 텍스트 표현을 제공해 OT 인력과 IT 워크플로를 잇는다. 80% 미자동화 진단이 시사하는 바는, 기술이 없어서가 아니라 도입·운영 비용 때문에 자동화가 정체된다는 구조적 원인이다.

**제조업·생산기술 관점 시사점**

80% 미자동화 수치는 한국 자동차 부품사에도 시사점이 크다. 다품종·소량·잦은 사양 변경이 많은 부품 라인은 표준화·반복성을 전제한 기존 자동화의 경제성이 낮아 ROI 검증이 어렵고, 이것이 도입 지연의 핵심 원인이다. 따라서 신규 셀 도입 검토 시 "구축 속도"와 "전환 시간(changeover)" 지표를 ROI 모델의 1차 변수로 삼고, 라인 정지를 유발하는 예외 처리 비용까지 포함해 평가하는 것이 합리적이다. 또한 Git·CI/CD 기반 제어 개발은 제어 코드의 버전관리·재사용·검증 체계를 OT 현장에 도입할 기회를 주지만, 레거시 PLC·통신 호환성, 엣지·소프트웨어 컨트롤러 증가에 따른 OT 보안 공격면 확대, 사내 IT/OT 인력 역량이라는 세 가지 고려사항이 동반된다. 본 기간 신규성은 현장 시연과 분석 기사에 한정되며 정량 성능 검증은 벤더 자료(기간 외)에 의존하므로, PoC 단계에서 자사 라인 기준 독립 검증이 필요하다.

**원문 자료**

- [MarketScale, Factory automation's deployment gap, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated)
- [Siemens Press, Siemens expands accessibility to Software-Defined Automation with Simatic AX, 2026-06-18](https://press.siemens.com/global/en/pressrelease/siemens-expands-accessibility-software-defined-automation-simatic-ax)

### 2-2. 로보틱스·모빌리티

**이슈 개요**

조사 기간 내 신규 동향은 이스라엘 자율주행 AI 기업 Autobrains가 Uber·Nvidia와 함께 독일 뮌헨에서 유럽 최초의 상용 자율주행 호출(ride-hailing) 네트워크 시범을 발표한 건이다(6월 23일). 소프트웨어(Autobrains)·서비스 플랫폼(Uber)·하드웨어(Nvidia)의 3계층 분업 구조를 명시한 점이 특징이며, 규제 승인을 기다리는 단계로 초기 운행은 인간 감독(safety driver) 하에 진행된다. 같은 기간 Automate 2026 현장 발표 다수는 직전 6월 23·24일 브리핑에서 다뤘으므로 본 절은 모빌리티 신규 발표에 집중한다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| 뮌헨 로보택시 시범 | 유럽 최초 상용 자율주행 호출 네트워크, 규제 승인 대기, 초기 인간 감독 운행 | [Jerusalem Post, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069) | [공식 발표] |
| 3계층 분업 구조 | 자율주행 SW(Autobrains)·호출 플랫폼(Uber)·하드웨어(Nvidia)를 확장형 로보택시 배치의 3대 필수 계층으로 규정 | [Jerusalem Post, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069) | [공식 발표] |
| 에이전트형 AI 접근 | 추론을 작은 과업 단위로 분해해 차량 탑재 연산 부담을 낮추고, 차량이 자기 행동을 음성으로 설명하는 설명가능성 지향 | [Jerusalem Post, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069) | [공식 발표] |
| Automate 2026 규모 | 6월 22–25일 시카고 McCormick Place, 참관객 5만 명 이상·전시기업 1,000곳 이상, 휴머노이드 전용관 신설 | [Robotics 24/7, 2026-06-23](https://www.robotics247.com/article/automate-2026-industrial-robots-humanoids-software-systems-and-more-from-day-two-in-chicago) | [업계 분석] |

**기술적 의미**

Autobrains 사례의 기술적 핵심은 에이전트형(agentic) AI 접근이다. 단일 대형 모델로 전 상황을 처리하는 방식 대신 추론을 작은 과업 단위로 분해해 처리 부담을 낮추며, 방위 분야(위성 영상·드론 연결성)에서 검증된 기술을 자율주행에 전용했다고 밝혔다. 차량 탑재 연산 부담 경감과 설명가능성(차량이 자기 행동을 음성으로 설명) 측면의 차별화를 노린다. 자율주행 스택이 SW·플랫폼·HW로 수평 분업화되는 구조는, 완성차 단독 풀스택 개발과 대비되는 생태계 조합형 모델이다.

**제조업·생산기술 관점 시사점**

이 사안은 직접적인 공장 적용보다, 자율주행 스택의 수평 분업화로 완성차·부품사가 자기 차량을 외부 자율주행 생태계에 통합·실증할 진입 경로가 열린다는 점에서 모빌리티 부품·소프트웨어 공급망 재편의 신호로 본다. 국내 부품사 관점에서는 (1) 차량 측 하드웨어(센서·컴퓨트·액추에이터) 표준 인터페이스 요구가 강해질 가능성, (2) SW·플랫폼·HW 계층별로 협력·조달 전략을 분리 수립할 필요, (3) 안전 감독 단계에서 상용 무인 단계로 넘어가는 규제 일정이 부품 검증·신뢰성 요구 수준을 끌어올릴 가능성을 모니터링 대상으로 둘 수 있다. 다만 본 발표는 시범·규제 대기 단계로, 상용 무인 운행 일정과 적용 차종·물량은 확인되지 않았으므로 양산 영향 판단은 이르다.

**원문 자료**

- [The Jerusalem Post, Israel's Autobrains launches robotaxi pilot in Munich with Uber and Nvidia, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069)
- [Robotics 24/7, Automate 2026 day two in Chicago, 2026-06-23](https://www.robotics247.com/article/automate-2026-industrial-robots-humanoids-software-systems-and-more-from-day-two-in-chicago)

### 2-3. AI·디지털전환

**이슈 개요**

조사 기간의 AI·디지털전환 신규 동향은 Automate 2026 개막일(6월 22일)에 집중됐다. Vention과 Teradyne Robotics가 Universal Robots(UR) 협동로봇 셀 전용 디지털 트윈 플랫폼 공동 개발을 발표했고, Yaskawa는 NVIDIA Jetson Orin을 내장한 피지컬 AI 플랫폼 Motoman NEXT의 산업용 매니퓰레이터를 이달 출하 개시한다고 공개했다. 공통 메시지는 AI를 기능이 아니라 검증된 작업 수행 능력으로 제품화하고, 가상 시운전(virtual commissioning)으로 도입 리스크를 사전 제거한다는 것이다.

**배경 및 데이터**

| 항목 | 내용 | 출처 | 확실성 |
|------|------|------|--------|
| Vention·Teradyne UR 디지털 트윈 | MachineBuilder 기반, UR 코봇 전 라인업 사양 사전탑재, UR+ 부품 마켓플레이스·검증 템플릿. 설계-프로그래밍-운영 단일 환경, 북미·유럽 우선 출시 | [StockTitan, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html) | [공식 발표] |
| 가상 검증 효과 | 물리 구축 전 도달범위·모듈 구성을 디지털 검증해 시행착오 단계 제거, 고충실도 3D 시뮬레이션을 분 단위 생성 | [StockTitan, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html) | [공식 발표] |
| Yaskawa Motoman NEXT | NVIDIA Jetson Orin 내장 YNX1000 컨트롤러, NEX4–NEX35(4–35kg) 매니퓰레이터, 경로계획·머신비전(Halcon)·힘제어. 산업용 모델 이달 출하 | [Packaging World, 2026-06-23](https://www.packworld.com/leaders-new/machinery/robotics/article/22969383/physical-ai-dominates-automate-2026s-opening-day-while-humanoids-steal-the-show-floor) | [공식 발표] |
| (인접 영역) Supermicro 엣지 AI | Intel Core Ultra Series 3 기반 팬리스 SYS-E103-14P, 최대 180 TOPS, 제조·물류 저지연 추론·에이전틱 AI용 | [StockTitan, 2026-06-23](https://www.stocktitan.net/news/SMCI/supermicro-broadens-ai-at-the-edge-solutions-portfolio-with-intel-t4o0e18cn9nf.html) | [공식 발표] |

**기술적 의미**

이번 발표의 기술적 공통분모는 "AI 추론 능력의 현장 내장(on-device)과 가상 검증의 결합"이다. Vention·Teradyne 플랫폼은 디지털 트윈을 단순 시각화가 아닌 도달범위·운동학(kinematics) 검증 도구로 사용해 물리 셀 구축 전 거동을 재현하는 가상 시운전을 표준 워크플로로 올렸다. Yaskawa Motoman NEXT는 컨트롤러 내부에 GPU를 직접 탑재해 경로계획·비전·힘제어를 로봇 단에서 네이티브로 처리하며, 자연어·아이콘 인터페이스로 프로그래밍 진입장벽을 낮춘다. 이는 생성형·에이전틱 AI와 구분되는 피지컬 AI, 즉 세계 안에서 추론하고 실제로 움직이는 AI의 제품화 단계를 보여준다. Supermicro의 180 TOPS급 팬리스 엣지 시스템은 이런 추론을 데이터 발생 지점 가까이에서 저지연 구동할 인프라 계층을 보강한다.

**제조업·생산기술 관점 시사점**

SL 생산기술 관점의 시사점은 세 가지다. 첫째, 가상 시운전의 비용·시간 절감이 명시적으로 입증되고 있다. 물리 구축 전 도달범위·모듈 프레이밍을 디지털 검증해 시행착오를 제거하는 접근은, 사출·금형 후공정 자동화 셀 기획 단계의 설계-검증-재작업 반복 비용을 구조적으로 줄인다. 둘째, 컨트롤러 내장형 엣지 AI(Motoman NEXT, Supermicro 180 TOPS)는 클라우드 의존 없이 현장에서 비전·힘제어·이상감지를 실시간 처리하므로, 고혼합·소량 생산과 비정형 작업(랜덤 빈피킹, 변형 부품 핸들링)으로 자동화 적용 범위를 넓힌다. 셋째, 현장 취재는 "AI는 버즈워드"라는 경계도 함께 전했다. 일부 공급사는 자사 제품을 "AI 로봇이 아니라 AI 기술에 잘 맞는 로봇"으로 표현했고, 휴머노이드는 아직 생산 라인 투입 단계가 아니라는 평가가 제시됐다. 따라서 도입 검토 시 "AI 탑재 여부"가 아니라 "그 기계가 실제로 어떤 작업을, 어떤 검증 단계를 거쳐 수행하는가"를 기준으로 평가해야 한다.

**원문 자료**

- [StockTitan(PRNewswire), Vention and Teradyne Robotics Collaborate on Digital Twin Creation Platform, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html)
- [Packaging World, Physical AI Dominates Automate 2026's Opening Day, 2026-06-23](https://www.packworld.com/leaders-new/machinery/robotics/article/22969383/physical-ai-dominates-automate-2026s-opening-day-while-humanoids-steal-the-show-floor)
- [StockTitan(PRNewswire), Supermicro Broadens AI at the Edge Solutions Portfolio, 2026-06-23](https://www.stocktitan.net/news/SMCI/supermicro-broadens-ai-at-the-edge-solutions-portfolio-with-intel-t4o0e18cn9nf.html)

### 2-4. 금형·사출 기술

이번 기간 핵심 동향 없음 (인접 영역 3D 프린팅 금형 컨포멀 쿨링·리사이클 수지·사출 공정 모니터링·복합재 탐색 결과 포함). [MoldMaking Technology 산업뉴스](https://www.moldmakingtechnology.com/news)와 [Plastics Today 처리·소재 섹션](https://www.plasticstoday.com/injection-molding/moldex3d-to-preview-next-gen-plastic-injection-molding-simulation-software-at-plastec-west)을 직접 확인한 결과 2026-06-22–06-24 일자 신규 항목이 없었다. 6월 초·중순 대형 전시회(Plast 2026, Automate 2026, PTXPO) 종료 후 발표가 정상적으로 한산해진 양상으로, 다음 주기에는 직전 발표 기술의 현장 성과·레퍼런스가 보고 대상이 될 가능성이 높다.

## 3. 실무 적용 검토 사항

**자동화 ROI 평가축 재설정**

미국 제조시설 80% 미자동화 진단은 기술이 아니라 도입·운영 비용이 자동화 정체의 원인임을 가리킨다. 다품종·소량 부품 라인은 표준화 전제의 기존 자동화 경제성이 낮다. 신규 셀 검토 시 "구축 속도"와 "전환 시간(changeover)"을 ROI 모델 1차 변수로 명시하고, 라인 정지 예외 처리 비용을 포함해 평가할 것을 권장한다. 관련: [MarketScale, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated).

**가상 시운전(virtual commissioning) 도입 검토**

Vention·Teradyne 디지털 트윈 플랫폼은 물리 구축 전 도달범위·운동학을 분 단위 시뮬레이션으로 검증한다. 사출·금형 후공정 자동화 셀 기획 단계에 가상 시운전을 표준 절차로 편입하면 설계-검증-재작업 반복 비용을 줄일 수 있다. 우선 단일 셀 파일럿으로 도입 효과(설계 리드타임·재작업 건수)를 정량 측정한 뒤 확대 적용을 권장한다. 관련: [StockTitan, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html).

**컨트롤러 내장형 엣지 AI 적용 범위 점검**

Yaskawa Motoman NEXT(GPU 내장)와 Supermicro 180 TOPS 엣지 시스템은 클라우드 의존 없이 현장에서 비전·힘제어·이상감지를 실시간 처리한다. 랜덤 빈피킹·변형 부품 핸들링 등 기존 자동화가 어려웠던 비정형 작업 공정을 후보로 식별해, 온디바이스 추론의 적용 가능성을 점검할 것을 권장한다. 관련: [Packaging World, 2026-06-23](https://www.packworld.com/leaders-new/machinery/robotics/article/22969383/physical-ai-dominates-automate-2026s-opening-day-while-humanoids-steal-the-show-floor).

**자율주행 공급망 재편 모니터링**

Autobrains·Uber·Nvidia 사례는 자율주행 스택의 SW·플랫폼·HW 수평 분업화를 보여준다. 모빌리티 부품 공급사 관점에서 차량 측 하드웨어 표준 인터페이스 요구, 계층별 협력·조달 전략 분리, 무인 운행 규제 일정에 따른 부품 신뢰성 요구 상향을 모니터링 항목으로 둘 것을 권장한다. 관련: [Jerusalem Post, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069).

## 4. 출처 (통합)

**스마트제조·자동화**

- [MarketScale, Factory automation's deployment gap: 80% of US facilities remain unautomated, 2026-06-23](https://www.marketscale.com/industries/industrial-iot/factory-automations-deployment-gap-new-products-flood-the-market-as-80-of-us-facilities-remain-unautomated)
- [Siemens Press, Siemens expands accessibility to Software-Defined Automation with Simatic AX, 2026-06-18](https://press.siemens.com/global/en/pressrelease/siemens-expands-accessibility-software-defined-automation-simatic-ax)

**로보틱스·모빌리티**

- [The Jerusalem Post, Israel's Autobrains launches robotaxi pilot in Munich with Uber and Nvidia, 2026-06-23](https://www.jpost.com/business-and-innovation/tech-and-start-ups/article-900069)
- [Robotics 24/7, Automate 2026: day two in Chicago, 2026-06-23](https://www.robotics247.com/article/automate-2026-industrial-robots-humanoids-software-systems-and-more-from-day-two-in-chicago)

**AI·디지털전환**

- [StockTitan(PRNewswire), Vention and Teradyne Robotics Collaborate on Digital Twin Creation Platform, 2026-06-22](https://www.stocktitan.net/news/TER/vention-and-teradyne-robotics-collaborate-on-digital-twin-creation-tfq1wfl0on3t.html)
- [Packaging World, Physical AI Dominates Automate 2026's Opening Day, 2026-06-23](https://www.packworld.com/leaders-new/machinery/robotics/article/22969383/physical-ai-dominates-automate-2026s-opening-day-while-humanoids-steal-the-show-floor)
- [StockTitan(PRNewswire), Supermicro Broadens AI at the Edge Solutions Portfolio, 2026-06-23](https://www.stocktitan.net/news/SMCI/supermicro-broadens-ai-at-the-edge-solutions-portfolio-with-intel-t4o0e18cn9nf.html)

**금형·사출 기술**

- [MoldMaking Technology, Industry News(기간 내 신규 항목 부재 확인), 2026-06 접속](https://www.moldmakingtechnology.com/news)
- [Plastics Today, 처리·소재 섹션(기간 내 본류 항목 부재 확인), 2026-06-23](https://www.plasticstoday.com/injection-molding/moldex3d-to-preview-next-gen-plastic-injection-molding-simulation-software-at-plastec-west)

> 본 보고서의 시장 규모·점유율 수치 중 일부는 2차 출처의 추정값을 인용한 것이다. 사내 의사결정에는 1차 출처(기업 공식 발표·표준화기구·학회 자료) 재확인이 필요하다. 특히 미국 제조시설 80% 미자동화·Deloitte 92% 수치는 원전(Manufacturing Dive) 직접 열람 확인이 필요하다.
