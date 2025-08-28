"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Users,
  Code,
  Cpu,
  Palette,
  Globe,
  ArrowRight,
  Star,
  Heart,
  Award,
  Target,
  Sparkles,
  Zap,
  TrendingUp,
  Play,
  ChevronRight,
  Handshake,
  Rocket,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { ImageWithFallback } from "@/components/ImageWithFallback";

export default function HomePage() {
  const { t } = useLanguage();

  // const features = [
  //   {
  //     icon: Code,
  //     title: t("home.codingProgramming"),
  //     description: t("home.codingDescription"),
  //     color: "#ff7100",
  //     gradient: "from-orange-500 to-red-500",
  //   },
  //   {
  //     icon: Cpu,
  //     title: t("home.artificialIntelligence"),
  //     description: t("home.aiDescription"),
  //     color: "#ff9100",
  //     gradient: "from-orange-400 to-orange-600",
  //   },
  //   {
  //     icon: Palette,
  //     title: t("home.digitalDesign"),
  //     description: t("home.designDescription"),
  //     color: "#d80e1f",
  //     gradient: "from-red-600 to-pink-600",
  //   },
  //   {
  //     icon: Globe,
  //     title: t("home.webDevelopment"),
  //     description: t("home.webDescription"),
  //     color: "#ff5722",
  //     gradient: "from-red-500 to-orange-500",
  //   },
  // ];

  // const testimonials = [
  //   {
  //     name: "Marie Mukendi",
  //     role: t("home.parent"),
  //     content: t("home.testimonial1"),
  //     avatar:
  //       "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
  //     rating: 5,
  //     highlight: "confiance",
  //   },
  //   {
  //     name: "Jean-Paul Kasongo",
  //     role: t("home.student"),
  //     content: t("home.testimonial2"),
  //     avatar:
  //       "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  //     rating: 5,
  //     highlight: "chatbot",
  //   },
  //   {
  //     name: "Grace Kalala",
  //     role: t("home.parent"),
  //     content: t("home.testimonial3"),
  //     avatar:
  //       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  //     rating: 5,
  //     highlight: "innovation",
  //   },
  // ];

  // const achievements = [
  //   {
  //     icon: Users,
  //     value: "48+",
  //     label: t("home.studentsTrainedLabel"),
  //     trend: "+15%",
  //   },
  //   { icon: Award, value: "95%", label: "Taux de Réussite", trend: "+5%" },
  //   {
  //     icon: Heart,
  //     value: "13",
  //     label: t("home.kidsBootcampLabel"),
  //     trend: "Actuel",
  //   },
  //   {
  //     icon: TrendingUp,
  //     value: "100%",
  //     label: "Satisfaction",
  //     trend: "Excellent",
  //   },
  // ];

  const heroImages = [
    {
      url: "https://images.unsplash.com/photo-1633504885008-f8fed592a06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBsZWFybmluZyUyMHRlY2hub2xvZ3klMjBjb2RpbmclMjBjb21wdXRlcnN8ZW58MXx8fHwxNzU2MzAzOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1582638423482-a90640357638?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGFmcmljYW4lMjBzdHVkZW50cyUyMHByb2dyYW1taW5nJTIwcm9ib3RpY3MlMjBjbGFzc3Jvb218ZW58MXx8fHwxNzU2MzAzOTg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1697643635403-116830fe9d39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwY2hpbGRyZW4lMjB3b3JraW5nJTIwbGFwdG9wcyUyMGNyZWF0aXZlJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzU2MzAzOTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1710770563074-6d9cc0d3e338?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIweW91dGglMjBjb2RpbmclMjBwcm9ncmFtbWluZyUyMHN1Y2Nlc3N8ZW58MXx8fHwxNzU2MzAzOTk3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      url: "https://images.unsplash.com/photo-1601728735713-8561190dc839?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbGVhcm5pbmclMjB3b3Jrc2hvcHxlbnwxfHx8fDE3NTYzMDQwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div className="min-h-screen overflow-hidden font-poppins">
      {/* Hero Section épuré avec images multiples */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec patterns animés */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
            <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-pink-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-2000"></div>
          </div>

          {/* Geometric patterns */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <defs>
                <pattern
                  id="grid"
                  width="50"
                  height="50"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 50 0 L 0 0 0 50"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        <div className="relative z-10 container mx-auto max-w-7xl px-4 py-20">
          <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[80vh]">
            {/* Contenu principal - 6 colonnes */}
            <div className="lg:col-span-6 space-y-8 text-white">
              {/* Titre principal avec effet typing */}
              <div className="space-y-4 ">
                <h1 className=" textce font-poppins text-6xl lg:text-6xl xl:text-7xl font-black">
                  <span className="block bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                    {t("home.heroTitle")}
                  </span>
                  <span className="block text-white drop-shadow-2xl relative">
                    {t("home.heroTitleHighlight")}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  </span>
                </h1>

                <p className=" font-poppins font-normal text-sm lg:text-xl xl:text-xl text-orange-100 max-w-2xl leading-relaxed">
                  {t("home.heroSubtitle")}
                </p>
              </div>

              {/* Boutons avec effets */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="group bg-white text-[#ff7100] font-semibold hover:bg-gray-50 text-[16px] px-8 py-6  shadow-2xl hover:shadow-white/25 hover:scale-105 transition-all duration-300"
                  // onClick={() => onNavigate("programs")}
                >
                  {" "}
                  {t("header.enrollNow")}
                </Button>
              </div>
            </div>

            {/* Galerie d'images épurée - 6 colonnes */}
            <div className="lg:col-span-6 relative">
              {/* Image principale épurée */}
              <div className="relative">
                <div className="relative z-10 mb-6">
                  <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl">
                    <div className="relative overflow-hidden rounded-2xl">
                      <ImageWithFallback
                        src={heroImages[0].url}
                        alt="Enfants apprenant la programmation"
                        className="w-full h-80 object-cover hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Grille d'images complémentaires épurée */}
                <div className="grid grid-cols-2 gap-4">
                  {heroImages.slice(1, 3).map((image, index) => (
                    <div key={index} className="group relative">
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-3 border border-white/20 shadow-xl">
                        <div className="relative overflow-hidden rounded-xl">
                          <ImageWithFallback
                            src={image.url}
                            alt={`Aurora Academy ${index + 1}`}
                            className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="w-8 h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                              <Play className="w-4 h-4 text-white ml-0.5" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Images flottantes décoratives épurées */}
                <div className="absolute -top-8 -right-8 w-24 h-24 z-20 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl rotate-12 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src={heroImages[3].url}
                    alt="Success story"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -left-6 w-20 h-20 rounded-2xl overflow-hidden border-4 border-white/30 shadow-2xl -rotate-12 hover:rotate-0 transition-transform duration-500">
                  <ImageWithFallback
                    src={heroImages[4].url}
                    alt="AI Innovation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator épuré */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="bg-white/20 backdrop-blur-md rounded-full p-3 border border-white/30">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
