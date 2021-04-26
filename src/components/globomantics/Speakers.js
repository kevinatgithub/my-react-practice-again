import {gql, useQuery } from '@apollo/client';

const SPEAKERS = gql`
    query speakers {
        speakers {
            id
            name
            bio
            sessions {
                id
                title
            }
        }
    }
`;

const SpeakerList = () => {

    const { loading, error, data} = useQuery(SPEAKERS);

    if (loading) return <p>Loading...</p>;

    if (error) return <p>Error loading speakers...</p>;



    return data.speakers.map(speaker => <Speaker speaker={speaker} />);
}

const SPEAKER_SESSIONS = gql`
    query speaker($id: ID!) {
        info : speakerById(id : $id) {
            id
            name
            bio
            sessions {
                id
                title
            }
        }
    }
`;

export const SpeakerInfo = ({speaker}) => {
    const {loading, error, data} = useQuery(SPEAKER_SESSIONS,{
        variables: {id: speaker}
    });

    if (loading) return <p>Loading..</p>;

    if (error) return <p>Error Loading Speaker Info... {JSON.stringify(error)}</p>;

    return <Speaker speaker={data.info} />
}

const Speaker = ({speaker}) => {
    const {id, name, bio, sessions} = speaker;
    return (
        <div key={id} className="col-xs-12 col-sm-6 col-md-6" style={{padding:5}}>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <div className="panel-title">Speaker: {name}</div>
                </div>
                <div className="panel-body">
                    <h5>Bio: {bio}</h5>
                </div>
                <div className="panel-footer">
                    <h3 className="panel-title">Sessions</h3>
                    {sessions.map(s => <div key={s.id}>{s.title}</div>)}
                </div>
            </div>
        </div>
    );
};

const Speakers = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <SpeakerList />
                </div>
            </div>
        </>
    );
};

export default Speakers;