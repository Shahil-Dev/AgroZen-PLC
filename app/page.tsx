import AcademySection from "@/components/ui/AcademySection";
import AgroSection from "@/components/ui/AgroSection";
import CareSection from "@/components/ui/CareSection";
import Hero from "@/components/ui/Hero";
import HomeSections from "@/components/ui/HomeSections";
import TourismSection from "@/components/ui/TourismSection";

export default function Home() {
  return (
    <div>
      {/* hero section */}
      <Hero></Hero>
      <HomeSections></HomeSections>
      <AgroSection></AgroSection>
      <TourismSection></TourismSection>
      <CareSection></CareSection>
      <AcademySection></AcademySection>
    </div>
  );
}
