import SideBar from "@/app/_components/side-bar";
import SideBarItem from "@/app/_components/side-bar-item";
import Test from "@/app/_components/test";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app w-full">
      home page
      <Test/>
    </div>
  );
}
