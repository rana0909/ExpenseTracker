import React from 'react';
import './App.scss';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      overallBalance: 0,
      balance: 0
    }
    this.transactionArray = [];
    this.handleBalanceChange = this.handleBalanceChange.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
  }
  handleBalanceChange(e){
    this.setState({
      balance: e.target.value
    })
  }
  handleAddClick(){
    var self = this;
    let currentBalance = Number(self.state.overallBalance) + Number(self.state.balance);
    self.setState({
      overallBalance: currentBalance
    })
    let date = new Date().toISOString();
    let transactionDetails = date + " - " + self.state.balance + " - Add";
    self.transactionArray.push(<p>{transactionDetails}</p>)
  }
  handleRemoveClick(){
    var self = this;
    let currentBalance = Number(self.state.overallBalance) - Number(self.state.balance);
    self.setState({
      overallBalance: currentBalance
    })
    let date = new Date().toISOString();
    let transactionDetails = date + " - " + self.state.balance + " - Remove";
    self.transactionArray.push(<p>{transactionDetails}</p>)
  }
  render(){
    return(
      <div className="App-Wrapper">
        <div className="App">
          <h2 className="header">Expense Tracker - Basic</h2>
          <div className="balance-container">
            <h4>Balance : {this.state.overallBalance}</h4>
            <input type="number" value={this.state.balance} onChange={(e)=> this.handleBalanceChange(e)}></input><br />
            <input type="button" onClick={this.handleAddClick}>Add</input>
            <input type="button" onClick={this.handleRemoveClick}>Remove</input>
          </div>
          <div className="transactions-container">
            <h4 className="header"> Transactions: </h4>
            <div className="transaction-details">
              {this.transactionArray}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;