import styled from 'styled-components';


export const Flex = styled.div`
    display: flex;    
`;

export const Row = styled(Flex)`
    flex-direction: row;
    justify-content: center;
`;

export const Col = styled(Flex)`
    flex-direction: column;
    // background: yellow;
    justify-content: center;

`;
export const Title = styled.div`
    font-size: 24px;
    align-self: center;
    text-align: center;
    
`;

