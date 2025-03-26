import { CHANGE_SEQ } from "../types";


//Change video sequence
export const changeVideoSeq = (seq) =>({
    type:CHANGE_SEQ,
    payload:seq
})