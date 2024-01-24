import React, { useEffect, useState } from "react";
import { UseNodeContext } from "./QueryContext";
import axios from "axios";

const Search = () => {
  const { Query, SetQuery, SetModelResponse, Messages, SetMessages } =
    UseNodeContext();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const inputElement = document.getElementById("chat-input");
    const query = inputElement.value.trim();

    SetMessages([...Messages, query]);
    SetQuery(query);

    // SetModelResponse("");
    inputElement.value = "";
    try {
      const response = await axios.get("http://127.0.0.1:8000/" + query);
      const { response: addresses } = response.data;
      SetModelResponse(addresses);
      SetMessages([...Messages, query, addresses]);
      setIsLoading(false);
      console.log(isLoading);
    } catch (error) {
      console.error("Error fetching address data:", error);
    }
  };

  // Remove the useEffect hook if you don't need it for anything else
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="chat-input" className="sr-only">
        Enter your prompt
      </label>
      <div className="relative">
        <textarea
          id="chat-input"
          className="block w-[15rem] w-full resize-none rounded-xl border-none bg-slate-50 p-4 pr-16 text-sm text-slate-900 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 sm:text-base sm:w-[25rem] md:w-[30rem] lg:w-[45rem] xl:w-[55rem]"
          placeholder="Enter your prompt"
          rows="1"
          required
        ></textarea>
        {isLoading ? (
          <div className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 p-2 text-sm font-medium text-slate-200 sm:text-base">
            Loading...
          </div>
        ) : (
          <button
            type="submit"
            className="absolute bottom-2 right-2.5 rounded-lg bg-blue-700 p-2 text-sm font-medium text-slate-200 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:text-base"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              aria-hidden="true"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M10 14l11 -11"></path>
              <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
            </svg>
            <span className="sr-only">Send message</span>
          </button>
        )}
      </div>
    </form>
  );
};

export default Search;
