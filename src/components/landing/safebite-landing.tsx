// 파일명: src/components/landing/safebite-landing.tsx
/**
 * @overview SafeBite 마케팅 랜딩 페이지. 서비스 소개, 신뢰 요소, 반복 CTA로 `/home` 앱으로 유도합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import Link from "next/link"
import {
  ArrowRight,
  Barcode,
  Check,
  Cpu,
  Flame,
  Layers,
  ShieldCheck,
  Smartphone,
  Sparkles,
  X,
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

/**
 * @function primaryCtaClasses
 * @description 랜딩 전역에서 사용하는 기본 CTA 버튼 스타일을 반환합니다.
 */
function primaryCtaClasses(extra = "") {
  return `${extra} font-semibold shadow-md bg-primary text-primary-foreground hover:bg-primary/90`
}

/**
 * @function SafebiteLanding
 * @description 공통 코어(히어로·CTA·신뢰·가치)와 A·C 혼합 선택 요소를 포함한 단일 스크롤 랜딩 UI.
 */
export function SafebiteLanding() {
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between gap-4">
          <Link href="/" className="font-bold text-lg tracking-tight text-primary shrink-0">
            SafeBite
          </Link>
            <nav className="flex items-center gap-2 sm:gap-3">
            <Button asChild size="sm" className={primaryCtaClasses("text-xs px-3 sm:text-sm sm:px-4")}>
              <Link href={CTA_HREF}>{CTA_LABEL}</Link>
            </Button>
          </nav>
        </div>
      </header>

      <section className="relative px-4 sm:px-6 pt-10 pb-16 md:pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary/15 via-transparent to-transparent pointer-events-none" />
        <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="space-y-6">
            <Badge variant="secondary" className="text-[11px] font-semibold">
              식품 알레르기 · 바코드 안전 검증
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-balance">
              한 번의 스캔으로, 가족의 식탁을 안심으로 바꿉니다
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              바코드와 성분 정보를 읽고, 가족 프로필에 맞춰 <strong className="text-foreground font-semibold">섭취 가능 여부를 검증</strong>합니다.
              추측이 아닌 근거와 함께 결론을 제시합니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button asChild size="lg" className={primaryCtaClasses("w-full sm:w-auto text-base px-8")}>
                <Link href={CTA_HREF}>
                  {CTA_LABEL}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                약 60초 이내 · 별도 가입 단계 최소화(앱 버전별 상이할 수 있음)
              </p>
            </div>
          </div>
          <HeroVisual />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-14 border-t border-border/60 bg-muted/30">
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
              <p className="text-3xl sm:text-4xl font-bold text-primary tabular-nums">30초</p>
              <p className="text-sm text-muted-foreground mt-1">평균 결과 확인 시간**</p>
            </div>
          </div>
          <p className="text-[10px] text-muted-foreground text-center mt-6 max-w-2xl mx-auto leading-relaxed">
            *향후 실제 이용 지표 연동 예정입니다. 현재 문구는 기획용 목표 예시입니다. **내부 프로토 타입 테스트 기준.
          </p>
          <Separator className="my-12 max-w-4xl mx-auto" />
          <p className="text-center text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            함께하는 기관 및 협력 논의
          </p>
          <LogoWall />
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">왜 SafeBite인가</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            기능 나열이 아니라, 식탁 앞에서의 <strong className="text-foreground">불안을 줄이는 혜택</strong>에 집중했습니다.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">실수 없는 판단을 돕기</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  바코드·라벨 정보를 바탕으로 알레르기 유발 요소를 놓치지 않도록 구조화된 검증 흐름을 제공합니다.
                </p>
              </CardContent>
            </Card>
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">가족만의 기준을 한곳에</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  아이, 부모님 프로필을 나눠 두고 동일한 제품이라도 <strong className="text-foreground">사람마다 다른 결론</strong>을 확인할 수 있습니다.
                </p>
              </CardContent>
            </Card>
            <Card variant="default" className="border-border/80 shadow-sm">
              <CardContent className="p-6 space-y-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Flame className="h-5 w-5" />
                </div>
                <h3 className="font-bold text-lg">리콜·위험 신호를 놓치지 않기</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  최신 알림과 최근 검증 이력을 한 화면에서 모아, &ldquo;어제 괜찮았는데&rdquo; 하는 순간을 줄입니다.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild size="lg" className={primaryCtaClasses("px-10")}>
              <Link href={CTA_HREF}>
                {CTA_LABEL}
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
            입력–출력 관점으로 핵심 경로만 보여 드립니다. (C 유형 보완)
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
                  동일 제품도 프로필별로 다르게 요약 (목표 평균 30초 이내 결과 화면)**
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">처음부터 끝까지, 한 줄기의 워크플로</h2>
            <p className="text-center text-muted-foreground mb-10">
              검색부터 스캔·검증·알림까지 이어지는 경로입니다. (A 유형 워크플로우 시각화)
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
            <Link href={CTA_HREF}>
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
            <Link href={CTA_HREF}>{CTA_LABEL}</Link>
          </Button>
        </div>
      </footer>
    </div>
  )
}

