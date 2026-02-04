import Leadership from "@/src/components/Leadership";
import Nav_bar from "@/src/components/Nav_bar";
import Overview from "@/src/components/Overview";
import The_problem from "@/src/components/The_problem";
import Selected_works from "@/src/components/Selected-works";
import Insights from "@/src/components/Insights";
import Partners from "@/src/components/partners";
import Connect from "@/src/components/Connect";
import SeeHowIWorkSection from "@/src/components/SeeHowIwork";
import WhoIWorkWithSection from "@/src/components/Who-I-Work-With";

export default function Page() {
  return (
    <>
      <Nav_bar />
      <Overview />
      <The_problem />
      <SeeHowIWorkSection />
      <WhoIWorkWithSection />
      <Selected_works />
      <Leadership />
      <Insights />
      <Partners />
      <Connect />
    </>
  );
}
