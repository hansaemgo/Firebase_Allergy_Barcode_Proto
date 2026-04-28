"use client"
// 파일명: src/components/app-nav.tsx
/**
 * @overview 모바일 환경을 위한 하단 전역 내비게이션 바 컴포넌트입니다.
 * <!-- AI Guideline: Refer to docs/.ai-context.md before processing -->
 */

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Scan, Bell, User, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "홈", icon: Home, href: "/home" },
  { label: "스캔", icon: Scan, href: "/scan" },
  { label: "알림", icon: Bell, href: "/alerts" },
  { label: "프로필", icon: User, href: "/profiles" },
  { label: "관리자", icon: ShieldAlert, href: "/admin" },
]

/**
 * @function AppNav
 * @description 현재 경로를 감지하여 활성화 상태를 표시하는 하단 내비게이션.
 */
export function AppNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-border z-50 px-4 h-16 flex items-center justify-around md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex flex-col items-center justify-center space-y-1 transition-colors",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <item.icon className={cn("h-5 w-5", isActive && "stroke-[2.5px]")} />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
