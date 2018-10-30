import React, { Component } from 'react';


class Account extends Component {
  constructor(){
    super();
    this.state = {
      balance: 0,
    }
  }
  deposit = () => {
    const amount = parseInt(this.amount.value);
    if(!amount){
      return;
    }
    this.setState({
      balance: this.state.balance + amount
    })
    // empty out the text box in this component
    this.amount.value = '';
  }
  withdraw = () => {
    const amount = parseInt(this.amount.value);
    if(!amount){
      return;
    }
    this.setState({
      balance: this.state.balance - amount
    })
    // empty out the text box in this component
    this.amount.value = '';
  }
  render() {;
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" placeholder="enter an amount" ref={(input) => this.amount = input}/>
        <input type="button" onClick={this.deposit} value="Deposit"  />
        <input type="button" onClick={this.withdraw} value="Withdraw" />
      </div>
    )
  }
}
export default Account;
