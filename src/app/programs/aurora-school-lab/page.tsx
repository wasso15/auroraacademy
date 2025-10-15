'use client';

import { useState, useEffect } from 'react';
import { 
  GraduationCap,
  Users,
  Sparkles,
  Code,
  Palette,
  Brain,
  Target,
  Heart,
  Lightbulb,
  Award,
  CheckCircle,
  Calendar,
  Bell,
  School,
  Laptop,
  ArrowRight,
  Mail,
  ChevronDown,
  Clock,
  Zap,
  Play,
  Settings,
  Globe
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface AuroraSchoolLabPageProps {
  onNavigate: (page: string) => void;
}

export default function AuroraSchoolLabPage() {
  const { t } = useLanguage();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [countdown, setCountdown] = useState({ days: 45, hours: 12, minutes: 30, seconds: 0 });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(prev => {
        let { days, hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: Code,
      title: 'Culture numérique et bases du code',
      description: 'Initiation aux fondamentaux de la programmation et de la pensée computationnelle',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Palette,
      title: 'Créativité numérique',
      description: 'Création de jeux, animations et projets interactifs pour stimuler l\'imagination',
      color: 'from-pink-500 to-rose-600'
    },
    {
      icon: Brain,
      title: 'Résolution de problèmes',
      description: 'Développement de la pensée logique et analytique à travers des défis ludiques',
      color: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Travail collaboratif',
      description: 'Projets en équipe pour apprendre l\'entraide et la communication',
      color: 'from-green-500 to-teal-600'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Petits groupes personnalisés',
      description: 'Encadrement sur mesure pour que chaque élève progresse à son rythme'
    },
    {
      icon: Lightbulb,
      title: 'Apprentissage par projet',
      description: 'Apprendre en créant et en expérimentant avec des projets concrets'
    },
    {
      icon: Award,
      title: 'Compétences valorisables',
      description: 'Des acquis concrets utilisables à l\'école et au quotidien'
    },
    {
      icon: Zap,
      title: 'Technologies de demain',
      description: 'Découverte des innovations dès le primaire et le secondaire'
    }
  ];

  const faqs = [
    {
      question: 'Quand le programme sera-t-il lancé ?',
      answer: 'Le lancement officiel est prévu prochainement. En vous inscrivant, vous serez informé en avant-première et bénéficierez d\'un accès prioritaire.'
    },
    {
      question: 'Quels équipements sont nécessaires ?',
      answer: 'Aurora School Lab s\'adapte à l\'équipement disponible dans votre école : ordinateurs, tablettes ou environnements numériques simples suffisent pour commencer. Nous proposons également des solutions clés en main.'
    },
    {
      question: 'Y a-t-il un coût pour l\'école ?',
      answer: 'Nous détaillerons les modalités tarifaires lors du lancement officiel. Plusieurs formules seront proposées pour s\'adapter aux budgets de chaque établissement. Pour l\'instant, inscrivez-vous pour rester informé.'
    },
    {
      question: 'Quel est l\'âge des élèves concernés ?',
      answer: 'Le programme Aurora School Lab est destiné aux élèves de 6 à 17 ans, du primaire au secondaire. Les contenus sont adaptés à chaque tranche d\'âge.'
    },
    {
      question: 'Les enseignants reçoivent-ils une formation ?',
      answer: 'Oui ! Nous proposons un accompagnement complet pour les enseignants avec des formations, des ressources pédagogiques et un suivi personnalisé.'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section avec Countdown */}
      <section className="py-24 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          
          <h1 className="text-5xl lg:text-7xl font-black mb-2">Aurora School Lab</h1>
          <p className="text-2xl font-cooperhewitt lg:text-3xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-12">
            Initiez vos élèves aux technologies de demain
          </p>
{/* Countdown */}
<div className="max-w-3xl mx-auto mb-12 px-4">
  <p className="text-lg sm:text-xl text-orange-100 mb-6 text-center">Lancement dans :</p>
  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
    {[
      { value: countdown.days, label: 'Jours' },
      { value: countdown.hours, label: 'Heures' },
      { value: countdown.minutes, label: 'Minutes' },
      { value: countdown.seconds, label: 'Secondes' }
    ].map((item, index) => (
      <div
        key={index}
        className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col items-center"
      >
        <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-2">
          {String(item.value).padStart(2, '0')}
        </div>
        <div className="text-xs sm:text-sm text-orange-100 uppercase tracking-wider">
          {item.label}
        </div>
      </div>
    ))}
  </div>
</div>


          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Bientôt disponible pour les écoles primaires et secondaires !
          </p>
        </div>
      </section>

      {/* Image Hero */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjAxNDE5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Enfants en atelier numérique"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
              <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-4 px-4 py-2">
                <School className="w-4 h-4 mr-2" />
                Atelier en action
              </Badge>
              <p className="text-white text-lg font-bold">
                Des élèves engagés dans la découverte du numérique
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Qu'est-ce que Aurora School Lab */}
      {/* <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Target className="w-4 h-4 mr-2" />
              Notre Mission
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Qu`&apos;est-ce que <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora School Lab</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aurora School Lab est un programme innovant di`&apos;nitiation au numérique destiné aux élèves de <span className="font-black text-[#ff7100]">6 à 17 ans</span>. Notre mission : éveiller la curiosité, développer la créativité et préparer les jeunes aux compétences digitales essentielles du XXIᵉ siècle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <CardContent className="p-8 relative z-10">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdvcmtzaG9wJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMTM4ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Atelier collaboratif"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section> */}

      {/* Pourquoi rejoindre */}
      {/* <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Avantages
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Pourquoi rejoindre <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora School Lab</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex gap-6 items-start group">
                <div className="w-14 h-14 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Comment participer - 3 CTAs */}
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-2">
              Comment <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">participer</span> ?
            </h2>
            <p className="text-2xl text-gray-600 font-cooperhewitt max-w-4xl mx-auto leading-relaxed">
              Aurora School Lab n&apos;est pas encore officiellement lancé, mais vous pouvez :
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* CTA 1 */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Bell className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Je souhaite être informé</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Recevez toutes les actualités du lancement en avant-première
                </p>
                <Button className="w-full py-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium  rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Bell className="w-4 h-4 mr-1" />
                  M&apos;informer
                </Button>
              </CardContent>
            </Card>

            {/* CTA 2 */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-[#ff7100] to-[#d80e1f] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <School className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pré-inscrire mon école</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Bénéficiez d&apos;un accès prioritaire dès le lancement officiel
                </p>
                <Button className="w-full bg-gradient-to-r from-[#ff7100] to-[#d80e1f] hover:from-[#e65100] hover:to-[#b71c1c] text-white font-medium py-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105">
                  <School className="w-4 h-4 mr-1" />
                  Pré-inscrire
                </Button>
              </CardContent>
            </Card>

            {/* CTA 3 */}
            <Card className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-gradient-to-br from-green-50 to-teal-50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <Laptop className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Demander une démo</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Organisez un atelier pilote dans votre établissement
                </p>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white font-medium py-6 rounded-xl shadow-lg transition-all duration-300 group-hover:scale-105">
                  <Laptop className="w-4 h-4 mr-1" />
                  Demander une démo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* À propos d'Aurora Academy */}
      {/* <section className="py-20 bg-gradient-to-br from-[#ff7100]/5 via-[#ff9100]/5 to-[#d80e1f]/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
                <GraduationCap className="w-4 h-4 mr-2" />
                Qui sommes-nous ?
              </Badge>
              <h2 className="text-4xl font-black text-gray-900 mb-6">
                À propos d&apos;<span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Aurora Academy</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Aurora Academy est un centre de formation dédié à l&apos;innovation et à l&apos;éducation numérique. Depuis plusieurs années, nous accompagnons les enfants, adolescents et enseignants dans la découverte et la maîtrise des technologies de demain.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Nous mettons l&apos;accent sur la <span className="font-black text-[#ff7100]">créativité</span> et le développement de <span className="font-black text-[#ff7100]">compétences concrètes</span> pour préparer la nouvelle génération aux défis du futur.
              </p>
              <Button 
                onClick={() => onNavigate('about')}
                className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                En savoir plus
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMGNvbGxhYm9yYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTU4ODM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Aurora Academy Team"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#ff7100]/20 to-transparent"></div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-[#ff7100]">
                <div className="text-4xl font-black text-[#ff7100] mb-2">48+</div>
                <div className="text-gray-600 font-bold">Étudiants formés</div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-2xl p-6 border-4 border-[#ff9100]">
                <div className="text-4xl font-black text-[#ff9100] mb-2">95%</div>
                <div className="text-gray-600 font-bold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
{/* 
      <section className="py-20 bg-white">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Settings className="w-4 h-4 mr-2" />
              FAQ
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Questions <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Fréquentes</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-2 border-gray-100 hover:border-[#ff7100]/30 transition-all duration-300 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-6 flex items-center justify-between group"
                >
                  <h3 className="font-black text-lg text-gray-900 group-hover:text-[#ff7100] transition-colors pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-6 h-6 text-[#ff7100] flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                </button>
                
                {openFaq === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-gray-100">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter / CTA Final */}
      <section className="py-20 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-4 text-center relative z-10">
          <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-black mb-2">
            Restez informés !
          </h2>
          <p className="text-2xl font-cooperhewitt text-orange-100 mb-12 leading-relaxed max-w-2xl mx-auto">
            Ne manquez pas le lancement d&apos;Aurora School Lab et offrez à vos élèves la chance de découvrir les technologies de demain.
          </p>

          <div className="max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl   p-8 border border-white/20">
              <div className="flex flex-col items-center sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
                <Button className="bg-white text-[#ff7100] hover:bg-gray-100  py-6 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 whitespace-nowrap">
                  Recevoir les mises à jour
                </Button>
              </div>
              <p className="text-orange-100 text-sm mt-4">
                <CheckCircle className="w-4 h-4 inline mr-1" />
                Vous recevrez un email de confirmation
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
