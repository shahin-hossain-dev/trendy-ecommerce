"use client";
import React, { useState } from "react";
import UserReviewModal from "./UserReviewModal";
import { Box, Modal, Rating } from "@mui/material";
import Cookies from "js-cookie";
import { MdVerifiedUser } from "react-icons/md";
import { useSelector } from "react-redux";

const UserReview = ({ id }) => {
  const [open, setOpen] = useState(false);
  // const [allReview, setAllReview] = useState([]);
  const { currentUser } = useSelector((state) => state.user);

  console.log(currentUser);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div>
        <button
          onClick={handleOpen}
          className="border-[rgba(0,0,255,0.5)] border-2 px-4 py-2 text-[blue] rounded-md font-semibold"
        >
          Add Review & Feedback
        </button>
        <Modal open={open}>
          <Box className="absolute top-1/2 lg:left-1/2 left-[45%] transform -translate-x-1/2 -translate-y-1/2 w-[90vw] lg:w-[60%] bg-white border-2 shadow-lg p-4">
            <div className="relative">
              <UserReviewModal
                productId={id}
                userName={currentUser?.name}
                userId={"1"}
                close={handleClose}
              />
              <button
                onClick={handleClose}
                className="bg-red-300  rounded-full w-[25px] h-[25px] font-bold absolute !right-0 !top-0 bg-[rgba(255,255,255,0.3)]"
              >
                X
              </button>
            </div>
          </Box>
        </Modal>
      </div>
      {/* Reviews */}
      <div>
        {allReview &&
          allReview.map((item, idx) => (
            <div className="flex flex-col gap-2" key={idx}>
              <span className="">
                <Rating
                  name="read-only"
                  // defaultValue={3.5}
                  // precision={0.5}
                  value={parseInt(item?.rating)}
                  readOnly
                  sx={{ fontSize: "1rem" }}
                />
                <div className="flex gap-1">
                  <p className="text-xs font-semibold text-[rgba(0,128,0,0.7)]">
                    {item?.user.name}
                  </p>
                  <span>
                    <MdVerifiedUser color="rgba(0,128,0,0.5)" />
                  </span>
                  <p className="text-[0.65rem] font-extralight text-[blue]">
                    Verified Customer
                  </p>
                </div>
              </span>

              <div className="flex">
                <p className=" w-[70%]">{item?.review}!!!</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default UserReview;
const allReview = [
  {
    review: "The course content was easy to follow and engaging.",
    rating: 4.8,
    user: {
      userId: "001",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
    },
  },
  {
    review: "I found some sections too fast-paced, but overall it was helpful.",
    rating: 4.0,
    user: {
      userId: "002",
      name: "Bob Smith",
      email: "bob.smith@example.com",
    },
  },
  {
    review: "Excellent course with practical examples and assignments.",
    rating: 5.0,
    user: {
      userId: "003",
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
    },
  },
  {
    review:
      "The content was outdated and not very applicable to current trends.",
    rating: 2.5,
    user: {
      userId: "004",
      name: "Diana Lee",
      email: "diana.lee@example.com",
    },
  },
  {
    review: "Good for beginners but lacks depth for advanced learners.",
    rating: 3.5,
    user: {
      userId: "005",
      name: "Ethan Brown",
      email: "ethan.brown@example.com",
    },
  },
];
