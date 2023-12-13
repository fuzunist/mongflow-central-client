
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import './assets/css/globals.css'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'
import store from './store'
import './i18n'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
        <RouterProvider router={routes} />
</Provider>
)

// window.addEventListener("beforeunload", () => {
//         console.log("beforeunload", location.pathname);
      
//         sessionStorage.setItem(
//           "beforePathname",
//           location.pathname === "/" ? "/dashboard" : location.pathname
//         );
//       });
      
      