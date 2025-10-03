"use client";

import React from "react";
import { useLanguage } from "../LanguageContext";
import {
  Users,
  TrendingUp,
  Heart,
  Handshake,
  Camera,
  Mail,
  Phone,
  MapPin,
  Send,
  Sparkles,
  Zap,
  GraduationCap,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Bot,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  const { t } = useLanguage();

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/auroraacademyCd",
      label: "Facebook",
      color: "from-blue-600 to-blue-700",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/aurora.academycd/",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
    },
    // {
    //   icon: Twitter,
    //   href: "#",
    //   label: "Twitter",
    //   color: "from-blue-400 to-blue-500",
    // },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/aurora-academycd/",
      label: "LinkedIn",
      color: "from-blue-700 to-blue-800",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@AuroraAcademyRdc",
      label: "YouTube",
      color: "from-red-600 to-red-700",
    },
  ];

  const footerPrograms = [
    { label: t("footer.kidsBootcamp"), icon: Users },
    { label: t("footer.youthAdults"), icon: GraduationCap },
    { label: t("footer.aiWorkshops"), icon: Bot },
    { label: t("footer.designTraining"), icon: Camera },
  ];

  const footerQuickLinks = [
    { label: t("footer.aboutUs"), page: "about", icon: Users },
    { label: t("footer.ourImpact"), page: "impact", icon: TrendingUp },
    { label: t("footer.partnerships"), page: "partnerships", icon: Handshake },
    { label: t("header.contact"), page: "contact", icon: Phone },
  ];
  return (
    <footer className="relative bg-gray-900 font-poppins text-white overflow-hidden">
      {/* Background decoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500 to-red-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative z-10 py-20">
        <div className="container mx-auto max-w-7xl px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12 md:mb-16">
        {/* Brand Section */}
        <div className="space-y-6 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-4">
            <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center shadow-lg">
<span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] shadow-lg group-hover:shadow-orange-300/40 transition-all duration-300 overflow-hidden">
              <Image
                src={
                  "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756396108/Logo_ikqveg.png"
                }
                alt="Logo du site"
                fill
                className="object-contain"
                priority
              />
            </span>            </div>
            <h3 className="font-semibold text-lg md:text-xl bg-gradient-to-r from-[#ff9100] to-[#ff7100] bg-clip-text text-transparent">
              Aurora Academy
            </h3>
          </div>
          <p className="text-gray-300 text-sm md:text-[14px] leading-relaxed">
            {t("footer.shapingCreators")}
          </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`group w-12 h-12 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </a>
                ))}
              </div>
            </div>

            {/* Programs Links */}
               <div className="text-center md:text-left">
          <h4 className="font-black text-lg md:text-xl mb-4 md:mb-6">
            {t("footer.programs")}
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {footerPrograms.map((item, index) => (
              <li key={index}>
                <button className="group flex items-center gap-2 md:gap-3 mx-auto md:mx-0 text-gray-300 hover:text-[#ff9100] transition-colors duration-300">
                  <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                    {item.label}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>

            {/* Quick Links */}
              <div className="text-center md:text-left">
          <h4 className="font-black text-lg md:text-xl mb-4 md:mb-6">
            {t("footer.quickLinks")}
          </h4>
          <ul className="space-y-2 md:space-y-3">
            {footerQuickLinks.map((item, index) => (
              <Link href={item.page} key={index}>
                <li>
                  <button className="group flex items-center gap-2 md:gap-3 mx-auto md:mx-0 text-gray-300 hover:text-[#ff9100] transition-colors duration-300">
                    <span className="group-hover:translate-x-1 transition-transform duration-300 text-sm md:text-base">
                      {item.label}
                    </span>
                  </button>
                </li>
              </Link>
            ))}
          </ul>
        </div>

            {/* Contact & Newsletter */}
            {/* Contact & Newsletter */}
<div className="text-center md:text-left">
  <h4 className="font-black text-lg md:text-xl mb-4 md:mb-6">
    {t("footer.connect")}
  </h4>
  <div className="space-y-4 text-sm md:text-base">
    <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3 text-gray-300">
      <Mail className="w-4 h-4 text-[#ff9100]" />
      <span>info@auroraacademy.online</span>
    </div>
    <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3 text-gray-300">
      <Phone className="w-4 h-4 text-[#ff9100]" />
      <span>+243 81 19 073 43</span>
    </div>
    <div className="flex justify-center md:justify-start items-center gap-2 md:gap-3 text-gray-300">
      <MapPin className="w-4 h-4 text-[#ff9100]" />
      <span>Kinshasa - Gombe, DRC</span>
    </div>

    {/* Newsletter */}
    <div className="mt-6 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 min-w-0">
      <h5 className="font-bold text-white mb-2 flex items-center justify-center md:justify-start gap-2">
        <Sparkles className="w-4 h-4" />
        Newsletter
      </h5>
      <p className="text-gray-400 text-xs md:text-sm mb-3">
        Restez informé de nos actualités
      </p>
      <div className="flex flex-col sm:flex-row gap-2 w-full min-w-0">
        <input
          type="email"
          placeholder="votre@email.com"
          className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#ff9100] min-w-0"
        />
        <Button
          size="sm"
          className="w-full sm:w-auto bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] px-3"
        >
          <Send className="w-4 h-4" />
        </Button>
      </div>
    </div>
  </div>
</div>

          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <p className="text-sm text-gray-400">{t("footer.rights")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
