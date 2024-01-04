import {
    DrawerContentScrollView,
    DrawerItem,
    DrawerItemList,
  } from '@react-navigation/drawer';
  import Ionicons from "@expo/vector-icons/Ionicons"
  
  function CustomDrawerContent(props) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label= "Trash" icon={() => <Ionicons 
        name="ios-trash-outline" size={24} color= "black"/>}/>
          <DrawerItem label= "Sent" icon={() => <Ionicons 
        name="send" size={24} color= "black"/>}/>
      </DrawerContentScrollView>
    );
  }

  export default CustomDrawerContent;