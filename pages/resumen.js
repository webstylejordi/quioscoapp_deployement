import Layout from '../layout/Layout'
import useQuiosco from '../hooks/useQuiosco'
import ResumenProducto from '../components/ResumenProducto'

export default function Resumen( ) {
     const {pedido} = useQuiosco()

     return  (
     <Layout pagina="resumen">
          <h1 className='text-4xl font-black'> RESUMEN </h1>
          <h2 className='text-2xl my-10'>revisa tu pedido</h2>

          {pedido.legth === 0 ? (
               <p className='text-center text-2xl'>no hay elementos en tu pedido</p>
          ) : (
               pedido.map(producto =>(
                    <ResumenProducto
                    key= {producto.id}
                    producto = {producto}
                    />
               ))
          )}
     </Layout>
     
     )
     
}    