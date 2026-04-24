"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AppNav } from "@/components/app-nav"
import { X, Camera, Flashlight, ChevronDown, Check, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

export default function ScanPage() {
  const router = useRouter()
  const [selectedProfile, setSelectedProfile] = useState("준 (아들)")
  const [isScanning, setIsScanning] = useState(false)

  const handleScan = () => {
    setIsScanning(true)
    setTimeout(() => {
      router.push("/result?profile=" + encodeURIComponent(selectedProfile))
    }, 2000)
  }

  return (
    <div className="relative h-screen bg-black overflow-hidden flex flex-col">
      {/* Top Controls */}
      <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
        <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
          <Flashlight className="h-6 w-6" />
        </Button>
        
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="bg-white/10 border-white/20 text-white rounded-full px-4 py-2 hover:bg-white/20 transition-all">
              <User className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium mr-1">{selectedProfile}</span>
              <ChevronDown className="h-4 w-4 opacity-50" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-48">
            <DropdownMenuItem onClick={() => setSelectedProfile("준 (아들)")}>
              준 (아들) {selectedProfile === "준 (아들)" && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProfile("사라")}>
              사라 {selectedProfile === "사라" && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setSelectedProfile("전체 활성")}>
              전체 활성 {selectedProfile === "전체 활성" && <Check className="ml-auto h-4 w-4" />}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white hover:bg-white/20"
          onClick={() => router.back()}
        >
          <X className="h-6 w-6" />
        </Button>
      </div>

      {/* Camera Simulator */}
      <div className="flex-1 relative flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
          style={{ backgroundImage: `url(https://picsum.photos/seed/scan-bg/800/1200)` }}
          data-ai-hint="grocery products"
        />
        
        <div className="relative w-64 h-64 border-2 border-white/50 rounded-3xl overflow-hidden scanner-viewfinder z-10 flex items-center justify-center">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-4 border-l-4 border-secondary" />
          <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-secondary" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-secondary" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-secondary" />
          
          {isScanning && (
            <div className="bg-white/20 backdrop-blur-sm inset-0 absolute flex flex-col items-center justify-center animate-pulse">
              <p className="text-white font-bold text-lg">분석 중...</p>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Interface */}
      <div className="bg-black/80 backdrop-blur-md p-8 pb-32 pt-4 rounded-t-[3rem] z-20">
        <div className="flex flex-col items-center space-y-6">
          <p className="text-white/60 text-[11px] font-medium text-center">
            바코드나 성분표를 프레임 안에 맞춰주세요
          </p>
          
          <div className="flex items-center gap-8">
            <button className="h-12 w-12 rounded-full border border-white/20 flex items-center justify-center text-white">
              <Camera className="h-6 w-6" />
            </button>
            <button 
              onClick={handleScan}
              disabled={isScanning}
              className={cn(
                "h-20 w-20 rounded-full border-4 flex items-center justify-center transition-all",
                isScanning ? "border-secondary scale-95" : "border-white"
              )}
            >
              <div className={cn(
                "h-16 w-16 rounded-full bg-white transition-all",
                isScanning ? "scale-75 opacity-50" : "scale-100"
              )} />
            </button>
            <div className="h-12 w-12" />
          </div>
        </div>
      </div>

      <AppNav />
    </div>
  )
}
