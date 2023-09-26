import styled from 'styled-components'


export const DivComp1 = styled.div`
    background: lightblue;
    border: 2px solid blue;

    h2{
        text-align: center; 
        color: darkblue;
    }

    p{
        text-align:justify; 
        color: darkblue;
    }
`

export const Button = styled.button`
    background-color: ${(props) => props.$inOn ? "#999" : "#00f"};
    border-radius: 10px;
    padding: 5px;
    color: white;
    border: none;
`