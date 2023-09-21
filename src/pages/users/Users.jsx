import React, { useState } from "react";
import { profile } from "../../assets/getAssets";
import SearchUser from "../../components/pages/users/SearchUser";
import { useGetAllUsersQuery } from "../../features/users/userApi";

function Users() {
  const { data, isLoading, isError } = useGetAllUsersQuery();
  const [searchValue, setSearchValue] = useState();
  // const [] = useDeleteUserMutation();

  const filterBySearch = (data) => {
    if (searchValue?.trim().length > 0) {
      return (data?.first_name + data?.last_name)
        ?.toLowerCase()
        .includes(searchValue?.toLowerCase());
    } else {
      return true;
    }
  };

  let content = null;

  if (isLoading) {
    content = <div>Loading...</div>;
  } else if (!isLoading && isError) {
    content = <div>Something went wrong</div>;
  } else if (!isLoading && !isError && data?.data?.length === 0) {
    content = <div>Content not found!</div>;
  } else if (!isLoading && !isError && data?.data?.length > 0) {
    const newData = data?.data?.filter(filterBySearch);

    content = newData?.map((item, i) => {
      return (
        <div
          key={i}
          className="bg-navy-rbg rounded-lg overflow-hidden relative"
        >
          <div className="">
            <img
              src={item?.avatar || profile}
              alt=""
              className="w-full object-cover bg-center h-72"
            />
          </div>
          <div className="px-3 py-6 font-rubik">
            <h2 className="text-lg font-medium ">
              {item?.first_name} {item?.last_name}
            </h2>
            <p className="text-fade">{item?.email}</p>
          </div>

          {/* delete button  */}

          <button className="w-7 h-7 flex items-center justify-center bg-errorColor rounded-full absolute top-2 right-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M19.7188 18.3906L13.325 12.0004L19.7188 5.65714C20.0392 5.28603 20.0219 4.72911 19.679 4.37894C19.3361 4.02878 18.7832 4.00341 18.4101 4.32073L11.9976 10.6169L5.69734 4.27367C5.33275 3.90878 4.74392 3.90878 4.37933 4.27367C4.20236 4.45039 4.10282 4.69094 4.10282 4.94188C4.10282 5.19282 4.20236 5.43337 4.37933 5.61008L10.6703 11.9439L4.2765 18.2777C4.09954 18.4544 4 18.695 4 18.9459C4 19.1969 4.09954 19.4374 4.2765 19.6141C4.45291 19.7903 4.69172 19.8885 4.94018 19.887C5.18409 19.8885 5.41891 19.794 5.59452 19.6235L11.9976 13.2709L18.4101 19.7271C18.5865 19.9032 18.8253 20.0014 19.0738 20C19.319 19.9989 19.554 19.9009 19.7281 19.7271C19.9039 19.5491 20.0017 19.3078 20 19.0569C19.9982 18.8059 19.897 18.5661 19.7188 18.3906Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      );
    });
  }

  return (
    <section className="py-6 pr-10 w-full h-full overflow-auto">
      <SearchUser
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      ></SearchUser>
      <div>
        <div className="grid grid-cols-5 gap-6 items-stretch">{content}</div>
      </div>
    </section>
  );
}

export default Users;
