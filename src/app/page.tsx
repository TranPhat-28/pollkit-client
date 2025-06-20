'use client';
import CreatePrivatePollCard from "@/components/CreatePrivatePollCard";
import CreatePublicPollCard from "@/components/CreatePublicPollCard";
import LockedCreatePrivatePollCard from "@/components/LockedCreatePrivatePollCard";
import { useState } from "react";

export default function Home() {
  const [isAuthed, setIsAuthed] = useState<boolean>(true);
  
  return (
    <div className="h-full w-full p-4 md:p-5 lg:p-6">
      <h1 className="font-bold text-xl mt-2">Welcome to Pollkit!</h1>
      <p>You can start by creating a poll</p>
      <div className="w-full mx-auto mt-8 flex flex-col gap-4">
        <CreatePublicPollCard />
        { isAuthed && <CreatePrivatePollCard /> }
        { !isAuthed && <LockedCreatePrivatePollCard /> }
      </div>
    </div>
  );
}
