import { Field as Input, Form as FormWrapper } from 'formik';
import styled from 'styled-components';

export const Form = styled(FormWrapper)`
  width: 100%;
  background-color: blue;
  padding: 12px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Field = styled(Input)`
  height: 30px;
  padding-left: 35px;
`;

export const FormButton = styled.button`
  padding: 0;
  position: absolute;
  left: 5px;
  top: 3px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
