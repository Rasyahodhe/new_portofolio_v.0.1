import type { Metadata } from "next";

export const metadata: Metadata = { title: "My Portofolio", description: "" };
const PortofolioLayout = ({ children }: { children: React.ReactNode }) => {
  return <section>{children}</section>;
};

export default PortofolioLayout;
