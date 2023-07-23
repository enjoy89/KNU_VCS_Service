import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export const FineButton = ({ text, variant, onClick, type }) => {
  return (
    <Button variant={variant} onClick={onClick} type={type}>
      {text}
    </Button>
  );
};
