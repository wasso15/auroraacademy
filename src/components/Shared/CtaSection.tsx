import * as React from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { useLanguage } from "../LanguageContext";
import Link from "next/link";

export default function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 items-center">
          
          {/* Images section */}
          <div className="lg:col-span-5 relative">
            
            {/* Grande image principale */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 shadow-2xl">
              <div className="relative overflow-hidden rounded-xl">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759339957/Aurora-Certif_185_-505231893_ov2eai.jpg"
                  alt="Étudiants africains réussissant en technologie"
                  className="w-full h-[370px] lg:h-[460px] object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3">
                  <div className="bg-white/20 backdrop-blur-md rounded px-3 py-1 border border-white/30">
                    <span className="text-white text-xs sm:text-sm font-medium">Succès Garanti</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Version flottante (desktop) */}
            <div className="hidden md:block">
              <div className="absolute -top-10 -left-8 w- h-28 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl rotate-[-15deg] hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1759344468/Aurora-Certif_167_1_-1322952860_yh4rz3.jpg"
                  alt="Jeunes programmeurs et IA"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -right-8 w-32 h-32 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl rotate-[15deg] hover:rotate-0 transition-transform duration-500">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1759343928/Aurora_Kids_174_-1192812823_ldeglx.jpg"
                  alt="Innovation numérique"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Texte section */}
          <div className="lg:col-span-7 text-center md:text-left">
            <h2 className="text-4xl md:text-5xl  lg:text-6xl font-black mb-4 ">
             À propos d&apos;Aurora Academy
            </h2>

            <p className="text-[16.5px]  md:text-lg lg:text-2xl font-cooperhewitt   text-orange-100 mb-8 sm:mb-10 max-w-3xl leading-tight">
             Nous mettons l&apos;accent sur la créativité et le développement de compétences concrètes pour préparer la nouvelle génération aux défis du futur.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
              <Link  href={"/about"}>
                       <Button
                size="lg"
                className="w-full sm:w-auto group bg-white text-[#ff7100] font-semibold text-[14px] hover:bg-gray-50 px-8 sm:px-10 py-6 sm:py-6 hover:scale-105 transition-all duration-300 rounded-xl"
              >
En savoir Plus              </Button>
              </Link>
     
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
