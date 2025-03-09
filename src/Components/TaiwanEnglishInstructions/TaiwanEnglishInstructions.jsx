import {React,useState} from "react";
import Navbar from "../Navbar/Navbar";
const TaiwanEnglishInstructions = () => {
    const [name, setName] = useState("");
  const [signature, setSignature] = useState("");
  const [date, setDate] = useState("");
  const handleSubmit = () => {
    // Handle form submission
    console.log("Name:", name);
    console.log("Signature:", signature);
    console.log("Date:", date);
  };

  return (
    
    <div>
        <Navbar/>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4">
        Western Michigan University 
        <br></br>
        Special Education and Literacy Studies
      </h1>
      <p className="text-lg font-semibold">Principal Investigator：Dr. Kwangmin Lee</p>
      <p className="text-lg font-semibold">Title of Study:Providing textual enhancement for sound source use to second/foreign (L2) language test-takers</p>
      <p className="mt-4">

      You are invited to participate in this research project titled “Providing textual enhancement for sound source use to second/foreign (L2) language test-takers"
      </p>
      <h2 className="text-xl font-semibold mt-4">STUDY SUMMARY:</h2>
      <p className="mt-2">
      This consent form is part of an informed consent process for a research study and it will provide information that will help you decide whether you want to take part in this study.  Participation in this study is completely voluntary. The purpose of the research is to examine the extent to which providing textual enhancement targeting instances of verbatim source use affects source use patterns in integrated writing. If you participate in the research, you'll undergo two integrated writing assessments on separate occasions. The first assessment won't provide textual enhancement for direct source use. The second assessment may or may not include textual enhancement, depending on your performance in the initial assessment. Your time in the study will take about one hour per assessment. Possible risk and costs to you for taking part in the study may be minimal, with no sensitive questions. All that's required for this study is to visit the testing center twice at the specified times. Your alternative to taking part in the research study is not to take part in it.    
      </p>
      <br></br>
      <p className="mt-2">
      The following information in this consent form will provide more detail about the research study.  Please ask any questions if you need more clarification and to assist you in deciding if you wish to participate in the research study.  You are not giving up any of your legal rights by agreeing to take part in this research or by signing this consent form.  After all of your questions have been answered and the consent document reviewed, if you decide to participate in this study, you will be asked to sign this consent form.     </p>
      <h2 className="text-xl font-semibold mt-4">What are we trying to find out in this study?</h2>
      <p className="mt-2">
      I am trying to find out the extent to which providing AI-powered support helps with your performance in reading-to-write integrated tasks.
      </p >
      <h2 className="text-xl font-semibold mt-4">Who can participate in this study?</h2>
      <p className="mt-2">Any undergraduate students at Western Michigan University who speak English as a second language can participate in this study.</p>
      <h2 className="text-xl font-semibold mt-4">Where will this study take place?</h2>
      <p className="mt-2">You will be invited to a computer lab located in Sangren Hall to take the writing assessment twice at a one-week interval between the assessments.</p>
      <h2 className="text-xl font-semibold mt-4">What is the time commitment for participating in this study?</h2>
      <p className="mt-2">
      Each writing assessment will last 30 minutes. Plan for a maximum of 1 hour for each session.      </p>
      <h2 className="text-xl font-semibold mt-4">What will you be asked to do if you choose to participate in this study?</h2>
      <p className="mt-2">
      All we ask you to do is to take an integrated writing assessment for each of the two assessment sessions, as you would take the Test of English as a Foreign Language (TOEFL) test. You will work on the writing assessments individually and silently.
      </p>
      <h2 className="text-xl font-semibold mt-4">What information is being measured during the study?</h2>
      <p className="mt-2">
      We would like to assess whether providing textual enhancements targeting instances of verbatim source use helps lower reliance on inappropriate source use. As part of Assessment 1, all the participants will take the writing assessment without any types of support, as in the way the TOEFL test is carried out. For Assessment 2, however, some participants will be given textual enhancements directing their attention to verbatim source uses.  
      </p>
      <h2 className="text-xl font-semibold mt-4">What are the risks of participating in this study and how will these risks be minimized?</h2>
      <p className="mt-2">
      We foresee few to no risks that participation in this study may pose to you. I would like to gather data that will help shape the test design of the integrated writing task. While this research study may pose minimal risks to your well-being, I will go to great strengths to safeguard your well-being against potential risks. For instance, at any time during the study, you can express your hope to withdraw from the study. 
      </p>
      <h2 className="text-xl font-semibold mt-4">What are the benefits of participating in this study?</h2>
      <p className="mt-2">
      One of the benefits you can expect to reap by participating in this study is that you will be able to learn sound second/foreign language writing practices. You will pay attention to the way you write, reflect on it, and think of ways forward as you read and write for academic purposes.      </p>
      <h2 className="text-xl font-semibold mt-4">Are there any costs associated with participating in this study?</h2>
      <p className="mt-2">There are no costs associated with participating in this study.</p>
      <h2 className="text-xl font-semibold mt-4">Is there any compensation for participating in this study?</h2>
      <p className="mt-2">No, but you may request feedback for your integrated writing proficiency.</p>
      <h2 className="text-xl font-semibold mt-4">Who will have access to the information collected during this study?</h2>
      <p className="mt-2">I am the sole person who will have access to the information collected during this study. </p>
      <h2 className="text-xl font-semibold mt-4">What will happen to my information or biospecimens collected for this research project after the study is over?  </h2>
      <p className="mt-2">
      After information that could identify you has been removed, de-identified information collected for this research may be used by or distributed to investigators for other research without obtaining additional informed consent from you.
      </p>
      <h2 className="text-xl font-semibold mt-4">What if you want to stop participating in this study?</h2>
      <p className="mt-2">
      You can choose to stop participating in the study at any time for any reason.  You will not suffer any prejudice or penalty by your decision to stop your participation.  You will experience NO consequences either academically or personally if you choose to withdraw from this study.

    </p>
    <br></br>
    <p className="mt-2">The investigator can also decide to stop your participation in the study without your consent.</p>
    <p className="mt-2">Should you have any questions prior to or during the study, you can contact Dr. Kwangmin Lee at Special Education and Literacy Studies at kwangmin.1.lee@wmich.edu or kck3914@wmich.edu. You may also contact the Chair, Institutional Review Board at 269-387-8293 or the Vice President for Research and Innovation at 269-387-8298 if questions arise during the course of the study.</p>
    <p className="mt-2">This consent document has been approved for use for one year by the Western Michigan University Institutional Review Board (WMU IRB), as indicated by the IRB approval date stamped in the lower right corner.  Do not participate in this study if the stamped date is order than one year.</p>
    <p className="mt-2">I have read this informed consent document.  The risks and benefits have been explained to me.  I agree to take part in this study.</p>
    <div className="mt-4">
            <label className="block text-lg font-semibold">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mt-4">
            <label className="block text-lg font-semibold">Signature</label>
            <input
              type="text"
              placeholder="Signature"
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mt-4">
            <label className="block text-lg font-semibold">Date</label>
            <input
              type="date"
              value={date}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setDate(e.target.value)}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mt-6 flex justify-center">
          <button
  onClick={handleSubmit}
  className="px-6 py-3 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 focus:outline-none"
>
  Submit
</button>

        </div>

    </div>
   
           

         
    </div>
  );
};

export default TaiwanEnglishInstructions;