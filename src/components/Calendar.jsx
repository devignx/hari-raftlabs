import React, { useState } from "react";
import {
    format,
    addWeeks,
    subWeeks,
    startOfWeek,
    endOfWeek,
    isSameWeek,
    addDays,
    isSameDay,
} from "date-fns";
import { IoIosArrowBack } from "react-icons/io";
const CalendarComp = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const dayList = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

    const goToPreviousWeek = () => {
        setCurrentDate(subWeeks(currentDate, 1));
    };

    const goToNextWeek = () => {
        setCurrentDate(addWeeks(currentDate, 1));
    };

    const renderCalendarDays = () => {
        const weekStart = startOfWeek(currentDate);
        const weekEnd = endOfWeek(currentDate);
        const days = [];

        for (let day = weekStart; day <= weekEnd; day = addDays(day, 1)) {
            days.push(
                <div
                    key={day}
                    className={` shrink-0 w-8 md:w-12 h-8 md:h-12 text-sm md:text-base rounded-full flex justify-center items-center ${
                        isSameDay(day, currentDate)
                            ? "bg-primary text-white font-semibold"
                            : "bg-gray-100"
                    }`}
                >
                    {format(day, "d")}
                </div>
            );
        }

        return days;
    };

    return (
        <div className="my-12 w-full overflow-x-scroll  ">
            <div className="flex justify-between my-4 items-center">
                <h2 className="text-lg font-semibold">
                    {format(currentDate, "MMMM yyyy")}
                </h2>
                <div className="flex gap-6">
                    <button
                        className="w-7 h-7 flex justify-center items-center text-sm font-bold ring-1 ring-primary/30 text-primary rounded-full shrink-0"
                        onClick={goToPreviousWeek}
                    >
                        <IoIosArrowBack />
                    </button>
                    <button
                        className="w-7 h-7 flex justify-center items-center text-sm font-bold ring-1 ring-primary/30 text-primary rounded-full shrink-0"
                        onClick={goToNextWeek}
                    >
                        <IoIosArrowBack className="rotate-180" />
                    </button>
                </div>
            </div>
            <div className="flex w-full justify-between my-5 opacity-40 uppercase text-xs gap-2">
                {dayList.map((day) => (
                    <div className="w-8 md:w-12 text-center" key={day}>
                        {day}
                    </div>
                ))}
            </div>
            <div className="flex gap-2 justify-between">
                {renderCalendarDays()}
            </div>
        </div>
    );
};

export default CalendarComp;
