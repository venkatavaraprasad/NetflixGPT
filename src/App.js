import Body from "./components/Body";
import {Provider} from 'react-redux'
import appstore from "./components/utilies/appstore";


function App() {
  
  return (
    <div >
       <Provider store={appstore}>
         <Body/>
       </Provider>
    </div>
  );
}

export default App;
