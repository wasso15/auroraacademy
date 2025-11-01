import { useState } from 'react';

import { 
  Quote, 
  Star, 
  Play, 
  X,
  ChevronLeft, 
  ChevronRight, 
  Heart,
  ExternalLink
} from 'lucide-react';
import { Badge } from '../ui/badge';
import { useLanguage } from '../LanguageContext';
import { Card, CardContent } from '../ui/card';
import { ImageWithFallback } from '../ImageWithFallback';

interface TestimonialsSectionProps {
  testimonials: Array<{
    type: 'text' | 'video';
      name: string;
      role: string;
      content: string;
      videoThumbnail?: string;
      videoDuration?: string;
      youtubeUrl?: string;
  }>;
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setPlayingVideo(null);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setPlayingVideo(null);
  };

  const handleVideoPlay = (index: number) => {
    if (playingVideo === index) {
      setPlayingVideo(null);
    } else {
      setPlayingVideo(index);
    }
  };

  const getYouTubeEmbedUrl = (youtubeUrl?: string, youtubeId?: string) => {
    if (youtubeId) {
      return `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
    }
    
    if (youtubeUrl) {
      // Extraction de l'ID YouTube depuis l'URL
      const match = youtubeUrl.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
      if (match && match[1]) {
        return `https://www.youtube.com/embed/${match[1]}?autoplay=1&rel=0&modestbranding=1`;
      }
    }
    
    return '';
  };

  const closeVideo = () => {
    setPlayingVideo(null);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-white to-orange-50/30 relative overflow-hidden">
      {/* Background decoratif ultra-moderne */}
    

      {/* Patterns géométriques flottants */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-8 h-8 bg-[#ff7100] rounded-full animate-bounce"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-[#ff9100] rotate-45 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-[#d80e1f] rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-12 h-12 border-2 border-[#ff7100] rotate-45 animate-spin"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header avec animations */}
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white mb-6 px-16 py-3  text-[16px] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
            Témoignages 
          </Badge>
          
          <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-4 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            Ils Parlent de Nous
          </h2>
          
          <p className="text-lg lg:text-xl font-cooperhewitt text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Découvrez comment Aurora Academy transforme des vies et inspire la prochaine génération de créateurs numériques.
          </p>
        </div>

        <div className="relative">
          {/* Navigation arrows avec glassmorphism */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 group hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#ff7100]" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 bg-white/20 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl hover:bg-white/30 transition-all duration-300 group hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#ff7100]" />
          </button>

          {/* Carousel container */}
          <div className="overflow-hidden rounded-3xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out "
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 px-2"
                >
                  <Card className="group border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 bg-white/90 backdrop-blur-sm overflow-hidden p-7 relative hover:scale-[1.02]">
                    {/* Gradient decoratif */}
                    <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#ff7100] via-[#ff9100] to-[#d80e1f]"></div>
                    
                    <CardContent className=" px-1 lg:px-12 py-5 lg:py-16">
                      <div className="grid lg:grid-cols-12 gap-8 items-center">
                        {/* Colonne gauche - Contenu */}
                        <div className="lg:col-span-7 space-y-2">
                          {/* Quote icon avec animation */}
                          <div className="relative mb-16">
                            <div className="absolute -top-4 -left-4 w-16  h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#ff7100]/10 to-[#ff9100]/10 rounded-full flex items-center justify-center">
                              <Quote className=" h-9 w-9  lg:w-12 lg:h-12 text-[#ff7100] transform rotate-180" />
                            </div>
                          </div>

                          {/* Contenu du témoignage */}
                          <blockquote className=" text-2xl  lg:text-4xl font-black text-center md:text-left  md:text-3xl leading-tight text-gray-800 ">
                           {testimonial.content}
                          </blockquote>

                          {/* Mot-clé en surbrillance */}
                          <div className="inline-block border-1 w-full md:w-auto ">
                             <div className="">
                            <h3 className=" text-center md:text-left md:text-sm  font-cooperhewitt text-gray-900">
                              {testimonial.name}
                            </h3>
                            <p className="text-xs text-center md:text-left  md:text-sm text-[#ff7100] font-cooperhewitt font-light ">
                              {testimonial.role}
                            </p>
                            
                          </div>
                          </div>                        
                        </div>

                        {/* Colonne droite - Profile & Media */}
                        <div className="lg:col-span-5 space-y-6">
                          {/* Video ou Avatar section */}
                          {testimonial.type === 'video' ? (
  <div className="relative">
    {playingVideo === index ? (
      // Iframe YouTube
      <div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-black">
        <iframe
          src={getYouTubeEmbedUrl(testimonial.youtubeUrl)}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={`Témoignage de ${testimonial.name}`}
        />
        <button
          onClick={closeVideo}
          className="absolute top-4 right-4 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-all duration-300 z-10"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    ) : (
      // ✅ Fallback : thumbnail vidéo avec bouton play
      <div
        className="relative aspect-video rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
        onClick={() => handleVideoPlay(index)}
      >
        <ImageWithFallback
          src={testimonial.videoThumbnail || "/placeholder.jpg"}
          alt={`Thumbnail vidéo de ${testimonial.name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <Play className="w-14 h-14 text-white group-hover:scale-110 transition-transform duration-300" />
        </div>
        {testimonial.videoDuration && (
          <span className="absolute bottom-3 right-3 bg-black/70 text-white text-[8px] px-2 py-1 rounded-md">
            {testimonial.videoDuration}
          </span>
        )}
      </div>
    )}
  </div>
) : (
  // ✅ Fallback pour type texte (par ex. avatar)
  <div className="flex flex-col items-center">
    <ImageWithFallback
      src="/avatar-placeholder.png"
      alt={testimonial.name}
      className="w-32 h-32 rounded-full object-cover shadow-lg"
    />
  </div>
)}


                          {/* Profile info avec design ultra-moderne */}
                       
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Indicateurs de pagination ultra-modernes */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setPlayingVideo(null);
                }}
                className={`relative overflow-hidden rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-12 h-3 bg-gradient-to-r from-[#ff7100] to-[#ff9100]'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
              >
                {currentIndex === index && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#ff9100] to-[#ff7100] animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}