"use client";
import { Suspense, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ICreatePollFormInput } from "@/types/forms";

const CreatePollPage = () => {
  const {
    register,
    unregister,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<ICreatePollFormInput>();
  const startTime = watch("startTime");
  const startAt =
    startTime === "now" ? new Date() : new Date(watch("startAt")!);
  const endTime = new Date(watch("endTime"));
  const pollType = watch("pollType");
  const onSubmit: SubmitHandler<ICreatePollFormInput> = (data) => {
    // Submit form
    console.log(data);
  };

  useEffect(() => {
    if (startTime === "now") {
      unregister("startAt");
    }
    if (pollType === "public") {
      unregister("password");
    }
  }, [startTime, pollType]);

  return (
    <div className="page-wrapper">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="fieldset bg-base-400 border-base-300 rounded-box border p-4 mx-auto w-full max-w-[600px]"
      >
        <p className="text-center font-bold text-2xl">Create Poll</p>

        <label className="label text-base">Poll Name</label>
        <input
          {...register("pollName", {
            required: { value: true, message: "Field is required" }
          })}
          className="input w-full"
        />
        {errors.pollName && (
          <p className="text-warning italic">{errors.pollName.message}</p>
        )}

        <label className="label text-base">Start Time</label>
        <div className="flex gap-2">
          <select {...register("startTime")} className="select flex-1">
            <option value="now">Now</option>
            <option value="start-at">Start at</option>
          </select>
          {startTime === "start-at" && (
            <input
              type="datetime-local"
              {...register("startAt", {
                required: { value: true, message: "Field is required" }
              })}
              className="input flex-1"
            />
          )}
        </div>
        {errors.startAt && (
          <p className="text-warning italic">{errors.startAt.message}</p>
        )}

        <label className="label text-base">End Time</label>
        <input
          type="datetime-local"
          {...register("endTime", {
            required: { value: true, message: "Field is required" },
            validate: () =>
              startAt < endTime || "End time must be after start time"
          })}
          className="input w-full"
        />
        {errors.endTime && (
          <p className="text-warning italic">{errors.endTime.message}</p>
        )}

        <label className="label text-base">Visibility</label>
        <select
          {...register("pollType", { required: true })}
          className="select w-full"
        >
          <option value="public">Public poll</option>
          <option value="private">Private poll</option>
        </select>

        {pollType === "private" && (
          <>
            <label className="label text-base">Password</label>
            <input
              type="password"
              {...register("password", {
                required: { value: true, message: "Field is required" }
              })}
              className="input w-full"
            />
            {errors.password && (
              <p className="text-warning italic">{errors.password.message}</p>
            )}
          </>
        )}

        <div className="h-12 flex justify-between items-center">
          <label className="label text-base ">Show result to users</label>
          <input
            type="checkbox"
            {...register("resultOpened")}
            className="toggle toggle-primary"
          />
        </div>

        <div className="h-12 flex justify-between items-center">
          <label className="label text-base">Record for review</label>
          <input
            type="checkbox"
            {...register("recorded")}
            className="toggle toggle-primary"
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4">
          Create
        </button>
      </form>
    </div>
  );
};

const SuspenseCreatePollPage = () => (
  <Suspense>
    <CreatePollPage />
  </Suspense>
);

export default SuspenseCreatePollPage;
