import Header from "@/app/components/Header";
import Presenters from "@/app/components/Presenters";
import InteriorHero from "@/app/components/interior/InteriorHero";
import InteriorAbout from "@/app/components/interior/InteriorAbout";
import InteriorCategories from "@/app/components/interior/InteriorCategories";
import InteriorBenefits from "@/app/components/interior/InteriorBenefits";
import InteriorSubmission from "@/app/components/interior/InteriorSubmission";
import FAQ from "@/app/components/FAQ";
import InteriorRegisterCta from "@/app/components/interior/InteriorRegisterCta";
import Footer from "@/app/components/Footer";
import { INTERIOR_SITE, INTERIOR_PRESENTERS, INTERIOR_NAV_LINKS } from "@/lib/interior-config";
import { INTERIOR_FAQS } from "@/lib/interior-faq";
import { getInteriorEventJsonLd, jsonLdScriptProps } from "@/lib/jsonld";

// Raj Aakar — Designer of the Year (DOTY) 2026, the Architecture & Interior
// Design track, presented by FDCR in association with RAJSICO.
export default function InteriorLanding() {
  return (
    <>
      <script {...jsonLdScriptProps(getInteriorEventJsonLd())} />
      <Header navLinks={INTERIOR_NAV_LINKS} />
      <Presenters presenters={INTERIOR_PRESENTERS} />
      <main>
        <InteriorHero />
        <InteriorAbout />
        <InteriorCategories />
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
