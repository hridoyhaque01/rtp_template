import { useEffect, useRef, useState } from "react";

function useScreenWidth() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);

    const handleWidth = () => {
        const screenWidth = window.innerWidth || 0;
        const contentWidth = ref.current?.clientWidth || 0;
        const spaceWidth = screenWidth - contentWidth;
        const containerWidth = screenWidth - spaceWidth / 2;
        console.log({ screenWidth, containerWidth, spaceWidth, contentWidth });
        setWidth(containerWidth);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            handleWidth();
            window.addEventListener("resize", handleWidth);
            return () => {
                window.removeEventListener("resize", handleWidth);
            };
        }
    }, []);

    return { width, ref };
}

export default useScreenWidth;
