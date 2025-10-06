"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "fr" | "en";
type LocaleDict = Record<string, string>;

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

const fr = {
  // Header
  "header.home": "Accueil",
  "header.about": "À Propos",
  "header.programs": "Programmes",
  "header.impact": "Impact",
  "header.partnerships": "Partenariats",
  "header.news": "Actualités",
  "header.gallery": "Galerie",
  "header.contact": "Contact",
  "header.becomePartner": "Devenir Partenaire",
  "header.enrollNow": "Nos formations",
  "header.tagline": "Compétences Numériques & Formation IA",

   // Programs Dropdown
    'header.auroraKidsBootcamp': 'Aurora Kids Bootcamp',
    'header.auroraSchoolLab': 'Aurora School Lab',
    'header.auroraCareer': 'Aurora Career',
    'header.allPrograms': 'Tous les Programmes',

  // Home Page
  "home.enrolling2025": "🚀 Inscriptions ouvertes pour 2025",
  "home.heroTitle": "École des métiers du futur",
  "home.heroTitleHighlight": "",
  "home.heroSubtitle":
    "Des formations flexibles et accessibles, adaptées à chaque âge et à chaque projet.",
  "home.becomePartner": "Devenir Partenaire",
  "home.studentsTrainedLabel": "Étudiants Formés",
  "home.kidsBootcampLabel": "Enfants Formés",

  // Features Section
  "home.whatWeTeach": "Ce Que Nous Enseignons",
  "home.comprehensiveCurriculum":
    "Notre programme complet couvre les compétences numériques essentielles nécessaires pour la main-d'œuvre du futur",
  "home.codingProgramming": "Programmation & Développement",
  "home.codingDescription": "Apprenez les langages de programmation modernes",
  "home.artificialIntelligence": "Intelligence Artificielle",
  "home.aiDescription":
    "Maîtrisez le Prompt Engineering et l’AI Automation pour libérer la puissance de l’IA",
  "home.digitalDesign": "Design Numérique",
  "home.designDescription":
    "Maîtrisez le design graphique et les outils numériques créatifs",
  "home.webDevelopment": "Développement Web",
  "home.webDescription":
    "Construisez des sites web modernes et des applications web",

  // Programs Section
  "home.ourPrograms": "Nos Programmes",
  "home.tailoredExperiences":
    "Expériences d'apprentissage sur mesure pour différents groupes d'âge et niveaux de compétence",
  "home.auroraKidsBootcamp": "Aurora Kids Bootcamp",
  "home.ages6to16": "Âges 6-16",
  "home.kidsBootcampDescription":
    "Expérience d'apprentissage amusante et interactive avec la programmation Scratch, l'alphabétisation numérique et l'exploration ludique de l'IA",
  "home.youthAdultsProgram": "Aurora Career",
  "home.ages17plus": "Âges 17+",
  "home.youthAdultsDescription":
    "Formation professionnelle en design graphique, développement web et compétences numériques avancées pour l'avancement de carrière",

    "home.SchoollLab": "Aurora School Lab",
    "home.SchoollLabDescription":"Initiation des élèves du primaire et du secondaire à la culture numérique, à la programmation Scratch, à l’IA et à la robotique, à travers des ateliers ludiques et innovants.",
  "home.learnMore": "En Savoir Plus",

  // Testimonials
  "home.whatCommunitySays": "Ce Que Dit Notre Communauté",
  "home.realStories":
    "Histoires réelles d'étudiants et de parents qui ont vécu l'expérience Aurora Academy",
  "home.testimonial1":
    "Ma fille a tellement grandi en confiance depuis qu'elle a rejoint Aurora Academy. Elle crée maintenant ses propres jeux !",
  "home.testimonial2":
    "Grâce à Aurora Academy, j’ai pu développer mes compétences et devenir le premier graphiste de mon église.",
  "home.testimonial3":
    "Aurora Academy n'enseigne pas seulement la technologie - ils inspirent la créativité et l'innovation.",
  "home.parent": "Parent",
  "home.student": "Étudiant",

  // CTA Section
  "home.readyToShape": "Prêt à Façonner Votre Avenir ?",
  "home.joinBootcamp":
    "Rejoignez notre prochain bootcamp et commencez votre voyage dans le monde de la technologie et de l'innovation",
  "home.contactUs": "Nous Contacter",

  // About Page
  "about.aboutAurora": "À Propos d'Aurora Academy",
  
  "about.buildingLeaders":
    "Construire les Leaders Numériques de Demain à Kinshasa",
  "about.foundedBelief":
    "Créée en 2024, Aurora Academy est une école de formation professionnelle dédiée à l’apprentissage du numérique pour tous les âges et tous les horizons. De l’enfant curieux au jeune en quête de compétences, jusqu’au professionnel en reconversion, nous proposons des programmes adaptés à chaque niveau pour faire émerger le potentiel de chacun.",
  "about.ourMission": "Notre Mission",
  "about.missionText":
    "Fournir une éducation technologique accessible et de haute qualité qui autonomise les enfants, adolescents et jeunes adultes de Kinshasa avec les compétences numériques nécessaires pour réussir dans l'économie du 21e siècle tout en favorisant l'innovation et l'impact social.",
  "about.ourVision": "Notre Vision",
  "about.visionText":
    "Aurora Academy aspire à devenir un acteur de référence en Afrique dans le domaine de la formation numérique.Notre vision est de former une génération de talents compétents et créatifs, capables de répondre aux exigences d’un marché en constante évolution, tout en contribuant activement au développement économique et social du continent.",

  // Values
  "about.ourValues": "Nos Valeurs",
  "about.guidingPrinciples":
    "Les principes qui guident tout ce que nous faisons à Aurora Academy",
  "about.innovation": "Innovation",
  "about.accessibility": "Accessibilité ",
  "about.accessibilityDesc": "Le savoir numérique doit être à la portée de tous..",

  "about.Excellence ": "Excellence",
  "about.ExcellenceDesc": " Nous visons la qualité dans nos méthodes, nos projets et nos résultats.",

"about.futureReady": "Impact ",
  "about.futureDesc":
    " Nous croyons à un numérique au service du progrès, de l’emploi et de la sociétés",

  "about.innovationDesc":
    "Nous favorisons la créativité et la pensée innovante chez chaque étudiant",
  "about.communityImpact": "Impact Communautaire",
  "about.communityDesc":
    "Notre mission est de transformer les vies et les communautés par l'éducation",
  "about.inclusiveLearning": "Excellence",
  "about.inclusiveDesc":
    " Nous visons la qualité dans nos méthodes, nos projets et nos résultats",
  

  // Journey
  "about.ourJourney": "Notre Parcours",
  "about.smallIdea":
    "D'une petite idée à un mouvement croissant transformant l'éducation à Kinshasa",
  "about.founded": "Aurora Academy Fondée",
  "about.foundedDesc":
    "Commencé avec une vision de démocratiser l'éducation tech à Kinshasa",
  "about.firstBootcamp": "Premier Bootcamp Enfants",
  "about.bootcampDesc":
    "Lancé notre programme phare avec 15 jeunes innovateurs",
  "about.partnerships": "Partenariats Communautaires",
  "about.partnershipsDesc":
    "Établi des partenariats avec les écoles et organisations locales",
  "about.expansion": "Expansion & Croissance",
  "about.expansionDesc":
    "Élargissement de notre impact avec de nouveaux programmes et installations",

  // Team
  "about.meetTeam": "Rencontrez Notre Équipe",
  "about.dedicatedEducators":
    "Éducateurs passionnés et experts en technologie dédiés à votre succès",
  "about.founderDirector": "Fondateur & Directeur",
  "about.headProgramming": "Responsable Programmation",
  "about.digitalArts": "Coordinateur Arts Numériques",
  "about.aiRobotics": "Instructeur IA & Robotique",

  // Social Impact
  "about.socialImpact": "Notre Impact Social",
  "about.buildingMovement":
    "Au-delà de l'éducation, nous construisons un mouvement qui transforme les communautés",
  "about.scholarshipStudents": "Étudiants Boursiers",
  "about.freePrograms":
    "Tous nos programmes sont gratuits pour assurer l'accessibilité",
  "about.femaleParticipation": "Participation Féminine",
  "about.genderEquality":
    "Promotion active de l'égalité des sexes dans l'éducation technologique",
  "about.communityPartnerships": "Partenariats Communautaires",
  "about.expandReach":
    "Travaillons avec les écoles et organisations locales pour étendre notre portée",

  // Programs Page
  "programs.ourPrograms": "Nos Programmes",
  "programs.choosePath": "Choisissez Votre Voie vers l'Excellence Numérique",
  "programs.comprehensivePrograms":
    "Des bases de la programmation aux concepts avancés d'IA, nous offrons des programmes complets conçus pour rencontrer les apprenants à chaque étape de leur parcours.",
  "programs.enrollAurora": "S'inscrire à Aurora Academy",
  "programs.fillForm":
    "Remplissez ce formulaire pour postuler à nos programmes. Nous vous contacterons dans les 48 heures.",
  "programs.studentName": "Nom de l'Étudiant",
  "programs.parentName": "Nom du Parent/Tuteur",
  "programs.emailAddress": "Adresse Email",
  "programs.phoneNumber": "Numéro de Téléphone",
  "programs.studentAge": "Âge de l'Étudiant",
  "programs.preferredProgram": "Programme Préféré",
  "programs.selectProgram": "Sélectionner un programme",
  "programs.previousExperience": "Expérience Précédente",
  "programs.selectExperience": "Sélectionner le niveau d'expérience",
  "programs.noPriorExperience": "Aucune expérience préalable",
  "programs.basicComputerSkills": "Compétences informatiques de base",
  "programs.someProgramming": "Quelque expérience en programmation",
  "programs.advancedUser": "Utilisateur avancé",
  "programs.whyJoin": "Pourquoi voulez-vous rejoindre Aurora Academy ?",
  "programs.goalsMotivations": "Parlez-nous de vos objectifs et motivations...",
  "programs.submitApplication": "Soumettre la Candidature",
  "programs.cancel": "Annuler",

  // Program Details
  "programs.weeks8": "8 semaines",
  "programs.weeks12": "12 semaines",
  "programs.saturdaySchedule": "Samedis 9h00 - 12h00",
  "programs.eveningSchedule": "Soirs de semaine 18h00 - 20h00",
  "programs.students15": "15 étudiants",
  "programs.students20": "20 étudiants",
  "programs.free": "Gratuit",
  "programs.nextSession": "Prochaine Session :",
  "programs.spotsRemaining": "places restantes seulement !",
  "programs.enrollIn": "S'inscrire au",
  "programs.spotsLeft": "places restantes",
  "programs.curriculum": "Programme",
  "programs.outcomes": "Résultats",

  // Specializations
  "programs.chooseSpecialization": "Choisissez Votre Spécialisation",
  "programs.deepDive":
    "Plongez profondément dans des domaines spécifiques de la technologie qui correspondent à vos intérêts et objectifs de carrière",
  "programs.programmingDevelopment": "Programmation & Développement",
  "programs.modernProgramming":
    "Apprenez les langages de programmation modernes et le développement logiciel",
  "programs.masterGraphicDesign":
    "Maîtrisez le design graphique et la communication visuelle",
  "programs.exploreAI":
    "Explorez les concepts d'IA et l'apprentissage automatique",
  "programs.digitalMarketing": "Marketing Numérique",
  "programs.onlineMarketing":
    "Apprenez le marketing en ligne et la stratégie des réseaux sociaux",

  // Calendar
  "programs.upcomingSessions": "Sessions À Venir",
  "programs.planAhead":
    "Planifiez à l'avance et sécurisez votre place dans nos prochains programmes",
  "programs.schedule2025": "Calendrier 2025",
  "programs.clickDate":
    "Cliquez sur une date pour voir les programmes disponibles",
  "programs.upcomingPrograms": "Programmes À Venir",
  "programs.spotsAvailable": "places disponibles",
  "programs.needHelp": "Besoin d'Aide pour Choisir ?",
  "programs.educationCounselors":
    "Nos conseillers pédagogiques sont là pour vous aider à trouver le programme parfait.",
  "programs.scheduleConsultation": "Programmer une Consultation",

  // Impact Page
  "impact.ourImpact": "Notre Impact",
  "impact.measuringSuccess": "Mesurer Notre Succès",
  "impact.everyNumber":
    "Chaque chiffre raconte une histoire de transformation, d'autonomisation et de croissance communautaire.",
  "impact.studentsTrainedStat": "Étudiants Formés",
  "impact.completionRate": "Taux de Réussite",
  "impact.jobPlacement": "Placement Professionnel",
  "impact.communityImpactStat": "Impact Communautaire",
  "impact.successStories": "Histoires de Succès",
  "impact.successStoriesDesc":
    "De la construction de leurs premiers sites web au lancement de startups, nos diplômés font des vagues dans l'économie numérique. Leur succès est notre succès.",
  "impact.communityGrowth": "Croissance Communautaire",
  "impact.communityGrowthDesc":
    "Au-delà du succès individuel, nous construisons une communauté tech à Kinshasa qui soutient l'innovation et le développement économique.",

  // Partnerships Page
  "partnerships.partnerships": "Partenariats",
  "partnerships.partnerWithUs": "Partenaire avec Aurora Academy",
  "partnerships.joinUs":
    "Rejoignez-nous pour démocratiser l'éducation technologique et construire l'avenir de l'alphabétisation numérique en Afrique.",
  "partnerships.corporatePartnerships": "Partenariats d'Entreprise",
  "partnerships.sponsorEquipment":
    "Sponsorisez l'équipement, offrez du mentorat ou proposez des opportunités de stage à nos étudiants.",
  "partnerships.becomeCorporatePartner": "Devenir un Partenaire d'Entreprise",
  "partnerships.educationalInstitutions": "Institutions Éducatives",
  "partnerships.collaborate":
    "Collaborez avec les écoles et universités pour étendre notre portée et impact.",
  "partnerships.partnerWithUsBtn": "Partenariat avec Nous",
  "partnerships.individualSponsors": "Sponsors Individuels",
  "partnerships.supportMission":
    "Soutenez notre mission par des dons ou offrez votre expertise comme mentor.",
  "partnerships.supportOurMission": "Soutenir Notre Mission",
  "partnerships.whatWeNeed": "Ce Dont Nous Avons Besoin",
  "partnerships.computersEquipment": "Ordinateurs & Équipement",
  "partnerships.modernLaptops":
    "Ordinateurs portables modernes et matériel pour l'apprentissage pratique",
  "partnerships.roboticsKits": "Kits de Robotique",
  "partnerships.educationalRobotics":
    "Ensembles de robotique éducative pour l'apprentissage STEM",
  "partnerships.sponsorships": "Sponsorings",
  "partnerships.financialSupport":
    "Soutien financier pour les bourses d'étudiants",

  // News Page
  "news.newsUpdates": "Actualités & Mises à Jour",
  "news.latestFromAurora": "Dernières Nouvelles d'Aurora Academy",
  "news.stayUpdated":
    "Restez informé de nos derniers programmes, événements et réalisations d'étudiants.",
  "news.newAIWorkshop": "Nouvelle Série d'Ateliers IA Lancée",
  "news.aiWorkshopExcerpt":
    "Nous sommes ravis d'annoncer notre nouvelle série d'ateliers IA pour les étudiants avancés...",
  "news.studentShowcase": "Événement de Présentation Étudiante",
  "news.showcaseExcerpt":
    "Nos étudiants ont présenté leurs projets finaux aux familles et membres de la communauté...",
  "news.localSchoolsPartnership": "Partenariat avec les Écoles Locales",
  "news.partnershipExcerpt":
    "Aurora Academy s'est associée à trois écoles locales pour étendre notre portée...",
  "news.readMore": "Lire Plus",

  // Gallery Page
  "gallery.gallery": "Galerie",
  "gallery.momentsOfLearning": "Moments d'Apprentissage",
  "gallery.captureJoy":
    "Capturez la joie, la créativité et l'innovation qui se produisent chaque jour à Aurora Academy.",

  // Contact Page
  "contact.contactUs": "Nous Contacter",
  "contact.getInTouch": "Nous Contacter",
  "contact.readyToStart":
    "Prêt à commencer votre parcours avec Aurora Academy ? Nous aimerions avoir de vos nouvelles.",
  "contact.sendMessage": "Envoyez-nous un Message",
  "contact.name": "Nom",
  "contact.yourFullName": "Votre nom complet",
  "contact.email": "Email",
  "contact.yourEmail": "votre@email.com",
  "contact.subject": "Sujet",
  "contact.whatAbout": "De quoi s'agit-il ?",
  "contact.message": "Message",
  "contact.howCanHelp": "Dites-nous comment nous pouvons vous aider...",
  "contact.sendMessageBtn": "Envoyer le Message",
  "contact.contactInformation": "Informations de Contact",
  "contact.phone": "Téléphone",
  "contact.address": "Adresse",
  "contact.addressValue": "Kinshasa, République Démocratique du Congo",
  "contact.officeHours": "Heures de Bureau",
  "contact.mondayFriday": "Lundi - Vendredi : 9h00 - 18h00",
  "contact.saturday": "Samedi : 9h00 - 13h00",
  "contact.sunday": "Dimanche : Fermé",

  // Footer
  "footer.shapingCreators":
    "Façonner les créateurs d'aujourd'hui pour demain. Autonomiser la prochaine génération d'innovateurs numériques à Kinshasa.",
  "footer.programs": "Programmes",
  "footer.kidsBootcamp": "Bootcamp Enfants",
  "footer.youthAdults": "Jeunes & Adultes",
  "footer.aiWorkshops": "Ateliers IA",
  "footer.designTraining": "Formation Design",
  "footer.quickLinks": "Liens Rapides",
  "footer.aboutUs": "À Propos",
  "footer.ourImpact": "Notre Impact",
  "footer.partnerships": "Partenariats",
  "footer.connect": "Connexion",
  "footer.rights": "© 2025 Aurora Academy. Tous droits réservés",

  // Common
  "common.january": "Janvier",
  "common.february": "Février",
  "common.march": "Mars",
  "common.april": "Avril",
  "common.may": "Mai",
  "common.june": "Juin",
  "common.july": "Juillet",
  "common.august": "Août",
  "common.september": "Septembre",
  "common.october": "Octobre",
  "common.november": "Novembre",
  "common.december": "Décembre",
} as const satisfies LocaleDict;
const en = {
  // Header
  "header.home": "Home",
  "header.about": "About Us",
  "header.programs": "Programs",
  "header.impact": "Impact",
  "header.partnerships": "Partnerships",
  "header.news": "News",
  "header.gallery": "Gallery",
  "header.contact": "Contact",
  "header.becomePartner": "Become a Partner",
  "header.enrollNow": "Enroll Now",
  "header.tagline": "Digital Skills & AI Training",

     // Programs Dropdown
    'header.auroraKidsBootcamp': 'Aurora Kids Bootcamp',
    'header.auroraSchoolLab': 'Aurora School Lab',
    'header.auroraCareer': 'Aurora Career',
    'header.allPrograms': 'Tous les Programmes',

  // Home Page
  "home.enrolling2025": "🚀 Now Enrolling for 2025",
  "home.heroTitle": "School of Future Professions",
  "home.heroTitleHighlight": "",
  "home.heroSubtitle":
    "Flexible and accessible training courses, tailored to every age group and every project.",
  "home.becomePartner": "Become a Partner",
  "home.studentsTrainedLabel": "Students Trained",
  "home.kidsBootcampLabel": "Kids Trained",

  // Features Section
  "home.whatWeTeach": "What We Teach",
  "home.comprehensiveCurriculum":
    "Our comprehensive curriculum covers the essential digital skills needed for the future workforce",
  "home.codingProgramming": "Coding & Programming",
  "home.codingDescription":
    "Learn modern programming languages and development skills",
  "home.artificialIntelligence": "Artificial Intelligence",
  "home.aiDescription":
    "Master Prompt Engineering and AI Automation to unleash the power of AI",
  "home.digitalDesign": "Digital Design",
  "home.designDescription": "Master graphic design and creative digital tools",
  "home.webDevelopment": "Web Development",
  "home.webDescription": "Build modern websites and web applications",

  // Programs Section
  "home.ourPrograms": "Our Programs",
  "home.tailoredExperiences":
    "Tailored learning experiences for different age groups and skill levels",
  "home.auroraKidsBootcamp": "Aurora Kids Bootcamp",
  "home.ages6to16": "Ages 6-16",
  "home.kidsBootcampDescription":
    "Fun and interactive learning experience with Scratch programming, digital literacy, and playful AI exploration",
  "home.youthAdultsProgram": "Aurora Career",
  "home.ages17plus": "Ages 17+",
  "home.youthAdultsDescription":
    "Professional training in graphic design, web development, and advanced digital skills for career advancement",

    "home.SchoollLab": "Aurora School Lab",
    "home.SchoollLabDescription":"Introduction of primary and secondary school students to digital literacy, Scratch programming, artificial intelligence, design, web development, and robotics through fun and innovative workshops.",
  "home.learnMore": "Learn More",

  // Testimonials
  "home.whatCommunitySays": "What Our Community Says",
  "home.realStories":
    "Real stories from students and parents who have experienced Aurora Academy",
  "home.testimonial1":
    "My daughter has grown so much in confidence since joining Aurora Academy. She now creates her own games!",
  "home.testimonial2":
    "Thanks to Aurora Academy, I was able to develop my skills and become the first graphic designer in my church",
  "home.testimonial3":
    "Aurora Academy doesn't just teach technology - they inspire creativity and innovation.",
  "home.parent": "Parent",
  "home.student": "Student",

  // CTA Section
  "home.readyToShape": "Ready to Shape Your Future?",
  "home.joinBootcamp":
    "Join our next bootcamp and start your journey into the world of technology and innovation",
  "home.contactUs": "Contact Us",

  // About Page
  "about.aboutAurora": "About Aurora Academy",
  "about.buildingLeaders": "Building Tomorrow's Digital Leaders in Kinshasa",
  "about.foundedBelief":
    "Aurora Academy was born from a simple belief: every child deserves access to quality technology education, regardless of their background. We're on a mission to democratize digital skills and empower the next generation of African innovators.",
  "about.ourMission": "Our Mission",
  "about.missionText":
    "To provide accessible, high-quality technology education that empowers children, teenagers, and young adults in Kinshasa with the digital skills needed to succeed in the 21st century economy while fostering innovation and social impact.",
  "about.ourVision": "Our Vision",
  "about.visionText":
    "To become the leading technology education hub in Central Africa, creating a generation of digitally literate innovators who will drive technological advancement and economic growth across the continent.",

  // Values
  "about.ourValues": "Our Values",
  "about.guidingPrinciples":
    "The principles that guide everything we do at Aurora Academy",
  "about.innovation": "Innovation",
  "about.innovationDesc":
    "We foster creativity and innovative thinking in every student",
  "about.communityImpact": "Community Impact",
  "about.communityDesc":
    "Our mission is to transform lives and communities through education",
  "about.inclusiveLearning": "Inclusive Learning",
  "about.inclusiveDesc":
    "We provide equal opportunities for all children regardless of background",
  "about.futureReady": "Future-Ready",
  "about.futureDesc":
    "We prepare students for the jobs and challenges of tomorrow",

  // Journey
  "about.ourJourney": "Our Journey",
  "about.smallIdea":
    "From a small idea to a growing movement transforming education in Kinshasa",
  "about.founded": "Aurora Academy Founded",
  "about.foundedDesc":
    "Started with a vision to democratize tech education in Kinshasa",
  "about.firstBootcamp": "First Kids Bootcamp",
  "about.bootcampDesc":
    "Launched our flagship program with 15 young innovators",
  "about.partnerships": "Community Partnerships",
  "about.partnershipsDesc":
    "Established partnerships with local schools and organizations",
  "about.expansion": "Expansion & Growth",
  "about.expansionDesc": "Scaling our impact with new programs and facilities",

  // Team
  "about.meetTeam": "Meet Our Team",
  "about.dedicatedEducators":
    "Passionate educators and technology experts dedicated to your success",
  "about.founderDirector": "Founder & Director",
  "about.headProgramming": "Head of Programming",
  "about.digitalArts": "Digital Arts Coordinator",
  "about.aiRobotics": "AI & Robotics Instructor",

  // Social Impact
  "about.socialImpact": "Our Social Impact",
  "about.buildingMovement":
    "Beyond education, we're building a movement that transforms communities",
  "about.scholarshipStudents": "Scholarship Students",
  "about.freePrograms":
    "All our programs are provided free of charge to ensure accessibility",
  "about.femaleParticipation": "Female Participation",
  "about.genderEquality":
    "Actively promoting gender equality in technology education",
  "about.communityPartnerships": "Community Partnerships",
  "about.expandReach":
    "Working with local schools and organizations to expand our reach",

  // Programs Page
  "programs.ourPrograms": "Our Programs",
  "programs.choosePath": "Choose Your Path to Digital Excellence",
  "programs.comprehensivePrograms":
    "From coding basics to advanced AI concepts, we offer comprehensive programs designed to meet learners at every stage of their journey.",
  "programs.enrollAurora": "Enroll in Aurora Academy",
  "programs.fillForm":
    "Fill out this form to apply for our programs. We'll contact you within 48 hours.",
  "programs.studentName": "Student Name",
  "programs.parentName": "Parent/Guardian Name",
  "programs.emailAddress": "Email Address",
  "programs.phoneNumber": "Phone Number",
  "programs.studentAge": "Student Age",
  "programs.preferredProgram": "Preferred Program",
  "programs.selectProgram": "Select a program",
  "programs.previousExperience": "Previous Experience",
  "programs.selectExperience": "Select experience level",
  "programs.noPriorExperience": "No prior experience",
  "programs.basicComputerSkills": "Basic computer skills",
  "programs.someProgramming": "Some programming experience",
  "programs.advancedUser": "Advanced user",
  "programs.whyJoin": "Why do you want to join Aurora Academy?",
  "programs.goalsMotivations": "Tell us about your goals and motivations...",
  "programs.submitApplication": "Submit Application",
  "programs.cancel": "Cancel",

  // Program Details
  "programs.weeks8": "8 weeks",
  "programs.weeks12": "12 weeks",
  "programs.saturdaySchedule": "Saturdays 9:00 AM - 12:00 PM",
  "programs.eveningSchedule": "Weekday evenings 6:00 PM - 8:00 PM",
  "programs.students15": "15 students",
  "programs.students20": "20 students",
  "programs.free": "Free",
  "programs.nextSession": "Next Session:",
  "programs.spotsRemaining": "spots remaining only!",
  "programs.enrollIn": "Enroll in",
  "programs.spotsLeft": "spots left",
  "programs.curriculum": "Curriculum",
  "programs.outcomes": "Outcomes",

  // Specializations
  "programs.chooseSpecialization": "Choose Your Specialization",
  "programs.deepDive":
    "Deep dive into specific areas of technology that match your interests and career goals",
  "programs.programmingDevelopment": "Programming & Development",
  "programs.modernProgramming":
    "Learn modern programming languages and software development",
  "programs.masterGraphicDesign":
    "Master graphic design and visual communication",
  "programs.exploreAI": "Explore AI concepts and machine learning",
  "programs.digitalMarketing": "Digital Marketing",
  "programs.onlineMarketing":
    "Learn online marketing and social media strategy",

  // Calendar
  "programs.upcomingSessions": "Upcoming Sessions",
  "programs.planAhead": "Plan ahead and secure your spot in our next programs",
  "programs.schedule2025": "2025 Schedule",
  "programs.clickDate": "Click on a date to see available programs",
  "programs.upcomingPrograms": "Upcoming Programs",
  "programs.spotsAvailable": "spots available",
  "programs.needHelp": "Need Help Choosing?",
  "programs.educationCounselors":
    "Our education counselors are here to help you find the perfect program.",
  "programs.scheduleConsultation": "Schedule Consultation",

  // Impact Page
  "impact.ourImpact": "Our Impact",
  "impact.measuringSuccess": "Measuring Our Success",
  "impact.everyNumber":
    "Every number tells a story of transformation, empowerment, and community growth.",
  "impact.studentsTrainedStat": "Students Trained",
  "impact.completionRate": "Completion Rate",
  "impact.jobPlacement": "Job Placement",
  "impact.communityImpactStat": "Community Impact",
  "impact.successStories": "Success Stories",
  "impact.successStoriesDesc":
    "From building their first websites to launching startups, our graduates are making waves in the digital economy. Their success is our success.",
  "impact.communityGrowth": "Community Growth",
  "impact.communityGrowthDesc":
    "Beyond individual success, we're building a tech community in Kinshasa that supports innovation and economic development.",

  // Partnerships Page
  "partnerships.partnerships": "Partnerships",
  "partnerships.partnerWithUs": "Partner with Aurora Academy",
  "partnerships.joinUs":
    "Join us in democratizing technology education and building the future of digital literacy in Africa.",
  "partnerships.corporatePartnerships": "Corporate Partnerships",
  "partnerships.sponsorEquipment":
    "Sponsor equipment, provide mentorship, or offer internship opportunities to our students.",
  "partnerships.becomeCorporatePartner": "Become a Corporate Partner",
  "partnerships.educationalInstitutions": "Educational Institutions",
  "partnerships.collaborate":
    "Collaborate with schools and universities to expand our reach and impact.",
  "partnerships.partnerWithUsBtn": "Partner with Us",
  "partnerships.individualSponsors": "Individual Sponsors",
  "partnerships.supportMission":
    "Support our mission through donations or volunteer your expertise as a mentor.",
  "partnerships.supportOurMission": "Support Our Mission",
  "partnerships.whatWeNeed": "What We Need",
  "partnerships.computersEquipment": "Computers & Equipment",
  "partnerships.modernLaptops":
    "Modern laptops and hardware for hands-on learning",
  "partnerships.roboticsKits": "Robotics Kits",
  "partnerships.educationalRobotics":
    "Educational robotics sets for STEM learning",
  "partnerships.sponsorships": "Sponsorships",
  "partnerships.financialSupport": "Financial support for student scholarships",

  // News Page
  "news.newsUpdates": "News & Updates",
  "news.latestFromAurora": "Latest from Aurora Academy",
  "news.stayUpdated":
    "Stay updated with our latest programs, events, and student achievements.",
  "news.newAIWorkshop": "New AI Workshop Series Launches",
  "news.aiWorkshopExcerpt":
    "We are excited to announce our new AI workshop series for advanced students...",
  "news.studentShowcase": "Student Showcase Event",
  "news.showcaseExcerpt":
    "Our students presented their final projects to families and community members...",
  "news.localSchoolsPartnership": "Partnership with Local Schools",
  "news.partnershipExcerpt":
    "Aurora Academy has partnered with three local schools to expand our reach...",
  "news.readMore": "Read More",

  // Gallery Page
  "gallery.gallery": "Gallery",
  "gallery.momentsOfLearning": "Moments of Learning",
  "gallery.captureJoy":
    "Capture the joy, creativity, and innovation happening every day at Aurora Academy.",

  // Contact Page
  "contact.contactUs": "Contact Us",
  "contact.getInTouch": "Get in Touch",
  "contact.readyToStart":
    "Ready to start your journey with Aurora Academy? We'd love to hear from you.",
  "contact.sendMessage": "Send us a Message",
  "contact.name": "Name",
  "contact.yourFullName": "Your full name",
  "contact.email": "Email",
  "contact.yourEmail": "your@email.com",
  "contact.subject": "Subject",
  "contact.whatAbout": "What is this about?",
  "contact.message": "Message",
  "contact.howCanHelp": "Tell us how we can help you...",
  "contact.sendMessageBtn": "Send Message",
  "contact.contactInformation": "Contact Information",
  "contact.phone": "Phone",
  "contact.address": "Address",
  "contact.addressValue": "Kinshasa, Democratic Republic of Congo",
  "contact.officeHours": "Office Hours",
  "contact.mondayFriday": "Monday - Friday: 9:00 AM - 6:00 PM",
  "contact.saturday": "Saturday: 9:00 AM - 1:00 PM",
  "contact.sunday": "Sunday: Closed",

  // Footer
  "footer.shapingCreators":
    "Shaping today's creators for tomorrow. Empowering the next generation of digital innovators in Kinshasa.",
  "footer.programs": "Programs",
  "footer.kidsBootcamp": "Kids Bootcamp",
  "footer.youthAdults": "Youth & Adults",
  "footer.aiWorkshops": "AI Workshops",
  "footer.designTraining": "Design Training",
  "footer.quickLinks": "Quick Links",
  "footer.aboutUs": "About Us",
  "footer.ourImpact": "Our Impact",
  "footer.partnerships": "Partnerships",
  "footer.connect": "Connect",
  "footer.rights": "© 2025 Aurora Academy. All rights reserved",

  // Common
  "common.january": "January",
  "common.february": "February",
  "common.march": "March",
  "common.april": "April",
  "common.may": "May",
  "common.june": "June",
  "common.july": "July",
  "common.august": "August",
  "common.september": "September",
  "common.october": "October",
  "common.november": "November",
  "common.december": "December",
} as const satisfies LocaleDict;

const translations: Record<Language, LocaleDict> = { fr, en };

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  const t = (key: string): string => {
    const dict = translations[language] ?? translations.en; // fallback
    return dict[key] ?? key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
