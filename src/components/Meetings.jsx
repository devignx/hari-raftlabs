import { AiOutlineClockCircle } from "react-icons/ai";
import { PiVideoCamera } from "react-icons/pi";
export default function Meetings() {
    const meets = [
        {
            name: "Meeting with Client",
            time: "12pm",
        },
        {
            name: "Weekly Report",
            time: "9am",
        },
        {
            name: "Daily Scrum meeting",
            time: "2pm",
        },
    ];
    return (
        <div>
            <div className="mt-6">
                {meets.map((meet, index) => (
                    <div
                        className={` ${
                            index !== meets.length - 1 && "border-b"
                        } flex py-6 group cursor-pointer justify-between items-end gap-2`}
                        key={index}
                    >
                        <div className="flex gap-3">
                            <img
                                className="w-12 h-12 shrink-0 rounded-full"
                                src={
                                    `https://picsum.photos/200/300?random=` +
                                    index
                                }
                                alt=""
                            />
                            <div>
                                <p className="font-semibold group-hover:text-primary anim">
                                    {meet.name}
                                </p>
                                <p className="text-xs mt-2 flex gap-2 items-center opacity-70">
                                    <PiVideoCamera />
                                    Google Meet
                                </p>
                            </div>
                        </div>
                        <div className="flex text-sm font-semibold opacity-50 gap-1 items-center">
                            <AiOutlineClockCircle />
                            {meet.time}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
