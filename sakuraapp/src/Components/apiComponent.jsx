export var data=[] ;

async function apiData(){
try {
    const response = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/')
    const json =  await response.json()
    for (var i=0; i< json.length; i++){
        data.push(json[i])
    }
	
    return data
}catch(error){
    console.log("error", error)
}    
}
apiData()
console.info(data)


// export default function apiComponent() {
//   const [ans, setAns] = React.useState();

//   const getAnswer = async () => {
//     const res = await fetch('https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/');
//     const data = await res.json();
//     setAns(data);
//   };

//   React.useEffect(() => {
//     getAnswer();
	
//   }, []);

//   return <>{JSON.stringify(ans)}</>;
// }