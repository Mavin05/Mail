import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { InboxStack } from './Routes/InboxStack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DraftsStack } from './Routes/DraftsStack';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
     <Drawer.Navigator>
      <Drawer.Screen name='Inbox' component={InboxStack}/>
      <Drawer.Screen name='Drafts' component={DraftsStack}/>
     </Drawer.Navigator>
    </NavigationContainer>
    </>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});