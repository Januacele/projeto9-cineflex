import styled from 'styled-components';



export default function Footer({ img, title, weekday, date }) {
    return (
        <PageFooter>
            <FooterContainer>
                <img src={img} alt="" />
                <MovieTitle>
                    <h1>{title}</h1>
                    <h1>{weekday}</h1>
                    <h1>{date}</h1>
                </MovieTitle>
            </FooterContainer>
        </PageFooter>
    )
}

const PageFooter = styled.div`
    width: 375px;
    max-width: 100%;
    height: 117px;
    margin-right: 5px;
    background-color: #9EADBA;
    display: flex;
    align-items: center;
    padding-left: 15px;
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
    width: 60 %;
    height: 100 %;
    display: flex;
    flex - direction: column;
    justify - content: center;
    align - items: center;
    padding - left: 5 %;

        h1{
            font - family: 'Roboto';
            font - weight: 400;
            font - size: 18px;
            line - height: 30px;
            color: #293845;
        }
    `






