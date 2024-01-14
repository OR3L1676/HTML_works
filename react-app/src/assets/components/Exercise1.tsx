interface Props {
  color?: "primary" | "secondary" | "danger" | "success"; // ? - mean optional
  onClick: () => void;
}

function Exercise({ color = "primary", onClick }: Props) {
  //  = 'primary' setting default color
  return (
    <>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {color}
      </button>
    </>
  );
}

export default Exercise;
