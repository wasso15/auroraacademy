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
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Lightbulb,
      title: t('about.innovation'),
      description: t('about.innovationDesc'),
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Heart,
      title: t('about.communityImpact'),
      description: t('about.communityDesc'),
      color: 'from-pink-400 to-red-500',
    },
    {
      icon: Users,
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

  return (
    <div className="min-h-screen">
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
              <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 px-6 py-2">
                <Users className="w-4 h-4 mr-2" />
                {t('about.aboutAurora')}
              </Badge>

              <div className="space-y-6">
                <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                  Qui <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">sommes-nous</span>
                </h1>
                <p className="text-xl text-orange-100 leading-relaxed max-w-2xl">
                  {t('about.foundedBelief')}
                </p>
              </div>

              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-black text-white">48+</div>
                  <div className="text-sm text-orange-200">Étudiants formés</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">3</div>
                  <div className="text-sm text-orange-200">Années d&apos;expertise</div>
                </div>
                <div className="w-px h-12 bg-white/30"></div>
                <div className="text-center">
                  <div className="text-3xl font-black text-white">95%</div>
                  <div className="text-sm text-orange-200">Taux de réussite</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjBjb2RpbmclMjBlZHVjYXRpb258ZW58MXx8fHwxNzU5NTE0NzE4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
          <div className="text-center mb-20">
            <Badge className="bg-white text-[#ff7100] border border-[#ff7100]/20 mb-6 px-6 py-2">
              <Target className="w-4 h-4 mr-2" />
              Nos Objectifs
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
              Notre <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">Mission</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  <p className="text-lg text-gray-600 leading-relaxed">
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
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {t('about.visionText')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1719159381981-1327b22aff9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwZWR1Y2F0aW9uJTIwY2xhc3Nyb29tJTIwYWZyaWNhfGVufDF8fHx8MTc1OTUxNDcyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
              Ce qui nous <span className="bg-gradient-to-r from-[#ff7100] to-[#d80e1f] bg-clip-text text-transparent">guide</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('about.guidingPrinciples')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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

              <div className="grid grid-cols-2 gap-8">
                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-[#ff7100] mb-2">100%</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.scholarshipStudents')}</div>
                  <p className="text-sm text-gray-400">{t('about.freePrograms')}</p>
                </div>

                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <div className="text-4xl font-black text-[#ff9100] mb-2">85%</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.femaleParticipation')}</div>
                  <p className="text-sm text-gray-400">{t('about.genderEquality')}</p>
                </div>

                <div className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 col-span-2">
                  <div className="text-4xl font-black text-[#d80e1f] mb-2">3</div>
                  <div className="text-orange-200 mb-1 font-medium">{t('about.communityPartnerships')}</div>
                  <p className="text-sm text-gray-400">{t('about.expandReach')}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1674049406486-4b1f6e1845fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29tcHV0ZXJzJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzU5NTE0NzI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
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
                    src="https://images.unsplash.com/photo-1758873268631-fa944fc5cad2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMG1vZGVybiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTk1MTQ3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Collaboration en équipe dans un espace moderne"
                    className="w-full h-48 object-cover rounded-2xl shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}