import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import { FineButton } from "./fineButton";
import deleteService from "../axios/deleteService";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

// 데이터를 화면에 테이블 형태로 보여준다.
export const FineTable = ({ head, onDelete, values }) => {
  const [alertShow, setAlertShow] = useState(false);
  const deleteRow = (id) => {
    deleteService(id).then((res) => {
      console.log("res: " + res);
      if (res.status == 200) {
        onDelete(id);
      } else {
        console.log("에러");
      }
    });
  };

  // elements[0]
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>{head && head.map((th) => <th key={th[0]}>{th}</th>)}</tr>
        </thead>
        <tbody>
          {values &&
            values.map((elements) => (
              <tr key={elements[0]}>
                {/* {alertShow && (
                  <Modal show={alertShow} onHide={() => {}} backdrop="static">
                    <Alert
                      variant=""
                      onClose={() => setAlertShow(false)}
                      style={{ margin: 0 }}
                    >
                      <p style={{ fontSize: "18px", padding: "1rem" }}>
                        정말 삭제하시겠습니까?
                      </p>
                      <div className="d-flex justify-content-end">
                        <Button
                          onClick={() => setAlertShow(false)}
                          variant="danger"
                        >
                          취소
                        </Button>
                        <Button
                          onClick={deleteRow(elements[0])}
                          variant="outline-danger"
                          style={{ marginRight: "0.8rem" }}
                        >
                          삭제
                        </Button>
                      </div>
                    </Alert>
                  </Modal>
                )} */}
                {elements.map((element) => (
                  <td key={element}>
                    {element == "button" ? (
                      <FineButton
                        variant={"danger"}
                        text={"삭제"}
                        onClick={() => {
                          setAlertShow(true);
                        }}
                      />
                    ) : (
                      element
                    )}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </Table>
    </>
  );
};
