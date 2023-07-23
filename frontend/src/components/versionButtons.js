import { FineButton } from "../assets/fineButton";
import { styled } from "styled-components";
import { Row } from "../style";

export const VersionButtons = ({
  setIsAddModalShow,
  setIsAppTestVersionModalShow,
}) => {
  const add = () => {
    setIsAddModalShow(true);
  };
  const appTest = () => {
    setIsAppTestVersionModalShow(true);
  };
  return (
    <Container>
      <FineButton text={"ADD"} variant={"primary"} onClick={add} />
      <FineButton text={"App Test"} variant={"success"} onClick={appTest} />
    </Container>
  );
};

const Container = styled(Row)`
  margin-top: 1rem;
  gap: 1rem;
`;
