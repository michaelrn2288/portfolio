import styled, { keyframes } from 'styled-components'
import michaelAvatar from '../../assets/eu.png'
import {skills} from '../../skills'
import Footer from '../Footer'
import SkillCard from '../SkillCard'

const typeText = keyframes`
    from{
        width: 0;
    }
    to{
        width: 100%;
    }
`

const blickCaret = keyframes`
    0%, 40%, 80% {
        border-color: transparent
    }

    20%, 60%, 100% {
        border-color: black
    }
`

const revealAvatar = keyframes`

    to {
        transform: translateX(0);
    }
`

const bounceAvatar = keyframes`
    50%{
        transform: scale(0.6, 1.4)
        translateX(50px)
    }

    0%, 100%{
        transform: scale(1, 1)
    }
`

const SectionOne = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: ${props => 100 - props.headerHeight}vh;
`

const SectionTwo = styled(SectionOne)`
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 30px;
    flex-wrap: wrap;
    gap: 30px;
`

const ImgAvatar = styled.img`
    width: 140px;
    border-radius: 50%;
    margin: 4rem;
    transform: translateX(-100vw);
    background-color: hsl(var(--hue-secondary1), var(--saturation-default), var(--light-inverted-m15));
    animation: ${revealAvatar} .5s ease-in 5.2s forwards,
        ${bounceAvatar} .5s ease-in-out 5.7s forwards;
`

const P1Container = styled.div`
    width: 37.2rem;
    font-size: 2rem;
`

const P2Container = styled.div`
    width: 72.4rem;
    font-size: 2rem;
`

const P1 = styled.p`
    width: 0;
    padding: 0.3em 0;
    margin: 20px auto;
    white-space: nowrap;
    overflow: hidden;
    border-right: 2px solid rgba(0,0,0,0);
    animation: ${typeText} 2.5s steps(50, end) forwards,
        ${blickCaret} 2.5s step-end;
`

const P2 = styled(P1)`
    animation: ${typeText} 2.5s steps(50, end) forwards,
        ${blickCaret} 2.5s step-end infinite;
    animation-delay: 2.6s;
`

const ArrowDown = styled.div`
    transform: rotate(270deg);
    font-size: 5rem;
`

export default function Home(props) {
    const { headerHeight } = props
    const skillCards = skills.map( (skill, index) => {
        return (
            <SkillCard
            index={index}
            key={index}
        />
        )
    })

    return (
        <div>
            <SectionOne headerHeight={headerHeight} >
                <P1Container>
                    <P1>
                        Olá! Meu nome é Michael Rocha Nunes.
                    </P1>
                </P1Container>
                <P2Container>
                    <P2>
                        Eu sou desenvolvedor front-end e estou em busca do meu primeiro emprego.
                    </P2>
                </P2Container>
                <ImgAvatar
                    src={michaelAvatar}
                    alt='Michael avatar'
                />
                <a href='#section-two'>
                    skills<br/>
                    <ArrowDown>❬</ArrowDown>
                </a>
            </SectionOne>
            <SectionTwo id='section-two'>
                {skillCards}
            </SectionTwo>
        </div>
    )
}