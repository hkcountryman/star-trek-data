import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function MediaCard(props) {
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          src={props.src}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.series}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Captain: {props.captain}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            XO: {props.xo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            CMO: {props.cmo}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Crew: {props.crew}
          </Typography>
        </CardContent>
        <CardActions>
          <Link
            href={props.link}
            target="_blank"
            rel="noopener"
          >
            Memory Alpha
        </Link>
        </CardActions>
      </Card>
    );
  }