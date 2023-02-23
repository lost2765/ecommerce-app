import React from "react";
import classes from "./footer.module.scss";
import { FlexboxGrid, Col } from "rsuite";
import Link from "next/link";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className={classes.footer}>
      <FlexboxGrid justify="space-between">
        <Col xs={24} lg={5}>
          <div className={classes.footerItem}>
            <div className={classes.footerLogo}>
              <h2>Afea</h2>
            </div>
          </div>
        </Col>
        <Col xs={24} lg={5}>
          <div className={classes.footerItem}>
            <ul>
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">Cart</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={5}>
          <div className={classes.footerItem}>
            <ul>
              <li>
                <Link href="#">Product</Link>
              </li>
              <li>
                <Link href="#">Cart</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
              <li>
                <Link href="#">About</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col xs={24} lg={7}>
          <div className={classes.footerItem}>
            <div className={classes.inputGroup}>
              <input
                type="email"
                className={classes.input}
                placeholder="Email@gmail.com"
              />
              <input
                className={classes.buttonSubmit}
                value="Subscribe"
                type="submit"
              />
            </div>
          </div>
        </Col>
      </FlexboxGrid>
    </footer>
  );
};

export default Footer;
