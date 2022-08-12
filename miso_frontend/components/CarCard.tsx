import React from "react"
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

type CarCardProps = {
  name: string
  slug: string
  imageUrl: string | null | undefined
  score: number
}

const CarCard: React.FC<CarCardProps> = (props) => {
  const {
    name,
    slug,
    imageUrl,
    score,
  } = props

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={imageUrl ? imageUrl : "https://tomo-iki.jp/wp-content/uploads/2019/06/noimage.png"}
        alt="image"
      >
      </CardMedia>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {name}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CarCard
