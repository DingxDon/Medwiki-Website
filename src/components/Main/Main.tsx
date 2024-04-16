import React, { useContext} from 'react'
import Typography from '@mui/material/Typography'
import { Box, Container } from '@mui/material'
import { UserContext } from '../../context/MDstate'
import CircularProgress from '@mui/material/CircularProgress';
import Cards from './Cards'

type Props = {}

const InitialDiseaseValue = [
    {
        id: 1,
        disease: "Angiosarcoma",
        similarity_score: 0,
        type:'disease'
    },
    {
        id: 2,
        disease: "Pterygium",
        similarity_score: 0,
        type:'disease'
    },
    {
        id: 3,
        disease: "Disease Of Metabolism",
        similarity_score: 0,
        type:'disease'
    },
    {
        id: 4,
        disease: "Actinomadura Madurae Infectious Disease",
        similarity_score: 0,
        type:'disease'
    },
    {
        id: 5,
        disease: "Actinomadura Pelletieri Infectious Disease",
        similarity_score: 0,
        type:'disease'
    },
]

const InitialMedicineValue = [
    {
        medicine: "Norepinephrine",
        similarity_score: 0,
        id: 1,
        type: 'medicine',
    },
    {
        medicine: "Clomipramine",
        similarity_score: 0,
        id: 2,
        type: 'medicine',
    },
    {
        medicine: "Entacapone",
        similarity_score: 0,
        id: 3,
        type: 'medicine',
    },
    {
        medicine: "Semaglutide",
        similarity_score: 0,
        id: 4,
        type: 'medicine',
    },
    {
        medicine: "Mometasone",
        similarity_score: 0,
        id: 5,
        type: 'medicine',
    }
]

const Render = () => {
    const Context = useContext(UserContext)
    const MapArray = Context?.Medication === 'medication' ? Context.ChatMedData : Context?.ChatDiseaseData
    const foo = JSON.stringify(Context?.ChatDiseaseData) !== JSON.stringify([]) || JSON.stringify(Context?.ChatMedData) !== JSON.stringify([])

    if (Context?.Loading === true) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )
    } else if (Context?.Loading === false && foo) {
        return (
            <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {
                    MapArray?.map((data: any, index: any) => {
                        const Qname = Context?.Medication === 'medication' ? data.medicine : data.disease;
                        return (
                            <Cards name={Qname} type={data.type} percent={data.similarity_score} key={index} id={data.id} />
                        )
                    })
                }
            </Box>
        )
    }
    else {
        return (
        <>
            {
                Context?.Medication === 'medication' ? (
                    <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            InitialMedicineValue.map((data: any, index: any) => {
                                return (
                                    <Cards name={data.medicine} type={data.type} percent={data.similarity_score} key={index} id={data.id} />
                                )
                            })
                        }
                    </Box>
                ) : (
                    <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                        {
                            InitialDiseaseValue.map((data: any, index: any) => {
                                return (
                                    <Cards name={data.disease} type={data.type} percent={data.similarity_score} key={index} id={data.id} />
                                )
                            })
                        }
                    </Box>
                )
            }
        </>
        )
    }
}

const Main = (props: Props) => {
    const Context = useContext(UserContext)

    // const MapArray = Context?.Medication === 'medication' ? Context.ChatMedData : Context?.ChatDiseaseData



    return (
        <Container maxWidth={'xl'} sx={{ marginBottom: '3rem' }}>
            <Box sx={{ margin: '1rem 0rem' }}>
                <Typography variant="h4" className='comic-neue-bold'>
                    Most similar&nbsp;
                    <Box component={'span'}>
                        {Context?.Medication}
                    </Box> found:
                </Typography>
            </Box>
            <Render/>
            {/* <Box>
                {Context?.Loading === true ?
                    (
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <CircularProgress />
                        </Box>
                    )
                    : (
                        <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                            {
                                MapArray?.map((data: any, index: any) => {
                                    const Qname = Context?.Medication === 'medication' ? data.medicine : data.disease;
                                    return (
                                        <Cards name={Qname} type={data.type} percent={data.similarity_score} key={index} id={data.id} />
                                    )
                                })
                            }
                        </Box>
                    )
                }
            </Box> */}
        </Container>
    )
}

export default Main