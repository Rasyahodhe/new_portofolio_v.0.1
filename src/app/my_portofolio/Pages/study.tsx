import Image from "next/image";

const StyleTeksHeader3 = "text-lg 2xl:text-2xl font-bold text-white";
const styleTeksLocation = "text-md 2xl:text-1xl font-bold text-gray-300";
const styleTeksBody = "text-sm 2xl:text-xl text-gray-400 mb-5";
const StudyPage = () => {
  return (
    <div className="w-full h-auto xl:h-screen  overflow-hidden bg-[#edf0f2] 2xl:flex 2xl:items-center">
      <div className="grid  grid-cols-1 xl:grid-cols-2 xl:gap-5 container mx-auto p-5 xl:p-10  w-full h-full ">
        <div className="w-full">
          <h1 className="font-extrabold text-4xl xl:text-6xl text-gray-900 text-center xl:text-start mb-5">
            Pendidikan
          </h1>
          <p className="text-gray-600 text-center xl:text-start">
            Lulusan Universitas Muslim Indonesia, Fakultas Ilmu Komputer, dengan
            konsentrasi Teknik Informatika di bidang Rekayasa Perangkat Lunak
            (RPL).
          </p>
          <Image
            src="/asset/study.png"
            alt="portofolio"
            width={600}
            height={600}
            className="mt-10"
          />
        </div>
        <div className="w-full flex items-center bg-gray-900">
          <ul className="w-full list-none grid grid-cols-1 gap-5 2xl:gap-10 pt-5 xl:pt-0 ps-5 pe-5">
            {/* =====================SMA=============== */}
            <li className="border-b border-white">
              <h3 className={StyleTeksHeader3}>SMA NEGERI 2 RAHA</h3>
              <h4 className={styleTeksLocation}>
                Raha, Kabpuaten Muna, Sulawesi Tenggara
              </h4>
              <h5 className={styleTeksBody}>
                Jusuran : Ilmu Pengetahuab Alam (IPA)
              </h5>
            </li>

            {/* =====================UNIVERSITAS=============== */}

            <li className="border-b border-white">
              <h3 className={StyleTeksHeader3}>UNIVERSITAS MUSLIM INDONESIA</h3>
              <h4 className={styleTeksLocation}>Makassar, Sulawesi Selatan</h4>
              <h5 className="text-sm text-gray-400">
                Jurusan / Fakultas : Teknik Informatika / Ilmu Komputer
              </h5>
              <h5 className={styleTeksBody}>
                KKN Provesi: Dinas Kominfo Sulawesi Tenggara
              </h5>
            </li>

            {/* =====================DICODING=============== */}

            <li className="border-b border-white">
              <h3 className={StyleTeksHeader3}>DICODING</h3>
              <h4 className={styleTeksLocation}>
                Kursus Online, Jakarta Selatan
              </h4>
              <h5 className={styleTeksBody}>
                Fokus javascript fundamental dan Website Fundamental
              </h5>
            </li>

            {/* =====================Binar Academy=============== */}

            <li className="">
              <h3 className={StyleTeksHeader3}>BINAR ACADEMY</h3>
              <h4 className={styleTeksLocation}>
                Kursus Online, Jakarta Selatan
              </h4>
              <h5 className={styleTeksBody}>Fokus Full Stack Web Developer</h5>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StudyPage;
