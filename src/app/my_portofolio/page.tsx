import OpeningPage from "./Pages/opening";
import DescriptionPage from "./Pages/description";
import StudyPage from "./Pages/study";
import ExperiencePage from "./Pages/experience";
import SkillsPage from "./Pages/skills";
import ProjectPage from "./Pages/project";
const Portofolio = () => {
  return (
    <div className="w-full h-screen">
      <OpeningPage />
      <DescriptionPage />
      <StudyPage />
      <ExperiencePage />
      <SkillsPage />
      <ProjectPage />
    </div>
  );
};

export default Portofolio;
