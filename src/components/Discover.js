import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Discover = () => {
    const rectangleRef = useRef(null);
    const pinRectangle = useRef(null);
    const imgColor = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to(rectangleRef.current, {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            duration: 1,
            ease: "power2.easeInOut",
            scrollTrigger: {
                trigger: pinRectangle.current,
                start: "top top",
                end: "+=400",
                pin: pinRectangle.current,
                scrub: 4,
                pinSpacing: true,
            },
        });
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(imgColor.current, {
            filter: "grayscale(0%)",
            bottom: "0%",
            duration: 1,
            ease: "power2.easeInOut",
            scrollTrigger: {
                trigger: pinRectangle.current,
                start: "top top",
                end: "+=400",
                pin: pinRectangle.current,
                scrub: 4,
                pinSpacing: true,
            },
        });
    }, []);

    return (
        <>
            <div
                className="graph relative h-full w-full bg-black"
                id="art"
                ref={pinRectangle}
            >
                <div className="absolute top-0 left-0 h-full w-full">
                    <img
                        className="h-[40%] w-1/2 opacity-30 lg:h-4/5 lg:w-[36%]"
                        src={require("../images/img-9.jpg")}
                        alt=""
                    />
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full justify-end">
                    <img
                        className="gray h-[40%] w-1/2 rotate-180 opacity-30 lg:h-4/5 lg:w-[36%]"
                        src={require("../images/img-9.jpg")}
                        alt=""
                    />
                </div>
                <div className="flex-box absolute top-0 left-0 h-full w-full">
                    <img
                        className="gray absolute z-10 h-[500px] w-[400px] opacity-80"
                        src={require("../images/img-4.png")}
                        alt=""
                        ref={imgColor}
                    />
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full justify-center">
                    <p className="mt-[5%] text-center font-yeseva text-4xl text-white md:text-6xl lg:text-8xl">
                        <span className="italic text-green-300 line-through opacity-60">
                            Discover
                        </span>{" "}
                        the art world
                    </p>
                </div>
                <div
                    className="clip-rec graph absolute top-0 left-0 h-full w-full bg-[#f2f3f7]"
                    ref={rectangleRef}
                >
                    <div className="absolute h-full w-full">
                        <div className="flex h-1/2 w-full justify-between">
                            <img
                                className="gray h-[40%] w-[30%] rotate-180 opacity-80 md:h-[50%] lg:h-full lg:w-[20%]"
                                src={require("../images/img-11.png")}
                                alt=""
                            />
                            <h1 className="self-center text-center font-yeseva text-4xl md:text-6xl lg:text-7xl">
                                Feed your eyes with the <br /> beauty of art
                            </h1>
                            <img
                                className="gray h-[40%] w-[30%] rotate-180 opacity-80 md:h-[50%] lg:h-full lg:w-[20%]"
                                src={require("../images/img-11.png")}
                                alt=""
                            />
                        </div>
                        <div className="h-1/2 w-full"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Discover;
