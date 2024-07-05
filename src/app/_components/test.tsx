'use client'

import TestEditItem from "@/app/_components/test-edit-item";
import TestItem from "@/app/_components/test-item";
import { useContext, useEffect, useState } from "react"
// import * as Dialog from '@radix-ui/react-dialog';
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import TestWrap, { TestContext, TestContextType } from "@/app/_components/test-context";



function Test() {
  const [products, setProducts] = useState<{ id: number, name: string, created_at: string, updated_at: string }[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true)
    const getData = async () => {
      const { data }: { data: { id: number, name: string, created_at: string, updated_at: string }[] } = await fetch('https://tranluuviethoang.top/apitest/api/product').then(res => res.json());
      console.log(data);
      setProducts([...data])
      setIsFetching(false)
    }
    getData()
  }, [])

  return (
    <>
      <TestEditItem type="create" id={0} name='' />
      <div className="overflow-x-auto mt-4 border">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                #
              </th>
              <th scope="col" className="px-6 py-3">
                Tên sản phẩm
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày khởi tạo
              </th>
              <th scope="col" className="px-6 py-3">
                Ngày cập nhật
              </th>
              <th scope="col" className="px-6 py-3">

              </th>
            </tr>
          </thead>
          <tbody>
            {!isFetching ? (
              products.map((item: { id: number, name: string, created_at: string, updated_at: string }, index: number) => (
                <TestItem key={item.id} {...item} />
              ))
            ) : ''}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Test
