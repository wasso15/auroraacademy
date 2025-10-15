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

const timelineEvents: TimelineEvent[] = [
  {
    id: '1',
    date: '15',
    month: 'Janvier',
    year: '2025',
    title: 'Premier Bootcamp Kids',
    location: 'Aurora Academy - Campus Principal',
    description: 'Lancement officiel de notre programme Kids Bootcamp avec 15 jeunes innovateurs qui découvrent Scratch et créent leurs premiers jeux interactifs.',
    participants: 15,
    category: 'Kids Bootcamp',
    categoryColor: 'from-blue-500 to-purple-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1633504885008-f8fed592a06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMGNvbXB1dGVyJTIwZWR1Y2F0aW9uJTIwYWZyaWNhfGVufDF8fHx8MTc1NTg4MzUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Enfants apprenant à coder'
      },
      {
        src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmclMjBjb21wdXRlcnxlbnwxfHx8fDE3NjAxNDE5Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Classe interactive'
      },
      {
        src: 'https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdvcmtzaG9wJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMTM4ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Workshop enfants'
      },
      {
        src: 'https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwY29kaW5nJTIwcHJvZ3JhbW1pbmd8ZW58MXx8fHwxNzYwMTEwMzk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Apprentissage programmation'
      }
    ]
  },
  {
    id: '2',
    date: '22',
    month: 'Janvier',
    year: '2025',
    title: 'Atelier Robotique & IA',
    location: 'Lab Innovation - Zone Tech',
    description: 'Construction et programmation de robots avec introduction aux concepts d\'intelligence artificielle. Les enfants explorent le monde fascinant de la robotique.',
    participants: 12,
    category: 'IA & Robotique',
    categoryColor: 'from-purple-500 to-pink-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1743677077216-00a458eff9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjByb2JvdGljcyUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzU1ODgzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Robotique enfants'
      },
      {
        src: 'https://images.unsplash.com/photo-1629873289739-a191ba51b2c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHJvYm90aWNzJTIwU1RFTSUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3NjAxMTA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'STEM éducation'
      },
      {
        src: 'https://images.unsplash.com/photo-1544772711-57da9c7368fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHN0ZW0lMjB3b3Jrc2hvcCUyMGFjdGl2aXR5fGVufDF8fHx8MTc2MDEzODg4Mnww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Activité STEM'
      }
    ]
  },
  {
    id: '3',
    date: '10',
    month: 'Février',
    year: '2025',
    title: 'Formation Développement Web',
    location: 'Code Lab - Espace Digital',
    description: 'Les jeunes adultes plongent dans le monde du développement web moderne avec React, Node.js et construisent leurs premières applications web professionnelles.',
    participants: 20,
    category: 'Développement Web',
    categoryColor: 'from-green-500 to-teal-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nJTIwY29tcHV0ZXJzfGVufDF8fHx8MTc1NTg4MzUyNnww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Développeurs web'
      },
      {
        src: 'https://images.unsplash.com/photo-1637855195094-992d3d578f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWIlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjAxMzg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Lab technologie'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMGNvbGxhYm9yYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTU4ODM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Collaboration équipe'
      },
      {
        src: 'https://images.unsplash.com/photo-1557734864-c78b6dfef1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZ3JvdXAlMjBsZWFybmluZyUyMHByb2plY3R8ZW58MXx8fHwxNzYwMTM4ODgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Projet groupe'
      }
    ]
  },
  {
    id: '4',
    date: '5',
    month: 'Mars',
    year: '2025',
    title: 'Master Class Design Graphique',
    location: 'Studio Créatif Aurora',
    description: 'Découverte de l\'univers du design graphique avec création de logos, affiches et identités visuelles en utilisant Photoshop et Illustrator.',
    participants: 18,
    category: 'Design Graphique',
    categoryColor: 'from-orange-500 to-red-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1605606722649-39761c5a3397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFwaGljJTIwZGVzaWduJTIwd2ViJTIwZGV2ZWxvcG1lbnQlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NTU4ODM1MjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Design graphique'
      },
      {
        src: 'https://images.unsplash.com/photo-1740205644066-0ca1535e19ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHRlY2hub2xvZ3klMjB3b3Jrc2hvcCUyMGhhbmRzfGVufDF8fHx8MTc2MDEzODg4M3ww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Workshop créatif'
      },
      {
        src: 'https://images.unsplash.com/photo-1623287072519-d224cfbac5a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkcmVuJTIwY2xhc3Nyb29tJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjAxMTA0MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Classe heureuse'
      }
    ]
  },
  {
    id: '5',
    date: '18',
    month: 'Mars',
    year: '2025',
    title: 'Présentation Projets Finaux',
    location: 'Auditorium Aurora - Grande Salle',
    description: 'Journée spéciale où nos étudiants présentent leurs créations devant leurs familles, la communauté et nos partenaires. Un moment de fierté et de célébration.',
    participants: 45,
    category: 'Événements',
    categoryColor: 'from-yellow-500 to-orange-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZnJpY2FuJTIwc3R1ZGVudHMlMjB0ZWNobm9sb2d5JTIwY2xhc3Nyb29tfGVufDF8fHx8MTc1NTg4MzUyOXww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Présentation étudiants'
      },
      {
        src: 'https://images.unsplash.com/photo-1634464660153-468d44306ac4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neSUyMHdvcmtzaG9wfGVufDF8fHx8MTc1NTg4MzUxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Workshop digital'
      },
      {
        src: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMGxhcHRvcCUyMGNsYXNzcm9vbXxlbnwxfHx8fDE3NTU4ODM1Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Classe coding'
      },
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMGNvbGxhYm9yYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTU4ODM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Travail équipe'
      },
      {
        src: 'https://images.unsplash.com/photo-1611581719398-08fe2eb020c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHdvcmtzaG9wJTIwY2xhc3Nyb29tJTIwbGVhcm5pbmd8ZW58MXx8fHwxNzYwMTM4ODgxfDA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Apprentissage workshop'
      }
    ]
  },
  {
    id: '6',
    date: '2',
    month: 'Avril',
    year: '2025',
    title: 'Hackathon Junior',
    location: 'Innovation Hub - Salle Polyvalente',
    description: 'Premier hackathon junior où 32 jeunes codeurs travaillent en équipe pour créer des solutions innovantes aux défis de notre communauté.',
    participants: 32,
    category: 'Événements',
    categoryColor: 'from-indigo-500 to-blue-600',
    images: [
      {
        src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwd29yayUyMGNvbGxhYm9yYXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTU4ODM1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Hackathon collaboration'
      },
      {
        src: 'https://images.unsplash.com/photo-1633504885008-f8fed592a06a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMGNvbXB1dGVyJTIwZWR1Y2F0aW9uJTIwYWZyaWNhfGVufDF8fHx8MTc1NTg4MzUxNHww&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Coding intense'
      },
      {
        src: 'https://images.unsplash.com/photo-1637855195094-992d3d578f42?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMHRlY2hub2xvZ3klMjBsYWIlMjBjb21wdXRlcnxlbnwxfHx8fDE3NjAxMzg4ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
        alt: 'Tech lab hackathon'
      }
    ]
  }
];

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
