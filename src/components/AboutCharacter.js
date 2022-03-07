import Button from 'react-bootstrap/Button'
import { useParams, useNavigate } from 'react-router-dom'
import { useFetch } from '../hooks/use-fetch'
import './AboutCharacter.css'

function getCharacterStyle(status) {
    if (status === 'Alive') {
        return 'textgreen'
    }
    else if (status === 'Dead') {
        return 'textred'
    }
    else {
        return 'textgray'
    }
}

function AboutCharacter() {



    const params = useParams()
    const history = useNavigate()

    const { data: character, loading } = useFetch(`https://rickandmortyapi.com/api/character/${params.id}`)

    if (loading) return <h2>Is Loading</h2>


    let charStatus = getCharacterStyle(character.status)

    return (
        <div className='container-fluid ab-container' >
            <div className='ab-parent'>
                <img className='img-fluid' src={character.image} alt={character.name} />
                <h3 className='charname'>Name: {character.name}</h3>
                <p>Status: <span className={charStatus} >{character.status}</span></p>
                <p>Origin: {character.origin.name}</p>
                <p>Gender: {character.gender}</p>
            </div>
            <div >
                <Button style={{ border: '2px solid #44281d', margin: '5px' }} variant='warning' size='lg' onClick={() => history(-1)}>Go Back</Button>
            </div>
        </div >
    )

}

export default AboutCharacter
