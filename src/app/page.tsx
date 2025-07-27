"use client";
import CreatePrivatePollCard from "@/components/CreatePrivatePollCard";
import CreatePublicPollCard from "@/components/CreatePublicPollCard";
import LockedCreatePrivatePollCard from "@/components/LockedCreatePrivatePollCard";
import { useState } from "react";
import { useAllPolls } from "@/hooks";

export default function Home() {
  const [isAuthed] = useState<boolean>(true);

  // remove later
  const { data: polls } = useAllPolls();
  console.log("test useAllPolls = ", polls);

  return (
    <div className="page-wrapper">
      <h1 className="font-bold text-xl mt-2">Welcome to Pollkit!</h1>
      <p>You can start by creating a poll</p>
      <div className="w-full mx-auto mt-8 flex flex-col gap-4">
        <CreatePublicPollCard />
        {isAuthed && <CreatePrivatePollCard />}
        {!isAuthed && <LockedCreatePrivatePollCard />}
      </div>
    </div>
  );
}
