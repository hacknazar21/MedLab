import React, { PureComponent } from 'react';
import logo from '../../../src/img/logo.png'
interface OwnProps {

}

type Props = OwnProps;

class Logo extends PureComponent<Props> {
  render() {
    return (
        <a href="/" className="header__logo">
            <img src={logo.src} alt="logo" />
        </a>
    );
  }
}

export default Logo;
