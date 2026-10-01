import Header from "@/app/components/Header";
import InteriorPresentedBand from "@/app/components/interior/InteriorPresentedBand";
import InteriorHero from "@/app/components/interior/InteriorHero";
import InteriorBenefits from "@/app/components/interior/InteriorBenefits";
import InteriorSubmission from "@/app/components/interior/InteriorSubmission";
import FAQ from "@/app/components/FAQ";
import InteriorRegisterCta from "@/app/components/interior/InteriorRegisterCta";
import Footer from "@/app/components/Footer";
import { INTERIOR_SITE, INTERIOR_NAV_LINKS } from "@/lib/interior-config";
import { INTERIOR_FAQS } from "@/lib/interior-faq";
import { getInteriorEventJsonLd, jsonLdScriptProps } from "@/lib/jsonld";

// Raj Aakar — Designer of the Year (DOTY) 2026, the Architecture & Interior
// Design track. An initiative by RAJSICO, supported by FDCR.
export default function InteriorLanding() {
  return (
    <>
      <script {...jsonLdScriptProps(getInteriorEventJsonLd())} />
      <Header navLinks={INTERIOR_NAV_LINKS} />
      <InteriorPresentedBand />
      <main>
        <InteriorHero />
        <InteriorBenefits />
        <InteriorSubmission />
        <FAQ faqs={INTERIOR_FAQS} />
        <InteriorRegisterCta />
      </main>
      <Footer
        meta={`Submission Deadline: ${INTERIOR_SITE.submissionDeadlineLabel}`}
      />
    </>
  );
}
