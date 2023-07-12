import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from '../style/modal';
import { FineButton } from '../assets/fineButton';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import getVersionInfo from '../axios/getVersionInfo';
import { styled } from 'styled-components';



export const AppTestVersionModalVersionModal = ({ modalShow, setIsModalShow }) => {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    console.log(inputInfo)
    const form = event.currentTarget;
    event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    getVersionInfo(inputInfo);
    // console.log(result);

    // if (result.isLatest) {  // result.isLatest
    //   setServerResult('이미 최신 버전입니다.')
    // } else {
    //   setServerResult(result);
      
    // } 
    // getVersionInfo(inputInfo);
  };


    // const [, setIsModalShow] = useState(modalShow);
    const closeModal = () => {
      setIsModalShow(!modalShow);
    }
    const [serverResult, setServerResult] = useState('');
    const [inputInfo, setInputInfo] = useState({
      title: '',
      client_nation: '한국',
      client_os: 'ios',
      client_version: '',
    });

    const setValue = (name, value) => {
      setInputInfo({
        ...inputInfo,
        [name]: value
      })
    }

    return (
        <Modal show={modalShow} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>App Test Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* 다 구현한 후 assets 단위로 나누기 */}
    <Form noValidate validated={validated} onSubmit={handleSubmit}>

          <Form.Label>service name</Form.Label>
          <Form.Control required name="title" type="text" placeholder="kakaotalk" onChange={(e) => setValue(e.target.name, e.target.value)}/>
          <Form.Control.Feedback type="invalid">
              서비스 이름을 입력해주세요.
            </Form.Control.Feedback>
          <Label>service nation</Label>
          <Form.Select defaultValue={"한국"} required name="client_nation" onChange={(e) => setValue(e.target.name, e.target.value)}>
            <option value="한국">한국</option>
            <option value="중국">중국</option>
            <option value="미국">미국</option>
          </Form.Select>

          <Label>OS</Label>
          <Form.Select required name="client_os" aria-label="버전을 선택해주세요." onChange={(e) => setValue(e.target.name, e.target.value)}>
         
            <option value="ios" defaultValue={"ios"}>ios</option>
            <option value="android">android</option>
          </Form.Select>

          <Label>client version</Label>
          <Form.Control required name="client_version" type="text" placeholder="1.0" onChange={(e) => setValue(e.target.name, e.target.value)}/>
          <Form.Control.Feedback type="invalid">
              서비스 버전을 입력해주세요.
            </Form.Control.Feedback>
          {/* <FineButton type="submit" text={"전송"} variant={"secondary"} onClick={() => {
            if (inputInfo.client_nation !== '' 
                  && inputInfo.client_os !== '' 
                  && inputInfo.client_version !== '' 
                  && inputInfo.title !== '') {
              console.log(inputInfo);
              if (false) {  // result.isLatest
                setServerResult('이미 최신 버전입니다.')
              } else {
                setServerResult('어쩌구저꺼구');
  
              }
            } 
            // const result = getVersionInfo(inputInfo);
            // getVersionInfo(inputInfo);
          }}/> */}
          <SubmitButton type="submit">전송</SubmitButton>
         
          <Form>
      {/* </Form.Group> */}
      </Form>
      
    </Form>
    <ModalTitle>Server Result</ModalTitle>
        <Form.Control as="textarea" rows={3} value={serverResult}/>
        </Modal.Body>
        <Modal.Footer>
          <FineButton text={"닫기"} variant={"secondary"} onClick={closeModal}/>
          <FineButton text={"확인"} variant={"primary"} onClick={() => {}}/>            
        </Modal.Footer>
      </Modal>
    )
}

const SubmitButton = styled(Button)`
  display: flex;
  margin-right: 0;
  margin-left: auto;
  margin-top: 1rem;
`;

const Label = styled(Form.Label)`
  margin-top: 1rem;
`;