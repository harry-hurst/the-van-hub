const ErrorPage = () => {
  return (
    <div className="container">
      <div
        className="alert alert-warning d-flex align-items-center"
        role="alert"
      >
        <svg
          className="bi flex-shrink-0 me-2"
          width="24"
          height="24"
          role="img"
          aria-label="Warning:"
        ></svg>

        <div>404 Error - not found</div>
      </div>
    </div>
  );
};

export default ErrorPage;
