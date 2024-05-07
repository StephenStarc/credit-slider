import styled from "@emotion/styled";
import { Button, Container, Grid, Stack, Switch, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import CustomCreditSlider from "./CustomCreditSlider";
import { useTheme} from "@emotion/react";
// Styled Switch component with custom styles
const TopUpSwitch = styled(Switch)(({ theme }) => ({
    width: 28,
    height: 16,
    padding: 0,
    display: 'flex',
    '&:active': {
        '& .MuiSwitch-thumb': {
            width: 15,
        },
        '& .MuiSwitch-switchBase.Mui-checked': {
            transform: 'translateX(9px)',
        },
    },
    '& .MuiSwitch-switchBase': {
        padding: 2,
        '&.Mui-checked': {
            transform: 'translateX(12px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: teal[300],
            },
        },
    },
    '& .MuiSwitch-thumb': {
        boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
        width: 12,
        height: 12,
        borderRadius: 6,
    },
    '& .MuiSwitch-track': {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor: 'grey',
        boxSizing: 'border-box',
    },
}));

const AutoTopUp = () => {
    const { credit } = useContext(Context);
    const [isChecked, setIsChecked] = useState<boolean>(true);
    const creditArr = [
        { price: 5, credit: 500 },
        { price: 10, credit: 1200 },
        { price: 15, credit: 1700 },
        { price: 20, credit: 2500 },
        { price: 25, credit: 3900 },
        { price: 30, credit: 5000 }
    ];

    // Switch change handler
    const switchHandler = () => {
        setIsChecked(state => !state);
    };

    // Log credit function
    const creditLogger = () => {
        console.log(credit);
    };

    return (
        <Container>
            <Grid container >
                {/* Auto Top-up setup */}
                <Grid item xs={11} > 
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography variant="h6" fontWeight={600} pr={1}>Setup Auto Top-up</Typography>
                        <TopUpSwitch  checked={isChecked} inputProps={{ 'aria-label': 'Topup Switch' }} onChange={switchHandler} />
                    </Stack>
                </Grid>
                {/* Description based on switch state */}
                <Grid item xs={11} md={9} mt={1}>
                    <Typography variant="body1" textAlign="left" color={'secondary'} fontSize={15}>
                        {isChecked ?
                            <>
                                Once the credit goes below a minimum threshold <span style={{ fontWeight: 'bold', color: '#9747FF' }}>50</span>,
                                we will auto-purchase <span style={{ fontWeight: 'bold', color:'#9747FF' }}>{credit}</span> credits and add them to your account.&nbsp;
                                <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>Learn more</span>
                            </> :
                            <>
                                Once the credit goes below the threshold value,
                                credits can be auto purchased. Setup auto top-up to enjoy uninterrupted services.
                                You can disable this anytime to stop auto top-up.
                            </>
                        }
                    </Typography>
                </Grid>
                {/* Slider and credit options */}
                {isChecked && (
                    <>
                        <Grid item xs={11} md={9} mt={3}>
                            <CustomCreditSlider/>
                        </Grid>
                        <Grid item xs={11} md={9}>
                            <Stack direction="row" spacing={1} alignItems="center" justifyContent='space-between'>
                                {creditArr.map((i) => (
                                    <Stack direction="column" key={i.price}>
                                        <Typography variant="caption" fontSize={14} textAlign="left" fontWeight={800} color={'black'}>
                                            ${i.price}
                                        </Typography>
                                        <Typography variant="caption" fontSize={13} textAlign="left" fontWeight={500} color={'secondary'}>
                                            {i.credit} Credits
                                        </Typography>
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                        {/* Confirm auto-purchase button */}
                        <Grid item xs={11} md={9}>
                            <Button
                                variant="contained"
                        
                                sx={{ textTransform: 'none', marginTop: '25px',padding: '8px 50px',width: { xs: '100%', sm: 'auto' } , fontSize:'14px'}}
                                onClick={creditLogger}
                            >
                                Confirm auto-purchase
                            </Button>
                        </Grid>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default AutoTopUp;
