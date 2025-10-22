'use client';

import { useState } from 'react';

import { 
  Camera,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  X,
  Eye
} from 'lucide-react';
import { useLanguage } from '@/components/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { motion, AnimatePresence } from "motion/react"
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { Button } from '@/components/ui/button';

interface TimelineEvent {
  id: string;
  date: string;
  month: string;
  year: string;
  title: string;
  location: string;
  description: string;
  participants: number;
  images: {
    src: string;
    alt: string;
  }[];
  category: string;
  categoryColor: string;
}

const timelineEvents: TimelineEvent[] = 
[
  {
    "id": "1",
    "date": "25",
    "month": "Juin",
    "year": "2024",
    "title": "Jury final première cohorte graphisme",
    "location": "Aurora Academy -Mont-Ngafula",
    "description": "Jury final de la première cohorte en graphisme avec la participation de 15 étudiants talentueux présentant leurs projets créatifs.",
    "participants": 15,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": [{
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087231/gallery/CMVL_96_c6okhp.jpg",
      "alt": "Photo d'ensemble des participants au jury final de la première cohorte en graphisme"
    },{
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087231/gallery/CMVL_50_ps6cmt.jpg",
      "alt": "participant au jury final presentant son projet- aurora academy"
    },

    {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087231/gallery/CMVL_33_qwy0lq.jpg",
      "alt": "participante au jury final presentant son projet- aurora academy"
    },
        {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087232/gallery/CMVL_81_xaux8u.jpg",
      "alt": "Photo d'ensemble des participants au jury final de la première cohorte en graphisme"
    },
    
  ]
  },
  {
    "id": "2",
    "date": "7",
    "month": "Juillet",
    "year": "2024",
    "title": "Cérémonie de remise de brevets - 1ère cohorte en graphisme",
    "location": "Aurora Academy -Mont-Ngafula",
    "description": "Cérémonie festive marquant la fin de la première cohorte en graphisme et la remise officielle des brevets aux étudiants.",
    "participants": 15,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": [{
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087751/gallery/Aurora_73_hisdmw.jpg",
      "alt": "Photo apprenante recevant sont brevet - aurora academy"
    },
  {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087750/gallery/Aurora_84_k8t40a.jpg",
      "alt": "Photo apprenante age recevant sont brevet - aurora academy"
    },

    {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087750/gallery/Aurora_205_bytn36.jpg",
      "alt": "Photo groupe d'apprenant avec leurs brevets - aurora academy"
    },

    {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087749/gallery/Aurora_109_thtn3f.jpg",
      "alt": "Photo MC avec une bouteille de vin - aurora academy"
    },
    {
      "src": "https://res.cloudinary.com/dfy1hmq1b/image/upload/v1761087748/gallery/Aurora_210_p6pmlz.jpg",
      "alt": "Photo 3 apprenants presentant leurs brevets - aurora academy"
    },
  
  ]
  },
  {
    "id": "3",
    "date": "28",
    "month": "Juillet",
    "year": "2024",
    "title": "Lancement de la 2ᵉ cohorte en graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Début du programme pour la deuxième cohorte en graphisme avec 28 nouveaux apprenants motivés.",
    "participants": 28,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": []
  },
  {
    "id": "4",
    "date": "11",
    "month": "Août",
    "year": "2024",
    "title": "3ᵉ séance de formation - 2ᵉ cohorte en graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Troisième séance de formation du programme de graphisme pour la deuxième cohorte, axée sur les techniques avancées de design.",
    "participants": 0,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": []
  },
  {
    "id": "5",
    "date": "9",
    "month": "Novembre",
    "year": "2024",
    "title": "Remise de brevets - 2ᵉ cohorte en graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Cérémonie de clôture de la deuxième cohorte en graphisme avec la remise des brevets aux 28 étudiants.",
    "participants": 28,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": []
  },
  {
    "id": "6",
    "date": "9",
    "month": "Février",
    "year": "2025",
    "title": "Lancement de la 1ère cohorte en intégration web",
    "location": "Aurora Academy - Campus Principal",
    "description": "Début du programme d’intégration web avec la participation de 23 apprenants désireux de maîtriser les bases du développement front-end.",
    "participants": 23,
    "category": "Intégration Web",
    "categoryColor": "from-green-500 to-teal-600",
    "images": []
  },
  {
    "id": "7",
    "date": "16",
    "month": "Février",
    "year": "2025",
    "title": "2ᵉ séance de formation - intégration web",
    "location": "Aurora Academy - Campus Principal",
    "description": "Deuxième séance de formation pour la cohorte d’intégration web, axée sur la mise en page responsive et les composants dynamiques.",
    "participants": 0,
    "category": "Intégration Web",
    "categoryColor": "from-green-500 to-teal-600",
    "images": []
  },
  {
    "id": "8",
    "date": "11",
    "month": "Mai",
    "year": "2025",
    "title": "Lancement de la 3ᵉ cohorte en graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Lancement de la troisième cohorte en graphisme avec la participation de 23 nouveaux apprenants passionnés de design numérique.",
    "participants": 23,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": []
  },
  {
    "id": "9",
    "date": "1",
    "month": "Juin",
    "year": "2025",
    "title": "Avant-dernière séance de formation - graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Avant-dernière séance du programme de graphisme, marquée par les projets collaboratifs de 17 apprenants.",
    "participants": 17,
    "category": "Graphisme",
    "categoryColor": "from-pink-500 to-orange-500",
    "images": []
  },
  {
    "id": "10",
    "date": "4",
    "month": "Août",
    "year": "2025",
    "title": "Lancement du programme Aurora Kids Bootcamp",
    "location": "Aurora Academy - Campus Principal",
    "description": "Début du programme Aurora Kids Bootcamp, dédié à l’enseignement du coding, de la culture numérique et de l’intelligence artificielle aux enfants de 6 à 17 ans.",
    "participants": 0,
    "category": "Kids Bootcamp",
    "categoryColor": "from-blue-500 to-purple-600",
    "images": []
  },
  {
    "id": "11",
    "date": "8",
    "month": "Août",
    "year": "2025",
    "title": "Jour 3 - Introduction au coding avec Scratch",
    "location": "Aurora Academy - Campus Principal",
    "description": "Troisième jour du Kids Bootcamp, consacré à l’introduction au coding à travers la plateforme Scratch.",
    "participants": 0,
    "category": "Kids Bootcamp",
    "categoryColor": "from-blue-500 to-purple-600",
    "images": []
  },
  {
    "id": "12",
    "date": "13",
    "month": "Août",
    "year": "2025",
    "title": "Jour 4 - Travaux pratiques collaboratifs avec Scratch",
    "location": "Aurora Academy - Campus Principal",
    "description": "Séance pratique orientée sur le travail collectif et la création de jeux interactifs avec Scratch.",
    "participants": 0,
    "category": "Kids Bootcamp",
    "categoryColor": "from-blue-500 to-purple-600",
    "images": []
  },
  {
    "id": "13",
    "date": "20",
    "month": "Août",
    "year": "2025",
    "title": "Remise de brevets - 1ère cohorte Aurora Kids Bootcamp",
    "location": "Aurora Academy - Campus Principal",
    "description": "Cérémonie festive de remise de brevets pour les jeunes participants de la première cohorte du programme Aurora Kids Bootcamp.",
    "participants": 0,
    "category": "Kids Bootcamp",
    "categoryColor": "from-blue-500 to-purple-600",
    "images": []
  },
  {
    "id": "14",
    "date": "31",
    "month": "Août",
    "year": "2025",
    "title": "Jury final - 1ère cohorte en intégration web & 3ᵉ cohorte en graphisme",
    "location": "Aurora Academy - Campus Principal",
    "description": "Session de jury final réunissant les participants de la première cohorte en intégration web et de la troisième cohorte en graphisme, avec la participation de 16 étudiants.",
    "participants": 16,
    "category": "Intégration & Graphisme",
    "categoryColor": "from-green-500 to-orange-500",
    "images": []
  }
]


