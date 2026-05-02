"use client";
import Image from "next/image";
import { Mydata } from "@/app/data/mydata";
type dataProjectInterface = {
  menu: {
    id?: number;
    name?: string;
  }[];
};

const dataProject: dataProjectInterface = {
  menu: [
    {
      id: 1,
      name: "Semua",
    },
    {
      id: 2,
      name: "Frontend",
    },
    {
      id: 3,
      name: "FullStack",
    },
    {
      id: 4,
      name: "UI/UX",
    },
    {
      id: 5,
      name: "Manual Book",
    },
  ],
};

const ProjectPage = () => {
  return (
    <div className="min-h-screen h-auto text-white md:bg-gray-900">
      <div className="container mx-auto pt-5">
        <h1 className="font-extrabold text-4xl xl:text-6xl mb-5">Proyek</h1>
        <div className="grid grid-cols-2">
          <p>Beberapa Proyek yang pernah saya kerjakan</p>
          <ul className="flex gap-2 justify-center">
            {dataProject?.menu.map((item, index) => (
              <li
                key={index}
                className="w-40 h-10 flex justify-center items-center rounded-lg  border-2 hover:bg-white hover:border-white hover:text-black cursor-pointer"
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-5 grid grid-cols-4">
          {Mydata.projects.map((item, index) => (
            <div
              key={index}
              className="flex flex-col gap-2 items-center hover:bg-gray-300 p-3 hover:text-black transition-all duration-300 ease-in-out"
            >
              <Image
                src={item?.image}
                alt="portofolio"
                width={400}
                height={400}
                className="rounded-xl transition-all duration-300 ease-in-out"
              />
              <h3 className="w-full font-bold">{item?.title}</h3>
              <p className="w-full text-sm ">{item?.client}</p>
              <p className="w-full text-sm ">{item?.description}</p>
              <p className="w-full text-sm ">{item?.status}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
