import { createContext } from "react";
import { StyleSheet, View } from 'react-native';
import Measure from './src/components/Measure';
import Metronome from "./src/components/Metronome";
import TouchPad from './src/components/TouchPad';

const PlaySettings = {
    beatsPerMinute: 60,
    beatsPerMeasure: 4
}

export const SettingsContext = createContext(PlaySettings);

export default function App() {
  return (
    <SettingsContext.Provider value={PlaySettings} >
      <View style={styles.container}>
        <Metronome/>
        <Measure active={true}/>
        <Measure active={false}/>
        <Measure active={false}/>
        <Measure active={false}/>
        <TouchPad/>
      </View>
    </SettingsContext.Provider>
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
