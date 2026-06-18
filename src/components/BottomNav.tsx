"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, UserPlus, Search, Briefcase } from "lucide-react";

interface NavItem {
  href: string;
  icon: React.ElementType;
  labelEn: string;
  labelUr: string;
}

const NAV_ITEMS: NavItem[] = [
  { href: "/",              icon: Home,      labelEn: "Home",        labelUr: "گھر"           },
  { href: "/signup",        icon: UserPlus,  labelEn: "Register",    labelUr: "رجسٹر"         },
  { href: "/client/search", icon: Search,    labelEn: "Find Worker", labelUr: "مزدور ڈھونڈیں" },
  { href: "/jobs",          icon: Briefcase, labelEn: "Jobs",        labelUr: "کام"           },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08)",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "6px 0 14px",
        zIndex: 50,
      }}
    >
      {NAV_ITEMS.map(({ href, icon: Icon, labelEn, labelUr }) => {
        const active = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 3,
              flex: 1,
              padding: "4px 0",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                width: 40,
                height: 34,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 10,
                background: active ? "rgba(249,115,22,0.2)" : "transparent",
                transition: "background 0.15s",
              }}
            >
              <Icon
                size={22}
                strokeWidth={active ? 2.5 : 1.75}
                color={active ? "#f97316" : "rgba(255,255,255,0.45)"}
              />
            </div>
            <span
              style={{
                fontSize: 10,
                fontWeight: active ? 600 : 400,
                color: active ? "#f97316" : "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-urdu, 'Noto Nastaliq Urdu', serif)",
                direction: "rtl",
              }}
            >
              {labelUr}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}