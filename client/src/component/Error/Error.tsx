import { useRouteError } from "react-router-dom";
import { ReactNode } from "react";

type RouteError = {
    status?: number;
    statusText?: string;
  };
  
  const Error = () => {
    const err = useRouteError() as RouteError; // Assert the type
  
    const errorMessage: ReactNode = (
      <>
        <h2>Oops!!!! Something Went Wrong</h2>
        <h1>{err?.status} : {err?.statusText}</h1>
      </>
    );
  
    return (
      <div>
        {errorMessage}
      </div>
    );
  }
  
  export default Error;