"use client";
import { useRouter } from "next/navigation";

const GoToDashboardCard = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/dashboard")}
      className="w-full h-36 rounded-lg hover:brightness-90 duration-75 cursor-pointer flex flex-col justify-center p-6 bg-orange-300"
    >
      <h1 className="font-bold text-xl mb-4">View Dashboard</h1>
      <p className="w-1/2 text-xs italic">
        All your activities are recorded here
      </p>
    </div>
  );
};

export default GoToDashboardCard;
