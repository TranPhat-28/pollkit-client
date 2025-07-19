"use client";
import { useState } from "react";

type PollType = "public" | "private"; // remove later

const CreatePollPage = () => {
  const [pollType, setPollType] = useState<PollType>("public");
  const selectPollType = (type: PollType) => {
    setPollType(type);
  };
  return (
    <div className="h-full w-full p-4 md:p-5 lg:p-6">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-[600px] border p-4 mx-auto">
        <legend className="fieldset-legend text-lg">New Poll</legend>

        <label className="label text-base">Title</label>
        <input type="text" required className="input w-full" />

        <label className="label text-base">Time to end</label>
        <input type="time" className="input w-full" />

        <label className="label text-base">Type</label>
        <select
          className="select w-full"
          onChange={(a) => selectPollType(a.target.value as PollType)}
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

        <label className="label text-base ">Show result to users</label>
        <div className="h-10 flex items-center">
          <input type="checkbox" className="toggle" />
        </div>

        <label className="label text-base">Record for review</label>
        <div className="h-10 flex items-center">
          <input type="checkbox" className="toggle" />
        </div>

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
    </div>
  );
};

export default CreatePollPage;
