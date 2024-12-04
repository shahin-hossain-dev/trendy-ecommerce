"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { RiImageAddFill } from "react-icons/ri";
const PdImgUploader = () => {
  const [images, setImages] = useState([]);
  const [preview, setPreview] = useState(null);

  const imageRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);

    const pdImages = files.map((file) => ({
      id: `img-${file.lastModified}`,
      file,
      src: URL.createObjectURL(file),
    }));

    setImages([...images, ...pdImages]);
  };

  useEffect(() => {
    if (images.length > 0) {
      setPreview(images[0].src);
    }
  }, [images]);

  const handleSelectedImage = (src) => {
    setPreview(src);
  };

  const handleUploadClick = () => {
    imageRef.current.click();
  };
  return (
    <div className="w-[33%] space-y-3">
      <label className="text-xl font-medium">Product Image</label>
      <div className="flex justify-center">
        {preview ? (
          <img src={preview} alt="Preview Product" className="w-[200px]" />
        ) : (
          <p>No Image Selected</p>
        )}
      </div>
      <div className="flex items-center gap-2">
        {images.map((image) => (
          <div onClick={() => handleSelectedImage(image.src)}>
            <Image
              src={image.src}
              height={100}
              width={100}
              alt="product image"
              className={`w-[100px] h-[100px] object-contain border border-dash-primary ${
                preview === image.src && "border-2 border-secondary"
              } rounded p-1`}
            />
          </div>
        ))}
        {images.length < 4 && (
          <button
            onClick={handleUploadClick}
            className=" border border-dashed w-[100px] h-[100px] flex justify-center items-center border-secondary p-4 rounded "
          >
            <input
              type="file"
              ref={imageRef}
              onChange={handleImageChange}
              name="image"
              alt=""
              className="hidden"
            />
            <RiImageAddFill className="text-dash-primary text-5xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default PdImgUploader;
