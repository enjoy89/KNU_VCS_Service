import { styled } from "styled-components"
import { FineTable } from "../assets/fineTable";

export const VersionTable = ({ data }) => {
    // 데이터 넘겨주기
    return (
        <Container>
            <FineTable data={data} />
        </Container>
    )
}

const Container = styled.div`
    margin-top: 1rem;
`;
