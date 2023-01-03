import { useRouteError } from "react-router-dom";

// pretty much all of your errors will now be handled by this page
// instead of infinite spinners, unresponsive pages, or blank screens
const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p style={{ color: "grey" }}>
        <i>
          {error.status} - {error.statusText || error.message}
        </i>
      </p>
    </div>
  );
};

export default ErrorPage;
