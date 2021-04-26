import { connect } from "react-redux";
import { getData } from "../../actions";

const ConnectedTest = ({theData, getData}) => {

    const handleClick = () => {
        getData("test");
    };

    return <div>
                {JSON.stringify(theData)} <br/>
                <button onClick={handleClick}>Get Data</button>
            </div>;
};

const mapStateToProps = ({theData}) => {
    return {
        theData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getData : payload => dispatch(getData(payload))
    };
}

const Test = connect(mapStateToProps,mapDispatchToProps)(ConnectedTest);

export default Test;