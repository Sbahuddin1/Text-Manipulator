export default function About(p) {
  return (
    <div className="container my-5">
      <h1
        style={
          p.mode == "light"
            ? {
                color: "black",
                backgroundColor: "white",
              }
            : {
                color: "white",
                backgroundColor: "#191919",
              }
        }
      >
        About Us
      </h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              style={
                p.mode == "light"
                  ? {
                      color: "black",
                      backgroundColor: "white",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#191919",
                    }
              }
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={
                p.mode == "light"
                  ? {
                      color: "black",
                      backgroundColor: "white",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#191919",
                    }
              }
            >
              <strong>This is the first items accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={
                p.mode == "light"
                  ? {
                      color: "black",
                      backgroundColor: "white",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#191919",
                    }
              }
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div
              className="accordion-body"
              style={
                p.mode == "light"
                  ? {
                      color: "black",
                      backgroundColor: "white",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#191919",
                    }
              }
            >
              <strong>This is the second items accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={
                p.mode == "light"
                  ? {
                      color: "black",
                      backgroundColor: "white",
                    }
                  : {
                      color: "white",
                      backgroundColor: "#191919",
                    }
              }
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
            style={
              p.mode == "light"
                ? {
                    color: "black",
                    backgroundColor: "white",
                  }
                : {
                    color: "white",
                    backgroundColor: "#191919",
                  }
            }
          >
            <div className="accordion-body">
              <strong>This is the third accordion body.</strong> It is hidden by
              default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. Its also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
