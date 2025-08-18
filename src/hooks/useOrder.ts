import { useState } from "react"
import type { MenuItem, OrderItem } from "../types"

export default function useOrder() {
    const [order, setOrder] = useState<OrderItem[]>([]) //Generic
    
    const addItem = (item : MenuItem) => {
        
        const itemExist = order.find(orderItem => orderItem.id === item.id)
        if(itemExist) {
            const updatedOrder = order.map( orderItem => orderItem.id === item.id ? {...orderItem, quantity: orderItem.quantity + 1} : orderItem) // Operador Ternario
        //    const updatedOrder = order.map(orderItem => {
        //        if(orderItem.id === item.id) {
        //            return {...orderItem, quantity: orderItem.quantity + 1}
        //        }
        //        return orderItem
        //    })
           setOrder(updatedOrder)
        } else {
          const newItem = {...item, quantity: 1}
          setOrder([...order, newItem]) // Spread operator
        }
    }

    return {
        order,
         addItem
    }
}