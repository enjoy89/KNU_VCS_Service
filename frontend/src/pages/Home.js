import { VersionTable } from '../components/versionTable';
import styled from 'styled-components';
import { Row, Title, Col } from '../style';
import { VersionButtons } from '../components/vertionButtons';
import { useState } from 'react';
function Home() {
  const [data, setData] = useState();
    return (
      <Container>
        <Title>버전 관리 시스템</Title>
        <Col>
          <VersionButtons />
          <VersionTable data={data}/>
        </Col>
        
      </Container>
    )
}
export default Home;

const Container = styled.div`
  margin: 5rem;
  // background: yellow;
`;


