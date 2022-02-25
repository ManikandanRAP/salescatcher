import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import NavbarWrapper from 'common/src/components/Navbar';
import Drawer from 'common/src/components/Drawer';
import Button from 'common/src/components/Button';
import Logo from 'common/src/components/UIElements/Logo';
import Box from 'common/src/components/Box';
import HamburgMenu from 'common/src/components/HamburgMenu';
import Container from 'common/src/components/UI/Container';
import { DrawerContext } from 'common/src/contexts/DrawerContext';
import ScrollSpyMenu from 'common/src/components/ScrollSpyMenu';

import { Link } from 'gatsby';

import LogoImageLight from 'common/src/assets/image/hosting/logo_light.png';
import LogoImageDark from 'common/src/assets/image/hosting/logo_dark.png';

const Navbar = ({ navbarStyle, logoStyle, button, row, menuWrapper }) => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = () => {
    dispatch({
      type: 'TOGGLE',
    });
  };

  const Data = useStaticQuery(graphql`
    query {
      hostingJson {
        MENU_ITEMS {
          label
          path
          offset
          href
          sub_items {
            href
            label
            offset
            path
          }
        }
      }
    }
  `);

  return (
    <NavbarWrapper {...navbarStyle}>
      <Container>
        <Box {...row}>
          <Link to="/" className="Logo_image">
            <img
              src={LogoImageLight}
              alt="SalesCatcher"
              className="LogoImageSize header light"
            />
            <img
              src={LogoImageDark}
              alt="SalesCatcher"
              className="LogoImageSize header dark"
            />
          </Link>
          <Box {...menuWrapper}>
            <ul className="scrollspy__menu main_menu">
              {Data.hostingJson.MENU_ITEMS.map((val, index) => {
                if (val.sub_items) {
                  return (
                    <li className="menu_has_submenu">
                      <Link
                        to={val.href}
                        activeClassName="is-current"
                        partiallyActive={true}
                      >
                        {val.label}
                      </Link>
                      <div className="sub_items">
                        {val.sub_items.map((item, index) => {
                          return (
                            <div className="submenu_item">
                              <Link
                                to={`${item.href}`}
                                activeClassName="is-current"
                              >
                                {item.label}
                              </Link>
                            </div>
                          );
                        })}
                      </div>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <Link to={`${val.href}`} activeClassName="is-current">
                        {val.label}
                      </Link>
                    </li>
                  );
                }

                // return (
                // <li key={index}>
                //   <Link to={`${val.href}`} activeClassName="is-current">
                //     {val.label}
                //   </Link>
                // </li>
                // );
              })}
              <li>
                {/* <div className="has_submenu">
                  <span>Wholesale</span>
                  <li>
                    <Link to={`${val.href}`} activeClassName="is-current">
                      {val.label}
                    </Link>
                  </li>
                </div> */}
              </li>
            </ul>

            {/* <a className="navbar_button" href="#1">
              <Button {...button} title="Book A Demo" />
            </a> */}
            <Drawer
              width="420px"
              placement="right"
              drawerHandler={<HamburgMenu barColor="#FF6200" />}
              open={state.isOpen}
              toggleHandler={toggleHandler}
            >
              <ul className="scrollspy__menu mobile_menu">
                {Data.hostingJson.MENU_ITEMS.map((val, index) => {
                  if (val.sub_items) {
                    return (
                      <li key={index}>
                        <Link to={`${val.href}`}>{val.label}</Link>
                        {val.sub_items.map((x, i) => {
                          return (
                            <div style={{ marginLeft: '10px' }}>
                              <Link to={`${x.href}`}>{x.label}</Link>
                            </div>
                          );
                        })}
                      </li>
                    );
                  } else {
                    return (
                      <li key={index}>
                        <Link to={`${val.href}`}>{val.label}</Link>
                        <i
                          className="fa fa-chevron-circle-right"
                          aria-hidden="true"
                        ></i>
                      </li>
                    );
                  }
                })}
              </ul>
              {/* <a className="navbar_drawer_button" href="#1">
                <Button {...button} title="Book A Demo" />
              </a> */}
            </Drawer>
          </Box>
        </Box>
      </Container>
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  navbarStyle: PropTypes.object,
  logoStyle: PropTypes.object,
  button: PropTypes.object,
  row: PropTypes.object,
  menuWrapper: PropTypes.object,
};

Navbar.defaultProps = {
  navbarStyle: {
    className: 'hosting_navbar',
    minHeight: '70px',
    // display: 'block',
  },
  row: {
    flexBox: true,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logoStyle: {
    maxWidth: ['120px', '130px'],
  },
  button: {
    type: 'button',
    fontSize: '13px',
    fontWeight: '600',
    color: 'white',
    borderRadius: '4px',
    pl: '15px',
    pr: '15px',
    colors: 'primaryWithBg',
    minHeight: 'auto',
    height: `${1}`,
  },
  menuWrapper: {
    flexBox: true,
    alignItems: 'center',
  },
};

export default Navbar;
