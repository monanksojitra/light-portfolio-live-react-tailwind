import Hero from "./Hero";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Home() {
  return (
    <main className="flex bg-light-200">
      <div className=" w-[21%]   bg-red-300">
        <LeftBar />
      </div>
      <div className="w-[71%]  bg-sky-300">
        <Hero />
      </div>
      <div className="w-[8%]  bg-red-300">
        <RightBar />
      </div>
    </main>
  );
}

export default Home;
