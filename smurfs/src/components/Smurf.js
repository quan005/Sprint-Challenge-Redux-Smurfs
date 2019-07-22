import React from "react";
import styled from 'styled-components';

const ListItem = styled.li`
    margin:10px 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const Text = styled.p`
    margin-left: 20px;
`

const Smurf = props => {
  return <ListItem>
            <Text><strong>Name:</strong> {props.smurf.name}</Text>
            <Text><strong>Age:</strong> {props.smurf.age}</Text>
            <Text><strong>Height:</strong> {props.smurf.height}</Text>
            {/* <button>delete</button> */}
         </ListItem>;
};

export default Smurf;
