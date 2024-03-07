import './App.css'
import SendSubscribe from './components/Button'

export default function App() {

  return (
    <div class="container mx-auto bg-red-pink">
      <SendSubscribe text={"Contecta-se"} event={()=>{alert("Olá")}}/>
    </div>
  )
}
