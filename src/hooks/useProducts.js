import { useState, useEffect } from 'react'
import { getProducts } from '../services/products'

export function useProducts(filters = {}) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    async function fetchProducts() {
      setLoading(true)
      setError(null)
      try {
        const data = await getProducts(filters)
        if (!cancelled) setProducts(data)
      } catch (err) {
        if (!cancelled) setError(err.message)
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchProducts()
    return () => { cancelled = true }
  }, [JSON.stringify(filters)])

  return { products, loading, error }
}
