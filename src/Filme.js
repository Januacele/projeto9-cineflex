import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Filme (props){

    const {id, title, poster} = props

    return (
        <Link to = {`/sessoes/${id}`}>
            <Poster>
                <img src = {poster} alt={title}/>
            </Poster>
        </Link>
        
    )
 
}

const Poster = styled.div`
    padding: 8px;
    margin: 10px 15px;
    background-color: white;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    cursor: pointer;

        img{
            width: 130px;
            height: 190px;
        }
    `


export default Filme