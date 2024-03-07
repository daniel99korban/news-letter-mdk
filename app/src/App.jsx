import './App.css'
import SendSubscribe from './components/Button'

export default function App() {

  return (
    <>
      <SendSubscribe text={"Contecta-se"} event={()=>{alert("Olá")}}/>
    </>
  )
}
