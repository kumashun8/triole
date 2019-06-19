import React from 'react'
import Shop from './Shop'

class ShopList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.shopList.map((shop, index) => (
          <Shop name={this.props.description} />
        ))}
      </ul>
    );
  }
}

export default ShopList