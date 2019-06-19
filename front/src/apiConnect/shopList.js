import axios from 'axios';

const shopList = async (input="サンセット") => {
  try {
    const uri = 'http://localhost:3001/place/' + input;
    const res = await axios.get(uri);
    return res.data.predictions
  } catch (error) {
    console.log(error);
    return {}
  }
};

export default shopList