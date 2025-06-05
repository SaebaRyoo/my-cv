import Image from "next/image";
import Home from "@/components/home";
import Header from "@/components/header";
import Expertise from "@/components/expertise";

export default function Main() {
  return (
    <div className="overflow-x-clip outline-0">
      <Header />
      <Home />
      <Expertise />
    </div>
  );
}
