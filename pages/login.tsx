import React from "react";
import Link from "next/link";
import { FormGroup, Button, Input } from "../components/common/form";
import { useForm } from "react-hook-form";
import { Fb } from "../components/svgComponents/fb";
import { Google } from "../components/svgComponents/googleSvg";

interface ILoginForm {
  password: string;
  email: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm<ILoginForm>();

  const submit = handleSubmit((data) => {
    console.log(data);
  });

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
              <Link href="/register">
                <a>Sign up now</a>
              </Link>
            </div>
            <form onSubmit={submit} className="contentWrapper">
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
              <FormGroup Label="Email">
                <Input
                  name="email"
                  useRef={register("email")}
                  placeholder="example@bitbook.com"
                />
              </FormGroup>

              <FormGroup
                Label={
                  <label
                    className="form-control-label d-flex "
                    htmlFor="inputSuccess2"
                  >
                    <span> Password </span>
                    <Link href="/">
                      <a>Forgot password?</a>
                    </Link>
                  </label>
                }
              >
                <Input
                  type="password"
                  name="password"
                  // useRef={register({ required: true })}
                  useRef={register("password")}
                  placeholder="password"
                />
              </FormGroup>

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
              <Button className="btn btn-primary w-100 mt-3 py-2">
                Log In
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
