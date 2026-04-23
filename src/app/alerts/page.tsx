import { AppNav } from "@/components/app-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Info, Bell, ChevronRight, Share2, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AlertsPage() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <header className="p-8 pb-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">안전 알림</h1>
          <p className="text-muted-foreground font-medium">리콜 및 커뮤니티 보고서.</p>
        </div>
        <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary relative">
          <Bell className="h-6 w-6" />
          <span className="absolute -top-1 -right-1 h-4 w-4 bg-destructive border-2 border-white rounded-full" />
        </div>
      </header>

      <div className="p-6 space-y-6">
        {/* Urgent Recall */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-destructive font-bold text-sm uppercase tracking-wider">
            <AlertTriangle className="h-4 w-4" /> 긴급 제조사 리콜
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
        <section className="space-y-3 mt-8">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
            <Info className="h-4 w-4" /> 커뮤니티 안전 정보
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
        <Button variant="outline" className="w-full h-12 border-dashed border-2">
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
        <div className="flex justify-between items-start">
          <div className="space-y-1">
             <h4 className="font-bold text-base leading-tight">{title}</h4>
             <div className="flex items-center gap-2 text-[10px] opacity-70">
               <Calendar className="h-3 w-3" /> {date}
             </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8 -mt-2 -mr-2">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-foreground/80 leading-relaxed">{description}</p>
        <div className="pt-2 flex justify-between items-center border-t border-black/5">
          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${impact.includes('영향') ? 'bg-destructive/10 text-destructive border-destructive/20' : ''}`}>
            {impact}
          </Badge>
          <Button variant="link" size="sm" className="h-6 text-[10px] font-bold p-0">
            상세 보기 <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
