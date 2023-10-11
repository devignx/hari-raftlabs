import React from "react";
import { Table } from "antd";
const columns = [
    {
        title: "Customer",
        dataIndex: "customer",
        key: "customer",
        render: (text) => (
            <>
                <div className="inline-flex group gap-3 items-center scale-90 origin-bottom-left">
                    <div className="relative shrink-0">
                        <img
                            className="w-8 shrink-0  h-8 rounded-full ring-white ring-2"
                            src={`https://picsum.photos/200/300?random=${text}`}
                            alt=""
                        />
                        <p className="absolute bg-black rounded-full w-8 h-8 scale-50 origin-bottom-right flex justify-center items-center text-xl text-yellow-400 -bottom-1 -right-1">
                            ✦
                        </p>
                    </div>
                    <button className="group-hover:text-blue-500 whitespace-nowrap text-base lg:text-lg anim">
                        {text}
                    </button>
                </div>
            </>
        ),
    },
    {
        title: "Status",
        dataIndex: "status",
        key: "status",
        render: (text) => (
            <div className="px-2 w-fit text-xs p-1 gap-1 border flex items-center rounded-full">
                <div
                    className={`w-2 h-2 ${
                        text === "success" ? "bg-green-500" : "bg-yellow-600"
                    } rounded-full `}
                />
                {text === "success" ? "Success" : "Pending"}
            </div>
        ),
    },
    {
        title: "Date",
        dataIndex: "date",
        key: "date",
        render: (text) => <p className=" whitespace-nowrap">{text}</p>,
    },
    {
        title: "Invoice",
        dataIndex: "invoice",
        key: "invoice",
        render: (text) => <p className="font-bold">{text}</p>,
    },
    {
        title: "People",
        dataIndex: "people",
        key: "people",
        render: () => (
            <>
                <div className="inline-flex scale-90 origin-bottom-left">
                    <img
                        className="w-8 shrink-0 pc  h-8 rounded-full ring-white ring-2"
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
                    <div className="w-8 shrink-0 bg-primary text-white flex justify-center items-center text-xs -ml-3 h-8 rounded-full ring-white ring-2">
                        10+
                    </div>
                </div>
            </>
        ),
    },
];
const data = [
    {
        key: "1",
        customer: "John Brown",
        status: "success",
        invoice: "$8800",
        date: "11 Sep 2020",
    },
    {
        key: "2",
        customer: "Jim Green",
        status: "pending",
        invoice: "$700",
        date: "12 Dec 2022",
    },
];

export default function TableData() {
    return (
        <div className="mt-6">
            <Table
                className=" overflow-x-scroll"
                columns={columns}
                dataSource={data}
            />
        </div>
    );
}
