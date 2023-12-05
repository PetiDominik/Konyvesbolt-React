import { PRODUCTS } from './products';
import './App.css';

import Products from './compnents/Products';


function App() {

    function clicked(id) {
        console.log(id);
    }
    return (
        <div className="App">
            <header>
                <h1>Könyvesbolt</h1>
            </header>
            <article>
                <Products productDatas={PRODUCTS} clickEvent={clicked}/>
            </article>
        </div>
    );
}

export default App;
