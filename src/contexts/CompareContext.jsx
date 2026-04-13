import { createContext, useContext, useState } from 'react'

const CompareContext = createContext(null)
const MAX = 3

export function CompareProvider({ children }) {
  const [items, setItems] = useState([]) // array of product objects

  function toggle(product) {
    setItems((prev) => {
      const already = prev.find((p) => p.id === product.id)
      if (already) return prev.filter((p) => p.id !== product.id)
      if (prev.length >= MAX) return prev // silently cap at MAX
      return [...prev, product]
    })
  }

  function isSelected(productId) {
    return items.some((p) => p.id === productId)
  }

  function clear() {
    setItems([])
  }

  return (
    <CompareContext.Provider value={{ items, toggle, isSelected, clear, MAX }}>
      {children}
    </CompareContext.Provider>
  )
}

export function useCompare() {
  return useContext(CompareContext)
}
