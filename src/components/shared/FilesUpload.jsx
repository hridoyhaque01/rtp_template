import React, { useEffect, useRef, useState } from "react";
import { errorNotify } from "../../lib/toastify";

function FilesUpload({
  initPreviews = [],
  setInitPreviews = () => {},
  setter = () => {},
  extentions = ["jpg", "jpeg", "png", "webp", "mp4", "avi", "mkv"],
}) {
  const fileRef = useRef(null);
  const [previews, setPreviews] = useState([]);
  const [files, setFiles] = useState([]);
  const [defaultPreviews, setDefaultPreviews] = useState([]);

  const handleFileChange = (event) => {
    const files = event.target.files;
    let errorCount = 0;
    for (let i = 0; i < files?.length; i++) {
      const fileExtension = files[i]?.name?.split(".").pop().toLowerCase();
      if (extentions?.includes(fileExtension)) {
        const imageURL = URL.createObjectURL(files[i]);
        setPreviews((previews) => [...previews, imageURL]);
        setFiles((prev) => [...prev, files[i]]);
        setter((prev) => [...prev, files[i]]);
      } else {
        count += 1;
        continue;
      }
    }
    if (errorCount > 0) {
      errorNotify("Some files are not valid");
    }
  };

  const handleDefaultDelete = (index) => {
    let updatedFile = [...defaultPreviews];
    updatedFile.splice(index, 1);
    setInitPreviews((prev) => [...prev, initPreviews[index]]);
    setDefaultPreviews(updatedFile);
  };

  const handleDelete = (index) => {
    let updatedFile = [...files];
    let updatedPreviews = [...previews];
    updatedFile.splice(index, 1);
    updatedPreviews.splice(index, 1);
    setPreviews(updatedPreviews);
    setFiles(updatedFile);
    setter(updatedFile);
  };

  useEffect(() => {
    if (initPreviews?.length > 0) {
      setDefaultPreviews(initPreviews);
    }
  }, []);

  return (
    <div className="grid xl:grid-cols-2 2xl:grid-cols-3 gap-6 items-end">
      <div className={`flex flex-col gap-2 md:gap-4 select-none `}>
        <span className="label">Upload</span>
        <div
          className={`w-full h-[150px] flex flex-col justify-center items-center gap-4 border border-dashed relative border-blue-500 rounded  p-6 text-center`}
        >
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="flex items-center justify-center w-10 h-10 bg-blue-50 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
              >
                <path
                  d="M14.5 12.6667V3.33333C14.5 2.6 13.9 2 13.1667 2H3.83333C3.1 2 2.5 2.6 2.5 3.33333V12.6667C2.5 13.4 3.1 14 3.83333 14H13.1667C13.9 14 14.5 13.4 14.5 12.6667ZM6.16667 9L7.83333 11.0067L10.1667 8L13.1667 12H3.83333L6.16667 9Z"
                  fill="#222222"
                />
              </svg>
            </div>
            <div className="">
              <label
                htmlFor="file"
                className="font-semibold text-blue-500 cursor-pointer"
              >
                Click here
              </label>
              <span> to upload images</span>
            </div>
          </div>
          <input
            id="file"
            type="file"
            ref={fileRef}
            multiple
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
      </div>
      {defaultPreviews?.map((item, index) => (
        <div
          className="w-full h-[150px] bg-white-300 rounded object-cover bg-center border border-white-300 relative"
          style={{ background: `url(${item}) no-repeat center ` }}
          key={index}
        >
          <button
            type="button"
            className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-50 cursor-pointer  rounded-full z-10`}
            onClick={() => handleDefaultDelete(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                fill="#FF6B6B"
              />
            </svg>
          </button>
        </div>
      ))}
      {previews?.map((item, index) => (
        <div
          className="w-full h-[150px] bg-white-300 rounded bg-cover object-cover bg-center border border-white-300 relative"
          style={{ background: `url(${item})` }}
          key={index}
        >
          <button
            type="button"
            className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-50 cursor-pointer  rounded-full z-10`}
            onClick={() => handleDelete(index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 9V19H8V9H16ZM14.5 3H9.5L8.5 4H5V6H19V4H15.5L14.5 3ZM18 7H6V19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7Z"
                fill="#FF6B6B"
              />
            </svg>
          </button>
        </div>
      ))}
    </div>
  );
}

export default FilesUpload;
