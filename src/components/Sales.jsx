import { Dropdown, Space } from "antd";
import { BsArrowRightShort } from "react-icons/bs";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export default function Sales() {
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

    return (
        <div>
            <div className="border p-8 mt-6 rounded-xl w-full min-h-[10rem]">
                <div>
                    <h1 className="text-2xl">Total Sales & Cost</h1>
                    <Dropdown menu={{ items }}>
                        <button
                            className="opacity-80"
                            onClick={(e) => e.preventDefault()}
                        >
                            <Space className="text-xs mt-2">Last 60Days</Space>
                            <MdOutlineKeyboardArrowDown className="inline ml-2" />
                        </button>
                    </Dropdown>

                    <div className="flex items-end md:items-center gap-3 mt-16">
                        <h1 className="text-primary text-5xl font-sans font-bold tracking-tighter">
                            $399.8K
                        </h1>
                        <p className="px-1 h-fit p-0.5 pr-2 inline text-xs rounded-full bg-green-300 font-semibold w-fit text-green-800">
                            <BsArrowRightShort className="inline -rotate-90 mb-0.5 text-xl" />{" "}
                            5.4%
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
