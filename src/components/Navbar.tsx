"use client";
import { useRouter } from "next/navigation";
import { HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
    const router = useRouter();

    return (
        <div className="navbar bg-base-300 w-full">
            <div className="flex items-center w-full lg:max-w-[1024px] lg:mx-auto">
                <div className="flex-none lg:hidden">
                    <label
                        htmlFor="navigationDrawer"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                    >
                        <HiMenuAlt1 size={"24px"} />
                    </label>
                </div>
                <div className="mx-2 flex-1 lg:flex-none px-2 text-logo">
                    PollKit
                </div>
                <div className="hidden flex-none lg:block">
                    <ul className="menu menu-horizontal">
                        {/* Navbar menu content here */}
                        <li className="dropdown dropdown-start">
                            <div tabIndex={0} role="button">
                                Poll Spaces
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm m-0"
                            >
                                <li>
                                    <a
                                        onClick={() => {
                                            router.push("/public");
                                        }}
                                    >
                                        Public space
                                    </a>
                                </li>
                                <li>
                                    <a
                                        onClick={() => {
                                            router.push("/private");
                                        }}
                                    >
                                        Private space
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="dropdown dropdown-start">
                            <div tabIndex={0} role="button">
                                Dashboard
                            </div>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm m-0"
                            >
                                <li className="pl-2">
                                    <a>Option A</a>
                                </li>
                                <li className="pl-2">
                                    <a>Option B</a>
                                </li>
                                <li className="pl-2">
                                    <a>Option C</a>
                                </li>
                                <li className="pl-2">
                                    <a>Option D</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <button className="btn btn-primary btn-outline lg:ml-auto">
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
