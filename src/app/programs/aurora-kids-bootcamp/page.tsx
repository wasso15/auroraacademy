'use client';

import { useState } from 'react';

import { 
  ArrowRight,
  Users,
  Star,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  Target,
  Heart,
  Lightbulb,
  Rocket,
  Award,
  Code,
  Bot,
  Palette,
  Cpu,
  Shield,
  Play,
  CheckCircle,
  Euro,
  Gift,
  TrendingUp,
  Building,
  Handshake,
  Sparkles,
  GraduationCap,
  BookOpen,
  Zap,
  Camera
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { motion } from "framer-motion"
import { TestimonialsSection } from '@/components/Shared/TestiamonialsSection';



export default function AuroraKidsBootcampPage() {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState(0);

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
  videoThumbnail: 'https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761401355/Aurora-Certif_156_1155853511_g4baru.jpg',
  videoDuration: '0:48',
  youtubeUrl: 'https://www.youtube.com/watch?v=t2ERHtySFfY', // Ajoutez cette ligne
},]

  const advantages = [
    {
      icon: Users,
      title: "Développement précoce",
      description: "Acquisition des compétences numériques dès le plus jeune âge pour un avantage concurrentiel",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Play,
      title: "Approche ludique",
      description: "Apprentissage par le jeu et projets concrets pour maintenir l'engagement",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Award,
      title: "Experts certifiés",
      description: "Encadrement par des formateurs qualifiés et passionnés",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Rocket,
      title: "Préparation future",
      description: "Formation aux métiers de demain dans un monde de plus en plus numérique",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const modules = [
    {
      title: "Coding",
      subtitle: "Scratch, Python & Création",
      description: "Initiation à la programmation avec Scratch puis Python. Création de jeux simples et d'applications interactives.",
      ageRange: "6-16 ans",
      duration: "8 semaines",
      level: "Débutant à Intermédiaire",
      skills: ["Logique algorithmique", "Créativité numérique", "Résolution de problèmes"],
      image: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1760750452/Aurora_Kids_11_-2021319999_tquddy.jpg",
      icon: Code,
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      title: "Intelligence Artificielle",
      subtitle: "IA & Machine Learning",
      description: "Découverte de l'IA, création de chatbots simples et introduction à l'apprentissage automatique de manière accessible.",
      ageRange: "10-16 ans",
      duration: "6 semaines",
      level: "Intermédiaire",
      skills: ["Compréhension IA", "Création chatbots", "Pensée analytique"],
      image: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1760751486/Aurora_Kids_52_1557323876_atpezb.jpg",
      icon: Bot,
      gradient: "from-purple-500 to-pink-600"
    },
    {
      title: "Culture Numérique",
      subtitle: "Sécurité & Citoyenneté",
      description: "Sécurité en ligne, citoyenneté numérique responsable et développement de la créativité digitale.",
      ageRange: "6-16 ans",
      duration: "4 semaines",
      level: "Tous niveaux",
      skills: ["Sécurité en ligne", "Éthique numérique", "Communication digitale"],
      image: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1756847457/Aurora_Kids_852575456_pi76gt.jpg",
      icon: Shield,
      gradient: "from-green-500 to-teal-600"
    },
    // {
    //   title: "Robotique",
    //   subtitle: "Construction & Programmation",
    //   description: "Construction et programmation de robots, ateliers STEM pratiques pour comprendre la mécanique et l'électronique.",
    //   ageRange: "8-16 ans",
    //   duration: "10 semaines",
    //   level: "Débutant à Avancé",
    //   skills: ["Construction mécanique", "Programmation robots", "Travail d'équipe"],
    //   image: "https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjByb2JvdGljcyUyMFNURU0lMjBlZHVjYXRpb258ZW58MXx8fHwxNzU5NzgzMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    //   icon: Cpu,
    //   gradient: "from-orange-500 to-red-600"
    // }
  ];



  const practicalInfo = [
    {
      icon: Calendar,
      title: "Prochaines sessions",
      content: "\nVacances de Pâques : 7-21 avril 2025",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi-Vendredi : 09h-14h\nSamedi : 9h-12h\nDimanche : Repos",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Lieu",
      content: "24 Novembre , En face de l'academie de Beaux Arts\nAurora Academy\nKinshasa, Gombe",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Euro,
      title: "Tarifs",
      content: "Programme complet : GRATUIT\nMatériel inclus\nCertificat de fin",
      color: "from-orange-500 to-orange-600"
    }
  ];

  const investorStats = [
    { value: "300+", label: "Enfants à former", icon: Users },
    { value: "85%", label: "Taux de réussite", icon: TrendingUp },
    { value: "3", label: "Programmes innovants", icon: Rocket },
    { value: "10+", label: "Familles impactées", icon: Heart }
  ];

  const carouselImages = [
    {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1757015825/Aurora_Kids_69_-1649735682_m49ikr.jpg",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },
     {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1756846710/Aurora_Kids_178_hfzji1.jpg",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },

       {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1756846698/Beligo_23_rkwilj.jpg",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },

         {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1756846710/Beligo_35_zsjznv.jpg",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },

      {
      url: "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759754937/Aurora_Kids_35_1_-1566730116_chvedm.jpg",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },
    
   
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* 1. Hero Section */}
      <section className=" py-24 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative  z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="space-y-8">
              
              
              <h1 className="text-5xl  text-center font-poppins lg:text-left lg:text-[65px] leading-none font-black ">
Éveillez la créativité, formez les talents de demain              </h1>
              
              <p className=" text-lg text-center lg:text-left lg:text-2xl font-cooperhewitt text-orange-100 leading-none">
                Formation immersive pour les enfants de <span className="font-bold text-white">6 à 16 ans</span> en Coding, IA, Culture Numérique et Robotique
              </p>
               
            </div>
            
      <div className="relative">
  <div className="relative overflow-hidden ">
    <motion.div
      animate={{
        y: [0, -20, 0] // Déplacement vertical pour l'effet bounce
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className=' py-3'
    >
      <ImageWithFallback
        src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1760730025/Kids-5_2x_tsowsa.png"
        alt="Enfants en formation de programmation"
        className="w-full md:h-[550px] lg:h-[670px] object-contain"
      />
    </motion.div>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* 2. Explication détaillée du programme */}
      <section className=" pt-24 pb-14 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              C&apos;est quoi <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora Kids Bootcamp</span> ?
            </h2>
            <p className="lg:text-xl font-cooperhewitt text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un programme d&apos;excellence conçu pour préparer les enfants de 6 à 16 ans aux métiers et défis du monde numérique de demain.
            </p>
          </div>

          {/* Main Program Description */}
          <div className="grid md:grid-cols-2 gap-6  lg:gap-12 mb-2">
              <Card className="border-0 shadow-xl  lg:p-7 bg-gradient-to-br from-orange-50 to-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ff7100]/10 to-transparent rounded-full -translate-y-16 translate-x-16"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-gray-900 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-xl flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-white" />
                    </div>
                    Notre Vision
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Image illustrative */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                    <ImageWithFallback
                      src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1760750364/Aurora_Kids_54_1_2012348447_thniku.jpg"
                      alt="Enfants apprenant le coding"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff7100]/20 to-transparent"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base"> 
                    Aurora Kids Bootcamp est bien plus qu&apos;un simple programme d&apos;apprentissage informatique. C&apos;est une <span className="font-bold text-[#ff7100]">expérience transformatrice</span> qui éveille la curiosité naturelle des enfants et la transforme en compétences concrètes pour le 21ème siècle.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    Nous croyons que chaque enfant possède un potentiel créatif unique. Notre mission est de leur donner les <span className="font-bold text-[#ff7100]">outils, les connaissances et la confiance</span> nécessaires pour devenir les innovateurs, créateurs et leaders technologiques de demain.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl lg:p-7 bg-gradient-to-br from-blue-50 to-white overflow-hidden relative">
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-gray-900 flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    Notre Approche
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Image illustrative */}
                  <div className="relative overflow-hidden rounded-2xl shadow-lg mb-6">
                    <ImageWithFallback
                      src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1760731401/IMG_6482_-1848993558_tjwawq.jpg"
                      alt="Enfants travaillant en équipe"
                      className="w-full h-48 object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Apprentissage par la pratique",
                        description: "80% de pratique, 20% de théorie. Vos enfants créent de vrais projets dès le premier jour."
                      },
                      {
                        title: "Pédagogie adaptée à l'âge",
                        description: "Chaque groupe bénéficie d'une approche sur-mesure selon leur tranche d'âge et niveau."
                      },
                {
  title: "Gamification",
  description: "Un apprentissage inspiré du jeu vidéo pour motiver, récompenser les progrès et rendre chaque session amusante."
},
                     
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="font-black text-gray-900 mb-1">{item.title}</h4>
                          <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
          </div>

        </div>
      </section>

       <section className="pb-14 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Rocket className="w-4 h-4 mr-2" />
              Nos Programmes
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              4 modules pour une <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">formation complète</span>
            </h2>
          </div>

          {/* Module Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {modules.map((module, index) => (
              <Button
                key={index}
                variant={selectedModule === index ? "default" : "outline"}
                className={`px-10 py-5 font-bold transition-all duration-300 ${
                  selectedModule === index 
                    ? `bg-gradient-to-r ${module.gradient} text-white shadow-lg scale-105` 
                    : "border-2 border-gray-200 text-gray-600 hover:border-[#ff7100] hover:text-[#ff7100]"
                }`}
                onClick={() => setSelectedModule(index)}
              >
                <module.icon className="w-4 h-4 mr-2" />
                {module.title}
              </Button>
            ))}
          </div>

          {/* Selected Module Details */}
          <div className="max-w-5xl mx-auto">
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-80 lg:h-auto">
                  <ImageWithFallback
                    src={modules[selectedModule].image}
                    alt={modules[selectedModule].title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${modules[selectedModule].gradient} opacity-20`}></div>
                  <div className="absolute top-4 left-4 ">
                    <Badge className={`bg-gradient-to-r ${modules[selectedModule].gradient} text-white font-bold `}>
                      {modules[selectedModule].ageRange}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-8 lg:p-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${modules[selectedModule].gradient}`}>
                      {(() => {
                        const IconComponent = modules[selectedModule].icon;
                        return <IconComponent className="h-6 w-6 text-white" />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-gray-900">{modules[selectedModule].title}</h3>
                      <p className="text-[#ff7100] font-bold">{modules[selectedModule].subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    {modules[selectedModule].description}
                  </p>
                  
              
                  
                  <div className="mb-8">
                    <h4 className="font-black text-gray-900 mb-4 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-[#ff7100]" />
                      Compétences développées
                    </h4>
                    <div className="space-y-2">
                      {modules[selectedModule].skills.map((skill, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-gray-600">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                 
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

 <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-full filter blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-6 px-6 py-3 text-lg font-bold">
              <Camera className="w-5 h-5 mr-2" />
              Nos Enfants en Action
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              Découvrez la <span className="bg-gradient-to-r from-[#ff9100] to-[#ff7100] bg-clip-text text-transparent">Magie</span> en Images
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Chaque photo raconte l&apos;histoire d&apos;un enfant qui apprend, crée et s&apos;épanouit au sein d&apos;Aurora Kids Bootcamp
            </p>
          </div>

          {/* Carousel */}
          <div className="max-w-6xl mx-auto">
            <Carousel className="w-full" opts={{ align: "start", loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="group border-0 shadow-2xl overflow-hidden bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all duration-500 hover:scale-105">
                        <CardContent className="p-0">
                          <div className="relative overflow-hidden">
                            <div className="aspect-square relative">
                              <ImageWithFallback
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>
                            
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden p-6 md:flex -left-12 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#ff7100] transition-all duration-300" />
              <CarouselNext className="hidden p-6 md:flex -right-12 bg-white/20 backdrop-blur-md border-white/30 text-white hover:bg-white hover:text-[#ff7100] transition-all duration-300" />
            </Carousel>
          </div>

          {/* Stats below carousel */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 mt-16">
            {investorStats.map((stat, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 hover:scale-105">
                <CardContent className="text-center p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>     

      {/* 6. Témoignages / Résultats */}
      <section className=" bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          {/* <div className="text-center mb-10">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Témoignages
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Ce que disent les <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">parents</span>
            </h2>
          </div> */}

             <TestimonialsSection testimonials={testimonials} />
       

        </div>
      </section>

      {/* 7. Informations pratiques */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
          
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Tout ce que vous devez <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">savoir</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {practicalInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl text-center transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${info.color} shadow-lg`}>
                    <info.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-4">{info.title}</h3>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line text-sm">
                    {info.content}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-center text-gray-900 mb-12">
              Questions fréquentes
            </h3>
            <div className="space-y-6">
              {[
                {
                  question: "Mon enfant n'a aucune expérience en informatique, peut-il participer ?",
                  answer: "Absolument ! Nos programmes sont conçus pour accueillir des débutants complets. Nous commençons par les bases et progressons de manière adaptée."
                },
                {
                  question: "Quel matériel faut-il apporter ?",
                  answer: "Rien ! Nous fournissons tous les ordinateurs, robots et matériels nécessaires. Votre enfant n'a besoin que de sa curiosité et de sa motivation."
                },
                {
                  question: "Y a-t-il des groupes par âge ?",
                  answer: "Oui, nous organisons les groupes par tranches d'âge (6-9 ans, 10-13 ans, 14-16 ans) pour adapter la pédagogie et favoriser l'apprentissage."
                }
              ].map((faq, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <h4 className="font-black text-gray-900 mb-3 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#ff7100]" />
                      {faq.question}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}