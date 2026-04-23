"use client"

import { useState } from "react"
import { AppNav } from "@/components/app-nav"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Plus, User, ChevronRight, Settings, Trash2, ShieldCheck, HeartPulse } from "lucide-react"
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter,
  DialogDescription
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([
    { id: 1, name: "준 (아들)", allergens: ["땅콩", "우유"], severity: "심각", color: "bg-blue-500" },
    { id: 2, name: "사라", allergens: ["글루텐", "대두", "갑각류"], severity: "중간", color: "bg-pink-500" },
  ])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <header className="p-6 pb-2">
        <h1 className="text-3xl font-bold tracking-tight">프로필</h1>
        <p className="text-muted-foreground font-medium">가족을 위한 안전 프로필을 관리하세요.</p>
      </header>

      <div className="p-6 space-y-6">
        {/* Add Profile Button */}
        <ProfileWizard onAdd={(newProfile) => setProfiles([...profiles, { ...newProfile, id: Date.now(), color: "bg-primary" }])} />

        {/* Profile List */}
        <div className="space-y-4">
          {profiles.map((profile) => (
            <Card key={profile.id} className="overflow-hidden shadow-sm border-none bg-white">
              <CardContent className="p-0">
                <div className="flex items-stretch">
                  <div className={`w-3 ${profile.color}`} />
                  <div className="flex-1 p-5">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-primary">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{profile.name}</h3>
                          <Badge variant={profile.severity === "심각" ? "destructive" : "outline"} className="text-[10px] px-1.5 py-0 mt-1">
                            {profile.severity}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                          <Settings className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {profile.allergens.map((allergen) => (
                        <Badge key={allergen} variant="secondary" className="bg-muted text-primary border-none">
                          {allergen}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Group Scanning Option */}
        <Card className="bg-primary text-white border-none shadow-lg">
          <CardContent className="p-6 flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-bold text-lg">그룹 스캔</h3>
              <p className="text-xs opacity-80">모든 프로필을 동시에 검증합니다.</p>
            </div>
            <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
              <ShieldCheck className="h-6 w-6" />
            </div>
          </CardContent>
        </Card>
      </div>

      <AppNav />
    </div>
  )
}

function ProfileWizard({ onAdd }: { onAdd: (profile: any) => void }) {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    severity: "중간",
    allergens: [] as string[]
  })
  const [open, setOpen] = useState(false)

  const commonAllergens = ["땅콩", "견과류", "우유", "글루텐", "계란", "대두", "생선", "갑각류"]

  const handleSubmit = () => {
    onAdd(formData)
    setOpen(false)
    setStep(1)
    setFormData({ name: "", severity: "중간", allergens: [] })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full h-14 bg-secondary text-primary font-bold shadow-md text-lg">
          <Plus className="h-5 w-5 mr-2" /> 새 프로필 추가
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>알레르기 프로필 설정</DialogTitle>
          <DialogDescription>3단계 중 {step}단계</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <Label>누구를 위한 프로필인가요?</Label>
              <Input 
                placeholder="예: 준 (아들), 사라, 나" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <p className="text-xs text-muted-foreground italic">팁: 스캔 시 알아보기 쉬운 이름을 사용하세요.</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label>관리할 알레르기 항목 선택</Label>
              <div className="grid grid-cols-2 gap-3">
                {commonAllergens.map(a => (
                  <div key={a} className="flex items-center space-x-2 p-2 rounded-lg border hover:bg-accent transition-colors">
                    <Checkbox 
                      id={a} 
                      checked={formData.allergens.includes(a)}
                      onCheckedChange={(checked) => {
                        if (checked) setFormData({...formData, allergens: [...formData.allergens, a]})
                        else setFormData({...formData, allergens: formData.allergens.filter(i => i !== a)})
                      }}
                    />
                    <label htmlFor={a} className="text-sm font-medium leading-none cursor-pointer">{a}</label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <Label>민감도 수준 설정</Label>
              <RadioGroup value={formData.severity} onValueChange={(val) => setFormData({...formData, severity: val})}>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="심각" id="r1" />
                  <Label htmlFor="r1" className="flex flex-col">
                    <span className="font-bold">심각 (아나필락시스 위험)</span>
                    <span className="text-xs text-muted-foreground">엄격한 제한, 교차 오염 가능성까지 경고합니다.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="중간" id="r2" />
                  <Label htmlFor="r2" className="flex flex-col">
                    <span className="font-bold">중간 (불내증)</span>
                    <span className="text-xs text-muted-foreground">직접적인 성분 경고, 흔적량 주의.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="경미" id="r3" />
                  <Label htmlFor="r3" className="flex flex-col">
                    <span className="font-bold">경미</span>
                    <span className="text-xs text-muted-foreground">정보 제공 목적, 치명적 경고 제외.</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        <DialogFooter className="flex-row gap-2">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">이전</Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)} className="flex-1 bg-primary text-white" disabled={step === 1 && !formData.name}>다음 단계</Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 bg-primary text-white">프로필 생성</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
