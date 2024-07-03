'use client'

import { useEffect, useState } from "react"

function Test() {
  const [products, setProducts] = useState<any[]>([])
  const [isFetching, setIsFetching] = useState<boolean>(false);

  useEffect(() => {
    setIsFetching(true)
    const getData = async () => {
      const {data}:{data: any[]} = await fetch('https://tranluuviethoang.top/apitest/api/product', {cache: 'force-cache'}).then(res => res.json());
      setProducts([...data])
      setIsFetching(false)
    }
    getData()
  }, [])

  return (
    <>
      {!isFetching && (
        <ul>
        {products.map((item: {id: number, name: string, created_at: string, updated_at: string}, index: number) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
      )}
      {isFetching && (
        <div></div>
      )}
    </>
  )
}

export default Test
