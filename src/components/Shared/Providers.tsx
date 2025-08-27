"use client";

import * as React from "react";
import { LanguageProvider } from "@/components/LanguageContext";

export default function Providers({ children }: { children: React.ReactNode }) {
  // Ajoutez ici d’autres providers client si besoin (Theme, Query, Redux, etc.)
  return <LanguageProvider>{children}</LanguageProvider>;
}
