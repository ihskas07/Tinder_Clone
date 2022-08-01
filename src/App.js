import './App.css';
import Header from "./Header";
import Chats from "./Chats";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import { BrowserRouter as Router, Switch, Route,} 
from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route exact path='/chat/:person'>
            <Header backButton='/chat'/>     {/*back to chats from particular chat*/}
            <ChatScreen/>
          </Route>
          <Route exact path='/chat' >
            <Header backButton='/'/>       {/*back to home from msges*/}
            <Chats/>
          </Route>
          <Route exact path='/'>         {/* DEFAULT ROOT SHOULD ALWAYS BE AT THE BOTTOM,   / to /Tinder_Clone */}
            <Header/>
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
