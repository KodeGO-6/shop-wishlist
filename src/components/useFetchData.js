import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(url)
                setData(res.data)
                setLoading(false)
            } catch (err) {
                setError(err)
                setLoading(false)
            }
        }
        fetchData()
    }, [url])

    return { data, loading, error}
}

export default useFetchData