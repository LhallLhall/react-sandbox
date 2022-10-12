let color1 = 'red'
let color2 = 'blue'
let color3 ='yellow'
// function mixPaint(paint1, paint2){
//     return paint1 + paint2
// }

// let purple = mixPaint(color1, color2)
// let orange = mixPaint(color1, color3)
// mixPaint(color2, color3)

function MixedPaint(props) {
    console.log('props', props)
    return (
        <h1>{props.color1}, {props.color2}</h1>
    )
}

{/* <MixedPaint potato={smaller} /> */}
{/* <MixedPaint color1='red' color2='blue' /> */}
function App(){
    // let smaller = 'this is a smaller potato'
    return (
        <div>
            <MixedPaint color1={color1} color2={color2} />
            <MixedPaint color1={color1} color2={color3} />
            <MixedPaint color1={color2} color2={color3} />
        </div>
    );
}

export default App