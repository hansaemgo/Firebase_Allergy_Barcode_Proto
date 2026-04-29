// 파일명: src/app/page.tsx
/**
 * @overview 루트 마케팅 랜딩. 기본은 전략 통합 랜딩(V1) — 지식베이스 고강도 버전(CJM·JTBD·이중 시장·삼중 CTA). `/?v=2` V2 · `?v=3` V3. 주요 CTA → `/home?cta=`.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import type { Metadata } from "next"
import { SafebiteLandingV1 } from "@/components/landing/safebite-landing-v1"
import { SafebiteLandingV2 } from "@/components/landing/safebite-landing-v2"
import { SafebiteLandingV3 } from "@/components/landing/safebite-landing-v3"

export const metadata: Metadata = {
  title: "SafeBite | 0.5초 바코드·알레르기 극초직관 판정 & 기관 안전망",
  description:
    "일상 스캔만이 아니라 보육·급식·응급까지 잇는 SafeBite. 가족 프로필·교차오염 검증을 바코드 한 번으로. 베타 예약·출시 알림·기관 대기 리스트까지.",
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
