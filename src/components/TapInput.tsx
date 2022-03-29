import { Svg, Circle } from 'react-native-svg';
import { StyleSheet} from 'react-native'


interface ITapInputProps {
    correct: boolean
}

const TapInput: React.FunctionComponent<ITapInputProps> = (props:ITapInputProps): JSX.Element =>
{
    const {correct} = props;
    const fillColor = correct ? 'green' : 'none';
    const strokeColor = correct ? 'green' : 'red';

    return(
        <Svg height="100%" width="100%" style={styles.dot}>
            <Circle fill={fillColor} cx="50%" cy="80%" r="5" stroke={strokeColor} strokeWidth={2} />
        </Svg>
    );
}

export default TapInput;

const styles = StyleSheet.create({
    dot: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: .2
    }
})