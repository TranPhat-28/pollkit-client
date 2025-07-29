"use client";
import { useEffect, useState } from "react";
import { useAllPolls } from "@/hooks";
import { useAppSelector, useAppDispatch, decrementPoll } from "@/store";
import CreatePollCard from "@/components/CreatePollCard";
import GoToDashboardCard from "@/components/GoToDashboardCard";
import LockedGoToDashboardCard from "@/components/LockedGoToDashboardCard";

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
      <p>You can start with these features</p>
      <div className="w-full mx-auto mt-8 flex flex-col gap-4">
        <CreatePollCard />
        {isAuthed && <GoToDashboardCard />}
        {!isAuthed && <LockedGoToDashboardCard />}
      </div>
    </div>
  );
}
