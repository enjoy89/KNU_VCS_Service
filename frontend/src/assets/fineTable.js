import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

export const FineTable = ({ data }) => {
    // 디자인
    // 기능도
    const [head, setHead] = useState();
    const [values, setValues] = useState([]);

   useEffect(() => {
    if (data) {
      console.log(data[0]);
      setHead(Object.keys(data[0]));
      console.log(data.length)

      data.map((value) => {
        setValues(prev => [...prev, Object.values(value)]);
      })
    }
  }, [data]);

  useEffect(() => {
    console.log('values')
    // console.log(values);
    values.map((element) => {
      console.log(element);
    })
  }, [values])

    return (
    <Table striped bordered hover>
      <thead>
        <tr>{ head && 
          head.map((th) => (
            <th key={th}>{th}</th>
          ))
          }
        </tr>
      </thead>
      <tbody>
        {
          values &&
            values.map((element) => (
                <tr>
                  {
                    element.map((a) => (
                      <td>
                        {a}
                      </td>
                    ))
                  }
                </tr>
              ))
        }
      </tbody>
    </Table>
    );
}