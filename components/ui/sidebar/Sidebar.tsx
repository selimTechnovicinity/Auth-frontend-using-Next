"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { BsExclamationCircle } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaChartBar, FaChartLine, FaGift } from "react-icons/fa";
import { IoReceiptOutline, IoSettingsOutline } from "react-icons/io5";
import {
  MdClose,
  MdMenu,
  MdOutlineAcUnit,
  MdOutlineCampaign,
  MdOutlineLogout,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (route: string) => pathname === route;

  const SidebarItem = ({ href, icon, label }: any) => (
    <li>
      <Link
        href={href}
        className={`flex items-center gap-3 p-2 rounded text-sm font-medium transition ${
          isActive(href) || pathname.startsWith(href)
            ? "bg-green-100 text-green-700"
            : "text-gray-700 hover:bg-gray-100"
        }`}
      >
        {icon}
        <span>{label}</span>
      </Link>
    </li>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden z-50 fixed top-4 left-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-gray-800"
          aria-label="Toggle menu"
        >
          {isOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-blur bg-opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white p-4 shadow-md transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50 overflow-y-auto`}
      >
        <div className="text-2xl font-bold text-green-800 px-4 mb-6">
          RewardX
        </div>
        <nav className="flex-grow mt-5 overflow-auto">
          <ul className="space-y-4 p-2">
            <SidebarItem
              href="/dashboard"
              icon={<RxDashboard />}
              label="Dashboard"
            />
            <SidebarItem href="/offers" icon={<FaGift />} label="Offers" />
            <SidebarItem
              href="/ad-campaign"
              icon={<MdOutlineCampaign />}
              label="Ad Campaign"
            />
            <SidebarItem
              href="/ai-design-studio"
              icon={<MdOutlineAcUnit />}
              label="A.I Design Studio"
            />
            <SidebarItem
              href="/sales-analytics"
              icon={<FaChartLine />}
              label="Sales Analytics"
            />
            <SidebarItem
              href="/advanced-analytics"
              icon={<FaChartBar />}
              label="Advanced Analytics"
            />
            <SidebarItem
              href="/transactions"
              icon={<IoReceiptOutline />}
              label="Transactions"
            />
          </ul>
          <ul className="mt-8 border-t pt-4 space-y-2 px-2">
            <SidebarItem
              href="/profile"
              icon={<CgProfile />}
              label="Store Profile"
            />
            <SidebarItem
              href="/settings"
              icon={<IoSettingsOutline />}
              label="Settings"
            />
            <SidebarItem
              href="/help"
              icon={<BsExclamationCircle />}
              label="Help"
            />
            <SidebarItem
              href="/logout"
              icon={<MdOutlineLogout />}
              label="Logout"
            />
          </ul>
        </nav>
      </div>

      {/* Sidebar for Desktop */}
      <aside className="hidden md:flex w-64 flex-col bg-white p-4 shadow-md h-screen overflow-y-auto fixed">
        <div className="text-2xl font-bold text-green-800 px-4 mb-6">
          RewardX
        </div>
        <nav className="flex-grow mt-5 overflow-auto">
          <ul className="space-y-4 p-2">
            <SidebarItem
              href="/dashboard"
              icon={<RxDashboard />}
              label="Dashboard"
            />
            <SidebarItem href="/offers" icon={<FaGift />} label="Offers" />
            <SidebarItem
              href="/ad-campaign"
              icon={<MdOutlineCampaign />}
              label="Ad Campaign"
            />
            <SidebarItem
              href="/ai-design-studio"
              icon={<MdOutlineAcUnit />}
              label="A.I Design Studio"
            />
            <SidebarItem
              href="/sales-analytics"
              icon={<FaChartLine />}
              label="Sales Analytics"
            />
            <SidebarItem
              href="/advanced-analytics"
              icon={<FaChartBar />}
              label="Advanced Analytics"
            />
            <SidebarItem
              href="/transactions"
              icon={<IoReceiptOutline />}
              label="Transactions"
            />
          </ul>
          <ul className="mt-8 border-t pt-4 space-y-2 px-2">
            <SidebarItem
              href="/profile"
              icon={<CgProfile />}
              label="Store Profile"
            />
            <SidebarItem
              href="/settings"
              icon={<IoSettingsOutline />}
              label="Settings"
            />
            <SidebarItem
              href="/help"
              icon={<BsExclamationCircle />}
              label="Help"
            />
            <SidebarItem
              href="/logout"
              icon={<MdOutlineLogout />}
              label="Logout"
            />
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
