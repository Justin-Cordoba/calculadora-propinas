import { MenuItem, OrderItem } from '../types'
import { formatCurrency } from './helpers'

type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (id: MenuItem['id']) => void
}

const OrderContents = ({ order, removeItem }: OrderContentsProps) => {
  return (
    <div>
      <h2 className='text-4xl font-black'>Consumo</h2>

      <div className='space-y-3 mt-10'>
        {order.map((item) => (
          <div
            key={item.id}
            className='flex justify-between border-t border-gray-300 last-of-type:border-b py-5 items-center'
          >
            <div>
              <p className='text-lg'>
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className='font-black'>
                Cantidad: {item.quantity} -{' '}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              onClick={() => {
                removeItem(item.id)
              }}
              className='w-8 h-8 bg-red-500 rounded-full font-bold text-white'
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderContents
