"use client";
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

  console.log(images);

  const handleUploadClick = () => {
    imageRef.current.click();
  };
  return (
    <div>
      <label className="text-xl font-medium">Product Image</label>
      <div>
        {preview ? (
          <img src={preview} alt="Preview Product" className="w-[200px]" />
        ) : (
          <p>No Image Selected</p>
        )}
      </div>
      <button
        onClick={handleUploadClick}
        className=" border border-dash-primary p-4 "
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
    </div>
  );
};

export default PdImgUploader;
