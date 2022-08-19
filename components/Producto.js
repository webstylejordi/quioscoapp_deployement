 import Image from "next/image"
 import {formatearDinero} from '../helpers'
 import useQuiosco from "../hooks/useQuiosco"

 const Producto = ({producto}) => {
    const {handleSetProducto,handleChangeModal} = useQuiosco()
     const {nombre, imagen, precio } = producto
  return (
    <div className="border p-3">
      <Image 
      src={`/assets/img/${imagen}.jpg`} 
      alt= {`imagen platillo ${nombre}`}
      width={400}
      height={500}
      />
      <div className="p-3">
          <h3 className="font-bold text-2xl">{nombre}</h3>
          <p className="mt-5 font-black text-4xl text-amber-500">
               {formatearDinero(precio)}
          </p>
          <button 
            type="button"
            className="bg-indigo-600 text-white hover:bg-indigo-800 
            w-full uppercase font-bold p-3  mt-5"
            onClick={() => {
              handleChangeModal();
              handleSetProducto(producto);
            } }
          >
            agregar 
          </button>
     </div>
    </div>
  )
}

export default Producto
