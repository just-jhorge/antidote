import { useRef, useEffect } from "react";
import gsap, { Power4 } from "gsap";

const Preloader = () => {
    const preLoad = useRef(null);
    const box = useRef(null);
    const showImg = useRef(null);
    // const moveUp = useRef(null);
    const boxTwo = useRef(null);
    const textOne = useRef(null);
    const textTwo = useRef(null);
    const textThree = useRef(null);
    const textFour = useRef(null);
    const textFive = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();

        setTimeout(() => {
            tl.to(showImg.current, {
                y: 0,
                scale: 1,
                duration: 1.3,
                ease: Power4.easeIn,
            })
                .to(
                    box.current,
                    {
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
                        duration: 1.5,
                        ease: "power4.out",
                    },
                    "+=1"
                )
                .to(boxTwo.current, {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.5,
                    ease: "power4.out",
                })
                .to(boxTwo.current, {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                    duration: 1.5,
                    ease: "power4.out",
                })
                .to(textOne.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textOne.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textTwo.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textTwo.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textThree.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textThree.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textFour.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textFour.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 0.7,
                    ease: "power2.out",
                })
                .to(textFive.current, {
                    scale: 1,
                    opacity: 1,
                    duration: 2.5,
                    ease: "power2.out",
                })
                .to(textFive.current, {
                    scale: 0,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power2.out",
                })
                .to(
                    preLoad.current,
                    {
                        clipPath: "circle(0%)",
                        duration: 0.4,
                        ease: "power2.out",
                    },
                    "+=.6"
                );
        }, 3000);
    }, []);

    return (
        <>
            <div
                className="clip b-radius flex-box pointer-events-none fixed top-0 left-0 z-10 h-full w-full bg-black"
                ref={preLoad}
            >
                <div
                    className="flex-box clip-up h-[60%] w-4/5 rounded-lg bg-blue-400 md:w-1/2 lg:w-1/4"
                    ref={box}
                >
                    <img
                        className="h-full w-full translate-y-20 scale-0 drop-shadow-md"
                        src={require("../images/img-23-remove.png")}
                        alt="Akua"
                        ref={showImg}
                        loading="lazy"
                    />
                </div>
                {/* <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-end rounded-lg">
                    <img
                        className="h-[50%] w-[70%] translate-y-20 md:h-[40%] md:w-[40%] lg:h-[60%] lg:w-1/4"
                        src={require("../images/img-23-remove.png")}
                        alt=""
                        ref={moveUp}
                        loading="lazy"
                    />
                </div> */}
                <div className="flex-box absolute top-0 left-0 h-full w-full ">
                    <div
                        className="clip-down h-[60%] w-4/5 md:w-1/2 lg:w-1/4"
                        ref={boxTwo}
                    >
                        <img
                            src={require("../images/img-21.jpg")}
                            className="rounded-lg"
                            alt=""
                        />
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-between text-white">
                    <div className="flex h-1/5 w-full flex-col items-start justify-center pl-5 lg:h-[15%] lg:flex-row lg:items-center lg:justify-start">
                        <h1 className="deep font-yeseva text-3xl lg:text-7xl">
                            antidote.
                        </h1>
                        <p className="small mt-5 block w-[70%] font-yeseva lg:hidden">
                            antidote is a photography and creative agency based
                            in <br /> Ashtown, Kumasi
                        </p>
                    </div>
                    <div className="flex h-[20%] w-full items-center justify-end pr-5">
                        <p className=" hidden w-1/5 font-yeseva lg:block">
                            antidote is a photography and <br /> creative agency
                            based in <br /> Ashtown, Kumasi
                        </p>
                    </div>
                </div>
                <div className="flex-box absolute top-0 left-0 h-full w-full">
                    <h1
                        className="transparent absolute scale-0 font-yeseva text-5xl text-red-600 opacity-0 lg:text-9xl"
                        ref={textOne}
                    >
                        This
                    </h1>
                    <h1
                        className="transparent absolute scale-0 font-yeseva text-5xl text-red-600 opacity-0 lg:text-9xl"
                        ref={textTwo}
                    >
                        is
                    </h1>
                    <h1
                        className="transparent absolute scale-0 font-yeseva text-5xl text-red-600 opacity-0 lg:text-9xl"
                        ref={textThree}
                    >
                        the future
                    </h1>
                    <h1
                        className="transparent absolute scale-0 font-yeseva text-5xl text-red-600 opacity-0 lg:text-9xl"
                        ref={textFour}
                    >
                        of
                    </h1>
                    <h1
                        className="transparent absolute scale-0 font-yeseva text-5xl text-red-600 opacity-0 lg:text-9xl"
                        ref={textFive}
                    >
                        Photography
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Preloader;
