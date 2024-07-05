import SideBar from "@/app/_components/side-bar";
import SideBarItem from "@/app/_components/side-bar-item";
import Test from "@/app/_components/test";
import TestWrap from "@/app/_components/test-context";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="app w-full">
      <TestWrap>
        <Test/>
      </TestWrap>
    </div>
  );
}
