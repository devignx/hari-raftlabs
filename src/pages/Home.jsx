import React, { useState } from "react";
import Sider from "../components/Sider";
import { FaUser } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BiMenuAltLeft, BiSolidBell } from "react-icons/bi";
import { IoIosArrowBack } from "react-icons/io";
import useWindowSize from "../components/hooks/useWindowSize";
import { BsArrowRightShort } from "react-icons/bs";
import { Dropdown, Space, Select } from "antd";
import TableData from "../components/table";
import Sales from "../components/Sales";

const SortOptions = () => {
    return (
        <Space wrap>
            <Select
                defaultValue="Recipient"
                style={{ width: 120 }}
                options={[
                    {
                        value: "Recipient",
                        label: "Recipient",
                    },
                    {
                        value: "Vendor",
                        label: "Vendor",
                    },
                ]}
            />
            <Select
                defaultValue="Amount"
                style={{ width: 120 }}
                options={[
                    {
                        value: "Amount",
                        label: "Amount",
                    },
                    {
                        value: "Balance",
                        label: "Balance",
                    },
                ]}
            />
            <Select
                defaultValue="Status"
                style={{ width: 120 }}
                options={[
                    {
                        value: "Status",
                        label: "Status",
                    },
                    {
                        value: "Details",
                        label: "Details",
                    },
                ]}
            />
        </Space>
    );
};

const items = [
    {
        label: <p>More Info</p>,
        key: "0",
    },
    {
        type: "divider",
    },
    {
        label: <p>Settings</p>,
        key: "1",
    },
];

export default function Home() {
    const [sider, setSider] = useState(false);

    const windowWidth = useWindowSize();
    const isMobile = windowWidth.width < 768;

    return (
        <div className="flex min-h-screen">
            <div
                className={` ${
                    sider || !isMobile
                        ? "opacity-100 translate-x-0 pointer-events-auto"
                        : " opacity-0 -translate-x-full pointer-events-none"
                } top-0 left-0 topppp shrink-0 bg-white anim ${
                    isMobile && "fixed"
                } `}
            >
                <button
                    onClick={() => setSider(false)}
                    className="p-2 mob bg-primary text-white rounded-full absolute right-0 top-8 translate-x-1/2"
                >
                    <IoIosArrowBack />
                </button>
                <Sider />
            </div>

            <div
                onClick={() => setSider(false)}
                className={` ${
                    sider ? "backdrop-blur" : " pointer-events-none"
                }  fixed top-0 mob left-0 toppp h-screen w-screen`}
            />

            <section id="main" className="md:p-8 w-11/12 mx-auto md:w-full">
                <div className="flex mt-6 md:mt-0">
                    <div className="flex flex-row-reverse items-center w-full justify-between md:justify-normal md:flex-row gap-4">
                        <button
                            onClick={() => setSider(!sider)}
                            className="mob order-1 text-4xl"
                        >
                            <BiMenuAltLeft />
                        </button>
                        <div className="p-2 mr-3 md:p-3 relative shrink-0 bg-secondary w-8 md:w-16 h-8 md:h-16 flex justify-center text-xl md:text-2xl text-blue-800 items-center rounded-full ring-2  md:ring-offset-4 ring-primary">
                            <FaUser />
                            <div className="absolute rounded-full bg-primary text-white text-xs w-4 md:w-6 h-4 md:h-6 flex justify-center ring-2 ring-white items-center scale-75 md:scale-90 -top-1 -right-1">
                                3
                            </div>
                        </div>
                        <div className="hidden lg:flex flex-col">
                            <h1 className="text-xl md:text-3xl -mt-2 md:mt-0 font-bold">
                                Good Evening Team!
                            </h1>
                            <p className="text-sm block md:text-base opacity-70 mt-1 ml-1">
                                Have an in-depth look at all the metrics in your
                                dashboard
                            </p>
                        </div>
                    </div>
                    <div className="flex pc items-start gap-4">
                        <button className="w-12 h-12 hover:text-primary anim flex justify-center items-center rounded-full bg-secondary/50">
                            <FiSearch />
                        </button>

                        <button className="w-12 relative h-12 hover:text-primary anim flex justify-center items-center rounded-full bg-secondary/50">
                            <BiSolidBell />
                            <div className="absolute rounded-full bg-primary text-white text-xs w-3 h-3 scale-75 md:scale-90 top-0 right-1"></div>
                        </button>
                        <Dropdown menu={{ items }}>
                            <button
                                className="opacity-80"
                                onClick={(e) => e.preventDefault()}
                            >
                                <div className="flex hover:text-primary anim cursor-pointer gap-1 items-center px-4 p-3 grow bg-white drop-shadow-md rounded-full ">
                                    <FaUser className="mr-1" />
                                    Johnson
                                    <MdOutlineKeyboardArrowDown className="ml-2" />
                                </div>
                            </button>
                        </Dropdown>
                    </div>
                </div>
                <div className=" flex flex-wrap lg:flex-nowrap gap-12 mt-12">
                    <div className="w-full">
                        <div className="w-full text-white rounded-xl h-fit min-h-[10rem] bg-primary font-bold text-2xl flex justify-evenly items-center gap-6">
                            <div>
                                <h1>$3990</h1>
                            </div>
                            <div>
                                <h1>$3990</h1>
                            </div>
                            <div>
                                <h1>$3990</h1>
                            </div>
                        </div>
                        <Sales />
                        <div className="mt-6 flex justify-between">
                            <div>
                                <h1 className="text-2xl mb-6 font-bold opacity-70">
                                    Transaction History
                                </h1>
                                <SortOptions />
                            </div>
                            <Select
                                style={{ width: 120 }}
                                defaultValue={"day"}
                                options={[
                                    { value: "day", label: "Day" },
                                    { value: "month", label: "Month" },
                                ]}
                            />
                        </div>
                        <TableData />
                    </div>
                    <div className="w-[30rem]">
                        <p className="text-primary uppercase font-semibold text-xs">
                            Premium Access
                        </p>
                        <div className="flex items-end">
                            <h2 className="text-4xl rounded-xl mt-2 font-bold">
                                Take Back <br />
                                Your Creative
                                <br /> Control
                                <div className="inline-flex ml-3 scale-90 origin-bottom-left">
                                    <img
                                        className="w-8  shrink-0 h-8 rounded-full ring-white ring-2"
                                        src="https://picsum.photos/200/300?random=1"
                                        alt=""
                                    />
                                    <img
                                        className="w-8 shrink-0 -ml-3 h-8 rounded-full ring-white ring-2"
                                        src="https://picsum.photos/200/300?random=2"
                                        alt=""
                                    />
                                    <img
                                        className="w-8 shrink-0 -ml-3 h-8 rounded-full ring-white ring-2"
                                        src="https://picsum.photos/200/300?random=4"
                                        alt=""
                                    />
                                    <div className="w-8 bg-primary text-white flex justify-center items-center text-xs -ml-3 h-8 rounded-full ring-white ring-2">
                                        10+
                                    </div>
                                </div>
                            </h2>
                        </div>
                        <button className="opacity-50 mt-8 font-semibold">
                            <Dropdown menu={{ items }}>
                                <button onClick={(e) => e.preventDefault()}>
                                    <Space>The Professional Platform</Space>
                                    <IoIosArrowBack className="inline rotate-[270deg] ml-2" />
                                </button>
                            </Dropdown>
                        </button>
                        <button className="flex text-primary items-center mt-6 w-full justify-between px-6 p-3 border-2 border-primary/30 rounded-xl">
                            Upgrade Now{" "}
                            <BsArrowRightShort className="text-xl" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}
