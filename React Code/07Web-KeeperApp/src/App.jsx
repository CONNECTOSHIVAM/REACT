import React from "react";
import Header from "./components/Header";
import Note from "./components/Note";
import Footer from "./components/Footer";




function App(){

  const notes = [
  {
    heading: "Grocery list for weekend",
    text: "Buy milk, eggs, bread, tomatoes, onions, rice, and some snacks for the match."
  },
  {
    heading: "Study plan for Python",
    text: "Revise functions and classes, then practice 5 coding problems on loops and lists."
  },
  {
    heading: "Workout routine",
    text: "Morning: 10-minute warmup, 3 sets of pushups, squats, and planks; Evening: 20-minute walk."
  },
  {
    heading: "Cricket match reminders",
    text: "Check tomorrow’s fixture, note the start time, and set an alarm 15 minutes before toss."
  },
  {
    heading: "College assignment tasks",
    text: "Finish report introduction, add diagrams, and proofread before submitting on the portal."
  },
  {
    heading: "Travel packing checklist",
    text: "Pack clothes, charger, headphones, toiletries, and print or save all ticket PDFs."
  },
  {
    heading: "Monthly budget notes",
    text: "Track expenses for food, transport, subscriptions, and keep a buffer for emergencies."
  },
  {
    heading: "Project ideas list",
    text: "Note-taking app with tags, small cricket score tracker, and a personal expense tracker."
  },
  {
    heading: "Important phone numbers",
    text: "Save contact details for family, close friends, doctor, and college office."
  },
  {
    heading: "Goals for this month",
    text: "Code at least 5 days a week, read one book, and improve sleep schedule."
  }
];



  return(
    <>
    <Header/>
    <div className="card">
      {notes.map((elem,index)=>(
      <Note key={index} heading={elem.heading} text={elem.text} />
    ))}
    </div>
    <Footer/>
    </>
  )
}

export default App;