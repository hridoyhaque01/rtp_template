import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../components/shared/Input";
import Password from "../components/shared/Password";
import RequestLoader from "../components/shared/RequestLoader";
import { useRegisterMutation } from "../features/auth/authApi";
import { userRouteLinks } from "../lib/enums";
import { logoIcon } from "../lib/getAssets";
import { checkEmailValidity } from "../lib/helpers";
import { errorNotify, infoNotify } from "../lib/toastify";

function Register() {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    if (!email || !password || !name) {
      errorNotify("Incomplete Inputs");
      return;
    } else if (!checkEmailValidity(email)) {
      errorNotify("Invalid Email");
      return;
    } else {
      const data = {
        fullName: name,
        email: email,
        password: password,
      };
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      register(formData)
        .unwrap()
        .then((res) => {
          if (res?.data?.accessToken) {
            infoNotify(res?.message);
            navigate("/");
          }
        })
        .catch((error) => {
          errorNotify(error?.data?.message);
        });
    }
  };

  return (
    <section className="min-h-screen md:h-screen w-full text-whiteHigh overflow-auto">
      <div className="absolute top-6 left-6 md:top-10 md:left-10 lg:top-14 lg:left-14">
        <Link
          to={userRouteLinks.login.path}
          className="flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18.7934 11.0066H7.62344L12.5034 6.12656C12.8934 5.73656 12.8934 5.09656 12.5034 4.70656C12.1134 4.31656 11.4834 4.31656 11.0934 4.70656L4.50344 11.2966C4.11344 11.6866 4.11344 12.3166 4.50344 12.7066L11.0934 19.2966C11.4834 19.6866 12.1134 19.6866 12.5034 19.2966C12.8934 18.9066 12.8934 18.2766 12.5034 17.8866L7.62344 13.0066H18.7934C19.3434 13.0066 19.7934 12.5566 19.7934 12.0066C19.7934 11.4566 19.3434 11.0066 18.7934 11.0066Z"
              fill="#212121"
            />
          </svg>
        </Link>
      </div>
      <div className="flex items-center w-full h-full">
        <div className="w-full max-w-[630px] mx-auto h-full flex items-center justify-center py-8 px-4">
          <div className="w-full max-w-[396px]">
            <div className="mb-10 text-center">
              <div className="flex justify-center mb-6">
                <img src={logoIcon} alt="" className="w-[80px] max-w-[80px]" />
              </div>
              <h2 className="text-blackSemi text-lg lg:text-2xl font-bold">
                Welcome
              </h2>
            </div>
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                {/* name  */}
                <Input
                  placeholder="Name here"
                  label="Name"
                  name="name"
                  required
                />

                {/* email  */}
                <Input
                  type="email"
                  label="Email"
                  placeholder="Email here"
                  name="email"
                  required
                />
                {/* password  */}
                <Password
                  label="Password"
                  id="password"
                  name="password"
                  placeholder="Password here"
                  required
                ></Password>

                <div className="mt-8">
                  <button type="submit" className="btn_black w-full max-w-none">
                    Register
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="hidden w-full h-full bg-login bg-cover bg-center object-cover lg:flex items-end pb-24"></div>
      </div>
      {isLoading && <RequestLoader />}
    </section>
  );
}

export default Register;
