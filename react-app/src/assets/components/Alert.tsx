import { ReactNode } from "react"; // gives us to send the children in any html element we want

interface Props {
  children: ReactNode; // the reactnode |^|
}

const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      {children}
    </div>
  );
};

export default Alert;
