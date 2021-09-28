import { useAppSelector } from "../../hooks";
import ShortAddress from "../ShortAddress";
import classes from "./NavBar.module.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
import { useEtherBalance, useEthers } from "@usedapp/core";
import WalletConnectModal from "../WalletConnectModal";
import { Link } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import clsx from "clsx";
import config from "../../config";
import { utils } from "ethers";
import { buildEtherscanAddressLink } from "../../utils/etherscan";

const NavBar = () => {
  const activeAccount = useAppSelector((state) => state.account.activeAccount);
  const { deactivate } = useEthers();

  const treasuryBalance = useEtherBalance(config.daoExecutorAddress);
  const daoEtherscanLink = buildEtherscanAddressLink(config.daoExecutorAddress);

  const [showConnectModal, setShowConnectModal] = useState(false);

  const showModalHandler = () => {
    setShowConnectModal(true);
  };
  const hideModalHandler = () => {
    setShowConnectModal(false);
  };

  const connectedContent = (
    <>
      <Nav.Item>
        <Nav.Link className={classes.navLink} disabled>
          <span className={classes.greenStatusCircle} />
          <span>
            {activeAccount && <ShortAddress address={activeAccount} />}
          </span>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link
          className={clsx(classes.navLink, classes.disconnectBtn)}
          onClick={() => {
            setShowConnectModal(false);
            deactivate();
            setShowConnectModal(false);
          }}
        >
          DISCONNECT
        </Nav.Link>
      </Nav.Item>
    </>
  );

  const disconnectedContent = (
    <>
      <Nav.Link
        className={clsx(classes.navLink, classes.connectBtn)}
        onClick={showModalHandler}
      >
        CONNECT WALLET
      </Nav.Link>
    </>
  );

  return (
    <>
      {showConnectModal && activeAccount === undefined && (
        <WalletConnectModal onDismiss={hideModalHandler} />
      )}
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className={classes.navBarBrand}>
            <img
              src={logo}
              width="55"
              height="55"
              className="d-inline-block"
              alt="Loot DAO logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Item>
              {treasuryBalance && (
                <Nav.Link
                  href={daoEtherscanLink}
                  className={classes.navLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  TREASURY Ξ {utils.formatEther(treasuryBalance.toString())}
                </Nav.Link>
              )}
            </Nav.Item>
            {activeAccount ? connectedContent : disconnectedContent}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
