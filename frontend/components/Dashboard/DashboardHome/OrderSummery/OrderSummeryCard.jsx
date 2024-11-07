import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { RiFileList2Fill } from "react-icons/ri";
import { Box } from "@mui/material";

const OrderSummeryCard = () => {
  return (
    <Card variant="outlined" className="py-0">
      <CardContent className="flex items-center justify-center">
        <Box className="flex gap-6">
          <Box>
            <Typography sx={{ color: "text.secondary", fontSize: 14 }}>
              Today Order
            </Typography>
            <Typography
              sx={{ color: "text.secondary" }}
              className="text-[36px] text-secondary font-medium"
            >
              $ 450
            </Typography>
          </Box>
          <Box>
            <RiFileList2Fill className="text-[60px] text-dash-primary" />
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderSummeryCard;
