import styled from '@emotion/styled'
import { Button, Typography } from '@mui/material'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { useParams, Link as RouterLink } from 'react-router-dom'
import { UserContext } from '../../context/MDstate'

type Props = {}

interface MedicineData {
    id: string;
    name: string;
    medicine_description: string;
    medicine_generic_name: string;
    dosage_form: string;
    strength: string;
    indication_check: string;
    contraindications: string;
    side_effects: string;
    warnings_precautions: string;
    storage_conditions: string;
}

interface ApiData {
    id: string;
    name: string;
    description: string;
    symptoms: string;
    treatment: string;
    medicine: string;
    prescription: string;
    prevalence_incidence: string;
    causes_risk_factors: string;
    diagnostic_tests: string;
    age_gender_distribution: string;
    geographical_distribution: string;
    comorbidities: string;
    genetic_factors: string;
    environmental_factors: string;
    patient_reported_outcomes: string;
    research_studies_clinical_trials: string;
}

const Container = styled('div')({
    display: 'flex',
    marginTop: '4rem',
    minHeight: '100vh'
})

const Metadetails = styled('div')({
    backgroundColor: "#d7cac6",
    maxWidth: '17rem',
    minWidth: '15rem',
    padding: '0 1rem'
})

const Details = styled('div')({
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem'
})

const Blog = (props: Props) => {
    const { type, searchtype, id } = useParams()
    const QueryName = searchtype?.replaceAll('_', " ")
    const [ApiData, setApiData] = useState<ApiData | null>(null)
    const [ApiMedData, setApiMedData] = useState<MedicineData | null>(null)
    const [isLoading, setIsLoading] = useState(true);
    const context = useContext(UserContext)


    const fetchData = async () => {
        try {
            if (type === 'medication') {
                const response = await axios.get<MedicineData>(`https://shieldless-fathoms.000webhostapp.com/medical_conditions_connect_api/medicine_api.php?id=${id}`);
                const data = response.data;
                setApiMedData(data)
                setIsLoading(false);
                return data
            } else {
                const response = await axios.get<ApiData>(`https://shieldless-fathoms.000webhostapp.com/medical_conditions_connect_api/index.php?id=${id}`);
                const data = response.data;
                setApiData(data)
                setIsLoading(false);
                return data
            }
        } catch (error) {
            console.log('The Error is:', error);
        }
    };

    useEffect(() => {
        fetchData()
        console.log(ApiData)
    }, [searchtype, id])

    const diseaseRender = (
        <>
            <Typography variant="h4" id='top'>
                {ApiData?.name}
            </Typography>
            <div>
                <Typography variant="h5">
                    Description:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.description}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Symptoms:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.symptoms}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Treatment:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.treatment}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Medicine:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.medicine}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Prescription:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.prescription}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Prevalence and Incidence:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.prevalence_incidence}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Causes and Risk Factors:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.causes_risk_factors}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Diagnostic Tests:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.diagnostic_tests}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Age and Gender Distribution:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.age_gender_distribution}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Geographical Distribution:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.geographical_distribution}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Comorbidities:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.comorbidities}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Genetic Factors:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.genetic_factors}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Environmental Factors:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.environmental_factors}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Patient Reported Outcomes:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.patient_reported_outcomes}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Research Studies and Clinical Trials:
                </Typography>
                <Typography variant="body1">
                    {ApiData?.research_studies_clinical_trials}
                </Typography>
            </div>
        </>
    )

    const MedRender = (
        <>
            <Typography variant="h4" id='top'>
                {ApiMedData?.name} Details
            </Typography>
            <div>
                <Typography variant="h5">
                    Description:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.medicine_description}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Medicine Generic Name:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.medicine_generic_name}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Dosage Form:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.dosage_form}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Strength:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.strength}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Indication Check:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.indication_check}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Contraindications:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.contraindications}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Side Effects:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.side_effects}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    Warnings Precautions:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.warnings_precautions}
                </Typography>
            </div>
            <div>
                <Typography variant="h5">
                    storage_conditions:
                </Typography>
                <Typography variant="body1">
                    {ApiMedData?.storage_conditions}
                </Typography>
            </div>
        </>
    )

    return (
        <Container>
            <Metadetails>
                {
                    context?.Medication === 'medication' ? (
                        context.ChatMedData.map((em, index) => {
                            return (
                                <Button variant='contained'
                                    key={index}
                                    component={RouterLink}
                                    to={`/${type}/${em.medicine}/${em.id}`}
                                    sx={{
                                        margin: '1.5rem 0', textTransform: 'capitalize', backgroundColor: '#7c675b', width: "100%", "&:hover": {
                                            backgroundColor: '#7c676b'
                                        }
                                    }}>
                                    {em.medicine}
                                </Button>
                            )
                        })
                    ) : (
                        context?.ChatDiseaseData.map((em, index) => {
                            return (
                                <Button variant='contained'
                                    key={index}
                                    component={RouterLink}
                                    to={`/${type}/${em.disease}/${em.id}`}
                                    sx={{
                                        margin: '1.5rem 0', textTransform: 'capitalize', backgroundColor: '#7c675b', width: "100%", "&:hover": {
                                            backgroundColor: '#7c676b'
                                        }
                                    }}>
                                    {em.disease}
                                </Button>
                            )
                        })
                    )
                }
            </Metadetails>
            <Details>
                <>
                    {isLoading ? (
                        <p>Loading data...</p> // Display loading indicator while fetching
                    ) : (
                        <>
                            {
                                ApiData ? diseaseRender : MedRender
                            }
                        </>
                    )}
                </>
            </Details>
        </Container>
    )
}

export default Blog