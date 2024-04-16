import styled from '@emotion/styled'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { useContext } from 'react'
import { UserContext } from '../../context/MDstate'
import { Link as RouterLink } from 'react-router-dom'

type Props = {
    name: string,
    percent: number,
    id:number,
    type:'medication' | 'disease'
}

const Cards = (props: Props) => {
    const context = useContext(UserContext)
    const Replace = props.name?.replace(/ /g,'_')?.toLowerCase()

    const card = (
        <>
            <CardContent>
                <Typography sx={{ fontSize: 14,textTransform:'capitalize' }} color="text.secondary" gutterBottom>
                    {props.type}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography sx={{ mt: 1.5 }} color="text.secondary">
                    Probablity Score
                </Typography>
                <Typography variant="body2">
                    {props.percent}%
                </Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/${context?.Medication}/${Replace}/${props.id}`} size="small">Learn More</Button>
            </CardActions>
        </>
    )

    return (
        <Card variant="outlined" sx={{ width: '17rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} >
            {card}
        </Card>
    )
}

export default Cards