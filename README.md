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

## 📂 프로젝트 구조

- `src/app`: Next.js 페이지 및 라우트 핸들러
- `src/components`: 재사용 가능한 UI 컴포넌트 (Shadcn UI 기반)
- `src/ai`: Genkit 기반 AI Flow 및 설정
- `src/lib`: 유틸리티 함수 및 설정 파일
- `docs`: 프로젝트 기획 및 설계 문서 (blueprint.md 등)

## 🚢 배포

본 프로젝트는 **Firebase App Hosting**을 통해 배포하도록 최적화되어 있습니다. `apphosting.yaml` 설정을 참조하십시오.

---

© 2026 SafeBite. All rights reserved.
