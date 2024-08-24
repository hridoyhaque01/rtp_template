import React, { useEffect, useRef, useState } from "react";
import { errorNotify } from "../../lib/toastify";

function Uploader({
  setter = () => {},
  title = "Upload",
  preview = "",
  name = "imageUploader",
  wrapperClass = "",
  imageClass = "object-cover",
  ...rest
}) {
  const imageRef = useRef(null);
  const [localFile, setLocalFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isImage, setIsImage] = useState(false);
  const allowedExtensions = ["jpg", "jpeg", "png"];

  const handleChangeImage = (event) => {
    const files = event.target.files;
    if (files?.length > 0) {
      const file = event.target.files[0];
      setExtention(file?.name);
      const imageURL = URL.createObjectURL(file);
      setImagePreview(imageURL);
      setter(file);
      setLocalFile(file?.name);
    } else {
      errorNotify("Invalid file type");
    }
  };

  const setExtention = (fileName) => {
    if (fileName) {
      const fileExtension = fileName?.split(".").pop().toLowerCase();
      if (allowedExtensions.includes(fileExtension)) {
        setIsImage(true);
      } else {
        setIsImage(false);
      }
    } else {
      return;
    }
  };

  const handleDelete = () => {
    setter(null);
    setImagePreview(null);
    setLocalFile(null);
    imageRef.current.value = "";
  };

  useEffect(() => {
    if (preview) {
      setExtention(preview);
      setLocalFile(preview);
      setImagePreview(preview);
    }
  }, []);

  return (
    <div className={`flex-1 flex flex-col gap-2 md:gap-4 ${wrapperClass}`}>
      <span className="label">{title}</span>
      <div className="w-full">
        <label
          htmlFor={name}
          className={`w-full  h-[150px] text-white text-4xl flex flex-col justify-center items-center gap-4  cursor-pointer border border-dashed relative ${
            imagePreview && isImage
              ? "border-transparent bg-neutral-400"
              : "border-red-700"
          } rounded-xl`}
        >
          {imagePreview && isImage ? (
            <img
              src={imagePreview}
              alt=""
              className={`w-full h-full rounded-xl bg-center ${imageClass}`}
            />
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-red-50 rounded-full">
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
              <span className="text-base text-neutral-300">
                Click to
                <span className="text-red-700"> Upload File</span>
              </span>
            </div>
          )}

          <input
            type="file"
            id={name}
            className="opacity-0 absolute w-0.5"
            ref={imageRef}
            onChange={handleChangeImage}
            alt="preview"
            {...rest}
          />

          <button
            type="button"
            className={`absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-red-50 cursor-pointer  rounded-full z-10 ${
              imagePreview && isImage ? "flex" : "hidden"
            }`}
            onClick={handleDelete}
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
        </label>
        <div
          className={`items-center gap-1 mt-2 select-none ${
            localFile && !isImage ? "flex" : "hidden"
          }`}
        >
          <button type="button" onClick={handleDelete}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z"
                fill="#D0D0D0"
              />
            </svg>
          </button>
          <p className="text-base text-black-700 break-all">{localFile}</p>
        </div>
      </div>
    </div>
  );
}

export default Uploader;
