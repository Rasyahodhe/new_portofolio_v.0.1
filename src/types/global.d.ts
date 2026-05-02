export {};

declare global {
  type ProjectsType = {
    id: number;
    title: string;
    program: string;
    description: string;
    image: string;
    link: string;
    client: string;
    status: "active" | "inactive";
    active: boolean;
  };

  type ManualBookType = {
    id: number;
    title: string;
    proyekyear: string;
    client: string;
    description: string;
    imgmb: string;
  };

  type DesignType = {
    id: number;
    nameDesign: string;
    appUse: string;
    imgDesign: string;
  };
  type BlogType = {
    id: number;
    title: string;
    content: string;
    createdAt: string;
  };

  type MydataType = {
    blog: BlogType[];
    projects: ProjectsType[];
    manualBook: ManualBookType[];
    design: DesignType[];
  };

  type dataProjectInterface = {
    menu: {
      id?: number;
      name?: string;
    }[];
  };
}
