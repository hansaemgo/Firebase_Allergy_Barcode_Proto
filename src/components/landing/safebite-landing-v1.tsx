// 파일명: src/components/landing/safebite-landing-v1.tsx
/**
 * @overview 랜딩 기본(V1): 지식베이스 기반 고강도 전환 — 이중시장·0.5초 O/X·B2B·페르소나·삼중 CTA. 루트 `/` 기본.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import Link from "next/link"
import Image from "next/image"
import {
  ArrowRight,
  Barcode,
  Bell,
  Building2,
  Check,
  Cpu,
  HeartPulse,
  Layers,
  Radar,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Timer,
  Users,
  X,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const CTA_HREF = "/home"
const CTA_LABEL = "지금 안전하게 시작하기"
/** 랜딩 헤더 오른쪽 CTA — 바코드 스캔 화면 */
const SCAN_HREF = "/scan"
/** 스티키 헤더 높이 고려한 앵커 스크롤 여백 */
const SECTION_SCROLL_MARGIN = "scroll-mt-[4.5rem]"

const LANDING_NAV_SECTIONS = [
  { href: "#hero", label: "소개" },
  { href: "#mission", label: "미션" },
  { href: "#demo", label: "스캔 데모" },
  { href: "#value", label: "핵심 가치" },
  { href: "#dual", label: "이중 시장" },
  { href: "#benefits", label: "혜택" },
  { href: "#cta-band", label: "사전 예약" },
] as const

/** 랜딩 문의 메일 — 배포 전 실제 주소로 교체 */
const LANDING_EMAIL = "hello@safebite.app"

/**
 * @description 헤더 왼쪽용 워드마크 겸 심볼 — 방패 실루엣 + 바코드 라인(SafeBite 신뢰·스캔).
 */


function mailtoPresale() {
  return `mailto:${LANDING_EMAIL}?subject=${encodeURIComponent("SafeBite 베타 사전 예약")}&body=${encodeURIComponent("연락처:\n자녀 알러지 여부:\n")}`
}
function mailtoNotify() {
  return `mailto:${LANDING_EMAIL}?subject=${encodeURIComponent("SafeBite 출시 알림")}&body=${encodeURIComponent("알림 받을 연락처(이메일/휴대폰):\n")}`
}
function mailtoB2B() {
  return `mailto:${LANDING_EMAIL}?subject=${encodeURIComponent("SafeBite 기관·급식 대기 리스트")}&body=${encodeURIComponent("기관명:\n담당 직함:\n연락처:\n원아/학급 규모:\n")}`
}

/**
 * @function primaryCtaClasses
 * @description 랜딩 전역에서 사용하는 기본 CTA 버튼 스타일을 반환합니다.
 */
function primaryCtaClasses(extra = "") {
  return `${extra} font-semibold shadow-md bg-primary text-primary-foreground hover:bg-primary/90`
}

/**
 * @function SafebiteLandingV1
 * @description 공통 코어(히어로·CTA·신뢰·가치)와 A·C 혼합 선택 요소를 포함한 단일 스크롤 랜딩 UI.
 */
