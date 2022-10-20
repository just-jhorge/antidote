import { useEffect, useRef } from "react";
import gsap, { Power2 } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Info = () => {
    const circleRef = useRef(null);
    const clipRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.to(circleRef.current, {
            opacity: 1,
            clipPath: "circle(100%)",
            duration: 1,
            ease: Power2.easeInOut,
            scrollTrigger: {
                trigger: clipRef.current,
                start: "top top",
                end: "+=500",
                pin: clipRef.current,
                scrub: 3,
            },
        });
    }, []);

    return (
        <>
            <div className="relative h-full w-full" id="info" ref={clipRef}>
                <div className="absolute top-0 left-0 h-full w-full p-[2%]">
                    <h1 className="font-yeseva text-2xl font-bold italic md:text-3xl lg:text-4xl lg:font-normal">
                        antidote
                    </h1>
                    <h1 className="font-yeseva text-3xl font-bold uppercase md:text-4xl lg:text-7xl lg:font-normal">
                        photography & <br /> creative agency
                    </h1>
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center lg:flex-row">
                    <p className="block h-auto w-[60%] -translate-y-[60%] text-center font-yeseva text-2xl leading-9 md:text-3xl md:leading-10 lg:-translate-y-0 lg:leading-[60px]">
                        Telling stories through our lenses <br /> We display the
                        art of photography <br />{" "}
                        <span>one shoot at a time</span>
                    </p>
                    <p className="very-small absolute right-[3%] bottom-1/4 block w-[40%] font-yeseva leading-[18px] lg:hidden">
                        <q>
                            There is only you and your camera. The limitations
                            in your photography are in yourself, for what we see
                            is what we are
                        </q>{" "}
                        - Ernst Haas
                    </p>
                </div>
                <div className="absolute top-0 left-0 h-full w-full">
                    <div className="flex-box absolute right-0 bottom-0 w-full md:h-[30%] md:w-[30%]">
                        <p className="monument small hidden w-[60%] translate-y-0 leading-[15px] lg:block">
                            “There is only you and your camera. The limitations
                            in your photography are in yourself, for what we see
                            is what we are.” – Ernst Haas
                        </p>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full items-end justify-end">
                    <img
                        className=" h-[80%] w-[70%] opacity-80 md:h-[85%] md:w-[40%] lg:h-full"
                        src={require("../images/img-10.png")}
                        alt=""
                    />
                </div>
                <div
                    className="clip-circle absolute top-0 left-0 z-10 h-full w-full bg-black opacity-0"
                    ref={circleRef}
                >
                    <h1 className="voyage relative z-10 mt-[10%] text-4xl text-white md:text-7xl">
                        <span className="transparent text-5xl italic text-green-300 opacity-[0.6] md:text-8xl">
                            Explore-{" "}
                        </span>
                        <span className="absolute left-[45%] md:left-[45%] lg:left-[25%]">
                            Art
                            <span className="cancel italic">
                                {" "}
                                is
                            </span> <br /> Life
                        </span>
                    </h1>
                    <div className="absolute top-0 left-0 flex h-full w-full">
                        <div className="h-full w-[50%]">
                            <img
                                className="hidden h-[50%] w-[30%] rotate-[10deg] opacity-30 lg:block"
                                src={require("../images/img-8.png")}
                                alt=""
                            />
                        </div>
                        <div className="flex h-full w-[50%] flex-col items-end justify-between">
                            <img
                                className="h-[50%] w-[100%] opacity-60 lg:h-full lg:w-[70%] lg:opacity-70"
                                src={require("../images/img-7.jpg")}
                                alt=""
                            />
                            <img
                                className="gray block h-[40%] w-[100%] opacity-20 lg:hidden lg:h-[80%] lg:w-[36%]"
                                src={require("../images/img-6.png")}
                                alt=""
                            />
                        </div>
                        <div className="absolute top-0 left-0 z-10 flex h-full w-full items-end lg:justify-center">
                            <img
                                className="gray h-[40%] w-[50%] opacity-20 lg:h-[80%] lg:w-[36%]"
                                src={require("../images/img-6.png")}
                                alt=""
                            />
                        </div>
                        <div className="flex-box absolute top-0 left-0 h-full w-full">
                            <p className="voyage font-bold text-green-300 opacity-80">
                                “Inspiration exists, <br /> but it has to find
                                you <br />
                                working.” ― Pablo Picasso
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full items-end">
                    <img
                        className=" absolute left-[-5%] h-[50%] w-[50%] opacity-80 md:h-[50%] lg:h-[50%] lg:w-[20%]"
                        src={require("../images/img-12.png")}
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Info;
