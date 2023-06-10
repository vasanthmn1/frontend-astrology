
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Layout from './layout/Layout'
import { useEffect } from 'react'
import { logoutuser } from './redux/features/AuthSclice'
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const { token } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  useEffect(() => {
    if (token === undefined) {
      dispatch(logoutuser())
    }
  }, [token])
  // console.log(token);
  return (
    <>
      <Layout />
    </>
  )
}

export default App
