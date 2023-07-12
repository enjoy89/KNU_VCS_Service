import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from '../style/modal';
import { FineButton } from '../assets/fineButton';
import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import getVersionInfo from '../axios/getVersionInfo';


export const AppTestVersionModalVersionModal = ({ modalShow, setIsModalShow }) => {
    // const [, setIsModalShow] = useState(modalShow);
    const closeModal = () => {
      setIsModalShow(!modalShow);
    }
    const [inputInfo, setInputInfo] = useState({
      title: 'kakaotalk',
      client_nation: '미국',
      client_os: 'ios',
      client_version: '1.0',
    });
    // const inputInfo = {
    //   title: 'kakaotalk',
    //   client_nation: '미국',
    //   client_os: 'ios',
    //   client_vertion: '1.0',
    // }
    // useEffect(() => {
    //   console.log(inputInfo);
    // }, [inputInfo])

    const setValue = (name, value) => {
      // setInputInfo(prev => [
      //   ...prev, {
      //     name: value
      //   }
      // ])
      setInputInfo({...inputInfo,
        [name]: value
      })
    }

    return (
        <Modal show={modalShow} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>App Test Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ModalTitle>Client ver</ModalTitle> 
          {/* 다 구현한 후 assets 단위로 나누기 */}

          <Form.Label>service name</Form.Label>
          <Form.Control name="title" type="text" placeholder="kakaotalk" onChange={(e) => setValue(e.target.name, e.target.value)}/>

          <Form.Label>service nation</Form.Label>
          <Form.Select name="client_nation" onChange={(e) => setValue(e.target.name, e.target.value)}>
            <option value="한국">한국</option>
            <option value="중국">중국</option>
            <option value="미국">미국</option>
          </Form.Select>
          <Form.Label>OS</Form.Label>
          <Form.Select name="client_os" aria-label="버전을 선택해주세요." onChange={(e) => setValue(e.target.name, e.target.value)}>
            <option value="ios">ios</option>
            <option value="android">android</option>
          </Form.Select>

          <Form.Label>client version</Form.Label>
          <Form.Control name="client_version" type="text" placeholder="1.0" onChange={(e) => setValue(e.target.name, e.target.value)}/>
          
          <FineButton text={"전송"} variant={"secondary"} onClick={() => {
            console.log(inputInfo)
            // getVersionInfo(inputInfo);
          }}/>
          <ModalTitle>Server Result</ModalTitle>
          <Form>
     
        <Form.Control as="textarea" rows={3} />
      {/* </Form.Group> */}
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <FineButton text={"닫기"} variant={"secondary"} onClick={closeModal}/>
          <FineButton text={"확인"} variant={"primary"} onClick={() => {}}/>            
        </Modal.Footer>
      </Modal>
    )
}