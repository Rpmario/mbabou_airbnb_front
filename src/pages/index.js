import TitlePage from "../components/TitlePage";
import PlaceGrid from "../components/PlaceGrid/";
import { useEffect, useState } from "react";

export default function Home() {

  const [data, setData] = useState([])

  const getData = () => fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/place`, {
    method: "GET",
    headers: {
      'Content-type': "application/json"
    },
  }).then(res => res.json().then((r) => setData(r)))

  useEffect(() => {
    getData()
  
    return () => {
      
    }
  }, [])

  return (
    <main>
      {/* <TitlePage title="Homepage" /> */}
      <PlaceGrid places={data} />
    </main>
  )
}