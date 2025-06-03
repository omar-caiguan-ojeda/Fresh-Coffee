"use client"
import { useStore } from "@/src/store";
import ProductDetails from "./ProductDetails";
import { useMemo } from "react";
import { formatCurrency } from "@/src/utils";
import { createOrderAction } from "@/actions/create-order-action";

export default function OrderSummary() {

  const order = useStore((state) => state.order);
  const total = useMemo(() => order.reduce((total, item) => total + (item.quantity * item.price), 0), [order]);
  const handleCreateOrder = () => {
    console.log('Desde: handle create order');

    createOrderAction();
  }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">

      <h1 className="text-4xl text-center font-black">
        Mi Pedido
      </h1>

      { order.length === 0 ? (
        <p className="text-center text-2xl mt-10">
          El pedido está vacío
        </p>
      ) : (
        <div className="mt-5">
          { order.map( item => (
            <ProductDetails 
              key={ item.id }
              item={ item }
            />
          )) }

          <p className= "text-2xl font-black mt-20 text-center">
            Total a pagar: {''}
            <span className="text-amber-500 font-bold">{formatCurrency(total)}</span>
          </p>

          <form 
            className="w-full mt-10 space-y-5"
            action={handleCreateOrder}
          >
            <input 
              type="submit"
              className="py-2 rounded uppercase text-white bg-black w-full text-center cursor-pointer font-bold"
              value="Confirmar Pedido"
            />
          </form>
        </div>
      )}

    </aside>
  )
}
