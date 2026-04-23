"use client"

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
  CheckCircle2,
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
  ingredientParsing, 
  IngredientParsingOutput 
} from "@/ai/flows/ingredient-parsing-flow"
import { 
  getAllergenRationale, 
  AllergenRationaleOutput 
} from "@/ai/flows/allergen-rationale-flow"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"

export default function ResultPage() {
  const searchParams = useSearchParams()
  const profileName = searchParams.get("profile") || "Jun (Son)"
  
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<IngredientParsingOutput | null>(null)
  const [rationales, setRationales] = useState<Record<string, AllergenRationaleOutput>>({})

  // Mock data for initial UI simulation
  useEffect(() => {
    const simulateDataFetch = async () => {
      // In a real app, we'd use ingredientParsing with a real photo or text
      // We'll simulate the result of that flow for this UI demo
      const mockResult: IngredientParsingOutput = {
        parsedIngredients: [
          { name: "Wheat Flour", isAllergen: false, triggeredAllergens: [] },
          { name: "Sugar", isAllergen: false, triggeredAllergens: [] },
          { name: "Milk Solids", isAllergen: true, triggeredAllergens: ["milk"] },
          { name: "Vegetable Oil", isAllergen: false, triggeredAllergens: [] },
          { name: "Peanut Paste", isAllergen: true, triggeredAllergens: ["peanuts"] },
          { name: "Natural Flavors", isAllergen: false, triggeredAllergens: [] },
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
    
    // Call the real AI flow
    const rationale = await getAllergenRationale({
      allergenName: allergen,
      userAllergyProfile: `${profileName} has a severe allergy to ${allergen}`
    })
    
    setRationales(prev => ({ ...prev, [allergen]: rationale }))
  }

  const isDangerous = data?.parsedIngredients.some(i => i.isAllergen) ?? false
  const triggeredAllergensCount = data?.parsedIngredients.filter(i => i.isAllergen).length ?? 0

  return (
    <div className="bg-background min-h-screen pb-24">
      {/* Dynamic Header based on safety */}
      <div className={cn(
        "p-8 pt-12 text-white flex flex-col items-center text-center transition-colors duration-500 rounded-b-[3rem]",
        loading ? "bg-muted" : isDangerous ? "bg-danger" : "bg-success"
      )}>
        <div className="flex justify-between w-full absolute top-6 px-6">
          <Link href="/scan">
            <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
            <Share2 className="h-6 w-6" />
          </Button>
        </div>

        {loading ? (
          <div className="space-y-4 flex flex-col items-center">
            <Skeleton className="h-20 w-20 rounded-full bg-white/20" />
            <Skeleton className="h-8 w-48 bg-white/20" />
          </div>
        ) : (
          <>
            <div className="bg-white/20 p-4 rounded-full mb-6">
              {isDangerous ? (
                <XCircle className="h-16 w-16" />
              ) : (
                <ShieldCheck className="h-16 w-16" />
              )}
            </div>
            <h1 className="text-3xl font-bold mb-2">
              {isDangerous ? "Danger Detected!" : "Verified Safe"}
            </h1>
            <p className="font-medium opacity-90">
              {isDangerous 
                ? `${triggeredAllergensCount} trigger items found for ${profileName}` 
                : `No allergens detected for ${profileName}`}
            </p>
          </>
        )}
      </div>

      <div className="px-6 -mt-8 space-y-6">
        {/* Product Info Card */}
        <Card className="shadow-lg">
          <CardContent className="p-4 flex gap-4">
            <div className="h-20 w-20 bg-muted rounded-lg overflow-hidden shrink-0">
               <img 
                 src="https://picsum.photos/seed/product/200/200" 
                 alt="Product" 
                 className="h-full w-full object-cover"
               />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-lg font-bold">Nature's Valley Granola</h2>
              <p className="text-xs text-muted-foreground">Oats 'n Honey Variety Pack</p>
              <div className="flex gap-2 mt-2">
                 <Badge variant="outline" className="text-[10px] text-primary border-primary">Certified Nut-Free</Badge>
                 <Badge variant="outline" className="text-[10px] text-success border-success">Verified Facility</Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ingredient Breakdown */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg flex items-center gap-2">
              <FileSearch className="h-5 w-5" /> Smart Ingredient List
            </CardTitle>
            <CardDescription>Allergens are highlighted based on {profileName}'s profile.</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <div className="space-y-2">
                {[1, 2, 3, 4, 5].map(i => <Skeleton key={i} className="h-10 w-full" />)}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {data?.parsedIngredients.map((ing, idx) => (
                  <Badge 
                    key={idx} 
                    variant={ing.isAllergen ? "destructive" : "secondary"}
                    className={cn(
                      "text-sm py-1.5 px-3 cursor-pointer",
                      ing.isAllergen && "animate-pulse"
                    )}
                  >
                    {ing.name}
                    {ing.isAllergen && <AlertTriangle className="ml-2 h-3 w-3" />}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Scientific Rationale Accordion */}
        {isDangerous && !loading && (
          <section>
            <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
              <Info className="h-5 w-5 text-primary" /> Scientific Rationale
            </h3>
            <Accordion type="single" collapsible className="w-full space-y-2">
              {data?.parsedIngredients.filter(i => i.isAllergen).map((ing, idx) => (
                <AccordionItem 
                  key={idx} 
                  value={`item-${idx}`} 
                  className="bg-white rounded-xl border px-4"
                  onClick={() => fetchRationale(ing.triggeredAllergens[0])}
                >
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex flex-col items-start text-left">
                      <span className="font-bold text-danger text-sm">Flagged: {ing.name}</span>
                      <span className="text-xs text-muted-foreground font-medium">Why was this identified?</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    {!rationales[ing.triggeredAllergens[0]] ? (
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-3/4" />
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <p className="text-sm text-foreground/80 leading-relaxed">
                          {rationales[ing.triggeredAllergens[0]].explanation}
                        </p>
                        <div className="space-y-2">
                          <p className="text-[10px] uppercase tracking-wider font-bold text-muted-foreground">Trusted Resources</p>
                          {rationales[ing.triggeredAllergens[0]].resources.map((res, rIdx) => (
                            <a 
                              key={rIdx} 
                              href={res.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="flex items-center justify-between p-3 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <span className="text-xs font-medium text-primary underline">{res.title}</span>
                              <ExternalLink className="h-3 w-3 text-muted-foreground" />
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

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <Button variant="outline" className="h-12 border-primary text-primary font-bold">
            <MessageSquareWarning className="h-4 w-4 mr-2" /> Report Error
          </Button>
          <Button className="h-12 bg-primary text-white font-bold">
            <Share2 className="h-4 w-4 mr-2" /> Share Safety Card
          </Button>
        </div>
      </div>

      <AppNav />
    </div>
  )
}
