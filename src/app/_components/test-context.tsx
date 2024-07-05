'use client'
import { createContext, Dispatch, SetStateAction, useState } from "react"

export type TestContextType  = {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const initValue = {
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {}
} as TestContextType



export const TestContext = createContext<TestContextType >(initValue)

export default function TestWrap({children}: {children: React.ReactNode}){
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <TestContext.Provider value={{isOpen, setIsOpen}}>
      {children}
    </TestContext.Provider>
  )
}
