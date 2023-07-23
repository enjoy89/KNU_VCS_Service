import Button from "react-bootstrap/Button"; // 꼭 import를 해와야한다
import Modal from "react-bootstrap/Modal";
import { FineButton } from "../assets/fineButton";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { styled } from "styled-components";
import getVersionInfo from "../axios/getVersionInfo";

// App Test 버튼을 클릭했을 때 나타나는 모달창
// 사용자(관리자)로부터 서비스 버전 정보를 입력받고, 그에 해당하는 반환값을 보여준다.
export const AppTestVersionModal = ({ modalShow, setIsModalShow }) => {
  const [validated, setValidated] = useState(false);
  const [serverResult, setServerResult] = useState();
  const [inputInfo, setInputInfo] = useState({
    title: "",
    client_nation: "한국",
    client_os: "AOS",
    client_version: "",
  }); // default value

  const client_os_option = ["AOS", "IOS"];
  const client_nation_option = ["한국", "중국", "미국"];

  useEffect(() => {
    setServerResult();
    setValidated(false);
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    getVersionInfo(inputInfo).then((result) => {
      setServerResult(result);
    });
  };

  useEffect(() => {
    console.log(serverResult);
  }, [serverResult]);

  const closeModal = () => {
    setIsModalShow(!modalShow);
  };

  const setValue = (name, value) => {
    setInputInfo({
      ...inputInfo,
      [name]: value,
    });
  };

  return (
    <Modal show={modalShow} onHide={closeModal} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>App Test Version</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Label>service name</Form.Label>
          <Form.Control
            required
            name="title"
            type="text"
            placeholder="kakaotalk"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            서비스 이름을 입력해주세요.
          </Form.Control.Feedback>
          <Label>service nation</Label>
          <Form.Select
            defaultValue={client_nation_option[0]}
            required
            name="client_nation"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          >
            {client_nation_option.map((element) => (
              <option value={element}>{element}</option>
            ))}
          </Form.Select>

          <Label>OS</Label>
          <Form.Select
            required
            name="client_os"
            aria-label="버전을 선택해주세요."
            onChange={(e) => setValue(e.target.name, e.target.value)}
          >
            {client_os_option.map((element) => (
              <option value={element}>{element}</option>
            ))}
          </Form.Select>

          <Label>client version</Label>
          <Form.Control
            required
            name="client_version"
            type="text"
            placeholder="1.0"
            onChange={(e) => setValue(e.target.name, e.target.value)}
          />
          <Form.Control.Feedback type="invalid">
            서비스 버전을 입력해주세요.
          </Form.Control.Feedback>
          <SubmitButton type="submit">전송</SubmitButton>
          <Form></Form>
        </Form>
        <ResultLabel>Server Result</ResultLabel>
        {serverResult && (
          <div>
            {serverResult.latest ? (
              <ResultInfoText>현재 최신 버전입니다.</ResultInfoText>
            ) : serverResult.forceUpdate ? (
              <ResultInfoText>
                <div>현재 최신 버전이 아닙니다.</div>
                <div>강제 업데이트가 필요합니다.</div>
              </ResultInfoText>
            ) : (
              <ResultInfoText>
                <div>현재 최신 버전이 아닙니다.</div>
                <div>강제 업데이트를 하지 않아도 됩니다.</div>
              </ResultInfoText>
            )}
          </div>
        )}
        <Form.Control
          as="textarea"
          rows={3}
          value={JSON.stringify(serverResult)}
        />
      </Modal.Body>
      <Modal.Footer>
        <FineButton text={"닫기"} variant={"secondary"} onClick={closeModal} />
      </Modal.Footer>
    </Modal>
  );
};

export const SubmitButton = styled(Button)`
  display: flex;
  margin-right: 0;
  margin-left: auto;
  margin-top: 1rem;
`;

export const Label = styled(Form.Label)`
  margin-top: 1rem;
`;

export const ResultLabel = styled(Label)`
  font-size: 20px;
`;

export const ResultInfoText = styled(Form.Label)`
  color: #dc3545;
  font-size: 15px;
`;
