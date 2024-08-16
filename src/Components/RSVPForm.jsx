import { useState } from "react";
import axios from "axios";
const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    side: "",
    attendance: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent
    const data = {
      fish: formData.name,
      kim_tomonidan: formData.side, // Fixed the `side` field
      tadbirda_ishtirok: formData.attendance,
      tilaklar: formData.message,
    };

    try {
      const response = await axios.post(
        // "https://plankton-app-9mog7.ondigitalocean.app/api/submit-form",
        "http://localhost:3001/api/submit-form",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle successful response here
      console.log(response.data);
      setStatusMessage("Form muvaffaqiyatli yuborildi!");
      // Optionally, reset form
      setFormData({
        name: "",
        side: "",
        attendance: "",
        message: "",
      });
    } catch (error) {
      setStatusMessage(
        "Form yuborishda xato yuz berdi. Iltimos, qayta urinib ko'ring."
      );
    }
  };

  return (
    <div className="special-font rsvp-form w-full max-w-md bg-white p-6 md:p-8 rounded-lg shadow-md mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            F.I.SH*
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Ismingizni kiriting..."
            className="special-font shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="special-font block text-gray-700 text-sm font-bold mb-2">
            Kim tomondan mehmonsiz?*
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="kelin"
              name="side"
              value="Kelin"
              className="mr-2"
              checked={formData.side === "Kelin"}
              onChange={handleChange}
              required
            />
            <label htmlFor="kelin" className="text-gray-700">
              Kelin
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="kuyov"
              name="side"
              value="Kuyov"
              className="mr-2"
              checked={formData.side === "Kuyov"}
              onChange={handleChange}
            />
            <label htmlFor="kuyov" className="text-gray-700">
              Kuyov
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Tadbirda ishtirok eta olasizmi?*
          </label>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="boraman"
              name="attendance"
              value="Boraman"
              className="mr-2"
              checked={formData.attendance === "Boraman"}
              onChange={handleChange}
              required
            />
            <label htmlFor="boraman" className="text-gray-700">
              Albatta, boraman
            </label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="radio"
              id="olmayman"
              name="attendance"
              value="Olmayman"
              className="mr-2"
              checked={formData.attendance === "Olmayman"}
              onChange={handleChange}
            />
            <label htmlFor="olmayman" className="text-gray-700">
              Afsuski, bora olmayman
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Bizga bildirmoqchi bo‘lgan tilaklaringiz
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tilaklaringiz..."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Yuborish
          </button>
        </div>
      </form>
      {statusMessage && (
        <div
          className={`mt-4 p-4 rounded text-white ${
            statusMessage.includes("xato") ? "bg-red-500" : "bg-green-500"
          }`}
        >
          {statusMessage}
        </div>
      )}
    </div>
  );
};

export default RSVPForm;
