import { createContext, useState } from "react"
import Sessions from './Sessions';
import { SpeakerInfo } from "./Speakers";

export const ConferenceContext = createContext({});

const Conferences = () => {
    const [current,setCurrent] = useState(null);

    return (
        <ConferenceContext.Provider value={{setCurrent}}>
            {current === null && <Sessions />}
            {current !== null && <SpeakerInfo speaker={current}  />}
        </ ConferenceContext.Provider>
    );
};

export default Conferences;