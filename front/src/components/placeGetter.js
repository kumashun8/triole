import React from 'react';
import axios from 'axios';

class PlaceGetter extends React.Component {
  getFromAPI = async (input="かき氷") => {
    try {
      const uri = 'http://localhost:3001/place/' + input;
      const result = await axios.get(uri);
      console.log(result.data.predictions);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <button onClick={() => this.getFromAPI()}>get profile!</button>
      </div>
    );
  }
}

export default PlaceGetter