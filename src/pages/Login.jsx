// Login.js

import React from 'react'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">
            <div className="w-full max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8">Welcome Back</h2>

                <form className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-purple-500"
                            placeholder="Enter your password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 px-4 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-200"
                    >
                        Sign In
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Don't have an account?{" "}
                    <a href="/signup" className="text-purple-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
};
export default Login;