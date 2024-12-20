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
import { useState, useEffect } from "react";
import "./WovenImageList.css";
import { smScreen, mdScreen } from "../../constants/constants";
import { createTheme, ThemeProvider } from "@mui/material";
import { Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "cursive"].join(","),
  },
});

export default function WovenImageList() {
  const { width } = useWindowDimensions();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const imageListContainerWidth = width * 0.75;

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

  let isXS = false;

  let columnCount = 3;
  if (width <= smScreen) {
    columnCount = 1;
    isXS = true;
  } else if (width < mdScreen) {
    columnCount = 2;
  }

  interface HandleClickProps {
    img: string;
    title: string;
  }

  const handleClick = ({ img, title }: HandleClickProps) => {
    setSelectedImage(img);
    setAnchorEl(document.getElementById(`image-${title}`)!);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedImage(null);
  };

  // create a ref to the image list container for all images? no

  return (
    <ThemeProvider theme={theme}>
      <div className='image-list-container'>
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
          {itemData.map((item, index) => (
            <ImageListItem key={item.img} style={{ border: "1px black" }}>
              <img
                src={item.img}
                alt={item.title}
                loading='lazy'
                onClick={() =>
                  !isXS && handleClick({ img: item.img, title: item.title })
                }
                id={`image-${item.title}`}
              />
              {/* {isXS && <div className='title-section'>{item.title}</div>} */}
              {isXS && (
                <Typography className='title-section' variant='subtitle1'>
                  {item.title}
                </Typography>
              )}
              {isXS && index !== itemData.length - 1 && (
                <hr className='image-divider' />
              )}
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
                  />
                </div>
              </Popover>
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </ThemeProvider>
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
