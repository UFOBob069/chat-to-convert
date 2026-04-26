import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import ROISection from "@/components/ROISection";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Industries from "@/components/Industries";
import Comparison from "@/components/Comparison";
import TrustProof from "@/components/TrustProof";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProblemSection />
        <ROISection />
        <HowItWorks />
        <Features />
        <Industries />
        <Comparison />
        <TrustProof />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <LeadForm />
      </main>
      <Footer />
    </>
  );
}
