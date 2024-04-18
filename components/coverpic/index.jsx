import Image from "next/image";
import Cover from "../../public/cover.jpg";

const CoverPicture = ({ width, height }) => {
  return (
    <Image
      src={Cover}
      alt="Aytuhan Kazandırmak's Image"
      width={width}
      height={height}
    />
  );
};

export default CoverPicture;
