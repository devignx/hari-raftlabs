import React, { PureComponent } from "react";
import { BarChart, Bar, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
    {
        name: "Page A",
        Profit: 40,
        Sales: 24,
        amt: 20,
    },
    {
        name: "Page B",
        Profit: 30,
        Sales: 13,
        amt: 30,
    },
    {
        name: "Page C",
        Profit: 20,
        Sales: 98,
        amt: 10,
    },
    {
        name: "Page D",
        Profit: 27,
        Sales: 39,
        amt: 60,
    },
    {
        name: "Page E",
        Profit: 18,
        Sales: 48,
        amt: 25,
    },
    {
        name: "Page F",
        Profit: 23,
        Sales: 38,
        amt: 33,
    },
    {
        name: "Page G",
        Profit: 34,
        Sales: 43,
        amt: 43,
    },
];

export default class ChartData extends PureComponent {
    render() {
        return (
            <div className="h-[10rem] lg:w-[20rem] xl:w-[80%]">
                <ResponsiveContainer width={"100%"}>
                    <BarChart data={data}>
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Sales" fill="#6E62E5" />
                        <Bar dataKey="Profit" fill="#86EFAC" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        );
    }
}
