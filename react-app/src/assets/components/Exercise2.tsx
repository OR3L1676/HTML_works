import { ReactNode, useState } from "react";

function Exercise2() {
  const [buttonPressed, onButtonPressed] = useState(false);
  return (
    <>
      {buttonPressed === true && (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          <strong>Holy guacamole!</strong> You should check in on some of those
          fields below.
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => onButtonPressed(false)}
          ></button>
        </div>
      )}

      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          console.log("clicked");
          onButtonPressed(true);
        }}
      >
        hello
      </button>
    </>
  );
}

export default Exercise2;
