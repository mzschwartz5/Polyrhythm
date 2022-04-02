import { Note, QuarterNote, HalfNote, EighthNote, WholeNote, SixteenthNote } from "./NoteTypes";

// Mapping a duration time to a set of corresponding notes
// E.g. 0.25 --> quarter note, quarter rest, eighth-note-triplet
const NoteDurationMap = new Map<number, Note[]>([
    [1/4, [QuarterNote]],
    [1/2, [HalfNote]],
    [1, [WholeNote]],
    [1/8, [EighthNote]],
    [1/16, [SixteenthNote]]
]);

export default NoteDurationMap;