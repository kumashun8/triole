import React from 'react'
import PropTypes from 'prop-types'
import ShopOkuButton from '../containers/ShopOkButton'
import ShopOkuButton2 from '../containers/ShopOkButton2'
import ShopOkuButton3 from '../containers/ShopOkButton3'
import ShopCancellButton from '../containers/ShopCancellButton'
import ShopCancellButton2 from '../containers/ShopCancellButton2'
import ShopCancellButton3 from '../containers/ShopCancellButton3'

const SelectedShop = ({ shops, i }) => (
  <>
    <a
      href={shops[i].url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {shops[i].name}
    </a>
    <div>
      <ShopCancellButton />
      <ShopOkuButton />
    </div>
  </>
);

SelectedShop.propTypes = {
  selectedShop:　PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }).isRequired,
  index: PropTypes.number.isRequired
}

export default SelectedShop
