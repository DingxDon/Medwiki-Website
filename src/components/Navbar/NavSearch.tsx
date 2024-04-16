import React from 'react'
import { Box, InputBase } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';


type Props = {}

const Wrapper = styled(Box)`
    background:#eeeded;
    display:flex;
    align-items:center;
    gap:0.5rem;
    padding:0px 8px;
    border-radius:25px;
    color:#000000;
    width:32%;
`

const SearchField = styled(InputBase)`
    width:100%;
`

const NavSearch = (props: Props) => {
    return (
        <Wrapper>
            <SearchIcon/>
            <SearchField placeholder='Search disease or medication'/>
        </Wrapper>
    )
}

export default NavSearch