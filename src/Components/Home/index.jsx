import styled from 'styled-components'
import michaelAvatar from '../../assets/eu.jpg'
import Footer from '../Footer'

const SectionOne = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    background:blue;
    height: ${ props => 100 - props.headerHeight }vh;
`

const SectionTwo = styled(SectionOne)`
    height: 100vh;
`

const ImgAvatar = styled.img`
    width: 140px;
    border-radius: 50%;
`

const P = styled.p`
    margin: 20px auto;
`

export default function Home(props) {
    const { headerHeight } = props

    return (
        <div>
            <SectionOne headerHeight={headerHeight} >
                <P>
                    Olá! Meu nome é Michael Rocha Nunes.
                </P>
                <P>
                    Eu sou desenvolvedor front-end e estou em busca do meu primeiro emprego.
                </P>
                <ImgAvatar
                    src={michaelAvatar}
                    alt='Michael avatar'
                />
            </SectionOne>
                <Footer />
        </div>
    )
}