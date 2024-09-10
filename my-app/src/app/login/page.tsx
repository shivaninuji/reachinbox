import Image from "next/image";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-background-light dark:bg-background-dark">
      {/* Top Logo */}
      <div className="absolute top-0 w-full flex justify-center gap-2 items-center p-5 bg-black text-white border-b border-[#202020]">
        <Image width={500} height={500} alt="logo" src="/logo.png" className="w-40" />
      </div>

      {/* Card */}
      <div className="mt-20 bg-neutral-900 dark:bg-neutral-800 p-8 rounded-lg shadow-md flex flex-col justify-center gap-5 items-center text-center w-[500px] border border-[#202020]">
        <h2 className="text-2xl font-semibold text-white mb-6">Create a new account</h2>
        
        {/* Sign Up with Google Button */}
        <button className="flex items-center justify-center w-96 py-2 px-4 bg-black dark:bg-gray-700 text-white font-medium rounded-md hover:bg-neutral-950 dark:hover:bg-neutral-600 transition duration-150 ease-in-out mb-4 border border-[#202020]">
          <FaGoogle className="mr-2" />
          Sign Up with Google
        </button>

        {/* Create Account Button */}
        <button className="w-60 py-2 px-4 bg-blue-600 dark:bg-blue-500 text-white font-medium rounded-md hover:bg-blue-500 dark:hover:bg-blue-400 transition duration-150 ease-in-out mb-4">
          Create an Account
        </button>

        {/* Link to Sign In */}
        <p className="text-gray-400 dark:text-gray-300">
          Already have an account?{" "}
          <a href="/signin" className="text-white-500 dark:text-white-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 w-full flex justify-center p-4 border-t border-[#202020] bg-black text-white">
        <p className="text-gray-400">© 2024 Reachinbox. All rights reserved.</p>
      </div>
    </main>
  );
}
