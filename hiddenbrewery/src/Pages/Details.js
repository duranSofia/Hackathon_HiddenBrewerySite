import React from "react";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';


const formatNumber = (phoneStr) => {
    let cleaned = ("", phoneStr).replace(/\D/g, "");
    
    let match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    console.log('phone str', "(" + match[1] + ") " + match[2] + "-" + match[3]);

    if (match) {
        return "(" + match[1] + ") " + match[2] + "-" + match[3];
    }

    return null;
};
// https://api.openbrewerydb.org/breweries
// https://api.openbrewerydb.org/breweries/5494
 
    const Details = (props) => {
       
    
        const [breweryData, setBreweryData] = React.useState({})
        const [loading, setLoading] = React.useState(true);
        console.log("these are the props", props)
        React.useEffect(()=>{
            fetch(`https://api.openbrewerydb.org/breweries/${props.match.params.id}`)
            .then(resp => resp.json())
            .then(breweryInfos => {
                setBreweryData(breweryInfos); 
                setLoading(false);
            })
        },[])
        // console.log(breweryAddress);
    
        return loading ? <h1>loading...</h1>: 
            (<Card>
                <ul>   
                    <li>Id :{breweryData.id}</li>
                    <li>name:{breweryData.name}</li>
                   
                    <li>{breweryData.brewery_type[0].toUpperCase() +
                     breweryData.brewery_type.slice(1)}</li>
                                
                    <li>{breweryData.street}, {breweryData.city}, {breweryData.state }, {breweryData.postal_code}</li> 
                    <li>{formatNumber(breweryData.phone)}</li>
                                       
                    <li>{breweryData.website_url}</li>
                    <Button variant="contained" color="primary">
                        Close
                    </Button>   
                </ul>
            </Card>)
           
    };
    

    export default Details;