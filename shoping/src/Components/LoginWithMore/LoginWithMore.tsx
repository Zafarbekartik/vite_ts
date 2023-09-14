import "./LoginWithMore.css";
function LoginWithMore() {
  return (
    <div className="loginWithMore">
      <button className="lWFaceBook" type="button">
        <i className="fa-brands fa-facebook-f"></i> Login with Facebook
      </button>
      <button className="lWGoogle" type="button">
        <i className="fa-brands fa-google"></i>
        Login with Google
      </button>
    </div>
  );
}

export default LoginWithMore;
