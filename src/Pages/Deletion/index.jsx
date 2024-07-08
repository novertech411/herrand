import { useState } from "react";
import "./style.css";
import Navbar from "../../Layout/Navbar";
import Footer from "../../Layout/Footer";
const Deletion = () => {
  const [inputValue, setInputValue] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsConfirmed(value === "DELETE");
  };
  return (
    <div className="land-relat ">
      <Navbar />
      <form className="form-cont ">
        <div className="delete-text mb-8">
          At Herrands, we value your privacy and are committed to protecting
          your personal data. If you wish to delete your account and associated
          data, please complete the form below. <br />
          <div className="note-delete fw-bold">
            Note that this action is irreversible.
          </div>
        </div>

        <div className="mb-3">
          <label className="block mb-2  font-medium text-gray-900">
            Email Address:
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg  block w-full p-2.5"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2  font-medium text-gray-900">
            Your Name:
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-3">
          <label for="message" class="block mb-2  font-medium text-gray-900">
            Reason for Deletion (optional)
          </label>
          <textarea
            id="message"
            rows="4"
            class="block p-2.5 w-full  text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="block mb-2  font-medium text-gray-900">
            Type "DELETE" to Confirm
          </label>
          <input
            type="text"
            id="confirm"
            className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg block w-full p-2.5"
            value={inputValue}
            onChange={handleChange}
            required
          />
          {isConfirmed && <p className="text-green-600">Confirmed</p>}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800  font-medium rounded-lg  w-full  px-5 py-2.5 text-center "
        >
          Submit Request
        </button>
      </form>
      <Footer />
    </div>
  );
};

export default Deletion;
