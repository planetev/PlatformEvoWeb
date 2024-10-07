"use client";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import {
  SiGoogleauthenticator,
  SiOpenapiinitiative,
  SiPowershell,
} from "react-icons/si";
import { GrSystem } from "react-icons/gr";
import { IoIosCloseCircleOutline, IoLogoBuffer } from "react-icons/io";
import { TbAuth2Fa, TbBrandAuth0 } from "react-icons/tb";

import {
  ChevronDownIcon,
  Cloud,
  Columns2,
  CreditCard,
  Ellipsis,
  GitBranch,
  Github,
  Gitlab,
  HomeIcon,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  Menu,
  MessageSquare,
  Monitor,
  Plus,
  PlusCircle,
  Printer,
  SearchIcon,
  Settings,
  Settings2,
  Share,
  ShieldQuestion,
  User,
  UserIcon,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { AiFillOpenAI } from "react-icons/ai";
import {
  FaBitbucket,
  FaChevronDown,
  FaChevronUp,
  FaColumns,
  FaPause,
  FaPlus,
  FaTimes,
  FaTrash,
} from "react-icons/fa";
import { GoMute, GoUnmute } from "react-icons/go";

import { useAuth } from "@/app/context/AuthContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
const Header = ({ userId, toggleSidebar, isOpen }: any) => {
  const { token, session } = useAuth();
  const router = useRouter();
  const [isMuted, setIsMuted] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleMute = () => {
    setIsMuted(!isMuted);
  };
  const [searchQuery, setSearchQuery] = useState("");

  const [activeTab, setActiveTab] = useState("Terminal 1"); // Track the active tab
  const [tabs, setTabs] = useState(["Terminal 1"]);

  const [selectedRole, setSelectedRole] = useState("Select new role...");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const roles = [
    { name: "Viewer", description: "Can view and comment." },
    { name: "Developer", description: "Can view, comment and edit." },
    { name: "Billing", description: "Can view, comment and manage billing." },
    { name: "Owner", description: "Admin-level access to all resources." },
  ];

  const addNewTab = () => {
    const newTab = `Terminal ${tabs.length + 1}`;
    setTabs([...tabs, newTab]);
    setActiveTab(newTab);
  };

  const closeTab = (tabToClose: any) => {
    const updatedTabs = tabs.filter((tab) => tab !== tabToClose);
    setTabs(updatedTabs);

    if (activeTab === tabToClose && updatedTabs.length > 0) {
      setActiveTab(updatedTabs[0]);
    } else if (updatedTabs.length === 0) {
      setIsDrawerOpen(false);
    }
  };

  const menuItems: any[] = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Settings", icon: <Settings2 /> },
    { name: "User", icon: <UserIcon /> },
    { name: "Print", icon: <Printer /> },
    { name: "New Tab", shortcut: "⌘T" },
    { name: "New Window" },
  ];

  const filteredMenuItems = menuItems.filter((item: any) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLogout = async () => {
    const response = await fetch("/pnev/api/logout", { method: "POST" });
    if (response.ok) {
      // localStorage.removeItem("accessToken");
      await signOut({ callbackUrl: "/pnev/login" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] md:h-[57px] items-center justify-between border-b bg-white px-2 md:px-4">
        <div className="flex items-center">
          <Menubar className="bg-transparent border-none">
            <MenubarMenu>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
                className="md:hidden"
                aria-label="Toggle sidebar"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
              <MenubarTrigger className="font-semibold hidden md:block">
                <Badge variant="secondary" className="border-gray-600">
                  Planet<span className="text-emerald-500">EV</span>
                </Badge>
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>
                  About Platform{" "}
                  <MenubarShortcut className="text-red-500">⌘L</MenubarShortcut>
                </MenubarItem>
                <MenubarSeparator />
                <MenubarItem>
                  Preferences... <MenubarShortcut>⌘S</MenubarShortcut>
                </MenubarItem>
                <MenubarItem>Update Version</MenubarItem>
                <MenubarSeparator />
                <MenubarItem className="text-sm">
                  Quit Platform <MenubarShortcut>⌘Q</MenubarShortcut>
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger asChild>
                <button
                  onClick={() => setIsDialogOpen(true)}
                  className="p-2 rounded-full hover:bg-gray-100 cursor-pointer"
                >
                  <SearchIcon className="h-5 w-5 text-gray-700" />
                </button>
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="flex items-center space-x-1">
          <Badge
            variant={userId?.role === "ADMIN" ? "destructive" : "secondary"}
          >
            {userId?.role ? userId?.firstname : "loading..."}
          </Badge>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-10 w-10">
                <AvatarImage
                  sizes="small"
                  src="https://ui.shadcn.com/avatars/02.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" sideOffset={5}>
              <DropdownMenuLabel>
                <div className="flex flex-col items-start gap-1">
                  <h5 className="text-sm font-medium leading-tight">
                    {userId?.role}
                  </h5>
                  <small className="text-xs flex items-center font-medium leading-none gap-2">
                    <span>สถานะ:</span>
                    <Badge
                      variant={userId?.role === "ADMIN" ? "destructive" : "secondary"}
                    className="border-gray-600">
                      {userId?.role ? userId?.role : "loading..."}
                    </Badge>
                  </small>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem
                  // onClick={() => router.push("/platform/profile/" + userId?.id)}
                  onClick={() =>
                    router.push(
                      `/platform/profile/${userId?.id}?tap=personal-info`
                    )
                  }
                >

                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() =>
                    router.push(
                      `/platform/profile/${userId?.id}?tap=settings`
                    )
                  }
                >
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
                <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>
    </>
  );
};

export default Header;
