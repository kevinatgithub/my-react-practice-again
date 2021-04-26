import { connect } from 'react-redux';

const mapStateToProps = ({articles}) => {
    return {articles};
};

const ArticleList = ({articles}) => (
    <ul>
        {articles.map(a => (
            <li key={a.id}>{a.title}</li>
        ))}
    </ul>
);

const List = connect(mapStateToProps)(ArticleList);

export default List;