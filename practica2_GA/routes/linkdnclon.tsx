import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import LinkdnClon from "../islands/LinkdnClon.tsx";
import { Job_Data, Jobs } from "../types.ts";


export const handler:Handlers = {
GET: async(_req:Request,ctx:FreshContext<unknown,Jobs>)=>{

  try{
    const response =await fetch(`https://arbeitnow.com/api/job-board-api`); 
    if(response.status !== 200){
      throw new Response ("Ha habido un error obteniendo la API",{status:500}); 
    }

    const data = await response.json();


    return ctx.render(data); 
  }catch(e){
    console.error(e); 
    throw new Response ("Ha habido un error",{status:500}); 
    }
}
}


export default function Home(props:PageProps<Jobs>){
  const data = props.data.data;
  return(
    <LinkdnClon data ={data}/>
  )
}