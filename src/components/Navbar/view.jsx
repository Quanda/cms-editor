import React, { useState, useEffect } from 'react';
import { Dropdown, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationConfig } from './config';
import { ThemeToggle } from '..';
import { ContentDropdown } from './components';
import {
  StyledNavHeader,
  StyledNavToggle,
  StyledToggleButton,
  StyledSidebar,
  StyledNav,
  StyledNavItem,
  StyledNavLink,
} from './style';

const Navbar = ({ onSelectNavLink, activeContent, onSelectNewContent, availableContent }) => {
  const [isExpanded, setExpanded] = useState(false);

  const selectNavLinkHandler = (key, e) => {
    setExpanded(false);
    onSelectNavLink(key, e);
  };

  useEffect(() => {
    const handleEsc = (event) => event.keyCode === 27 && setExpanded(false);

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <>
      {/* top aligned header bar */}
      <StyledNavHeader $isExpanded={isExpanded}>
        {/* left-side */}
        <StyledNavToggle $isExpanded={isExpanded}>
          <StyledToggleButton onClick={() => setExpanded(!isExpanded)} variant="transparent">
            <FontAwesomeIcon icon={['fas', 'bars']} />
          </StyledToggleButton>
          <span id="brand-name">CMS</span>

          {/* right-side */}
          <Row className="align-items-center">
            <ContentDropdown
              activeContent={activeContent}
              availableContent={availableContent}
              onSelectItem={onSelectNewContent}
            />
            <Dropdown drop="up">
              <Dropdown.Toggle id="profile-toggle" variant="transparent">
                <FontAwesomeIcon icon={['fas', 'cog']} fixedWidth size="sm" />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item className="pl-3">
                  <ThemeToggle />
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/logout">
                  <FontAwesomeIcon
                    icon={['fas', 'sign-out-alt']}
                    className="mr-2"
                    fixedWidth
                    size="sm"
                  />
                  <span>Sign out</span>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
        </StyledNavToggle>
      </StyledNavHeader>

      {/* left aligned sidebar navigation */}
      <StyledSidebar $isExpanded={isExpanded}>
        <StyledNav role="navigation" $isExpanded={isExpanded}>
          {navigationConfig.map((navItem) => (
            <StyledNavItem key={navItem.eventKey}>
              <StyledNavLink
                eventKey={navItem.eventKey}
                onSelect={selectNavLinkHandler}
                $isExpanded={isExpanded}
              >
                <FontAwesomeIcon icon={['fas', navItem.faIconName]} fixedWidth />
                <span>{navItem.text}</span>
              </StyledNavLink>
            </StyledNavItem>
          ))}
        </StyledNav>
      </StyledSidebar>
    </>
  );
};

export default Navbar;