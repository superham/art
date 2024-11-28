import useWindowDimensions from "../../use/useWindowDimensions";
import Tag from "../Tag/Tag";
interface InspectImageProps {
  artImg: string;
  onClose: () => void;
  artInfo?: {
    title: string;
    desc?: string;
  };
}

export default function InspectImage({
  artImg,
  onClose,
  artInfo,
}: InspectImageProps) {
  const { width } = useWindowDimensions();
  const isMd = width <= 756;
  const isXS = width <= 375;

  let imageWidth = "70%";
  if (isMd) {
    imageWidth = "85%";
  } else if (isXS) {
    imageWidth = "100%";
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "box-shadow 0.2s ease-in-out",
      }}
      onClick={onClose}
    >
      <img
        src={artImg}
        alt={"abc"} // TODO: USE THIS LATER TO DISPLAY ARTIST NAME
        loading='lazy'
        onClick={() => console.log("clicked")}
        style={{
          width: imageWidth,
          height: "auto",
        }}
      />
      <Tag title={artInfo?.title} desc={artInfo?.desc} width={imageWidth} />
    </div>
  );
}
