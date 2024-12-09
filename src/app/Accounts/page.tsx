import React from 'react';
import { FaAngleRight } from "react-icons/fa6";

function Accounts() {
  return (
    <>
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-[350px]"
        style={{ backgroundImage: 'url(/image/bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl sm:text-5xl font-Poppins text-center">My Account</h1>
            <p className="text-lg sm:text-xl mt-2 flex justify-center items-center">
              <a href="/" className="text-white">Home</a> <FaAngleRight className="mx-2" /> My Account
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] py-20">
        <div className="rounded-lg p-8 max-w-6xl w-full flex flex-col lg:flex-row gap-40">
          {/* Login Section */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-black">Log In</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="username" className="block text-black font-medium text-xl mb-4">
                  Username or Email Address
                </label>
                <input
                  type="text"
                  id="username"
                  className="w-full border-black bg-[#f8f9fa] text-black rounded-lg shadow-sm focus:ring-black focus:border-black p-4"
                  placeholder="Enter your username or email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-black font-medium text-xl mb-4">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border-black bg-[#f8f9fa] text-black rounded-lg shadow-sm focus:ring-black focus:border-black p-4"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mb-4 flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="mr-4 w-6 h-6"
                  style={{ transform: 'scale(1.5)' }}
                />
                <label htmlFor="remember" className="text-black text-lg">
                  Remember me
                </label>
              </div>

              <div className="flex justify-start items-center gap-4">
                <button
                  type="submit"
                  className="w-40 py-2 px-4 border-black text-black bg-[#f8f9fa] rounded-lg hover:bg-[#e2e6ea] transition"
                >
                  Log In
                </button>
                <a href="#" className="text-black hover:underline text-lg">
                  Lost your password?
                </a>
              </div>
            </form>
          </div>

          {/* Register Section */}
          <div className="flex-1">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-black">Register</h2>
            <form>
              <div className="mb-6">
                <label htmlFor="email" className="block text-black font-medium text-xl mb-4">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border-black bg-[#f8f9fa] text-black rounded-lg shadow-sm focus:ring-black focus:border-black p-4"
                  placeholder="Enter your email"
                />
              </div>
              <p className="text-black text-lg mb-6">
                A link to set a new password will be sent to your email address.
              </p>
              <p className="text-black text-lg mb-8">
                Your personal data will be used to support your experience throughout this website, manage access to your account, and for other purposes described in our privacy policy.
              </p>
              <button
                type="submit"
                className="w-40 py-3 px-4 border-black text-black bg-[#f8f9fa] rounded-lg hover:bg-[#e2e6ea] transition text-lg"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Section with Information */}
      <div className="flex justify-around bg-[#f7f7f7] py-12 px-8 rounded-lg shadow-md mt-8">
        <div className="text-center max-w-xs">
          <h3 className="text-2xl font-semibold text-black">Free Delivery</h3>
          <p className="text-[#6c757d] mt-2 text-lg leading-relaxed">
            For all orders over $50, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <h3 className="text-2xl font-semibold text-black">90 Days Return</h3>
          <p className="text-[#6c757d] mt-2 text-lg leading-relaxed">
            If goods have problems, consectetur adipiscing elit.
          </p>
        </div>
        <div className="text-center max-w-xs">
          <h3 className="text-2xl font-semibold text-black">Secure Payment</h3>
          <p className="text-[#6c757d] mt-2 text-lg leading-relaxed">
            100% secure payment, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Accounts;