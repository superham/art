import useWindowDimensions from "../../use/useWindowDimensions";

interface InspectImageProps {
  artImg: string;
}

export default function InspectImage({ artImg }: InspectImageProps) {
  const { width } = useWindowDimensions();

  return (
    <div
      style={{
        width: width * 0.75,
      }}
    >
      <img
        src={artImg}
        alt={"abc"} // TODO: USE THIS LATER TO DISPLAY ARTIST NAME
        loading='lazy'
        onClick={() => console.log("clicked")}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
