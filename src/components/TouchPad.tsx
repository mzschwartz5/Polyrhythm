import { View, StyleSheet} from 'react-native'

interface ITouchPadProps {

}

const TouchPad: React.FunctionComponent<ITouchPadProps> = (props:ITouchPadProps): JSX.Element =>
{
    return(
        <View style={styles.touchPadContainer}>
        </View>
    );
}
export default TouchPad;

const styles = StyleSheet.create({

    touchPadContainer: {
        width: "100%",
        flexGrow: 1,
        flexShrink: 1,
        marginVertical: 10,
        borderRadius: 10,
        backgroundColor: "lightgrey"
    }

})