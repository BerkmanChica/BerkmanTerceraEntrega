import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
export default function DetailsPage() {
  const { id } = useParams()

  const [data, setData] = useState(null)
  async function ft(url) {
    const resp = await fetch(url)
    const data = await data.json();

    setData(data)
  }

  useEffect(() => {
    ft(url)
  }, [])
  return (
    <div>


    </div>
  )
}
