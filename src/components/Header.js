import React from "react";

const Header = () => {
    return (
        <>
            <header className="flex h-[10%] items-center justify-center lg:h-[15%]">
                <div className="flex h-full w-full items-center justify-between px-5 md:px-0 lg:w-[90%]">
                    <a
                        href="#info"
                        className="font-yeseva text-3xl text-black transition-opacity lg:text-6xl lg:font-normal lg:hover:opacity-60"
                    >
                        info
                    </a>
                    <a
                        href="#art"
                        className="font-yeseva text-3xl text-black transition-opacity lg:text-6xl lg:font-normal lg:hover:opacity-60"
                    >
                        the art
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;
