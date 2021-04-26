import './Sessions.css';
import { gql, useQuery } from '@apollo/client';
import { useContext, useState } from 'react';
import { Button } from '../context/Graphics';
import { ConferenceContext } from './Conferences';

const SESSIONS = gql`
    query sessions($day: String!) {
        sessions(day: $day) {
            id
            title
            day
            room
            level
            speakers {
                id
                name
            }
        }
    }
`;

const SessionList = ({day = 'Wednesday'}) => {
    const { loading, error, data } = useQuery(SESSIONS, {
        variables : {
            day
        }
    });

    if (error) return <p>Error loading message!</p>;

    if (loading){
        return <p>Loading Sessions.</p>;
    }

    return data.sessions.map(session => 
        <SessionItem 
        key={session.id}
        session={{...session}} />
    );
};

const SessionItem = ({session}) => {
    const {setCurrent} = useContext(ConferenceContext);
    return (
        <div className="col-xs-12 col-sm-6" style={{padding:5}}>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{session.title}</h3>
                </div>
                <div className="panel-body">
                    <h5>Day: {session.day}</h5>
                    <h5>Room Number: {session.room}</h5>
                    <h5>Level: {session.level}</h5>
                </div>
                <div className="panel-footer">
                    <ul>
                        {session.speakers.map(s => (
                            <li key={s.id} onClick={() => setCurrent(s.id)}>{s.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
} 
const Sessions = () => {
    const [day,setDay] = useState("");
    return (
        <>
            {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossOrigin="anonymous" /> */}
            <section className="banner">
                <div className="container">
                    <div className="row">
                        <Button onClick={() => setDay("Wednesday")}>Wednesday</Button>
                        <Button onClick={() => setDay("Thursday")}>Thursday</Button>
                        <Button onClick={() => setDay("Friday")}>Friday</Button>
                    </div>
                    <SessionList day={day} />
                </div>
            </section>
        </>
    )
};
export default Sessions;