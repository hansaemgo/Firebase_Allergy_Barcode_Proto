<!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
# SafeBite (세이프바이트) - 알레르기 안전 바코드 스캐너

SafeBite는 다중 사용자 프로필을 기반으로 식품의 바코드를 스캔하여 실시간으로 알레르기 유발 성분을 확인하고 안전 여부를 판별해주는 차세대 식품 안전 플랫폼입니다.

## 🚀 주요 기능

- **다중 프로필 바코드 스캐너**: 여러 사용자의 알레르기 정보를 동시에 관리하고, 바코드 스캔 한 번으로 모든 사용자의 안전 여부를 즉시 확인합니다.
- **실시간 알레르기 판독 (Verdict)**: 스캔 즉시 직관적인 색상(Green: 성공, Red: 위험, Yellow: 주의)으로 안전 상태를 표시합니다.
- **상세 성분 분석 도구**: 제품 라벨을 분석하여 어떤 성분이 특정 사용자의 알레르기 프로필과 일치하는지 명확하게 보여줍니다.
- **과학적 근거 제시**: 식품 안전 데이터베이스 및 제조사 정보를 바탕으로 해당 제품이 위험/주의로 분류된 이유를 상세히 설명합니다.
- **알레르기 프로필 관리**: 심각도, 교차 반응성 등을 포함한 상세한 알레르기 프로필 설정 마법사를 제공합니다.
- **관리자 커맨드 센터**: 사용자 보고 데이터 검토 및 마스터 알레르기 데이터베이스 관리 기능을 포함합니다.

## 🛠 기술 스택

- **Framework**: [Next.js 15 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/)
- **AI/Backend**: [Google Genkit](https://firebase.google.com/docs/genkit), [Firebase](https://firebase.google.com/)
- **Model**: Gemini 2.5 Flash

## 🏁 시작하기

### 사전 준비 사항

- Node.js 20.x 이상
- npm 또는 yarn
- Google AI API Key (Genkit 사용 시 필요)

### 설치 방법

1. 저장소를 클론합니다:
   ```bash
   git clone <repository-url>
   cd Firebase_Allergy_Barcode_Proto
   ```

2. 의존성 패키지를 설치합니다:
   ```bash
   npm install
   ```

3. 환경 변수를 설정합니다. 프로젝트 루트에 `.env.local` 파일을 생성하고 다음 내용을 추가합니다:
   ```env
   GOOGLE_GENAI_API_KEY=your_api_key_here
   ```

### 개발 서버 실행

```bash
# Next.js 개발 서버 실행 (Port: 9002)
npm run dev

# Genkit UI 실행 (AI Flow 테스트)
npm run genkit:dev
```

## 📣 마케팅 랜딩 (Hook → 서비스)

방문자는 **먼저** 루트의 마케팅 페이지를 보고, CTA를 통해 **`/home` 앱 본편**(대시보드·스캔 등)으로 들어오는 구조입니다.

| 경로 | 설명 |
|------|------|
| `/` | 기본 · **전략 통합 랜딩** (`SafebiteLandingV1`, 라이트 톤) |
| `/home` | 앱 서비스 화면(기존에 `/`였던 메인 대시보드 등) |
| `/?v=2` | 대안 변형 · 다크·속도 강조 |
| `/?v=3` | 대안 변형 · 에디토리얼·웜톤 |

**품질 점검:** 상위 디렉터리 `Allergy_barcode_App/docs/landing-page-checklist-final.md`에 히어로·CTA·신뢰·가치 제안 및 A/B/C 유형 보완 항목에 대한 최종 평가를 정리했습니다.

## 📂 프로젝트 구조

- `src/app`: Next.js App Router 기반의 페이지 및 라우트 로직
- `src/components`: 재사용 가능한 UI 컴포넌트 (`src/components/ui`: Shadcn UI 확장)
  - `src/components/landing/`: 마케팅 랜딩(V1 기본, V2·V3 변형)
- `src/ai`: Google Genkit 기반 AI Flow (알레르기 위험 근거 생성 등)
- `src/lib`: 유틸리티 함수 (cn 등)
- `docs`: 기획, 설계 및 품질 평가 문서 모음
  - `UX_FLOW.md`: 핵심 사용자 경험(UX) 4대 시나리오 상세 흐름도
  - `architecture.md`: 애플리케이션 컴포넌트 렌더링 구조 및 머메이드 차트 요약
  - `code_quality_report.md`: 코드 품질 진단 및 CVA 도입, 주석 표준화 등 리팩토링 종합 보고서
  - `project_status.md`: 프로토타입 구현 현황 및 리뷰 노트
  - `../Allergy_barcode_App/docs/.ai-context.md`: AI 에이전트 컨텍스트(루트 `Allergy_barcode_App` 참고)
  - `../Allergy_barcode_App/docs/landing-page-checklist-final.md`: **랜딩페이지 체크리스트 최종 평가**

## 📄 상위 레포 문서 (`Allergy_barcode_App/docs/`)

워크스페이스 구조상 AI용 컨텍스트·랜딩 평가는 `Allergy_barcode_App/docs/` 에서 관리합니다. `.ai-context.md`, `landing-page-checklist-final.md` 를 함께 참고하면 됩니다.

## 🚢 배포

본 프로젝트는 **Firebase App Hosting**을 통해 배포하도록 최적화되어 있습니다. `apphosting.yaml` 설정을 참조하십시오.

---

© 2026 SafeBite. All rights reserved.
