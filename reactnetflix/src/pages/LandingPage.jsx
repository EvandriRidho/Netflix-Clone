import DefaultLayouts from "@layouts/DefaultLayouts";
import Jumbroton from "@mods/Jumbroton";
import SectionEnjoy from "@mods/SectionEnjoy";
import SectionDownload from "@mods/SectionDownload";
import SectionWatch from "@mods/SectionWatch";
import SectionProfile from "@mods/SectionProfile";
import SectionFAQ from "@mods/SectionFAQ";
import Footer from "@mods/Footer";
function LandingPage() {
  return (
    <DefaultLayouts>
      <Jumbroton />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
      <SectionFAQ />
      <Footer />
    </DefaultLayouts>
  );
}

export default LandingPage;
