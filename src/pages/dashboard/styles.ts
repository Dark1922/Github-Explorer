import styled, {css} from 'styled-components';
import {shade} from 'polished';

interface FormProps {
  hasError: boolean;
}


export const Title = styled.h1`
font-size: 48px;
color:#3A3A3A;
max-width: 450px;
line-height: 56px;
margin-top: 80px;

`;

export const Form = styled.form<FormProps>`

margin-top: 40px;
max-width: 700px;

display: flex;

input {
  flex:1;
  height:70px;
  padding: 0 24px;
  border: 0;
  border-radius: 5px 0 0 5px;
  border: 2px solid #FFF;
  border-right: 0;

${(props) => props.hasError && css`
border-color:#c53030;

`
}

  &::placeholder{
    color:#A8A8B3;
  }
}

button {
  width: 210px;
  background: #04D461;
  border-radius: 0px 5px 5px 0px;
  border: 0;
  color: #FFF;
  font-weight: bold;
  transition: background-color 0.2s;

  &:hover {
     background: ${shade(0.2, '#04D461')};
  }
}
`;

export const Error = styled.span`
display: block; //ocupar espassamento de bloco
color: #c53030; //corzinha de erro
margin-top: 8px;

`;

export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;

a {
  background: #FFF;
  border-radius:5px;
  width: 100%;
  padding: 24px;
  display: block;
  text-decoration: none;
  display: flex;
  align-items:center;

transition: transform 0.2s;


&:hover  {
  transform: translateY(10px);
}


  & + a {
    margin-top:16px;
  }

  img {
    width: 64px;
    height: 65px;
    border-radius:50%;
  }

  div {
    margin: 0 16px;
    flex: 1;

    strong {
      font-size: 20px;
      color:#3D3D4D;
    }
    p {
      font-size: 15px;
      color: #A8A8B3;
      margin-top: 4px;
    }
  }
  svg {   //configuração da setinha
    margin-left:auto;
    color: #CBCBD6;
  }
}

`;
