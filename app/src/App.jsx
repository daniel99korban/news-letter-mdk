import './App.css'
import Button from './components/Button';

export default function App() {

  return (
    <div class="container mx-auto bg-red-pink">
      <Button text={"Contecta-se"} event={()=>{alert("Olá")}}/>
    </div>
  )
}
