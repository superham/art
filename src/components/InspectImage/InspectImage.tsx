import { Dispatch, SetStateAction } from "react";
import useWindowDimensions from "../../use/useWindowDimensions";
import Tag from "../Tag/Tag";
import { useImageSize } from "react-image-size";

interface InspectImageProps {
  artImg: string;
  onClose: () => void;
  artInfo?: {
    title: string;
    desc?: string;
  };
  setLeftOffset: Dispatch<SetStateAction<number>>;
}

export default function InspectImage({
  artImg,
  onClose,
  artInfo,
  setLeftOffset,
}: InspectImageProps) {
  const [dimensions, { loading, error }] = useImageSize(artImg);
  const { height, width } = useWindowDimensions();

  console.log("dimensions");
  console.log(`height: ${dimensions?.height}`);
  console.log(`width: ${dimensions?.width}`);
  console.log("window");
  console.log(`height: ${height}`);
  console.log(`width: ${width}`);

  if (width <= dimensions?.width!) {
    console.log("image is too wide");
    console.log(`image width is ${dimensions?.width! / width}`);
  }

  if (height <= dimensions?.height!) {
    console.log("image is too tall");
    console.log(`image height is ${dimensions?.height! / height}`);
  }

  const heightRatio = dimensions?.height! / height;
  const widthRatio = dimensions?.width! / width;

  const leftOffset = (width - dimensions?.width!) / 2;
  setLeftOffset(leftOffset);

  const imageHeight = dimensions?.height! / heightRatio;
  const imageWidth = dimensions?.width! / widthRatio;

  let style = {};

  // check if width is greater than 80% of screen width

  let maxWidth =
    dimensions?.width! >= width * 0.8 ? width * 0.8 : dimensions?.width!;
  console.log(`maxWidth: ${maxWidth}`);

  if (width <= 756) {
    maxWidth = width * 0.9;
  }

  if (heightRatio >= widthRatio) {
    style = {
      height: `${imageHeight - 100}px`, // -100px for tag
      width: "auto",
      maxWidth: maxWidth,
    };
  } else {
    style = {
      maxWidth: maxWidth,
      height: "auto",
      width: `${imageWidth}px`,
    };
  }

  return (
    <div
      style={{
        transition: "box-shadow 0.2s ease-in-out",
        scrollbarWidth: "none", // Firefox
      }}
      onClick={onClose}
    >
      <img
        src={artImg}
        alt={"abc"} // TODO: USE THIS LATER TO DISPLAY ARTIST NAME
        loading='lazy'
        onClick={() => console.log("clicked")}
        style={style}
      />
      <Tag title={artInfo?.title} desc={artInfo?.desc} width={"auto"} />
    </div>
  );
}

// in order to find offsets need to know final image size vs screen size

// left offsett = windowSize - imageSize / 2
