import {TabListItem, TabButton} from './styledComponents'

const TabItem = props => {
  const {tabDetails, activeTab, onSelectTab} = props
  const {optionId, displayText} = tabDetails

  const onSelectId = () => {
    onSelectTab(optionId)
  }

  return (
    <TabListItem>
      <TabButton bgColor={activeTab === optionId} onClick={onSelectId}>
        {displayText}
      </TabButton>
    </TabListItem>
  )
}

export default TabItem
