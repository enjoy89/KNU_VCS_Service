import { VersionTable } from '../components/versionTable';
import styled from 'styled-components';
import { Row, Title, Col } from '../style';
import { VersionButtons } from '../components/versionButtons';
import { AppTestVersionModalVersionModal } from '../components/appTestVersionModal';
import { useEffect, useState } from 'react';
import { AppVersionModal } from '../components/addVersionModal';
import getData from '../axios/getData';
function Home() {
  const [result, setResult] = useState();
  const [isAppTestVersionModalShow, setIsAppTestVersionModalShow] = useState(false);
  const [isAddModalShow, setIsAddModalShow] = useState(false);
  // const tableData = {
  //   "num" : 100,
  //   "configs": [{
  //     "id": 1, 
  //     "title": "kakaotalk", 
  //     "service_location": "172.30.30.151", 
  //     "OS": "ios", 
  //     "service_version": "2.0", 
  //     "message": "버그 수정", 
  //     "package": "con.example", 
  //     "regdate": "2023-07-10 12:00:00", 
  //     "forceUpdatePoint": "true"
  // }, {
  //     "id": 2, 
  //     "title": "kakaotalk2", 
  //     "service_location": "172.30.30.151", 
  //     "OS": "ios", 
  //     "service_version": "2.0", 
  //     "message": "버그 수정", 
  //     "package": "con.example", 
  //     "regdate": "2023-07-10 12:00:00", 
  //     "forceUpdatePoint": "true"
  // }]
  // }
  useEffect(() => {

    getData().then(res => {
      // console.log(res.configs)
      setResult(res.configs);
    });
    // setResult(tableData)
    
  }, []);

    return (
      <Container>
        <Title>버전 관리 시스템</Title>
        <Col>
          <VersionButtons setIsAddModalShow={setIsAddModalShow} setIsAppTestVersionModalShow={setIsAppTestVersionModalShow}/>
          <VersionTable data={result}/>
        </Col>
        <AppVersionModal modalShow={isAddModalShow} setIsModalShow={setIsAddModalShow} />
        <AppTestVersionModalVersionModal modalShow={isAppTestVersionModalShow} setIsModalShow={setIsAppTestVersionModalShow} />
      </Container>
    )
}
export default Home;

const Container = styled.div`
  margin: 5rem;
  // background: yellow;
`;


