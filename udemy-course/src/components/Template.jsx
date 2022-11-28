import React,{useState} from 'react'
import { useEffect } from 'react';
import List from './List';
import Modal from './Modal';


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

    const [modalIsOpen, setModalIsOpen] = useState(false);

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
        if(state.name !== "" && state.email !== "" && (state.age !== "" ||  state.age < 1) && state.year >= 2004 && state.year <= 2007){

            setModalIsOpen(false);

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

        else{
            setModalIsOpen(true);
        }
    }

    useEffect(() => {
        modalIsOpen ? document.body.style.backgroundColor = "rgba(0, 0, 0, 0.205)" : document.body.style.backgroundColor = "white";
    }
        ,[modalIsOpen]
    );
    
    const displayForm = (e) => {
        e.preventDefault();
        setShowForm(!showForm);
    }

  return (
    <div className="template">
        <h1>Add your details</h1>
        {
            !showForm ? 
            (<button type="button" onClick={displayForm}>Add Detail</button>) : 
            (<form onSubmit={submitForm}>
                <input type="text" name="name" placeholder="Name" autoComplete="off" value={state.name} onChange={changeHandler} /><br/>
                <input type="email" name="email" placeholder="email@example.com" autoComplete="off" value={state.email} onChange={changeHandler} /><br/>
                <input type="number" name="age" placeholder="Age" autoComplete="off" value={state.age} onChange={changeHandler} /><br/>
                <input type="number" name="year" placeholder="Year" autoComplete="off" value={state.year} onChange={changeHandler} /><br/>
                <button type="submit">Submit</button>
                {" "}
                <button type="button" onClick={displayForm}>Cancel</button><br/>
            </form>
            )
        }

        <div style={{marginTop : "1vh"}}>
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
                        <List key={i} name = {e.name} email={e.email} age={e.age && e.age} id={i+0.2} year={e.year} rank={i+1} />
                    )
                })
            }
        {
            modalIsOpen && 
            (<Modal open={modalIsOpen} onClose={() => {setModalIsOpen(false)} }>
                <p>Please fill the form carefully and properly.</p>
            </Modal>)
        }
        </div>
    </div>
  )
}
