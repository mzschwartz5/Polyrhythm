import { View, StyleSheet, Pressable} from 'react-native'
import InputHandler from '../classes/InputHandler';

interface ITouchPadProps {

}

const TouchPad: React.FunctionComponent<ITouchPadProps> = (props:ITouchPadProps): JSX.Element =>
{
    return(
        <View style={styles.touchPadContainer}>
            <Pressable
              onPress={InputHandler.ButtonTapped}
              style={styles.button}
            />
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
        backgroundColor: "lightgrey",
    },

    button: {
        width: "100%",
        flex: 1
    }

})