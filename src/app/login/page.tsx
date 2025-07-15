import { FaFacebook, FaGoogle } from "react-icons/fa6";

const LoginPage = () => {
  return (
    <div className="h-full w-full p-4 md:p-5 lg:p-6">
      <div className="bg-base-300 w-full max-w-md mx-auto p-4 mt-12 rounded shadow">
        <h1 className="font-bold text-center">Login to Pollkit</h1>
        <p className="text-center text-sm">
          Access to private polls and dashboard
        </p>

        <div className="w-full max-w-[260px] mx-auto flex flex-col mt-12">
          <button className="btn bg-red-500 hover:bg-red-600 text-white border-none">
            <FaGoogle />
            Continue with Google
          </button>
          <div className="divider">OR</div>
          <button className="btn bg-blue-500 hover:bg-blue-600 text-white border-none">
            <FaFacebook />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
