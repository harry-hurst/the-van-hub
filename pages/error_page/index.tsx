const ErrorPage = (props: { errorMessage?: string | string[] | undefined }) => {
  
  return (
    <div className="container">
      <div
        className="alert alert-warning d-flex align-items-center"
        role="alert"
      >
        <i className="bi bi-exclamation-square"></i>

        <div>&nbsp;{props.errorMessage}</div>
      </div>
    </div>
  );
};

ErrorPage.defaultProps = {
  errorMessage: "Page not found",
};

export default ErrorPage;
