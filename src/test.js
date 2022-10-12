import {useState} from 'react'

function Test (props){
    // console.log(props)
    const [name, setName ] = useState('')
    let newName
    
    const nameUpdate = (e) => {
        // console.log('nameUpdate')
        newName = e.target.value
    }
    const submit = () => {
        setName(newName)
    }
    return (
        <div className="border border-dark border-lg p-3">
            <h1>{name}</h1>
            <input onChange={nameUpdate} type='text' name='name' id='input'></input>
            <button onClick={submit} >click</button>
        </div>
        
    )
}
export default Test