import styled from "styled-components";
import { contacts } from "../../contacts";
import ContactCard from "../ContactCard";

const ContactsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 22px;
`

const CardWrapper = styled.div`
`

export default function Contact() {

    const contactCards = contacts.map( (contact, index) => {
        return(
            <CardWrapper>
                <ContactCard
                    image={contacts[index].image}
                    href={contacts[index].href}
                    description={contacts[index].description}
                    key={index}
                />
            </CardWrapper>
        )
    })

    return (
        <ContactsContainer>
            {contactCards}
        </ContactsContainer>
    )
}