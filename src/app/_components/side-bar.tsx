'use client'
import { ChevronFirst, ChevronLast, Home, MoreVertical } from "lucide-react";
import { createContext, useEffect, useState } from "react";
import { BarChart3, Boxes, LifeBuoy, Package, Receipt, Settings, UserCircle } from "lucide-react";
import SideBarItem from "@/app/_components/side-bar-item";
import { usePathname } from "next/navigation";


{/* <SideBarItem icon={<BarChart3 size={20}/>} text={'Statistics'} active/>
<SideBarItem icon={<UserCircle size={20}/>} text={'Users'}/>
<SideBarItem icon={<Boxes size={20}/>} text={'Inventory'}/>
<SideBarItem icon={<Package size={20}/>} text={'Orders'} alert/>
<SideBarItem icon={<Receipt size={20}/>} text={'Billings'} />
<hr className="my-3"/>
<SideBarItem icon={<Settings size={20}/>} text={'Settings'} />
<SideBarItem icon={<LifeBuoy size={20}/>} text={'Help'} /> */}

type SideBarItem = {
  icon: any,
  text: string,
  active: boolean
  alert: boolean
  href: string | null
  childsideBarItems: {text: string, href: string | null}[]
}

const sidebarItems: SideBarItem[] = [
  {
    icon: <Home size={20} />,
    text: 'Home',
    active: true,
    alert: false,
    href: '/',
    childsideBarItems: []
  },{
    icon: <UserCircle size={15} className="w-[15px] h-[20px]"/>,
    text: 'Users',
    active: false,
    alert: false,
    href: '/users',
    childsideBarItems: [
      {text: 'Danh sách', href: '/users'},
      {text: 'Thêm thành viên', href: '/users/add-user'},
    ]
  },{
    icon: <Boxes size={20} />,
    text: 'Inventory',
    active: false,
    alert: false,
    href: '/inventory',
    childsideBarItems: []
  },{
    icon: <Receipt size={20} />,
    text: 'Billings',
    active: false,
    alert: false,
    href: '/billings',
    childsideBarItems: []
  },{
    icon: <Settings size={20} />,
    text: 'Settings',
    active: false,
    alert: false,
    href: '/setting',
    childsideBarItems: []
  },{
    icon: <LifeBuoy size={20} />,
    text: 'Help',
    active: false,
    alert: false,
    href: '/help',
    childsideBarItems: []
  },
]

type SidebarContextType = {
  expanded: boolean;
};

export const SidebarContext = createContext<SidebarContextType>({expanded: false})

export default function SideBar() {

  const [expanded, setExpanded] = useState<boolean>(true);
  const [mapItems, setMapItems] = useState<SideBarItem[]>(sidebarItems)

  const selectSidebarItem = (index: number) => {
    const newItems = [...mapItems];
    newItems[index].active = !newItems[index].active;
    setMapItems([...newItems]);
  }

  return (
    <aside className={`h-screen transition-all sticky top-0 shadow-md
      ${!expanded ? 'w-16': 'w-60'}
    `}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 mb-6 flex justify-between items-center">
          <img
            src="https://img.logoipsum.com/243.svg"
            className={`overflow-hidden transition-all ${
              expanded ? "w-32" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <ChevronLast />}
          </button>
        </div>

        <SidebarContext.Provider value={{expanded}}>
          <ul className="flex-1 px-3">
            {mapItems.map((item, index:number) => (
              <SideBarItem
                key={index}
                icon={item.icon}
                text={item.text}
                active={item.active}
                alert={item.alert}
                href={item.href}
                childsideBarItems={item.childsideBarItems}
                selectSidebarItem={selectSidebarItem}
                index={index}
              />
            ))}
          </ul>
        </SidebarContext.Provider>

        {/* <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <MoreVertical size={20} />
          </div>
        </div> */}
      </nav>
    </aside>
  )
}
