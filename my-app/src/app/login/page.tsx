import Image from "next/image";
import { FaGoogle } from "react-icons/fa";


export default function LoginPage() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-black">
      {/* Top Logo */}
      <div className="absolute top-0 w-full flex justify-center gap-2 item-center p-4 bg-black border-b border-[#202020]">
        <Image width={500} height={500} alt="logo" src="/logo.png" className="w-40"></Image>
      </div>

      {/* Card */}
      <div className="bg-neutral-900 p-8 rounded-lg shadow-md flex flex-col justify-center gap-5 items-center text-center w-[500px] border border-[#202020]">
        <h2 className="text-2xl font-semibold text-white mb-6">Create a new account</h2>
        
        {/* Sign Up with Google Button */}
        <button className="flex items-center justify-center w-96 py-2 px-4 bg-black text-white font-medium rounded-md hover:bg-neutral-950 transition duration-150 ease-in-out mb-4 bg-neutral-900 border">
          <FaGoogle className="mr-2" />
          Sign Up with Google
        </button>

        {/* Create Account Button */}
        <button className="w-60 py-2 px-4 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition duration-150 ease-in-out mb-4">
          Create an Account
        </button>

        {/* Link to Sign In */}
        <p className="text-gray-400">
          Already have an account?{" "}
          <a href="/signin" className="text-white-500 hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full flex justify-center p-4 border-t border-[#202020]">
        <p className="text-gray-400 text-sm">© 2024 Reachinbox. All rights reserved.</p>
      </div>
    </main>
  );
}
