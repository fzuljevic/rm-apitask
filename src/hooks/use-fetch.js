import { useEffect, useState } from 'react';

async function getData(url) {
    const result = await fetch(url)
    return result.json()
}

export function useFetch(url, initial) {
    const [data, setData] = useState(initial)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState()


    useEffect(() => {
        getData(url)
            .then((d) => {
                setData(d)
                setLoading(false)

            })
            .catch((err) => {
                setError(err)
                setLoading(false)
            })

    }, [])

    return { data, loading, error }
}
