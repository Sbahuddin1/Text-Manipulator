import { useState } from "react";
export default function TextForm(p) {
  const UP = () => {
    // console.log("btn was clicked");
    let newTxt = txt.toUpperCase();
    setTxt(newTxt);
    p.showAlert(" Converted to uppercase!", "success");
  };
  const Copytxt = () => {
    let newtxt = document.getElementById("tBox");
    newtxt.select();
    navigator.clipboard.writeText(newtxt.value);
    p.showAlert(" Copied!", "success");
  };
  const ES = () => {
    let newtxt = txt.split(/[ ]+/);
    setTxt(newtxt.join(" "));
    p.showAlert(" Removed spaces!", "success");
  };
  const LC = () => {
    // console.log("btn was clicked");
    let newTxt = txt.toLowerCase();
    setTxt(newTxt);
    p.showAlert(" Converted to lowercase!", "success");
  };
  const CL = () => {
    // console.log("btn was clicked");
    let newTxt = "";
    setTxt(newTxt);
    p.showAlert(" CLeared!", "success");
  };

  const handleOnChange = (e) => {
    // console.log("On Change");
    setTxt(e.target.value);
  };

  const [txt, setTxt] = useState("Enter Text Here");
  return (
    <div
      className="txtfrm"
      style={{ color: p.mode == "dark" ? "white" : "#191919" }}
    >
      <div className="container">
        <h5>{p.heading}</h5>
        <div className="input-group mb-3">
          <textarea
            id="tBox"
            className="form-control"
            aria-label="With textarea"
            value={txt}
            onChange={handleOnChange}
            rows="8"
            style={{
              backgroundColor: p.mode == "dark" ? "#191919" : "white",
              color: p.mode == "dark" ? "white" : "#191919",
            }}
          ></textarea>
        </div>

        <button
          disabled={txt.length == 0}
          onClick={UP}
          className={`btn btn-${p.mode == "dark" ? "secondary" : "primary"}`}
        >
          Convert to UPPERCASE
        </button>

        <button
          disabled={txt.length == 0}
          onClick={LC}
          className={`btn btn-${
            p.mode == "dark" ? "secondary" : "primary"
          } mx-1 my-1`}
        >
          Convert to lowercase
        </button>
        <button
          disabled={txt.length == 0}
          onClick={CL}
          className={`btn btn-${
            p.mode == "dark" ? "secondary" : "primary"
          } mx-1 my-1`}
        >
          Clear
        </button>
        <button
          disabled={txt.length == 0}
          onClick={Copytxt}
          className={`btn btn-${
            p.mode == "dark" ? "secondary" : "primary"
          } mx-1 my-1`}
        >
          Copy
        </button>
        <button
          disabled={txt.length == 0}
          onClick={ES}
          className={`btn btn-${
            p.mode == "dark" ? "secondary" : "primary"
          } mx-1 my-1`}
        >
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h1>Text Details</h1>
        <p>
          {
            txt.split(/\s+/).filter((e) => {
              return e.length != 0;
            }).length
          }{" "}
          words and {txt.length} characters
        </p>
      </div>
    </div>
  );
}
