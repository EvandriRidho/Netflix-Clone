import DefaultLayouts from "../components/Layouts/DefaultLayouts";
import Jumbroton from "../components/modules/Jumbroton";
import SectionDownload from "../components/modules/SectionDownload";
import SectionEnjoy from "../components/modules/SectionEnjoy";
import { SectionProfile } from "../components/modules/SectionProfile";
import SectionWatch from "../components/modules/SectionWatch";

function LandingPage() {

  return (
    <DefaultLayouts>
      <Jumbroton />
      <SectionEnjoy />
      <SectionDownload />
      <SectionWatch />
      <SectionProfile />
    </DefaultLayouts>
  );
}

export default LandingPage;
