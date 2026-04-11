import Image from "next/image";
import Link from "next/link";
const DescriptionPage = () => {
  return (
    <div className="flex justify-center items-center h-screen md:bg-gray-900">
      <div className="grid grid-cols-1 xl:grid-cols-2 h-auto md:h-[80vh] container mx-auto">
        <div className="w-full h-[50vh] xl:h-full flex justify-center items-center overflow-hidden ">
          <Image
            src="/asset/des.jpeg"
            alt="portofolio"
            width={400}
            height={400}
            className="rounded-xl grayscale p-5 hover:p-0 hover:grayscale-0 transition-all duration-300 ease-in-out"
          />
        </div>

        <div className="xl:flex xl:items-center ">
          <div className="grid grid-cols-1 xl:grid-cols-[auto_1fr] gap-5 xl:border-t xl:border-white ">
            <div className="w-full flex justify-center xl:justify-start text-black xl:text-white pt-5">
              <h1 className=" text-2xl xl:text-xl 2xl:text-4xl font-bold ">
                Deskripsi
              </h1>
            </div>
            <div className="p-5 xl:p-5 xl:pr-0 text-black xl:text-white">
              <p className="text-justify text-1xl 2xl:text-2xl">
                Saya Frontend Developer berpengalaman 1+ tahun dalam membangun
                antarmuka website yang responsive, intuitif, dan user-frendly
                menggunakan Next.js dan Tailwind CSS. Mampu dalam mengoptimasi
                performa rendering sisi klien dan integrasi API RESTful.
                Bersemangat untuk menghadirkan pengalaman pengguna berkualitas
                tinggi.
              </p>
              <div className="w-full flex justify-center xl:justify-start xl:mt-0 mt-5">
                <Link
                  href="https://drive.google.com/drive/folders/13jASCmYC39Zh39MDgxREAuvkBAq4iGJ2"
                  download
                  className="mt-5 inline-block bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition-colors"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionPage;
