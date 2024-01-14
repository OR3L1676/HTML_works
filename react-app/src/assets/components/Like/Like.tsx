import { useState } from "react";
import { BsHeart, BsHeartFill } from "react-icons/bs";

interface Props {
  onSelectItem: (status: string) => void;
}

function Like({ onSelectItem }: Props) {
  const [like, setLike] = useState(false);

  return (
    <>
      {like ? (
        <BsHeartFill
          size={50}
          color="red"
          onClick={() => {
            setLike(false);
            onSelectItem("empty");
          }}
        ></BsHeartFill>
      ) : (
        <BsHeart
          size={50}
          color="red"
          onClick={() => {
            setLike(true);
            onSelectItem("full");
          }}
        ></BsHeart>
      )}
    </>
  );
}
export default Like;
