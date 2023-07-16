import {Component} from 'react'

import {v4} from 'uuid'

import TabItem from '../TabItem'
import TaskItem from '../TaskItem'

import {
  AppContainer,
  LeftContainer,
  RightContainer,
  TaskHeading,
  FormContainer,
  TaskLabel,
  TaskInput,
  SelectContainer,
  OptionLabel,
  Option,
  AddTaskButton,
  TagsTabHeading,
  InputContainer,
  TagsTabListContainer,
  TasksHeading,
  TaskListContainer,
  NoTaskContainer,
  NoTaskHeading,
} from './styledComponents'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class MyTasks extends Component {
  state = {
    taskInput: '',
    optionId: tagsList[0].optionId,
    taskList: [],
    selectedTabId: '',
  }

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {taskInput, optionId} = this.state
    const newTask = {
      id: v4(),
      name: taskInput,
      tag: optionId,
    }

    this.setState(prevState => ({
      taskList: [...prevState.taskList, newTask],
      taskInput: '',
      optionId: tagsList[0].optionId,
    }))
  }

  onSelectTab = id => {
    const {selectedTabId} = this.state

    if (id === selectedTabId) {
      this.setState({selectedTabId: ''})
    } else {
      this.setState({selectedTabId: id})
    }
  }

  onChangeSelectedOptionId = event => {
    this.setState({optionId: event.target.value})
  }

  noTaskView = () => (
    <NoTaskContainer>
      <NoTaskHeading>No Tasks Added Yet</NoTaskHeading>
    </NoTaskContainer>
  )

  render() {
    const {taskInput, selectedTabId, optionId, taskList} = this.state
    const filterList = taskList.filter(eachItem =>
      eachItem.tag.includes(selectedTabId),
    )

    return (
      <AppContainer>
        <LeftContainer>
          <TaskHeading>Create a task!</TaskHeading>
          <FormContainer onSubmit={this.onSubmitForm}>
            <InputContainer>
              <TaskLabel htmlFor="task">Task</TaskLabel>
              <TaskInput
                type="text"
                id="task"
                value={taskInput}
                onChange={this.onChangeTaskInput}
                placeholder="Enter the task here"
              />
            </InputContainer>

            <InputContainer>
              <OptionLabel htmlFor="tags">Tags</OptionLabel>
              <SelectContainer
                value={optionId}
                onChange={this.onChangeSelectedOptionId}
              >
                {tagsList.map(eachTag => (
                  <Option
                    key={eachTag.optionId}
                    id="tags"
                    value={eachTag.optionId}
                  >
                    {eachTag.displayText}
                  </Option>
                ))}
              </SelectContainer>
            </InputContainer>
            <AddTaskButton type="submit">Add Task</AddTaskButton>
          </FormContainer>
        </LeftContainer>
        <RightContainer>
          <TagsTabHeading>Tags</TagsTabHeading>
          <TagsTabListContainer>
            {tagsList.map(eachTab => (
              <TabItem
                key={eachTab.optionId}
                tabDetails={eachTab}
                activeTab={selectedTabId}
                onSelectTab={this.onSelectTab}
              />
            ))}
          </TagsTabListContainer>
          <TasksHeading>Tasks</TasksHeading>
          {filterList.length > 0 ? (
            <TaskListContainer>
              {filterList.map(eachTask => (
                <TaskItem key={eachTask.id} taskDetails={eachTask} />
              ))}
            </TaskListContainer>
          ) : (
            this.noTaskView()
          )}
        </RightContainer>
      </AppContainer>
    )
  }
}

export default MyTasks
