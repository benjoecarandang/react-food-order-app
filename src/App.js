import logo from './logo.svg';
import './App.css';
import tw from 'twin.macro'
import Hero from './images/hero.webp'
import Ricemeal from './images/ricemeal.png'
import Header from './components/Layouts/Header';

function App() {
  return (
    <div className="page-wrapper">
        <Header />

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

        <section className="food-list py-10">
            <div className="container mx-auto">
                <h1 className="text-3xl font-light w-6/12 mb-5 leading-15">Hatid App Promo in <span className="font-medium">Manila</span></h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-10 justify-center">
                    <div className="max-w-sm relative bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={Ricemeal} alt="" />
                            <div className="absolute bg-theme-green text-xs font-medium py-1 px-3 text-white top-5 -left-1">Popular</div>
                            <div className="absolute text-xs border-l-4 border-t-4 border-l-transparent border-theme-green font-medium p-1 text-white top-11 -left-1 -z-10"></div>
                        </a>
                        <div className="flex flex-col h-full p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">Kinben - Maceda</h5>
                            </a>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology.</p>
                            
                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="font-medium text-2xl">₱129.00</span>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={Ricemeal} alt="" />
                        </a>
                        <div className="flex flex-col h-full p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">Ray's Hot Chicken</h5>
                            </a>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="font-medium text-2xl">₱249.00</span>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={Ricemeal} alt="" />
                        </a>
                        <div className="flex flex-col h-full p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">Lakko Dessert Beverage</h5>
                            </a>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="font-medium text-2xl">₱149.00</span>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white flex flex-col rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={Ricemeal} alt="" />
                        </a>
                        <div className="flex flex-col h-full p-5">
                            <a href="#">
                                <h5 className="mb-2 text-2xl font-regular tracking-tight text-gray-900 dark:text-white">Lucky Mango F and B</h5>
                            </a>
                            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                            <div className="flex items-center justify-between mt-auto">
                                <div>
                                    <span className="font-medium text-2xl">₱349.00</span>
                                </div>
                                <div>
                                    <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-theme-green rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-theme-orange dark:focus:ring-blue-800">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default App;
