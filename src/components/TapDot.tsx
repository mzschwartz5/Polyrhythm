import { Svg, Circle } from 'react-native-svg';
import { StyleSheet} from 'react-native'


interface ITapDotProps {
    position: number;
    correct: boolean
}

const TapDot: React.FunctionComponent<ITapDotProps> = (props:ITapDotProps): JSX.Element =>
{
    const {correct} = props;
    const fillColor = correct ? 'green' : 'none';
    const strokeColor = correct ? 'green' : 'red';

    return(
        <Svg height="100%" width="5%" style={styles(props).dot}>
            <Circle fill={fillColor} cx="50%" cy="80%" r="5" stroke={strokeColor} strokeWidth={2} />
        </Svg>
    );
}

export default TapDot;

const styles = (props:ITapDotProps) => StyleSheet.create({
    dot: {
        position: 'absolute',
        marginLeft: props.position
    }
})