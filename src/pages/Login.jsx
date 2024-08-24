import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/shared/Input";
import Password from "../components/shared/Password";
import RequestLoader from "../components/shared/RequestLoader";
import { useLoginMutation } from "../features/auth/authApi";
import { adminRouteLinks, userRouteLinks } from "../lib/enums";
import { logoIcon } from "../lib/getAssets";
import { checkEmailValidity } from "../lib/helpers";
import { errorNotify, infoNotify } from "../lib/toastify";

function Login() {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if (!email || !password) {
      errorNotify("Incomplete Inputs");
      return;
    } else if (!checkEmailValidity(email)) {
      errorNotify("Invalid Email");
      return;
    } else {
      const data = {
        email: email,
        password: password,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      login(formData)
        .unwrap()
        .then((res) => {
          if (res?.data?.accessToken) {
            navigate(adminRouteLinks.dashboard.path);
            infoNotify(res?.message || "Login Successful");
          }
        })
        .catch((error) => {
          let errorMessage =
            error.status == 401 ? "Invalid Password" : error?.data?.message;
          errorNotify(errorMessage);
        });
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full text-whiteHigh overflow-auto">
      <div className="flex items-center w-full h-full">
        <div className="w-full max-w-[630px] mx-auto h-full flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-[396px]">
            <div className="mb-10 text-center">
              <div className="flex justify-center mb-6">
                <img
                  src={logoIcon}
                  alt=""
                  className="w-[80px] max-w-[80px] mx-auto"
                />
              </div>
              <h2 className="text-blackSemi text-lg lg:text-2xl font-bold">
                Welcome
              </h2>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* email  */}
                <Input
                  label="Email"
                  placeholder="Email address here"
                  type="email"
                  name="email"
                  required
                />
                {/* password  */}
                <Password
                  label="Password"
                  name="password"
                  placeholder="Password here"
                  required
                />

                <div className="mt-8">
                  <button type="submit" className="btn_black w-full max-w-none">
                    Login
                  </button>
                </div>
              </div>
            </form>

            <div className="text-center mt-4 sm:mt-6">
              <Link
                to={userRouteLinks.forgotPassword.path}
                className="text-black-900"
              >
                Forgot password ?
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden w-full h-full bg-login bg-cover bg-center object-cover lg:flex items-end pb-24"></div>
      </div>
      {isLoading && <RequestLoader />}
    </section>
  );
}

export default Login;
