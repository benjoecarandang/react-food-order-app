import React, {useState} from 'react'
import './App.css'
import Hero from './images/hero.webp'
import Header from './components/Layouts/Header/Header'
import Meals from './components/Layouts/Meals/Meals'
import Cart from './components/Layouts/Cart/Cart'

function App() {
  const [cartIsShow, setCartIsShown] = useState(false)

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Kinben - Maceda',
      description: 'Here are the biggest enterprise technology.',
      price: 129,
      tags: 'Popular',
      location: 'Manila',
      discount: '10',
    }
  ])

  console.log(cartItems.length);

  const showCartHandler = () => {
    setCartIsShown(true)
  }

  const hideCartHandler = () => {
    setCartIsShown(false)
  }

  const addToCart = () => {
    setCartItems(prevCartItems => {
      const newArray = prevCartItems;

      newArray.push({
        id: Math.random() * 100,
        name: 'Kinben - Maceda',
        description: 'Here are the biggest enterprise technology.',
        price: 129,
        tags: 'Popular',
        location: 'Manila',
        discount: '10'
      })

      return newArray;
    })
  }

  return (
    <div className="page-wrapper">
        <Cart
          items={cartItems}
          isShown={cartIsShow} 
          onCloseCart={hideCartHandler}
        />

        <Header onShowCart={showCartHandler} itemCount={cartItems.length}/>

        <section className={`hero h-96 bg-contain bg-no-repeat bg-right-top py-10`} style={{backgroundImage: `url(${Hero})`}}>
            <div className="h-full container mx-auto">
                <div className="h-full flex items-start justify-center flex-col">
                    <h1 className="text-4xl font-light w-6/12 mb-5 leading-15">Food and Grocery Delivery from <span className="font-medium">Manila’s</span> Best Restaurants and Shops</h1>

                    <p className="font-light mb-10">The meals you love, delivered with care</p>

                    <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                        <div className="inline-flex rounded-md shadow">
                          <a href="#" className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-white bg-theme-orange hover:bg-indigo-700"> Get started </a>
                        </div>
                        <div className="ml-3 inline-flex rounded-md shadow">
                          <a href="#" className="inline-flex items-center justify-center px-7 py-3 border border-transparent text-base font-medium rounded-md text-orange-600 bg-white hover:bg-indigo-50"> Learn more </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <Meals items={cartItems} onAddCartItems={addToCart}/>
    </div>
  );
}

export default App;
