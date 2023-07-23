import { VersionTable } from "../components/versionTable";
import styled from "styled-components";
import { Title, Col } from "../style";
import { VersionButtons } from "../components/versionButtons";
import { AppTestVersionModal } from "../components/appTestVersionModal";
import { useEffect, useState } from "react";
import { AppAddVersionModal } from "../components/addVersionModal";
import getVersions from "../axios/getVersions";

function Home() {
  const [result, setResult] = useState();

  const [isAppTestVersionModalShow, setIsAppTestVersionModalShow] =
    useState(false);
  const [isAddModalShow, setIsAddModalShow] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    // 버전 정보 가져오기
    getVersions().then((res) => {
      setResult(res.configs);
    });
  }, []);

  const handleDelete = (id) => {
    const updated = result.filter((config) => config.id != id);
    setResult(updated);
    setDeleted(!deleted);
  };

  const handleAdd = (inputInfo) => {
    const updated = result.concat(inputInfo);
    setResult(updated);
    setAdded(!added);
  };

  return (
    <Container>
      <Title>버전 관리 시스템</Title>
      <Col>
        {/* Add, App Test 버튼 */}
        <VersionButtons
          setIsAddModalShow={setIsAddModalShow}
          setIsAppTestVersionModalShow={setIsAppTestVersionModalShow}
        />

        {/* 버전 정보 테이블 */}
        <VersionTable data={result} onDelete={handleDelete} />
      </Col>

      {/* 버튼 클릭 시 팝업되는 모달 */}
      <AppAddVersionModal
        modalShow={isAddModalShow}
        setIsModalShow={setIsAddModalShow}
        handleAdd={handleAdd}
        tableLength={result && result.length}
      />
      <AppTestVersionModal
        modalShow={isAppTestVersionModalShow}
        setIsModalShow={setIsAppTestVersionModalShow}
      />
    </Container>
  );
}
export default Home;

const Container = styled.div`
  margin: 5rem;
`;
