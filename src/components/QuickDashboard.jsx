const data = [
    {
        amt: "$3500",
        name: "Monthly Revenue",
        percent: "+2.4%",
        prev: "$1.7K",
    },
    {
        amt: "$4500",
        name: "Monthly Sales",
        percent: "+5.4%",
        prev: "$2.7K",
    },
    {
        amt: "$10500",
        name: "Total Profit",
        percent: "+20.4%",
        prev: "$10.7K",
    },
];
export default function QuickDashboard() {
    return (
        <div className="w-full text-white overflow-x-scroll rounded-xl h-fit md:min-h-[8rem] p-8 md:p-12 bg-primary flex justify-between items-center gap-6">
            {data.map((item, index) => (
                <div className="flex shrink-0 items-center gap-3" key={index}>
                    <img
                        className="w-12 h-12 grayscale brightness-150 contrast-75 rounded-full"
                        src={`https://picsum.photos/200/300?random=` + index}
                        alt=""
                    />
                    <div>
                        <h2 className="opacity-60 text-sm">{item.name}</h2>
                        <div className="flex gap-2 mt-2 items-center">
                            <p className="text-2xl font-bold">{item.amt}</p>
                            <p className="text-primary scale-75 origin-bottom-left w-fit bg-white px-1 rounded-full p-0.5 text-xs h-fit font-bold">
                                {item.percent}
                            </p>
                        </div>
                        <p className="text-sm text-white/70 mt-2">
                            Previous Month
                            <span className="font-black text-white">
                                {item.prev}
                            </span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
