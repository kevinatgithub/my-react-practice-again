import { useState } from 'react';
import {connect} from 'react-redux';
import {addArticle} from '../../actions/index';

const mapDispatchToProps = dispatch => {
    return {
        addArticle: article => dispatch(addArticle(article))
    };
};

const ArticleForm = ({addArticle}) => {
    const [title, setTitle] = useState("");
    const handleSubmit = e => {
        e.preventDefault();
        addArticle(title);
        setTitle("");
    };
    return (
        <form action="" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">New Article</label>
                <input style={{marginLeft:15}} type="text" value={title} onChange={e => setTitle(e.target.value)}/></div>
                <button type="submit">Save</button>
        </form>
    );
};

const Form = connect(null, mapDispatchToProps)(ArticleForm);

export default Form;