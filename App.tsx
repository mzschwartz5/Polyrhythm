import { createContext } from "react";
import { StyleSheet, View } from 'react-native';
import MeasureGenerator from "./src/components/MeasureGenerator";
import Metronome from "./src/components/Metronome";
import TouchPad from './src/components/TouchPad';
import { FourFourTime } from "./src/data/TimeSignatures";

const PlaySettings = {
    beatsPerMinute: 100,
    beatsPerMeasure: 4,
    timeSignature: FourFourTime
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
