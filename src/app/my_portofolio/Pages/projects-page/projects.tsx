import Image from "next/image";

const ProjectPage = ({
  projects,
  tooglerShow,
}: {
  projects: ProjectsType[];
  tooglerShow: (id: number) => void;
}) => {
  return (
    <div className="mt-5 grid grid-cols-4 gap-2">
      {projects.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 items-center rounded-xl bg-gray-400 p-3 text-black transition-all duration-300 ease-in-out"
        >
          <Image
            src={item?.image}
            alt="portofolio"
            width={400}
            height={400}
            className="rounded-xl transition-all duration-300 ease-in-out"
          />
          <div className="w-full bg-gray-400">
            <h3 className="w-full font-bold">{item?.title}</h3>
            <p className="w-full text-sm ">{item?.client}</p>

            <div className="w-full text-sm ">
              {item?.active
                ? item?.description
                : item?.description.slice(0, 60) + "..."}
              <p
                onClick={() => tooglerShow(item?.id)}
                className="w-[70px] cursor-pointer text-[12px] underline hover:text-blue-500 mt-2"
              >
                {item?.active ? "Show Less" : "Show More"}
              </p>
            </div>

            <p className="w-full text-sm ">{item?.status}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
