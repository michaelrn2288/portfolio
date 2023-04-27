import Footer from "../Footer";
import styled from "styled-components";
import { contacts } from "../../contacts";
import ContactCard from "../ContactCard";

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding: 22px;
`

const ImgCaptionPair = styled.div`
    display: flex;
    align-items: center;
    gap: 11px;
    font-size: 1.4rem;
`

const ContactImg = styled.img`
    border-radius: 50%;
    width: 100px;
`

export default function Contact() {

    const contactCards = contacts.map( (contact, index) => {
        return(
            <ContactCard
                image={contacts[index].image}
                href={contacts[index].href}
                description={contacts[index].description}
                key={index}
            />
        )
    })

    return (
        <ContactsContainer>
            {contactCards}
        </ContactsContainer>
    )
}