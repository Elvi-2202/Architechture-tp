
import { CartComponent } from './components/CartComponent'
import { ProductComponent } from './components/ProductComponent'

function App() {
  return (
    <div className="App">
      <h1>Mon Application de Panier</h1>
      <ProductComponent />
      <CartComponent />
    </div>
  )
}

export default App