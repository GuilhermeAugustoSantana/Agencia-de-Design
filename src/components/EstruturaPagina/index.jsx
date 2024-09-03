import { useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import { SectionBanner } from "../SectionBanner";
import { SectionInfo } from "../SectionInfo";

export const EstruturaPagina = () => {
  const [themeDark, setThemeLight] = useState(false);

  const handleTheme = (themeDark) => {
    setThemeLight(!themeDark)
  }

  console.log(themeDark);
  return (
    <div>
      <Header themeDark={themeDark} handleTheme={handleTheme} />
      <main>
        <SectionBanner themeDark={themeDark} />
        <SectionInfo themeDark={themeDark} />
      </main>
      <Footer themeDark={themeDark} />
    </div>
  );
}