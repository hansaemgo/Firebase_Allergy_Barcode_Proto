// 파일명: src/app/page.tsx
/**
 * @overview 루트 마케팅 랜딩. 기본은 전략 통합 랜딩(V1). `?v=2` V2 · `?v=3` V3. 앱은 `/home`.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import type { Metadata } from "next"
import { SafebiteLandingV1 } from "@/components/landing/safebite-landing-v1"
import { SafebiteLandingV2 } from "@/components/landing/safebite-landing-v2"
import { SafebiteLandingV3 } from "@/components/landing/safebite-landing-v3"

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
 * @description 기본: 전략 통합 랜딩(V1). `v=2` 다크 · `v=3` 에디토리얼.
 */
export default async function MarketingRootPage(props: PageProps) {
  const sp = await props.searchParams
  if (sp?.v === "2") return <SafebiteLandingV2 />
  if (sp?.v === "3") return <SafebiteLandingV3 />
  return <SafebiteLandingV1 />
}
