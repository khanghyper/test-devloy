'use client'
import { ProductType, TestContext, TestContextType } from "@/app/_components/test-context"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useContext, useState } from "react"
import axios from 'axios';
import { useRouter } from "next/navigation"
import { toast } from 'sonner'


export default function TestCreateItem() {
  const { isOpen, setIsOpen, setProducts, products } = useContext<TestContextType>(TestContext);
  const [nameProduct, setNameProduct] = useState<string>('')
  const [error, setError] = useState<boolean>(false);


  const handleChangeOpen = (state: boolean) => {
    setNameProduct('');
    return !state;
  }

  const handlePostProduct = async () => {

  }

  const handleChangeInput = (e: any) => {
    const target = e.target as HTMLInputElement;
    setNameProduct(target.value);
  }

  const handleSubmit = async () => {
    try {
      const abx = await axios.post('https://tranluuviethoang.top/apitest/api/product', { name: nameProduct });
      const { data }: { data: { id: number, name: string, created_at: string, updated_at: string }[] } = await fetch('https://tranluuviethoang.top/apitest/api/product').then(res => res.json());
      setNameProduct('')
      setIsOpen(false)
      setProducts([...data])
      toast.success('Thêm sản phẩm thành công!');
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <span className="text-blue-600 cursor-pointer">Thêm</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Thêm sản phẩm</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-[12px] ">
              Tên sản phẩm
            </Label>
            <Input onInput={handleChangeInput} id="name" value={nameProduct} placeholder="Tên sản phẩm" className={`
                col-span-3
                ${error ? 'border border-red-500' : ''}
              `} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">Thêm</Button>
          <button>abx</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}





