// 파일명: src/app/home/page.tsx
/**
 * @overview 메인 대시보드 화면. 앱의 진입점으로서 스캔, 프로필 요약, 알림 현황 등 주요 정보를 제공합니다.
 * 랜딩에서 `?cta=` 딥링크 시 우선 순위 안내 리본을 표시합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppNav } from "@/components/app-nav"
import { Scan, Users, User, AlertTriangle, ShieldCheck, ChevronRight, X } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

type HomePageProps = {
  searchParams?: Promise<{ cta?: string }>
}

/**
 * @function Home
 * @description 홈 페이지 메인 컴포넌트. 스캔 시작, 활성 프로필 목록, 최근 안전 알림 및 검증 내역을 렌더링합니다.
 */
export default async function Home(props: HomePageProps) {
  const searchParams = props.searchParams
  const sp = searchParams ? await searchParams : {}
  const cta = typeof sp.cta === "string" ? sp.cta : undefined

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <LandingIntentRibbon cta={cta} />

      <header className="pt-6 px-6 pb-10 bg-primary text-white flex justify-between items-center rounded-b-[2rem] shadow-lg">
        <div>
          <h1 className="text-xl font-bold tracking-tight">SafeBite</h1>
          <p className="text-[10px] opacity-80 font-medium">Safe choices for your loved ones.</p>
        </div>
        <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>
      </header>

      <div className="px-6 -mt-4">
        <Link href="/scan">
          <Card className="bg-secondary border-none shadow-xl hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="w-full bg-white/20 p-8 flex flex-col items-center text-primary">
                <Scan className="h-14 w-14 mb-4" />
                <h2 className="text-base font-bold truncate">즉석 안전 스캔</h2>
                <p className="text-[10px] font-medium opacity-80 text-center truncate">제품 라벨이나 바코드를 스캔하세요</p>
              </div>
              <div className="w-full bg-primary/10 p-4 text-center text-primary font-bold text-sm">
                탭하여 스캔 시작
              </div>
            </CardContent>
          </Card>
        </Link>

        <section className="mt-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <Users className="h-4 w-4 text-primary" /> 활성 프로필
            </h3>
            <Link href="/profiles" className="text-xs text-primary font-semibold flex items-center">
              관리 <ChevronRight className="h-3 w-3" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <ProfileCard name="준 (아들)" allergens={["우유", "땅콩"]} color="bg-blue-100" />
            <ProfileCard name="사라" allergens={["글루텐", "대두"]} color="bg-pink-100" />
          </div>
        </section>

        <section className="mt-10">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-sm font-bold flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-destructive" /> 안전 알림
            </h3>
          </div>
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-4 flex gap-3">
              <div className="bg-destructive/10 p-2 rounded-lg h-fit">
                <AlertTriangle className="h-4 w-4 text-destructive" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-xs truncate">제품 리콜: 오트밀크 플러스</h4>
                <p className="text-[10px] text-muted-foreground mt-1 line-clamp-2">배치 #4459에서 미표기 대두 성분 발견. 사라 프로필 관련 항목.</p>
                <Link href="/alerts" className="text-[10px] text-primary font-bold mt-2 block">상세 보기</Link>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mt-10">
          <h3 className="text-sm font-bold mb-3">최근 검증 내역</h3>
          <div className="space-y-2">
            <RecentScanItem name="네이처 밸리 그래놀라" date="오늘, 오후 2:30" status="danger" />
            <RecentScanItem name="그릭 요거트" date="오늘, 오전 10:15" status="success" />
            <RecentScanItem name="통밀 식빵" date="어제" status="caution" />
          </div>
        </section>
      </div>

      <AppNav />
    </div>
  )
}

/**
 * @function LandingIntentRibbon
 * @description 랜딩에서 삼중 CTA로 유입된 경우 후속 폼·운영 도구 연결 전까지 인지 플래그를 보여 줍니다.
 * @param {string | undefined} props.cta - beta, notify, b2b, start
 */
