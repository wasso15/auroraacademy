"use client";

import { useLanguage } from '../../../components/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/card';
import { Button } from '../../../components/ui/button';
import { Badge } from '../../../components/ui/badge';
import { ImageWithFallback } from '../../../components/ImageWithFallback';
import { 
  Heart, 
  Users, 
  Clock, 
  BookOpen, 
  TrendingUp,
  Target,
  Laptop,
  Bot,
  Gift,
  Building,
  Mail,
  Phone,
  Send,
  Sparkles,
  ArrowRight,
  Play,
  Quote,
  Globe,
  Handshake,
  Award,
  Calendar,
  CheckCircle,
  MessageSquare
} from 'lucide-react';

export default function BecomePartnerBootcampPage() {
  const { t } = useLanguage();
  
  // Chiffres clés
  const keyStats = [
    { icon: Users, value: '12', label: t('partnerBootcamp.childrenTrained'), color: '#ff7100' },
    { icon: Clock, value: '40h', label: t('partnerBootcamp.learningHours'), color: '#ff9100' },
    { icon: BookOpen, value: '3', label: t('partnerBootcamp.modules'), color: '#d80e1f' }
  ];

  // Témoignages
  const testimonials = [
    {
      quote: t('partnerBootcamp.testimonial1'),
      author: t('partnerBootcamp.testimonial1Author'),
      role: t('partnerBootcamp.testimonial1Role'),
      image: 'https://images.unsplash.com/photo-1597933471507-1ca5765185d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29tcHV0ZXIlMjBjbGFzc3xlbnwxfHx8fDE3NjQ0Mjk4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      quote: t('partnerBootcamp.testimonial2'),
      author: t('partnerBootcamp.testimonial2Author'),
      role: t('partnerBootcamp.testimonial2Role'),
      image: 'https://images.unsplash.com/photo-1633504885008-f8fed592a06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBjb2RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ0Mjk4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      quote: t('partnerBootcamp.testimonial3'),
      author: t('partnerBootcamp.testimonial3Author'),
      role: t('partnerBootcamp.testimonial3Role'),
      image: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NDQyOTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  // Galerie photos
  const galleryImages = [
    'https://images.unsplash.com/photo-1633504885008-f8fed592a06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwY2hpbGRyZW4lMjBjb2RpbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjQ0Mjk4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc2NDQyOTg0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1597933471507-1ca5765185d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29tcHV0ZXIlMjBjbGFzc3xlbnwxfHx8fDE3NjQ0Mjk4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1523396140703-e5bdad4e5dea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjB0ZWNobm9sb2d5JTIwYWZyaWNhfGVufDF8fHx8MTc2NDQyOTg0NHww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-12">
            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg">
              <Heart className="w-5 h-5 mr-2" />
              {t('partnerBootcamp.badge')}
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black mb-8">
              {t('partnerBootcamp.heroTitle')}
            </h1>
            <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
              {t('partnerBootcamp.heroSubtitle')}
            </p>
            
            {/* Video After Movie */}
            <div className="max-w-4xl mx-auto mt-12">
              <Card className="border-0 shadow-2xl overflow-hidden bg-black/20 backdrop-blur-md">
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-white/30 transition-all cursor-pointer group">
                        <Play className="w-10 h-10 text-white group-hover:scale-110 transition-transform" />
                      </div>
                      <p className="text-white text-lg">{t('partnerBootcamp.watchAfterMovie')}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Chiffres Clés */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('partnerBootcamp.keyNumbers')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partnerBootcamp.keyNumbersDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {keyStats.map((stat, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl text-center transition-all duration-500 hover:scale-105 bg-white/80 backdrop-blur-sm overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ background: `linear-gradient(135deg, ${stat.color}30, ${stat.color}50)` }}></div>
                
                <CardContent className="pt-12 pb-12 relative z-10">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg" style={{ backgroundColor: `${stat.color}20` }}>
                    <stat.icon className="h-10 w-10 group-hover:animate-pulse" style={{ color: stat.color }} />
                  </div>
                  <h3 className="text-5xl font-black mb-3" style={{ color: stat.color }}>{stat.value}</h3>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              {t('partnerBootcamp.modulesDetails')}
            </p>
          </div>
        </div>
      </section>

      {/* 3. Galerie Photos */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('partnerBootcamp.galleryTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partnerBootcamp.galleryDesc')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-square">
                <ImageWithFallback
                  src={image}
                  alt={`Aurora Kids Bootcamp ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Témoignages */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('partnerBootcamp.testimonialsTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partnerBootcamp.testimonialsDesc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white overflow-hidden relative">
                <div className="absolute top-6 right-6 text-[#ff7100]/10 group-hover:text-[#ff7100]/20 transition-colors">
                  <Quote className="w-16 h-16" />
                </div>
                
                <CardContent className="pt-8 relative z-10">
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4 border-4 border-[#ff7100]/20">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <p className="text-gray-600 italic mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  
                  <div className="text-center">
                    <p className="font-black text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-[#ff7100]">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Vision Future */}
      <section className="py-24 bg-gradient-to-br from-[#ff7100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              {t('partnerBootcamp.visionBadge')}
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black mb-8">
              {t('partnerBootcamp.visionTitle')}
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">{t('partnerBootcamp.expansion2025_2028')}</h3>
                  <p className="text-orange-100 leading-relaxed">
                    {t('partnerBootcamp.expansionDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">{t('partnerBootcamp.impactYouth')}</h3>
                  <p className="text-orange-100 leading-relaxed">
                    {t('partnerBootcamp.impactYouthDesc')}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center flex-shrink-0">
                  <Handshake className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black mb-2">{t('partnerBootcamp.joinUsCall')}</h3>
                  <p className="text-orange-100 leading-relaxed">
                    {t('partnerBootcamp.joinUsCallDesc')}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-black mb-6">{t('partnerBootcamp.futureEditions')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">{t('partnerBootcamp.edition2026')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">{t('partnerBootcamp.edition2027')}</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-lg">{t('partnerBootcamp.edition2028')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Soutien Financier */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-green-50 to-white">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                      <Gift className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">
                      {t('partnerBootcamp.financialSupportTitle')}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {t('partnerBootcamp.financialSupportDesc')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.financialOption1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.financialOption2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.financialOption3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.financialOption4')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 7. Soutien Matériel */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-blue-50 to-white">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.materialOption1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.materialOption2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.materialOption3')}</p>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                      <Laptop className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">
                      {t('partnerBootcamp.materialSupportTitle')}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {t('partnerBootcamp.materialSupportDesc')}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 8. Partenariat Institutionnel */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-white">
            <CardContent className="p-12">
              <div className="text-center mb-12">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Building className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-black text-gray-900 mb-4">
                  {t('partnerBootcamp.institutionalTitle')}
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {t('partnerBootcamp.institutionalDesc')}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.institutionalOption1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.institutionalOption2')}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.institutionalOption3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.institutionalOption4')}</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl">
                <p className="text-center text-gray-800 font-black text-lg">
                  {t('partnerBootcamp.collaborationLabel')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 9. Suivi et Impact */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-orange-50 to-white">
            <CardContent className="p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-gray-900">
                      {t('partnerBootcamp.impactTrackingTitle')}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {t('partnerBootcamp.impactTrackingDesc')}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#ff7100] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.trackingOption1')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#ff7100] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.trackingOption2')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#ff7100] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.trackingOption3')}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#ff7100] flex-shrink-0 mt-1" />
                    <p className="text-gray-700">{t('partnerBootcamp.trackingOption4')}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 10. Conclusion & Appel à Collaboration */}
      <section className="py-24 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg">
            <Sparkles className="w-5 h-5 mr-2" />
            {t('partnerBootcamp.conclusionBadge')}
          </Badge>
          <h2 className="text-4xl lg:text-6xl font-black mb-8">
            {t('partnerBootcamp.conclusionTitle')}
          </h2>
          <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed mb-8">
            {t('partnerBootcamp.conclusionDesc')}
          </p>
          <p className="text-lg text-orange-200 max-w-3xl mx-auto mb-12">
            {t('partnerBootcamp.conclusionNote')}
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <Button className="bg-white text-[#ff7100] hover:bg-gray-100 font-black text-lg px-8 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
              <Handshake className="w-6 h-6 mr-2" />
              {t('partnerBootcamp.becomePartnerBtn')}
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* 11. Formulaire de Contact */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">
              {t('partnerBootcamp.contactFormTitle')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('partnerBootcamp.contactFormDesc')}
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white">
            <CardContent className="p-10">
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      {t('partnerBootcamp.formName')}
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50" 
                      placeholder={t('partnerBootcamp.formNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      {t('partnerBootcamp.formOrganization')}
                    </label>
                    <input 
                      type="text" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50" 
                      placeholder={t('partnerBootcamp.formOrganizationPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      {t('partnerBootcamp.formEmail')}
                    </label>
                    <input 
                      type="email" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50" 
                      placeholder={t('partnerBootcamp.formEmailPlaceholder')}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-black text-gray-700 mb-2">
                      {t('partnerBootcamp.formPhone')}
                    </label>
                    <input 
                      type="tel" 
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50" 
                      placeholder={t('partnerBootcamp.formPhonePlaceholder')}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t('partnerBootcamp.formPartnershipType')}
                  </label>
                  <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50">
                    <option>{t('partnerBootcamp.formPartnershipOption1')}</option>
                    <option>{t('partnerBootcamp.formPartnershipOption2')}</option>
                    <option>{t('partnerBootcamp.formPartnershipOption3')}</option>
                    <option>{t('partnerBootcamp.formPartnershipOption4')}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-black text-gray-700 mb-2">
                    {t('partnerBootcamp.formMessage')}
                  </label>
                  <textarea 
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent resize-none transition-all duration-300 hover:border-[#ff7100]/50" 
                    placeholder={t('partnerBootcamp.formMessagePlaceholder')}
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button className="flex-1 bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-black text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <Send className="w-5 h-5 mr-2" />
                    {t('partnerBootcamp.formSubmitBtn')}
                  </Button>
                  
                  <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-black text-lg py-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {t('partnerBootcamp.formWhatsAppBtn')}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{t('partnerBootcamp.phoneLabel')}</h3>
                <p className="text-gray-600">+243 xxx xxx xxx</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#ff9100] to-[#f57c00] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{t('partnerBootcamp.emailLabel')}</h3>
                <p className="text-gray-600">partnerships@auroraacademy.cd</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-black text-gray-900 mb-2">{t('partnerBootcamp.websiteLabel')}</h3>
                <p className="text-gray-600">www.auroraacademy.cd</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
