// import Button from 'react-bootstrap/Button';
// import { Button } from 'bootstrap';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다

export const FineButton = ({ text, variant }) => {
    return (
        <div>
            {/* <Button>dd</Button> */}
            {/* <Button as="input" type="button" value="Input" />{' '} */}
            <SButton variant={variant}>{text}</SButton>
        </div>
    )
} 
const SButton = styled(Button)`
    flex: 1;
`;