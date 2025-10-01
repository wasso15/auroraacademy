"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Heart,
  Send,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen font-poppins">
      <section className="py-[160px] bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 text-center relative z-10">
          <Badge className="bg-white/20 backdrop-blur-md text-white border border-white/30 mb-8 px-6 py-3 text-lg font-bold">
            <Heart className="w-5 h-5 mr-2" />
            {t("contact.contactUs")}
          </Badge>
          <h1 className="text-5xl lg:text-7xl font-black mb-8">
            {t("contact.getInTouch")}
          </h1>
          <p className="text-xl lg:text-2xl text-orange-100 max-w-4xl mx-auto leading-relaxed">
            {t("contact.readyToStart")}
          </p>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-3xl font-black text-[#ff7100] flex items-center gap-3">
                  <Send className="w-8 h-8" />
                  {t("contact.sendMessage")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
                      placeholder={t("contact.yourFullName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
                      placeholder={t("contact.yourEmail")}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t("contact.subject")}
                  </label>
                  <input
                    type="text"
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
                    placeholder={t("contact.whatAbout")}
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows={6}
                    className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent resize-none transition-all duration-300 hover:border-[#ff7100]/50"
                    placeholder={t("contact.howCanHelp")}
                  ></textarea>
                </div>
                <Button className="w-full bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-medium py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {t("contact.sendMessageBtn")}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-[#ff7100] flex items-center gap-3">
                    <Phone className="w-8 h-8" />
                    {t("contact.contactInformation")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <Phone className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-lg">
                        {t("contact.phone")}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        +243 811 907 343
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#ff9100] to-[#f57c00] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <Mail className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-lg">
                        {t("contact.email")}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        info@auroraacademy.online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <MapPin className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 text-lg">
                        {t("contact.address")}
                      </h3>
                      <p className="text-gray-600 font-medium">
                        {t("contact.addressValue")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <CardContent className="p-8 relative z-10">
                  <h3 className="font-black text-2xl mb-6 flex items-center gap-3">
                    <Calendar className="w-8 h-8" />
                    {t("contact.officeHours")}
                  </h3>
                  <div className="space-y-3 text-orange-100">
                    <p className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {t("contact.mondayFriday")}
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {t("contact.saturday")}
                    </p>
                    <p className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                      {t("contact.sunday")}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
