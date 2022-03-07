import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/use-fetch'
import './Characters.css'


export default function Characters() {

    const { data } = useFetch('https://rickandmortyapi.com/api/character')

    if (!data) return <h2>Loading...</h2>

    return (

        <div className='container-fluid list_container'>
            {data.results.map((char) => {
                const { name, id } = char

                return (
                    <div key={id}>
                        <ul>
                            <li ><Link style={{ textDecoration: 'none', color: '#44281d' }} to={`/aboutcharacter/${char.id}`}>{name}</Link></li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}
