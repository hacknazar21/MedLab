import React, { PureComponent } from 'react';
import logo from '../../../src/img/logo.png'
// @ts-ignore
import Link from "next/link";
interface OwnProps {

}

type Props = OwnProps;

class Logo extends PureComponent<Props> {
  render() {
    return (
        <Link href="/">
            <a className="header__logo">
                <img src={logo.src} alt="logo" />
            </a>
        </Link>
    );
  }
}

export default Logo;
