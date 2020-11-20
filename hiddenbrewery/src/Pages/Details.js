import React from "react";
import Button from "@material-ui/core/Button";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import "./details.css";

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
            (<Card className="Card-details" variant="outlined">
                <CardContent >
                <Typography className='Card-con'>   
                    <li>{breweryData.id}</li>
                    <li>{breweryData.name}</li>
                   
                    <li>{breweryData.brewery_type[0].toUpperCase() +
                     breweryData.brewery_type.slice(1)}</li>
                                
                    <li>{breweryData.city}, {breweryData.state }, {breweryData.postal_code}</li> 
                    <li>{formatNumber(breweryData.phone)}</li>
                                       
                    <Link>{breweryData.website_url}</Link>
                </Typography>
                </CardContent>
            </Card>)
                
           
           
    };
    

    export default Details;