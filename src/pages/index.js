import TitlePage from "../components/TitlePage";
import PlaceGrid from "../components/PlaceGrid/";
import { useEffect, useState } from "react";

export default function Home() {

//   const places = [
//     { id: 1, title: "Wonderfull Villa in Miama", description:"Bitchakalabobé mamipiiii les wé du kwata test", price: 200, rate: 4.99, image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1560&q=80" },
// ]

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
      <TitlePage title="Homepage" />
      <PlaceGrid places={data} />
    </main>
  )
}