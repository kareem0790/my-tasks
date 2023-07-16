import styled from 'styled-components'

export const TaskListItem = styled.li`
  list-style-type: none;
  background-color: #1a171d;
  display: flex;
  margin-bottom: 10px;
  padding: 5px;
  padding-left: 10px;
  border-radius: 3px;
  padding-right: 10px;
  align-items: center;
  justify-content: space-between;
`

export const TaskItemName = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #f1f5f9;
`
export const TagContainer = styled.div`
  background-color: #f3aa4e;
  padding-left: 10px;
  padding-right: 10px;
  border: none;
  border-radius: 20px;
`

export const TaskItemTag = styled.p`
  color: #475569;
  font-weight: 500;
  font-family: 'Roboto';
  font-size: 12px;
`
