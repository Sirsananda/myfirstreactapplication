import React from 'react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=tcs.com&sz=128",
      companyName: "Tata Consultancy Services",
      datePosted: "2 days ago",
      post: "Frontend Developer",
      tag1: "Full-time",
      tag2: "React.js",
      pay: "₹5–8 LPA",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=infosys.com&sz=128",
      companyName: "Infosys",
      datePosted: "1 day ago",
      post: "Software Engineer",
      tag1: "Full-time",
      tag2: "Java",
      pay: "₹4–7 LPA",
      location: "Pune, India"
    }

  ];

  return (
    <div className='parent'>
      {
        jobOpenings.map(function (elem, idx) {
          return <div key={idx}>
            <Card logo={elem.brandLogo} company={elem.companyName} postedDate={elem.datePosted}
              postName={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
          </div>
        })}
    </div>
  )
}

export default App