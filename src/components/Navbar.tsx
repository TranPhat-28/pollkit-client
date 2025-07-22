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
        <div className="ml-0 pl-0 lg:ml-2 lg:pl-2 pr-2 mr-2 flex-1 lg:flex-none">
          <button
            className="text-logo transform duration-[100ms] active:scale-110"
            onClick={() => router.push("/")}
          >
            PollKit
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-2">
          <div className="dropdown dropdown-start dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              Poll Spaces
            </div>
            <ul
              tabIndex={0}
              className="p-2 shadow-sm menu dropdown-content z-1 bg-base-100 rounded-box w-52"
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
          </div>
          <div className="dropdown dropdown-start dropdown-hover">
            <div tabIndex={0} role="button" className="m-1">
              Dashboard
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <li>
                <a>Option A</a>
              </li>
              <li>
                <a>Option B</a>
              </li>
              <li>
                <a>Option C</a>
              </li>
              <li>
                <a>Option D</a>
              </li>
            </ul>
          </div>
        </div>
        <button
          className="btn btn-primary btn-outline lg:ml-auto"
          onClick={() => router.push("/login")}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
