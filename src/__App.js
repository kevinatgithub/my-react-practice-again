import { Provider } from 'react-redux';
import store from './store/index';
import List from './components/articles/List';
import Form from './components/articles/Form';
import Crud from './components/crud/Crud';
import Test from './components/thunk/Test';
// import List from './components/crud/List';
// const emps =[
//     {id : 1, name:'Kevin Cainday'},
//     {id : 2, name:'James Anderson'}
// ];
const App = () => (
    <Provider store={store}>
        <div>
            <h2>Articles</h2>
            <List />
            <List />
        </div>
        <div>
            <h2>Add a new article</h2>
            <Form />
        </div>
        <div>
            <h2>CRUD</h2>
            <Crud />
        </div>
        <div>
            <Test />
        </div>
    </Provider>);

export default App;