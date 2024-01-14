import { useState } from "react";

interface Props {
  cartItemCount: number;
}

function NavBar({ cartItemCount }: Props) {
  return <>NavBar: {cartItemCount}</>;
}

export default NavBar;
