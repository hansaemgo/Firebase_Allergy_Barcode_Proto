
import { AppNav } from "@/components/app-nav"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Search, 
  Database,
  BarChart3,
  MessageSquareWarning,
  ExternalLink
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-background pb-20">
      <header className="p-6 pb-4 space-y-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <ShieldAlert className="h-6 w-6 text-primary shrink-0" />
            <div className="min-w-0">
              <h1 className="text-xl font-bold truncate leading-tight">Admin Command Center</h1>
              <p className="text-[10px] text-muted-foreground truncate">Manage data integrity and safety reports.</p>
            </div>
          </div>
          <Button variant="outline" size="sm" className="shrink-0 h-8 text-xs px-2">내보내기</Button>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10 h-9 bg-white text-sm" placeholder="데이터베이스 검색..." />
        </div>
      </header>

      <div className="p-6 grid grid-cols-3 gap-3">
        {/* Stats Section */}
        <Card className="bg-primary text-white border-none shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Clock className="h-6 w-6 mb-1 opacity-80" />
            <h3 className="text-xl font-bold">24</h3>
            <p className="text-[10px] opacity-80">대기 중</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <CheckCircle2 className="h-6 w-6 mb-1 text-success" />
            <h3 className="text-xl font-bold">1,245</h3>
            <p className="text-[10px] text-muted-foreground">검증됨</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <BarChart3 className="h-6 w-6 mb-1 text-secondary" />
            <h3 className="text-xl font-bold">99.8%</h3>
            <p className="text-[10px] text-muted-foreground">정확도</p>
          </CardContent>
        </Card>

        {/* Verification Queue */}
        <Card className="col-span-3">
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base">검증 대기열</CardTitle>
              <Badge variant="outline" className="text-[10px] h-5">조치 필요</Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-3">
            <QueueItem 
              product="골드피쉬 크래커" 
              report="대두 레시틴 플래그 누락" 
              user="user_883" 
              time="12분 전"
              urgency="high"
            />
            <QueueItem 
              product="오트밀크 플러스" 
              report="바코드 불일치" 
              user="provider_b" 
              time="45분 전"
              urgency="medium"
            />
          </CardContent>
        </Card>

        {/* Master Database Status */}
        <Card className="col-span-3">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base flex items-center gap-2">
              <Database className="h-4 w-4 text-primary" /> 마스터 DB 상태
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2">
             <div className="flex justify-between items-center text-xs border-b pb-2">
               <span>총 알레르기 유발원</span>
               <span className="font-bold">45</span>
             </div>
             <div className="flex justify-between items-center text-xs border-b pb-2 text-destructive">
               <span>제조사 리콜</span>
               <span className="font-bold">3개 활성</span>
             </div>
             <Button className="w-full h-9 bg-secondary text-primary font-bold text-xs mt-2">DB 관리</Button>
          </CardContent>
        </Card>
      </div>

      <AppNav />
    </div>
  )
}

function QueueItem({ product, report, user, time, urgency }: { product: string; report: string; user: string; time: string; urgency: 'high' | 'medium' | 'low' }) {
  const urgencyColors = {
    high: 'border-l-destructive bg-destructive/5',
    medium: 'border-l-caution bg-caution/5',
    low: 'border-l-primary bg-primary/5'
  }

  return (
    <div className={`flex items-center justify-between p-3 border rounded-xl border-l-4 ${urgencyColors[urgency]}`}>
      <div className="space-y-0.5 overflow-hidden">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-xs truncate">{product}</h4>
          <span className="text-[9px] text-muted-foreground shrink-0">{time}</span>
        </div>
        <p className="text-[10px] text-muted-foreground truncate">{report}</p>
        <p className="text-[9px] font-medium uppercase text-primary">보고자: {user}</p>
      </div>
      <div className="flex gap-1 shrink-0 ml-2">
        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full text-success">
          <CheckCircle2 className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full text-destructive">
          <XCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
