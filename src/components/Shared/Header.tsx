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
import { Menu, Globe, Heart, ChevronDown, Code, Laptop, Briefcase } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Lang = "fr" | "en";

interface HeaderProps {
  currentPage?: string;
}

// Configuration centralisée des routes
const ROUTES = {
  home: "/",
  programs: "/programs",
  about: "/about",
  gallery: "/gallery",
  contact: "/contact",
} as const;

const NAV_ITEMS = (t: (key: string) => string) => [
  { id: "home", href: ROUTES.home, label: t("header.home") },
  { id: "programs", href: ROUTES.programs, label: t("header.programs") },
  { id: "about", href: ROUTES.about, label: t("header.about") },
  { id: "gallery", href: ROUTES.gallery, label: t("header.gallery") },
  { id: "contact", href: ROUTES.contact, label: t("header.contact") },
];



export function Header({ currentPage }: HeaderProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [openPrograms, setOpenPrograms] = React.useState(false);
  const { language, setLanguage, t } = useLanguage();

  // Détermination précise de la page active
  const getCurrentPageId = React.useCallback(() => {
    if (pathname === ROUTES.home) return "home";
    if (pathname.startsWith(ROUTES.programs)) return "programs";
    if (pathname.startsWith(ROUTES.about)) return "about";
    if (pathname.startsWith(ROUTES.gallery)) return "gallery";
    if (pathname.startsWith(ROUTES.contact)) return "contact";
    return "home";
  }, [pathname]);

  const currentPageId = getCurrentPageId();

  // Debug en développement seulement
  React.useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("📍 Current Page:", { pathname, currentPageId });
    }
  }, [pathname, currentPageId]);

  // Scroll listener optimisé avec throttle
  React.useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    // Vérification initiale
    handleScroll();
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile quand on change de page
  React.useEffect(() => {
    setIsOpen(false);
    setOpenPrograms(false);
  }, [pathname]);

  const programsSubMenu = [
    {
      id: "aurora-kids-bootcamp",
      label: t("header.auroraKidsBootcamp"),
      icon: Code,
      description: "Âges 6-16 • Codage ludique & compétences numériques",
      color: "from-blue-500 to-purple-600",
    },
    {
      id: "aurora-school-lab",
      label: t("header.auroraSchoolLab"),
      icon: Laptop,
      description: "Ateliers avancés & programmes scolaires",
      color: "from-green-500 to-teal-600",
    },
    {
      id: "aurora-career",
      label: t("header.auroraCareer"),
      icon: Briefcase,
      description: "Compétences professionnelles & développement de carrière",
      color: "from-orange-500 to-red-600",
    },
  ];

  const menuItems = React.useMemo(() => NAV_ITEMS(t), [t]);

  // Vérification si un lien est actif
  const isActive = React.useCallback((href: string, id: string) => {
    if (href === ROUTES.home) return pathname === ROUTES.home;
    if (pathname.startsWith(href)) return true;
    return currentPageId === id;
  }, [pathname, currentPageId]);

  // Styles réutilisables
  const headerStyles = {
    base: "fixed top-0 z-50 w-full font-poppins transition-all duration-500",
    scrolled: "bg-white/85 backdrop-blur-xl shadow-sm border-b border-gray-200/60",
    transparent: "bg-transparent",
  };

  const navItemStyles = (isActive: boolean, isScrolled: boolean) => 
    cn(
      "group relative px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 flex items-center gap-1",
      isActive
        ? cn(
            "shadow-md",
            isScrolled 
              ? "bg-[#ff7100] text-white" 
              : "bg-white/20 text-white backdrop-blur-md"
          )
        : cn(
            isScrolled
              ? "text-gray-700 hover:text-[#ff7100] hover:bg-gray-50"
              : "text-white/80 hover:text-white hover:bg-white/10"
          )
    );



  return (
    <header className={cn(headerStyles.base, isScrolled ? headerStyles.scrolled : headerStyles.transparent)}>
      {/* Skip link pour l'accessibilité */}
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
                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756396108/Logo_ikqveg.png"
                alt="Logo Aurora Academy"
                fill
                className="object-contain"
                priority
                sizes="40px"
              />
            </span>
            <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-white rounded-full border-2 border-[#ff7100] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </span>
          <span
            className={cn(
              "hidden sm:block text-lg font-semibold transition-colors duration-300",
              isScrolled ? "text-gray-900" : "text-white"
            )}
          >
            Aurora <span className="font-thin">Academy</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
          {menuItems.map((item) =>
            item.id === "programs" ? (
              <DropdownMenu key={item.id} onOpenChange={setOpenPrograms}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={navItemStyles(isActive(item.href, item.id), isScrolled)}
                    aria-expanded={openPrograms}
                  >
                    <span className="text-sm">{item.label}</span>
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                    {isActive(item.href, item.id) && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
                    )}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-80 bg-white/95 backdrop-blur-xl border border-gray-200/50 shadow-2xl rounded-2xl p-2 mt-2"
                  sideOffset={8}
                >
                  <div className="grid gap-1">
                    {programsSubMenu.map((program) => (
                      <Link
                        key={program.id}
                        href={`/programs/${program.id}`}
                        className="group flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer border-0"
                      >
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300",
                            program.color
                          )}
                        >
                          <program.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1 font-poppins">
                          <h4 className="font-semibold text-gray-900 text-sm group-hover:text-[#ff7100] transition-colors">
                            {program.label}
                          </h4>
                          <p className="text-xs text-gray-500 font-cooperhewitt">
                            {program.description}
                          </p>
                        </div>
                        <div className="w-2 h-2 bg-[#ff7100] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </Link>
                    ))}
                  </div>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={item.id}
                href={item.href}
                className={navItemStyles(isActive(item.href, item.id), isScrolled)}
                aria-current={isActive(item.href, item.id) ? "page" : undefined}
              >
                <span className="text-sm">{item.label}</span>
                {isActive(item.href, item.id) && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full" />
                )}
              </Link>
            )
          )}
        </nav>

        {/* Actions desktop */}
        <div className="hidden lg:flex items-center gap-3">

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
     
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Ouvrir le menu"
                className={cn(
                  "inline-flex items-center justify-center h-9 w-9 rounded-lg ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:scale-110",
                  isScrolled
                    ? "hover:bg-gray-50 text-gray-700"
                    : "hover:bg-white/10 text-white"
                )}
              >
                <Menu className="h-8 w-8" aria-hidden />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-80 bg-white/95 backdrop-blur-xl border-l border-gray-200 overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] shadow-lg overflow-hidden">
                    <Image
                      src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756396108/Logo_ikqveg.png"
                      alt="Logo Aurora Academy"
                      fill
                      className="object-contain"
                      sizes="40px"
                    />
                  </span>
                  <span className="font-poppins font-semibold text-gray-700 text-lg">
                    Aurora <span className="font-thin">Academy</span>
                  </span>
                </div>
              </div>

              <nav className="flex flex-col gap-2 font-poppins" aria-label="Navigation mobile">
                {menuItems.map((item) => {
                  const active = isActive(item.href, item.id);

                  if (item.id === "programs") {
                    return (
                      <div key={item.id} className="flex flex-col">
                        <button
                          onClick={() => setOpenPrograms(!openPrograms)}
                          className={cn(
                            "group flex items-center justify-between p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]",
                            active
                              ? "bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white shadow-sm"
                              : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          )}
                          aria-expanded={openPrograms}
                        >
                          <span className="font-normal text-sm">{item.label}</span>
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform duration-300",
                              openPrograms && "rotate-180"
                            )}
                          />
                        </button>

                        {openPrograms && (
                          <div className="ml-4 mt-2 flex flex-col gap-2 border-l border-gray-200 pl-3">
                            {programsSubMenu.map((program) => (
                              <Link
                                key={program.id}
                                href={`/programs/${program.id}`}
                                onClick={() => setIsOpen(false)}
                                className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:bg-gray-50"
                              >
                                <div
                                  className={cn(
                                    "p-2 rounded-lg bg-gradient-to-br flex items-center justify-center shadow-md",
                                    program.color
                                  )}
                                >
                                  <program.icon className="w-4 h-4 text-white" />
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-sm font-semibold text-gray-700 group-hover:text-[#ff7100]">
                                    {program.label}
                                  </span>
                                  <span className="text-[10px] leading-tight font-cooperhewitt text-gray-500">
                                    {program.description}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.id}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center text-left p-4 rounded-lg transition-all duration-300 hover:scale-[1.01]",
                        active
                          ? "bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white shadow-sm"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      <span className="font-normal text-sm">{item.label}</span>
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
                      <span className="text-sm">{t("header.becomePartner")}</span>
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