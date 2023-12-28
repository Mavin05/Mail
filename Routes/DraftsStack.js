import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator()

export const DraftsStack =() => {

    return (
        <Stack.Navigator>
            <Stack.Screen name="DraftsScreen" component={Drafts}/>
        </Stack.Navigator>
    )
}