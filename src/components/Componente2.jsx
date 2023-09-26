import styled from 'styled-components'

const DivComp2 = styled.div`
    background-color: lightcoral;
    border: 2px solid green;

    h2{
    text-align: center; 
    color: darkgreen
}
`

export default function Componente2(){
    return(
        <DivComp2>
            <h2>Componente 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officiis, asperiores quidem debitis quaerat nemo similique hic voluptatum natus animi distinctio, perspiciatis magni tempore, iste dolores et qui aperiam est.</p>
        </DivComp2>
    )
}