import { useState } from "react";
import logo from "../assets/logo.svg";
// import { Link } from "react-router-dom";
import {
    BiSolidHomeAlt2,
    BiSolidAnalyse,
    BiSolidCompass,
    BiSolidShoppingBagAlt,
    BiSolidInbox,
    BiSolidHelpCircle,
    BiFolder,
} from "react-icons/bi";
import { RiSettingsFill } from "react-icons/ri";
export default function Sider() {
    const tabs = [
        {
            name: "Home",
            path: "/",
            icon: <BiSolidHomeAlt2 />,
        },
        {
            name: "Analytics",
            path: "/analytics",
            icon: <BiSolidAnalyse />,
        },
        {
            name: "Explore",
            path: "/explore",
            icon: <BiSolidCompass />,
        },
        {
            name: "Shop",
            path: "/shop",
            icon: <BiSolidShoppingBagAlt />,
        },
        {
            name: "Inbox",
            path: "/inbox",
            icon: <BiSolidInbox />,
        },
    ];

    const [activeTab, setActiveTab] = useState("/");

    return (
        <div className="flex shrink-0 pr-8 p-3 overflow-y-scroll border-e min-h-screen w-fit flex-col gap-2">
            <div className="flex gap-2 m-4 mb-6">
                <img className="w-8" src={logo} alt="logo" />
                <h1 className="text-2xl font-bold ">Omoi</h1>
            </div>
            {tabs.map((tab, index) => (
                <button
                    key={index}
                    onClick={() => setActiveTab(tab.path)}
                    className={` ${
                        activeTab === tab.path
                            ? "text-white bg-primary"
                            : "text-black bg-primary/0"
                    } p-3 anim px-6 flex  gap-2 justify-start items-center rounded-lg`}
                >
                    {tab.icon} {tab.name}
                </button>
            ))}
            <div>
                <h2 className="opacity-50 font-semibold text-sm mb-2 m-6">
                    Tools
                </h2>
                <div className="flex max-w-[15rem] flex-col gap-2">
                    <button
                        onClick={() => setActiveTab("/settings")}
                        className={` ${
                            activeTab === "/settings"
                                ? "text-white bg-primary"
                                : "text-black bg-primary/0"
                        } p-3 anim px-6 flex  gap-2 justify-start items-center rounded-lg`}
                    >
                        <RiSettingsFill />
                        Settings
                    </button>
                    <button
                        onClick={() => setActiveTab("/help")}
                        className={` ${
                            activeTab === "/help"
                                ? "text-white bg-primary"
                                : "text-black bg-primary/0"
                        } p-3 anim px-6 flex  gap-2 justify-start items-center rounded-lg`}
                    >
                        <BiSolidHelpCircle />
                        Help
                    </button>
                </div>
            </div>
            <div>
                <h2 className="opacity-50 font-semibold text-sm mb-2 m-6">
                    Projects
                </h2>
                <div className="flex max-w-[15rem] flex-col gap-2">
                    <button
                        onClick={() => setActiveTab("/p1")}
                        className={` ${
                            activeTab === "/p1"
                                ? "text-white bg-primary"
                                : "text-black bg-primary/0"
                        } p-3 anim px-6 flex  gap-2 justify-start items-center rounded-lg`}
                    >
                        <BiFolder />
                        Project Unknown
                    </button>
                    <button
                        onClick={() => setActiveTab("/p2")}
                        className={` ${
                            activeTab === "/p2"
                                ? "text-white bg-primary"
                                : "text-black bg-primary/0"
                        } p-3 anim px-6 flex  gap-2 justify-start items-center rounded-lg`}
                    >
                        <BiFolder />
                        Branding Docs
                    </button>
                </div>
            </div>
        </div>
    );
}
