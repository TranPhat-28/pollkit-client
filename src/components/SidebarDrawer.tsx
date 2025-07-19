"use client";
import { useRouter } from "next/navigation";

const SidebarDrawer = () => {
  const router = useRouter();

  return (
    <div className="drawer-side">
      <label
        htmlFor="navigationDrawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      <ul className="menu bg-base-200 min-h-full w-80 p-4">
        {/* Sidebar content here */}
        <h2 className="font-bold text-lg p-2">Poll Spaces</h2>
        <li className="pl-2">
          <a
            onClick={() => {
              router.push("/public");
            }}
          >
            Public space
          </a>
        </li>
        <li className="pl-2">
          <a
            onClick={() => {
              router.push("/private");
            }}
          >
            Private space
          </a>
        </li>

        <h2 className="font-bold text-lg p-2">Dashboard</h2>
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
    </div>
  );
};

export default SidebarDrawer;
