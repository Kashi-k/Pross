import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Calculator = () => {
  const [bmiResult, setBmiResult] = useState(null);

  const handleCalculate = (values, { setSubmitting }) => {
    setTimeout(() => {
      const height = parseFloat(values.height);
      const weight = parseFloat(values.weight);
      const age = parseInt(values.age);
      const gender = values.gender;

      if (
        !isNaN(height) &&
        !isNaN(weight) &&
        height > 0 &&
        weight > 0 &&
        age > 0
      ) {
        let bmi;
        if (gender === "male" || gender === "female") {
          bmi = weight / (height * height);
        } else if (gender === "kid") {
          bmi = (weight / (height * height)) * 0.85; // Reduce BMI by 15% for kids
        } else if (gender === "teenager") {
          bmi = (weight / (height * height)) * 1.1; // Increase BMI by 10% for teenagers
        }
        setBmiResult(bmi.toFixed(2));
      } else {
        setBmiResult(null);
      }
      setSubmitting(false);
    }, 400);
  };

  const handleReset = () => {
    setBmiResult(null);
  };

  return (
    <div className="flex flex-col items-center h-screen bg-gray-200 p-8">
      <div className="mb-8 text-4xl font-bold">BMI Calculator</div>
      <div className="mb-8 text-4xl font-bold">KASHIF KHAN</div>
      <div className="w-full max-w-md bg-white rounded-md shadow-md p-6">
        {bmiResult !== null ? (
          <div className="text-center mb-4">
            <div className="text-2xl font-semibold mb-2">
              Your BMI is: {bmiResult}
            </div>
            <button
              onClick={handleReset}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring"
            >
              Go Back
            </button>
          </div>
        ) : (
          <Formik
            initialValues={{ height: "", weight: "", age: "", gender: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.height) {
                errors.height = "Height is required";
              } else if (isNaN(values.height)) {
                errors.height = "Invalid height";
              }
              if (!values.weight) {
                errors.weight = "Weight is required";
              } else if (isNaN(values.weight)) {
                errors.weight = "Invalid weight";
              }
              if (!values.age) {
                errors.age = "Age is required";
              } else if (isNaN(values.age) || values.age < 0) {
                errors.age = "Invalid age";
              }
              if (!values.gender) {
                errors.gender = "Gender is required";
              }
              return errors;
            }}
            onSubmit={handleCalculate}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col">
                <div className="mb-4">
                  <label className="block mb-1">Gender</label>
                  <div className="flex items-center">
                    <label className="mr-4">
                      <Field
                        type="radio"
                        name="gender"
                        value="male"
                        className="mr-1"
                      />
                      Male
                    </label>
                    <label>
                      <Field
                        type="radio"
                        name="gender"
                        value="female"
                        className="mr-1"
                      />
                      Female
                    </label>
                  </div>
                  <ErrorMessage
                    name="gender"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="age" className="block mb-1">
                    Age
                  </label>
                  <Field
                    type="number"
                    name="age"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                  />
                  <ErrorMessage
                    name="age"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="height" className="block mb-1">
                    Height (m)
                  </label>
                  <Field
                    type="number"
                    name="height"
                    step="0.01"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                  />
                  <ErrorMessage
                    name="height"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="weight" className="block mb-1">
                    Weight (kg)
                  </label>
                  <Field
                    type="number"
                    name="weight"
                    className="border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-300 w-full"
                  />
                  <ErrorMessage
                    name="weight"
                    component="div"
                    className="text-red-500 mt-1"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md focus:outline-none focus:ring"
                >
                  {isSubmitting ? "Calculating..." : "Calculate BMI"}
                </button>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default Calculator;
