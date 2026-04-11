import { ArrowDownCircleIcon } from "@heroicons/react/16/solid";
const OpeningPage = () => {
  return (
    <div
      className="w-full h-screen flex  items-end pr-0 xl:pr-25 bg-[url(/asset/blackwhiteland.png)] 
      bg-position-[center_top_220%] sm:bg-position-[right_40%_top_50%] md:bg-position-[right_30%_top_60%] xl:bg-position-[right_top_80%] 
      bg-size-[430%] sm:bg-size-[200%] md:bg-size-[190%] lg:bg-size-[150%] xl:bg-size-[130%] 
      md:justify-end md:bg-fixed bg-no-repeat"
    >
      <div className="w-full md:w-auto lg:w-1/3 h-auto border border-b-0 border-white pl-5 pt-5 bg-white/10 backdrop-blur-lg">
        <p className="mb-4 2xl:mb-9 text-[10px] xl:text-[16px] 2xl:text-2xl text-gray-300">
          CREATIVE THINKING IS MY PASSION
        </p>
        <h1 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-extrabold tracking-tight text-gray-300">
          Software Developer
        </h1>
        <h2 className="text-2xl xl:text-3xl 2xl:text-5xl tracking-tight mb-15 xl:mb-20 2xl:mb-36 text-gray-300">
          Frontend Developer
        </h2>
        <div className="w-full grid grid-cols-2 mb-30 xl:mb-20 2xl:mb-40">
          <h2 className="font-bold 2xl:text-xl text-gray-300">PORTOFOLIO</h2>
          <div className="w-full flex justify-end pr-10">
            <ArrowDownCircleIcon className="w-7 xl:w-10 2xl:w-20 h-7 xl:h-10 2xl:h-20 text-gray-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningPage;
