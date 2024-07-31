import './App.css'
import Body from './component/Body/Body'
import Navbar from './component/Header/Navbar'




function App() {

  return (
    <>
      <div>
        <div><Navbar /></div>
        {/* <div><SearchYourCity /></div>
        <div ><DatePicker /></div> */}
       <Body />

        
      </div>
    </>
  )
}

export default App
