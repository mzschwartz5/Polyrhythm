import Measure from '../components/Measure';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../App';

interface IMeasureGeneratorProps {

}

const MeasureGenerator: React.FunctionComponent<IMeasureGeneratorProps> = (props:IMeasureGeneratorProps): JSX.Element =>
{

    const PlaySettings = useContext(SettingsContext);
    const secondsPerMeasure = (PlaySettings.beatsPerMeasure / PlaySettings.beatsPerMinute) * 60;
    const numMeasures = 4;
    const [measureNum, setMeasureNum] = useState(0);
    const [measureState, setMeasureState] = useState<boolean[]>([ // later this will be more than just booleans (all state, including keys)
        true,
        false,
        false,
        false
    ]);

    useEffect(() => {
        setTimeout(updateMeasureState, secondsPerMeasure * 1000);
    },[measureNum])

    const updateMeasureState = () => {
        // Update measure state
        // Increment measure numbers
        setMeasureNum(prev => prev + 1);
    }

    const measures = measureState.map((value, idx) => {
        return(
            <Measure active={value} key={idx + ( measureNum * numMeasures ) }/>
        )
    })

    return(
        <>
            {measures}    
        </>
    );
}

export default MeasureGenerator;