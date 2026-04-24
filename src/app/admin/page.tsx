"use client"
// 파일명: src/app/admin/page.tsx
/**
 * @overview 관리자 커맨드 센터 화면. 데이터 무결성 검증 대기열, 마스터 DB 상태, 시스템 통계를 제공합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */

import { useState } from "react"
import { AppNav } from "@/components/app-nav"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  RefreshCw
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

/**
 * @function AdminPage
 * @description 관리자 대시보드 컴포넌트. 실시간 데이터베이스 현황 및 리포트 처리 상태를 표시합니다.
 */
export default function AdminPage() {
  const [stats, setStats] = useState({
    pending: 24,
    verified: 1245,
    accuracy: 99.8,
  })
  const [isRefreshing, setIsRefreshing] = useState(false)

  const handleRefresh = () => {
    setIsRefreshing(true)
    setTimeout(() => {
      setStats({
        pending: Math.floor(Math.random() * 50),
        verified: stats.verified + Math.floor(Math.random() * 15),
        accuracy: +(99 + Math.random()).toFixed(1),
      })
      setIsRefreshing(false)
    }, 800)
  }

  return (
    <div className="max-w-4xl mx-auto min-h-screen bg-background pb-20">
      <header className="p-6 pb-4 space-y-3">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden">
            <ShieldAlert className="h-6 w-6 text-primary shrink-0" />
            <div className="min-w-0">
              <h1 className="text-xl font-bold truncate leading-tight">Admin Command Center</h1>
              <p className="text-[10px] text-muted-foreground truncate font-medium uppercase tracking-wider">Manage data integrity and safety reports.</p>
            </div>
          </div>
          <div className="flex gap-2 shrink-0">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-8 w-8"
              onClick={handleRefresh}
              disabled={isRefreshing}
            >
              <RefreshCw className={cn("h-4 w-4", isRefreshing && "animate-spin")} />
            </Button>
            <Button variant="outline" size="sm" className="shrink-0 h-8 text-xs px-2 font-bold">내보내기</Button>
          </div>
        </div>
        
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input className="pl-10 h-9 bg-white text-sm" placeholder="데이터베이스 검색..." />
        </div>
      </header>

      <div className="p-6 grid grid-cols-3 gap-3">
        <Card className="bg-primary text-white border-none shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <Clock className="h-6 w-6 mb-1 opacity-80" />
            <h3 className="text-xl font-bold">{stats.pending}</h3>
            <p className="text-[10px] opacity-80 font-bold uppercase tracking-wider">대기 중</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <CheckCircle2 className="h-6 w-6 mb-1 text-success" />
            <h3 className="text-xl font-bold">{stats.verified.toLocaleString()}</h3>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">검증됨</p>
          </CardContent>
        </Card>
        <Card className="shadow-sm">
          <CardContent className="p-4 flex flex-col items-center text-center">
            <BarChart3 className="h-6 w-6 mb-1 text-secondary" />
            <h3 className="text-xl font-bold">{stats.accuracy}%</h3>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider">정확도</p>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader className="p-4 pb-2">
            <div className="flex justify-between items-center">
              <CardTitle className="text-base font-bold">검증 대기열</CardTitle>
              <Badge variant="outline" className="text-[10px] h-5 font-bold">조치 필요</Badge>
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

        <Card className="col-span-3">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-base flex items-center gap-2 font-bold">
              <Database className="h-4 w-4 text-primary" /> 마스터 DB 상태
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 space-y-2">
             <div className="flex justify-between items-center text-xs border-b pb-2">
               <span className="font-medium">총 알레르기 유발원</span>
               <span className="font-bold">45</span>
             </div>
             <div className="flex justify-between items-center text-xs border-b pb-2 text-destructive">
               <span className="font-medium">제조사 리콜</span>
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

/**
 * @function QueueItem
 * @description 검증 대기열의 개별 리포트 항목을 렌더링합니다.
 * @param {string} product - 신고/검증 대상 제품명
 * @param {string} report - 신고 내용
 * @param {string} user - 신고자 ID
 * @param {string} time - 신고 경과 시간
 * @param {'high' | 'medium' | 'low'} urgency - 처리 긴급도
 */
function QueueItem({ product, report, user, time, urgency }: { product: string; report: string; user: string; time: string; urgency: 'high' | 'medium' | 'low' }) {
  const urgencyColors = {
    high: 'border-l-destructive bg-destructive/5',
    medium: 'border-l-caution bg-caution/5',
    low: 'border-l-primary bg-primary/5'
  }

  return (
    <div className={cn("flex items-center justify-between p-3 border rounded-xl border-l-4", urgencyColors[urgency])}>
      <div className="space-y-0.5 overflow-hidden">
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-xs truncate">{product}</h4>
          <span className="text-[9px] text-muted-foreground shrink-0">{time}</span>
        </div>
        <p className="text-[10px] text-muted-foreground truncate">{report}</p>
        <p className="text-[9px] font-bold uppercase text-primary">보고자: {user}</p>
      </div>
      <div className="flex gap-1 shrink-0 ml-2">
        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full text-success hover:bg-success/10">
          <CheckCircle2 className="h-4 w-4" />
        </Button>
        <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full text-destructive hover:bg-destructive/10">
          <XCircle className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
