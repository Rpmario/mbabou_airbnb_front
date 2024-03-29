import {useEffect, useState} from 'react';
import { useRouter } from "next/router";

const Index = () => {
  
  const router = useRouter();
  const [title, setTitle] = useState();

  useEffect(() => {
    if(router.isReady) {
      console.log(router.query)
      setTitle(router.query.title);
    }
  }, [router.isReady])

  return (
    <div>
      {
        title && (
          <p>Paramètre de la route : {title}</p>
        )
      }
    </div>
  );
}

export default Index;
