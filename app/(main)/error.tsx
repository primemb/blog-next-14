"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  let errorMessage = error.message || "Something went wrong";

  return (
    <div className="grid mt-10 py-10 px-4 bg-white dark:bg-primary/5 place-content-center">
      <div className="text-center">
        <h1 className="font-black my-10 text-neutral-600 dark:text-white text-4xl">
          {errorMessage}
        </h1>

        <button
          type="button"
          onClick={() => reset()}
          className="inline-block px-5 py-3 mt-6 text-sm font-medium text-white bg-indigo-600 rounded hover:bg-indigo-700 focus:outline-none focus:ring"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
