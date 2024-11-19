import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import "./teaching.css";

export default function Teaching_Staff() {
  return (
    <div>
      <Header />
      <div className="teach">
        <h1>Teaching Staff</h1>
        <hr />
        <div className="cards-container">
          {[
            { name: "Dr. Ahmed Sharaf"  },
            { name: "Dr. Hossam El-Adly" },
            { name: "Dr. Alaa Zaki" },
            { name: "Dr. Khaled Fathy" },
            { name: "Dr. Heba Allah Rashed" },
            { name: "Dr. Almohammady Alsharkawy" },
            { name: "Dr. Mamdouh Gomaa" },
          ].map((doctor, index) => (
            <div key={index} className="card">
              <h2>{doctor.name}</h2>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}