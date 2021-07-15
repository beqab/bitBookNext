import React from "react";
import Link from "next/link";

const Fb = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
    >
      <g id="Google-Button" transform="translate(-2.545 -2.545)">
        <g id="btn_google_light_normal" transform="translate(2.629 2.629)">
          <g id="button">
            <g id="button-bg">
              <rect
                id="Rectangle_168"
                data-name="Rectangle 168"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="#fff"
              />
              <rect
                id="Rectangle_169"
                data-name="Rectangle 169"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
              <rect
                id="Rectangle_170"
                data-name="Rectangle 170"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
              <rect
                id="Rectangle_171"
                data-name="Rectangle 171"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
            </g>
          </g>
        </g>
      </g>
      <path
        id="Icon_awesome-facebook-f"
        data-name="Icon awesome-facebook-f"
        d="M11.619,11.25l.555-3.62H8.7V5.282a1.81,1.81,0,0,1,2.041-1.955h1.579V.245A19.254,19.254,0,0,0,9.518,0c-2.86,0-4.73,1.734-4.73,4.872V7.63H1.609v3.62H4.789V20H8.7V11.25Z"
        transform="translate(9.535 7)"
        fill="#3c5899"
      />
    </svg>
  );
};

const Google = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="34"
      height="34"
      viewBox="0 0 34 34"
    >
      <g id="Google-Button" transform="translate(-2.545 -2.545)">
        <g id="btn_google_light_normal" transform="translate(2.629 2.629)">
          <g id="button">
            <g id="button-bg">
              <rect
                id="Rectangle_168"
                data-name="Rectangle 168"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="#fff"
              />
              <rect
                id="Rectangle_169"
                data-name="Rectangle 169"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
              <rect
                id="Rectangle_170"
                data-name="Rectangle 170"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
              <rect
                id="Rectangle_171"
                data-name="Rectangle 171"
                width="34"
                height="34"
                rx="2"
                transform="translate(-0.084 -0.084)"
                fill="none"
              />
            </g>
          </g>
          <g id="logo_googleg_48dp" transform="translate(8.983 8.983)">
            <path
              id="Shape"
              d="M16.616,8.986a9.12,9.12,0,0,0-.144-1.623H9v3.069h4.269a3.649,3.649,0,0,1-1.583,2.394v1.99H14.25a7.737,7.737,0,0,0,2.365-5.831Z"
              transform="translate(-1.067 -0.873)"
              fill="#4285f4"
              fill-rule="evenodd"
            />
            <path
              id="Shape-2"
              data-name="Shape"
              d="M8.046,17.136a7.574,7.574,0,0,0,5.25-1.922l-2.564-1.99A4.786,4.786,0,0,1,3.608,10.71H.957v2.055a7.93,7.93,0,0,0,7.089,4.37Z"
              transform="translate(-0.113 -1.27)"
              fill="#34a853"
              fill-rule="evenodd"
            />
            <path
              id="Shape-3"
              data-name="Shape"
              d="M3.494,10.028a4.69,4.69,0,0,1,0-3.015V4.958H.844a7.943,7.943,0,0,0,0,7.125l2.65-2.055Z"
              transform="translate(0 -0.588)"
              fill="#fbbc05"
              fill-rule="evenodd"
            />
            <path
              id="Shape-4"
              data-name="Shape"
              d="M8.046,3.155a4.286,4.286,0,0,1,3.033,1.186l2.275-2.275A7.624,7.624,0,0,0,8.046,0,7.93,7.93,0,0,0,.957,4.37l2.65,2.055A4.728,4.728,0,0,1,8.046,3.155Z"
              transform="translate(-0.113)"
              fill="#ea4335"
              fill-rule="evenodd"
            />
            <path
              id="Shape-5"
              data-name="Shape"
              d="M0,0H15.866V15.866H0Z"
              fill="none"
              fill-rule="evenodd"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

const Login = () => {
  return (
    <div className="loginPage">
      <div className="loginBg">{/* <div className="left"></div> */}</div>
      <div className="container pt-4">
        <div className="row">
          <div className="col-md-6">
            <Link href="/">
              <a>
                <img src="./img/Logo.svg" />
              </a>
            </Link>
            <h2>Discover amazing things everywhere and earn tokens</h2>
          </div>
          <div className="col-md-6">
            <div className="backLink text-right">
              Not a Member?
              <Link href="register">
                <a>Sign up now</a>
              </Link>
            </div>
            <div className="contentWrapper">
              <h4 className="form_title">Login to BitBook</h4>
              <div className=" fbGoole_BtnsGroup">
                <button className="btn btn-primary mb-3">
                  <Google /> Log in with Google
                </button>
                <br />
                <button className="btn btn-primary fbBtn">
                  <Fb /> Log in with Google
                </button>
              </div>
              <div className="separatorLine">
                <span>or</span>
              </div>
              <div className="form-group">
                <label className="form-control-label" htmlFor="inputSuccess2">
                  Email
                </label>
                <input
                  type="text"
                  className="form-control text"
                  name="i2"
                  required
                  placeholder="example@bitbook.com"
                />
                <div className="invalid-feedback">That didn't work.</div>
              </div>

              <div className="form-group">
                <label
                  className="form-control-label d-flex "
                  htmlFor="inputSuccess2"
                >
                  <span> Password </span>
                  <Link href="/">
                    <a>Forgot password?</a>
                  </Link>
                </label>
                <input
                  type="password"
                  className="form-control text"
                  name="i2"
                  placeholder="pass"
                  required
                />
                <div className="invalid-feedback">That didn't work.</div>
              </div>

              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label k" htmlFor="exampleCheck1">
                  Remember me
                </label>
              </div>
              <button className="btn btn-primary w-100 mt-3 py-2">
                Log In
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
