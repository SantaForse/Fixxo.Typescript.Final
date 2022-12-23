import { createContext } from 'react'
import { useContext, useState } from 'react'
import { ProductItem } from '../models/ProductModels'


interface ProductProviderType {
    children: any
}

export interface ProductContextType {
    product: ProductItem
    products: ProductItem[]
    featured: ProductItem[]
    flash: ProductItem[]
    best: ProductItem[]
    get: (articleNumber?: string) => void
    getProducts: () =>  void
    getFeatured: (take?: number) =>  void
    getFlash: (take?: number) =>  void
    getBest: (take?: number) =>  void
}

export const ProductContext = createContext<ProductContextType | null>(null)
export const useProductContext = () => { return useContext(ProductContext)}

    const ProductProvider: React.FC<ProductProviderType> = ({children}) => {
    const baseUrl: string = 'http://localhost:5000/api/products'
    const EMPTY_PRODUCT: ProductItem = { tag: '',  articleNumber: '', description: '', name: '', category: '', price: 0, imageName: '', initialprice: 0  }
    const [product, setProduct] = useState<ProductItem>(EMPTY_PRODUCT)
    const [products, setProducts] = useState<ProductItem[]>([])
    const [featured, setFeatured] = useState<ProductItem[]>([])
    const [flash, setFlash] = useState<ProductItem[]>([])
    const [best, setBest] = useState<ProductItem[]>([])
    
    const get = async (articleNumber?: string) => {
        if (articleNumber !== undefined) {
            const res = await fetch(`${baseUrl}/details/${articleNumber}`)
            setProduct(await res.json())
        }
    }

    const getProducts = async () => {
        const res = await fetch(baseUrl)
        setProducts(await res.json())
    }

    const getFeatured = async (take:number = 0) => {
        let url = `${baseUrl}/featured`

        if (take !== 0) 
            url +=  `/${take}`

        const res = await fetch(url)
        setFeatured(await res.json())
    }

    const getFlash = async (take:number = 0) => {
        let url = `${baseUrl}/flash`

        if (take !== 0) 
            url +=  `/${take}`

        const res = await fetch(url)
        setFlash(await res.json())
    }

    const getBest = async (take:number = 0) => {
        let url = `${baseUrl}/best`

        if (take !== 0) 
            url +=  `/${take}`

        const res = await fetch(url)
        setBest(await res.json())
    }
   
    return <ProductContext.Provider value={{product, products, featured, flash, best, get, getProducts, getFeatured, getFlash, getBest}}>
        {children}
        </ProductContext.Provider>
    
}

export default ProductProvider
