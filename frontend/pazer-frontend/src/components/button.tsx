import { createRun } from "../api/run"
import type { NewRunningUnit } from "../types/units"

type ButtonProps =  {
    data: NewRunningUnit
}

export function Button({ data }: ButtonProps) {
    function buttonOnClickEvent() {
        createRun(data)
    

        // km,h und pace sollen in die Datenbank geschrieben werden
            //warten auf Endpunkte
        // Stockchart soll reloaded werden
        // neuer Eintrag in der Historytabelle
        
    }


    return(
        <>
        <div className="button">
            <button type="submit" onClick={buttonOnClickEvent} >Update</button>
        </div>
        </>
        )
    }