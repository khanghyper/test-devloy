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
import axios from "axios"
import { useContext, useState } from "react"
import { toast } from "sonner"

export default function TestEditItem() {
  const { isOpenEditModal, setIsOpenEditModal, product, setProduct, setProducts} = useContext<TestContextType>(TestContext);

  const handleSubmit = async () => {
    try {
      const res = await axios.put(`https://tranluuviethoang.top/apitest/api/product/${product.id}`, {name: product.name});
      const { data }: { data: { id: number, name: string, created_at: string, updated_at: string }[] } = await fetch('https://tranluuviethoang.top/apitest/api/product').then(res => res.json());
      setIsOpenEditModal(false)
      setProducts([...data])
      toast.success('Cập nhật sản phẩm thành công!')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Dialog open={isOpenEditModal} onOpenChange={setIsOpenEditModal}>
      <DialogTrigger asChild>
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
            <Input id="name" value={product.name} onChange={(e) => {
              setProduct((cur) => ({...cur, name: (e.target as HTMLInputElement).value}))
            }} placeholder="Tên sản phẩm" className={`
                col-span-3
              `} />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} type="submit">Cập nhật</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
