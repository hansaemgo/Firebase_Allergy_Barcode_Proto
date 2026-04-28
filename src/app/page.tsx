// 파일명: src/app/page.tsx
/**
 * @overview 루트 마케팅 랜딩. 기본은 V2 다크, `?v=1` 시 V1 라이트. 앱은 `/home` CTA로 진입.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import type { Metadata } from "next"
import { SafebiteLandingV1 } from "@/components/landing/safebite-landing-v1"
import { SafebiteLandingV2 } from "@/components/landing/safebite-landing-v2"

export const metadata: Metadata = {
  title: "SafeBite | 바코드로 알레르기 안전을 검증하세요",
  description:
    "가족 프로필 기준으로 제품을 스캔하고, 섭취 가능 여부와 근거를 한곳에서 확인하세요. 실수 없는 식탁 판단을 돕는 SafeBite.",
}

type PageProps = {
  searchParams?: Promise<{ v?: string }>
}

/**
 * @function MarketingRootPage
 * @description 기본 랜딩 V2. `v=1`일 때만 V1 렌더링.
 */
export default async function MarketingRootPage(props: PageProps) {
  const sp = await props.searchParams
  if (sp?.v === "1") {
    return <SafebiteLandingV1 />
  }
  return <SafebiteLandingV2 />
}
