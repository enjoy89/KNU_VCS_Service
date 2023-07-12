// import Button from 'react-bootstrap/Button';
// import { Button } from 'bootstrap';
import { styled } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'; // 꼭 import를 해와야한다

export const FineButton = ({ text, variant, onClick, type }) => {
    return (
        <Button variant={variant} onClick={onClick} type={type}>{text}</Button>
    )
} 
