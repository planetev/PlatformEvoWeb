"use client";
import React, { useState } from "react";
import { usePathname } from 'next/navigation'
import { Button } from "./ui/button";
import {
  AudioLines,
  Globe,
  ListMusic,
  Podcast,
  SquarePlay,
  User,
  ChevronDown,
  Gauge,
  PlugZap,
  Settings,
  Music,
  PartyPopper,
  JapaneseYen,
  Triangle,
  SquareTerminal,
  Bot,
  Code2,
  Book,
  Settings2,
  LifeBuoy,
  SquareUser,
  Zap,
  Drama,
  LayoutDashboard,
  SunMedium,
  Bolt,
  UserRoundCog,
  KeySquare,
  FileTerminal,
  Trash2,
  Fingerprint,
  ScanFace,
  QrCode,
  BellIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "./ui/tooltip";
import { PiSolarPanelFill, PiChargingStation } from "react-icons/pi";
import { FaChargingStation, FaCar, FaDev } from "react-icons/fa";
import { GiOffshorePlatform, GiSemiClosedEye } from "react-icons/gi";
import { AiFillDashboard } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsEvFront } from "react-icons/bs";
import { TfiHelpAlt } from "react-icons/tfi";
import { VscAccount } from "react-icons/vsc";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { TbAuth2Fa } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { SiPostman } from "react-icons/si";

