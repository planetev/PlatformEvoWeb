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
import { Button } from "./ui/button";
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
import { Drawer, DrawerContent } from "./ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { ScrollArea } from "./ui/scroll-area";
import { useAuth } from "@/app/context/AuthContext";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
const Header = ({userId}:any) => {
  const { token, session, profildAuth } = useAuth();
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
      await signOut({ callbackUrl: "/pnev/login" });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[57px] items-center justify-between gap-1 border-b bg-white   px-4">
        <Menubar className="bg-transparent border-none">
          <MenubarMenu>
            <MenubarTrigger className="font-semibold">
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

            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogContent className="rounded-lg shadow-lg max-w-lg bg-white p-6">
                <DialogHeader>
                  <DialogTitle className="text-xl font-semibold text-gray-800">
                    เมนูค้นหา
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-500">
                    พิมพ์เพื่อค้นหารายการเมนูที่มีอยู่
                  </DialogDescription>
                </DialogHeader>

                {/* Search Input */}
                <div className="relative mt-4">
                  <SearchIcon className="absolute left-2 top-2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full p-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Scroll Area for Search Results */}
                <ScrollArea className="h-48 mt-4 w-full overflow-y-auto rounded-md border border-dashed border-gray-200 p-2">
                  <div className="space-y-2">
                    {filteredMenuItems.length > 0 ? (
                      filteredMenuItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-3 bg-gray-50 rounded-md hover:bg-gray-100 cursor-pointer"
                        >
                          <div className="flex items-center space-x-2">
                            {item.icon}
                            <span className="text-sm font-medium text-gray-800">
                              {item.name}
                            </span>
                          </div>
                          {item.shortcut && (
                            <span className="text-xs text-gray-500">
                              {item.shortcut}
                            </span>
                          )}
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500 text-center py-4">
                        No results found.
                      </p>
                    )}
                  </div>
                </ScrollArea>
              </DialogContent>
            </Dialog>
          </MenubarMenu>
        </Menubar>
        <div className="flex items-center  space-x-1"></div>


        <div className="flex items-center  space-x-1 ">

          <Badge
            variant={`${
              userId?.role === "ADMIN" ? "destructive" : "secondary"
            }`}
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
                    <Badge variant="secondary" className="border-gray-600">
                      {userId?.role ? userId?.role : "loading..."}
                    </Badge>
                  </small>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem onClick={ ()=>  router.push('profile/'+userId?.id)}>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                  <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <CreditCard className="mr-2 h-4 w-4" />
                  <span>Billing</span>
                  <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                </DropdownMenuItem> */}
                <DropdownMenuItem onClick={ ()=>  router.push('profile/'+userId?.id)}>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                  <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                </DropdownMenuItem>
                {/* <DropdownMenuItem>
                  <Keyboard className="mr-2 h-4 w-4" />
                  <span>Keyboard shortcuts</span>
                  <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                </DropdownMenuItem> */}
              </DropdownMenuGroup>

              {session?.user?.role === "admin" && (
                <>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem>
                      <Users className="mr-2 h-4 w-4" />
                      <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger>
                        <UserPlus className="mr-2 h-4 w-4" />
                        <span>Invite users</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent
                          className="text-right"
                          sideOffset={5}
                        >
                          <DropdownMenuItem>
                            <Mail className="mr-2 h-4 w-4" />
                            <span>Email</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <MessageSquare className="mr-2 h-4 w-4" />
                            <span>Message</span>
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem>
                            <PlusCircle className="mr-2 h-4 w-4" />
                            <span>More...</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                      <Plus className="mr-2 h-4 w-4" />
                      <span>New Team</span>
                      <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <GitBranch className="mr-2 h-4 w-4" />
                      <span>Git</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="text-right"
                        sideOffset={5}
                      >
                        <DropdownMenuItem>
                          <Github className="mr-2 h-4 w-4" />
                          <span>Github</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Gitlab className="mr-2 h-4 w-4" />
                          <span>Gitlab</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <FaBitbucket className="mr-2 h-4 w-4" />
                          <span>Bitbucket </span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <TbBrandAuth0 className="mr-2 h-4 w-4" />
                      <span>Auth</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="text-right"
                        sideOffset={5}
                      >
                        <DropdownMenuItem>
                          <SiGoogleauthenticator className="mr-2 h-4 w-4" />
                          <span>Google auth</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <SiGoogleauthenticator className="mr-2 h-4 w-4" />
                          <span>oauth</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TbAuth2Fa className="mr-2 h-4 w-4" />
                          <span>2FA</span>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <GrSystem className="mr-2 h-4 w-4" />
                      <span>GrSystem</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="text-right"
                        sideOffset={5}
                      >
                        <DropdownMenuItem>
                          <IoLogoBuffer className="mr-2 h-4 w-4" />
                          <span>Log System</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>

                  <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Cloud className="mr-2 h-4 w-4" />
                      <span>API</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent
                        className="text-right"
                        sideOffset={5}
                      >
                        <DropdownMenuItem disabled>
                          <SiOpenapiinitiative className="mr-2 h-4 w-4" />
                          <span>open API</span>
                        </DropdownMenuItem>

                        <DropdownMenuItem disabled>
                          <AiFillOpenAI className="mr-2 h-4 w-4" />
                          <span>openai</span>
                        </DropdownMenuItem>

                        <DropdownMenuSeparator />
                        <DropdownMenuItem disabled>
                          <PlusCircle className="mr-2 h-4 w-4" />
                          <span>More...</span>
                        </DropdownMenuItem>
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                </>
              )}

              <DropdownMenuSeparator />
              <DropdownMenuItem
                // onClick={() => signOut({ callbackUrl: "/pnev/login" })}
                onClick={handleLogout}
              >
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
