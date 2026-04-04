import Card from './components/Card'
// import User from './components/User'

// const App = () => {

//   // const arr = [10,20,30,40];

//   const obj = [{user: 'Aditya', age:20}, {user: 'Shaurya', age:28}, {user: 'Ayush', age:19}]

//   obj.map(function (elem) {
//     console.log(elem.user);
//   })

//   return (
//     <div className='parent'>
//       <User name = {arr[0]}/>
//       <User name = 'Sarthak'/>
//       <User name = 'Sarthak'/> 

//       {arr.map(function(elem){
//         return {elem}
//       })}
//     </div>
//   )
// }

// export default App


const App = () => {

  const jobs = [
  {
    logo: "https://static.vecteezy.com/system/resources/previews/014/018/561/non_2x/amazon-logo-on-transparent-background-free-vector.jpg",
    company: "Amazon",
    datePosted: "2 days ago",
    post: "Senior UI/UX Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$120/hr",
    location: "Seattle, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    company: "Google",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$145/hr",
    location: "Mountain View, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    company: "Netflix",
    datePosted: "1 week ago",
    post: "React Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    pay: "$160/hr",
    location: "Los Gatos, USA"
  },
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg",
    company: "Meta",
    datePosted: "3 days ago",
    post: "Product Designer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$135/hr",
    location: "Menlo Park, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
    company: "Microsoft",
    datePosted: "2 weeks ago",
    post: "Backend Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$130/hr",
    location: "Redmond, USA"
  },
  {
    logo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    company: "Apple",
    datePosted: "10 days ago",
    post: "iOS Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$150/hr",
    location: "Cupertino, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLYglJ5cooESw4EEKVpBAtJQtGC4qYb9Os_Q&s",
    company: "LinkedIn",
    datePosted: "4 days ago",
    post: "Full Stack Developer",
    tag1: "Remote",
    tag2: "Junior Level",
    pay: "$95/hr",
    location: "Sunnyvale, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1JPvedCBmNG39bU4Zvq1PJTRRl6Nc8OOimA&s",
    company: "Uber",
    datePosted: "3 weeks ago",
    post: "Data Engineer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    pay: "$110/hr",
    location: "San Francisco, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZcUA9HELJ8w6S4ovlFunEZ_BpQ-ozISsHtA&s",
    company: "Twitter / X",
    datePosted: "6 days ago",
    post: "DevOps Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$125/hr",
    location: "Austin, USA"
  },
  {
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-0sgMITwNqzwWbNZfDxjhGmmje755YgLHQ&s",
    company: "Airbnb",
    datePosted: "1 month ago",
    post: "UX Researcher",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$80/hr",
    location: "San Francisco, USA"
  }
]


  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        return <div key={idx}>
          <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} logo={elem.logo} pay={elem.pay} tag2={elem.tag2} />
        </div>
      })}
    </div>
  )
}

export default App


