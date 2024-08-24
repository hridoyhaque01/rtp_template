import { errorNotify } from "./toastify";

export const processTags = (input = "", type = "process") => {
  if (input === "") {
    return {
      data: [],
      error: "Input cannot be empty",
    };
  }
  if (type === "process" && typeof input === "string") {
    let tags = input.split(",");
    tags = tags.map((tag) => tag.trim());
    let invalidTags = tags.filter((tag) => tag.length < 4);
    if (invalidTags.length > 0) {
      return {
        data: [],
        error: "Tags must be at least 4 characters long",
      };
    } else {
      return {
        error: "",
        data: tags,
      };
    }
  }
};

export const handleMultipleFiles = ({
  event,
  ref,
  extentions = ["jpg", "jpeg", "png", "webp", "mp4", "avi", "mkv"],
}) => {
  if (event?.target) {
    const files = event.target.files || [];
    let allFile = [];
    let previews = [];
    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      if (file) {
        const fileExtension = file?.name?.split(".").pop().toLowerCase();
        if (extentions?.includes(fileExtension)) {
          allFile.push(file);
          const imageURL = URL.createObjectURL(file);
          previews.push(imageURL);
        } else {
          errorNotify("Invalid file type");
        }
      } else {
        console.log("upload Invalid");
        errorNotify("Please upload an image or video file");
      }
    }
    ref.current.value = null;
    return { files: allFile, previews };
  } else {
    return { files: [], previews: [] };
  }
};

const checkEmailValidity = (email) => {
  if (email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  } else {
    return false;
  }
};

const handleNumber = (event, setter) => {
  const validatedValue = event.target.value.replace(/[^0-9]/g, "");
  setter(validatedValue);
};

export { checkEmailValidity, handleNumber };
