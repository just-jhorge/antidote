import { motion } from "framer-motion";

const reveal = {
    from: {
        clipPath: "circle(0%)",
    },
    to: {
        clipPath: "circle(100%)",
        transition: {
            duration: 1,
            type: "tween",
            when: "beforeChildren",
            staggerChildren: 0.6,
        },
    },
};

const PageThree = () => {
    return (
        <motion.div
            className="flex-box relative h-[90%] w-full lg:w-[90%]"
            variants={reveal}
            initial={"from"}
            animate={"to"}
        >
            <div className="flex-box relative h-[70%] w-full lg:h-full lg:w-[60%]">
                <div className="relative h-full w-[70%] md:w-[40%]">
                    <div className="absolute top-[20%] right-[-25%] h-[70%] w-[40%] rotate-[10deg] md:right-[-75%] md:w-full">
                        <img
                            className="fit h-full w-full opacity-90"
                            src={require("../../images/img-21.jpg")}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute top-[20%] left-[-25%] h-[70%] w-[40%] rotate-[-10deg] md:left-[-75%] md:w-full">
                        <img
                            className="fit h-full w-full opacity-90"
                            src={require("../../images/img-20.jpg")}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                    <div className="absolute h-full w-full">
                        <img
                            className="fit h-full w-full"
                            src={require("../../images/img-19.jpg")}
                            alt=""
                            loading="lazy"
                        />
                    </div>
                </div>
                <motion.div
                    className="flex-box absolute top-0 left-0 h-full w-full"
                    variants={reveal}
                >
                    <h1 className="md:mid-font-size lg:font-size font-yeseva text-8xl text-red-600">
                        Fashion
                    </h1>
                </motion.div>
            </div>
            <div className="absolute top-0 left-0 flex h-full w-full justify-end">
                <p className="transparent m-5 font-yeseva text-3xl opacity-50 lg:text-6xl">
                    003
                </p>
            </div>
        </motion.div>
    );
};

export default PageThree;
