import React from 'react'
import ShopWrapper from './ShopWrapper'
import ShopWrapper2 from './ShopWrapper2'
import ShopWrapper3 from './ShopWrapper3'
import Headline from './Headline'
import Styles from '../styles/components/postingForm.module.scss'
import Uploader from './Uploader'

const preventEnterKey = () => {
  if (window.event.keyCode === 13) {
    document.collectionForm.submit()
  }
}

const getFormData = (title, recommends, shops) => {
  let formPayLoad = new FormData()
  formPayLoad.append('title', title.value)
  recommends.map(function (recommend, i) {
    formPayLoad.append(`reco_name_${i + 1}`, recommend.name.value)
    formPayLoad.append(`reco_price_${i + 1}`, recommend.price.value)
    formPayLoad.append(`shop_name_${i + 1}`, shops[i].name)
    formPayLoad.append(`shop_googlemap_link_${i + 1}`, shops[i].url)
    const files = recommend.reco_image
    if (files && i === 0) {
      formPayLoad.append(`reco_image_${i + 1}`, files)
    }
    return 0
  })
  return formPayLoad
  
} 

const PostingForm = ({ dispatchPostAction, dispatchClearShopList, dispatchClearSelectedShop, shops }) => {
  let title
  let recommends = [
    {
      name: "",
      price: "",
      reco_image: {}
    },
    {
      name: "",
      price: "",
      reco_image: {}
    },
    {
      name: "",
      price: "",
      reco_image: {}
    }
  ]

  return (
    <div className={Styles.formWrapper}>
      <Headline title="投稿フォーム" />
      <Uploader/>
      <form
        className={Styles.collection}
        name="collectionForm"
        method="post"
        enctype="multipart/form-data"
      >
        <div className={Styles.collection_title}>
          <label>コレクション名: </label>
          <input
            size="48"
            maxLength="30"
            placeholder="30文字以内"
            onKeyPress={e => preventEnterKey()}
            ref={node => { title = node }}
          />
        </div>
        <p className={Styles.marker}>レコメンド1</p>    
        <div className={Styles.collection_recommend}>
          <div className={Styles.collection_recommend_name}>
            <label>名前: </label>
            <input
              placeholder="30文字以内"
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[0].name = node }}
            />
          </div>
          <div className={Styles.collection_recommend_price}>
            <label>値段[円]: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[0].price = node }}
            />
          </div>
          <div className={Styles.collection_recommend_image}>
            <label>写真: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="file"
              multiple="true"
              onChange={e => recommends[0].reco_image = e.target.files[0]}
            />
          </div>
        </div>
        <ShopWrapper />
        <p className={Styles.marker}>レコメンド2</p>  
        <div className={Styles.collection_recommend}>
          <div className={Styles.collection_recommend_name}>
            <label>名前: </label>
            <input
              placeholder="30文字以内"
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[1].name = node }}
            />
          </div>
          <div className={Styles.collection_recommend_price}>
            <label>値段[円]: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[1].price = node }}
            />
          </div>
        </div>
        <ShopWrapper2 />
        <p className={Styles.marker}>レコメンド3</p>  
        <div className={Styles.collection_recommend}>
          <div className={Styles.collection_recommend_name}>
            <label>名前: </label>
            <input
              placeholder="30文字以内"
              onKeyPress={e => preventEnterKey()}
              ref={node => { recommends[2].name = node }}
            />
          </div>
          <div className={Styles.collection_recommend_price}>
            <label>値段[円]: </label>
            <input
              onKeyPress={e => preventEnterKey()}
              type="number"
              min="0"
              max="10000000"
              step="100"
              ref={node => { recommends[2].price = node }}
            />
          </div>
        </div>
        <ShopWrapper3 />
        <button
          className={Styles.submitButton}
          type="button"
          onClick={e => {
            const formData = getFormData(title, recommends, shops)
            dispatchPostAction(formData)
            title.value = ""
            recommends.map(recommend => 
              recommend.name.value = recommend.price.value = ""
            )
            for (let i = 1; i < 4; i++) {
              dispatchClearShopList(i)
              dispatchClearSelectedShop(i)
            }
          }}
        >
          投稿!!
      </button>

      </form>

      
    </div>
  )
}

export default PostingForm