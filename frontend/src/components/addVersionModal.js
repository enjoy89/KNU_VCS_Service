import Modal from "react-bootstrap/Modal";
import { FineButton } from "../assets/fineButton";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import { Label, SubmitButton } from "./appTestVersionModal";
import addService from "../axios/addService";
import Alert from "react-bootstrap/Alert";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AppAddVersionModal = ({
  modalShow,
  setIsModalShow,
  handleAdd,
  tableLength,
}) => {
  const [validated, setValidated] = useState(false);
  const [inputInfo, setInputInfo] = useState({
    title: "",
    nation: "한국",
    os: "IOS",
    version: "",
    message: "기능 추가",
    service_package: "dsd",
    forceUpdatePoint: "true",
  }); // default value
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setValidated(false);
  }, []);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    event.preventDefault();

    addService(inputInfo).then((res) => {
      if (res.status == 201) {
        handleAdd({
          id: tableLength + 1,
          ...inputInfo,
        });
        toast.success("새로운 서비스 버전이 추가되었습니다.", {
          autoClose: 1000,
          hideProgressBar: true,
          position: "top-center",
        });
        closeModal(!modalShow);
      } else {
        console.log("에러");
      }
    });
  };

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
    <>
      <ToastContainer></ToastContainer>
      <Modal show={modalShow} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Label>service name</Form.Label>
            <Form.Control
              required
              name="title"
              type="text"
              placeholder=""
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              서비스 이름을 입력해주세요.
            </Form.Control.Feedback>
            <Label>service nation</Label>
            <Form.Select
              defaultValue={"한국"}
              required
              name="nation"
              onChange={(e) => setValue(e.target.name, e.target.value)}
            >
              <option value="한국">한국</option>
              <option value="중국">중국</option>
              <option value="미국">미국</option>
            </Form.Select>

            <Label>OS</Label>
            <Form.Select
              required
              name="os"
              aria-label="버전을 선택해주세요."
              onChange={(e) => setValue(e.target.name, e.target.value)}
            >
              <option value="AOS" defaultValue={"AOS"}>
                AOS
              </option>
              <option value="IOS">IOS</option>
            </Form.Select>

            <Label>version</Label>
            <Form.Control
              required
              name="version"
              type="text"
              placeholder=""
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              서비스 버전을 입력해주세요.
            </Form.Control.Feedback>

            <Label>message</Label>
            <Form.Control
              required
              name="message"
              type="text"
              placeholder=""
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              메시지를 입력해주세요.
            </Form.Control.Feedback>

            <Label>service package</Label>
            <Form.Control
              required
              name="service_package"
              type="text"
              placeholder=""
              onChange={(e) => setValue(e.target.name, e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              서비스 패키지명을 입력해주세요.
            </Form.Control.Feedback>

            <Label>fore update </Label>
            <Form.Select
              required
              name="forceUpdatePoint"
              aria-label="강제 업데이트 여부를 설정해주세요."
              onChange={(e) => setValue(e.target.name, e.target.value)}
            >
              <option value="false" defaultValue={"false"}>
                false
              </option>
              <option value="true">true</option>
            </Form.Select>

            <SubmitButton type="submit">전송</SubmitButton>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <FineButton
            text={"닫기"}
            variant={"secondary"}
            onClick={closeModal}
          />
        </Modal.Footer> */}
      </Modal>
    </>
  );
};
