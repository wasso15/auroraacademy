"use client";
import { useState } from "react";
import {
  Clock,
  Users,
  Calendar as CalendarIcon,
  Code,
  Palette,
  Cpu,
  Globe,
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Target,
  GraduationCap,
  Sparkles,
  School,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/LanguageContext";
import { useForm } from "react-hook-form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar } from "@/components/ui/calendar";

export default function ProgramsPage() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date()
  );
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const { t } = useLanguage();

  const form = useForm({
    defaultValues: {
      studentName: "",
      parentName: "",
      email: "",
      phone: "",
      age: "",
      program: "",
      experience: "",
      motivation: "",
    },
  });

  const programs = [
    {
      id: "kids-bootcamp",
      title: t("home.auroraKidsBootcamp"),
      subtitle: t("home.ages6to16"),
      duration: t("programs.weeks8"),
      schedule: t("programs.saturdaySchedule"),
      capacity: t("programs.students15"),
      price: t("programs.free"),
      image:
        "https://images.unsplash.com/photo-1743677077216-00a458eff9e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwbGVhcm5pbmclMjByb2JvdGljcyUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MXx8fHwxNzU1ODgzNTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: t("home.kidsBootcampDescription"),
      curriculum: [
        "Scratch Programming Fundamentals",
        "Digital Literacy & Internet Safety",
        "Introduction to AI Concepts",
        "Creative Digital Storytelling",
        "Basic Web Design",
        "Robotics & Hardware Basics",
        "Problem-Solving Skills",
        "Team Collaboration Projects",
      ],
      outcomes: [
        "Build interactive games and animations",
        "Understand basic programming concepts",
        "Develop digital citizenship skills",
        "Create multimedia presentations",
        "Work effectively in teams",
      ],
      nextSession: `1 ${t("common.february")} 2025`,
      spots: 5,
    },
    {
      id: "aurora-school",
      title: "Aurora School Program",
      subtitle: "Âges 8-18 ans",
      duration: "6 mois (Année scolaire)",
      schedule: "Mercredi & Samedi 14h-17h",
      capacity: "25 étudiants max",
      price: t("programs.free"),
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGxlYXJuaW5nJTIwc2Nob29sJTIwZWR1Y2F0aW9uJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4ODM1NDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Programme éducatif complet intégrant les technologies dans le cursus scolaire traditionnel. Une approche innovante qui prépare les élèves aux défis du 21e siècle en combinant apprentissage académique et compétences numériques.",
      curriculum: [
        "Mathématiques Appliquées & Programmation",
        "Sciences & Expérimentation Numérique",
        "Langues & Communication Digitale",
        "Histoire & Civilisation Numérique",
        "Arts & Création Multimédia",
        "Éducation Civique & Citoyenneté Numérique",
        "Philosophie & Éthique Technologique",
        "Projets Interdisciplinaires",
      ],
      outcomes: [
        "Excellences académiques renforcées par la technologie",
        "Maîtrise des outils numériques éducatifs",
        "Développement de la pensée critique et créative",
        "Préparation aux études supérieures tech-oriented",
        "Compétences en gestion de projet et leadership",
        "Portfolio académique et numérique complet",
      ],
      nextSession: `5 ${t("common.february")} 2025`,
      spots: 12,
    },
    {
      id: "youth-adults",
      title: t("home.youthAdultsProgram"),
      subtitle: t("home.ages17plus"),
      duration: t("programs.weeks12"),
      schedule: t("programs.eveningSchedule"),
      capacity: t("programs.students20"),
      price: t("programs.free"),
      image:
        "https://images.unsplash.com/photo-1674471361339-2e1e1dbd3e73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbHMlMjB3b3JraW5nJTIwY29tcHV0ZXJzfGVufDF8fHx8MTc1NTg4MzUyNnww&ixlib=rb-4.1.0&q=80&w=1080",
      description: t("home.youthAdultsDescription"),
      curriculum: [
        "HTML, CSS & JavaScript",
        "Responsive Web Design",
        "Graphic Design Principles",
        "Adobe Creative Suite",
        "User Interface (UI) Design",
        "Digital Marketing Basics",
        "E-commerce Development",
        "Portfolio Development",
      ],
      outcomes: [
        "Build professional websites",
        "Create stunning graphic designs",
        "Develop marketable digital skills",
        "Build a professional portfolio",
        "Gain career readiness",
      ],
      nextSession: `15 ${t("common.january")} 2025`,
      spots: 8,
    },
  ];

  const specializations = [
    {
      icon: Code,
      title: t("programs.programmingDevelopment"),
      description: t("programs.modernProgramming"),
      skills: ["JavaScript", "Python", "Web Development", "Mobile Apps"],
      color: "#ff7100",
    },
    {
      icon: Palette,
      title: t("home.digitalDesign"),
      description: t("programs.masterGraphicDesign"),
      skills: [
        "Adobe Creative Suite",
        "UI/UX Design",
        "Branding",
        "Digital Art",
      ],
      color: "#ff9100",
    },
    {
      icon: Cpu,
      title: t("home.artificialIntelligence"),
      description: t("programs.exploreAI"),
      skills: [
        "AI Fundamentals",
        "Machine Learning",
        "Data Science",
        "Chatbots",
      ],
      color: "#d80e1f",
    },
    {
      icon: Globe,
      title: t("programs.digitalMarketing"),
      description: t("programs.onlineMarketing"),
      skills: ["Social Media", "Content Creation", "SEO", "Analytics"],
      color: "#ff5722",
    },
  ];

  const upcomingSessions = [
    {
      program: t("home.youthAdultsProgram"),
      date: `15 ${t("common.january")} 2025`,
      spots: 8,
    },
    {
      program: t("home.auroraKidsBootcamp"),
      date: `1 ${t("common.february")} 2025`,
      spots: 5,
    },
    {
      program: "Aurora School Program",
      date: `5 ${t("common.february")} 2025`,
      spots: 12,
    },
    {
      program: "AI Summer Workshop",
      date: `15 ${t("common.march")} 2025`,
      spots: 12,
    },
    {
      program: "Design Intensive",
      date: `5 ${t("common.april")} 2025`,
      spots: 10,
    },
  ];

  const onSubmit = (data: any) => {
    console.log("Enrollment data:", data);
    setIsEnrollmentOpen(false);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        {/* Background decoratif */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full mix-blend-overlay filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300 rounded-full mix-blend-overlay filter blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-6 px-6 py-3 text-lg font-bold">
            <GraduationCap className="w-5 h-5 mr-2" />
            {t("programs.ourPrograms")}
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8">
            {t("programs.choosePath")}
          </h1>
          <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto mb-12 leading-relaxed">
            {t("programs.comprehensivePrograms")}
          </p>
          <Dialog open={isEnrollmentOpen} onOpenChange={setIsEnrollmentOpen}>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="group bg-white text-[#ff7100] hover:bg-gray-50 text-xl px-12 py-6 font-black shadow-2xl hover:shadow-white/25 hover:scale-110 transition-all duration-300 rounded-2xl"
              >
                <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                {t("header.enrollNow")}
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>{t("programs.enrollAurora")}</DialogTitle>
                <DialogDescription>{t("programs.fillForm")}</DialogDescription>
              </DialogHeader>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="studentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("programs.studentName")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t("contact.yourFullName")}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="parentName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("programs.parentName")}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Full name of parent/guardian"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("programs.emailAddress")}</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("programs.phoneNumber")}</FormLabel>
                          <FormControl>
                            <Input placeholder="+243 xxx xxx xxx" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="age"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t("programs.studentAge")}</FormLabel>
                          <FormControl>
                            <Input type="number" placeholder="Age" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="program"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t("programs.preferredProgram")}
                          </FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue
                                  placeholder={t("programs.selectProgram")}
                                />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="kids-bootcamp">
                                {t("home.auroraKidsBootcamp")} (
                                {t("home.ages6to16")})
                              </SelectItem>
                              <SelectItem value="aurora-school">
                                Aurora School Program (8-18 ans)
                              </SelectItem>
                              <SelectItem value="youth-adults">
                                {t("home.youthAdultsProgram")} (
                                {t("home.ages17plus")})
                              </SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="experience"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          {t("programs.previousExperience")}
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t("programs.selectExperience")}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="none">
                              {t("programs.noPriorExperience")}
                            </SelectItem>
                            <SelectItem value="basic">
                              {t("programs.basicComputerSkills")}
                            </SelectItem>
                            <SelectItem value="intermediate">
                              {t("programs.someProgramming")}
                            </SelectItem>
                            <SelectItem value="advanced">
                              {t("programs.advancedUser")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="motivation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("programs.whyJoin")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("programs.goalsMotivations")}
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex gap-4 pt-4">
                    <Button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] font-bold"
                    >
                      {t("programs.submitApplication")}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setIsEnrollmentOpen(false)}
                      className="flex-1"
                    >
                      {t("programs.cancel")}
                    </Button>
                  </div>
                </form>
              </Form>
            </DialogContent>
          </Dialog>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="space-y-20">
            {programs.map((program, index) => (
              <div
                key={program.id}
                className={`grid lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="space-y-8">
                    <div>
                      <Badge
                        className={`${
                          program.id === "aurora-school"
                            ? "bg-gradient-to-r from-[#d80e1f] to-[#ff5722]"
                            : "bg-gradient-to-r from-[#ff7100] to-[#ff9100]"
                        } text-white mb-6 px-4 py-2 font-bold`}
                      >
                        {program.id === "aurora-school" ? (
                          <School className="w-4 h-4 mr-2" />
                        ) : (
                          <GraduationCap className="w-4 h-4 mr-2" />
                        )}
                        {program.subtitle}
                      </Badge>
                      <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        {program.title}
                      </h2>
                      <p className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-xl flex items-center justify-center">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">
                            Durée
                          </p>
                          <p className="text-gray-900 font-bold">
                            {program.duration}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#ff9100] to-[#f57c00] rounded-xl flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">
                            Capacité
                          </p>
                          <p className="text-gray-900 font-bold">
                            {program.capacity}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-xl flex items-center justify-center">
                          <CalendarIcon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">
                            Horaires
                          </p>
                          <p className="text-gray-900 font-bold">
                            {program.schedule}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center">
                          <Star className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 font-medium">
                            Prix
                          </p>
                          <p className="text-[#ff7100] font-black text-lg">
                            {program.price}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-50 to-red-50/50 p-8 rounded-2xl border border-orange-100">
                      <h3 className="font-black text-gray-900 mb-3 text-lg">
                        {t("programs.nextSession")}
                      </h3>
                      <p className="text-[#ff7100] font-black text-xl mb-3">
                        {program.nextSession}
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <p className="text-gray-600 font-medium">
                          {program.spots} {t("programs.spotsRemaining")}
                        </p>
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        program.id === "aurora-school"
                          ? "bg-gradient-to-r from-[#d80e1f] to-[#ff5722] hover:from-[#b71c1c] hover:to-[#e64a19]"
                          : "bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00]"
                      } text-white font-black text-xl py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group`}
                      onClick={() => setIsEnrollmentOpen(true)}
                    >
                      <Sparkles className="w-6 h-6 mr-3 group-hover:animate-spin" />
                      {t("programs.enrollIn")} {program.title}
                      <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <Card className="overflow-hidden shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                    <div className="relative h-80">
                      <ImageWithFallback
                        src={program.image}
                        alt={program.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute top-6 right-6">
                        <Badge
                          className={`${
                            program.id === "aurora-school"
                              ? "bg-gradient-to-r from-[#d80e1f] to-[#ff5722]"
                              : "bg-gradient-to-r from-[#ff7100] to-[#ff9100]"
                          } text-white font-bold px-4 py-2`}
                        >
                          {program.spots} {t("programs.spotsLeft")}
                        </Badge>
                      </div>
                      {program.id === "aurora-school" && (
                        <div className="absolute top-6 left-6">
                          <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-4 py-2">
                            <Sparkles className="w-4 h-4 mr-2" />
                            Nouveau !
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-8">
                      <Tabs defaultValue="curriculum" className="w-full">
                        <TabsList className="grid w-full grid-cols-2 mb-6">
                          <TabsTrigger value="curriculum" className="font-bold">
                            {t("programs.curriculum")}
                          </TabsTrigger>
                          <TabsTrigger value="outcomes" className="font-bold">
                            {t("programs.outcomes")}
                          </TabsTrigger>
                        </TabsList>
                        <TabsContent value="curriculum" className="mt-6">
                          <div className="space-y-4">
                            {program.curriculum.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                              >
                                <CheckCircle className="h-5 w-5 text-[#ff7100] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">
                                  {item}
                                </span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                        <TabsContent value="outcomes" className="mt-6">
                          <div className="space-y-4">
                            {program.outcomes.map((outcome, outcomeIndex) => (
                              <div
                                key={outcomeIndex}
                                className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-red-50 transition-colors duration-200"
                              >
                                <Target className="h-5 w-5 text-[#d80e1f] flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 font-medium">
                                  {outcome}
                                </span>
                              </div>
                            ))}
                          </div>
                        </TabsContent>
                      </Tabs>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-24 bg-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white mb-6 px-6 py-2 font-bold">
              <Target className="w-4 h-4 mr-2" />
              Spécialisations
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              {t("programs.chooseSpecialization")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("programs.deepDive")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <Card
                key={index}
                className="group border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm hover:scale-105 overflow-hidden relative"
              >
                {/* Gradient background effect */}
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${spec.color}30, ${spec.color}50)`,
                  }}
                ></div>

                <CardHeader className="text-center relative z-10">
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${spec.color}15, ${spec.color}25)`,
                      border: `2px solid ${spec.color}20`,
                    }}
                  >
                    <spec.icon
                      className="h-10 w-10 group-hover:animate-pulse"
                      style={{ color: spec.color }}
                    />
                  </div>
                  <CardTitle
                    className="text-xl font-black mb-4"
                    style={{ color: spec.color }}
                  >
                    {spec.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {spec.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {spec.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs font-medium bg-gray-100 hover:bg-gray-200 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Sessions Calendar */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-[#ff7100] to-[#ff9100] text-white mb-6 px-6 py-2 font-bold">
              <CalendarIcon className="w-4 h-4 mr-2" />
              Calendrier
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6">
              {t("programs.upcomingSessions")}
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("programs.planAhead")}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-[#ff7100]">
                    {t("programs.schedule2025")}
                  </CardTitle>
                  <CardDescription className="text-lg">
                    {t("programs.clickDate")}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border w-full"
                  />
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl font-black text-[#ff7100]">
                    {t("programs.upcomingPrograms")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {upcomingSessions.map((session, index) => (
                    <div
                      key={index}
                      className="group p-6 bg-gradient-to-br from-gray-50 to-orange-50/30 rounded-2xl border border-orange-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <h4 className="font-black text-gray-900 mb-2 text-lg">
                        {session.program}
                      </h4>
                      <p className="text-gray-600 mb-3 font-medium">
                        {session.date}
                      </p>
                      <div className="flex items-center justify-between">
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-700 font-bold"
                        >
                          {session.spots} {t("programs.spotsAvailable")}
                        </Badge>
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="font-black text-2xl mb-4">
                    {t("programs.needHelp")}
                  </h3>
                  <p className="text-orange-100 mb-6 leading-relaxed">
                    {t("programs.educationCounselors")}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full font-bold py-3 hover:scale-105 transition-all duration-300"
                  >
                    <BookOpen className="w-5 h-5 mr-2" />
                    {t("programs.scheduleConsultation")}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

