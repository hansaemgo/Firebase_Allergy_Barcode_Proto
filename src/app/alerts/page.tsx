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
          <h1 className="text-3xl font-bold tracking-tight">Safety Alerts</h1>
          <p className="text-muted-foreground font-medium">Recalls & community reports.</p>
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
            <AlertTriangle className="h-4 w-4" /> Urgent Manufacturer Recalls
          </div>
          <AlertCard 
            title="OatMilk Plus (Traces of Soy)"
            description="Specific to batches #4400 through #4500. Manufacturer identified cross-contamination in line 4."
            date="2 hours ago"
            impact="Affects Sarah"
            type="recall"
          />
        </section>

        {/* Community Reports */}
        <section className="space-y-3 mt-8">
          <div className="flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider">
            <Info className="h-4 w-4" /> Community Safety Insights
          </div>
          <AlertCard 
            title="Nature Valley Factory Note"
            description="Local childcare provider reported discovery of unlisted almond traces in individual wrapper packs."
            date="Today, 9:15 AM"
            impact="Affects Jun (Son)"
            type="community"
          />
          <AlertCard 
            title="Whole Grain Bread Update"
            description="Recipe change: Now contains sesame seeds. Label update pending in some regions."
            date="Yesterday"
            impact="No matching profiles"
            type="update"
          />
        </section>

        {/* Subscription Manage */}
        <Button variant="outline" className="w-full h-12 border-dashed border-2">
          Manage Alert Preferences
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
          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 ${impact.includes('Affects') ? 'bg-destructive/10 text-destructive border-destructive/20' : ''}`}>
            {impact}
          </Badge>
          <Button variant="link" size="sm" className="h-6 text-[10px] font-bold p-0">
            View Details <ChevronRight className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}