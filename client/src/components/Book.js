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
    <div className="book_container">
      <div className="content">
        <h1 className="title">Get our New HR Ebook!</h1>
        <h4 className="subtitle">How to create an HR department for your Startup.</h4>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Vestibulum hendrerit mauris eu pellentesque vestibulum. Suspendisse eleifend 
          imperdiet nisi ut tincidunt. 
          Nulla pharetra nunc eget ante lobortis, vel consequat sem tincidunt. 
          Mauris vel ex magna. Cras auctor diam ipsum, 
          non pulvinar sem ultricies eget.</p>
        
        <div className="price_container">
          <button className="download" onClick={() => postMetrics()}>DOWNLOAD</button>
          <p className="price"><strong>Only $5</strong> 😊</p>
        </div>
      </div>
      <div class>
        <img src={"https://www.officevibe.com/wp-content/uploads/2015/07/ebook_10_pillars.png"}></img>
      </div>
    </div>
  )
}

export default Book