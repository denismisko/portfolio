function ErrorPage() {
    return (
      <div className="container text-center">
        <p className="alert">
          Ooops! You seem to be trying to get a page that doesn't exist!
          <a href="/" className="homepage-link">
            Home
          </a>
        </p>
      </div>
    );
}

export default ErrorPage;