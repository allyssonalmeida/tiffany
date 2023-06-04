import { createContext, useState, useEffect } from 'react'
import * as uuid from 'uuid'
import PropTypes from 'prop-types'

export const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState({})

  const countItems = () => {
    const initialValue = 0
    const totalItems = cart?.products?.reduce((acc, currentValue) => (acc + currentValue.quantity), initialValue)
    // console.log('totalItems', totalItems)
    return totalItems
  }

  const calculateTotal = () => {
    const initialValue = 0
    const total = cart?.products?.reduce((acc, currentValue) => (acc + currentValue.price * currentValue.quantity), initialValue)
    // console.log('total', total)
    return total
  }


  const initiateCart = () => {
    const storedCart = window.localStorage.getItem('cart') ? JSON.parse(window.localStorage.getItem('cart')) : null
    console.log('Stored Cart: ', storedCart);

    if (storedCart?.orderId) {
      console.log('stored cart found', storedCart?.orderId)
      setCart({ ...storedCart })
    } else {
      console.log('creating a new cart')
      const newCart = {
        orderId: uuid.v4(),
        products: [],
        total: 0
      }
      setCart(newCart)
    }
  }

  const addToCart = (item) => {
    const newCart = { ...cart }
    const existingProduct = newCart?.products?.find(product => product.id === item.id)

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      newCart.products.push({
        id: item.id,
        name: item.name,
        image: item.images[0],
        quantity: 1,
        price: item.price
      })
    }

    newCart.total = calculateTotal()
    setCart(newCart)
  }

  const removeFromCart = (item) => {
    const products = cart.products.filter(product => product.id !== item.id)
    let newCart = {
      ...cart,
      products
    }

    setCart(newCart)
  }

  const placeOrder = () => {
    console.log('Finalizing Cart')
    console.log('Order Info', cart)
    const orders = window.localStorage.getItem('orders') ? JSON.parse(window.localStorage.getItem('orders')) : []
    console.log('Orders', orders)
    orders.push(cart)
    // const newOrders = [...orders, cart]
    console.log('New Orders: ', orders)
    window.localStorage.setItem('orders', JSON.stringify(orders));
    setCart({
      orderId: uuid.v4(),
      products: [],
      total: 0
    })
  }

  useEffect(() => {
    console.log('initializing cart')
    initiateCart()
  }, [])

  useEffect(() => {
    if (cart.orderId) {
      console.log("cart updated: ", cart)
      window.localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])

  return (
    <CartContext.Provider value={{ cart, addToCart, countItems, removeFromCart, placeOrder }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
}
