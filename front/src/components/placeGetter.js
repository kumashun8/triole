import React from 'react';
import axios from 'axios';

class PlaceGetter extends React.Component {
  getFromAPI = async () => {
    try {
      const result = await axios.get(`${"https://api.github.com/users"}/8810KMKM`);
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