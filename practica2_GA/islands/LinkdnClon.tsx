import { FunctionComponent } from "https://esm.sh/v128/preact@10.19.2/src/index.js";
import { Job_Data } from "../types.ts";

type Jobs = {
  data:Job_Data[];
}

const LinkdnClon:FunctionComponent<Jobs> = (props) => {

const {data} = props;

return (
<>
  <div>
  <h2>Empleos encontrados</h2>
  <p>Explora empleos dentro de tu network</p>
    {data.map((elem)=>{
      return(
      <>
        <div class="columnaizq">
          <div class = "card">
          <h3>{elem.title}</h3><br/>
          <p>{elem.company_name}</p><br/>
          <p>{elem.location}</p>
          <p>{elem.remote}</p>
          <p>{elem.tags}</p>
          </div>
          <button onClick={() => window.open(elem.url)}>Solicitar</button>
          <div class ="columnadrch">
          <p>{elem.description}</p>
          </div>
        </div>
      
      </>);
    })}
  </div>
</>

)
}

export default LinkdnClon;