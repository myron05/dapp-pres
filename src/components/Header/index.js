import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Col, Row } from "antd";
import { 
  Wrapper,
  Container,
  Logo,
  HeaderItems,
  Item,
  MenuIcon,
  DrawerStyled,
} from "./styles";
import menu from 'assets/menu.svg';
import bitriel from 'assets/digiland.jpg';
import ConnectWallet from 'components/ConnectWallet';


export default function Header() {
  const location = useLocation();
  const [navActive, setNavActive] = useState(false);

  return (
    <Wrapper>
      <Container>
        <Link to="/">
          <Logo alt="bitriel" src={bitriel} />
        </Link>
        <Row>
          <Col xs={0} sm={0} md={12} lg={12} xl={12}>
            <HeaderItems>
              
         
            </HeaderItems>
          </Col>
          <Col>
            <DrawerStyled placement="right" onClose={() => setNavActive(false)} visible={navActive}>
              <div style={{display: 'block'}}>
                <Row justify='center'>
                  <Logo 
                    alt='bitriel'
                    src={bitriel}
                  />
                </Row><br/>
                <Item mobile='true' active={(location.pathname === '/').toString()} to='/'>Contribute</Item>
                <Item mobile='true' active={(location.pathname === '/order').toString()} to='/order'>Activity</Item>
                
                <Item mobile='true' active={(location.pathname === '/mysel').toString()} to='/mysel'>My DIGL</Item>
              </div>
            </DrawerStyled>
          </Col>
        </Row>
        <ConnectWallet />
        <Col xs={2} sm={2} md={0} lg={0} xl={0} >
          <MenuIcon 
            src={menu}
            alt='menu'
            onClick={() => setNavActive(!navActive)}
          />
        </Col>
      </Container>
    </Wrapper>
  );
}