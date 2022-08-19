import Layout from "../layout/Layout"
import { useEffect, useCallback } from "react"
import useQuiosco from "../hooks/useQuiosco"
import { formatearDinero } from "../helpers";

export default function Total( ) {

     const {pedido, nombre, setNombre, colocarOrden, total} = useQuiosco();

     const comprobarPedido = useCallback(() => {
          return pedido.length === 0 || nombre.length === ''|| nombre.length < 3   
     }, [pedido, nombre]);

     useEffect(() => {
       comprobarPedido();
     }, [pedido, comprobarPedido]);

   


     return  (
          <Layout pagina="total">
               <h1 className='text-4xl font-black'> TOTAL CONFIRMAR PEDIDO </h1>
               <h2 className='text-2xl my-10'>Confirma tu pedido a continuación</h2>

               <form
                    onSubmit={colocarOrden}
               >
                    <div>
                         <label htmlFor="nombre" className="text-slate-800 text-xl font-bold block uppercase">Nombre</label>
                         <input
                              id="nombre"
                              type="text"
                              className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                              value = {nombre}
                              onChange = {(e) => setNombre(e.target.value)}
                         >
                         </input>
                    </div>
                    <div className="mt-10">
                          <p className="text-2xl">Total a Pagar : {''}<span className="font-bold">
                              {formatearDinero(total)} </span></p>
                    </div>

                    <div>
                         <input 
                         type="submit"
                         className={ `${comprobarPedido()? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800" } text-white lg:w-auto w-full mt-5  p-2 
                              rounded-md text-center cursor-pointer `} 
                         value="confimar pedido"
                         disabled={comprobarPedido}
                         />
                    </div>
               </form>
          </Layout>
       
          )
}    