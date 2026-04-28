// 파일명: src/components/landing/safebite-landing-v3.tsx
/**
 * @overview SafeBite 마케팅 랜딩 V3 (에디토리얼·웜 스톤 톤). 루트 `/` 기본 노출. `/?v=1`=V1, `/?v=2`=V2.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import Link from "next/link"
import {
  ArrowRight,
  Barcode,
  Feather,
  HeartPulse,
  Leaf,
  ShieldCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const CTA_HREF = "/home"
const CTA_LABEL = "식탁 안심을 시작하기"

/**
 * @function SafebiteLandingV3
 * @description 잡지형 여백·풀인용·번호 섹션으로 V1·V2와 시각 언어를 분리한 변형.
 */
export function SafebiteLandingV3() {
  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 overflow-x-hidden selection:bg-emerald-200/50">
      <header className="border-b border-stone-200/80 bg-[#faf8f5]/90 backdrop-blur sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 h-[3.75rem] flex items-center justify-between gap-4">
          <Link href="/" className="font-serif text-xl tracking-tight text-emerald-950 font-semibold">
            SafeBite
          </Link>
          <nav className="flex items-center gap-3 sm:gap-5 text-[11px] sm:text-xs text-stone-500">
            <Link href="/?v=1" className="hover:text-emerald-900 transition-colors">
              V1
            </Link>
            <Link href="/?v=2" className="hover:text-emerald-900 transition-colors">
              V2
            </Link>
            <Button
              asChild
              size="sm"
              className="rounded-full bg-emerald-900 text-[#faf8f5] hover:bg-emerald-950 text-xs font-medium px-4"
            >
              <Link href={CTA_HREF}>{CTA_LABEL}</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-5 sm:px-8 pt-16 md:pt-24 pb-20">
        <p className="text-[11px] uppercase tracking-[0.25em] text-emerald-800/80 font-medium mb-6">Editorial · family food safety</p>
        <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-14 lg:gap-20 items-start">
          <div>
            <h1 className="font-serif text-[2.15rem] sm:text-4xl md:text-[2.85rem] leading-[1.12] text-emerald-950 font-semibold text-balance">
              성분표를 읽는 시간을,
              <br className="hidden sm:block" />
              가족과 함께하는 시간으로 돌려드립니다
            </h1>
            <p className="mt-8 text-stone-600 leading-[1.75] text-base sm:text-lg max-w-xl">
              SafeBite는 바코드 한 번으로 제품을 특정하고, 저장해 둔 알레르기 프로필에 맞춰
              <span className="text-emerald-950 font-medium"> 섭취 여부와 주의점</span>을 한 장에 모읍니다.
              추측이 아니라, 확인하고 넘어가는 식탁을 지향합니다.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-emerald-900 text-[#faf8f5] hover:bg-emerald-950 px-8 font-medium shadow-sm"
              >
                <Link href={CTA_HREF}>
                  {CTA_LABEL}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-stone-500 max-w-[14rem] leading-relaxed">
                앱 홈으로 이동해 스캔·프로필·알림 흐름을 이어갈 수 있습니다.
              </p>
            </div>
          </div>
          <aside className="relative">
            <div className="absolute -right-4 top-0 w-px h-full bg-stone-200 hidden lg:block" aria-hidden />
            <blockquote className="font-serif text-lg sm:text-xl text-stone-700 leading-relaxed pl-0 lg:pl-8 border-l-4 border-emerald-800/25 lg:border-l-0 py-2">
              &ldquo;같은 유제품이라도, 우리 아이에겐 아니에요. 라벨만으로는 그 차이가 안 보일 때가 많아요.&rdquo;
            </blockquote>
            <p className="mt-4 text-xs text-stone-500 pl-0 lg:pl-8">— 베타 사용자 인터뷰 (가명, 기획용 인용)</p>
            <div className="mt-10 p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm">
              <div className="flex items-center gap-3 text-emerald-900">
                <Barcode className="h-7 w-7 shrink-0" />
                <div>
                  <p className="text-sm font-semibold">스캔으로 시작</p>
                  <p className="text-xs text-stone-500 mt-0.5">매장 조명 아래서도 프레임만 맞추면 됩니다.</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <Separator className="max-w-5xl mx-auto bg-stone-200/80" />

      <section className="max-w-6xl mx-auto px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {[
            {
              n: "01",
              title: "맥락을 잃지 않기",
              body: "제품 ID와 가족 프로필을 함께 묶어, 동일 제품이라도 사람마다 다른 결론을 내릴 수 있게 합니다.",
              icon: HeartPulse,
            },
            {
              n: "02",
              title: "한 번에 훑는 흐름",
              body: "스캔 → 검증 요약 → 최근 이력·리콜까지 이어지는 화면 구조를 지향합니다.",
              icon: Feather,
            },
            {
              n: "03",
              title: "과장 없는 문장",
              body: "의학적 진단을 대신하지 않는다는 전제를 두고, 근거와 주의 문구를 나란히 둡니다.",
              icon: Leaf,
            },
          ].map((item) => (
            <div key={item.n} className="space-y-4">
              <span className="text-xs font-mono text-emerald-800/70 tracking-widest">{item.n}</span>
              <div className="flex items-start gap-3">
                <item.icon className="h-5 w-5 text-emerald-900 mt-1 shrink-0" strokeWidth={1.5} />
                <div>
                  <h2 className="font-serif text-xl text-emerald-950 font-semibold">{item.title}</h2>
                  <p className="mt-2 text-sm text-stone-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <Button asChild variant="outline" className="rounded-full border-stone-300 text-emerald-950 hover:bg-white bg-transparent">
            <Link href={CTA_HREF}>
              {CTA_LABEL}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <section className="bg-emerald-950 text-[#f5f2eb] py-20 md:py-24">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl md:text-3xl font-semibold leading-snug">
              숫자는 보조일 뿐,
              <br />
              중심은 언제나 가족의 기준입니다
            </h2>
            <p className="mt-6 text-sm text-emerald-100/85 leading-relaxed max-w-md">
              아래 수치는 출시 전 목표·예시이며, 실제 지표는 서비스 연동 후 갱신됩니다.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <Card className="bg-emerald-900/50 border-emerald-800/50 text-[#f5f2eb] shadow-none">
              <CardContent className="p-6">
                <ShieldCheck className="h-6 w-6 text-emerald-300 mb-3" />
                <p className="font-serif text-3xl font-semibold tabular-nums">12만+</p>
                <p className="text-xs text-emerald-200/80 mt-2 leading-snug">누적 검증 요청 (목표)*</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-900/50 border-emerald-800/50 text-[#f5f2eb] shadow-none">
              <CardContent className="p-6">
                <p className="font-serif text-3xl font-semibold tabular-nums">~30초</p>
                <p className="text-xs text-emerald-200/80 mt-2 leading-snug">결론 화면까지 (프로토 기준)**</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 sm:px-8 py-20 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-emerald-950 font-semibold">
          오늘 장바구니 앞에서, 한 번만 덜 고민해 보세요
        </h2>
        <p className="mt-4 text-stone-600 text-sm leading-relaxed">
          SafeBite 앱 홈에서 스캔과 프로필을 이어서 사용할 수 있습니다.
        </p>
        <Button
          asChild
          size="lg"
          className="mt-10 rounded-full bg-emerald-900 text-[#faf8f5] hover:bg-emerald-950 px-10"
        >
          <Link href={CTA_HREF}>{CTA_LABEL}</Link>
        </Button>
        <p className="mt-8 text-[10px] text-stone-500 leading-relaxed">
          * ** 기획·내부 테스트 기준 문구입니다.
        </p>
      </section>

      <footer className="border-t border-stone-200 px-5 sm:px-8 py-10 text-center text-[11px] text-stone-500 max-w-2xl mx-auto leading-relaxed">
        SafeBite 랜딩 V3 (에디토리얼). 다른 버전:&nbsp;
        <Link href="/?v=1" className="text-emerald-800 underline underline-offset-2">
          V1 라이트
        </Link>
        {" · "}
        <Link href="/?v=2" className="text-emerald-800 underline underline-offset-2">
          V2 다크
        </Link>
        .
      </footer>
    </div>
  )
}
