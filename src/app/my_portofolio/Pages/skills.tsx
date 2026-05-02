"use client";

import { useState } from "react";

const dataskil = {
  skills: [
    { id: 0, name: "HTML", type: "frontend", imgUrl: "skills/html.png" },
    { id: 1, name: "CSS", type: "frontend", imgUrl: "skills/css.png" },
    { id: 2, name: "Javascript", type: "frontend", imgUrl: "skills/js.png" },
    { id: 3, name: "Typescript", type: "frontend", imgUrl: "skills/ts.png" },
    {
      id: 4,
      name: "Tailwind",
      type: "frontend",
      imgUrl: "skills/tailwind.png",
    },
    { id: 5, name: "React", type: "frontend", imgUrl: "skills/react.png" },
    { id: 6, name: "Next Js", type: "frontend", imgUrl: "skills/next.png" },
    {
      id: 7,
      name: "Bootstrap",
      type: "frontend",
      imgUrl: "skills/bootstrap.png",
    },
    {
      id: 8,
      name: "React Query",
      type: "frontend",
      imgUrl: "skills/Rquery.png",
    },
    { id: 9, name: "Node Js", type: "backend", imgUrl: "skills/node.png" },
    { id: 10, name: "REST API", type: "backend", imgUrl: "skills/Rapi.png" },
    { id: 11, name: "MySQL", type: "backend", imgUrl: "skills/mysql.png" },
    {
      id: 12,
      name: "PostgreSQL",
      type: "backend",
      imgUrl: "skills/postgre.png",
    },
    { id: 13, name: "Knex Js", type: "backend", imgUrl: "skills/knex.png" },
    {
      id: 14,
      name: "Express Js",
      type: "backend",
      imgUrl: "skills/express.png",
    },
    {
      id: 15,
      name: "Sequelize",
      type: "backend",
      imgUrl: "skills/sequelize.png",
    },
    { id: 16, name: "Postman", type: "tools", imgUrl: "skills/postman.png" },
    { id: 17, name: "APIDog", type: "tools", imgUrl: "skills/APIDOG.png" },
    { id: 18, name: "Git", type: "tools", imgUrl: "skills/git.png" },
    { id: 19, name: "GitHub", type: "tools", imgUrl: "skills/github.png" },
    { id: 20, name: "Gitlab", type: "tools", imgUrl: "skills/gitlab.png" },
    { id: 21, name: "Vs Code", type: "tools", imgUrl: "skills/vscode.png" },
    { id: 22, name: "Figma", type: "uiux", imgUrl: "skills/figma.png" },
    { id: 23, name: "Canva", type: "uiux", imgUrl: "skills/canva.png" },
    { id: 24, name: "Photoshop", type: "uiux", imgUrl: "skills/photoshop.png" },
    { id: 25, name: "Camunda", type: "uiux", imgUrl: "skills/camunda.png" },
    {
      id: 26,
      name: "Komunikasi Efektif",
      type: "non-skills",
      imgUrl: "skills/gir.png",
    },
    {
      id: 27,
      name: "Dapat Beradaptasi",
      type: "non-skills",
      imgUrl: "skills/gir.png",
    },
    {
      id: 28,
      name: "Adabtabilitas",
      type: "non-skills",
      imgUrl: "skills/gir.png",
    },
    {
      id: 29,
      name: "Kerja Sama Tim",
      type: "non-skills",
      imgUrl: "skills/gir.png",
    },
    {
      id: 30,
      name: "Kreativitas",
      type: "non-skills",
      imgUrl: "skills/gir.png",
    },
  ],
  Menu: [
    { id: 1, name: "Semua", type: "semua" },
    { id: 2, name: "Frontend", type: "frontend" },
    { id: 3, name: "Backend", type: "backend" },
    { id: 4, name: "Tools", type: "tools" },
    { id: 5, name: "UI/UX", type: "uiux" },
    { id: 6, name: "Non-Skills", type: "non-skills" },
  ],
};

const SkillsPage = () => {
  const [useTypeSkill, setUseTypeSkill] = useState("semua");
  return (
    <div className="min-h-screen h-auto w-full flex justify-center items-start bg-[#edf0f2] p-10">
      <div className="container mx-auto h-auto">
        <h1 className="font-extrabold text-4xl xl:text-6xl text-gray-900 text-center mb-5">
          Kemampuan
        </h1>
        <p className="text-gray-600 text-center mb-5">
          Berikut kemampuan yang saya miliki
        </p>
        <div className="w-full xl:flex justify-center hidden">
          <ul className="list-none flex gap-2">
            {dataskil.Menu.map((item, index) => (
              <li
                key={index}
                className={`${
                  useTypeSkill === item.type
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-900"
                } cursor-pointer border-2 text-gray-900 hover:text-gray-200 hover:bg-gray-900 w-40 h-10 flex justify-center items-center rounded-2xl active:bg-gray-900 active:text-gray-200`}
                onClick={() => setUseTypeSkill(item.type)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>

        {useTypeSkill === "semua" ? (
          <>
            {/* GRID PER KOLOM */}
            <div className="w-full grid grid-cols-2 xl:grid-cols-5 gap-5 xl:gap-0 mt-5 xl:ps-34 xl:pe-34 ">
              {dataskil.Menu.filter((menu) => menu.type !== "semua").map(
                (menu) => (
                  <div
                    key={menu.id}
                    className="w-full flex flex-col items-center "
                  >
                    <h3 className="font-bold mb-2">{menu.name}</h3>

                    <div className="flex flex-col gap-2">
                      {dataskil.skills
                        .filter((skill) => skill.type === menu.type)
                        .map((skill) => (
                          <div
                            key={skill.id}
                            className="ps-5 w-40 h-10 flex items-center gap-5 rounded-2xl"
                          >
                            <img
                              src={skill.imgUrl}
                              alt=""
                              aria-label="skill"
                              className="w-8 h-8 2xl:w-15 2xl:h-15"
                            ></img>
                            {skill.name}
                          </div>
                        ))}
                    </div>
                  </div>
                ),
              )}
            </div>
          </>
        ) : (
          <div className="ps-40 pe-40 flex flex-wrap justify-center gap-3 my-10">
            {dataskil.skills
              .filter((item) => item.type === useTypeSkill)
              .map((item) => (
                <div
                  key={item.id}
                  className=" w-40 h-10 flex justify-center items-center rounded-2xl"
                >
                  <img
                    src={item.imgUrl}
                    alt=""
                    aria-label="skill"
                    className="w-8 h-8 2xl:w-15 2xl:h-15"
                  ></img>
                  {item.name}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SkillsPage;
