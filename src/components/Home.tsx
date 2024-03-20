import Footer from "../layout/Footer";
import Hero from "./Hero";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Home() {
  return (
    <main className="flex  bg-light-200 ">
      <div className=" w-[21%] hidden lg:block ">
        <LeftBar />
      </div>
      <div className="w-full lg:w-[71%] ">
        <Hero />
      </div>
      <div className="w-[8%] hidden lg:block">
        <RightBar />
      </div>
    </main>
  );
}

export default Home;
