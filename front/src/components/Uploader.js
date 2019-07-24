import React from 'react'

class Uploader extends React.Component {

  readFile(files) {
    console.log(files[0])
    if (files && files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('reco_image', files[0]);
      formPayLoad.append('name', "ハムタロサァン")
      formPayLoad.append('price',114514)

      
      this.sendImageToController(formPayLoad)
    }
  }

  sendImageToController(formPayLoad) {
    console.log("hoge")
    fetch(process.env.REACT_APP_API_URI + '/api/v1/recommends/', {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
    })
      .then(responce => console.log(responce))
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