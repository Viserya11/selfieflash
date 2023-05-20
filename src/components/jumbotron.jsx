import logo from "./logo2.png"

function MyJumbo() {
  return (
    <>
      <div className="jumbo">
        <div className="jumbocontent">
          <div className="jumbotext">
            <img className="logo" src={logo} alt="logo" />
            <h1>SelfieFlash</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              expedita nisi, doloremque aperiam omnis quam ad minima laboriosam
              esse possimus culpa? Exercitationem maxime adipisci optio sapiente
              placeat reprehenderit eligendi! Esse.
            </p>{" "}
          </div>{" "}
        </div>
      </div>
    </>
  );
}

export default MyJumbo;
