import logoFipp from "../../assets/images/logo-fipp.png"
import logoUnoeste from "../../assets/images/logo-unoeste.png"
import { MobileNavBar } from "./mobile-navbar";
import { Nav, Wrapper, Image, List, ListItem, NavLink, Button } from "./navbar.styles";

export const NavBar = () => {
    
    const openLink = () => {
        const url = 'https://www.unoeste.com.br/'
        window.open(url,'_blank');
    }

    return (
        <Wrapper>
            <Nav>
                <Image src={logoFipp} alt="logo da fipp"/>
                <List>
                    <ListItem>
                        <NavLink to="/"></NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to="/corpo-docente">Corpo Docente</NavLink>
                    </ListItem>

                    <ListItem>
                        <NavLink to="/contato">Contato</NavLink>
                    </ListItem>

                    <ListItem>
                        <Button onClick={openLink}><Image src={logoUnoeste} alt="logo da unoeste"/></Button>
                    </ListItem>
                </List>
                <MobileNavBar />
            </Nav>
        </Wrapper>
    );
}