export function SafebiteLandingV1() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border/30 bg-background/50 backdrop-blur-md supports-[backdrop-filter]:bg-background/40 transition-colors">
        <div className="relative flex h-14 w-full max-w-6xl mx-auto items-center gap-3 px-4 sm:px-6">
          <Link
            href="/#hero"
            className="flex items-center gap-2 shrink-0 z-10 text-primary hover:opacity-90 transition-opacity"
            aria-label="SafeBite · 페이지 상단"
          >
            <Image src="/safebite-logo.png" alt="SafeBite Logo" width={36} height={36} className="shrink-0 rounded-[8px]" />
            <span className="font-bold text-base sm:text-lg tracking-tight text-foreground">SafeBite</span>
          </Link>

          <nav
            className="absolute left-1/2 top-1/2 hidden md:flex -translate-x-1/2 -translate-y-1/2 items-center gap-4 lg:gap-5 text-[13px] font-medium text-muted-foreground"
            aria-label="페이지 내 주요 섹션"
          >
            {LANDING_NAV_SECTIONS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="hover:text-foreground transition-colors whitespace-nowrap"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto shrink-0 z-10 flex items-center gap-2">
            <Button asChild size="sm" className={primaryCtaClasses("text-xs sm:text-sm px-3 sm:px-4 font-semibold shadow-md")}>
              <Link href={`${SCAN_HREF}?cta=landing_nav`}>스캔하기</Link>
            </Button>
          </div>
        </div>
      </header>
      <div className="bg-background text-foreground min-h-screen overflow-x-hidden pb-[8rem] md:pb-0">
        <section id="hero" className={`relative px-4 sm:px-6 pt-10 pb-16 md:pb-20 ${SECTION_SCROLL_MARGIN}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-[11px] font-semibold">
                알레르기 · 바코드 · 가족 프로필
              </Badge>
              <Badge variant="outline" className="text-[11px] border-primary/40 text-primary font-semibold">
                0.5초 극초직관 O/X + 햅틱 (목표)
              </Badge>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-[2.85rem] font-bold tracking-tight leading-[1.28] sm:leading-[1.36] md:leading-[1.44] text-balance">
              매장 한복판에서도 읽히는 안전 —
              <br />
              <span className="text-primary">바코드 한 번에 생존 판정을 내립니다</span>
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              일상 스캔의 가벼움과 <strong className="text-foreground font-semibold">생명 안전망(SOS·기관 연동 로드맵)</strong>의 무게를 한 제품에서 잇습니다.
              교차오염·숨은 원료까지 프로필에 맞춰 <strong className="text-foreground font-semibold">근거 기반으로 판정</strong>합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center flex-wrap">
              <Button asChild size="lg" className={primaryCtaClasses("w-full sm:w-auto text-base px-8")}>
                <Link href={`${CTA_HREF}?cta=start`}>
                  {CTA_LABEL}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <Button asChild variant="outline" size="sm" className="text-xs">
                  <Link href="/home?cta=beta">베타 사전 예약</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="text-xs">
                  <Link href="/home?cta=notify">출시 알림</Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="text-xs">
                  <Link href="/home?cta=b2b">기관 대기 리스트</Link>
                </Button>
              </div>
            </div>
            <p className="text-xs text-muted-foreground text-center sm:text-left max-w-xl">
              앱 실행 후 첫 스캔까지 <strong className="text-foreground">0-Depth(즉시 카메라)</strong>를 목표로 설계 · 별도 가입 단계는 배포 채널에 따라 달라질 수 있습니다
            </p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section
        id="mission"
        className={`relative px-4 sm:px-6 py-8 border-y border-primary/15 bg-gradient-to-r from-primary/[0.07] via-secondary/25 to-primary/[0.05] overflow-hidden ${SECTION_SCROLL_MARGIN}`}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary">미션 한 줄</p>
            <p className="text-base md:text-lg font-semibold leading-snug text-balance">
              <span className="text-primary">0.5초 바코드 스캔</span>으로 식품 안전을 극초직관적으로 판별하고, 골든타임에{" "}
              <span className="underline decoration-primary/60 decoration-2 underline-offset-4">응급·보호자·교사가 한 줄로 연결</span>
              되는 모바일 생명 안전망을 향합니다.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 shrink-0">
            <Badge variant="secondary" className="gap-1">
              <Radar className="h-3 w-3" /> 이중 시장: 스캔 × 응급
            </Badge>
            <Badge variant="outline" className="gap-1 border-caution/50 text-caution">
              기획용 수치·로고는 예시 — 실측 후 교체
            </Badge>
          </div>
        </div>
      </section>

      <section
        id="demo"
        className={`px-4 sm:px-6 py-10 md:py-12 border-t border-border/60 bg-muted/20 ${SECTION_SCROLL_MARGIN}`}
        aria-label="제품 데모 영역 자리"
      >
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-lg md:text-xl font-bold">0.5초 안에 읽히는 스캔 → O/X 판정</h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            숏폼·GIF를 넣으면 첫 스크롤에서 체감이 살아납니다. 지금은 촬영 전 플레이스홀더 —{" "}
            <strong className="text-foreground">녹색 O / 빨간 X · 햅틱</strong> 시연이 들어가면 전환 극대화.
          </p>
          <div className="aspect-video max-h-[220px] md:max-h-none rounded-xl border-2 border-dashed border-primary/30 bg-gradient-to-br from-muted/60 to-muted/30 flex flex-col items-center justify-center gap-3 mx-auto shadow-inner ring-1 ring-primary/5">
            <Barcode className="h-14 w-14 text-primary/70" />
            <p className="text-xs text-muted-foreground px-4">
              스캔부터 결과 카드까지 연결 영상 예정 · 16:9 · 무음 자동재생 추천
            </p>
          </div>
        </div>
      </section>

      <section id="proof" className={`px-4 sm:px-6 py-14 border-t border-border/60 bg-muted/30 ${SECTION_SCROLL_MARGIN}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">12만+</p>
              <p className="text-sm text-muted-foreground mt-1">누적 안전 검증 요청*</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">4.8</p>
              <p className="text-sm text-muted-foreground mt-1">앱 평점(베타 설문)·5점 만점</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">0.5s*</p>
              <p className="text-sm text-muted-foreground mt-1">목표 판정까지(UX 설계)</p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            *기획 KPI이며 실제 측정치는 배포 후 갱신합니다. **내부 프로토타입은 상대 비교용으로만 사용하세요.
          </p>
          <Separator className="my-12 max-w-4xl mx-auto" />
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            함께하는 기관 및 협력 논의
          </p>
          <LogoWall />
        </div>
      </section>

      <section id="value" className={`px-4 sm:px-6 py-16 md:py-20 bg-background border-t border-border/60 ${SECTION_SCROLL_MARGIN}`}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">세 질문 — 한 앱</h2>
            <p className="text-muted-foreground">
              지식베이스의 <strong className="text-foreground">3대 핵심 문제정의</strong>를 한 화면에 압축했습니다. 설득이 길어질수록, 스캔은 짧아야 합니다.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="primary" className="border-primary/25 shadow-md">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <HeartPulse className="h-5 w-5" />
                  <span className="text-[10px] font-bold uppercase tracking-wide">관점 1 · 영유아 부모</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">통제 밖에서도 골든타임을 잃지 않게</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  어린이집·학교로 보낼 때의 극단적 불안. 교차오염을 <strong className="text-foreground">전문의 감수 알고리즘</strong>으로 붙잡고,{" "}
                  <strong className="text-foreground">원터치 SOS</strong>와 보호자 경보를 한 축에 맞춥니다(로드맵·채널별 상이).
                </p>
              </CardContent>
            </Card>
            <Card variant="secondary" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Timer className="h-5 w-5" />
                  <span className="text-[10px] font-bold uppercase tracking-wide">관점 2 · Z·밀레니얼</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">깨알 라벨 해독 대신, 판정만</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  편의점·마트에서의 인지 피로. <strong className="text-foreground">게이미피케이션 없이도</strong> 보이는 O/X와 짧은 근거로 결정 비용을 붕괴합니다.
                </p>
              </CardContent>
            </Card>
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-primary">
                  <Building2 className="h-5 w-5" />
                  <span className="text-[10px] font-bold uppercase tracking-wide">관점 3 · 교육·보육</span>
                </div>
                <h3 className="font-bold text-lg leading-snug">수기 급식 대조의 사각지대를 메우기</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  담임·영양교사의 복합 알러지 대조 스트레스와 법적 리스크. 식단 이력 × 원아 체질 교차망,{" "}
                  <strong className="text-foreground">급식표 자동 대조·SDK</strong>로 이어지는 B2B 축을 전제로 설계합니다.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="dual" className={`px-4 sm:px-6 py-14 bg-muted/30 border-y border-border/60 ${SECTION_SCROLL_MARGIN}`}>
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold">하이브리드 이중 시장</h2>
            <p className="text-sm text-muted-foreground">
              가벼운 스캐너로 넓히고(Volume), 응급·기관 인프라로 깊게 락인(Retention) — 경쟁사 가치사슬 분석에서 도출한 단계적 하이브리드 전략입니다.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-primary/20 bg-gradient-to-br from-card to-primary/[0.04] shadow-sm">
              <CardContent className="p-6 space-y-3">
                <Badge variant="secondary" className="text-[10px]">
                  시장 A
                </Badge>
                <h3 className="font-bold text-lg">일상 스캔 — 볼륨</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  진입 장벽이 낮은 바코드 UX. <strong className="text-foreground">0.5초·O/X·햅틱</strong>으로 습관화해 맘카페·숏폼으로 퍼지게 설계.
                </p>
              </CardContent>
            </Card>
            <Card className="border-destructive/15 bg-gradient-to-br from-card to-destructive/[0.03] shadow-sm">
              <CardContent className="p-6 space-y-3">
                <Badge variant="outline" className="text-[10px] border-destructive/30 text-destructive">
                  시장 B
                </Badge>
                <h3 className="font-bold text-lg">응급·기관 — 락인</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">119·담임·보호자 결합 알림</strong>, 안심 보육 인증·급식 API 등 의료·행정 신뢰 장벽이 높은 층 — 국내에서 상대적으로 열린 프레임(기획 가정).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="benefits" className={`px-4 sm:px-6 py-16 ${SECTION_SCROLL_MARGIN}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">왜 SafeBite인가</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            기능 나열이 아니라, 식탁·급식 현장에서의{" "}
            <strong className="text-foreground">실수 비용과 행정 리스크를 줄이는 혜택</strong>으로 말합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">극단적 불안을 줄이는 판단</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  바코드·라벨·리콜을 한 파이프라인에 두고 알레르기 유발 요소를 <strong className="text-foreground">놓치지 않는 구조</strong>를 지향합니다(가드레일·스키마 검증 목표).
                </p>
              </CardContent>
            </Card>
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">한 제품도 가족마다 다른 결론</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  다중 프로필과 색 구분 결과로 <strong className="text-foreground">최수안·김지윤형 시나리오</strong>(다중·단일 알러지 모두)에 맞춥니다.
                </p>
              </CardContent>
            </Card>
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">기관까지 이어지는 데이터 축</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  리콜·급식·원아 체질 교차망은 <strong className="text-foreground">박현진·송미정 세그먼트</strong>에서 락인을 설계 — 희귀 성분은 크라우드 제보로 보강(유나비·극단 페르소나와 연결).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="cta-band" className={`px-4 sm:px-6 py-14 bg-muted/20 border-y border-border/60 ${SECTION_SCROLL_MARGIN}`}>
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-2xl md:text-3xl font-bold">지금 잡아둘 가치 — 삼중 CTA</h2>
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              앱을 바로 열거나, 우선 순위만 남겨도 됩니다. 민감 정보는 폼으로 남기지 않고 필요 시 메일 클라이언트로만 열립니다(옵트인).
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card variant="default" className="border-primary/45 shadow-xl ring-2 ring-primary/10">
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className="space-y-1">
                  <Badge className="w-fit gap-1" variant="secondary">
                    베타
                  </Badge>
                  <h3 className="font-bold text-lg">0.5초 스캔 베타 사전 예약</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">가장 먼저 O/X·햅틱 신규 기능을 받아볼 가족 우선 순위.</p>
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <Button asChild className={primaryCtaClasses("w-full")}>
                    <Link href="/home?cta=beta">앱에서 계속하기</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={mailtoPresale()}>메일로만 접수하기</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card className="border-border/90 shadow-md">
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className="space-y-1">
                  <Badge variant="outline" className="w-fit gap-1 border-primary/40">
                    <Bell className="h-3 w-3" /> 출시
                  </Badge>
                  <h3 className="font-bold text-lg">출시 알림 · 리콜·연동 로드맵</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">실베타·재출시 급식·기관 기능 소식만 받고 싶을 때.</p>
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <Button asChild variant="default" className="w-full font-semibold shadow-sm">
                    <Link href="/home?cta=notify">앱 알림 받기 진행</Link>
                  </Button>
                  <Button asChild variant="ghost" size="sm">
                    <a href={mailtoNotify()} className="text-primary">
                      이메일로 알림 신청 (mailto)
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
            <Card variant="destructive" className="border-destructive/25 bg-card shadow-md">
              <CardContent className="p-6 space-y-4 flex flex-col h-full">
                <div className="space-y-1">
                  <Badge variant="destructive" className="w-fit opacity-95">
                    B2B
                  </Badge>
                  <h3 className="font-bold text-lg">안심 보육 · 급식 대기 리스트</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    원장·영양 교사 우선 세일즈. 자동 급식 대조·카톡 수준 교사 UX 로드맵 공유.
                  </p>
                </div>
                <div className="mt-auto flex flex-col gap-2">
                  <Button asChild variant="secondary" className="w-full font-semibold">
                    <Link href="/home?cta=b2b">기관 등록 진행하기</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={mailtoB2B()}>공문·도입 검토 메일 보내기</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="rounded-2xl border border-border bg-card/80 p-6 md:p-8 shadow-inner">
            <p className="text-center text-xs font-bold uppercase tracking-widest text-primary mb-6">핵심 페르소나가 남긴 한 줄</p>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <blockquote className="space-y-2 border-l-4 border-primary/40 pl-4">
                <p className="italic text-foreground/90">&ldquo;바빠 죽겠는데 찾아볼 시간이 없어서 먹던 것만 사요.&rdquo;</p>
                <footer className="text-xs text-muted-foreground">김지윤 — 워킹맘 (DOS 2위)</footer>
              </blockquote>
              <blockquote className="space-y-2 border-l-4 border-primary/40 pl-4">
                <p className="italic text-foreground/90">&ldquo;경쟁 무기가 된다면 구독료 10만 원은 저렴하죠.&rdquo;</p>
                <footer className="text-xs text-muted-foreground">박현진 — 원장 (DOS 1위)</footer>
              </blockquote>
              <blockquote className="space-y-2 border-l-4 border-primary/40 pl-4">
                <p className="italic text-foreground/90">&ldquo;치명적인 정보들이 썩고 있어요.&rdquo;</p>
                <footer className="text-xs text-muted-foreground">유나비 — 희귀 환우 (플라이휠)</footer>
              </blockquote>
            </div>
          </div>

          <Card className="bg-muted/40 border-border/70">
            <CardContent className="p-5 md:p-6 space-y-2">
              <p className="text-xs font-bold text-primary uppercase tracking-wide">외부 분석 스냅샷 · 기획용</p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                TAM(글로벌 Free-from+알러지)·SAM(국내 소아 가구+보육기관)·1년 차 SOM 시뮬은 지식베이스 `6_tam_sam_som.md`와 정합하게 유지해야 합니다. 경쟁 가치사슬 Yuka /
                Allergy Force / Fig / Edamam / Trash 패턴도 같은 축입니다.
              </p>
            </CardContent>
          </Card>

          <div className="flex justify-center">
            <Button asChild size="lg" className={primaryCtaClasses("px-10")}>
              <Link href={`${CTA_HREF}?cta=start`}>
                바로 시작 (앱 홈)
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 bg-muted/25 border-y border-border/60">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">복잡한 과정 없이: 넣으면, 판정이 나옵니다</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            안쪽 로직 대신 한 눈에 들어오는 세 단계만 보여 드립니다.
          </p>
          <div className="flex flex-col md:flex-row items-stretch justify-center gap-6 md:gap-4">
            <Card className="md:flex-1 border-dashed bg-card/80">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <Barcode className="h-8 w-8 text-primary" />
                <p className="font-semibold">바코드 / 라벨 입력</p>
                <p className="text-xs text-muted-foreground">실제 매장과 동일하게 스캔</p>
              </CardContent>
            </Card>
            <ArrowRight className="hidden md:block h-8 w-8 text-muted-foreground self-center shrink-0" />
            <Card className="md:flex-1 border-primary/30 shadow-md bg-primary/[0.04]">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <Cpu className="h-8 w-8 text-primary" />
                <p className="font-semibold">SafeBite 검증</p>
                <p className="text-xs text-muted-foreground">프로필·성분·리콜 교차 검사</p>
              </CardContent>
            </Card>
            <ArrowRight className="hidden md:block h-8 w-8 text-muted-foreground self-center shrink-0" />
            <Card className="md:flex-1 border-dashed bg-card/80">
              <CardContent className="p-6 flex flex-col items-center text-center gap-2">
                <Sparkles className="h-8 w-8 text-primary" />
                <p className="font-semibold">섭취 가능 여부 + 근거</p>
                <p className="text-xs text-muted-foreground">다음 행동을 위한 한 줄 결론</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mt-10 max-w-3xl mx-auto">
            <Card className="border-destructive/20 bg-muted/40">
              <CardContent className="p-5">
                <p className="text-[10px] font-bold text-destructive uppercase tracking-wide mb-2">Before</p>
                <p className="text-sm font-semibold">매장에서 성분만 읽고 불안한 채 결정</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  가족별로 피해야 할 항목을 매번 머릿속으로 대조 (평균 5–8분 가정)
                </p>
              </CardContent>
            </Card>
            <Card className="border-success/30 bg-primary/5">
              <CardContent className="p-5">
                <p className="text-[10px] font-bold text-success uppercase tracking-wide mb-2">After</p>
                <p className="text-sm font-semibold">스캔 한 번에 프로필 맞춤 판정</p>
                <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                  동일 제품도 프로필별로 다르게 요약 (<strong className="text-foreground">목표 평균 0.5초 안에 O/X</strong> — UX 설계)**
                </p>
              </CardContent>
            </Card>
          </div>
          <RoiEfficiencyBars />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">처음부터 끝까지, 한 줄기의 워크플로</h2>
            <p className="text-center text-muted-foreground mb-10">
              프로필 저장부터 스캔·검증·리콜 알림까지 끊기지 않게 이어지는 경로입니다.
            </p>
            <WorkflowStrip />
          </div>
          <SafetyTable />
          <ExpertProof />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold leading-snug">
            지금 가족의 기준으로, 첫 검증을 시작해 보세요
          </h2>
          <p className="text-primary-foreground/85 text-sm md:text-base">
            무료 체험·범위는 배포 채널에 따라 결정되며, 앱에서는 동일 버튼으로 연결됩니다.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold px-10 text-base shadow-lg"
          >
            <Link href={`${CTA_HREF}?cta=start`}>
              {CTA_LABEL}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <footer className="px-4 sm:px-6 py-12 border-t border-border/60 bg-muted/20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 justify-between items-start md:items-center">
          <div>
            <p className="font-bold text-primary text-lg">SafeBite</p>
            <p className="text-xs text-muted-foreground mt-1 max-w-sm">
              본 랜딩의 수치·협력사·인용문은 기획용 예시이며, 실제 서비스 출시 시 법검·의학 자문을 거쳐 갱신합니다.
            </p>
          </div>
          <Button asChild size="lg" className={primaryCtaClasses("w-full md:w-auto")}>
            <Link href={`${CTA_HREF}?cta=start`}>{CTA_LABEL}</Link>
          </Button>
        </div>
      </footer>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-background/95 border-t border-border backdrop-blur md:hidden shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.12)] space-y-2">
        <div className="flex gap-2">
          <Button asChild variant="outline" size="lg" className="flex-1 rounded-xl py-6 text-base font-semibold border-primary/40">
            <Link href={`${SCAN_HREF}?cta=landing_mobile`}>스캔하기</Link>
          </Button>
          <Button asChild size="lg" className={`flex-1 rounded-xl py-6 text-base shadow-md ${primaryCtaClasses("")}`}>
            <Link href={`${CTA_HREF}?cta=start`}>{CTA_LABEL}</Link>
          </Button>
        </div>
        <div className="flex justify-center gap-3 text-[11px] text-muted-foreground">
          <Link href="#cta-band" className="underline underline-offset-2">
            베타·알림·기관
          </Link>
        </div>
      </div>
      </div>
    </>
  )
}

