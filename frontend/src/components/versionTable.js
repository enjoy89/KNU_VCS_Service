import { styled } from "styled-components";
import { FineTable } from "../assets/fineTable";
import { useEffect, useState } from "react";

export const VersionTable = ({ data, onDelete, deleted }) => {
  // console.log("version table");
  // console.log(data);
  const [head, setHead] = useState([]);
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues([]);
    setHead([]); // * 초기화를 해줬어야 했다..
    if (data) {
      let array = Object.keys(data[0]);
      array.push("action");
      console.log(data);
      setHead(array);

      data.map((value) => {
        console.log("??");
        let array = Object.values(value);
        array.push("button");
        // console.log([...array]);
        console.log(array);
        setValues((prev) => [...prev, array]);
        // setValues(...array);
        // console.log(array);
      });
    }
  }, [data]);

  return (
    <Container>
      <FineTable head={head} values={values} onDelete={onDelete} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 1rem;
`;
