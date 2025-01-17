import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FALLBACK_IMAGE from './images/cardImage.jpg';
import { Badge } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 20,
  },
});

interface ICardProps {
  title: string,
  description: string,
  skills: string,
}


const ImgMediaCard = (props: ICardProps) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={FALLBACK_IMAGE}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
          {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Badge badgeContent={'Angular'} color="primary"></Badge>
      <CardActions>
        <Button size="small" color="primary">
          Apply
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImgMediaCard;