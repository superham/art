import useWindowDimensions from "../../use/useWindowDimensions";

interface InspectImageProps {
  artImg: string;
  onClose: () => void;
}

export default function InspectImage({ artImg, onClose }: InspectImageProps) {
  const { width, height } = useWindowDimensions();
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
        justifyContent: "center",
        alignItems: "center",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        transition: "box-shadow 0.2s ease-in-out",
      }}
      onClick={onClose}
    >
      <img
        src={artImg}
        alt={"abc"}
        loading='lazy'
        onClick={() => console.log("clicked")}
        style={{
          width: imageWidth,
          height: "auto",
        }}
      />
    </div>
  );
}
