import React from 'react';
import axios from 'axios';

class PlaceGetter extends React.Component {
  getFromAPI = async () => {
    try {
      const result = await axios.get('http://localhost:3001/place');
      console.log(result);
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