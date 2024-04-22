import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const UserForm = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address: Yup.string().required("Address is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    gender: Yup.string().required("Gender is required"),
    course: Yup.string().required("Course is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    address: "",
    email: "",
    country: "",
    city: "",
    gender: "",
    course: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    console.log("Form Values:", values);
    alert(JSON.stringify(values));
    // Refresh the page after form submission
    window.location.reload();
    setSubmitting(false);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-bold mb-4">User Form</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label htmlFor="firstName" className="block font-semibold mb-1">
                  First Name
                </label>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName" className="block font-semibold mb-1">
                  Last Name
                </label>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="address" className="block font-semibold mb-1">
                Address
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                placeholder="Enter your address"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-semibold mb-1">
                Email
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 mt-1"
              />
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label htmlFor="country" className="block font-semibold mb-1">
                  Country
                </label>
                <Field
                  type="text"
                  id="country"
                  name="country"
                  placeholder="Enter your country name"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="city" className="block font-semibold mb-1">
                  City
                </label>
                <Field
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Enter your city name"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            </div>
            <div className="flex mb-4">
              <div className="w-1/2 mr-4">
                <label htmlFor="gender" className="block font-semibold mb-1">
                  Gender
                </label>
                <Field
                  as="select"
                  id="gender"
                  name="gender"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="course" className="block font-semibold mb-1">
                  Course
                </label>
                <Field
                  as="select"
                  id="course"
                  name="course"
                  className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                >
                  <option value="">Select Course</option>
                  <option value="math">Math</option>
                  <option value="science">Science</option>
                  <option value="history">History</option>
                </Field>
                <ErrorMessage
                  name="course"
                  component="div"
                  className="text-red-500 mt-1"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring"
            >
              Get Value
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default UserForm;
