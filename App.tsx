import { createContext } from "react";
import { StyleSheet, View } from 'react-native';
import MeasureGenerator from "./src/classes/MeasureGenerator";
import Metronome from "./src/components/Metronome";
import TouchPad from './src/components/TouchPad';

const PlaySettings = {
    beatsPerMinute: 60,
    beatsPerMeasure: 4,
}

export const SettingsContext = createContext(PlaySettings);

export default function App() {
  return (
    <SettingsContext.Provider value={PlaySettings} >
      <View style={styles.container}>
        <Metronome/>
        <MeasureGenerator/>
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
