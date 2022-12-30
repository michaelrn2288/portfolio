import styled from 'styled-components'
import michaelAvatar from '../../assets/eu.jpg'

const StyledSection = styled.section`
display: flex;
flex-direction: column;
align-items: center;
background:blue;
height: 100vh;
`

const StyledAvatar = styled.img`
width: 140px;
border-radius: 50%;
`

const StyledP = styled.p`
margin: 20px auto;
`

export default function Home() {
    return (
        <div>
            <StyledSection>
                <StyledP>
                    Olá! Meu nome é Michael Rocha Nunes.
                </StyledP>
                <StyledP>Eu sou desenvolvedor front-end e estou em busca do meu primeiro emprego.</StyledP>
                <StyledAvatar
                    src={michaelAvatar}
                    alt='Michael avatar'
                />
            </StyledSection>
        </div>
    )
}