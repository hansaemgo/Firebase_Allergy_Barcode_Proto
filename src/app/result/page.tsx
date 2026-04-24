"use client"
// 파일명: src/app/result/page.tsx
/**
 * @overview 스캔 결과 화면. 바코드 스캔 이후 제품의 성분을 분석하여 안전 여부(Verdict) 및 과학적 근거를 제공합니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */

import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  ShieldCheck, 
  AlertTriangle, 
  XCircle, 
  Share2, 
  ChevronLeft, 
  Info, 
  FileSearch,
  MessageSquareWarning,
  ExternalLink
} from "lucide-react"
import Link from "next/link"
import { AppNav } from "@/components/app-nav"
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion"
import { 
  getAllergenRationale, 
  AllergenRationaleOutput 
} from "@/ai/flows/allergen-rationale-flow"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

/**
 * @function ResultPage
 * @description 결과 페이지 메인 컴포넌트. 성분 분석 결과를 시각화하고 AI를 통해 위험 근거를 제공합니다.
 * 
 * [호출 구조 및 순서]
 * 1. 마운트 시 `simulateDataFetch` 로 Mock 결과 데이터(parsedIngredients)를 가져옴 (향후 실제 API 연동)
 * 2. `isDangerous` 평가 로직 실행
 * 3. 사용자가 아코디언 메뉴(위험 근거) 클릭 시 `fetchRationale` 실행하여 Genkit AI 흐름 호출
 */
