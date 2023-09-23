import { IProduct } from "@/interfaces/products";
import { API } from "@/services/api";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

interface IProductsContext {
  products: IProduct[],
  toggleFavoriteById: (id: string) => void,
  toggleFilterByFavorite: () => void
}

const productsContext = createContext<IProductsContext>({} as IProductsContext)

export function ProductsProvider({ children }: { children: React.ReactNode }) {

  const [products, setProducts] = useState<IProduct[]>([])
  const [filterByFavorite, setFilterByFavorite] = useState<boolean>(false)

  useEffect(() => {
    API.getProducts().then(response => {
      setProducts(response)
    })
  }, [])

  const toggleFavoriteById = (id: string) => {
    const newProducts = products.map(product => {
      if (product.id !== id) return product
      return {
        ...product,
        favorited: !product.favorited,
        lastFavoritedUpdate: new Date().getTime()
      }
    })
    setProducts(newProducts)
  }

  const toggleFilterByFavorite = () => {
    setFilterByFavorite(prev => !prev)
  }

  const filteredProducts = useMemo(() => {
    if (!filterByFavorite) return products
    return products.filter(product => product.favorited)
  }, [filterByFavorite, products])

  return (
    <productsContext.Provider value={{ products: filteredProducts, toggleFavoriteById, toggleFilterByFavorite }}>
      {children}
    </productsContext.Provider>
  )
}

export const useProducts = () => {
  return useContext(productsContext)
}