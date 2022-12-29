import React from 'react'
import ShopWrapper from './ShopWrapper'
import ShopWrapper2 from './ShopWrapper2'
import ShopWrapper3 from './ShopWrapper3'
import ImageUploader1 from '../containers/ImageUploader1'
import ImageUploader2 from '../containers/ImageUploader2'
import ImageUploader3 from '../containers/ImageUploader3'
import Styles from '../styles/components/postingForm.module.scss'
import {
  Form,
  Button,
  Accordion,
  Card
} from 'react-bootstrap'

import { Formik } from 'formik'
import * as yup from 'yup';

const schema = yup.object({
  title: yup.string().required("コレクション名は必須です。")
})

const getFormData = (title, description, tags, recommends, shops, images) => {
  let formPayLoad = new FormData()
  formPayLoad.append('title', title.value)
  formPayLoad.append('description', description.value)
  formPayLoad.append('tags', tags.value)
  recommends.map(function (recommend, i) {
    formPayLoad.append(`reco_name_${i + 1}`, recommend.name.value)
    formPayLoad.append(`reco_price_${i + 1}`, recommend.price.value)
    formPayLoad.append(`shop_name_${i + 1}`, shops[i].name)
    formPayLoad.append(`shop_googlemap_link_${i + 1}`, shops[i].url)
    formPayLoad.append(`shop_prefecture_${i + 1}`, findPrefecture(shops[i].address_components))
    if (images[i].file) {
      formPayLoad.append(`reco_image_${i + 1}`, images[i].file)
    }
    return 0
  })
  return formPayLoad
}

const findPrefecture = (address) => {
  if (address) {
    const length = address.length
    if (length < 3) {
      return ""
    }
    const target = address[length - 3]
    return target.long_name
  }
  return ""
}

const PostingForm = ({ dispatchPostAction, dispatchClearShopList, dispatchClearSelectedShop, dispatchClearPreview, dispatchCloseThis, shops, images}) => {
  let title, description, tags
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

  const ObjectTrio = [
    {
      image: <ImageUploader1 />,
      shop: <ShopWrapper />
    },
    {
      image: <ImageUploader2 />,
      shop: <ShopWrapper2 />
    },
    {
      image: <ImageUploader3 />,
      shop: <ShopWrapper3 />
    }
  ]
  
  
  return (
    <Formik
      className={Styles.formWrapper}
      validationSchema={schema}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        isValid,
        errors,
      }) => (
        <Form className={Styles.collection} noValidate onSubmit={handleSubmit}>
        <Form.Group controlId="validationFormik06">
          <Form.Label>コレクション名</Form.Label>
          <Form.Control
            name="title"
            value={values.title}
            placeholder="30文字以内"
            onChange={ console.log(errors)}
            ref={node => { title = node }} 
            isInValid= {!!errors.title}
          />
          <Form.Control.Feedback type="invalid">
            {errors.title}
          </Form.Control.Feedback>  
        </Form.Group>
        <Form.Group controlId="formGroupTextArea">
          <Form.Label>説明</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="120文字以内"
            rows="3"
            ref={node => {description = node}}
          />
          </Form.Group>
          <Form.Group controlId="formGroupTextArea">
          <Form.Label>タグ</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="タグの間はスペースを入れてください"
            rows="2"
            ref={node => {tags = node}}
          />
        </Form.Group>
        <Accordion defaultActiveKey={1} >
          {(ObjectTrio).map((MyObject, i) => (
            <Card>
              <Card.Header>
                <Accordion.Toggle
                  eventKey={i + 1}
                  as={Button}
                  variant="light"
                  className={Styles.marker}
                >
                  {i === 0 ?
                    `レコメンド${i + 1} (必須)` :
                    `レコメンド${i + 1} `
                  }
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey={i + 1}>
                <Card.Body>
                  <Form.Group>
                    <Form.Label>名前</Form.Label>
                    <Form.Control
                      placeholder="30文字以内"
                      ref={node => { recommends[i].name = node }}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>値段 [円]</Form.Label>
                    <Form.Control
                      type="number"
                      ref={node => { recommends[i].price = node }}
                    />
                  </Form.Group>
                  {MyObject.image}
                  {MyObject.shop}
                  
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          ))}
        </Accordion>
        <Button type="submit">Submit form</Button>
      </Form>
      )}
    </Formik>
  )
}

export default PostingForm

{/* <Button
          type="button"
          className={Styles.submitButton}
          noValidate onClick={e => {
            const formData = getFormData(title, description, tags, recommends, shops, images)
            dispatchPostAction(formData)
            title.value = ""
            description.value = ""
            recommends.map(recommend => 
              recommend.name.value = recommend.price.value = ""
            )
            for (let i = 1; i < 4; i++) {
              dispatchClearShopList(i)
              dispatchClearSelectedShop(i)
              dispatchClearPreview(i)
            }
            // dispatchCloseThis()
          }}   
        >
          投稿!!
        </Button>     */}