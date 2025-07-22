"use client";
import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

type PollType = "public" | "private"; // remove later
type StartOption = "now" | "start-at"; // remove later

const CreatePollPage = () => {
  const params = useSearchParams();
  const [pollType, setPollType] = useState<PollType>(
    params.has("private") ? "private" : "public"
  );
  const [startOption, setStartOption] = useState<StartOption>("now");
  const selectPollType = (type: PollType) => {
    setPollType(type);
  };
  const changeStartOption = (option: StartOption) => {
    setStartOption(option);
  };

  return (
    <div className="page-wrapper">
      <fieldset className="fieldset bg-base-400 border-base-300 rounded-box border p-4 mx-auto w-full max-w-[600px]">
        <p className="text-center font-bold text-2xl">Create Poll</p>

        <label className="label text-base">Poll Name</label>
        <input type="text" required className="input w-full" />

        <label className="label text-base">Start Time</label>
        <div className="flex gap-2">
          <select
            className="select"
            value={startOption}
            onChange={(event) =>
              changeStartOption(event.target.value as StartOption)
            }
          >
            <option value="now">Now</option>
            <option value="start-at">Start at</option>
          </select>
          <input
            type="time"
            className="input"
            disabled={startOption !== "start-at"}
          />
        </div>

        <label className="label text-base">End Time</label>
        <input type="time" className="input w-full" />

        <label className="label text-base">Visibility</label>
        <select
          className="select w-full"
          value={pollType}
          onChange={(event) => selectPollType(event.target.value as PollType)}
        >
          <option value="public">Public poll</option>
          <option value="private">Private poll</option>
        </select>

        {pollType === "private" && (
          <>
            <label className="label text-base">Password</label>
            <input type="password" required className="input w-full" />
          </>
        )}

        <div className="h-12 flex justify-between items-center">
          <label className="label text-base ">Show result to users</label>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>

        <div className="h-12 flex justify-between items-center">
          <label className="label text-base">Record for review</label>
          <input type="checkbox" className="toggle toggle-primary" />
        </div>

        <button className="btn btn-primary mt-4">Create</button>
      </fieldset>
    </div>
  );
};

const SuspenseCreatePollPage = () => (
  <Suspense>
    <CreatePollPage />
  </Suspense>
);

export default SuspenseCreatePollPage;
