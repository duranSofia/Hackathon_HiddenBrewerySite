import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 5,
  },
  media: {
    height: 140,
  },
});

export default function BarCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://i.dailymail.co.uk/i/pix/2013/01/27/article-0-173003B4000005DC-688_634x478.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            The Cotton Club
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            The Cotton Club, pictured, was a famous jazz music night club
            located in Harlem, New York City has operated since 1923.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Share
        </Button>
        <Button size="small" variant="contained">
          Learn More
        </Button>
      </CardActions>
    </Card>
    // <div className="card">
    //   <div className="image-card"></div>
    //   <div>
    //     <h3>Bar Name</h3>
    //     <p>
    //       Open Brewery DB is a free dataset and API with public information on
    //       breweries, cideries, brewpubs, and bottleshops. The goal of Open
    //       Brewery DB is to maintain an open-source, community-driven dataset and
    //       provide a public API. It is our
    //     </p>
    //     <Button variant="contained">Default</Button>
    //     <Button variant="contained" color="primary">
    //       Primary
    //     </Button>
    //   </div>
    // </div>
  );
}
