import React from 'react'
import ShopWrapper from './ShopWrapper'

const preventEnterKey = () => {
  if (window.event.keyCode === 13) {
    document.collectionForm.submit()
  }
}

const PostingForm = ({ dispatchPostAction, shop }) => {
  let title
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
      <form name="collectionForm">
        <div>
          <label>コレクション名: </label>
          <input
            onKeyPress={e => preventEnterKey()}
            ref={node => { title = node }}
          />
        </div>

        <div>
          <p>オススメ1</p>
          <div>
            <label>名前: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[0].name = node }}
            />
          </div>
          <div>
            <label>値段: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[0].price = node }}
            />
          </div>
          <ShopWrapper />
        </div>
        <div>
          <p>オススメ2</p>
          <div>
            <label>名前: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[1].name = node }}
            />
          </div>
          <div>
            <label>値段: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[1].price = node }}
            />
          </div>
          <ShopWrapper />
        </div>
        <div>
          <p>オススメ3</p>
          <div>
            <label>名前: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[2].name = node }}
            />
          </div>
          <div>
            <label>値段: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[2].price = node }}
            />
          </div>
          <ShopWrapper />
        </div>
        <button
        type="button"
        onClick={e => {
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
              },
              {
                name: recommends[1].name.value,
                price: recommends[1].price.value,
                shop: {
                  name: shop.name,
                  googlemap_link: shop.url
                }
              },
              {
                name: recommends[2].name.value,
                price: recommends[2].price.value,
                shop: {
                  name: shop.name,
                  googlemap_link: shop.url
                }
              },
            ]
          })
          title.value = ""
          recommends.map(recommend => 
            recommend.name.value = recommend.price.value = ""
          )
        }}
      >
        投稿
      </button>

      </form>

      
    </div>
  )
}

export default PostingForm