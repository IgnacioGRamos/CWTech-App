import axios from 'axios';


export function getText(text) {
    return  async function(dispatch) {
      var info = await axios.get(`https://backendcwtech.herokuapp.com/word?text=${text}`);

      if(info.data.success === true) {
        return dispatch({
          type: 'GET_TEXT',
          payload: info.data.message
        })
      }

      return
    };
};
