// Write your code here
import './index.css'

const TabItem = props => {
  const {tabId, displayText, activeTab, onNewTabSelection} = props
  const isActiveTab = tabId === activeTab ? 'active-tab1' : ''

  const selectTab = () => {
    onNewTabSelection(tabId)
  }

  return (
    <li className="tab-item-element">
      <button
        onClick={selectTab}
        type="button"
        className={`tab-button ${isActiveTab}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem