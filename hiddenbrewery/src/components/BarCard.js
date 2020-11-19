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
          image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
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
