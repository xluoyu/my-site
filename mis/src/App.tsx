import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import Login from './views/Login'
import Index from './views/Index'
import DefaultLayout from './layout/index'
import Routes from './routers';

function App() {

  return (
    <RecoilRoot>
      <Routes />
    </RecoilRoot>
  )
}

export default App
