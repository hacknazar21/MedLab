import React, { PureComponent } from 'react';
// @ts-ignore
import Link from "next/link";

interface OwnProps {
    menuItems: { href: string; title: string; key: any }[]
}

type Props = OwnProps;

class Menu extends PureComponent<Props> {
  render() {
    return (
        <div className="header__menu menu">
            <nav className="menu__body">
                <ul className="menu__list">
                    {
                        this.props.menuItems.map(menuItem=>{
                            return(
                                <li key={menuItem.key} className="menu__item"><Link href={menuItem.href}><a className="menu__link">{menuItem.title}</a></Link></li>
                            )
                        })
                    }

                </ul>
            </nav>
            <div className="menu__mobile"></div>
        </div>
    );
  }
}

export default Menu;
