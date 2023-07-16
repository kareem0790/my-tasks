import styled from 'styled-components'

export const AppContainer = styled.div`
  height: 100vh;
  display: flex;
`

export const LeftContainer = styled.div`
  width: 40%;
  background-size: cover;
  background-color: #131213;
  padding: 20px;
`
export const RightContainer = styled.div`
  width: 60%;
  background-color: #000000;
  background-size: cover;
  padding: 20px;
`
export const TaskHeading = styled.h1`
  font-family: 'Roboto';
  padding-top: 40px;
  font-size: 28px;
  color: #f3aa4e;
  font-weight: 600;
  text-align: center;
`
export const FormContainer = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
`
export const InputContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
`
export const TaskLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  margin-bottom: 10px;
  color: #f1f5f9;
  font-weight: 500;
`
export const TaskInput = styled.input`
  height: 40px;
  font-size: 16px;
  outline: none;
  border-radius: 3px;
  padding: 10px;
  background-color: #f1f5f9;
`
export const SelectContainer = styled.select`
  height: 40px;
  padding: 10px;
  font-size: 16px;
  outline: none;
`

export const OptionLabel = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
  font-weight: 500;
  margin-bottom: 10px;
`

export const Option = styled.option`
  background-color: #f1f5f9;
  padding: 10px;
  font-size: 16px;
  height: 40px;
`
export const AddTaskButton = styled.button`
  background-color: #f3aa4e;
  border: none;
  outline: none;
  font-size: 16px;
  color: #f8f8f8;
  padding: 8px 16px 8px 16px;
  align-self: center;
  border-radius: 8px;
  cursor: pointer;
`
export const TagsTabHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
`
export const TagsTabListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: center;
`
export const TasksHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
`
export const TaskListContainer = styled.ul`
  padding-left: 0px;
  display: flex;
  flex-direction: column;
`
export const NoTaskContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
`
export const NoTaskHeading = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ffffff;
  font-weight: 600;
`
