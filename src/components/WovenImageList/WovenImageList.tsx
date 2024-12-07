import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import darkColors from "../../assets/art/darkColors.jpeg";
import fallLake from "../../assets/art/fallLake.jpeg";
import fallStuff from "../../assets/art/fallStuff.jpeg";
import moon from "../../assets/art/moon.jpeg";
import mushrooms from "../../assets/art/mushrooms.jpeg";
import rainyReflections from "../../assets/art/rainyReflections.jpeg";
import stormySkys2 from "../../assets/art/stormySkys2.jpeg";
import stormySkys from "../../assets/art/stormySkys.jpeg";
import stormySkys3 from "../../assets/art/stormySkys3.jpeg";
import susan from "../../assets/art/susan.jpeg";
import tree from "../../assets/art/tree.jpeg";
import witch from "../../assets/art/witch.jpeg";
import useWindowDimensions from "../../use/useWindowDimensions";
import Popover from "@mui/material/Popover";
import InspectImage from "../InspectImage/InspectImage";
import { useState, useEffect, useRef } from "react";

export default function TitlebarBelowImageList() {
  const { height, width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageListContainerWidth = width * 0.75;
  const [leftOffset, setLeftOffset] = useState(0);

  // Prevent right-click
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);

  let columnCount = 3;
  if (width <= 500) {
    columnCount = 1;
  } else if (width < 756) {
    columnCount = 2;
  }

  interface HandleClickProps {
    img: string;
    title: string;
  }

  const handleClick = ({ img, title }: HandleClickProps) => {
    setSelectedImage(img);
    setAnchorEl(document.getElementById(`image-${title}`)!);
    console.log("clicked");
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedImage(null);
  };

  // create a ref to the image list container for all images? no

  return (
    <ImageList
      sx={{
        width: { imageListContainerWidth },
        height: "100%",
        zIndex: 1,
        background: "white",
      }}
      variant='masonry'
      cols={columnCount}
      gap={16}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} style={{ border: "1px black" }}>
          <img
            src={item.img}
            alt={item.title}
            loading='lazy'
            onClick={() => handleClick({ img: item.img, title: item.title })}
            id={`image-${item.title}`}
          />
          <Popover
            id={"inspect-image-popover"}
            open={selectedImage === item.img}
            anchorEl={anchorEl}
            BackdropProps={
              selectedImage === item.img
                ? { sx: { backdropFilter: "blur(5px)" } }
                : {}
            }
            PaperProps={{
              sx: {
                backgroundColor: "transparent",
                boxShadow: "none",
                height: "auto",
              },
            }}
            onClose={handleClose}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: width - 16,
                height: "100%",
              }}
              onClick={handleClose}
            >
              <InspectImage
                artImg={item.img}
                onClose={handleClose}
                artInfo={{ title: item.title }}
                setLeftOffset={setLeftOffset}
              />
            </div>
          </Popover>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

// TODO: Convert into a hook
const itemData = [
  {
    img: darkColors,
    title: "Dark Colors",
    author: "Shannon Ilg",
  },
  {
    img: fallLake,
    title: "Fall Lake",
    author: "Shannon Ilg",
  },
  {
    img: fallStuff,
    title: "Fall Stuff",
    author: "Shannon Ilg",
  },
  {
    img: moon,
    title: "Moon",
    author: "Shannon Ilg",
  },
  {
    img: mushrooms,
    title: "Mushrooms",
    author: "Shannon Ilg",
  },
  {
    img: rainyReflections,
    title: "Rainy Reflections",
    author: "Shannon Ilg",
  },
  {
    img: stormySkys,
    title: "Stormy Skys",
    author: "Shannon Ilg",
  },
  {
    img: stormySkys2,
    title: "Stormy Skys 2",
    author: "Shannon Ilg",
  },
  {
    img: stormySkys3,
    title: "Stormy Skys 3",
    author: "Shannon Ilg",
  },
  {
    img: susan,
    title: "Susan",
    author: "Shannon Ilg",
  },
  {
    img: tree,
    title: "Tree",
    author: "Shannon Ilg",
  },
  {
    img: witch,
    title: "Witch",
    author: "Shannon Ilg",
  },
];
