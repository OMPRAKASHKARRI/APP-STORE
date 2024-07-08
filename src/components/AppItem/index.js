// Write your code here
import './index.css'

const AppItem = props => {
  const {appData} = props
  const {appName, imageUrl} = appData

  return (
    <li className="app-item1">
      <img className="app-image1" src={imageUrl} alt={appName} />
      <p className="app-name-para1">{appName}</p>
    </li>
  )
}
export default AppItem