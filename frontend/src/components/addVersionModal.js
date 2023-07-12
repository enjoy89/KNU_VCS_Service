import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다
import Modal from 'react-bootstrap/Modal';
import { ModalTitle } from '../style/modal';
import { FineButton } from '../assets/fineButton';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export const AppVersionModal = ({ modalShow, setIsModalShow }) => {
    // const [, setIsModalShow] = useState(modalShow);
    const closeModal = () => {
      setIsModalShow(!modalShow);
    }
    return (
        <Modal show={modalShow} onHide={closeModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add Version</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <ModalTitle>Client ver</ModalTitle>  */}
          {/* 다 구현한 후 assets 단위로 나누기 */}
          {/* <Form.Select aria-label="버전을 선택해주세요.">
            <option value="1">1-ios-1.0</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select> */}
          <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>OS</Form.Label>
        <Form.Select type="text" placeholder="what type of OS">
            <option value="ios">ios</option>    
            <option value="android">android</option>    
        </Form.Select> 
        <Form.Label>version</Form.Label>
        <Form.Control></Form.Control>
        {/* <Form.Label>version</Form.Label> */}
        <Form.Select type="text" placeholder="2.0">
            <option value="true">true</option>    
            <option value="false">false</option>    
        </Form.Select> 
        <Form.Label>내용?</Form.Label>
        <Form.Control as="textarea" placeholder="" /> 
        
      </Form.Group>
      
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <FineButton text={"닫기"} variant={"secondary"} onClick={closeModal}/>
          <FineButton text={"확인"} variant={"primary"} onClick={() => {}}/>            
        </Modal.Footer>
      </Modal>
    )
}