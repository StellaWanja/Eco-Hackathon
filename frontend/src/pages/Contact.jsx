import React from "react";
import { Form } from "react-router-dom";
import { SectionTitle } from "../components";

const Contact = () => {
  return (
    <>
      <div className="isolate lg:px-8 bg-[#FEFDED] pb-12 pt-2">
        <h1 className="text-4xl text-center text-[#40826D] mt-8">Contact Us</h1>
        <Form
          action="#"
          method="POST"
          className="mx-auto max-w-xl sm:mt-20 bg-[#FEFDED] p-8 rounded-lg pb-12 border-2 shadow-md"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 pt-4">
            <div>
              <label
                htmlFor="first-name"
                className="block text-lg font-semibold leading-6 text-[#40826D]"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-[#FEFDED] focus:ring-[#40826D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-lg font-semibold leading-6 text-[#40826D]"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-[#FEFDED] focus:ring-[#40826D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-lg font-semibold leading-6 text-[#40826D]"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-[#FEFDED] focus:ring-[#40826D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-lg font-semibold leading-6 text-[#40826D]"
              >
                Phone number
              </label>
              <div className="relative mt-2.5">
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="tel"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-[#FEFDED] focus:ring-[#40826D] sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-lg font-semibold leading-6 text-[#40826D]"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset bg-[#FEFDED] focus:ring-[#40826D] sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-[#40826D] px-3.5 py-2.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-[#23473c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Contact;
