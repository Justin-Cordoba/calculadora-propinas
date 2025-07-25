import { useMemo } from 'react'
import { OrderItem } from '../types'
import { formatCurrency } from './helpers'

type OrderTotalsProps = {
  order: OrderItem[]
  tip: number
  placeOrder: () => void
}

const OrderTotals = ({ order, tip, placeOrder }: OrderTotalsProps) => {
  const SubTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  )

  const tipAmount = useMemo(() => SubTotalAmount * tip, [tip, order])

  const totalAmount = useMemo(() => SubTotalAmount + tipAmount, [tip, order])
  return (
    <>
      <div className='space-y-3'>
        <h2 className='font-black text-2xl'> Totales y Propina:</h2>
        <p>
          Subtotal a pagar: {''}
          <span className='font-bold'>{formatCurrency(SubTotalAmount)}</span>
        </p>

        <p>
          Propina: {''}
          <span className='font-bold'>{formatCurrency(tipAmount)}</span>
        </p>

        <p>
          Total a pagar: {''}
          <span className='font-bold'>{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button
        className='w-full p-3 bg-black text-white uppercase mt-10 disabled:opacity-10 rounded-lg'
        disabled={totalAmount === 0}
        onClick={placeOrder}
      >
        Guardar orden
      </button>
    </>
  )
}

export default OrderTotals
