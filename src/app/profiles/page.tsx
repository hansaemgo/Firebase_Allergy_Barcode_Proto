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
    { id: 1, name: "Jun (Son)", allergens: ["Peanuts", "Milk"], severity: "Severe", color: "bg-blue-500" },
    { id: 2, name: "Sarah", allergens: ["Gluten", "Soy", "Shellfish"], severity: "Moderate", color: "bg-pink-500" },
  ])

  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      <header className="p-6 pb-2">
        <h1 className="text-3xl font-bold tracking-tight">Profiles</h1>
        <p className="text-muted-foreground font-medium">Manage safety profiles for your family.</p>
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
                        <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center font-bold text-primary">
                          {profile.name[0]}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{profile.name}</h3>
                          <Badge variant={profile.severity === "Severe" ? "destructive" : "outline"} className="text-[10px] px-1.5 py-0 mt-1">
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
              <h3 className="font-bold text-lg">Group Scanning</h3>
              <p className="text-xs opacity-80">Verify safety against all profiles at once.</p>
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
    severity: "Moderate",
    allergens: [] as string[]
  })
  const [open, setOpen] = useState(false)

  const commonAllergens = ["Peanuts", "Tree Nuts", "Milk", "Gluten", "Egg", "Soy", "Fish", "Shellfish"]

  const handleSubmit = () => {
    onAdd(formData)
    setOpen(false)
    setStep(1)
    setFormData({ name: "", severity: "Moderate", allergens: [] })
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full h-14 bg-secondary text-primary font-bold shadow-md text-lg">
          <Plus className="h-5 w-5 mr-2" /> Add New Profile
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Allergy Profile Wizard</DialogTitle>
          <DialogDescription>Step {step} of 3</DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {step === 1 && (
            <div className="space-y-4">
              <Label>Who is this profile for?</Label>
              <Input 
                placeholder="e.g., Jun (Son), Class A, Myself" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <p className="text-xs text-muted-foreground italic">Tip: Use a name that's easy to identify during scans.</p>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <Label>Select Allergens to Monitor</Label>
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
              <Label>Set Sensitivity Level</Label>
              <RadioGroup value={formData.severity} onValueChange={(val) => setFormData({...formData, severity: val})}>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="Severe" id="r1" />
                  <Label htmlFor="r1" className="flex flex-col">
                    <span className="font-bold">Severe (Anaphylaxis Risk)</span>
                    <span className="text-xs text-muted-foreground">Strict zero-tolerance, flags cross-contamination.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="Moderate" id="r2" />
                  <Label htmlFor="r2" className="flex flex-col">
                    <span className="font-bold">Moderate (Intolerance)</span>
                    <span className="text-xs text-muted-foreground">Flags direct ingredients, caution for traces.</span>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 border p-4 rounded-xl">
                  <RadioGroupItem value="Mild" id="r3" />
                  <Label htmlFor="r3" className="flex flex-col">
                    <span className="font-bold">Mild</span>
                    <span className="text-xs text-muted-foreground">Information only, no critical alerts.</span>
                  </Label>
                </div>
              </RadioGroup>
            </div>
          )}
        </div>

        <DialogFooter className="flex-row gap-2">
          {step > 1 && (
            <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">Back</Button>
          )}
          {step < 3 ? (
            <Button onClick={() => setStep(step + 1)} className="flex-1 bg-primary text-white" disabled={step === 1 && !formData.name}>Next Step</Button>
          ) : (
            <Button onClick={handleSubmit} className="flex-1 bg-primary text-white">Create Profile</Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}