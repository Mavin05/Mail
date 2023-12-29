import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppBar from "../components/AppBar";
import Drafts from "../Screens/Drafts";

const Stack = createNativeStackNavigator()

export const DraftsStack =() => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="DraftsScreen" component={Drafts}
            options={{headerTitle: (props) => <AppBar title="Drafts"/>}}/>
        </Stack.Navigator>
    )
}