export default function GalleryPage() {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; event: TimelineEvent } | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (image: { src: string; alt: string }, event: TimelineEvent, index: number) => {
    setSelectedImage({ ...image, event });
    setCurrentImageIndex(index);
  };

  const handleNextImage = () => {
    if (selectedImage) {
      const nextIndex = (currentImageIndex + 1) % selectedImage.event.images.length;
      setCurrentImageIndex(nextIndex);
      setSelectedImage({
        ...selectedImage.event.images[nextIndex],
        event: selectedImage.event
      });
    }
  };

  const handlePreviousImage = () => {
    if (selectedImage) {
      const prevIndex = currentImageIndex === 0 
        ? selectedImage.event.images.length - 1 
        : currentImageIndex - 1;
      setCurrentImageIndex(prevIndex);
      setSelectedImage({
        ...selectedImage.event.images[prevIndex],
        event: selectedImage.event
      });
    }
  };

  return (
    <div className="min-h-screen  font-poppins">
      {/* Hero Section */}
      <section className=" py-40 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg font-bold">
            <Camera className="w-5 h-5 mr-2" />
            {t('gallery.gallery')}
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8">Notre Histoire en Images</h1>
          <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            Revivez les moments forts d&apos;Aurora Academy à travers notre timeline interactive
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-6xl px-4">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#ff7100] via-[#ff9100] to-[#d80e1f] hidden lg:block"></div>

            {/* Timeline Events */}
            <div className="space-y-24">
              {timelineEvents.map((event, index) => (
                <TimelineEventComponent
                  key={event.id}
                  event={event}
                  index={index}
                  isLeft={index % 2 === 0}
                  onImageClick={handleImageClick}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={handleNextImage}
            onPrevious={handlePreviousImage}
            currentIndex={currentImageIndex}
            totalImages={selectedImage.event.images.length}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

// Timeline Event Component
interface TimelineEventComponentProps {
  event: TimelineEvent;
  index: number;
  isLeft: boolean;
  onImageClick: (image: { src: string; alt: string }, event: TimelineEvent, index: number) => void;
}

function TimelineEventComponent({ event, index, isLeft, onImageClick }: TimelineEventComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-12 items-center">
        {/* Content Side */}
        <div className={`${isLeft ? 'text-right' : 'lg:col-start-2 text-left lg:pt-[140px]'}`}>
          <motion.div
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Badge className={`bg-gradient-to-r ${event.categoryColor} text-white mb-4 px-4 py-2 shadow-lg inline-block`}>
              {event.category}
            </Badge>
            <h3 className="text-3xl font-black text-gray-900 mb-3">{event.title}</h3>
            <div className="flex items-center gap-3 mb-4 text-gray-600" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{event.location}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4 text-lg">
              {event.description}
            </p>
            <div className="flex items-center gap-4" style={{ justifyContent: isLeft ? 'flex-end' : 'flex-start' }}>
              <div className="flex items-center gap-2 text-gray-600">
                <Users className="w-5 h-5 text-[#ff7100]" />
                <span className="font-bold">{event.participants} participants</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline Center Point */}
        <div className="absolute left-1/2 top-0 transform -translate-x-1/2 z-20">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="relative"
          >
            {/* Date Badge */}
            <div className="relative bg-white rounded-2xl  border-4 border-[#ff7100] p-4 min-w-[110px]">
              <div className="text-center">
                <div className="text-2xl font-black text-[#ff7100]">{event.date}</div>
                <div className="text-xs font-bold text-gray-600 uppercase">{event.month}</div>
                <div className="text-xs text-gray-500">{event.year}</div>
              </div>
              
              {/* Dot Connection */}
              <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-full border-4 border-white shadow-lg" style={{
                [isLeft ? 'right' : 'left']: '-3rem'
              }}></div>
            </div>
          </motion.div>
        </div>

        {/* Images Side */}
        <div className={isLeft ? 'lg:col-start-2' : ''}>
          <ImageGalleryGrid images={event.images} event={event} onImageClick={onImageClick} />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden">
        <div className="relative pl-12">
          {/* Mobile Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ff7100] via-[#ff9100] to-[#d80e1f]"></div>
          
          {/* Mobile Date Badge */}
          <div className="absolute left-0 top-0 transform -translate-x-2">
            <div className="bg-white rounded-xl shadow-xl border-4 border-[#ff7100] p-2 min-w-[80px]">
              <div className="text-center">
                <div className="text-2xl font-black text-[#ff7100]">{event.date}</div>
                <div className="text-xs font-bold text-gray-600 uppercase">{event.month}</div>
              </div>
            </div>
          </div>

          {/* Mobile Content */}
          <div className="pt-8">
            <Badge className={`bg-gradient-to-r ${event.categoryColor} text-white mb-3 px-3 py-1 shadow-lg`}>
              {event.category}
            </Badge>
            <h3 className="text-2xl font-black text-gray-900 mb-2">{event.title}</h3>
            <div className="flex items-center gap-2 mb-3 text-gray-600">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">{event.location}</span>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              {event.description}
            </p>
            <div className="flex items-center gap-2 text-gray-600 mb-6">
              <Users className="w-4 h-4 text-[#ff7100]" />
              <span className="font-bold text-sm">{event.participants} participants</span>
            </div>
            
            <ImageGalleryGrid images={event.images} event={event} onImageClick={onImageClick} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Image Gallery Grid Component
interface ImageGalleryGridProps {
  images: { src: string; alt: string }[];
  event: TimelineEvent;
  onImageClick: (image: { src: string; alt: string }, event: TimelineEvent, index: number) => void;
}

function ImageGalleryGrid({ images, event, onImageClick }: ImageGalleryGridProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((image, imgIndex) => (
        <motion.div
          key={imgIndex}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: imgIndex * 0.1 }}
          className={`group cursor-pointer relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 ${
            imgIndex === 0 && images.length % 2 !== 0 ? 'col-span-2' : ''
          }`}
          onClick={() => onImageClick(image, event, imgIndex)}
        >
          <div className={`relative overflow-hidden ${
            imgIndex === 0 && images.length === 3 ? 'aspect-[16/9]' : 
            imgIndex === 0 && images.length === 5 ? 'aspect-[16/9] col-span-2' : 
            'aspect-square'
          }`}>
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Eye className="h-6 w-6 text-white" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Image Modal Component
interface ImageModalProps {
  image: { src: string; alt: string; event: TimelineEvent };
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  currentIndex: number;
  totalImages: number;
}

function ImageModal({ image, onClose, onNext, onPrevious, currentIndex, totalImages }: ImageModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute -top-12 right-0 z-10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-full"
        >
          <X className="h-6 w-6" />
        </Button>

        {/* Navigation Buttons */}
        {totalImages > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              onClick={onPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-full w-14 h-14"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={onNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 rounded-full w-14 h-14"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </>
        )}

        {/* Image */}
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative max-h-[80vh]">
            <ImageWithFallback
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Image Info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <Badge className={`bg-gradient-to-r ${image.event.categoryColor} text-white mb-3 shadow-lg`}>
                  {image.event.category}
                </Badge>
                <h3 className="text-2xl font-black text-white mb-2">{image.event.title}</h3>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>{image.event.date} {image.event.month} {image.event.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    <span>{image.event.participants} participants</span>
                  </div>
                </div>
              </div>
              
              {totalImages > 1 && (
                <div className="text-white/60 text-sm font-medium bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  {currentIndex + 1} / {totalImages}
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
