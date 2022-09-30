import axios from "axios"
function getData(email,password){
    return axios.get(`https://rohitcena.herokuapp.com/login?email=${email}&passwaord=${password}`);
}
async function postData(email,password,number){
    let data = await fetch(
        "https://rohitcena.herokuapp.com/login",
        {
          method: "POST",
          body: JSON.stringify({email, number, password }),
          headers: { "Content-Type": "application/json" },
        }
      );
}
export {getData,postData}