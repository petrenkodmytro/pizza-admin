import { Card, CardActions, CardContent, CardHeader, Skeleton, Typography } from "@mui/material";
import { FC, useRef } from "react";
import { Button } from "react-admin";

interface CloudinaryInputUIProps {
  placeholder: string;
}

const CloudinaryInputUI: FC<CloudinaryInputUIProps> = ({ placeholder }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div style={{ marginBottom: 20 }}>
      <input type="file" accept="image/*" style={{ display: "none" }} ref={inputRef} />

      <Card variant="outlined">
        <CardHeader title={placeholder} />
        <CardContent>
          <Skeleton variant="rectangular" width={384} height={240} />
        </CardContent>

        <CardActions>
          <Button variant="contained">
            <Typography>Завантажити</Typography>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CloudinaryInputUI;
