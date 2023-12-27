import { Avatar, Box, ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native";


const Inbox = () => {

    const [mails,setMails] = useState([
        {id: 1, subject: 'Meeting today', content: 'Monthly meeting performance of the first half'},
        {id: 2, subject: 'Interview Invite', content: 'Please join the below link'},
        {id: 3, subject: 'Dec Tour', content: 'Your tour budget has been approved'},
    ]) 
    return ( 
       <Box>
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
      />
  }
        />
       </Box>
     );
}
 
export default Inbox;