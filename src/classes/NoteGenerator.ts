import { TimeSignature } from "../data/TimeSignatures";
import NoteDurationMap from "../data/NoteDurationMap";
import { Note } from "../data/NoteTypes";

class NoteGenerator {
    timeSignature: TimeSignature;
    noteDurations: number[] = [1, 1/2, 1/4, 1/8, 1/16];

    constructor(timeSignature: TimeSignature) {
        this.timeSignature = timeSignature;
    }

    generate(): Note[] { 
        let remainingDuration = this.timeSignature.upper; // remaining duration starts at the measure duration (given by the time signature)
        const scaledNoteDurations: number[] = this.noteDurations.map(val => val * this.timeSignature.lower); // scale note duratiosn by the time signature denominator
        const generatedNotes: Note[] = [];

        // Grab notes to fill up the measure
        while (remainingDuration > 0) {
            // Get a random note duration
            const validNoteDurations = scaledNoteDurations.filter((val) => val <= remainingDuration);
            const randomDurationIndex = Math.floor(Math.random() * validNoteDurations.length); 
            const randomDuration = validNoteDurations[randomDurationIndex];

            // Get a random note (of the duration chosen above)
            const validNotes = NoteDurationMap.get(randomDuration / this.timeSignature.lower);
            if (!validNotes) throw new Error("No valid notes available - something went wrong");
            const randomNoteIndex = Math.floor(Math.random() * validNotes.length);
            const randomNote = validNotes[randomNoteIndex];

            // Append result to output and update tracking vars
            generatedNotes.push(randomNote);
            remainingDuration -= randomDuration;
        }

        return generatedNotes;
    }

}

export default NoteGenerator;