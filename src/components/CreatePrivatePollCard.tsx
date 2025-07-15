const CreatePrivatePollCard = () => {
  return (
    <div className="w-full h-36 rounded-lg hover:brightness-90 duration-75 cursor-pointer flex flex-col justify-center bg-private-poll-card p-6">
      <h1 className="font-bold text-xl mb-4">Private Poll</h1>
      <p className="w-1/2 text-xs italic">
        Create a customized poll that suits your requirements
      </p>
    </div>
  );
};

export default CreatePrivatePollCard;