function LandingIntentRibbon({ cta }: { cta?: string }) {
  const copy: Record<string, { badge: string; title: string; body: string }> = {
    beta: {
      badge: "베타 우선 순위",
      title: "스캔 베타 사전 예약 루트로 들어왔습니다.",
      body: "정식 접수 폼 연동 전까지는 이 상태를 내부 추적 예시로만 봅니다. 스캔은 아래 카드부터 바로 이어 가세요.",
    },
    notify: {
      badge: "출시 알림",
      title: "출시·리콜 알림 신청 경로입니다.",
      body: "푸시/이메일 백엔드 연결 시 이 깃발로 세그먼트를 매칭할 수 있습니다.",
    },
    b2b: {
      badge: "B2B",
      title: "기관·급식 대기 리스트 경로입니다.",
      body: "원장·영양 교사 담당자에게 세일즈 콜·파일럿 제안 시 참고 라벨로 쓸 수 있습니다.",
    },
    start: {
      badge: "시작",
      title: "랜딩에서 바로 시작을 눌렀습니다.",
      body: "전환 깊이 분석 시 기준 라인입니다.",
    },
  }
  const item = cta ? copy[cta] : undefined
  if (!item) return null
  return (
    <Card className="mx-6 mt-4 border-primary/35 bg-secondary/80 shadow-none">
      <CardContent className="p-3 flex gap-2 items-start">
        <Badge variant="secondary" className="mt-0.5 shrink-0 text-[10px]">
          {item.badge}
        </Badge>
        <div className="min-w-0 flex-1 space-y-1">
          <p className="text-xs font-bold leading-tight">{item.title}</p>
          <p className="text-[10px] text-muted-foreground leading-snug">{item.body}</p>
          <div className="flex justify-end pt-1">
            <Button asChild variant="ghost" size="sm" className="h-7 px-2 text-[10px]">
              <Link href="/home" prefetch={false}>
                <X className="h-3 w-3 mr-1 inline" aria-hidden /> 배너 닫기(쿼리 제거)
              </Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * @function ProfileCard
 * @description 홈 화면에서 표시되는 개별 사용자의 알레르기 프로필 요약 카드입니다.
 * @param {string} name - 프로필 소유자 이름
 * @param {string[]} allergens - 보유한 알레르기 유발 물질 목록
 * @param {string} color - 카드 배경 색상 (Tailwind 클래스)
 */
function ProfileCard({ name, allergens, color }: { name: string; allergens: string[]; color: string }) {
  return (
    <Card className={cn(color, "border-none shadow-sm")}>
      <CardContent className="p-3">
        <div className="flex items-center gap-2 mb-2">
          <div className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-primary">
            <User className="h-4 w-4" />
          </div>
          <h4 className="font-bold text-xs truncate">{name}</h4>
        </div>
        <div className="flex flex-wrap gap-1">
          {allergens.map(a => (
            <Badge key={a} variant="outline" className="bg-white/50 border-none text-[9px] px-1 py-0">
              {a}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

/**
 * @function RecentScanItem
 * @description 홈 화면의 최근 검증 내역 리스트 항목을 렌더링합니다.
 * @param {string} name - 스캔한 제품명
 * @param {string} date - 스캔 일시
 * @param {'success' | 'danger' | 'caution'} status - 제품의 안전 상태 (아이콘 및 색상 결정)
 */
function RecentScanItem({ name, date, status }: { name: string; date: string; status: 'success' | 'danger' | 'caution' }) {
  const statusColors = {
    success: 'text-success bg-success/10',
    danger: 'text-danger bg-danger/10',
    caution: 'text-caution bg-caution/10'
  }
  const StatusIcon = status === 'success' ? ShieldCheck : status === 'danger' ? AlertTriangle : AlertTriangle

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-border">
      <div className="flex items-center gap-3 min-w-0">
        <div className={cn("p-2 rounded-lg shrink-0", statusColors[status])}>
          <StatusIcon className="h-4 w-4" />
        </div>
        <div className="min-w-0">
          <h4 className="font-bold text-xs truncate">{name}</h4>
          <p className="text-[10px] text-muted-foreground">{date}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground shrink-0" />
    </div>
  )
}
