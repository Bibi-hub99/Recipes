import {RouterProvider} from "react-router-dom"
import routes from './routes'
import ContextAPI from './contextAPI'

function App(){

    return (
    <ContextAPI>
      <RouterProvider router={routes}/>
    </ContextAPI>
    ) 

}

export default App
