import React, { Component } from 'react'
import ReactDOM from 'react-dom'
export default class App extends React.Component {
  state = {
    amount: 0
  };

  constructor() {
    super();
    this.changeAmount = this.changeAmount.bind(this);
  }

  changeAmount(e) {
    this.setState({ amount: e.target.value });
  }

  render() {
    return (
      <div>
        <form
          method="POST"
          action="https://api.razorpay.com/v1/checkout/embedded"
        >
          <input type="hidden" name="key_id" value="rzp_test_rwVNqXFDCnSJjO" />
          <input type="hidden" name="amount" value={this.state.amount} />
          <input type="hidden" name="name" value="Acme Corp" />
          <input type="hidden" name="description" value="A Wild Sheep Chase" />
          <input
            type="hidden"
            name="image"
            value="https://cdn.razorpay.com/logos/BUVwvgaqVByGp2_large.png"
          />
          <input type="hidden" name="prefill[name]" value="Gaurav Kumar" />
          <input type="hidden" name="prefill[contact]" value="9123456780" />
          <input
            type="hidden"
            name="prefill[email]"
            value="gaurav.kumar@example.com"
          />
          <input
            type="hidden"
            name="notes[shipping address]"
            value="L-16, The Business Centre, 61 Wellfield Road, New Delhi - 110001"
          />
          <input
            type="hidden"
            name="callback_url"
            value="https://example.com/payment-callback"
          />
          <input
            type="hidden"
            name="cancel_url"
            value="https://example.com/payment-cancel"
          />
          <button>Pay Rs. {this.state.amount / 100}</button>
        </form>
        <input type="text" onChange={this.changeAmount} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
