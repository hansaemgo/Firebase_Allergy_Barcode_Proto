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
      <header className="p-8 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-3">
            <ShieldAlert className="h-8 w-8 text-primary" /> 관리자 커맨드 센터
          </h1>
          <p className="text-muted-foreground">데이터 무결성 및 안전 보고서 관리.</p>
        </div>
        <div className="flex items-center gap-2">
           <div className="relative">
             <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
             <Input className="pl-10 w-64 bg-white" placeholder="마스터 데이터베이스 검색..." />
           </div>
           <Button variant="outline">로그 내보내기</Button>
        </div>
      </header>

      <div className="p-8 grid md:grid-cols-3 gap-6">
        {/* Stats Section */}
        <Card className="bg-primary text-white border-none">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <Clock className="h-10 w-10 mb-2 opacity-80" />
            <h3 className="text-3xl font-bold">24</h3>
            <p className="text-sm opacity-80">대기 중인 보고서</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <CheckCircle2 className="h-10 w-10 mb-2 text-success" />
            <h3 className="text-3xl font-bold">1,245</h3>
            <p className="text-sm text-muted-foreground">검증된 제품</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 flex flex-col items-center text-center">
            <BarChart3 className="h-10 w-10 mb-2 text-secondary" />
            <h3 className="text-3xl font-bold">99.8%</h3>
            <p className="text-sm text-muted-foreground">데이터 정확도</p>
          </CardContent>
        </Card>

        {/* Verification Queue */}
        <Card className="md:col-span-2">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>검증 대기열</CardTitle>
              <Badge variant="outline">조치 필요</Badge>
            </div>
            <CardDescription>검토 대기 중인 사용자 보고 성분 불일치 항목입니다.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <QueueItem 
              product="골드피쉬 크래커" 
              report="대두 레시틴 플래그 누락" 
              user="user_883" 
              time="12분 전"
              urgency="high"
            />
            <QueueItem 
              product="오트밀크 플러스" 
              report="바코드 불일치: 무가당 버전" 
              user="provider_class_b" 
              time="45분 전"
              urgency="medium"
            />
            <QueueItem 
              product="비건 단백질 바" 
              report="계란 흔적 성분 확인 요청" 
              user="parent_12" 
              time="2시간 전"
              urgency="low"
            />
          </CardContent>
        </Card>

        {/* Master Database Status */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" /> 마스터 DB
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
             <div className="flex justify-between items-center text-sm border-b pb-2">
               <span>총 알레르기 유발원</span>
               <span className="font-bold">45</span>
             </div>
             <div className="flex justify-between items-center text-sm border-b pb-2">
               <span>교차 오염 플래그</span>
               <span className="font-bold">1,204</span>
             </div>
             <div className="flex justify-between items-center text-sm border-b pb-2 text-destructive">
               <span>제조사 리콜</span>
               <span className="font-bold">3개 활성</span>
             </div>
             <Button className="w-full bg-secondary text-primary font-bold mt-4">마스터 리스트 관리</Button>
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
    <div className={`flex items-center justify-between p-4 border rounded-xl border-l-4 ${urgencyColors[urgency]}`}>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-sm">{product}</h4>
          <span className="text-[10px] text-muted-foreground">• {time}</span>
        </div>
        <p className="text-xs text-muted-foreground">{report}</p>
        <p className="text-[10px] font-medium uppercase tracking-tighter text-primary">보고자: {user}</p>
      </div>
      <div className="flex gap-2">
        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-success hover:bg-success/10">
          <CheckCircle2 className="h-5 w-5" />
        </Button>
        <Button size="icon" variant="ghost" className="h-8 w-8 rounded-full text-destructive hover:bg-destructive/10">
          <XCircle className="h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}
