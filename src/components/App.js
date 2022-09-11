import { Routes, Route, Link } from "react-router-dom";
import Header from "./Header";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import Info from "./Info";
import Discover from "./Discover";
import Contact from "./Contact";
import Preloader from "./Preloader";

const App = () => {
    return (
        <div className="h-screen w-screen">
            <div className="h-full w-full">
                <Header />
                <div className="flex-box h-[70%] overflow-x-hidden">
                    <Routes>
                        <Route path="/" element={<PageOne />} />
                        <Route path="/pagetwo" element={<PageTwo />} />
                        <Route path="/pagethree" element={<PageThree />} />
                    </Routes>
                </div>
                <div className="calc-height flex justify-center lg:justify-end lg:pr-[8%]">
                    <div className="flex h-[35%] w-full translate-y-[-20%] lg:w-[20%] lg:translate-y-0">
                        <div className="h-full w-[33.33%]">
                            <Link
                                to="/"
                                className="flex justify-center font-yeseva text-3xl font-black lg:text-2xl"
                            >
                                first
                            </Link>
                        </div>
                        <div className="flex h-full w-[33.33%] items-center justify-center lg:justify-start">
                            <Link
                                to="/PageTwo"
                                className="font-yeseva text-3xl font-black lg:text-2xl"
                            >
                                second
                            </Link>
                        </div>
                        <div className="flex h-full w-[33.33%] items-start justify-center lg:items-end">
                            <Link
                                to="/PageThree"
                                className="font-yeseva text-3xl font-black"
                            >
                                third
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Info />
            <Discover />
            <Contact />
            <Preloader />
        </div>
    );
};

export default App;
