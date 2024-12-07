import React from "react";
import ReactQuill from "react-quill";

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      {
        color: [],
      },
      { background: [] },
    ],
    [{ size: [] }],

    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
      { script: "super" },
      { script: "sub" },
      { align: [] },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "align",
  "direction",
  "color",
  "background",
  "script",
  "super",
  "sub",
];

const AddProductDesc = () => {
  return (
    <div>
      <ReactQuill
        className="h-[300px] mb-32 lg:mb-16"
        theme="snow"
        modules={modules}
        formats={formats}
      />
    </div>
  );
};

export default AddProductDesc;
