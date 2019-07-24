import React from 'react'
import axios from 'axios';

class Uploader extends React.Component {

  readFile(files) {
    if (files && files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('reco_image', files[0])
      formPayLoad.append('name', "次郎丸")
      formPayLoad.append('price', 230)

      console.log(formPayLoad.getAll('reco_image'))
      this.sendImageToController(formPayLoad)
    }
  }

  sendImageToController(formPayLoad) {
    console.log("hoge")
    axios.post(process.env.REACT_APP_API_URI + '/api/v1/recommends/', formPayLoad)
      .then(res => {
      console.log(res)
    })
    // fetch(process.env.REACT_APP_API_URI + '/api/v1/recommends/', {
    //   credentials: 'same-origin',
    //   headers: {},
    //   method: 'POST',
    //   body: formPayLoad
    // })
    //   .then(responce => console.log(responce))
  }

  render() {
    return (
      <div>
        <input type='file' onClick={e =>  this.readFile(e.target.files) } />
      </div>
    )
  }
}

export default Uploader