import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAddUserMutation } from "../../../features/users/userApi";

function AddUser() {
  const [addUser, { isLoading, error }] = useAddUserMutation();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const first_name = form.first_name.value;
    const last_name = form.last_name.value;
    const email = form.email.value;
    const message = form.message.value;

    const data = JSON.stringify({
      first_name,
      last_name,
      email,
      message,
    });
    addUser(data)
      .unwrap()
      .then((res) => {
        form.reset();
        navigate("/users");
      })
      .catch((error) => {
        console.log(error);
        alert("ddddd");
      });
  };

  return (
    <section className="py-6 w-full overflow-auto h-full font-raleway">
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-xl bg-navy-50 p-6 rounded-lg">
          <div className="mb-8">
            <h2 className="text-2xl font-bold">Add User</h2>
          </div>
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              {/* first name */}
              <div className="flex flex-col gap-1">
                <span>First Name</span>
                <input
                  type="text"
                  placeholder="Enter first name"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="first_name"
                  required
                />
              </div>
              {/* first name */}
              <div className="flex flex-col gap-1">
                <span>Last Name</span>
                <input
                  type="text"
                  placeholder="Enter last name"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="last_name"
                  required
                />
              </div>
              {/* first name */}
              <div className="flex flex-col gap-1">
                <span>Email</span>
                <input
                  type="email"
                  placeholder="Enter email address"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg"
                  name="email"
                  required
                />
              </div>
              {/* first name */}
              <div className="flex flex-col gap-1">
                <span>Message</span>
                <textarea
                  name="message"
                  className="w-full bg-transparent border border-fade outline-none py-4 pl-4 pr-1 text-sm rounded-lg h-36"
                  placeholder="Message*"
                  required
                ></textarea>
              </div>
            </div>

            {/* submit button  */}
            <div className="mt-10 flex items-center gap-6">
              <Link
                to="/users"
                className="inline-flex px-8 py-3 bg-errorColor rounded"
              >
                Cancel
              </Link>
              <button
                type="submit"
                className="inline-flex px-8 py-3 bg-primaryColor rounded"
                disabled={isLoading}
              >
                Submit
              </button>
            </div>
          </form>
          {error}
        </div>
      </div>
    </section>
  );
}

export default AddUser;
