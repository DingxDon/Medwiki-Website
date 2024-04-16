import { Box, Typography } from '@mui/material'
import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../context/MDstate'
import Med from './../../assets/medication.png'
import Disease from './../../assets/disease.png'
import styled from '@emotion/styled'
import SearchHeader from './SearchHeader'

type Props = {}

const ImageTag = styled('img')({
    width: '100%',
    minHeight:'500px',
    objectFit: 'fill',
    aspectRatio: '15/5.5',
    objectPosition: '50% 10%',
    transition: 'opacity 0.5s ease',
    overflowX:'hidden'
})

const TextBox = styled('div')({
    position: 'absolute',
    zIndex: 3,
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    textAlign: 'center',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    alignItems:'center'
})

const BackPaper = styled('div')({
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: '-3px'
})

const Header = (props: Props) => {

    const context = useContext(UserContext)
    const Image = context?.Medication === 'medication' ? Med : Disease;

    return (
        <Box sx={{ position: "relative" }}>
            <ImageTag src={Image} alt="Banner" />
            <BackPaper>
                <TextBox>
                    <Typography variant="h5" sx={{ color: 'white' }} className='comic-neue-bold'>
                        Explore MedWiki for Reliable Information on Illnesses and Medicines.
                    </Typography>
                    <Typography variant="h3" sx={{ color: 'white' }} className='comic-neue-bold'>
                        Bot for <Box component={'span'} sx={{ textTransform: 'capitalize' }}>{context?.Medication}</Box> Detection
                    </Typography>
                    <SearchHeader />
                </TextBox>
            </BackPaper>
        </Box>
    )
}

export default Header