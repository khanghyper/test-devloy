'use client'
import { SidebarContext } from "@/app/_components/side-bar"
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useContext, useState } from "react"
import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Dot } from "lucide-react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


export default function SideBarItem({ icon, text, active, alert, href, childsideBarItems, index, selectSidebarItem }: any) {
  const { expanded } = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <div>
      {!childsideBarItems?.length ? (
        <>
          <Link
            href={href}
            className={`
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            group
            ${pathname === href ? 'text-blue-400' : 'hover:text-blue-400'}
          `}
          >
            {icon}
            <div
              className={`
              overflow-hidden transition-all text-[15px]
              ${expanded ? "w-52 ml-3" : "w-0"}
            `}
            >
              <p>{text}</p>
            </div>
            {!expanded && (
              <div
                className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100
          group-hover:translate-x-0
        `}
              >
                {text}
              </div>
            )}
          </Link>
        </>
      ) : (

        <>
          {expanded ? (
            <Accordion type="single" collapsible>
              <AccordionItem className="py-2 px-3" value="item-1">
                <AccordionTrigger className={`${pathname.includes(href) ? 'text-blue-400' : 'hover:text-blue-400'}`}>

                  <div
                    className={` flex items-center text-[15px] h-[15px]
                  ${expanded ? "" : "w-0"}
                  `}
                  >
                    {icon}
                    <p className="ml-3 text-[15px]">{text}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="flex flex-col mt-4 gap-2">
                  {childsideBarItems?.map((item: any, index: number) => (
                    <Link key={index} className={`
                      pl-5 text-[14px] flex gap-2 items-center ${item.href === pathname ? 'text-blue-400' : 'hover:text-blue-400'}
                    `} href={item.href}>
                      <Dot size={12} />
                      {item.text}
                    </Link>
                  ))}
                </AccordionContent>

              </AccordionItem>
            </Accordion>
          ) : (
            <HoverCard>
              <HoverCardTrigger>
                <div className="py-2 px-3 my-1">{icon}</div>
              </HoverCardTrigger>
              <HoverCardContent className="left-0">
                The React Framework – created and maintained by @vercel.
              </HoverCardContent>
            </HoverCard>

          )}

        </>
      )}
    </div>
  )
}
