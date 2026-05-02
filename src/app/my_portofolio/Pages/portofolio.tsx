"use client";
import { Mydata } from "@/app/data/mydata";
import { useState } from "react";
import ProjectPage from "./projects-page/projects";

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

const PortofolioPage = () => {
  const [projects, setprojects] = useState(Mydata.projects);

  const tooglerShow = (id: number) => {
    const update = projects.map((project: ProjectsType) => {
      const { id: projectId } = project;
      if (projectId === id) {
        return { ...project, active: !project.active };
      }
      return project;
    });
    setprojects(update);
  };
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
        <ProjectPage projects={projects} tooglerShow={tooglerShow} />
      </div>
    </div>
  );
};

export default PortofolioPage;
