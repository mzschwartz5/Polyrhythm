import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Measure from './src/components/Measure';
import TouchPad from './src/components/TouchPad';

export default function App() {
  return (
    <View style={styles.container}>
      <Measure/>
      <Measure/>
      <Measure/>
      <Measure/>
      <TouchPad/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingVertical: 15,
  }
});
