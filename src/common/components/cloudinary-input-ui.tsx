
import {  Typography } from "@mui/material";
import { Button } from "react-admin";

const CloudinaryInputUI = () => {
  return (
   
    <div style={{ marginBottom: 20 }}>
      <input type="file" accept="image/*" style={{ display: "none" }} />

      <Button>
        <Typography>Load</Typography>
      </Button>

      <p>lsdfvdjkfvn</p>
    </div>
   
  );
};

export default CloudinaryInputUI;
