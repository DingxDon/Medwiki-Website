import React, { useContext, useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import styled from '@emotion/styled';
import { Box, InputBase, IconButton } from '@mui/material';
import { UserContext } from '../../context/MDstate';
import axios from 'axios';
import { DiseaseDBdata, mapArray, mapMedsArray, MediDBdata } from '../../utils';

interface ApiResponse {
    disease: string;
    similarity_score: number;
}

interface ApiMedResponse {
    medicine: string;
    similarity_score: number;
}

interface MapedResponse {
    disease: string;
    id:number;
    similarity_score:number;
}

interface MapedMedResponse {
    medicine: string;
    id:number;
    similarity_score:number;
}

const Wrapper = styled(Box)`
    background:rgba(255,255,255,0.8);
    display:flex;
    align-items:center;
    gap:0.5rem;
    padding:0px 8px;
    border-radius:25px;
    color:#000000;
    width:38%;
`

const SearchField = styled(InputBase)`
    width:100%;
    height:3rem;
    font-size:1.3rem;
`

const SearchHeader = () => {
    const [Search, setSearch] = useState('')
    const context = useContext(UserContext)

    const onSubmit = async (e: any) => {
        e.preventDefault();
        console.log(Search);

        if (context?.Medication === 'medication') {
            try {
                context.setLoading(true)
                const response = await axios.post('https://medwiki.onrender.com/get_responses', { user_query: Search })
                const search_query: ApiMedResponse[] = response.data.responses;

                const mapedRes:MapedMedResponse[] = mapMedsArray(search_query,MediDBdata,context?.Medication)

                if (Array.isArray(mapedRes)) {
                    mapedRes.forEach(item => {
                        item.similarity_score = parseFloat((item.similarity_score * 100).toFixed(2));
                    });
                    mapedRes.sort((a, b) => b.similarity_score - a.similarity_score);
                    context?.MedicineData(mapedRes);
                } else {
                    console.log('Response data is not an array.');
                }
            } catch (error) {
                console.log(error);
            }
        } else {
            try {
                context?.setLoading(true)
                const response = await axios.post('https://medbot-api-endpoint.onrender.com/get_responses', { user_query: Search })
                
                const search_query: ApiResponse[] = response.data.responses;

                const mapedRes:MapedResponse[] = mapArray(search_query,DiseaseDBdata,context?.Medication)

                if (Array.isArray(mapedRes)) {
                    mapedRes.forEach(item => {
                        item.similarity_score = parseFloat((item.similarity_score * 100).toFixed(2));
                    });
                    mapedRes.sort((a, b) => b.similarity_score - a.similarity_score);
                    context?.DiseaseData(mapedRes);
                } else {
                    console.log('Response data is not an array.');
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        console.log(context?.ChatDiseaseData)
    }, [context?.ChatDiseaseData])

    const Enter = (e: any) => {
        if (e.keyCode === 13) {
            onSubmit(e)
        }
    }


    return (
        <Wrapper>
            <IconButton aria-label="" onClick={onSubmit}>
                <SearchIcon sx={{ fontSize: '1.8rem' }} />
            </IconButton>
            <SearchField
                placeholder={`Search ${context?.Medication}`}
                name='Search_bar'
                value={Search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={Enter}
            />
        </Wrapper>
    )
}

export default SearchHeader