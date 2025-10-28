import { useState } from "react";
import "./App.css";
import { Banner } from "./components/banner";

import Button from "./components/Button/button";
import { HistoryChart } from "./components/historyChart";
import { HistoryTable } from "./components/historyTable";
import { InputField } from "./components/inputField";
import { createRun } from "./api/run";
import type { NewRunningUnit } from "./types/units";

function App() {
  const [pace, setPace] = useState("");
  const [formData, setFormData] = useState({
    km: "",
    zeit: "",
    datum: "",
    streckenname: "",
  });
  const [reloadFlag, setReloadFlag] = useState(0); // Trigger für HistoryTable

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const data: NewRunningUnit = {
    route_name: formData.streckenname,
    kilometers: formData.km,
    pace: pace,
    date: formData.datum,
    time: formData.zeit,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createRun(data);
      setReloadFlag((prev) => prev + 1); // Trigger für Tabelle
      setFormData({ km: "", zeit: "", datum: "", streckenname: "" }); // Reset Formular
      setPace("");
    } catch (err) {
      console.error("Fehler beim Speichern:", err);
    }
  };

  return (
    <>
      <Banner />
      <HistoryChart></HistoryChart>
      <div className="responsive-form">
        <form id="form-data" onSubmit={handleSubmit}>
          <InputField
            label="Kilometer (km)"
            name="km"
            value={formData.km}
            onChange={handleChange}
          />
          <InputField
            label="Zeit (min)"
            name="zeit"
            value={formData.zeit}
            onChange={handleChange}
          />
          <InputField
            label="Datum (dd.mm.yyyy)"
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
          <InputField label="Pace" name="pace" value={pace} readonly />

          <Button className="submit" type="submit" />
        </form>
      </div>

      {/* reloadFlag wird als Prop übergeben */}
      <HistoryTable reloadFlag={reloadFlag} />
    </>
  );
}

export default App;
