import { useState } from 'react'
import Loading from './Loading'

export default function SuspenseLoader({children}) {

    const [loaded, setLoaded] = useState(false)

    const onLoaded = () =>{setLoaded(true);}

    return (
        <>
            {!loaded && <Loading />}
            { children(onLoaded) }
        </>
    )
}
