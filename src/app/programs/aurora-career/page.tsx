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



export default function AuroraKidsBootcampPage() {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState(0);

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

  const testimonials = [
    {
      name: "Marie Ndola",
      role: "Maman de Josué (12 ans)",
      comment: "Mon fils a développé une véritable passion pour la programmation. Il a créé son premier jeu en seulement 3 semaines !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1628605007510-696cd5731961?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwbGVhcm5pbmclMjB0ZWNobm9sb2d5JTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzU5NzgzMzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    },
    {
      name: "Patrick Mukendi",
      role: "Papa de Grace (10 ans)",
      comment: "Aurora Academy a donné confiance à ma fille en technologie. Maintenant elle veut devenir ingénieure en robotique !",
      rating: 5,
      image: "https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvbXB1dGVycyUyMHRlY2hub2xvZ3klMjBjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3NTk3ODMzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
    }
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

        <div className="container mx-auto max-w-7xl px-4 relative  z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center ">
            <div className="space-y-8">
              
              
              <h1 className="text-4xl  text-center font-poppins lg:text-left lg:text-[70px] leading-none font-black ">
Former, Révéler, Insérer            </h1>
              
              <p className=" text-xl text-center lg:text-left lg:text-2xl font-cooperhewitt text-orange-100 leading-none">
Des parcours numériques pour jeunes et professionnels en reconversion              </p>
               
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
        src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761396553/vector-black-brief-case-with-leather_jobrin.png"
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
              C&apos;est quoi <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora Career</span> ?
            </h2>
            <p className="lg:text-xl font-cooperhewitt text-gray-600 max-w-4xl mx-auto leading-relaxed">
Un programme de formation et d’orientation professionnelle dédié aux compétences numériques, conçu pour accompagner les jeunes et les adultes en reconversion vers les métiers d’avenir, avec une intégration progressive dans le monde du travail.            </p>
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
                      src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761247937/gallery/Aurora_3_rgxwod.jpg"
                      alt="Enfants apprenant le coding"
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff7100]/20 to-transparent"></div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base"> 
Permettre à chaque jeune et chaque apprenant en reconversion de devenir acteur de son avenir, en maîtrisant les compétences numériques essentielles pour réussir, innover et contribuer au développement économique et technologique de demain.                  </p>
                 
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
                      src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761162765/gallery/Salle-end_85_zfgxyq.jpg"
                      alt="Enfants travaillant en équipe"
                      className="w-full h-48 object-cover "
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                  </div>

                  <div className="space-y-4">
                    {[
                      {
                        title: "Apprentissage par la pratique",
                        description: "80% de pratique, 20% de théorie. Nos apprenants bâtissent un vrai portfolio de projets concrets dès les premières semaines."
                      },
                      {
                        title: "Centrée sur les métiers d’avenir",
                        description: "Les formations sont alignées avec les compétences les plus recherchées"
                      },
                {
  title: "Collaboration et créativité",
  description: "Un environnement stimulant où l’on apprend en équipe, on partage, on innove, on ose."
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
      
    </div>
  );
}