import { ImageSourcePropType } from 'react-native';
import QuarterNoteImage from 'music-notes/QuarterNote.png';
import HalfNoteImage from 'music-notes/HalfNote.png';
import WholeNoteImage from 'music-notes/WholeNote.png';
import EighthNoteImage from 'music-notes/EighthNote.png';
import SixteenthNoteImage from 'music-notes/SixteenthNote.png';

export type Note = {
    duration: number,
    imageSource: ImageSourcePropType
    internalNotes: Note[], // for notes composed of other notes (like triplets)
}

export const QuarterNote: Note = {
    duration: 1/4,
    imageSource: QuarterNoteImage,
    internalNotes: []
}

export const HalfNote: Note = {
    duration: 1/2,
    imageSource: HalfNoteImage,
    internalNotes: []
}

export const WholeNote: Note = {
    duration: 1,
    imageSource: WholeNoteImage,
    internalNotes: []
}

export const EighthNote: Note = {
    duration: 1/8,
    imageSource: EighthNoteImage,
    internalNotes: []
}

export const SixteenthNote: Note = {
    duration: 1/16,
    imageSource: SixteenthNoteImage,
    internalNotes: []
}