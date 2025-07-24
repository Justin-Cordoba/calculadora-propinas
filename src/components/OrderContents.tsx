import { OrderItem } from '../types'

type OrderContentsProps = {
  order: OrderItem[]
}

const OrderContents = ({ order }: OrderContentsProps) => {
  return (
    <div>
      <h2 className='text-4xl font-black'>Consumo</h2>

      <div className='space-y-3 mt-5'>
        {order.length === 0 ? <p className='text-center'>La orden esta vacía</p> : <p className='text-center'>Tenemos algo</p>}
      </div>
    </div>
  )
}

export default OrderContents
