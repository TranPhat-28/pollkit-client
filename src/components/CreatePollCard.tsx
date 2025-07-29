"use client";
import { useRouter } from "next/navigation";

const CreatePollCard = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/create-poll")}
      className="w-full h-36 rounded-lg hover:brightness-90 duration-75 cursor-pointer flex flex-col justify-center p-6 bg-orange-300"
    >
      <h1 className="font-bold text-xl mb-4">Create A Poll</h1>
      <p className="w-1/2 text-xs italic">Create a poll right now</p>
    </div>
  );
};

export default CreatePollCard;
