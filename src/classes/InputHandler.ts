import { EventRegister } from 'react-native-event-listeners'

class InputHandler extends EventRegister {

    public static ButtonTapped = () => {
        const time = 1; // TODO - replace with real concept of time (maybe need a timer object?)
        this.emitEvent(ButtonTapEvent, time);
    }

}

export const ButtonTapEvent = "ButtonTapped";

export default InputHandler;
