import {createBrowserRouter} from "react-router-dom"
import {lazy,Suspense} from "react"
import LayOut from './layout'
import Home from "./pages/home"
import SuspenseFallBack from "./components/SuspenseFallback"
import {fetchMeals} from "./http/requests"
const LazyMenu = lazy(()=>import("./pages/menu"))
const LazySearchResults = lazy(()=>import("./pages/search-results"))
const LazyFavorites = lazy(()=>import("./pages/favorites"))

const routes = createBrowserRouter([
    {
        path:'/',
        element:<LayOut/>,
        children:[
            {
                index:true,
                element:<Home/>   
            },
            {
                path:'menu',
                loader:fetchMeals,
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazyMenu/>
                    </Suspense>
                )
            },
            {
                path:'search-results',
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazySearchResults/>
                    </Suspense>
                )
            },
            {
                path:'favorites',
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazyFavorites/>
                    </Suspense>
                )
            }
        ]
    }
])

export default routes