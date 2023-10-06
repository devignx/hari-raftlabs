import { useState, useEffect } from "react";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    useEffect(() => {
        // Function to update the window size
        function updateWindowSize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener to track window size changes
        window.addEventListener("resize", updateWindowSize);

        // Initial window size when the component mounts
        updateWindowSize();

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", updateWindowSize);
        };
    }, []); // Empty dependency array, so this effect runs once during component mount

    return windowSize;
}

export default useWindowSize;
