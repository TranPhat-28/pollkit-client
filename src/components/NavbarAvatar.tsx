"use client";
import Image from "next/image";

const NavbarAvatar = () => {
  return (
    <div className="avatar lg:ml-auto">
      <div className="ring-primary ring-offset-base-100 w-10 rounded-full ring-2 ring-offset-2">
        <Image
          alt="Navbar Avatar"
          width={40}
          height={40}
          className="rounded-box"
          src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp"
        />
      </div>
    </div>
  );
};

export default NavbarAvatar;
