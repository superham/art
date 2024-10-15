import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
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

export default function TitlebarBelowImageList() {
  const { width } = useWindowDimensions();
  let columnCount = 3;

  if (width < 756) {
    columnCount = 2;
  }

  const imageListContainerWidth = width * 0.75;

  return (
    <ImageList
      sx={{ width: { imageListContainerWidth }, height: "100%" }}
      variant='masonry'
      cols={columnCount}
      gap={16}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=161&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=161&fit=crop&auto=format`}
            alt={item.title}
            loading='lazy'
          />
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