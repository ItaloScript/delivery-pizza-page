import { IProduct } from "@/interfaces/products"
import productsJSON from "@/mocks/products.json"

export const products = {
  getProducts: async (): Promise<IProduct[]> => {
    return await new Promise((resolve) => {
      return resolve(productsJSON)
    })
  }
}