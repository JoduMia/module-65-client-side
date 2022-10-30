import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Home from "../components/Home";

export const routes = createBrowserRouter(createRoutesFromElements(
    <Route>
        <Route
        index
        element={ <Home /> }
        loader={() => fetch(`https://module-65-server.vercel.app/products`)}
        />
    </Route>
))


//loader je sudhu matro client side fetching kore ebong bar bar client side e request patay na tar ekta boro proman ei site theke payechi....   loader fucnction bebohar kore fetch korer somoy server ekbarei call hoy. But use effect bebohar korle server side onoboroto call jete thake.------- go to home js and see the comment--->