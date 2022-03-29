import { StyleSheet, View } from 'react-native';
import { Svg, Line } from 'react-native-svg';
import Note from '../components/Note';
import QuarterNote from 'music-notes/QuarterNote.png';
import TapInput from '../components/TapInput';

interface IMeasureProps {

}

const Measure: React.FunctionComponent<IMeasureProps> = (props:IMeasureProps): JSX.Element =>
{

    return(
        <View style={styles.measureContainer}>
            <View style={styles.measure}>
                <MeasureLine/>
                <View style={styles.noteContainer}>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                    <Note imageSrc={QuarterNote} height={50} width={50}/>
                </View>
                <View style={styles.inputContainer}>
                    <TapInput correct={false}/>
                    <TapInput correct={true}/>
                    <TapInput correct={true}/>
                    <TapInput correct={true}/>
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
        justifyContent: 'space-evenly',
        flexWrap: 'nowrap'
    }
})