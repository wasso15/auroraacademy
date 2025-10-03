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
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/components/LanguageContext";

function ContactPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen font-poppins">
      {/* Hero */}
      <section className="py-[120px] sm:py-[160px] bg-gradient-to-br from-[#ff7100] via-[#ff9100] to-[#d80e1f] text-white relative overflow-hidden">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 sm:mb-8">
            {t("contact.getInTouch")}
          </h1>
          <p className="text-lg sm:text-xl font-cooperhewitt lg:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
            {t("contact.readyToStart")}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Form */}
            <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-black text-[#ff7100] flex items-center gap-3">
                  <Send className="w-7 h-7 sm:w-8 sm:h-8" />
                  {t("contact.sendMessage")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t("contact.name")}
                    </label>
                    <input
                      type="text"
                      className="block w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
                      placeholder={t("contact.yourFullName")}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      {t("contact.email")}
                    </label>
                    <input
                      type="email"
                      className="block w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
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
                    className="block w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent transition-all duration-300 hover:border-[#ff7100]/50"
                    placeholder={t("contact.whatAbout")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows={6}
                    className="block w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#ff7100] focus:border-transparent resize-none transition-all duration-300 hover:border-[#ff7100]/50"
                    placeholder={t("contact.howCanHelp")}
                  ></textarea>
                </div>

                <Button className="w-full bg-gradient-to-r from-[#ff7100] to-[#ff9100] hover:from-[#e65100] hover:to-[#f57c00] text-white font-medium py-6 md:py-6 lg:py-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  {t("contact.sendMessageBtn")}
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-2xl bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl sm:text-3xl font-semibold text-[#ff7100] flex items-center gap-3">
                    <Phone className="w-7 h-7 sm:w-8 sm:h-8" />
                    {t("contact.contactInformation")}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff7100] to-[#ff9100] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <Phone className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className=" font-semibold text-gray-900 ">
                        {t("contact.phone")}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        +243 811 907 343
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#ff9100] to-[#f57c00] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900">
                        {t("contact.email")}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        info@auroraacademy.online
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 group hover:scale-105 transition-all duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#d80e1f] to-[#ff5722] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl">
                      <MapPin className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-gray-900 ">
                        {t("contact.address")}
                      </h3>
                      <p className="text-gray-600 text-sm font-medium">
                        {t("contact.addressValue")}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-2xl bg-gradient-to-br from-[#ff7100] to-[#ff9100] text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-white/10 rounded-full -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>
                <CardContent className="p-6 sm:p-8 relative z-10">
                  <h3 className="font-black text-xl sm:text-2xl mb-4 sm:mb-6 flex items-center gap-3">
                    <Calendar className="w-7 h-7 sm:w-8 sm:h-8" />
                    {t("contact.officeHours")}
                  </h3>
                  <div className="space-y-2 sm:space-y-3 text-orange-100">
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {t("contact.mondayFriday")}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
                      {t("contact.saturday")}
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full"></span>
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
