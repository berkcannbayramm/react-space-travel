import Header from './Header'
import { travels } from './Data'
import Travel from './Travel'
import './css/Travel.css'
function App() {

  return (
    <>
    <Header/>
    <div className='travel-main'>
    {
      travels?.map((travel)=>(
          <Travel key={travel.id} travel={travel}/>
      ))
    }
    </div>
    </>
  )
}

export default App
