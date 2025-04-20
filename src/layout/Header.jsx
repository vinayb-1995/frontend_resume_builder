import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
//   import data from "../data.json";
import { Link } from "react-router-dom";
import { IoReorderThreeOutline } from "react-icons/io5";

const navHeader = [
  { path: "/", name: "Intro" },
  { path: "/about", name: "About" },
  { path: "/skills", name: "Skills" },
  { path: "/projects", name: "Projects" },
  { path: "/experiences", name: "Experiences" },
  { path: "/education", name: "Education" },
  { path: "/contact", name: "Contact" },
];

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <div className="container-fluid header">
        <Row className="w-100">
          {/* Logo */}
          <Col
            xs={2}
            md={1}
            lg={1}
            className="d-flex justify-content-center align-items-center nav-logo"
          >
            <img
              className="logo_img"
              src="./assets/img/icon_logo.png"
              alt="logo_img"
            />
          </Col>

          {/* Navigation Content */}
          <Col
            md={11}
            lg={11}
            className="d-none d-md-flex gap-4 justify-content-end align-items-center nav-content"
          >
            {navHeader.map((paths, i) => (
              <Link to={paths.path} key={i}>
                {" "}
                {paths.name}
              </Link>
            ))}
          </Col>
          {/* Hamburger Menu */}
          <Col
            xs={{ span: 1, offset: 9 }}
            md={1}
            lg={1}
            className="d-lg-none d-md-none d-flex justify-content-end align-items-center"
          >
            <p style={{ cursor: "pointer", fontSize: "32px" }} onClick={onOpen}>
              <IoReorderThreeOutline />
            </p>
          </Col>
        </Row>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody className="d-flex flex-column gap-2">
              {navHeader.map((paths, i) => (
                <Link onClick={onClose} to={paths.path} key={i}>
                  {" "}
                  {paths.name}
                </Link>
              ))}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    </>
  );
};
export default Header;
