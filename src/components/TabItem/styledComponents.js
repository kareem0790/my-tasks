import styled from 'styled-components'

export const TabListItem = styled.li`
  list-style-type: none;
  padding: 0px;
  margin-right: 15px;
`
export const TabButton = styled.button`
  padding: 5px 10px 5px 10px;
  background-color: ${props => (props.bgColor ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  outline: none;
  border-radius: 20px;
  cursor: pointer;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 12px;
`