/**
 * @function HeroVisual
 * @description 히어로 영역 시각 — 모바일 프레임과 스캔 애니메이션으로 서비스 정체성을 전달합니다.
 */
function HeroVisual() {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <div className="relative w-full max-w-[320px] aspect-[9/18] rounded-[2.5rem] border-4 border-primary/20 bg-gradient-to-b from-card to-muted shadow-2xl overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-7 bg-primary/10 flex items-center justify-center">
          <div className="h-1.5 w-16 rounded-full bg-muted-foreground/30" />
        </div>
        <div className="pt-10 px-5 pb-6 flex flex-col h-full">
          <div className="flex items-center justify-between text-[10px] font-semibold text-muted-foreground">
            <span>스캔</span>
            <ShieldCheck className="h-4 w-4 text-primary" />
          </div>
          <div className="mt-4 flex-1 rounded-2xl bg-background border border-border flex flex-col items-center justify-center gap-3 relative scanner-viewfinder">
            <Barcode className="h-14 w-14 text-primary opacity-90" />
            <p className="text-xs font-medium text-center px-2">바코드를 프레임에 맞춰 주세요</p>
            <Badge className="bg-success/15 text-success border-0 text-[10px]">라이브 인식 시뮬레이션</Badge>
          </div>
          <div className="mt-4 rounded-xl bg-primary/5 border border-primary/10 p-3 text-[10px] space-y-1">
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
 * @description A타입 올인원 워크플로 — 단계를 가로 레일로 표시합니다.
 */
function WorkflowStrip() {
  const steps = [
    { title: "프로필 설정", sub: "가족별 알레르기 기준 저장" },
    { title: "바코드 스캔", sub: "제품 특정·데이터 불러오기" },
    { title: "AI·룰 검증", sub: "성분·리콜·크로스체크" },
    { title: "결론·근거", sub: "대시보드·알림에 기록" },
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
 * @function SafetyTable
 * @description 일반 대화형 AI와의 비교로 안전·검증 관점을 강조합니다. (A 유형 안전 장치)
 */
function SafetyTable() {
  const rows = [
    { feature: "제품·배치 단위 맥락 유지", gen: false, sb: true },
    { feature: "가족 프로필 기반 개별 판정", gen: false, sb: true },
    { feature: "리콜·경고 데이터 연동 설계", gen: "부분", sb: true },
    { feature: "추측성 답변 차단(가드레일)", gen: false, sb: "설계 목표" },
  ]
  return (
    <div>
      <h3 className="text-lg md:text-xl font-bold text-center mb-2">일반 챗형 AI와 무엇이 다른가요?</h3>
      <p className="text-center text-sm text-muted-foreground mb-6">
        추상적인 정확도가 아니라, <strong className="text-foreground">의사결정에 필요한 구조</strong>를 목표로 합니다.
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
        실제 앱은 `/home` 이후 스캔/결과 화면에서 확인합니다. 아래는 기획용 샘플입니다. (C 유형 결과 갤러리)
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
