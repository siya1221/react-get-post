import React, { useState } from "react";
import axios from "axios";
const App = () => {
  //getrequest
  const getDataFromBackend = async () => {
    const response = await axios.get("http://localhost:8080/call");
    //console.log(response.data);
    document.getElementById("para").innerHTML = response.data;
  };

  //postrequest
  const data = "hello";
  const postDataFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testpost", {
      data,
    });
    //console.log(response.data);
    document.getElementById("para1").innerHTML = response.data;
  };

  const [formData, setformData] = useState("");
  const postFormFromFrontend = async () => {
    const response = await axios.post("http://localhost:8080/testform", {
      formData,
    });
    //console.log(response.data);
    document.getElementById("para1").innerHTML = response.data;
  };

  return (
    <div className="App">
      <button onClick={getDataFromBackend}>Get Data</button>
      <p id="para"></p>

      <br></br>
      <button onClick={postDataFromFrontend}>Post Data</button>
      <p id="para1"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formdata"
          value={formData}
          onChange={(e) => setformData(e.target.value)}
        />
        <input type="submit" value="Test Form"></input>
      </form>
    </div>
  );
};
export default App;
