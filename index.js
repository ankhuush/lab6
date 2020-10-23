function Mendchilgee(){ //функц component. props-гүй
 return <h1>Hello</h1>
  }

 function Mendchilgee123(props){console.log(props)           //функц component. props-той дамжуулна.
    return(
    <div>
        <h1> { props.ner}</h1>
        <p>{ props.nas}</p>
         <p>{ props.surchBgaEseh? "unen": "choloo awsan"}</p>
         <p>{ props.dunguud[0]}</p>
         <p>{ props.dunguud[1]}</p>
         <p>{ props.dunguud[2]}</p>

    {props.dunguud.map(
        (el, index)=> 
            <p key = {index}>{el}</p>
        )
    }
    
        <p>{ props.myObj.mergejil}</p>
        <p>{props.myObj.index} </p>

    </div>
    );
}
 
ReactDOM.render(
    // <Mendchilgee/>,
    // <Mendchilgee123 ner= "Hello bat"/>,
    <Mendchilgee123 ner={"Hello dorj"}
    nas={'28'}
    surchBgaEseh={true}
    dunguud={[90, "dalan yos", true]}
    myObj= {{mergejil:'SW', index:'DS2015877'}}/>,
    document.getElementById('root')
);