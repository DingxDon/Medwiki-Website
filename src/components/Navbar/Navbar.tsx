import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import Switch,{SwitchProps} from '@mui/material/Switch';
import NavSearch from './NavSearch'
import Corona from './../../assets/coronavirus-5107715_640.png'
import MedBottels from './../../assets/medicine-296966_640.png'
import { useContext } from 'react';
import { UserContext } from '../../context/MDstate';
import { Link } from 'react-router-dom';

type Props = {}

const NavBar = styled(AppBar)`
    background:rgba(149,144,143,1);
`

const Wrapper = styled(Toolbar)`
    display:flex;
    justify-content:space-between;
`

const Image = styled('img')({
    aspectRatio: "1/1",
    height: '2.5rem'
})

const Container = styled('div')({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:'0.5rem'
})

const OSSwitch = styled((props: SwitchProps) => (
    <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
    width: 50,
    height: 26,
    padding: 0,
    '& .MuiSwitch-switchBase': {
        padding: 0,
        margin: 2,
        transitionDuration: '300ms',
        '&.Mui-checked': {
            transform: 'translateX(24px)',
            color: 'red',
            '& + .MuiSwitch-track': {
                backgroundColor: 'white',
                opacity: 1,
                border: 0,
            },
            '.MuiSwitch-thumb':{
                color:'red',
                transitionDuration: '300ms',
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
        },
        '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
        },
        '&.Mui-disabled .MuiSwitch-thumb': {
            color:"#ff3131",
            
        },
        '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
        },
    },
    '& .MuiSwitch-thumb': {
        boxSizing: 'border-box',
        color:'#7ed957',
        width: 22,
        height: 22,
    },
    '& .MuiSwitch-track': {
        borderRadius: 26 / 2,
        backgroundColor: 'white',
        opacity: 1,
        transition: theme.transitions.create(['background-color','color'], {
            duration: 500,
        }),
    },
}));


const Navbar = (props: Props) => {
    const context = useContext(UserContext)
    const switchFUN = () => {
        context?.setDisease(
            context.Medication === 'medication'?'disease':'medication'
        )
    }
    return (
        <NavBar position="fixed">
            <Wrapper>
                <Typography variant="h4" className='comic-neue-bold' component={Link} to={'/'} sx={{color:'white',textDecoration:'none'}}>
                    Medwiki
                </Typography>
                {/* <NavSearch /> */}
                <Container>
                    <Image src={MedBottels} alt="Medications" />
                    <OSSwitch onChange={()=>switchFUN()}/>
                    <Image src={Corona} alt='Disease' />
                </Container>
            </Wrapper>
        </NavBar>
    )
}

export default Navbar