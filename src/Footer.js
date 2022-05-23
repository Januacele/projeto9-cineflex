import styled from 'styled-components';
import './Assets/style.css';


export default function Footer({ img, title, weekday, date }) {
    return (
        <PageFooter>
            <FooterContainer>
                <img src={img} alt="" />
            </FooterContainer>
                <MovieTitle>
                    <p>{title}</p>
                    <p>{weekday} - {date} </p>                   
                </MovieTitle>          
        </PageFooter>
    )
}

const PageFooter = styled.div`
    position: absolute;
    width: 375px;
    max-width: 100%;
    height: 117px;
    padding-left: 10px;
    margin-top: 50px;
    background-color: #9EADBA;
    display: flex;
    align-items: center;
    `

const FooterContainer = styled.div`
    width: 64px;
    height: 89px;
    left: 2px;
    bottom: 14px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    display:flex;
    align-items: center;
    justify-content: center;

        img{
            width: 48px;
            height: 72px;
            left: 18px;
            bottom: 23px;
        }
    `

const MovieTitle = styled.div`
    width: 287px;
    padding-left: 15px;

        p{
            font-family: 'Roboto', sans-serif;
            font-weight: 400;
            font-size: 26px;
            color: #293845;
        }
    `






