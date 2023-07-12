import { FineButton } from "../assets/fineButton"
import { styled } from "styled-components"
import { Row } from "../style"

export const VersionButtons = () => {
    // 데이터 넘겨주기
    return (
        <Container>
            <FineButton text={"ADD"} variant={"primary"}/>
            <FineButton text={"App Test"} variant={"success"}/>
        </Container>
    )
}

const Container = styled(Row)`
    margin-top: 1rem;
`;
