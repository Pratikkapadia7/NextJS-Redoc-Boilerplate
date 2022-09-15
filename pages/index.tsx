import type {NextPage} from 'next'
import {RedocStandalone} from "redoc";
import openApiObject from "../src/openapi/openapi";

const Home: NextPage = () => {
  return (
    <div>
      <RedocStandalone spec={openApiObject}/>
    </div>
  )
}

export default Home
