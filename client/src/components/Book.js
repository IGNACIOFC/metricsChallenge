import React from 'react'
import axios from 'axios'

function Book({fetchMetrics}) {
  async function postMetrics() {
    try {
      const response = await axios.post("http://localhost:8000/api/metrics", {
        name: "nuevo libro",
        price: "9"
    })
    fetchMetrics()
    console.log(response.data)
    } catch (error) {
      console.error(error)
    }
  }
  return(
    <div>
      <div className="content">
        <h1>Get our New HR Ebook!</h1>
        <h4>How to create an HR department for your Startup.</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum hendrerit mauris eu pellentesque vestibulum. Suspendisse eleifend 
          imperdiet nisi ut tincidunt. 
          Nulla pharetra nunc eget ante lobortis, vel consequat sem tincidunt. 
          Mauris vel ex magna. Cras auctor diam ipsum, 
          non pulvinar sem ultricies eget.</p>
        <div>
          <button onClick={() => postMetrics()}>DOWNLOAD</button>
        </div>
      </div>
      <div>
        <img></img>
      </div>
    </div>
  )
}

export default Book