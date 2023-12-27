import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { InboxStack } from './Routes/InboxStack';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <>
    <StatusBar style="auto" />
    <NavigationContainer>
      <InboxStack />
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