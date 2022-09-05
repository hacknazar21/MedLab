import React, {PureComponent, useState} from 'react';
import {ISelect} from "../Interfaces/ISelect";


class Select extends React.Component<ISelect, any> {

  constructor(props:ISelect) {
    super(props);
    this.state ={
      open: true,
      height: 0
    }

    this.clickHandler = this.clickHandler.bind(this);
    this.selectHandler = this.selectHandler.bind(this);
  }
  wrapper = React.createRef() as React.RefObject<HTMLUListElement>;
  head = React.createRef() as React.RefObject<HTMLDivElement>;
  componentDidMount() {
      const height = this.wrapper.current?.getBoundingClientRect().height
      this.setState((state:any) => {
        return state.height = height
      })
      this.wrapper.current?.setAttribute('style', `max-height:0px;`)
  }
  clickHandler(event:any){
    this.setState((state:any) => {
      return {open: !state.open}
    })
    if(this.wrapper.current && this.state.open) {
      this.wrapper.current.setAttribute('style', `max-height:${this.state.height}px;`)
    }
    else if(this.wrapper.current && !this.state.open){
      this.wrapper.current.setAttribute('style', `max-height:0px;`)
    }
  }
  selectHandler(event:any){
    if(this.wrapper.current && this.head.current){
      this.setState((state:any) => {
        return {open: !state.open}
      })
      this.wrapper.current.setAttribute('style', `max-height:0px;`)
      this.head.current.innerText = event.target.innerText
      this.props.callback(event)
    }
  }

  render() {
    return (
        <div className={"select" + " " + this.props.className} id={'select-'+this.props.name+'-'+this.props.key}>
            <div ref={this.head as React.RefObject<HTMLDivElement>} onClick={this.clickHandler} className="select__head">{this.props.title}</div>
            <ul ref={this.wrapper as React.RefObject<HTMLUListElement>} className="select__list">
              <li onClick={this.selectHandler} data-name={this.props.name} data-value={'all'} className="select__option">{this.props.title}</li>
              {
                this.props.items.map(item=>{
                  return(
                      <li onClick={this.selectHandler} data-name={this.props.name} data-value={item} className="select__option">{item}</li>
                  );
                })
              }
            </ul>
        </div>
    );
  }
}

export default Select;
