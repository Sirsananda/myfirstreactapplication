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
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=wipro.com&sz=128",
      companyName: "Wipro",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full-time",
      tag2: "React.js",
      pay: "₹5–9 LPA",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=accenture.com&sz=128",
      companyName: "Accenture",
      datePosted: "Today",
      post: "Full Stack Developer",
      tag1: "Full-time",
      tag2: "Node.js",
      pay: "₹6–10 LPA",
      location: "Mumbai, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=ibm.com&sz=128",
      companyName: "IBM",
      datePosted: "4 days ago",
      post: "Cloud Engineer",
      tag1: "Full-time",
      tag2: "AWS",
      pay: "₹8–14 LPA",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=oracle.com&sz=128",
      companyName: "Oracle",
      datePosted: "2 days ago",
      post: "Backend Developer",
      tag1: "Full-time",
      tag2: "Java",
      pay: "₹7–12 LPA",
      location: "Hyderabad, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=adp.com&sz=128",
      companyName: "ADP",
      datePosted: "5 days ago",
      post: "QA Automation Engineer",
      tag1: "Full-time",
      tag2: "Selenium",
      pay: "₹5–9 LPA",
      location: "Chennai, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=capgemini.com&sz=128",
      companyName: "Capgemini",
      datePosted: "Today",
      post: "Dot Net Developer",
      tag1: "Full-time",
      tag2: "ASP.NET Core",
      pay: "₹6–11 LPA",
      location: "Pune, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=dell.com&sz=128",
      companyName: "Dell Technologies",
      datePosted: "1 day ago",
      post: "Data Engineer",
      tag1: "Full-time",
      tag2: "SQL",
      pay: "₹8–13 LPA",
      location: "Bengaluru, India"
    },
    {
      brandLogo: "https://www.google.com/s2/favicons?domain=techmahindra.com&sz=128",
      companyName: "Tech Mahindra",
      datePosted: "3 days ago",
      post: "UI Developer",
      tag1: "Contract",
      tag2: "JavaScript",
      pay: "₹4–8 LPA",
      location: "Noida, India"
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