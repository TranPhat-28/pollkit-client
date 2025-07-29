"use client";
import CreatePrivatePollCard from "@/components/CreatePrivatePollCard";
import CreatePublicPollCard from "@/components/CreatePublicPollCard";
import LockedCreatePrivatePollCard from "@/components/LockedCreatePrivatePollCard";
import { useEffect, useState } from "react";
import { useAllPolls } from "@/hooks";
import { useAppSelector, useAppDispatch, decrementPoll } from "@/store";

export default function Home() {
  const [isAuthed] = useState<boolean>(true);

  // remove later
  const { data: polls } = useAllPolls();
  const pollState = useAppSelector((state) => state.poll);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(decrementPoll());

    console.log("test useAllPolls = ", polls);
    console.log("test store = ", pollState);
  }, []);

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
