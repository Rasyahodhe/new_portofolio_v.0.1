import Image from "next/image";
const ExperiencePage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#edf0f2]">
      <div className="container mx-auto h-auto p-5 ">
        <h1 className="font-extrabold text-4xl xl:text-6xl text-gray-900 text-center mb-5">
          Pengalaman
        </h1>
        <p className="text-gray-600 text-center mb-5 xl:mb-20">
          Berikut informasi pengalaman kerja saya sebagai Frontend Developer
        </p>
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full md:w-7/12">
            <div className="flex flex-col items-center border border-gray-900 p-5 rounded-2xl bg-gray-900">
              <Image
                src="/asset/work.png"
                alt="work"
                width={400}
                height={400}
                className="h-15 w-15 2xl:w-30 2xl:h-30 invert mb-5"
              />
              <h2 className="font-extrabold tracking-tighter text-center text-xl 2xl:text-2xl text-gray-200">
                Dinas Sumber Daya Air dan Bina Marga Sulawesi Tenggara
              </h2>
              <p className="italic text-gray-300">
                Frelance - Frontend Developer
              </p>
              <p className="text-gray-300">2021</p>
            </div>
            <div className="flex flex-col items-center border border-gray-900 p-5 rounded-2xl bg-gray-900">
              <Image
                src="/asset/work.png"
                alt="work"
                width={400}
                height={400}
                className="h-15 w-15 2xl:w-30 2xl:h-30 invert mb-5"
              />
              <h2 className="font-extrabold tracking-tighter text-center text-xl 2xl:text-2xl text-gray-200">
                PT Arta Daya Taruna
              </h2>
              <p className="italic text-gray-300">Junior Software Developer</p>
              <p className="text-gray-300">2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
