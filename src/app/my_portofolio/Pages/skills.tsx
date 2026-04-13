"use client";

import { useState } from "react";

const dataskil = {
  skills: [
    { id: 0, name: "HTML", type: "frontend" },
    { id: 1, name: "CSS", type: "frontend" },
    { id: 2, name: "Javascript", type: "frontend" },
    { id: 3, name: "Typescript", type: "frontend" },
    { id: 4, name: "Tailwind", type: "frontend" },
    { id: 5, name: "React", type: "frontend" },
    { id: 6, name: "Next Js", type: "frontend" },
    { id: 7, name: "Boostrap", type: "frontend" },
    { id: 8, name: "React Query", type: "frontend" },
    { id: 9, name: "Node Js", type: "backend" },
    { id: 10, name: "REST API", type: "backend" },
    { id: 11, name: "MySQL", type: "backend" },
    { id: 12, name: "PostgreSQL", type: "backend" },
    { id: 13, name: "Knex Js", type: "backend" },
    { id: 14, name: "Express Js", type: "backend" },
    { id: 15, name: "Sequelize", type: "backend" },
    { id: 16, name: "Postman", type: "tools" },
    { id: 17, name: "APIDog", type: "tools" },
    { id: 18, name: "Git", type: "tools" },
    { id: 19, name: "GitHub", type: "tools" },
    { id: 20, name: "Gitlab", type: "tools" },
    { id: 21, name: "Vs Code", type: "tools" },
    { id: 22, name: "Figma", type: "uiux" },
    { id: 23, name: "Canva", type: "uiux" },
    { id: 24, name: "Photoshop", type: "uiux" },
    { id: 25, name: "Camunda", type: "uiux" },
    { id: 26, name: "Komunikasi Efektif", type: "non-skills" },
    { id: 27, name: "Dapat Beradaptasi", type: "non-skills" },
    { id: 28, name: "Adabtabilitas", type: "non-skills" },
    { id: 29, name: "Kerja Sama Tim", type: "non-skills" },
    { id: 30, name: "Kreativitas", type: "non-skills" },
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
    <div className="h-screen w-full flex justify-center items-start bg-[#edf0f2] p-10">
      <div className="container mx-auto h-auto">
        <h1 className="font-extrabold text-4xl xl:text-6xl text-gray-900 text-center mb-5">
          Kemampuan
        </h1>
        <p className="text-gray-600 text-center mb-5">
          Berikut kemampuan yang saya miliki
        </p>
        <div className="w-full flex justify-center">
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
            <div className="w-full grid grid-cols-5 mt-5 ps-40 pe-40 ">
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
                            className="bg-white border-2 border-gray-900 w-40 h-10 flex justify-center items-center rounded-2xl"
                          >
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
          <div className="flex flex-wrap gap-3 my-5">
            {dataskil.skills
              .filter((item) => item.type === useTypeSkill)
              .map((item) => (
                <div
                  key={item.id}
                  className="bg-white border-2 border-gray-900 w-40 h-10 flex justify-center items-center rounded-2xl"
                >
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
