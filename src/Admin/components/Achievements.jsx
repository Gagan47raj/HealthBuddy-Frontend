import styled from '@emotion/styled/macro'
import { Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'

const TriangleImg = styled("img")({
    right:0,
    bottom:0,
    height:170,
    position:"absolute"
})

const TrophyImg = styled("img")({
    right:36,
    bottom:20,
    height:98,
    position:"absolute"
})

const Achievements = () => {
  return (
    <Card className='' sx={{position:"relative", bgcolor:"#fbd24e" ,color:"white"}} >
        <CardContent>
            <Typography variant='h6' sx={{letterSpacing:".25px"}}>
                HealthBuddy
            </Typography>
            <Typography variant='body2'>Congratulations</Typography>
            <Typography variant='h5' sx={{my:3.1}}>10.2k</Typography>
            <Button size = "small" variant='contained'>View Sales</Button>

            <TriangleImg src=''/>
            <TrophyImg src='https://www.clipartmax.com/png/middle/134-1346635_trophy-icon-vector-trophy-trophy-icon-vector-png.png' alt="trophy" />
        </CardContent>
    </Card>
  )
}

export default Achievements