import { Avatar, Box, FAB, Icon, ListItem, Stack, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList, Modal } from "react-native";


const Inbox = ({navigation}) => {

  const [modalOpen, setModalOpen] = useState(false)

    const [mails,setMails] = useState([
        {id: 1, subject: 'Meeting today', content: 'Monthly meeting performance of the first half'},
        {id: 2, subject: 'Interview Invite', content: 'Please join the below link'},
        {id: 3, subject: 'Dec Tour', content: 'Your tour budget has been approved'},
    ]) 

    const handleTap = (item) =>{
      console.log('Tapped')
      console.log(item)
      navigation.push('DetailScreen', {item})
    }

    const handlePress = () => {
      console.log('pressed')
      setModalOpen(!modalOpen)
    }
    return ( 
      <>
       <Box>
        <Modal visible={modalOpen} animationType="slide">
        <Stack fill justify="start" items="center" mt={20}>
        <FAB icon={props => <Icon name="close" {...props}/>} color="primary" onPress={handlePress}/>
       </Stack>
        </Modal>
        <FlatList
        data={mails}
        keyExtractor={(item) => item.id}
        renderItem={({item,index})=> 
        <ListItem
        leadingMode="avatar"
        leading={
          <Avatar image={{ uri: 'https://mui.com/static/images/avatar/1.jpg' }} />
        }
        title={item.subject}
        secondaryText={item.contect}
        onPress={() => handleTap(item)}
      />
  }
        />
       </Box>
       <Stack fill justify="start" items="center" mt={20}>
        <FAB icon={props => <Icon name="plus" {...props}/>} 
        color="primary" onPress={handlePress}/>
       </Stack>
       </>
     );
}
 
export default Inbox;