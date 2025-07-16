const CreatePollPage = () => {
  return (
    <div className="h-full w-full p-4 md:p-5 lg:p-6 shadow-lg mt-6 rounded">
      <p className="font-bold text-2xl mb-5">New Poll</p>
      <form action="" className="flex flex-col gap-4">
        <div className="flex w-full justify-between items-center gap-4">
          <span>Title</span>
          <input type="text" placeholder="Poll title" className="input" />
        </div>
        <div className="flex w-full justify-between items-center gap-4">
          <span>Type</span>
          <select defaultValue="Public poll" className="select">
            <option disabled={true}>Public poll</option>
            <option>Private poll</option>
          </select>
        </div>
        <div className="flex w-full justify-between items-center gap-4">
          <span>Password</span>
          <input type="text" placeholder="Password" className="input" />
        </div>
        <div className="flex w-full justify-between items-center gap-4">
          <span>End time</span>
          <input type="time" className="input" />
        </div>
        <div className="flex w-full justify-between items-center gap-4 min-h-10">
          <span>Record result</span>
          <input type="checkbox" defaultChecked className="toggle" />
        </div>
        <div className="flex w-full justify-between items-center gap-4 min-h-10">
          <span>Result visible</span>
          <input type="checkbox" defaultChecked className="toggle" />
        </div>
        <button className="btn mt-4 max-w-[200px]">Create</button>
      </form>
    </div>
  );
};

export default CreatePollPage;
