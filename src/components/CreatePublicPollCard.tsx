"use client";
import { useRouter } from "next/navigation";

const CreatePublicPollCard = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/create-poll")}
      className="w-full h-36 rounded-lg hover:brightness-90 duration-75 cursor-pointer p-6 flex flex-col justify-center bg-public-poll-card"
    >
      <h1 className="font-bold text-xl mb-4">Public Poll</h1>
      <p className="w-1/2 text-xs italic">
        Create a poll that can be joined by anyone - including anonymous users
      </p>
    </div>
  );
};

export default CreatePublicPollCard;
