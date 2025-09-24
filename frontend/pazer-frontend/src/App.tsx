import { useState } from "react";
import "./App.css";
import { Banner } from "./components/banner";

import { Button } from "./components/button";
import { InputField } from "./components/inputField";
import type { NewRunningUnit } from "./types/units";



function App() {
  const [pace, setPace] = useState("")
  const [formData, setFormData] = useState({
    km: "",
    zeit: "",
    datum: "",
    streckenname: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    //Berechnung von Pace
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
    
    if (newFormData.km && newFormData.zeit) {
      const newPace = (+newFormData.zeit / +newFormData.km).toString();
      setPace(newPace);
    }

  };
  
  // Daten zusammenführen 


  let data: NewRunningUnit = {
     route_name: formData.streckenname,
    kilometers: formData.km,
    pace: pace,
    date: formData.datum,
    time: formData.zeit
  }


  return (
    <>
      <Banner></Banner>
      <form className="space-y-4">
      <InputField
        label="Kilometer"
        name="km"
        value={formData.km}
        onChange={handleChange}
      />
      <InputField
        label="Zeit"
        name="zeit"
        value={formData.zeit}
        onChange={handleChange}
      />
      <InputField
        label="Datum"
        name="datum"
        value={formData.datum}
        onChange={handleChange}
      />
      <InputField
        label="Streckenname"
        name="streckenname"
        value={formData.streckenname}
        onChange={handleChange}
      />
      <InputField
        label="Pace"
        name="pace"
        value={pace}
        readonly
      />
      <Button data={data}>
      </Button>
    </form>



      {/* <HistoryChart></HistoryChart>
      
      <Input></Input>
      <HistoryTable></HistoryTable> */}
    </>
  );
}

export default App;
