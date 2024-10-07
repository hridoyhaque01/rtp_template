import { useRef, useState } from "react";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

const ImageCropper = () => {
  const [src, setSrc] = useState(null);
  const [crop, setCrop] = useState({ aspect: 1 });
  const [completedCrop, setCompletedCrop] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const imageRef = useRef(null);
  const canvasRef = useRef(null);

  const onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () => setSrc(reader.result));
      reader.readAsDataURL(e.target.files[0]);
      setShowModal(true); // Show modal when file is selected
    }
  };

  const onCropComplete = (crop) => {
    setCompletedCrop(crop);
  };

  const getCroppedImg = () => {
    if (!completedCrop || !imageRef.current) return;

    const canvas = canvasRef.current;
    const image = imageRef.current;
    const crop = completedCrop;

    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;

    canvas.width = crop.width;
    canvas.height = crop.height;

    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    canvas.toBlob((blob) => {
      if (blob) {
        const croppedUrl = URL.createObjectURL(blob);
        setCroppedImage(croppedUrl); // Save the cropped image
        setShowModal(false); // Close the modal after saving
      }
    }, "image/jpeg");
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectFile} />

      {showModal && src && (
        <div className="modal">
          <div className="modal-content">
            <ReactCrop
              src={src}
              onImageLoaded={(image) => (imageRef.current = image)}
              crop={crop}
              onChange={(newCrop) => setCrop(newCrop)}
              onComplete={onCropComplete}
            />
            <button onClick={getCroppedImg}>Save Cropped Image</button>
          </div>
        </div>
      )}

      {croppedImage && (
        <div>
          <h3>Cropped Image:</h3>
          <img src={croppedImage} alt="Cropped" />
        </div>
      )}

      <canvas ref={canvasRef} style={{ display: "none" }} />
    </div>
  );
};

export default ImageCropper;
