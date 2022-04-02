import { StyleSheet, View } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import Note from '../components/Note';
import QuarterNote from 'music-notes/QuarterNote.png';
import TapDot from './TapDot';
import InputHandler from '../classes/InputHandler';
import { useEffect, useState } from 'react';
import { ButtonTapEvent } from '../classes/InputHandler';
import { useContext } from 'react';
import { SettingsContext } from '../../App';

export interface IMeasureProps {
    active: boolean;
}

const Measure: React.FunctionComponent<IMeasureProps> = (props:IMeasureProps): JSX.Element =>
{
    const { active } = props;
    const [tapDots, setTapDots] = useState<number[]>([]); // fractions of measure duration where taps occurred
    const [measureWidth, setMeasureWidth] = useState(0);
    const PlaySettings = useContext(SettingsContext);
    const measureDuration = 1000 * PlaySettings.beatsPerMeasure / (PlaySettings.beatsPerMinute / 60) ; // duration in milliseconds
    
    // On mount, start listening to Input Events; initialize timer. On unmount, stop listening.
    useEffect(() => {
        if (!active) return;

        const activeTime = Date.now();
        const addTapDot = (newDotTime: number) => setTapDots((prev) => [(newDotTime - activeTime) / measureDuration, ...prev]); 

        const subscriptionID = InputHandler.addEventListener(ButtonTapEvent, addTapDot) as string;
        return () => { InputHandler.removeEventListener(subscriptionID)}; 
    }, [active]);

    // Create TapDot elements from the tapDots array of positions
    const TapDots = tapDots.map((percentPosition) => <TapDot position={percentPosition * measureWidth} correct={true} key={percentPosition}/> );

    return(
        <View style={styles.measureContainer}>
            <View style={styles.measure}  onLayout={(event) => setMeasureWidth(event.nativeEvent.layout.width)}>
                <MeasureLine/>
                <View style={styles.noteContainer}>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                </View>
                <View style={styles.inputContainer}>
                    {TapDots}
                </View>
            </View>
        </View>
    );
}
export default Measure;

const MeasureLine = () =>
{
    return(
        <Svg style={styles.measureLine}>
            <Line x1="5%" y1="55%" x2="95%" y2="55%" strokeWidth="2" stroke="#00000033" strokeLinecap='round'/>
        </Svg>
    );
}


const styles = StyleSheet.create({
    measureContainer: {
        width: "100%",
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: .2,
        marginVertical: 5
    },

    measure: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
        backgroundColor: "lightblue"
    },

    measureLine: {
        position: "absolute",
        width: "100%",
        height: "100%"
    },

    noteContainer: {
        height: "100%",
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },

    inputContainer: {
        height: "100%",
        width: "100%",
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        justifyContent: 'flex-start'
    }
})