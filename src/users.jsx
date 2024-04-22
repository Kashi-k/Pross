import React, { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    email: "",
  });
  const [userData, setUserData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/users");
      setUserData(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleEdit = (index) => {
    setEditingIndex(index);
    setFormData(userData[index]); // Populate form data with the selected user's data
  };

  const handleSave = async (index) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/users/${userData[index].id}`,
        formData
      );
      const updatedUserData = [...userData];
      updatedUserData[index] = response.data;
      setUserData(updatedUserData);
      setEditingIndex(null); // Exit edit mode after saving
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (index) => {
    try {
      await axios.delete(`http://localhost:3001/users/${userData[index].id}`);
      const updatedUserData = [...userData];
      updatedUserData.splice(index, 1);
      setUserData(updatedUserData);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleAddData = async () => {
    // Logic to add new data
    // Example: send a POST request with formData to your backend API
    try {
      await axios.post("http://localhost:3001/users", formData);
      // Refresh user data after adding new data
      fetchData();
    } catch (error) {
      console.error("Error adding data:", error);
    }
    // Close the modal after adding data
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      {/* Modal toggle button */}
      <div className="absolute right-3 top-3">
        <button
          className="block text-white bg-gray-700 hover:bg-gray-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-lg"
          type="button"
          onClick={toggleModal}
        >
          Add Data
        </button>
      </div>

      {/* Main modal */}
      <div
        id="authentication-modal"
        className={`${
          isModalOpen ? "fixed inset-0 flex" : "hidden"
        } items-center justify-center bg-gray-500 bg-opacity-75`}
      >
        <div className="bg-white w-full max-w-md px-4 py-6 rounded-lg shadow relative dark:bg-gray-700">
          <div className="flex justify-end p-2">
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={toggleModal}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          {/* Modal content */}
          <div className="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <form
              className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8"
              onSubmit={handleAddData}
            >
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                UserName
              </h3>
              <div>
                <label
                  htmlFor="FirstName"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  type="text"
                  name="FirstName"
                  id="FirstName"
                  value={formData.FirstName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your First Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="LastName"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  name="LastName"
                  id="LastName"
                  value={formData.LastName}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your Last Name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="Address"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Address
                </label>
                <input
                  type="text"
                  name="Address"
                  id="Address"
                  value={formData.Address}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Enter your Address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="PhoneNo"
                  className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300"
                >
                  Your PhoneNo
                </label>
                <input
                  type="number"
                  name="PhoneNo"
                  id="PhoneNo"
                  value={formData.PhoneNo}
                  onChange={handleChange}
                  placeholder="+92 000 0000000"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required=""
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Save
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Table to display user data */}
      <div className="mt-8 overflow-scroll">
        <h2 className="text-xl font-bold mb-4 justify-center text-center">
          User Data
        </h2>
        <div className="w-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300 shadow-lg">
            <thead className="bg-gray-200">
              <tr>
                <th className="border border-gray-300 px-4 py-2">First Name</th>
                <th className="border border-gray-300 px-4 py-2">Last Name</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="FirstName"
                        value={formData.FirstName}
                        onChange={handleChange}
                      />
                    ) : (
                      user.FirstName
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="text"
                        name="LastName"
                        value={formData.LastName}
                        onChange={handleChange}
                      />
                    ) : (
                      user.LastName
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {editingIndex === index ? (
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {editingIndex === index ? (
                      <button
                        onClick={() => handleSave(index)}
                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                      >
                        Save
                      </button>
                    ) : (
                      <>
                        <button
                          onClick={() => handleEdit(index)}
                          className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-blue-300"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded mr-2 focus:outline-none focus:ring focus:ring-red-300"
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
