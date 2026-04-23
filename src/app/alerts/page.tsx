import { AppNav } from "@/components/app-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Bell, ChevronRight, Share2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlertsPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <header className="p-6 pb-4 flex justify-between items-center">
        <div className="overflow-hidden">
          <h1 className="text-xl font-bold tracking-tight truncate">안전 알림</h1>
          <p className="text-[10px] text-muted-foreground font-medium truncate">리콜 및 커뮤니티 보고서.</p>
        </div>
        <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary relative shrink-0">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-3.5 w-3.5 bg-destructive border-2 border-white rounded-full" />
        </div>
      </header>

      <div className="px-6 space-y-6">
        {/* Urgent Recall */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-destructive font-bold text-xs uppercase tracking-wider">
            <AlertTriangle className="h-3.5 w-3.5" /> 긴급 제조사 리콜
          </div>
          <AlertCard 
            title="오트밀크 플러스 (대두 성분 혼입)"
            description="배치 #4400 ~ #4500 해당. 제조 공정 중 4번 라인에서 교차 오염 확인됨."
            date="2시간 전"
            impact="사라 프로필에 영향"
            type="recall"
          />
        </section>

        {/* Community Reports */}
        <section className="space-y-3 mt-6">
          <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
            <Info className="h-3.5 w-3.5" /> 커뮤니티 안전 정보
          </div>
          <AlertCard 
            title="네이처 밸리 팩토리 공지"
            description="지역 보육시설에서 개별 포장 팩에 기재되지 않은 아몬드 흔적 발견 보고."
            date="오늘, 오전 9:15"
            impact="준 (아들) 프로필에 영향"
            type="community"
          />
          <AlertCard 
            title="통밀 식빵 레시피 변경"
            description="레시피 변경: 이제 참깨 성분을 포함합니다. 일부 지역 라벨 업데이트 대기 중."
            date="어제"
            impact="해당하는 프로필 없음"
            type="update"
          />
        </section>

        {/* Subscription Manage */}
        <Button variant="outline" className="w-full h-11 border-dashed border-2 text-sm font-bold">
          알림 설정 관리
        </Button>
      </div>

      <AppNav />
    </div>
  )
}

function AlertCard({ title, description, date, impact, type }: { title: string; description: string; date: string; impact: string; type: 'recall' | 'community' | 'update' }) {
  const colors = {
    recall: 'bg-destructive/10 border-destructive text-destructive',
    community: 'bg-primary/10 border-primary text-primary',
    update: 'bg-muted border-border text-muted-foreground'
  }

  return (
    <Card className={`border-l-4 shadow-sm ${colors[type].split(' ')[0]} ${colors[type].split(' ')[1]}`}>
      <CardContent className="p-4 space-y-3">
        <div className="flex justify-between items-start gap-2">
          <div className="space-y-0.5 overflow-hidden">
             <h4 className="font-bold text-sm leading-tight truncate">{title}</h4>
             <div className="flex items-center gap-1 text-[9px] opacity-70">
               <Calendar className="h-2.5 w-2.5" /> {date}
             </div>
          </div>
          <Button variant="ghost" size="icon" className="h-7 w-7 -mt-1 -mr-1 shrink-0">
            <Share2 className="h-3.5 w-3.5" />
          </Button>
        </div>
        <p className="text-[11px] text-foreground/80 leading-relaxed line-clamp-2">{description}</p>
        <div className="pt-2 flex justify-between items-center border-t border-black/5">
          <Badge variant="outline" className={`text-[9px] px-1.5 py-0 ${impact.includes('영향') ? 'bg-destructive/10 text-destructive border-destructive/20' : ''}`}>
            {impact}
          </Badge>
          <Button variant="link" size="sm" className="h-5 text-[9px] font-bold p-0">
            상세 보기 <ChevronRight className="ml-1 h-2.5 w-2.5" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
