import styled from 'styled-components';



export default function Footer({ img, title, weekday, date }) {
    return (
        <PageFooter>
            <FooterContainer>
                <img src={img} alt="" />
            </FooterContainer>
                <MovieTitle>
                    <h1>{title}</h1>
                    <h1>{weekday}</h1>
                    <h1>{date}</h1>
                </MovieTitle>          
        </PageFooter>
    )
}

const PageFooter = styled.div`
    position: absolute;
    width: 375px;
    max-width: 100%;
    height: 117px;
    margin-right: 5px;
    margin-top: 500px;
    background-color: #9EADBA;
    display: flex;
    justify-content: space-evenly;
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
    width: 169px;
    height: 40px;
    display: flex;
    flex - direction: column;
    justify - content: center;
    align - items: center;
    padding-left: 5px;

        h1{
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 400;
            font-size: 26px;
            line-height: 30px;
            display: flex;
            align-items: center;
            color: #293845;

        }
    `






