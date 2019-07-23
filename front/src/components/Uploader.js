import React from 'react';

class Uploader extends React.Component {

  readFile(files) {
    if (files && files[0]) {
      let formPayLoad = new FormData();
      formPayLoad.append('uploaded_image', files[0]);
      this.sendImageToController(formPayLoad)
    }
  }

  sendImageToController(formPayLoad) {
    fetch(process.env.REACT_APP_API_URI + '/api/v1/recommends/', {
      credentials: 'same-origin',
      headers: {},
      method: 'POST',
      body: formPayLoad
    })
    .then(responce => responce.json())
  }

  render() {
    return (
      <div>
        <input type="file" onClick={ this.readFile } />
      </div>
    )
  }
}

export default Uploader