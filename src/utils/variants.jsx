export const fadeIn = (direction, delay) => {
    return {
        hidden: {
            y: direction === "up" ? 80: direction === "down" ? -80 : 0,
            opacity: 0,
            x: direction === "left" ? 80: direction === "right" ? -80 : 0,
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                bounce: 0.6,
                delay: delay,
                ease: [0.25, 0.25, 0.25, 0.75],
            },
        },
    };
}