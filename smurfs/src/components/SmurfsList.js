import React from "react";

import Smurf from "./Smurf";
import styled from 'styled-components';

const UnorderedList = styled.ul`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
`

const SmurfsList = props => {
  return (
    <UnorderedList>
      {props.smurfs.map(smurf => {
        return <Smurf 
                    key={smurf.name}
                    smurf={smurf}
                />;
      })}
    </UnorderedList>
  );
};

export default SmurfsList;
