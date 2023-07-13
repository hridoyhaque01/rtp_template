import React from "react";

function Login() {
  const handleSubmit = (event) => {};
  return (
    <section className="bg-authBg bg-cover bg-center bg-no-repeat object-contain h-screen w-full flex items-center justify-center">
      <div className="bg-dark-30 w-[28rem] max-w-md p-8 rounded-lg">
        <form action="" className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              name="email"
              placeholder="enter your email here..."
              autoComplete="false"
              className="w-full border border-fade bg-transparent outline-none p-3 rounded-lg text-white text-sm"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="enter your password here..."
              autoComplete="false"
              className="w-full border border-fade bg-transparent outline-none p-3 rounded-lg text-white text-sm"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-8 whitespace-nowrap bg-dark-50 text-white capitalize rounded-sm"
            >
              sign in
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
