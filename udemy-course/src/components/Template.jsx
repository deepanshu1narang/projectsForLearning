import React,{useState} from 'react'
import List from './List';

export default function Template() {
    const [state, setState] = useState({
        name : "",
        email : "",
        age : "",
        year : ""
    });

    const [detailCollection, setDetailCollection] = useState([]);

    const [yearF, setYearF] = useState("all");

    const [showForm, setShowForm] =useState(false);

    const changeHandler = (e) => {
        const {name, value} = e.target;

        setState((prevValue) => {
            if(name==="name"){
                return {
                    name : value,
                    email : prevValue.email,
                    age : prevValue.age,
                    year : prevValue.year
                }
            }
            else if(name==="email"){
                return {
                    name : prevValue.name,
                    email : value,
                    age : prevValue.age,
                    year : prevValue.year
                }
            }
            else if(name==="age"){
                return {
                    name : prevValue.name,
                    email : prevValue.email,
                    age : value,
                    year : prevValue.year
                }
            }
            else if(name==="year")
                return {
                    name : prevValue.name,
                    email : prevValue.email,
                    age : prevValue.age,
                    year : value
                }
        });
    }


    const submitForm = (e) => {
        e.preventDefault();
        // alert("success");
        let detail = {
            name : state.name,
            email : state.email,
            age : state.age,
            year : state.year
        }
        
        setDetailCollection((prevDetails) => {return [...prevDetails, detail]});

        setState(() => {
            return {
                name : "",
                email : "",
                age : "",
                year : ""
            }
        });

        setShowForm(!showForm);
    }

    
    const displayForm = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    }

  return (
    <div className="template">
        {

            !showForm ? (<button type="button" onClick={displayForm}>Add Detail</button>) : (<form onSubmit={submitForm}>
            <h1>Add your details</h1>
            <input type="text" name="name" placeholder="Name" autoComplete="off" value={state.name} onChange={changeHandler} /><br/>
            <input type="email" name="email" placeholder="email@example.com" autoComplete="off" value={state.email} onChange={changeHandler} /><br/>
            <input type="number" name="age" placeholder="Age" autoComplete="off" value={state.age} onChange={changeHandler} /><br/>
            <input type="number" name="year" placeholder="Year" autoComplete="off" value={state.year} onChange={changeHandler} /><br/>
            <button type="submit">Submit</button>
            {" "}
            <button type="button" onClick={displayForm}>Cancel</button><br/>
        </form>)
        }

        <div style={{marginTop : "1vh"}}>            
            {
                detailCollection.map((e,i) => {
                    return (
                        <List key={i} name = {e.name && e.name} email={e.email && e.email} age={e.age && e.age} id={i+0.2} year={e.year} rank={i+1} />
                    )
                })
            }
            <h3>filter details</h3>
            <label htmlFor="chooseYear">Choose year to filter </label>
            <select name="chooseYear" id="chooseYear" value={yearF} onChange={e => setYearF((e.target.value).toString())}>
                <option value="all"  >All</option>
                <option value="2004" >2004</option>
                <option value="2005" >2005</option>
                <option value="2006" >2006</option>
                <option value="2007" >2007</option>
            </select><br />
            {
                detailCollection.filter(e => {
                    if(yearF === "all"){
                        return e;
                    }
                    else{
                        return e.year.toString() === yearF;
                    }
                }).map((e,i) => {
                    return (
                        <List key={i} name = {e.name && e.name} email={e.email && e.name} age={e.age && e.age} id={i+0.2} year={e.year} rank={i+1} />
                    )
                })
            }
        </div>
    </div>
  )
}
