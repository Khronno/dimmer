export const easing = [0.6, -0.05, 0.01, 0.99];

export const animationContainer = {
    visible: {
        transition: {
            staggerChildren: 0.2,
            easing,
        },
    },
};

export const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 20,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const fadeInRight = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const fadeInLeft = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5,
        },
    },
};

export const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
    }),
};

export const child = {
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: 20,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};

export const letters = {
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
    hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
    },
};
