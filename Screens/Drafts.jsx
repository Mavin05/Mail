import { ListItem, Text } from "@react-native-material/core";
import { useState } from "react";
import { FlatList } from "react-native-gesture-handler";

const Drafts = () => {

    const [mails,setMails] = useState([
        {id: 1, subject: 'Meeting today', content: 'Monthly meeting performance of the first half'},
        {id: 2, subject: 'Interview Invite', content: 'Please join the below link'},
        {id: 3, subject: 'Dec Tour', content: 'Your tour budget has been approved'},
    ]);

    return ( 
        <FlatList
        data={mails}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ListItem title={item.subject}/>}
        />
     );
}
 
export default Drafts;