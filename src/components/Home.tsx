import Hero from "./Hero";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";

function Home() {
  return (
    <main className="flex w-full bg-light-300">
      <div className=" w-[21%]  h-full bg-red-300">
        <LeftBar />
      </div>
      <div className="w-[71%] h-full bg-sky-300">
        <Hero />
      </div>
      <div className="w-[8%] h-full bg-red-300">
        <RightBar />
      </div>
    </main>
  );
}

export default Home;
