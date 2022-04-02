import Measure, { IMeasureProps } from './Measure';
import { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../../App';
import NoteGenerator from '../classes/NoteGenerator';


interface IMeasureGeneratorProps {

}

interface IMeasureState extends IMeasureProps {
    id: number
}

const MeasureGenerator: React.FunctionComponent<IMeasureGeneratorProps> = (props:IMeasureGeneratorProps): JSX.Element =>
{

    const PlaySettings = useContext(SettingsContext);
    const noteGenerator = new NoteGenerator(PlaySettings.timeSignature);
    const secondsPerMeasure = (PlaySettings.beatsPerMeasure / PlaySettings.beatsPerMinute) * 60;
    const [measureState, setMeasureState] = useState<IMeasureState[]>([ 
        {active: true, id: 1, notes: noteGenerator.generate()},
        {active: false, id: 2, notes: noteGenerator.generate()},
        {active: false, id: 3, notes: noteGenerator.generate()},
        {active: false, id: 4, notes: noteGenerator.generate()},
    ]);
    

    useEffect(() => {
        const timer = setInterval(updateMeasureState, secondsPerMeasure * 1000);
        return () => clearInterval(timer);
    },[])

    const updateMeasureState = () => {
        setMeasureState((prev) => {
            const nextMeasureState: IMeasureState = { active: true, id: prev[1]!.id, notes: prev[1]!.notes };
            const newMeasureState: IMeasureState = { active: false, id: prev[3]!.id + 1, notes: noteGenerator.generate()};

            return [nextMeasureState, ...prev.slice(2,4), newMeasureState];
        });
    }


    const measures = measureState.map((value, idx) => <Measure active={value.active} key={value.id} notes={value.notes}/> );

    return(
        <>
            {measures}    
        </>
    );
}


export default MeasureGenerator;