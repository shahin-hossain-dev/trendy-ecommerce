import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { RiFileList2Fill } from "react-icons/ri";
import { Box } from "@mui/material";

const OrderSummeryCard = ({ summery }) => {
  return (
    <Card variant="outlined" className="py-0">
      <CardContent className="flex items-center justify-center">
        <Box className="flex items-center gap-6">
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              {summery.title}
            </Typography>
            <Typography
              sx={{ color: "text.secondary" }}
              className="text-[32px] text-secondary font-medium"
            >
              $ {summery.amount}
            </Typography>
          </Box>
          <Box>{summery.icon}</Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderSummeryCard;
