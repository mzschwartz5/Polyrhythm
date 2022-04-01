import { StyleSheet, SafeAreaView, Image, View} from 'react-native';
import MetronomeIcon from '../assets/icons/MetronomeIcon.png';
import { Svg, Circle, Text } from 'react-native-svg';
import { useEffect, useState, useContext } from 'react';
import { SettingsContext } from '../../App';

interface IMetronomeProps {

}

const Metronome: React.FunctionComponent<IMetronomeProps> = (props:IMetronomeProps): JSX.Element =>
{

    const PlaySettings = useContext(SettingsContext);
    const secondsPerBeat = 60 / PlaySettings.beatsPerMinute;

    return(
        <SafeAreaView style={styles.metronomeContainer}>
            <Image 
              source={MetronomeIcon}
              resizeMode='contain'
              style={styles.metronomeImage}
            />
            <CounterDots numDots={PlaySettings.beatsPerMeasure} timePerDot={secondsPerBeat} parentWidth={50} parentHeight={50}/>
        </SafeAreaView>
    );
}
export default Metronome;

interface ICounterDotsProps {
    numDots: number,
    timePerDot: number,
    parentWidth: number,
    parentHeight: number,
}

const CounterDots = (props:ICounterDotsProps): JSX.Element =>
{
    const {numDots, timePerDot, parentWidth, parentHeight} = props;
    const [activeDot, setActiveDot] = useState(0);

    useEffect(() => {
      const intervalID = setInterval(() => setActiveDot(prev => (prev + 1) % numDots), timePerDot * 1000); // milliseconds

      return () => {
        clearInterval(intervalID);
      }
    }, []);
    

    const counters = Array.from({length: numDots}, (x, i) => i + 1).map((num) => {
        const fillColor = (num === (activeDot + 1)) ? 'green' : 'none';

        return (
            <Svg style={styles.dots} key={num}>
                <Circle stroke="black" cx="50%" cy="50%" r="15" strokeWidth={2} fill={fillColor} />
                <Text   fontWeight='bold' fill='black' x={parentWidth/2} y={parentHeight/2} >{num}</Text>
            </Svg>
        )
    });

    return(
        <View style={styles.counterDotsContainer}>
            {counters}
        </View>
    );
}

const styles = StyleSheet.create({
    metronomeContainer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: .2,
        marginVertical: 5,
        flexDirection: 'column',
        alignItems: 'center'
    },

    metronomeImage: {
        height: 50,
        width: 50,
        flex: 1
    },

    counterDotsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
    },

    dots: {
        width: "15%"
    },

    text: {
    }

});

