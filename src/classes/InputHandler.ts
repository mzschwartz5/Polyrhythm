import { EventRegister } from 'react-native-event-listeners'

class InputHandler extends EventRegister {

    public static ButtonTapped = () => {
        this.emitEvent(ButtonTapEvent, Date.now());
    }

}

export const ButtonTapEvent = "ButtonTapped";

export default InputHandler;
