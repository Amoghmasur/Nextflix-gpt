import { Provider } from 'react-redux';
import Body from './component/Body';
import appStore from './utils/appStore';

function App() {
  return (
    <div className="">
      <Provider store={appStore}>
      <Body/>
      </Provider>
    </div>
  );
}

export default App;
