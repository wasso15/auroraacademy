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
  Heart,
  Award,
  Zap,
  TrendingUp,
  Play,

} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { TestimonialsSection } from "@/components/Shared/TestiamonialsSection";
import CtaSection from "@/components/Shared/CtaSection";

export default function HomePage() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Code,
      title: t("home.codingProgramming"),
      description: t("home.codingDescription"),
      color: "#ff7100",
      gradient: "from-orange-500 to-red-500",
    },

    {
      icon: Palette,
      title: t("home.digitalDesign"),
      description: t("home.designDescription"),
      color: "#d80e1f",
      gradient: "from-red-600 to-pink-600",
    },
    {
      icon: Cpu,
      title: t("home.artificialIntelligence"),
      description: t("home.aiDescription"),
      color: "#ff9100",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      icon: Globe,
      title: t("home.webDevelopment"),
      description: t("home.webDescription"),
      color: "#ff5722",
      gradient: "from-red-500 to-orange-500",
    },
  ];




    const testimonials: {
      type: 'text' | 'video';
      name: string;
      role: string;
      content: string;
      videoThumbnail?: string;
      videoDuration?: string;
      youtubeUrl?: string;
    }[] = [

  {
  type: 'video',
  name: 'Moise SHOMBA',
  role: t('home.student'),
  content: t('home.testimonial2'),
  videoThumbnail: 'https://images.unsplash.com/photo-1682617367184-5ccbda40e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjB0ZXN0aW1vbmlhbCUyMHZpZGVvJTIwY29uZmVyZW5jZXxlbnwxfHx8fDE3NTcwOTE0NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  videoDuration: '0:48',
  youtubeUrl: 'https://www.youtube.com/watch?v=t2ERHtySFfY', // Ajoutez cette ligne
},

  ];
  const achievements = [
    {
      icon: Users,
      value: "48+",
      label: t("home.studentsTrainedLabel"),
      trend: "+15%",
    },
    { icon: Award, value: "95%", label: "Taux de Réussite", trend: "+5%" },
    {
      icon: Heart,
      value: "13",
      label: t("home.kidsBootcampLabel"),
      trend: "Actuel",
    },
    {
      icon: TrendingUp,
      value: "100%",
      label: "Satisfaction",
      trend: "Excellent",
    },
  ];

  const heroImages = [
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756846710/Aurora_Kids_178_hfzji1.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756846710/Aurora_Kids_35_jcrvso.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756846699/Aurora-09_25_zthrlz.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756846710/Beligo_35_zsjznv.jpg",
    },
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756847457/Aurora_Kids_852575456_pi76gt.jpg",
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
          <div className="absolute inset-0 opacity-20">
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
                <h1 className=" textce font-poppins mt-10 lg:mt-0 text-6xl lg:text-6xl xl:text-7xl font-black">
                  <span className="block  text-center md:text-left bg-gradient-to-r from-white to-orange-100 bg-clip-text text-transparent">
                    {t("home.heroTitle")}
                  </span>
                  <span className="block text-white drop-shadow-2xl relative">
                    {t("home.heroTitleHighlight")}
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  </span>
                </h1>

                <p className=" font-cooperhewitt font-normal text-center md:text-left text-lg  md:text-xl text-orange-100 max-w-2xl leading-tight">
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
                  {t("header.enrollNow")}
                </Button>
              </div>
            </div>

            {/* Galerie d'images épurée - 6 colonnes */}
            <div className=" mt-5 lg:mt-0 lg:col-span-6 relative">
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

      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background decoratif */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-orange-200 to-red-200 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-br from-pink-200 to-orange-200 rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white mb-6 px-6 py-3 text-[16px]  font-medium">
              Notre Impact en Chiffres
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Des Résultats Concrets
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto font-cooperhewitt leading-relaxed">
              {
                "Chaque chiffre raconte une histoire de transformation et d'innovation dans l'éducation numérique."
              }
            </p>
          </div>

          {/* Statistics Grid avec images intégrées */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl text-center transition-all duration-500 hover:scale-110 bg-white/80 backdrop-blur-sm overflow-hidden relative"
              >
                {/* Image de fond */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <ImageWithFallback
                    src={heroImages[index % heroImages.length].url}
                    alt={achievement.label}
                    className="w-full h-full object-cover"
                  />
                </div>

                <CardContent className="pt-8 pb-8 relative z-10">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-[#ff7100]/10 to-[#ff9100]/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg border-2 border-[#ff7100]/20">
                      <achievement.icon className="w-10 h-10 text-[#ff7100] group-hover:animate-pulse" />
                    </div>
                    {/* Trend Badge */}
                    <div className="absolute -top-2 -right-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce shadow-lg">
                      {achievement.trend}
                    </div>
                  </div>

                  {/* Main Value */}
                  <div className="text-4xl lg:text-5xl font-black text-[#ff7100] mb-3 bg-gradient-to-r from-[#ff7100] to-[#ff9100] bg-clip-text text-transparent">
                    {achievement.value}
                  </div>

                  {/* Label */}
                  <p className="text-gray-600 font-medium text-lg leading-relaxed">
                    {achievement.label}
                  </p>

                  {/* Progress indicator */}
                  <div className="mt-4 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#ff7100] to-[#ff9100] rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section avec cards ultra-modernes */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff7100' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white mb-6 px-6 py-3 text-[16px] font-medium">
              Programmes Innovants
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {t("home.whatWeTeach")}
            </h2>
            <p className="text-xl lg:text-2xl font-cooperhewitt text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("home.comprehensiveCurriculum")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105 overflow-hidden relative"
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                ></div>

                <CardHeader className="text-center relative z-10 pb-4">
                  <div className="relative mb-6">
                    <div
                      className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-all duration-300 shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                        border: `2px solid ${feature.color}20`,
                      }}
                    >
                      <feature.icon
                        className="h-10 w-10 group-hover:animate-pulse"
                        style={{ color: feature.color }}
                      />
                    </div>
                    {/* Particules flottantes */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
                  </div>
                  <CardTitle className="text-xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-600 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Progress bar animée */}
                  <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-1000"
                      style={{ backgroundColor: feature.color }}
                    ></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section avec layout asymétrique */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              {t("home.ourPrograms")}
            </h2>
            <p className="text-xl font-cooperhewitt text-gray-600 max-w-3xl mx-auto">
              {t("home.tailoredExperiences")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Aurora Kids Bootcamp */} 
            <Card className="group overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-orange-50/50 hover:shadow-orange-200/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1757015825/Aurora_Kids_69_-1649735682_m49ikr.jpg"
                  alt="Kids learning robotics and AI"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-[#ff9100] to-[#ff7100] text-white px-4 py-2 font-bold">
                    <Users className="w-4 h-4 mr-2" />
                    {t("home.ages6to16")}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-[#ff7100] mb-2">
                  {t("home.auroraKidsBootcamp")}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {t("home.kidsBootcampDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-[#d80e1f] to-[#ff5722] hover:from-[#b71c1c] hover:to-[#e64a19] text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  // onClick={() => onNavigate('programs')}
                >
                  {t("home.learnMore")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* Youth & Adults Program */}
            <Card className="group overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-red-50/50 hover:shadow-red-200/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1757018699/Aurora-09-02_20_1462186066_zd2lka.jpg"
                  alt="Young professionals working on computers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-[#ff7100] mb-2">
                  {t("home.youthAdultsProgram")}
                </CardTitle>
                <CardDescription className="text-gray-600  leading-relaxed">
                  {t("home.youthAdultsDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-[#d80e1f] to-[#ff5722] hover:from-[#b71c1c] hover:to-[#e64a19] text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  // onClick={() => onNavigate('programs')}
                >
                  {t("home.learnMore")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>

            {/* School Lab*/}
            <Card className="group overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-white to-red-50/50 hover:shadow-red-200/50 transition-all duration-500 hover:scale-[1.02]">
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759506038/F5KcPEGWoAApqJZ_hieea2.png"
                  alt="Young professionals working on computers"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                <div className="absolute bottom-4 right-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-black text-[#ff7100] mb-2">
                  {t("home.SchoollLab")}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed">
                  {t("home.SchoollLabDescription")}
                </CardDescription>
              </CardHeader>

              <CardContent>
                <Button
                  className="w-full bg-gradient-to-r from-[#d80e1f] to-[#ff5722] hover:from-[#b71c1c] hover:to-[#e64a19] text-white font-medium py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                  // onClick={() => onNavigate('programs')}
                >
                  <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  {t("home.learnMore")}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section ultra-moderne */}
      <CtaSection/>
      {/* Section Témoignages Ultra-Moderne */}
      <TestimonialsSection testimonials={testimonials} />
    </div>
  );
}
