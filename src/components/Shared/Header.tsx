"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Menu, X, GraduationCap, Globe, Heart } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Image from "next/image";

type Lang = "fr" | "en";

interface HeaderProps {
  currentPage?: string; // optionnel: on préfère l'URL, mais on garde pour compat
}

const NAV_ITEMS = (t: (key: string) => string) => [
  { id: "home", href: "/", label: t("header.home") },
  { id: "programs", href: "/programs", label: t("header.programs") },
  { id: "about", href: "/about", label: t("header.about") },

  //   { id: "impact", href: "/impact", label: t("header.impact") },
  //   {
  //     id: "partnerships",
  //     href: "/partnerships",
  //     label: t("header.partnerships"),
  //   },
  //   { id: "news", href: "/news", label: t("header.news") },
  { id: "gallery", href: "/gallery", label: t("header.gallery") },
  { id: "contact", href: "/contact", label: t("header.contact") },
];

function Flag({
  lang,
  className = "w-5 h-3",
}: {
  lang: Lang;
  className?: string;
}) {
  if (lang === "fr") {
    return (
      <div
        className={`${className} rounded-sm relative overflow-hidden shadow-sm`}
        aria-hidden
      >
        <div className="absolute inset-0 grid grid-cols-3">
          <div className="bg-blue-600" />
          <div className="bg-white" />
          <div className="bg-red-600" />
        </div>
      </div>
    );
  }
  // simple “Union Jack”-like abstraction (reste symbolique)
  return (
    <div
      className={`${className} rounded-sm relative overflow-hidden shadow-sm`}
      aria-hidden
    >
      <div className="absolute inset-0 bg-blue-800" />
      <div
        className="absolute inset-0 bg-white"
        style={{ clipPath: "polygon(0 0, 60% 0, 0 60%)" }}
      />
      <div
        className="absolute inset-0 bg-red-600"
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
      />
    </div>
  );
}

