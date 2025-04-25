import {createBrowserRouter} from "react-router-dom"
import {lazy,Suspense} from "react"
import LayOut from './layout'
import Home from "./pages/home"
import SuspenseFallBack from "./components/SuspenseFallback"
import {fetchMeals} from "./http/requests"
const LazyMenu = lazy(()=>import("./pages/menu"))
const LazySearchResults = lazy(()=>import("./pages/search-results"))
const LazyFavorites = lazy(()=>import("./pages/favorites"))
const LazySeeMore = lazy(()=>import("./pages/see-more"))
const LazySelected = lazy(()=>import("./pages/selected"))
const LazyMealName = lazy(()=>import("./pages/mealName"))
const LazyMealArea = lazy(()=>import("./pages/mealArea"))
const LazyMealCategory = lazy(()=>import("./pages/mealCategory"))
const LazyAbout = lazy(()=>import("./pages/about"))
const LazyAboutMission = lazy(()=>import("./pages/mission"))
const LazyAboutVision = lazy(()=>import("./pages/vision"))
const LazyBlog = lazy(()=>import("./pages/blog"))

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
                path:'see-more',
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazySeeMore/>
                    </Suspense>
                ),
                children:[
                    {
                        index:true,
                        element:<h1 className={'text-2xl'}>This would trending page....</h1>
                    },
                    {
                        path:'news',
                        element:<h1 className={'text-2xl'}>This would be news page...</h1>
                    },
                    {
                        path:'notifications',
                        element:<h1 className={'text-2xl'}>This would notifications page...</h1>
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
            },
            {
                path:'see-more/favorites/:id',
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazySelected/>
                    </Suspense>
                ),
                children:[
                    {
                        index:true,
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyMealName/>
                            </Suspense>
                        )
                    },
                    {
                        path:'meal-area',
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyMealArea/>
                            </Suspense>
                        )
                    },
                    {
                        path:'meal-category',
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyMealCategory/>
                            </Suspense>
                        )
                    }
                ]
            },
            {
                path:'about',
                element:(
                    <Suspense fallback={<SuspenseFallBack/>}>
                        <LazyAbout/>
                    </Suspense>
                ),
                children:[
                    {
                        index:true,
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyAboutMission/>
                            </Suspense>
                        )
                    },
                    {
                        path:'vision',
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyAboutVision/>
                            </Suspense>
                        )
                    },
                    {
                        path:'blog',
                        element:(
                            <Suspense fallback={<SuspenseFallBack/>}>
                                <LazyBlog/>
                            </Suspense>
                        )
                    }
                ]
            }
        ]
    },
    {
        path:'*',
        element:<h1 className={'text-3xl'}>404 ERROR Page not Found</h1>
    }
])

export default routes