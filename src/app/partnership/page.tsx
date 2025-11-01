// pages/partnerships.js
import React from 'react';
import Head from 'next/head';
// import { Badge, Card, CardHeader, CardTitle, CardContent, Button } from '../components/ui'; // Ajuste selon tes composants
import { Handshake, Building, Target, Heart, Sparkles, Laptop, Bot, Gift, Printer } from 'lucide-react'; // ou ton set d'icônes
import { Badge, } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PartnershipsPage() {



//   const partnershipTypes = [
//     {
//       icon: Handshake,
//       title: t('partnerships.corporatePartnerships'),
//       description: t('partnerships.sponsorEquipment'),
//       gradient: 'from-[#ff7100] to-[#ff9100]',
//       benefits: ['Visibilité de marque', 'Impact social mesurable', 'Engagement RSE']
//     },
//     {
//       icon: Building,
//       title: t('partnerships.educationalInstitutions'),
//       description: t('partnerships.collaborate'),
//       gradient: 'from-[#ff9100] to-[#f57c00]',
//       benefits: ['Réseau éducatif', 'Échange d\'expertise', 'Innovation pédagogique']
//     },
//     {
//       icon: Target,
//       title: t('partnerships.individualSponsors'),
//       description: t('partnerships.supportMission'),
//       gradient: 'from-[#d80e1f] to-[#ff5722]',
//       benefits: ['Reconnaissance publique', 'Impact direct', 'Communauté exclusive']
//     }
//   ];

  return (
    <>
      <Head>
        <title>Partenaire avec Aurora Academy</title>
        {/* <meta name="description" content={t('partnerships.joinUs')} /> */}
      </Head>

      <div className="min-h-screen">
        <section className="py-48 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-pulse"></div>
            <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-300 rounded-full animate-bounce"></div>
          </div>

          <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
            <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg font-bold">
              <Heart className="w-5 h-5 mr-2" />
              Partenariats
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black mb-8">Partenaire avec Aurora Academy</h1>
            <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">Rejoignez-nous pour démocratiser l&apos;éducation technologique et construire l&apos;avenir de l&apos;alphabétisation numérique en Afrique.
            </p>
          </div>
        </section>

        <section className="py-48 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto max-w-7xl px-4">
        

            <div className="bg-gradient-to-br from-gray-50 to-orange-50/30 p-12 rounded-3xl shadow-xl">
              <h2 className="text-3xl font-black text-center text-gray-900 mb-12"></h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Laptop className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">Ordinateurs & Équipement</h3>
                  <p className="text-gray-600 text-sm">Ordinateurs portables modernes et matériel pour l&apos;apprentissage pratique</p>
                </div>
                <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Bot className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">Kits de Robotique</h3>
                  <p className="text-gray-600 text-sm">Ensembles de robotique éducative pour l&apos;apprentissage STEM</p>
                </div>
            

                 <div className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-all duration-300">
                    <Gift className="text-white w-8 h-8" />
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">Sponsorings</h3>
                  <p className="text-gray-600 text-sm">Soutien financier pour les bourses d&apos;étudiants</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