const Sidebar = () => {
  const pathname = usePathname()
  const [openSubMenus, setOpenSubMenus] = useState<{ [key: string]: boolean }>(
    {}
  );


  const handleSubMenuToggle = (menuTitle: string) => {
    setOpenSubMenus((prevState) => ({
      ...prevState,
      [menuTitle]: !prevState[menuTitle],
    }));
  };

  const menuItems: any[] = [
    {
      label: "Dashboard",
      icon: <RxDashboard className="size-5" />,
      bgColor: "bg-gray-200",
      textColor: "text-black",
      aria: "Dashboard",
      path: "/platform/dashboard",
    },
    {
      label: "Charger",
      icon: <PiChargingStation className="size-5" />,
      bgColor: "bg-transparent",
      textColor: "text-inherit",
      aria: "Charger",
      path: "/platform/charger",
    },
    {
      label: "Solar",
      icon: <PiSolarPanelFill className="size-5" />,
      bgColor: "bg-transparent",
      textColor: "text-inherit",
      aria: "Solar",
      path: "/platform/solar",
    },
    {
      label: "Car",
      icon: <BsEvFront className="size-5" />,
      bgColor: "bg-transparent",
      textColor: "text-inherit",
      aria: "Car",
      path: "/platform/car",
    },
  ];

  const adminMenuItems: any[] = [
    {
      label: "Users",
      icon: <UserRoundCog className="size-5" />,
      path: "/admin/users",
    },
    {
      label: "Configuration",
      icon: <Bolt className="size-5" />,
      path: "/admin/configuration",
    },
    { label: "API", icon: <Code2 className="size-5" />, path: "/admin/api" },
    {
      label: "Key Register",
      icon: <KeySquare className="size-5" />,
      path: "/admin/key-register",
    },
    {
      label: "Cron Script",
      icon: <FileTerminal className="size-5" />,
      path: "/admin/cron-script",
    },
  ];

  const authMenuItems: any[] = [
    {
      label: "Trash",
      icon: <Trash2 className="size-5" />,
      path: "/auth/trash",
    },
    { label: "2Fa", icon: <TbAuth2Fa className="size-5" />, path: "/auth/2fa" },
    {
      label: "Fingerprint",
      icon: <Fingerprint className="size-5" />,
      path: "/auth/fingerprint",
    },
    {
      label: "ScanFace",
      icon: <ScanFace className="size-5" />,
      path: "/auth/scanface",
    },
    {
      label: "QrCode",
      icon: <QrCode className="size-5" />,
      path: "/auth/qrcode",
    },
  ];

  const footerMenuItems: any[] = [
    // { label: "Dev", icon: <FaDev    className="size-5" />, path: "/developer" },
    { label: "Help", icon: <TfiHelpAlt className="size-5" />, path: "/help" },

    {
      label: "Account",
      icon: <VscAccount className="size-5" />,
      path: "/platform",
    },
  ];
  return (
    <>
      <TooltipProvider>
        <aside className="inset-y fixed  left-0 z-20 flex h-full flex-col border-r">
          <div className="border-b p-2">
            <Button variant="outline" size="icon" aria-label="Home">
              <GiOffshorePlatform className="size-5 fill-foreground  rotate-0 duration-300 ease-in-out  hover:rotate-180 hover:duration-300 " />
            </Button>
          </div>
          <nav className="grid gap-1 p-2">
            {menuItems.map((item: any, index: any) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link href={item?.path}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-lg ${pathname === item?.path ? "bg-gray-200" : ""}`}
                      aria-label={item?.aria}
                    >
                      {item?.icon}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {item?.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
          <Separator />

          {/* <nav className="grid gap-1 p-2">
            {adminMenuItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link href={item?.path}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-lg ${pathname === item?.path ? "bg-gray-200" : ""}`}
                      aria-label={item?.label}
                    >
                      {item?.icon}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {item?.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav> */}

          {/* <Separator />
          <nav className="grid gap-1 p-2">
            <ScrollArea className="h-20 w-10 border-none">
              {authMenuItems.map((item, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <Link href={item.path}>
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`rounded-lg ${pathname === item?.path ? "bg-gray-200" : ""}`}
                        aria-label={item.label}
                      >
                        {item.icon}
                      </Button>
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent side="right" sideOffset={5}>
                    {item.label}
                  </TooltipContent>
                </Tooltip>
              ))}
            </ScrollArea>
          </nav> */}
          <Separator className="bg-gray-50" />
          <nav className="mt-auto grid gap-1 p-2">
            {footerMenuItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Link href={item.path}>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={`rounded-lg mt-auto ${pathname === item?.path ? "bg-gray-200" : ""}`}
                      aria-label={item.label}
                    >
                      {item.icon}
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={5}>
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
        </aside>
      </TooltipProvider>
      {/* <div className="w-64 p-3 mt-10 space-y-8 bg-white border-r shadow-lg shadow-orange-100 fixed top-0 left-0 h-full overflow-y-auto hide-scrollbar">
      {menuItems.map((menu, index) => (
        <div key={index}>
          <h2 className="text-md font-semibold text-black mb-4">{menu.group}</h2>
          <ul className="space-y-2">
            {menu.items.map((item, idx) => (
              <li key={idx} className="flex flex-col">
                <div
                  className="flex items-center justify-between space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100 cursor-pointer"
                  onClick={() => item.subItems ? handleSubMenuToggle(item.title) : null}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon}
                    <span className="text-black">{item.title}</span>
                  </div>
                  {item.subItems && (
                    <ChevronDown
                      className={`w-5 h-5 text-black transition-transform duration-300 transform ${
                        openSubMenus[item.title] ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  )}
                </div>


                <div
                  className={`transition-all duration-300 ease-in-out overflow-hidden`}
                  style={{
                    maxHeight: openSubMenus[item.title] ? '500px' : '0px'
                  }}
                >
                  <ul className="ml-5 mt-2 space-y-1">
                    {item.subItems && item.subItems.map((subItem, subIdx) => (
                      <li
                        key={subIdx}
                        className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100"
                      >
                        {subItem.icon}
                        <span className="text-black">{subItem.title}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div> */}

      {/* <div className="w-64 p-3 space-y-8 bg-white border-r shadow-lg  shadow-orange-100">
        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Discover</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 p-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
              <SquarePlay className="w-5 h-5 text-black" />
              <span className="text-black">Listen Now</span>
            </li>
            <li className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100">
              <Globe className="w-5 h-5 text-black" />
              <span className="text-black">Browse</span>
            </li>
            <li className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100">
              <Podcast className="w-5 h-5 text-black" />
              <span className="text-black">Radio</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-black mb-4">Library</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 p-2 text-sm bg-gray-200 rounded-lg hover:bg-gray-300">
              <ListMusic className="w-5 h-5 text-black" />
              <span className="text-black font-semibold">Playlists</span>
            </li>
            <li className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100">
              <AudioLines className="w-5 h-5 text-black" />
              <span className="text-black">Songs</span>
            </li>


            <li
              className="flex justify-between items-center  space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100"
              onClick={toggleSubmenu}
            >
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-black font-bold" />
                <span className="text-black font-semibold">Albums</span>{" "}
              </div>
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </li>


            {isOpen && (
              <ul className={`  ${
                    isOpen ? "max-h-40" : "max-h-0"
                  }  ml-6 mt-2 space-y-2 transition-all duration-300 ease-in-out overflow-hidden `}>
                <li className="flex items-center space-x-3 p-2 text-sm rounded-lg hover:bg-gray-100">
                  <AudioLines className="w-5 h-5 text-black" />
                  <span className="text-black">Songs</span>
                </li>
              </ul>
            )}
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default Sidebar;

{
  /* <div>
<h2 className="text-xl font-semibold text-black mb-4">Library</h2>
<ul className="space-y-2">
  <li className="flex items-center space-x-3">
    <Button variant="ghost" className="w-full justify-start">
      Playlists
    </Button>
  </li>
  <li className="flex items-center space-x-3">
    <Button variant="ghost" className="w-full justify-start">
      Songs
    </Button>
  </li>
  <li className="flex items-center space-x-3">
    <Button variant="ghost" className="w-full justify-start">
      Made for You
    </Button>
  </li>
  <li className="flex items-center space-x-3">
    <Button variant="ghost" className="w-full justify-start">
      Albums
    </Button>
  </li>
</ul>
</div> */
}