export function Header({ currentPage }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Scroll listener optimisé (rAF + passive)
  React.useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 16);
          ticking = false;
        });
        ticking = true;
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = React.useMemo(() => NAV_ITEMS(t), [t]);

  const isActive = (href: string, id: string) => {
    // Active si l’URL correspond, sinon fallback sur currentPage
    if (href === "/") return pathname === "/";
    if (pathname?.startsWith(href)) return true;
    return currentPage === id;
  };

  const LangSwitcher = (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("header.changeLanguage") ?? "Change language"}
          className={`h-10 w-10 rounded-lg transition-all duration-300 hover:scale-110 ${
            isScrolled
              ? "hover:bg-gray-50 text-gray-700"
              : "hover:bg-white/10 text-white"
          }`}
        >
          <div className="flex items-center gap-1">
            <Flag lang={language as Lang} className="w-5 h-3" />
            <Globe className="h-3 w-3" aria-hidden />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/95 backdrop-blur-xl border border-gray-200 shadow-xl"
      >
        <DropdownMenuItem
          onClick={() => setLanguage("fr")}
          className={`hover:bg-gray-50 ${
            language === "fr" ? "bg-gray-100" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <Flag lang="fr" className="w-4 h-3" />
            <span className="font-medium text-sm">FR</span>
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("en")}
          className={`hover:bg-gray-50 ${
            language === "en" ? "bg-gray-100" : ""
          }`}
        >
          <div className="flex items-center gap-2">
            <Flag lang="en" className="w-4 h-3" />
            <span className="font-medium text-sm">EN</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <header
      className={`fixed top-0 z-50 w-full font-poppins transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl shadow-sm border-b border-gray-200/60"
          : " bg-transparent"
      }`}
    >
      {/* Skip link a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-3 focus:py-2 focus:bg-white focus:text-black focus:rounded-md focus:shadow"
      >
        {t("header.skipToContent") ?? "Aller au contenu"}
      </a>

      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group transition-all duration-300 hover:scale-[1.02]"
          aria-label="Aurora Academy — Home"
        >
          <span className="relative inline-flex">
            <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] shadow-lg group-hover:shadow-orange-300/40 transition-all duration-300 overflow-hidden">
              <Image
                src={"https://res.cloudinary.com/dfy1hmq1b/image/upload/v1756396108/Logo_ikqveg.png"}
                alt="Logo du site"
                fill
                className="object-contain"
                priority
              />
            </span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#ff7100] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <span
            className={`hidden sm:block text-lg font-semibold transition-colors duration-300 ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            Aurora <span className="font-thin">Academy</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
          {menuItems.map((item) => {
            const active = isActive(item.href, item.id);
            return (
              <Link
                key={item.id}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] ${
                  active
                    ? `${
                        isScrolled
                          ? "bg-[#ff7100] text-white shadow-sm"
                          : "bg-white/20 text-white backdrop-blur-md"
                      }`
                    : `${
                        isScrolled
                          ? "text-gray-700 hover:text-[#ff7100] hover:bg-gray-50"
                          : "text-white/80 hover:text-white hover:bg-white/10"
                      }`
                }`}
              >
                <span className="text-sm">{item.label}</span>
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center gap-3">
          {/* {LangSwitcher} */}

          {/* <Link href="/partnerships">
            <Button
              variant="outline"
              size="sm"
              className={`group font-medium px-4 py-2 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                isScrolled
                  ? "border border-gray-200 text-gray-700 hover:bg-gray-50 shadow-sm"
                  : "border border-white/30 text-white hover:bg-white/10"
              }`}
            >
              <Heart className="w-4 h-4 mr-2" aria-hidden />
              <span className="text-sm">{t("header.becomePartner")}</span>
            </Button>
          </Link> */}

          <Link href="/programs">
            <Button
              size="lg"
              className="group bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-medium px-4 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <Heart className="w-4 h-4 mr-2" aria-hidden />
              <span className="text-sm">{t("header.becomePartner")}</span>
            </Button>
          </Link>
        </div>

        {/* Mobile */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Lang mobile */}
          {/* <div className="scale-95">{LangSwitcher}</div> */}

          {/* Menu mobile */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={`inline-flex items-center justify-center h-9 w-9 rounded-lg ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:scale-110 ${
                  isScrolled
                    ? "hover:bg-gray-50 text-gray-700"
                    : "hover:bg-white/10 text-white"
                }`}
              >
                <Menu className="h-8 w-8" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] shadow-lg">
                    <Image
                      src="/images/logo.png"
                      alt="Logo"
                      width={400} // largeur désirée
                      height={232} // hauteur recalculée pour garder le ratio
                      priority
                    />{" "}
                  </span>
                  <span className=" font-poppins font-semibold text-gray-700 text-lg">
                    Aurora <span className="font-thin">Academy</span>
                  </span>
                </div>
              </div>

              <nav
                className="flex flex-col gap-2 font-poppins "
                aria-label="Mobile"
              >
                {menuItems.map((item) => {
                  const active = isActive(item.href, item.id);
                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`group flex items-center text-left p-4 rounded-lg transition-all duration-300 hover:scale-[1.01] ${
                        active
                          ? "bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                    >
                      <span className="font-normal  text-sm">{item.label}</span>
                      {active && (
                        <span className="ml-auto w-2 h-2 bg-yellow-400 rounded-full" />
                      )}
                    </Link>
                  );
                })}

                <div className="flex flex-col gap-3 mt-8 pt-6 border-t border-gray-200">
                  <Link href="/programs" onClick={() => setIsOpen(false)}>
                    <Button className="w-full bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-medium py-6 rounded-lg shadow-lg">
                      <Heart className="w-4 h-4 mr-1" aria-hidden />
                      <span className="text-sm">
                        {t("header.becomePartner")}
                      </span>
                    </Button>
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
