import React from 'react'

const Content = () => {
  return (
    <section className="text-gray-600 body-font" id='content'>
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden flex justify-center align-center">
          <iframe width="600" height="415" src="https://www.youtube.com/embed/40az1JH9c9c" frameBorder="0" ></iframe>
          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lloyd Estello Washing Machine</h2>
          <p className="leading-relaxed text-base">We meticulously crafted a captivating video, seamlessly blending artistry and innovation to showcase the brilliance of Lloyd washing machines</p>
          </div>
        <div className="sm:w-1/2 mb-10 px-4">
          <div className="rounded-lg h-64 overflow-hidden">
          <iframe width="600" height="415" src="https://www.youtube.com/embed/mnEQpvXsh4Q" frameBorder="0" ></iframe>

          </div>
          <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">Lloyd Refrigerator</h2>
          <p className="leading-relaxed text-base">We artfully composed a mesmerizing video, skillfully showcasing the sleek design and advanced features of Lloyd Refrigerators, turning ordinary moments into extraordinary experiences</p>
           </div>
      </div>
    </div>
  </section>
  )
}

export default Content