import React, { useState } from "react";
import axios from "axios";
// import Lottie from "lottie-react";
// import successAnimation from "../../public/images/success.json"; // Uncomment and adjust the path if needed

const Form = ({ onClose, productId,productName }) => {  // Accept `productId` as a prop
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Update form data state on change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Include product ID in the payload
      const payload = { ...formData, productId };

      // Send POST request to the server
      const response = await axios.post("http://localhost:5002/Wishlists", payload);

      // If successful, reset the form and display success message
      if (response.status === 201) {
        setFormData({ name: "", email: "", phoneNumber: "" });
        setErrorMessage("");
        setSuccessMessage("We’ll be in touch soon with the next steps");
      }
    } catch (error) {
      setSuccessMessage("");
      setErrorMessage("Failed to submit the form. Please ensure all the fields are correct.");
      console.error("Form submission error: ", error);
    }
  };

  return (
    <div className="relative bg-gray-50 flex flex-col items-center justify-center max-w-sm overflow-hidden mx-auto py-0 md:py-0">
      <div className="relative z-10 bg-white rounded-lg shadow-lg">
        {/* Display error message if any */}
        {errorMessage && (
          <p className="text-red-500 mb-4 text-center">{errorMessage}</p>
        )}

        {/* Display success message */}
        {successMessage && (
          <div className="flex flex-col items-center">
            {/* Uncomment and use if needed */}
            {/* <Lottie animationData={successAnimation} loop={true} className="w-3/4 h-3/4 mb-4" /> */}
            <p className="text-md text-gray-700 mb-4 text-center font-bold">{successMessage}</p>
            <button
              className="text-white bg-black border border-black hover:bg-gray-800 hover:border-gray-800 px-4 py-2 rounded"
              onClick={onClose}
            >
              Go Back
            </button>
          </div>
        )}

        {/* Form - Hide when successMessage is shown */}
        {!successMessage && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-2">
            <h2 className="text-2xl md:text-2xl font-bold text-center text-black mt-5 max-w-full overflow-hidden text-ellipsis whitespace-nowrap">
  Join Waitlist for {productName}
</h2>

            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="appearance-none mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-400 focus:border-purple-400 text-black"
                placeholder="Enter your name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="appearance-none mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-400 focus:border-purple-400 text-black"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label className="block text-gray-700">Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="appearance-none mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-400 focus:border-purple-400 text-black"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-3 text-white bg-[#7234F7] hover:bg-purple-700 transition duration-300 ease-in-out text-sm font-bold rounded-md"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Form;
