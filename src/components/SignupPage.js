import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        mobile_no: "",
        email: "",
        address: "",
        password: ""
    });

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSignup = async (e) => {
        e.preventDefault();
        console.log("Submitting form data:", formData); // Debugging: Log form data

        try {
            const response = await axios.post("http://localhost:5050/farmers", formData);
            console.log("Success response from server:", response.data); // Debugging: Log server response
            alert("Farmer created successfully!");

            setFormData({
                firstname: "",
                lastname: "",
                mobile_no: "",
                email: "",
                address: "",
                password: "",
            });
        } catch (err) {
            console.error("Error during signup:", err.response?.data || err.message); // Log the actual error
            alert(err.response?.data?.message || "Failed to create farmer");
        }
    };

    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    className="mx-auto h-10 w-auto"
                    src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                    alt="Your Company"
                />
                <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
                    Sign up for an account
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" onSubmit={handleSignup}>
                    <div>
                        <label htmlFor="firstname" className="block text-sm font-medium text-gray-900">
                            First Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="firstname"
                                name="firstname"
                                type="text"
                                value={formData.firstname}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="lastname" className="block text-sm font-medium text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input
                                id="lastname"
                                name="lastname"
                                type="text"
                                value={formData.lastname}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="mobile_no" className="block text-sm font-medium text-gray-900">
                            Mobile Number
                        </label>
                        <div className="mt-2">
                            <input
                                id="mobile_no"
                                name="mobile_no"
                                type="tel"
                                value={formData.mobile_no}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                placeholder="1234567890"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Email address
                        </label>
                        <div className="mt-2">
                            <input
                                id="email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-900">
                            Address
                        </label>
                        <div className="mt-2">
                            <input
                                id="address"
                                name="address"
                                type="text"
                                value={formData.address}
                                onChange={handleChange}
                                required
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                                minLength={8}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                            />
                        </div>
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Sign up
                        </button>
                    </div>
                </form>

                <p className="mt-10 text-center text-sm text-gray-500">
                    Already a member?
                    <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
                        Sign in
                    </a>
                </p>
            </div>
        </div>
    );
};

export default SignUp;
