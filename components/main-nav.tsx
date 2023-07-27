"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { NavItem } from "@/types/nav"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  const { theme } = useTheme()

  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <div className="relative h-[160px] w-[170px]">
          <Image
            src={theme === "dark" ? siteConfig.logoLight : siteConfig.logoDark}
            fill
            alt={siteConfig.name}
            style={{
              objectFit: "contain",
              width: "100%",
            }}
            sizes="100vw"
          />
        </div>
        <span className="hidden font-bold sm:inline-block">
          {/* {siteConfig.name} */}
        </span>
      </Link>
      {items?.length ? (
        <nav className="hidden gap-6 md:flex">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-lg font-semibold text-muted-foreground sm:text-sm",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
