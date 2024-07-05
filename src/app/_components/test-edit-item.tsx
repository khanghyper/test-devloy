'use client'
import { TestContext, TestContextType } from "@/app/_components/test-context"
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

export default function TestEditItem({ id, name, type }: { id: number, name: string, type: 'create' | 'update' }) {
  const {isOpen, setIsOpen} = useContext<TestContextType>(TestContext);
  const [nameProduct, setNameProduct] = useState<string>('')
  const [error, setError] = useState<boolean>(false);


  const handleChangeOpen = (state: boolean) => {
    setNameProduct('');
    return !state;
  }

  const handlePostProduct = async () => {
    if(type === "create") {
      alert('tao thanh cong')
    } else{
      alert('cap nhat thanh cong')
    }
  }
  const handleChangeInput = (e: any) => {
    const target = e.target as HTMLInputElement;
    setError(false);
    setNameProduct(target.value);
  }

  const handleSubmit = async () => {
    if(type === 'create') {
      if(!nameProduct) {
        setError(true);
        alert('Tên sản phẩm không được để trống!');
      }else {
        try {
          const res = await fetch('https://tranluuviethoang.top/apitest/api/product', {
            method: 'POST',
            body: JSON.stringify({name: nameProduct})
          })
          const data = await res.json();
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      }
    }
  }

  if (type === 'create') {
    return (
      <Dialog open={isOpen} onOpenChange={handleChangeOpen}>
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
  return (
    <Dialog>
      <DialogTrigger asChild>
        <span className="text-blue-600 cursor-pointer">Sửa</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cập nhật sản phẩm</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-[12px] ">
              Tên sản phẩm
            </Label>
            <Input id="name" value={name} className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Cập nhật</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
