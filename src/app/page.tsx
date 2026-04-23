import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AppNav } from "@/components/app-nav"
import { Scan, Users, AlertTriangle, ShieldCheck, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Home() {
  return (
    <div className="max-w-md mx-auto min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="p-6 bg-primary text-white flex justify-between items-center rounded-b-[2rem] shadow-lg">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">SafeBite</h1>
          <p className="text-sm opacity-80 font-medium">Protecting what matters.</p>
        </div>
        <div className="h-10 w-10 bg-secondary rounded-full flex items-center justify-center text-primary">
          <ShieldCheck className="h-6 w-6" />
        </div>
      </header>

      <div className="px-6 -mt-6">
        {/* Main CTA */}
        <Link href="/scan">
          <Card className="bg-secondary border-none shadow-xl hover:scale-[1.02] transition-transform cursor-pointer overflow-hidden">
            <CardContent className="p-0 flex flex-col items-center">
              <div className="w-full bg-white/20 p-8 flex flex-col items-center text-primary">
                <Scan className="h-16 w-16 mb-4" />
                <h2 className="text-2xl font-bold">Instant Safety Scan</h2>
                <p className="text-sm font-medium opacity-80">Scan any product label or barcode</p>
              </div>
              <div className="w-full bg-primary/10 p-4 text-center text-primary font-bold">
                Tap to Start Scanning
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Profiles Section */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" /> Active Profiles
            </h3>
            <Link href="/profiles" className="text-sm text-primary font-semibold flex items-center">
              Manage <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ProfileCard name="Jun (Son)" allergens={["Milk", "Peanuts"]} color="bg-blue-100" />
            <ProfileCard name="Sarah" allergens={["Gluten", "Soy"]} color="bg-pink-100" />
          </div>
        </section>

        {/* Safety Alerts */}
        <section className="mt-10">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-destructive" /> Safety Alerts
            </h3>
          </div>
          <Card className="border-l-4 border-l-destructive">
            <CardContent className="p-4 flex gap-4">
              <div className="bg-destructive/10 p-2 rounded-lg h-fit">
                <AlertTriangle className="h-5 w-5 text-destructive" />
              </div>
              <div>
                <h4 className="font-bold text-sm">Product Recall: OatMilk Plus</h4>
                <p className="text-xs text-muted-foreground mt-1">Found traces of undeclared soy in Batch #4459. Relevant to profile: Sarah.</p>
                <Link href="/alerts" className="text-xs text-primary font-bold mt-2 block">View Details</Link>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Recent Scans */}
        <section className="mt-10">
          <h3 className="text-lg font-bold mb-4">Recent Verifications</h3>
          <div className="space-y-3">
            <RecentScanItem name="Nature Valley Granola" date="Today, 2:30 PM" status="danger" />
            <RecentScanItem name="Greek Yogurt" date="Today, 10:15 AM" status="success" />
            <RecentScanItem name="Whole Grain Bread" date="Yesterday" status="caution" />
          </div>
        </section>
      </div>

      <AppNav />
    </div>
  )
}

function ProfileCard({ name, allergens, color }: { name: string; allergens: string[]; color: string }) {
  return (
    <Card className={`${color} border-none shadow-sm`}>
      <CardContent className="p-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center font-bold text-xs text-primary">
            {name[0]}
          </div>
          <h4 className="font-bold text-sm">{name}</h4>
        </div>
        <div className="flex flex-wrap gap-1">
          {allergens.map(a => (
            <Badge key={a} variant="outline" className="bg-white/50 border-none text-[10px] px-1.5 py-0">
              {a}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

function RecentScanItem({ name, date, status }: { name: string; date: string; status: 'success' | 'danger' | 'caution' }) {
  const statusColors = {
    success: 'text-success bg-success/10',
    danger: 'text-danger bg-danger/10',
    caution: 'text-caution bg-caution/10'
  }
  const StatusIcon = status === 'success' ? ShieldCheck : status === 'danger' ? AlertTriangle : AlertTriangle

  return (
    <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm border border-border">
      <div className="flex items-center gap-3">
        <div className={cn("p-2 rounded-lg", statusColors[status])}>
          <StatusIcon className="h-5 w-5" />
        </div>
        <div>
          <h4 className="font-bold text-sm">{name}</h4>
          <p className="text-[10px] text-muted-foreground">{date}</p>
        </div>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
    </div>
  )
}
