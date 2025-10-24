"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  TrendingUp,
  Lightbulb,
  Rocket,
  Sparkles,
  Accessibility,
  Crown,
  Handshake,
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Accessibility,
      title: t('about.accessibility'),
      description: t('about.accessibilityDesc'),
      color: 'from-yellow-400 to-orange-500',
    },
  
    {
      icon: Crown,
      title: t('about.inclusiveLearning'),
      description: t('about.inclusiveDesc'),
      color: 'from-blue-400 to-purple-500',
    },
    {
      icon: Rocket,
      title: t('about.futureReady'),
      description: t('about.futureDesc'),
      color: 'from-green-400 to-teal-500',
    },
  ];

    const partnerLogos = [
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBsb2dvJTIwY29tcGFueSUyMGJyYW5kfGVufDF8fHx8MTc1OTc1Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Google',
      logo: 'https://images.unsplash.com/photo-1746046936818-8d432ebd3d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBsb2dvJTIwdGVjaCUyMGNvbXBhbnl8ZW58MXx8fHwxNzU5NzUyNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Apple',
      logo: 'https://images.unsplash.com/photo-1758467700789-d6f49099c884?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHBsZSUyMGxvZ28lMjBicmFuZCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5NzUyNzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Université de Kinshasa',
      logo: 'https://images.unsplash.com/photo-1721441906254-b5d28d9114f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwbG9nbyUyMGVkdWNhdGlvbiUyMGluc3RpdHV0aW9ufGVufDF8fHx8MTc1OTc1Mjc1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'IBM',
      logo: 'https://images.unsplash.com/photo-1628760584600-6c31148991e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpYm0lMjBsb2dvJTIwdGVjaG5vbG9neSUyMGNvbXBhbnl8ZW58MXx8fHwxNzU5NzUyNzcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Microsoft',
      logo: 'https://images.unsplash.com/photo-1662947036644-ecfde1221ac7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWNyb3NvZnQlMjBsb2dvJTIwY29tcGFueSUyMGJyYW5kfGVufDF8fHx8MTc1OTc1Mjc0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Google',
      logo: 'https://images.unsplash.com/photo-1746046936818-8d432ebd3d0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb29nbGUlMjBsb2dvJTIwdGVjaCUyMGNvbXBhbnl8ZW58MXx8fHwxNzU5NzUyNzUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen font-poppins">
      {/* Hero Section - Qui sommes-nous */}
      <section className="py-32 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
             

              <div className="space-y-6">
                <h1 className=" text-center md:text-left text-4xl lg:text-6xl font-black text-white leading-tight">
                  Qui sommes-nous
                </h1>
                <p className="md:text-xl text-white max-w-2xl leading-relaxed ">
                  {t('about.foundedBelief')}
                </p>
              </div>

            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759754923/Aurora_51_1_1102365895_p5sbi2.jpg"
                  alt="Étudiants africains en formation technologique"
                  className="w-full h-[500px] object-cover rounded-3xl shadow-2xl"
                />

                {/* Floating elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>

                <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-xl flex items-center justify-center shadow-xl -rotate-12">
                  <Rocket className="w-8 h-8 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nos Objectifs */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto max-w-7xl px-4">
          {/* <div className="text-center mb-20">
            <Badge className="bg-white text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Target className="w-6 h-6 mr-2" />
              Nos Objectifs
            </Badge>
             <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Mission</span>
            </h2> 
          </div> */}

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] flex items-center justify-center shadow-lg">
                      <Target className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900">Mission</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className=" text-gray-600 leading-relaxed mb-4">
                    {t('about.missionText')}
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#d80e1f] to-[#ff5722] flex items-center justify-center shadow-lg">
                      <Eye className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-black text-gray-900">Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {t('about.visionText')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759754937/Aurora_Kids_35_1_-1566730116_chvedm.jpg"
                alt="Salle de classe technologique en Afrique"
                className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nos Valeurs */}
      <section className="py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Heart className="w-4 h-4 mr-2" />
              Nos Valeurs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Ce qui nous guide
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl font-cooperhewitt mx-auto leading-relaxed">
              {t('about.guidingPrinciples')}
            </p>
          </div>

          <div className=" mb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center bg-white relative overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

                <CardHeader className="relative z-10 pb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-all duration-300`}>
                    <value.icon className="h-8 w-8 text-white group-hover:animate-pulse" />
                  </div>
                  <CardTitle className="text-xl font-black text-gray-900 group-hover:text-[#ff7100] transition-colors">
                    {value.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative z-10">
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Notre Impact */}
      <section className="py-32 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#ff7100] rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-[#ff9100] rounded-full animate-ping"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-[#d80e1f] rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20 mb-8 px-6 py-2">
                <TrendingUp className="w-4 h-4 mr-2" />
                Notre Impact
              </Badge>

              <h2 className="text-4xl lg:text-5xl font-black mb-8">
                Transformer <span className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] bg-clip-text text-transparent">l&apos;avenir</span>
              </h2>

              <p className="text-xl text-gray-300 mb-12 leading-relaxed">
                {t('about.buildingMovement')}
              </p>

              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-[#ff7100] mb-2">0%</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.scholarshipStudents')}</div>
                  <p className="text-sm text-gray-400">{t('about.freePrograms')}</p>
                </div>

                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-[#ff9100] mb-2">25%</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.femaleParticipation')}</div>
                  <p className="text-sm text-gray-400">{t('about.genderEquality')}</p>
                </div>

                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 col-span-2">
                  <div className="text-4xl font-black text-[#d80e1f] mb-2">0</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.communityPartnerships')}</div>
                  <p className="text-sm text-gray-400">{t('about.expandReach')}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <ImageWithFallback
                    src="https://res.cloudinary.com/dfy1hmq1b/image/upload/f_auto,q_auto/v1756847457/Aurora_Kids_852575456_pi76gt.jpg"
                    alt="Enfants apprenant la programmation"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl"
                  />

                  <div className="bg-gradient-to-br from-[#ff7100] to-[#ff9100] p-6 rounded-2xl shadow-xl">
                    <Award className="w-8 h-8 text-white mb-3" />
                    <h3 className="font-black text-white mb-2">Excellence</h3>
                    <p className="text-orange-100 text-sm">Reconnus pour notre approche innovante</p>
                  </div>
                </div>

                <div className="space-y-6 pt-12">
                  <div className="bg-gradient-to-br from-[#d80e1f] to-[#ff5722] p-6 rounded-2xl shadow-xl">
                    <Users className="w-8 h-8 text-white mb-3" />
                    <h3 className="font-black text-white mb-2">Communauté</h3>
                    <p className="text-red-100 text-sm">Une famille de créateurs numériques</p>
                  </div>

                  <ImageWithFallback
                    src="https://res.cloudinary.com/dfy1hmq1b/image/upload/v1759766892/Aurora-Certif_172_-1478623027_yek2th.jpg"
                    alt="Collaboration en équipe dans un espace moderne"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       <section className=" py-32 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-[#ff7100]/10 to-[#d80e1f]/10 text-[#ff7100] border border-[#ff7100]/20 mb-4 px-4 py-2">
              <Handshake className="w-4 h-4 mr-2" />
              Nos Partenaires
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-4">
              Ils nous font <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">confiance</span>
            </h2>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            {/* Gradient masks */}
            <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Animated carousel */}
            <div className="flex animate-[scroll_30s_linear_infinite] gap-12 items-center">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                >
                  <ImageWithFallback
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain filter brightness-75 hover:brightness-100 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

         
        </div>
      </section>
    </div>
  );
}