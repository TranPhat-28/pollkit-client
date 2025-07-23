"use client";
import { FaLock } from "react-icons/fa6";

const LockedCreatePrivatePollCard = () => {
  return (
    <div className="w-full h-36 rounded-lg cursor-pointer bg-gray-700 p-6 flex items-center justify-center">
      <div className="flex items-center justify-center gap-2">
        <FaLock />
        <h1 className="font-bold">Login to create Private Poll</h1>
      </div>
    </div>
  );
};

export default LockedCreatePrivatePollCard;
