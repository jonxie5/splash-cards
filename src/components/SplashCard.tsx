import * as React from 'react'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Grid
 } from '@mui/material'
// ♡ 🪶
let idx=3
let height=250

const SplashCard = ({idx=0, filter='earth', height=175 }) => {

  return (
    <Card variant='outlined' sx={{ maxWidth: '100%' }}>
      <div style={{ position: "relative" }}>

      <CardActionArea>
      <CardMedia
        sx={{ height:  [height] }}
        component='img'
        image={"https://source.unsplash.com/random/?" + filter + "&"  + idx }
        title={filter}
      />
      <CardContent>
          <Typography component="div" style={{position: "absolute", color: "white",top: 5,left: "50%",transform: "translateX(-50%)",}}>
            {filter}
          </Typography>
      </CardContent>
      </CardActionArea>
      </div>
    </Card>
  )
}

export default SplashCard