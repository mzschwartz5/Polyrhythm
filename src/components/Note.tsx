import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface INoteProps {
    imageSrc: ImageSourcePropType,
    height?: number,
    width?: number
}

const Note: React.FunctionComponent<INoteProps> = (props:INoteProps): JSX.Element =>
{
    const {imageSrc} = props;

    return(
        <Image style={styles(props).image} 
            source={imageSrc}
            resizeMode='contain'
        />
    );
}

const styles = (props: INoteProps) => StyleSheet.create({
    image: {
        width: props.width ?? 50,
        height: props.height ?? 50,
        marginBottom: 17
    }
})

export default Note;