/**
 * @function HeroVisual
 * @description 히어로 영역 시각 — 모바일 프레임과 스캔 애니메이션으로 서비스 정체성을 전달합니다.
 */
function HeroVisual() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[320px] aspect-[9/18] rounded-[2.5rem] border-4 border-primary/20 ring-2 ring-primary/15 bg-gradient-to-b from-card to-muted shadow-2xl overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-7 bg-primary/10 flex items-center justify-center">
          <div className="h-1.5 w-16 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="pt-10 px-5 pb-6 flex flex-col h-full">
          <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
            <span>스캔</span>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-4 flex-1 rounded-2xl bg-background border border-border flex flex-col gap-0 overflow-hidden relative scanner-viewfinder">
            <div className="flex-[1.1] flex flex-col items-center justify-center gap-2 py-4 border-b border-border/60">
              <Barcode className="h-12 w-12 text-primary opacity-90" />
              <p className="text-[11px] font-medium text-center px-2">바코드를 프레임에 맞춰 주세요</p>
              <Badge className="bg-success/15 text-success border-0 text-[10px]">라이브 인식 시뮬레이션</Badge>
            </div>
            <div className="grid grid-cols-2 gap-0 min-h-[5.5rem]">
              <div className="flex flex-col items-center justify-center bg-success/20 text-success font-black text-2xl tracking-tighter border-r border-border/50">
                O
                <span className="text-[9px] font-semibold opacity-80 mt-1">햅틱 on</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-destructive/15 text-destructive font-black text-2xl tracking-tighter">
                X
                <span className="text-[9px] font-semibold opacity-80 mt-1">위험 플래시</span>
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-xl bg-primary/5 border border-primary/10 p-3 text-[10px] space-y-1">
            <p className="font-semibold text-foreground">검증 요약</p>
            <p className="text-muted-foreground leading-relaxed">
              프로필 &ldquo;준(우유)&rdquo; 기준 — <span className="text-success font-semibold">섭취 가능</span> (교차오염 문구 확인 권장)
            </p>
          </div>
        </div>
      </div>
      <div className="absolute -z-10 w-[120%] h-[120%] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-secondary/25 blur-3xl opacity-70" />
    </div>
  )
}

