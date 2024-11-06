interface InspectImageProps {
  artImg: string;
}

export default function InspectImage({ artImg }: InspectImageProps) {
  return (
    <div>
      <img
        src={artImg}
        alt={"abc"}
        loading='lazy'
        onClick={() => console.log("clicked")}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
