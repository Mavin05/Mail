import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inbox from "../Screens/Inbox";
import Details from "../Screens/Details";

const Stack = createNativeStackNavigator ()

export const InboxStack = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="InboxScreen" component={Inbox}/>
            <Stack.Screen name="DetailScreen" component={Details}/>
        </Stack.Navigator> 
    )
}