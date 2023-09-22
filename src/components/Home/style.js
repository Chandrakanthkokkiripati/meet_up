import styled from 'styled-components'

export const HomeBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'roboto';
  min-height: 70vh;
`

export const HomeHeading = styled.h1`
  color: ${props => (props.isRegistered ? '#3b82f6' : '#334155')};
  font-size: 47px;
  margin-bottom: 0;
`
export const HomeDescription = styled.p`
  color: #64748b;
  font-size: 26px;
`
export const RegisterButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  width: 100px;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
`
export const Img = styled.img`
  width: 500px;
  height: 500px;
`
