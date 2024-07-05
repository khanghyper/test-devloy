'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react"

export type ProductType = { id: number, name: string, created_at: string, updated_at: string }

export type TestContextType = {
  product: ProductType,
  isOpen: boolean,
  isOpenEditModal: boolean,
  products: ProductType[]
  setIsOpen: Dispatch<SetStateAction<boolean>>
  setIsOpenEditModal: Dispatch<SetStateAction<boolean>>
  setProducts: Dispatch<SetStateAction<ProductType[]>>
  setProduct: Dispatch<SetStateAction<ProductType>>
}

const initValue = {
  product: {id: -1, created_at: '', name: '', updated_at: ''},
  isOpen: false,
  isOpenEditModal: false,
  products: [],
  setIsOpen: (isOpen: boolean) => { },
  setIsOpenEditModal: (isOpenEditModal: boolean) => { },
  setProducts: (products: ProductType[]) => {},
  setProduct: (product: ProductType) => {}
} as TestContextType



export const TestContext = createContext<TestContextType>(initValue)

export default function TestWrap({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);
  const [products, setProducts] = useState<ProductType[]>([])
  const [product, setProduct] = useState<ProductType>({
    id: -1,
    created_at: '',
    name: '',
    updated_at: ''
  })
  return (
    <TestContext.Provider value={{ isOpen, setIsOpen , products, setProducts, isOpenEditModal, setIsOpenEditModal, product, setProduct}}>
      {children}

    </TestContext.Provider>
  )
}
