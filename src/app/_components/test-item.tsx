import TestEditItem from "@/app/_components/test-edit-item";

export default function TestItem({ id, name, created_at, updated_at }: { id: number, name: string, created_at: string, updated_at: string }) {
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
          <TestEditItem name={name} id={id} type="update"/>
          <span className="text-red-600 cursor-pointer">Xóa</span>
        </div>
      </td>
    </tr>
  )
}
