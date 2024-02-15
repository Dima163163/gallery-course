import {useDispatch, useSelector} from 'react-redux';
import Header from './components/Header';
import {fetchToken} from './store/token/tokenAction';
import {getCodeAuth} from './api/auth';
import {useEffect} from 'react';
import {Main} from './components/Main/Main';
import {Route, Routes} from 'react-router-dom';
import {
  SinglePhoto
} from './components/Main/List/CardItem/SinglePhoto/SinglePhoto';


function App() {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  console.log('tokenAPP: ', token);
  const code = getCodeAuth();
  useEffect(() => {
    if (token) return;
    dispatch(fetchToken());
  }, [code]);

  return (
    <Routes>
      <Route path='/' element={<Header/>}>
        <Route index element={<Main/>} />
        <Route path=':id' element={<SinglePhoto/>}/>
      </Route>
    </Routes>
  );
}

export default App;
