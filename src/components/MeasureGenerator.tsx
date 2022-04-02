import Measure, { IMeasureProps } from './Measure';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../App';

interface IMeasureGeneratorProps {

}

interface IMeasureState extends IMeasureProps {
    id: number
}

const MeasureGenerator: React.FunctionComponent<IMeasureGeneratorProps> = (props:IMeasureGeneratorProps): JSX.Element =>
{

    const PlaySettings = useContext(SettingsContext);
    const secondsPerMeasure = (PlaySettings.beatsPerMeasure / PlaySettings.beatsPerMinute) * 60;
    const [measureState, setMeasureState] = useState<IMeasureState[]>([ 
        {active: true, id: 1},
        {active: false, id: 2},
        {active: false, id: 3},
        {active: false, id: 4},
    ]);
    

    useEffect(() => {
        const timer = setInterval(updateMeasureState, secondsPerMeasure * 1000);
        return () => clearInterval(timer);
    },[])

    const updateMeasureState = () => {
        setMeasureState((prev) => {
            const nextMeasureState: IMeasureState = { active: true, id: prev[1]!.id };
            const newMeasureState: IMeasureState = { active: false, id: prev[3]!.id + 1 };

            return [nextMeasureState, ...prev.slice(2,4), newMeasureState];
        });
    }


    const measures = measureState.map((value, idx) => <Measure active={value.active} key={value.id}/> );

    return(
        <>
            {measures}    
        </>
    );
}


export default MeasureGenerator;