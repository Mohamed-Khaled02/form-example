import React from "react";
import { useForm } from "react-hook-form";

function FormComponent({ onSubmit }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col bg-white rounded-lg shadow-lg p-6"
    >
      <input
        {...register("name", { required: "Name is required." })}
        placeholder="Name"
        className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      <input
        {...register("description", { required: "Description is required." })}
        placeholder="Description"
        className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      <input
        {...register("stage", {
          required: "Stage is required.",
          pattern: /^(4|5|6)$/,
        })}
        placeholder="Stage"
        className="mb-4 py-2 px-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        Submit
      </button>
    </form>
  );
}

export default FormComponent;
