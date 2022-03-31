import { StyleSheet, SafeAreaView, Image, View} from 'react-native';
import MetronomeIcon from '../assets/icons/MetronomeIcon.png';
import { Svg, Circle, Text } from 'react-native-svg';
import React, { useRef } from 'react';

interface IMetronomeProps {

}

const Metronome: React.FunctionComponent<IMetronomeProps> = (props:IMetronomeProps): JSX.Element =>
{

    return(
        <SafeAreaView style={styles.metronomeContainer}>
            <Image 
              source={MetronomeIcon}
              resizeMode='contain'
              style={styles.metronomeImage}
            />
            <CounterDots parentWidth={50} parentHeight={50}/>
        </SafeAreaView>
    );
}
export default Metronome;

interface ICounterDotsProps {
    parentWidth: number,
    parentHeight: number
}

const CounterDots = (props:ICounterDotsProps): JSX.Element =>
{
    const {parentWidth, parentHeight} = props;

    return(
        <View style={styles.counterDotsContainer}>
            {/* TODO - for now, four dots. Later, determined by beatsPerMeasure setting */}
            <Svg style={styles.dots}>
                <Circle stroke="black" cx="50%" cy="50%" r="15" strokeWidth={2} fill='none' />
                <Text fontWeight='bold' fill='black' x={parentWidth/2} y={parentHeight/2} >1</Text>
            </Svg>
            <Svg style={styles.dots}>
                <Circle stroke="black" cx="50%" cy="50%" r="15" strokeWidth={2} fill='none'/>
                <Text fontWeight='bold' fill='black' x={parentWidth/2} y={parentHeight/2} >2</Text>
            </Svg>
            <Svg style={styles.dots}>
                <Circle stroke="black" cx="50%" cy="50%" r="15" strokeWidth={2} fill='none'/>
                <Text fontWeight='bold' fill='black' x={parentWidth/2} y={parentHeight/2} >3</Text>
            </Svg>
            <Svg style={styles.dots}>
                <Circle stroke="black" cx="50%" cy="50%" r="15" strokeWidth={2} fill='none'/>
                <Text fontWeight='bold' fill='black' x={parentWidth/2} y={parentHeight/2} >4</Text>
            </Svg>
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