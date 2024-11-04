import * as React from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface InspectImageProps {
  isOpen: boolean;
  item: { img: string; title: string; author: string };
}

export default function InspectImage({ isOpen, item }: InspectImageProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLImageElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLImageElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <img
        srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
        src={`${item.img}?w=161&fit=crop&auto=format`}
        alt={item.title}
        loading='lazy'
        onClick={handleClick}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
      </Popover>
    </>
  );
}
