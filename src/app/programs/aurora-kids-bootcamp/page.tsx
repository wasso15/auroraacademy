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
      image: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMHByb2dyYW1taW5nJTIwd29ya3Nob3AlMjBhZnJpY2F8ZW58MXx8fHwxNzU5NzgzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image: "https://images.unsplash.com/photo-1574803442176-70d4b465c920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwYXJ0aWZpY2lhbCUyMGludGVsbGlnZW5jZSUyMEFJJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc1OTc4MzM2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
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
      image: "https://images.unsplash.com/photo-1714859100446-ed641aeea95c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY3JlYXRpdml0eSUyMGtpZHMlMjBhcnQlMjBkZXNpZ258ZW58MXx8fHwxNzU5NzgzMzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Shield,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Robotique",
      subtitle: "Construction & Programmation",
      description: "Construction et programmation de robots, ateliers STEM pratiques pour comprendre la mécanique et l'électronique.",
      ageRange: "8-16 ans",
      duration: "10 semaines",
      level: "Débutant à Avancé",
      skills: ["Construction mécanique", "Programmation robots", "Travail d'équipe"],
      image: "https://images.unsplash.com/photo-1568585262983-9b54814595a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjByb2JvdGljcyUyMFNURU0lMjBlZHVjYXRpb258ZW58MXx8fHwxNzU5NzgzMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      icon: Cpu,
      gradient: "from-orange-500 to-red-600"
    }
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
      content: "Du 15 janvier au 15 mars 2025\nVacances de Pâques : 7-21 avril 2025",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lundi-Vendredi : 14h-17h\nSamedi : 9h-12h\nDimanche : Repos",
      color: "from-green-500 to-green-600"
    },
    {
      icon: MapPin,
      title: "Lieu",
      content: "Aurora Academy\nKinshasa, Gombe\nMode hybride disponible",
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
    { value: "200+", label: "Enfants à former", icon: Users },
    { value: "85%", label: "Taux de réussite", icon: TrendingUp },
    { value: "4", label: "Programmes innovants", icon: Rocket },
    { value: "50+", label: "Familles impactées", icon: Heart }
  ];

  const carouselImages = [
    {
      url: "https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYwMTEwMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Apprentissage du Coding",
      description: "Nos jeunes développeurs créent leurs premiers programmes"
    },
    {
      url: "https://images.unsplash.com/photo-1623287072519-d224cfbac5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAxMTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Environnement Joyeux",
      description: "L'apprentissage dans la bonne humeur et l'enthousiasme"
    },
    {
      url: "https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGVhbXdvcmslMjBjb2xsYWJvcmF0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMTEwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Travail en Équipe",
      description: "Collaboration et entraide pour des projets réussis"
    },
    {
      url: "https://images.unsplash.com/photo-1629873289739-a191ba51b2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJvYm90aWNzJTIwU1RFTSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjAxMTA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Robotique & STEM",
      description: "Construction et programmation de robots innovants"
    },
    {
      url: "https://images.unsplash.com/photo-1612446485216-2dc52fc0bb05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2VsZWJyYXRpbmclMjBzdWNjZXNzJTIwYWNoaWV2ZW1lbnR8ZW58MXx8fHwxNzYwMTEwNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Célébration des Succès",
      description: "Chaque victoire est célébrée avec fierté et joie"
    },
    {
      url: "https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjB0ZWNobm9sb2d5JTIwY29tcHV0ZXJ8ZW58MXx8fHwxNzYwMTEwNDAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Technologie Accessible",
      description: "Des outils modernes pour tous les enfants"
    },
    {
      url: "https://images.unsplash.com/photo-1759646828783-7e1b8f02f89b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNyZWF0aXZlJTIwd29ya3Nob3AlMjBsZWFybmluZ3xlbnwxfHx8fDE3NjAxMTA0MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Ateliers Créatifs",
      description: "Libérer la créativité à travers la technologie"
    },
    {
      url: "https://images.unsplash.com/photo-1758270705172-07b53627dfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwa2lkcyUyMHN0dWR5aW5nJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzYwMTEwNDAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      title: "Diversité & Inclusion",
      description: "Tous ensemble pour apprendre et grandir"
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* 1. Hero Section */}
      <section className=" py-40 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        {/* Background animations */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-6 h-6 bg-pink-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-blue-300 rounded-full animate-ping delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              
              
              <h1 className="text-4xl lg:text-6xl font-black leading-tight">
                Transformez la curiosité de vos enfants en compétences numériques
              </h1>
              
              <p className="text-xl lg:text-2xl font-cooperhewitt text-orange-100 leading-relaxed">
                Formation immersive pour les enfants de <span className="font-bold text-white">6 à 16 ans</span> en Coding, IA, Culture Numérique et Robotique
              </p>
               
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMHByb2dyYW1taW5nJTIwd29ya3Nob3AlMjBhZnJpY2F8ZW58MXx8fHwxNzU5NzgzMzQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Enfants en formation de programmation"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              {/* Floating badges */}
            
            
            </div>
          </div>
        </div>
      </section>

      {/* 2. Explication détaillée du programme */}
      <section className=" pt-24 pb-14 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              C&apos;est quoi <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora Kids Bootcamp</span> ?
            </h2>
            <p className="text-xl font-cooperhewitt text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Un programme d&apos;excellence conçu pour préparer les enfants de 6 à 16 ans aux métiers et défis du monde numérique de demain.
            </p>
          </div>

          {/* Main Program Description */}
          <div className="grid lg:grid-cols-2 gap-12 mb-2">
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
                      src="https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYwMTEwMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                      src="https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGVhbXdvcmslMjBjb2xsYWJvcmF0aW9uJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMTEwNDAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Enfants travaillant en équipe"
                      className="w-full h-48 object-cover"
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
                      {
                        title: "Environnement ludique",
                        description: "L'apprentissage se fait dans la joie et l'amusement avec des défis stimulants."
                      }
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
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-10">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Témoignages
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Ce que disent les <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">parents</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-black text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                    <div className="ml-auto flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed italic">
                    {testimonial.comment}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

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