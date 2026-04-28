// 파일명: src/components/landing/safebite-landing-v2.tsx
/**
 * @overview SafeBite 마케팅 랜딩 V2 (다크·결과 우선). `/?v=2`. 기본 루트는 V3.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import type { LucideIcon } from "lucide-react"
import Link from "next/link"
import {
  ArrowRight,
  Barcode,
  Gauge,
  Layers,
  Radar,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const CTA_HREF = "/home"
const CTA_LABEL = "지금 바로 앱 열기"

/**
 * @function ctaV2
 * @description V2 다크 테마용 강조 CTA 클래스.
 */
function ctaV2(extra = "") {
  return `${extra} font-semibold bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-[0_0_24px_-4px_rgba(251,191,36,0.45)]`
}

/**
 * @function SafebiteLandingV2
 * @description 결과·속도 중심 카피와 다크 UI. C 유형 + B 하드팩트 톤 보완 버전.
 */
export function SafebiteLandingV2() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden selection:bg-amber-400/30">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-3">
          <Link href="/" className="font-bold text-lg tracking-tight text-white">
            SafeBite<span className="text-amber-400">.</span>
          </Link>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link href="/" className="text-[11px] sm:text-xs text-slate-400 hover:text-white transition-colors">
              V3 최신
            </Link>
            <Link
              href="/?v=1"
              className="text-[11px] sm:text-xs text-slate-400 hover:text-white transition-colors"
            >
              V1
            </Link>
            <Button asChild size="sm" className={ctaV2("text-xs px-3")}>
              <Link href={CTA_HREF}>{CTA_LABEL}</Link>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative px-4 sm:px-6 pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(251,191,36,0.18),transparent)] pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-[1fr_420px] gap-14 items-center">
          <div className="space-y-8">
            <Badge className="bg-white/10 text-amber-300 border border-amber-500/30 hover:bg-white/15">
              바코드 한 번으로 · 가족 맞춤 판정
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-[3.35rem] font-bold tracking-tight leading-[1.1]">
              먹어도 되는지,
              <br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
                스캔 후 30초 안에
              </span>
              <br />
              결론을 고릅니다
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg">
              제품 라벨을 읽기 전에 바코드를 찍어요. 개인별 알레르기 프로필·리콜·교차표기까지 한 번에 엮어
              <strong className="text-slate-200"> 섭여도 되는지 / 주의해야 하는지</strong>만 남겨 드립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild size="lg" className={ctaV2("w-full sm:w-auto text-base px-8 rounded-full")}>
                <Link href={CTA_HREF}>
                  {CTA_LABEL}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-slate-500 font-mono">NO SIGNUP FLOW · 우선 탐험 우선</p>
            </div>
          </div>
          <HeroPanel />
        </div>
      </section>

      <div className="border-y border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-wrap justify-center md:justify-between gap-x-8 gap-y-3 text-[11px] sm:text-xs text-slate-500 font-medium uppercase tracking-widest">
          <span>Outcome-first</span>
          <span>Profile-bound verdict</span>
          <span>Recall-ready</span>
          <span>Zod-validated pipelines</span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 grid sm:grid-cols-3 gap-8">
        {[
          { n: "~30s", l: "결과까지(프로토 기준 목표)**", icon: Gauge },
          { n: "4.8★", l: "베타 설문 만족도(예시)*", icon: Sparkles },
          { n: "∞", l: "가족 프로필 무제한(기획)*", icon: Layers },
        ].map(({ n, l, icon: Icon }) => (
          <div key={l} className="text-center sm:text-left">
            <Icon className="h-6 w-6 text-amber-400 mx-auto sm:mx-0 mb-3 opacity-90" />
            <p className="text-4xl md:text-5xl font-bold text-white tabular-nums tracking-tight">{n}</p>
            <p className="text-sm text-slate-500 mt-2 leading-snug">{l}</p>
          </div>
        ))}
      </section>

      <section className="px-4 sm:px-6 py-16 border-t border-white/10 bg-slate-900/40">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">블랙박스 하나로 끝</h2>
          <p className="text-center text-slate-400 mb-12 max-w-xl mx-auto text-sm">
            내부 로직 대신 입력–출력만 보여 줄게요 (C유형 입력·출력).
          </p>
          <div className="grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 md:gap-4 items-center">
            <IOCard icon={Barcode} title="바코드" sub="SKU 식별" />
            <ArrowRight className="hidden md:block h-8 w-8 text-slate-600 shrink-0" />
            <IOCard highlight icon={Zap} title="SafeBite 엔진" sub="성분 × 프로필 × 리콜" />
            <ArrowRight className="hidden md:block h-8 w-8 text-slate-600 shrink-0" />
            <IOCard icon={ShieldCheck} title="한 줄 결론" sub="근거·주의 포함" />
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="text-xl font-bold text-center mb-10">무엇이 달라지나요</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            {
              title: "추측 대신 레일",
              body: "챗봇에 묻는 방식과 달리, 동일 SKU·프로필 조합에는 동일 형식의 응답 구조를 지향합니다.",
            },
            {
              title: "가족마다 다른 한 라벨",
              body: "같은 제품도 자녀/부모 프로필을 바꾸면 결론이 달라집니다.",
            },
            {
              title: "리콜이 터지면 먼저 알림",
              body: "최근 스캔과 연관되면 피드에 끌어올립니다(알림 탭 연동 목표).",
            },
            {
              title: "스펙 노출(B)",
              body: "Next.js 15, Genkit 파이프, Zod 스키마로 응답 형태를 고정합니다.",
            },
          ].map((c) => (
            <Card key={c.title} className="bg-slate-900/80 border-white/10 text-slate-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Radar className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">{c.title}</p>
                    <p className="text-sm text-slate-400 mt-2 leading-relaxed">{c.body}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild size="lg" className={ctaV2("rounded-full px-10")}>
            <Link href={CTA_HREF}>
              바로 시작할게요
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-gradient-to-b from-slate-900 to-slate-950 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center space-y-6 pb-24 md:pb-10">
          <h2 className="text-2xl md:text-3xl font-bold">장바구니 안에서 망설이던 시간 줄이기</h2>
          <p className="text-slate-400 text-sm">
            카드만 보고 두 번째 장을 넘겨도 되는지—그 판단을 앞당깁니다.
          </p>
          <Button asChild size="lg" className={ctaV2("rounded-full px-12 text-base")}>
            <Link href={CTA_HREF}>{CTA_LABEL}</Link>
          </Button>
          <p className="text-[10px] text-slate-600">
            *수치는 기획용 예시입니다. **내부 목표값이며 측정 방식 배포 후 확정.
          </p>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-8 text-center text-[11px] text-slate-600 max-w-3xl mx-auto">
        SafeBite — 랜딩 V2.&nbsp;
        <Link href="/" className="text-amber-500/90 hover:text-amber-400 underline underline-offset-2">
          V3 최신
        </Link>
        {" · "}
        <Link href="/?v=1" className="text-amber-500/90 hover:text-amber-400 underline underline-offset-2">
          V1
        </Link>
        .
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-slate-950/95 border-t border-white/10 backdrop-blur md:hidden">
        <Button asChild className={ctaV2("w-full rounded-xl py-6 text-base")}>
          <Link href={CTA_HREF}>{CTA_LABEL}</Link>
        </Button>
      </div>
    </div>
  )
}

