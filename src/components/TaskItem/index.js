import {
  TaskListItem,
  TaskItemName,
  TagContainer,
  TaskItemTag,
} from './styledComponents'

const TaskItem = props => {
  const {taskDetails} = props
  const {name, tag} = taskDetails

  return (
    <TaskListItem>
      <TaskItemName>{name}</TaskItemName>

      <TagContainer>
        <TaskItemTag>{tag}</TaskItemTag>
      </TagContainer>
    </TaskListItem>
  )
}

export default TaskItem
