import React from "react";

export function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div>
      <h2>Oops, something went wrong!</h2>
      <p>{error.message}</p>
      <button className="btn-blue" onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}


