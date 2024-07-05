'use client'

import { TestContext, TestContextType } from "@/app/_components/test-context";
import axios from "axios";
import { useContext } from "react";
import { toast } from "sonner";


export default function TestItem({ id, name, created_at, updated_at }: { id: number, name: string, created_at: string, updated_at: string }) {
  const { isOpenEditModal, setIsOpenEditModal, setProduct, products, product, setProducts} = useContext<TestContextType>(TestContext);

  const handleDelete = async (id: number) => {
    try {
      const res = await axios.delete(`https://tranluuviethoang.top/apitest/api/product/${id}`);
      const { data }: { data: { id: number, name: string, created_at: string, updated_at: string }[] } = await fetch('https://tranluuviethoang.top/apitest/api/product').then(res => res.json());
      setIsOpenEditModal(false)
      setProducts([...data])
      toast.success('Xóa sản phẩm thành công!')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <td className="px-6 py-4">
        {id}
      </td>
      <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {name}
      </td>
      <td className="px-6 py-4">
        {created_at}
      </td>
      <td className="px-6 py-4">
        {updated_at}
      </td>
      <td className="">
        <div className="w-full h-full flex gap-2">
          <span onClick={() => {
            const abx = products.find(item => item.id === id);
            if(abx) setProduct({...abx});
            setIsOpenEditModal(true);
          }} className="text-blue-600 cursor-pointer">Sửa</span>
          <span onClick={() => handleDelete(id)} className="text-red-600 cursor-pointer">Xóa</span>
        </div>
      </td>
    </tr>
  )
}
