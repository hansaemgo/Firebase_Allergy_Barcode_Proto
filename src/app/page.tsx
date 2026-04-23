import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppNav } from "@/components/app-nav"
import { Scan, Users, User, AlertTriangle, ShieldCheck, ChevronRight } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <header className="pt-6 px-6 pb-9 bg-primary text-white flex justify-between items-center rounded-b-[2rem] shadow-lg">
        <div>
          <h1 className="text-xl font-bold tracking-tight">SafeBite</h1>
          <p className="text-[10px] opacity-80 font-medium">Safe choices for your loved ones.</p>
        </div>
        <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>
      </header>

      <div className="px-6 -mt-[19px]">
        <Link href="/scan">
          <Card className="bg-secondary border-none shadow-xl hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="w-full bg-white/20 p-6 flex flex-col items-center text-primary">
                <Scan className="h-14 w-14 mb-4" />
                <h2 className="text-lg font-bold truncate">즉석 안전 스캔</h2>
                <p className="text-[10px] font-medium opacity-80 text-center truncate">제품 라벨이나 바코드를 스캔하세요</p>
              </div>
              <div className="w-full bg-primary/10 p-4 text-center text-primary font-bold text-sm">
                탭하여 스캔 시작
              </div>
            </CardContent>
          </Card>
        </Link>

        <section className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold flex items-center gap-2">
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

        <section className="mt-8">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-base font-bold flex items-center gap-2">
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

        <section className="mt-8">
          <h3 className="text-base font-bold mb-3">최근 검증 내역</h3>
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
