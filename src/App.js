import React, { Component } from 'react';
import { Switch, Route, Router } from 'react-router-dom'
import asyncComponent from './components/AsyncComponent';
import history from './components/layout/history';
const AsyncSignIn = asyncComponent(() => import('./components/auth/SignIn'));
const AsyncSignUp = asyncComponent(() => import('./components/auth/SignUp'));
const AsyncButtonAppBar = asyncComponent(() => import('./components/layout/ButtonAppBar'));
const AsyncEventList = asyncComponent(() => import('./components/event/EventList'));
const AsyncCreateEventForm = asyncComponent(() => import('./components/event/CreateEvent/CreateEventForm'));
const AsyncFooter = asyncComponent(() => import('./components/layout/Footer'));
const AsyncMainBoard = asyncComponent(() => import('./components/mainboard/MainBoard'));
const AsyncEventBoard = asyncComponent(() => import('./components/event/EventBoard'));
const AsyncAreaBoard = asyncComponent(() => import('./components/area/AreaBoard'));
const AsyncCreateAreaForm = asyncComponent(() => import('./components/area/CreateArea/CreateAreaForm'));
const AsyncNotFoundPage = asyncComponent(() => import('./components/layout/NotFoundPage'));
const AsyncAreaList = asyncComponent(() => import('./components/area/AreaList'));
const AsyncScrollToTop = asyncComponent(() => import('./components/layout/ScrollToTop'));
const AsyncNewsBoard = asyncComponent(() => import('./components/news/NewsBoard'));
const AsyncNewsList = asyncComponent(() => import('./components/news/NewsList'));
const AsyncUser = asyncComponent(() => import('./components/user/User'));
const AsyncFeedback = asyncComponent(() => import('./components/about/Feedback'));
const AsyncAbout = asyncComponent(() => import('./components/about/About'));
const AsyncSettings = asyncComponent(() => import('./components/about/Settings'));

class App extends Component {
  render() {
    return (
      <Router history={history}>
      <AsyncScrollToTop>
        <div className="App">
          <AsyncButtonAppBar />
          <Switch>
            <Route exact path='/' component={AsyncMainBoard} />
            <Route path='/login' component={AsyncSignIn} />
            <Route path='/signup' component={AsyncSignUp} />
            <Route exact path='/events' component={AsyncEventList} />
            <Route path='/events/create' component={AsyncCreateEventForm} />
            <Route path='/events/:id' component={AsyncEventBoard} />
            <Route exact path='/areas' component={AsyncAreaList} />
            <Route path='/areas/create' component={AsyncCreateAreaForm} />
            <Route path='/areas/:id' component={AsyncAreaBoard} />
            <Route path='/404' component={AsyncNotFoundPage}/>
            <Route path='/news/:id' component={AsyncNewsBoard}/>
            <Route exact path='/news' component={AsyncNewsList}/> 
            <Route path='/user' component={AsyncUser}/>
            <Route path="/feedback" component={AsyncFeedback} />
            <Route path='/about' component={AsyncAbout}/>
            <Route path='/settings' component={AsyncSettings}/>
          </Switch>
          <AsyncFooter />
        </div>
        </AsyncScrollToTop>
      </Router>
    );
  }
}

export default App;
