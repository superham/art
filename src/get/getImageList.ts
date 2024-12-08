// Description: data for getting images from cdn

interface ImageDataItem {
  key: string;
  title: string;
  author: string;
  orientation: string; // unused - remove
  dimensions?: {
    // hard code how we want these to appear
    small: {
      height: number;
      width: number;
    };
    large: {
      height: number;
      width: number;
    };
  };
}

export const imageData: ImageDataItem[] = [
  {
    key: "darkColors",
    title: "Dark Colors",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "fallLake",
    title: "Fall Lake",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "fallStuff",
    title: "Fall Stuff",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "moon",
    title: "Moon",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "mushrooms",
    title: "Mushrooms",
    author: "Shannon Ilg",
    orientation: "portrait",
  },
  {
    key: "rainyReflections",
    title: "Rainy Reflections",
    author: "Shannon Ilg",
    orientation: "portrait",
  },
  {
    key: "stormySkys",
    title: "Stormy Skys",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "stormySkys2",
    title: "Stormy Skys 2",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "stormySkys3",
    title: "Stormy Skys 3",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "susan",
    title: "Susan",
    author: "Shannon Ilg",
    orientation: "portrait",
  },
  {
    key: "tree",
    title: "Tree",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
  {
    key: "witch",
    title: "Witch",
    author: "Shannon Ilg",
    orientation: "landscape",
  },
];
