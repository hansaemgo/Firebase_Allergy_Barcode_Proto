// 파일명: src/app/page.tsx
/**
 * @overview SafeBite 마케팅 랜딩(루트). 앱 대시보드는 `/home`에서 CTA로 진입합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import type { Metadata } from "next"
import { SafebiteLanding } from "@/components/landing/safebite-landing"

export const metadata: Metadata = {
  title: "SafeBite | 바코드로 알레르기 안전을 검증하세요",
  description:
    "가족 프로필 기준으로 제품을 스캔하고, 섭취 가능 여부와 근거를 한곳에서 확인하세요. 실수 없는 식탁 판단을 돕는 SafeBite.",
}

/**
 * @function MarketingRootPage
 * @description 랜딩 페이지를 노출하고 메인 앱은 `/home`으로 유도합니다.
 */
export default function MarketingRootPage() {
  return <SafebiteLanding />
}