/**
 * @function HeroPanel
 * @description 우측 히어로 시각 패널 — 글로우·바코드·미니 카드 스택으로 모션 없이 속도감 표현.
 */
function HeroPanel() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="absolute inset-0 bg-amber-500/10 blur-[100px] rounded-full scale-110 pointer-events-none" />
      <div className="relative w-full max-w-[380px] rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-6 shadow-2xl">
        <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-6">
          <span className="text-emerald-400">● READY</span>
          <span>scan.preview</span>
        </div>
        <div className="aspect-[4/5] rounded-2xl border border-white/10 bg-slate-950/80 flex flex-col items-center justify-center gap-4 relative overflow-hidden scanner-viewfinder">
          <Barcode className="h-20 w-20 text-amber-400/90" strokeWidth={1.25} />
          <Badge className="bg-amber-400/15 text-amber-300 border-amber-400/40">실시간 시뮬</Badge>
        </div>
        <div className="mt-4 space-y-2 font-mono text-[11px] text-slate-400">
          <div className="flex justify-between">
            <span>verdict.summary</span>
            <span className="text-emerald-400">OK</span>
          </div>
          <div className="flex justify-between">
            <span>profiles.matched</span>
            <span className="text-slate-200">2 active</span>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * @function IOCard
 * @description 입력·출력 다이어그램용 소형 카드.
 */
function IOCard({
  icon: Icon,
  title,
  sub,
  highlight,
}: {
  icon: LucideIcon
  title: string
  sub: string
  highlight?: boolean
}) {
  return (
    <Card
      className={
        highlight
          ? "border-amber-500/40 bg-amber-500/10 text-white shadow-[0_0_30px_-8px_rgba(251,191,36,0.35)]"
          : "bg-slate-900/70 border-white/10 text-slate-100"
      }
    >
      <CardContent className="p-6 text-center md:text-left">
        <Icon className={`h-8 w-8 mx-auto md:mx-0 mb-3 ${highlight ? "text-amber-400" : "text-slate-400"}`} />
        <p className="font-bold">{title}</p>
        <p className="text-xs text-slate-500 mt-2">{sub}</p>
      </CardContent>
    </Card>
  )
}
