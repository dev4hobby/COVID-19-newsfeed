import React from 'react'
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '100%',
    marginTop: '1vh',
    marginBottom: '1vh',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const checkColor = (title) => {
  if (title.indexOf('백신') !== -1) {
    return '#D5F5E3'
  } else if (title.indexOf('사망') !== -1
    || title.indexOf('숨져') !== -1) {
    return '#F5B7B1'
  } else if (title.indexOf('확진') !== -1
    || title.indexOf('감염') !== -1
    || title.indexOf('명째') !== -1) {
    return '#FCF3CF'
  }
  return ''
}

export default function Feed({ feed }) {
  const classes = useStyles();
  const colorString = checkColor(feed.title)
  return (
    <Card className={classes.root} style={{
      backgroundColor: colorString
    }}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        {/* <Typography variant="h5" component="h2">
          Subject
        </Typography> */}
        <Typography className={classes.pos} color="textSecondary">
          <b>{feed.title}</b>
        </Typography>
        <Typography variant="body2" component="p">
          {feed.date}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  )
} 
