import './App.css';
import QuoteList from './listofquotes';
import SkillList from './listofSkills';
import JobList from './joblist';

function QuoteCard(props) {
  return (
    <div className='quoteCards'>
      <p>
        "{props.text}"
      </p>
    </div>
  )
}

function JobCards(props) {
  return (
    <div className='jobcardOutlien'>
      <h2>{props.Title}</h2>
      <h3>Salary  : ${props.salary}</h3>
      <h4>Stress Level : {props.sressss}</h4>
      <p>Description : {props.des}</p>
      <p>Education : {props.ed} </p>

    </div>
  )
}

function App() {


  return (
    <div className="App">
      <navbar className='navbarCont'>
        <navbar className='navbarContMax'>
          <a href='#Skills'>
            Skills
          </a>
          <a href='#Challanges'>
            Challanges
          </a>
          <a href='#Comp'>
            Comparison
          </a>
          <a href='#Jobs'>
            Jobs
          </a>
        </navbar>
      </navbar>
      <div className='titleSection'>
        <div className='titleSectionMaxCont'>
          <div>
            <h1 id='titlehtag'>
              What Medical Career Suits You?
            </h1>
          </div>
          <div>
            <p id='titlePtag'>
              All of the advice and data on this website are the answers to a survey filled out by 55 medical professionals and they acurately depict the ups and downs of the medical field.
            </p>
          </div>
        </div>
      </div>
      <div className='adviceSection'>
        <h1>
          Advice From Pros
        </h1>
        <div className='adviceSectioncont'>
          {QuoteList.map((Number, index) =>
            <QuoteCard text={Number} />
          )}
        </div>
      </div>
      <div id='Skills' className='helpfulSkillsSection'>
        <h1>
          Helpful Skills
        </h1>
        <div className='helpfulSkillSectionCont'>
          <div id='different' className='adviceSectioncont'>
            {SkillList.map((Number, index) =>
              <QuoteCard text={Number} />
            )}
          </div>
        </div>
      </div>
      <div id='Comp' className='ComparisonSection'>
        <div className='ComparisonSectionCont'>
          <div>
            <h1>Pros</h1>
            <ul>
              <li>Watching kids grow up (pediatrics) </li>
              <li>Intellectial challenges  </li>
              <li>Connecting with patients  </li>
              <li>Variety  </li>
              <li>Collaboration across specialties </li>
              <li>Constant learning  </li>
              <li>Helping people and saving lives   </li>
              <li>Gratification of a successful treatment plan  </li>
              <li>Immense job security   </li>
              <li>Good salary  </li>
              <li>Positively  effect peoples lives and well being  every day  </li>
            </ul>
          </div>
          <div>
            <h1>Cons</h1>
            <ul>
              <li>Getting “the call” to come in  </li>
              <li>Making decision that end up causing harm  </li>
              <li>Time commitment  </li>
              <li>Insurance companies are “horrible”  </li>
              <li>Administrative tasks </li>
              <li>Patient overload  </li>
              <li>Hospital politics </li>
              <li>Loans </li>
              <li>Lose your 20’s and might have to start a family later than usual  </li>
              <li>Residency match (ranking) is rough  </li>
              <li>Not being appreciated  sometimes </li>
            </ul>
          </div>
        </div>
      </div>
      <div id='Challanges' className='challangesSection'>
        <h1>Challanges</h1>
        <div className='challangesSectionCont'>
          <ul>
            <li>Disrespectful or unappreciative patients or families</li>
            <li>Board certification programs </li>
            <li>Giving bad news </li>
            <li>Cruel supervisors </li>
            <li>Sleep deprivation </li>
            <li>Knowing that you cant be perfect </li>
            <li>Work-life balance </li>
            <li>Unpredictability </li>
            <li>Patient death </li>
            <li>The smell of preservation chemicals </li>
            <li>Passing out in the OR or other times during schooling </li>
            <li>Having to pee during surgery  </li>
            <li>Frustration and burn out </li>
            <li>Patients self diagnosing on Google  </li>
            <li>Having the confidence in your own decisions  </li>
            <li>Doing everything you can and the patient still thinking you did nothing  </li>
            <li>Abuse and cancer cases in children  </li>
            <li>Gender disparities </li>
            <li>Constant studying in medical school (physicians)  </li>
            <li>Getting up early  </li>
            <li>Remembering pharmacology terms and drug classes in school  </li>
            <li>Cultural differences that affect medical care   </li>
            <li>Patient refusal to be vaccinated   </li>
            <li>Pressure of missing something that could impact someone else's life   </li>
          </ul>
        </div>
      </div>
      <div id='Jobs' className='Jobs'>
        <h1>Jobs</h1>
        <div className='jobsCont'>
          {JobList.map((Number, index) =>
            <JobCards ed={Number.ed} des={Number.Desc} sressss={Number.sressss} salary={Number.Salary} Title={Number.Title} />
          )}
        </div>
      </div>
      <div className='lastone'>
        <div className='lastoneCont'>
          <div>
            <h1>
              PA vs Physician
            </h1>
            <p>
              The key difference between medical training of a doctor and physician assistant is time. Typically, doctors complete four years of medical school, followed by an internship and residency. PAs, on the other hand, complete their training in two years.
              The main difference between a doctor and a physician assistant is that a PA works under the supervision of a doctor, whereas a doctor has full responsibility for a clinical situation. Both are qualified medical professionals, and very much work in collaboration with one another.
            </p>
          </div>
          <div>
            <h1>
              RN vs nurse practitioner
            </h1>
            <p>
              The main difference between a RN and NP is the scope of practice. Nurse practitioners are given much more autonomy. In some states, nurse practitioners are able to work independently and have their own offices. Conversely, registered nurses work under a clinician such as a doctor or nurse practitioner
            </p>
          </div>

        </div>
      </div>
      <p id='easter'>
        :) Lucy goosey it was fun spending my highschool time with you -Bek
      </p>
    </div>
  );
}

export default App;
