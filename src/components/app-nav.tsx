"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Scan, Bell, User, ShieldAlert } from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Home", icon: Home, href: "/" },
  { label: "Scan", icon: Scan, href: "/scan" },
  { label: "Alerts", icon: Bell, href: "/alerts" },
  { label: "Profiles", icon: User, href: "/profiles" },
  { label: "Admin", icon: ShieldAlert, href: "/admin" },
]

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