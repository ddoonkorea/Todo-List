import {Image} from 'react-native'

const TabBarIcon = (focused,name) => {
  let iconImagePath;
  if(name ==="InCompleted") {
    iconImagePath = require('../assets/NonCheck.png')
  }else if(name ==="Completed") {
    iconImagePath = require('../assets/Check.png')
  }
  
return(
  <Image style = {{
    width: focused ? 24:20,
    height: focused ? 24:20
  }}
  source = {iconImagePath}
  />
)
}

export default TabBarIcon