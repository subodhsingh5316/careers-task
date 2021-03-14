import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Login from './Component/Auth/Login';
import Home from './Component/View/Home';
import UserList from './Component/View/User/UserList'
import Blog from './Component/View/Blog/Blog'
import Login from './Component/Auth/Login'
import SinglePost from './Component/View/Blog/SingleBlog';
function App() {
  return (
    <div>
      <BrowserRouter>
        <switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/blog' component={Blog} />
          <Route exact path='/userlist' component={UserList} />
          <Route exact path='/blog/:id' component={SinglePost} />
        </switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
