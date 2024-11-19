import Header from "../../Components/Header/Header";

import "./courses.css";
export default function Courses(){

return(

<div>
  {/** *
  <Header/>
  <div className='head-txt'>
      <h1>Course categories</h1>
      <hr></hr>
  </div>
  <div className="stu">
    <h3>The student studies 12 credit hours (6 compulsory + 6 optional)</h3>
    <h5>Compulsory courses</h5>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credit Hours</th>
          <th>Lec</th>
          <th>Lab/Tut.</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Hu 110</td>
        <td>English Language</td>
        <td>3</td>
        <td>3</td>
        <td>-</td>
        <td>no</td>

        </tr>
        <tr>
          <td>Hu 111</td>
          <td>Composition + Technical Writing</td>
          <td>3</td>
          <td>3</td>
          <td>-</td>
          <td>no</td>
        </tr>
      </tbody>
    </table>
  </div>
 
  <div>
    <p>Elective courses</p>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credit Hours</th>
          <th>Lec</th>
          <th>Lab/Tut.</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>Hu 100</td>
        <td>Sinai History</td>
        <td>2</td>
        <td>2</td>
        <td>-</td>
        <td>no</td>

        </tr>
        <tr>
          <td>Hu 120</td>
          <td>Ethical + Professional Issues</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>no</td>
        </tr>
        <tr>
          <td>Hu 230</td>
          <td>Communication Skills</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>no</td>
        </tr>
        <tr>
          <td>Hu 213</td>
          <td>Creative Thinking</td>
          <td>3</td>
          <td>3</td>
          <td>-</td>
          <td>no</td>
        </tr>
        <tr>
          <td>ISD 110</td>
          <td>Introduction to Management</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>no</td>
        </tr>
        <tr>
          <td>Hu 230</td>
          <td>Communication Skills</td>
          <td>1</td>
          <td>1</td>
          <td>-</td>
          <td>no</td>
        </tr>
      </tbody>
    </table>
  </div>


  <div>
    <h3>72 credit hours (66 compulsory hours + 6 optional)</h3>
    <h5>Compulsory courses (66 hours)</h5>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credit Hours</th>
          <th>Lec</th>
          <th>Lab/Tut.</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>CSW 110</td>
        <td>Introduction to Computer & Internet Technology</td>
        <td>3</td>
        <td>3</td>
        <td>1.5</td>
        <td>no</td>

        </tr>
        <tr>
          <td>ISD 100</td>
          <td>Introduction to Systems & Informatics</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>no</td>
        </tr>
        <tr>
          <td>ISD 220</td>
          <td>Introduction to Operations Research</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>ID100/Ma 110 /St 120</td>
        </tr>
        <tr>
          <td>Ma 110</td>
          <td>Linear Algebra</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>no</td>
        </tr>
        <tr>
          <td>Ma 111</td>
          <td>Calculus</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>no</td>
        </tr>
        <tr>
          <td>Ma 212</td>
          <td>Discrete Mathematics</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>Ma 110</td>
        </tr>
        <tr>
          <td>St 120</td>
          <td>Statistics & Probability</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>0</td>
        </tr>
        <tr>
          <td>CSW 121</td>
          <td>Logic Design</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>INT 110</td>
        </tr>
        <tr>
          <td>INT 110</td>
          <td>Introduction to Electronics</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>no</td>
        </tr>
        <tr>
          <td>CSW 232</td>
          <td>Computer Programming (1)</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>CSW 110</td>
        </tr>
        <tr>
          <td>CSW 221</td>
          <td>Data Structure</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 232</td>
        </tr>
        <tr>
          <td>CSW 242</td>
          <td>Operating System (1)</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 241</td>
        </tr>
        <tr>
          <td>CSW 241</td>
          <td>File Organization & Processing</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 232</td>
        </tr>
        <tr>
          <td>CSW 263</td>
          <td>Software Engineering</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 232</td>
        </tr>
        <tr>
          <td>CSW 234</td>
          <td>Computer Programming (2)</td>
          <td>4</td>
          <td>4</td>
          <td>2</td>
          <td>CSW 232</td>
        </tr>
        <tr>
          <td>CSW 225</td>
          <td>Computer Architecture</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 110 / CSW 121</td>
        </tr>
        <tr>
          <td>CSW 325</td>
          <td>Parrallel Processing</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 225</td>
        </tr>
        <tr>
          <td>INT 353</td>
          <td>Multi Media</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 225</td>
        </tr>
        <tr>
          <td>CSW 351</td>
          <td>Artifical Intelligence</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 321</td>
        </tr>
        <tr>
          <td>CSW 323</td>
          <td>Operating Systems (2)</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 242</td>
        </tr>
      </tbody>
    </table>
  </div>
  

  <div>
    <h4>Elective courses (6 hours)</h4>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credit Hours</th>
          <th>Lec</th>
          <th>Lab/Tut.</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>ISD 242</td>
        <td>Database systems</td>
        <td>3</td>
        <td>3</td>
        <td>1.5</td>
        <td>CSW 221</td>

        </tr>
        <tr>
          <td>INT 232</td>
          <td>Computer Network</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>MA 110</td>
        </tr>
        <tr>
          <td>CSW 326</td>
          <td>Compiler</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>CSW 321</td>
        </tr>
        <tr>
          <td>ISD 340</td>
          <td>Data Mining</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>ISD 242</td>
        </tr>
        <tr>
          <td>ISD 331</td>
          <td>Queuing theory</td>
          <td>3</td>
          <td>3</td>
          <td>1.5</td>
          <td>ISD 220</td>
        </tr>
        <tr>
          <td>ISD 321</td>
          <td>Modeling & Simulation</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>ISD 220</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3>(A) Information Technology (30 compulsory hours + 15 elective hours)</h3>
  
  <div>
    <h4>Compulsory courses (30 credit hours)</h4>
    <table>
      <thead>
        <tr>
          <th>Course Code</th>
          <th>Course Name</th>
          <th>Credit Hours</th>
          <th>Lec</th>
          <th>Lab/Tut.</th>
          <th>Prerequisite</th>
        </tr>
      </thead>
      <tbody>
        <tr>
        <td>INT 330</td>
        <td>Data Communication</td>
        <td>3</td>
        <td>3</td>
        <td>2</td>
        <td>Math 110/Math 111</td>

        </tr>
        <tr>
          <td>INT 421</td>
          <td>Digital Signal Processing</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>Math 110/Math 111</td>
        </tr>
        <tr>
          <td>INT 422</td>
          <td>Pattern Recognitions</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>Math 110/Math 111</td>
        </tr>
        <tr>
          <td>INT 423</td>
          <td>Image Processing</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>Math 110</td>
        </tr>
        <tr>
          <td>INT 341</td>
          <td>Web Technology</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>CSW 110</td>
        </tr>
        <tr>
          <td>INT 434</td>
          <td>Network Operations & Administration</td>
          <td>3</td>
          <td>3</td>
          <td>2</td>
          <td>INT 232</td>
        </tr>
        <tr>
          <td>INT 433</td>
          <td>Broadband Network & Communication</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>INT 232 / INT 330</td>
        </tr>
        <tr>
          <td>INT 435</td>
          <td>Information & Networks Security</td>
          <td>3</td>
          <td>3</td>
          <td>3</td>
          <td>INT 232</td>
        </tr>
        <tr>
          <td>INT 498</td>
          <td>IT Project (1)</td>
          <td>3</td>
          <td>3</td>
          <td>6</td>
          <td>-</td>
        </tr>
        <tr>
          <td>INT 499</td>
          <td>IT Project (2)</td>
          <td>3</td>
          <td>3</td>
          <td>6</td>
          <td>INT 232</td>
        </tr>
      </tbody>
    </table>
  </div>
  
  
  
  
  
  
  
  
  {/*<div className="courses">
    <ul>
      <li>Artificial Intelligence [CSW 351]</li>
      <li>Broadband Network & Communication [INT 433]</li>
      <li>Communication Skills [HU 230]</li>
      <li>Composition and Technical Writing [HU 111]</li>
      <li>Computer Architecture [CSW 225]</li>
      <li>Computer Graphics [INT 351]</li>
      <li>Computer Network [INT 232]</li>
      <li>Computer Programming (1) [CSW 232]</li>
      <li>Data Communication [INT 330]</li>
      <li>Data Structure [CSW 221]</li>
      <li>Database System [ISD 242]</li>
      <li>Digital Multimedia [INT 453]</li>
      <li>Digital Signal Processing [INT 421]</li>
      <li>Discrete Mathematics [MA 212]</li>
      <li>English F(1) [ENGLF1]</li>
      <li>English Language [HU 110]</li>
      <li>Human Rights [HUM 194]</li>
      <li>Image Processing [INT 423]</li>
      <li>Information & Networks Security [INT 435]</li>
      <li>Information Engineering [INT 461]</li>
      <li>Introduction to Computer & Internet Technology [CSW 110]</li>
      <li>Introduction to Electronics [INT 110]</li>
      <li>Introduction to Operations Research [ISD 220]</li>
      <li>Introduction to Systems & Informatics [ISD 100]</li>
      <li>IT Project (1) [INT 498]</li>
      <li>IT Project (2) [INT 499]</li>
      <li>Linear Algebra [MA 110]</li>
      <li>Logic Design [CSW 121]</li>
      <li>Mathematics-2 (Part 2) [MA 002]</li>
      <li>Network - Based Multimedia [INT 338]</li>
      <li>Network Operations & Administration [INT 434]</li>
      <li>Operating Systems (1) [CSW 242]</li>
      <li>Operating Systems (2) [CSW 323]</li>
      <li>Parallel Processing [CSW 325]</li>
      <li>Pattern Recognitions [INT 422]</li>
      <li>Programming For WWW [CSW 338]</li>
      <li>Reading & Presentation Skills [HU 212]</li>
      <li>Selected Topics in IT [INT 489]</li>
      <li>WDT Project [INT 349W]</li>
      <li>Web Client Side Programming [CSW 337]</li>
      <li>Website Design & Implementation [INT 343]</li>
      <li>Wireless & Mobile Network [INT 437]</li>
    </ul>
</div> */}
</div>

)
}