import React, { PureComponent } from 'react';

interface OwnProps {
    contacts: {number: string, key: any}[]
}

type Props = OwnProps;

class Contacts extends PureComponent<Props> {
  render() {
    return (
        <div className="header__contacts">
            {
                this.props.contacts.map(contact => {
                    return (
                        <a href={'tel:'+contact.number.trim()} className="header__contact _icon-tel">{contact.number}</a>
                    )
                })
            }
            <div className="mobile__actions"></div>
        </div>
    );
  }
}

export default Contacts;