/**
 * @function LogoWall
 * @description 파트너·로고 자리 플레이스홀더입니다. 실제 협력처 확보 시 교체합니다.
 */
function LogoWall() {
  const labels = ["대학연구네트워크*", "헬스데이터 채널*", "커머스 API*", "지역 알레르기 협회*", "앱 마켓*"]
  return (
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
      {labels.map((t) => (
        <div
          key={t}
          className="h-12 rounded-lg border border-dashed border-border bg-card/50 flex items-center justify-center px-2"
        >
          <span className="text-[10px] font-medium text-muted-foreground text-center leading-tight">{t}</span>
        </div>
      ))}
      <p className="col-span-full text-[10px] text-center text-muted-foreground mt-2">
        *플레이스홀더. 실제 로고 교체 및 협력 범위는 계약 후 반영 예정입니다.
      </p>
    </div>
  )
}

/**
 * @function WorkflowStrip
 * @description 올인원 워크플로 — 단계를 가로 레일로 표시합니다.
 */
function WorkflowStrip() {
  const steps = [
    { title: "프로필 설정", sub: "가족별 알레르기 기준 저장" },
    { title: "바코드 스캔", sub: "제품 특정·데이터 불러오기" },
    { title: "AI·룰 검증", sub: "성분·리콜·크로스체크" },
    { title: "결론·알림", sub: "O/X 결과·근거·보호자 경보 (SOS 로드맵)" },
  ]
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-0 md:items-stretch">
      {steps.map((s, i) => (
        <div key={s.title} className="flex md:contents flex-col gap-2">
          <Card className="md:flex-1 border-primary/15 bg-card/90">
            <CardContent className="p-4">
              <div className="text-[10px] font-bold text-primary mb-1">STEP {i + 1}</div>
              <p className="font-semibold text-sm">{s.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
            </CardContent>
          </Card>
          {i < steps.length - 1 && (
            <div className="hidden md:flex items-center justify-center w-8 shrink-0">
              <ArrowRight className="h-5 w-5 text-muted-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

/**
 * @function RoiEfficiencyBars
 * @description Before/After를 보조하는 막대 비교로 체감 시간 절약을 한 번 더 시각화합니다.
 */
function RoiEfficiencyBars() {
  return (
    <div className="my-5 rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
      <p className="text-center text-sm font-semibold text-foreground mb-1">의사결정까지 걸리는 시간 (예시)</p>
      <p className="text-center text-[10px] text-muted-foreground mb-6">목표 KPI·내부 가정 포함 — 배포 후 실측으로 교체</p>
      <div className="space-y-5 max-w-lg mx-auto">
        <div>
          <div className="flex justify-between items-baseline text-xs mb-1.5">
            <span className="text-muted-foreground">성분표만 보고 기억·대조할 때*</span>
            <span className="tabular-nums font-semibold text-muted-foreground">~6분 추정</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div className="h-full w-[94%] rounded-full bg-muted-foreground/35" aria-hidden />
          </div>
        </div>
        <div>
          <div className="flex justify-between items-baseline text-xs mb-1.5">
            <span className="text-foreground font-medium">SafeBite 목표 값</span>
            <span className="tabular-nums font-bold text-primary">≤0.5초*</span>
          </div>
          <div className="h-3 rounded-full bg-muted overflow-hidden">
            <div className="h-full w-[8%] min-w-[2rem] rounded-full bg-primary shadow-sm" aria-hidden />
          </div>
        </div>
      </div>
      <p className="text-[10px] text-muted-foreground text-center mt-4">*가정 시간 **0.5초는 JTBD 목표 KPI(설계)·실측은 배포 후</p>
    </div>
  )
}

/**
 * @function SafetyTable
 * @description 일반 대화형 AI와의 비교로 안전·검증 관점을 강조합니다.
 */
function SafetyTable() {
  const rows = [
    { feature: "제품·배치 단위 맥락 유지", gen: false, sb: true },
    { feature: "가족 프로필 기반 개별 판정", gen: false, sb: true },
    { feature: "리콜·경고 데이터 연동 설계", gen: "부분", sb: true },
    { feature: "추측성 답변 차단(가드레일)", gen: false, sb: "설계 목표" },
    { feature: "응급 시 119·보호자·교사 연동 로드맵", gen: false, sb: "로드맵" },
  ]
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-center mb-2">일반 챗형 AI와 무엇이 다른가요?</h3>
      <p className="text-center text-sm text-muted-foreground mb-6">
        환각·추측 응답을 줄이기 위해 스키마·가드레일을 두고,
        제품 SKU와 가족 프로필이 맞물린 <strong className="text-foreground">의사결정 구조</strong>를 우선합니다.
      </p>
      <div className="rounded-xl border border-border overflow-hidden bg-card shadow-sm overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50 hover:bg-muted/50">
              <TableHead className="min-w-[180px]">비교 항목</TableHead>
              <TableHead className="text-center min-w-[100px]">범용 AI 챗형</TableHead>
              <TableHead className="text-center min-w-[100px] text-primary font-bold">SafeBite</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.map((r) => (
              <TableRow key={r.feature}>
                <TableCell className="font-medium text-sm">{r.feature}</TableCell>
                <TableCell className="text-center">
                  {r.gen === false ? <X className="h-4 w-4 text-destructive mx-auto" /> : <span className="text-xs">{String(r.gen)}</span>}
                </TableCell>
                <TableCell className="text-center">
                  {r.sb === true ? (
                    <Check className="h-4 w-4 text-success mx-auto" />
                  ) : (
                    <span className="text-xs text-primary font-medium">{String(r.sb)}</span>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

/**
 * @function ExpertProof
 * @description 권위·전문성 소셜 프루프(플레이스홀더). 실제 인용으로 교체 필요합니다.
 */
function ExpertProof() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg md:text-xl font-bold text-center">전문가 코멘트 (예시)</h3>
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-muted/30 border-border/80">
          <CardContent className="p-5 space-y-3">
            <p className="text-sm leading-relaxed text-foreground/90">
              &ldquo;성분표를 읽는 것만으로는 부족합니다. 가족별로 금지 식품이 다를 때, 동일한 라벨이라도 판단이 달라져야 합니다.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground">
              — 가상의 임상영양 전문가 코멘트 (실명·소속은 추후 자문 계약 시 기재)
            </p>
          </CardContent>
        </Card>
        <Card className="bg-muted/30 border-border/80">
          <CardContent className="p-5 space-y-3">
            <p className="text-sm leading-relaxed text-foreground/90">
              &ldquo;리콜과 크로스오염 문구는 스캔 후에도 한 번 더 확인하는 인터페이스가 안전 사고를 줄입니다.&rdquo;
            </p>
            <p className="text-xs text-muted-foreground">
              — 가상의 소아 알레르기 자문 문구 (역할 표기용)
            </p>
          </CardContent>
        </Card>
      </div>
      <HardFactsMini />
      <DarkSpecRail />
      <OutcomeGallery />
    </div>
  )
}

/**
 * @function OutcomeGallery
 * @description 결과 화면·검증 요약을 암시하는 C유형 결과 갤러리(와이어프레임 플레이스홀더)입니다.
 */
function OutcomeGallery() {
  const items = [
    { title: "섭취 가능", tone: "bg-success/15 text-success border-success/30" },
    { title: "주의 · 교차오염 문구", tone: "bg-caution/15 text-caution border-caution/30" },
    { title: "섭취 불가", tone: "bg-destructive/10 text-destructive border-destructive/30" },
  ]
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-center mb-2">결과 요약 예시 (UI 와이어)</h3>
      <p className="text-center text-sm text-muted-foreground mb-6">
        실제 앱에서 스캔 후 보게 되는 화면 형태 예시입니다. `/home`에서 이어지는 플로우를 상상할 수 있습니다.
      </p>
      <div className="grid sm:grid-cols-3 gap-4">
        {items.map((it) => (
          <Card key={it.title} className={`border ${it.tone} overflow-hidden`}>
            <CardContent className="p-0">
              <div className="h-28 bg-muted/60 flex items-center justify-center border-b border-border/50">
                <Smartphone className="h-10 w-10 opacity-40" />
              </div>
              <div className="p-4 space-y-1">
                <p className="text-xs font-bold">{it.title}</p>
                <p className="text-[10px] text-muted-foreground leading-snug">
                  근거 요약 · 주의 라벨 · 근처 대체 제품 제안 등 확장 가능
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

/**
 * @function DarkSpecRail
 * @description B유형 DX 톤 — 다크 카드에 목표 지연·모델 라인 등 하드 팩트를 모노 스페이스로 표시합니다.
 */
function DarkSpecRail() {
  const lines = [
    { k: "ux.scan_target", v: "≤ 0.5s O/X (제품 목표)" },
    { k: "target.p95", v: "< 1.2s (클라이언트까지)" },
    { k: "pipeline", v: "structured_output + Zod" },
  ]
  return (
    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 shadow-inner">
      <div className="flex items-center gap-2 px-4 py-2 border-b border-slate-800 bg-slate-900/80">
        <Zap className="h-4 w-4 text-amber-400" />
        <span className="text-[11px] font-mono text-slate-400">spec.hardfacts · dev preview</span>
      </div>
      <div className="p-4 grid sm:grid-cols-3 gap-4 font-mono text-[11px] sm:text-xs">
        {lines.map((l) => (
          <div key={l.k} className="space-y-1">
            <p className="text-slate-500">{l.k}</p>
            <p className="text-emerald-400/95 leading-snug">{l.v}</p>
          </div>
        ))}
      </div>
      <p className="px-4 pb-3 text-[10px] text-slate-500 font-sans">
        개발 리뷰용 스펙 박스입니다. 벤치마크 숫자는 QA·실측 후 갱신하세요.
      </p>
    </div>
  )
}

/**
 * @function HardFactsMini
 * @description 스펙·수치 블록 (B유형 요소 보완) — 과장 없이 검증 가능한 지표 형태를 제시합니다.
 */
function HardFactsMini() {
  const items = [
    { label: "스택", value: "Next.js 15 · React 19" },
    { label: "판정 파이프라인", value: "Genkit + 스키마 검증 (Zod)" },
    { label: "목표 응답 구성", value: "결론 → 근거 → 주의사항 순" },
  ]
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <div className="flex items-center gap-2 mb-4">
        <Smartphone className="h-5 w-5 text-primary" />
        <p className="font-semibold text-sm">기술·구성 하이라이트</p>
      </div>
      <ul className="grid sm:grid-cols-3 gap-4 text-sm">
        {items.map((it) => (
          <li key={it.label} className="space-y-1">
            <p className="text-[10px] uppercase tracking-wide text-muted-foreground font-semibold">{it.label}</p>
            <p className="font-medium leading-snug">{it.value}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