export default function ResultPage() {
  const searchParams = useSearchParams()
  const profileName = searchParams.get("profile") || "준 (아들)"
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<any>(null)
  const [rationales, setRationales] = useState<Record<string, AllergenRationaleOutput>>({})

  useEffect(() => {
    const simulateDataFetch = async () => {
      const mockResult = {
        parsedIngredients: [
          { name: "밀가루", isAllergen: false, triggeredAllergens: [] },
          { name: "설탕", isAllergen: false, triggeredAllergens: [] },
          { name: "우유 고형분", isAllergen: true, triggeredAllergens: ["우유"] },
          { name: "식물성 유지", isAllergen: false, triggeredAllergens: [] },
          { name: "땅콩 페이스트", isAllergen: true, triggeredAllergens: ["땅콩"] },
        ]
      }
      setTimeout(() => {
        setData(mockResult)
        setLoading(false)
      }, 1500)
    }
    simulateDataFetch()
  }, [])

  const fetchRationale = async (allergen: string) => {
    if (rationales[allergen]) return
    const rationale = await getAllergenRationale({
      allergenName: allergen,
      userAllergyProfile: `${profileName}님은 ${allergen}에 심한 알레르기가 있습니다.`
    })
    setRationales(prev => ({ ...prev, [allergen]: rationale }))
  }

  const isDangerous = data?.parsedIngredients.some((i: any) => i.isAllergen) ?? false
  const triggeredAllergensCount = data?.parsedIngredients.filter((i: any) => i.isAllergen).length ?? 0

  return (
    <div className="bg-background min-h-screen pb-24">
      <div className={cn(
        "p-6 pt-10 text-white flex flex-col items-center text-center transition-colors duration-500 rounded-b-[2.5rem]",
        loading ? "bg-muted" : isDangerous ? "bg-danger" : "bg-success"
      )}>
        <div className="flex justify-between w-full absolute top-5 px-5">
          <Link href="/scan">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 rounded-full">
              <ChevronLeft className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20 h-8 w-8 rounded-full">
            <Share2 className="h-5 w-5" />
          </Button>
        </div>

        {loading ? (
          <div className="space-y-3 flex flex-col items-center">
            <Skeleton className="h-16 w-16 rounded-full bg-white/20" />
            <Skeleton className="h-6 w-40 bg-white/20" />
          </div>
        ) : (
          <>
            <div className="bg-white/20 p-3 rounded-full mb-4">
              {isDangerous ? <XCircle className="h-12 w-12" /> : <ShieldCheck className="h-12 w-12" />}
            </div>
            <h1 className="text-xl font-bold mb-1">
              {isDangerous ? "위험 감지!" : "안전 확인됨"}
            </h1>
            <p className="text-sm font-medium opacity-90 truncate max-w-full">
              {isDangerous 
                ? `${profileName}님의 알레르기 유발 항목 ${triggeredAllergensCount}개가 발견되었습니다.` 
                : `${profileName}님에게 안전한 제품입니다.`}
            </p>
          </>
        )}
      </div>

      <div className="px-5 -mt-6 space-y-5">
        <Card className="shadow-lg border-none">
          <CardContent className="p-4 flex gap-4">
            <div className="h-16 w-16 bg-muted rounded-lg overflow-hidden shrink-0 border border-border">
               <img src="https://picsum.photos/seed/product/200/200" alt="제품" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-center overflow-hidden">
              <h2 className="text-sm font-bold truncate">네이처 밸리 그래놀라</h2>
              <p className="text-[10px] text-muted-foreground truncate font-medium">오츠 앤 허니 버라이어티 팩</p>
              <div className="flex gap-1.5 mt-1.5">
                 <Badge variant="outline" className="text-[9px] text-primary border-primary font-bold">견과류 프리 인증</Badge>
                 <Badge variant="outline" className="text-[9px] text-success border-success font-bold">검증됨</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm">
          <CardHeader className="p-4 pb-2">
            <CardTitle className="text-sm font-bold flex items-center gap-2">
              <FileSearch className="h-4 w-4 text-primary" /> 스마트 성분 분석
            </CardTitle>
            <CardDescription className="text-[10px] font-medium">{profileName}님의 프로필 기반 분석 결과입니다.</CardDescription>
          </CardHeader>
          <CardContent className="px-4 pb-4">
            {loading ? (
              <div className="space-y-2">
                {[1, 2, 3].map(i => <Skeleton key={i} className="h-8 w-full" />)}
              </div>
            ) : (
              <div className="flex flex-wrap gap-1.5">
                {data?.parsedIngredients.map((ing: any, idx: number) => (
                  <Badge 
                    key={idx} 
                    variant={ing.isAllergen ? "destructive" : "secondary"}
                    className={cn("text-xs py-1 px-2.5 font-bold", ing.isAllergen && "animate-pulse")}
                  >
                    {ing.name}
                    {ing.isAllergen && <AlertTriangle className="ml-1.5 h-3 w-3" />}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {isDangerous && !loading && (
          <section>
            <h3 className="text-sm font-bold mb-2 flex items-center gap-2">
              <Info className="h-4 w-4 text-primary" /> 과학적 근거
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {data?.parsedIngredients.filter((i: any) => i.isAllergen).map((ing: any, idx: number) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-white rounded-xl border px-4 shadow-sm"
                  onClick={() => fetchRationale(ing.triggeredAllergens[0])}
                >
                  <AccordionTrigger className="hover:no-underline py-3">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-bold text-danger text-xs">위험 요소: {ing.name}</span>
                      <span className="text-[10px] text-muted-foreground font-bold">왜 위험한가요?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-3">
                    {!rationales[ing.triggeredAllergens[0]] ? (
                      <Skeleton className="h-10 w-full" />
                    ) : (
                      <div className="space-y-3">
                        <p className="text-[11px] text-foreground/80 leading-relaxed font-medium">
                          {rationales[ing.triggeredAllergens[0]].explanation}
                        </p>
                        <div className="space-y-1.5">
                          {rationales[ing.triggeredAllergens[0]].resources.map((res, rIdx) => (
                            <a key={rIdx} href={res.url} target="_blank" className="flex items-center justify-between p-2.5 bg-muted/30 rounded-lg">
                              <span className="text-[10px] font-bold text-primary underline truncate max-w-[80%]">{res.title}</span>
                              <ExternalLink className="h-2.5 w-2.5 text-muted-foreground" />
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>
        )}
      </div>
      <AppNav />
    </div>
  )
}
