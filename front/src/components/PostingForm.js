import React from 'react'
import ShopWrapper from './ShopWrapper'
import ShopSearchInput from '../containers/ShopSearchInput'
import PredictedShopList from '../containers/PredictedShopList'

const PostingForm = ({ dispatchPostAction, shop }) => {
  let title, input2, input3
  let recommends = [
    {
      name: "",
      price: ""
    },
    {
      name: "",
      price: ""
    },
    {
      name: "",
      price: ""
    }
  ]

  return (
    <div>
      <form>
        <div>
          <label>コレクション名: </label>
          <input
            ref={node => { title = node }}
          />
        </div>

        <div>
          <p>オススメ1</p>
          <div>
            <label>名前: </label>
            <input
              ref={node => { recommends[0].name = node }}
            />
          </div>
          <div>
            <label>値段: </label>
            <input
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[0].price = node }}
            />
          </div>




          <ShopWrapper index={0} />
          <ShopSearchInput />
          <PredictedShopList />
        </div>
      </form>
      <button
        type="submit"
        onClick={e => {
          console.log(shop)
          dispatchPostAction({
            title: title.value,
            recommends: [
              {
                name: recommends[0].name.value,
                price: recommends[0].price.value,
                shop: {
                  name: shop.name,
                  googlemap_link: shop.url
                }
              }
            ]
          })
          title.value = recommends[0].name.value = recommends[0].price.value = ""
        }
        }
      >
        投稿
      </button>
    </div>
  )
}

export default PostingForm