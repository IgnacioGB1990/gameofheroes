import React from 'react'
import styled from "styled-components";

export const InputContainer = styled.div`
  width: 100%;
  margin: 20px; 
  > input {
    width: 100%;
  }
`;



const Input = ({ setFilter }) => {

  return (
    <InputContainer>
      <input className="searchBox" placeholder="search" onChange={e => setFilter(e.target.value)} />
    </InputContainer>
  )
}

export default Input;