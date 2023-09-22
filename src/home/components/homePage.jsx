import {  ArrowForward, Check, LockOutlined, PercentRounded, RadioButtonChecked, Star, Verified } from "@mui/icons-material"
import { Box, Button, Divider, Grid, Typography } from "@mui/material"
import guarantee from '../../assets/img/guarantee.png'
import profile from '../../assets/img/profilePhoto.png'
import product from '../../assets/img/product.png'
import visas from '../../assets/img/visas.png'
import clafirion from '../../assets/img/clarifion.png'
import publicity from '../../assets/img/mcafee_norton.png'
import des from '../../assets/img/des.png'

export const HomePage = () => {

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" py={2}>
            
            {/*Icons Frame*/}
            <Grid item xs={12}>
                <Grid container direction="row">
                    <Grid item xs={6} sm={8} md={10} px={5}>
                        <Box 
                            component="img"
                            sx={{
                                maxHeight: { xs: '5vh', },
                                maxWidth: { xs: '20vh', },
                            }}
                            alt="clarifion"
                            src={clafirion}
                        />
                    </Grid>

                    <Grid item xs={6} sm={4} md={2} >
                        <Box 
                            component="img"
                            sx={{
                                maxHeight: { xs: '10vh', },
                                maxWidth: { xs: '25vh', },
                            }}
                            alt="mcafee"
                            src={publicity}
                        />
                    </Grid>
                </Grid>
            </Grid>

            {/*Title Frame*/}
            <Grid item xs={12} py={2}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} justifyContent="center" alignItems="center">
                        <Typography variant="h3" align="center">Wait! Your Order in Progress.</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" align="center" sx={{ color: '#4D5254'}}>Lorem Ipsum Dolor Sit Amet. Consectetur Adipiscing</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/*Steps Frame PC MODE*/}
            <Grid item xs={12} sm={12} md={10} py={1} sx={{ display: {xs: 'none', sm: 'none', md: 'flex'}}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Typography align="center"><Check fontSize="small"  sx={{ backgroundColor: '#85BF55', color: 'white', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '3vh', padding: 1 }} />Step 1: Cart Review</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Typography align="center"><Check fontSize="small"  sx={{ backgroundColor: '#85BF55', color: 'white', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '3vh', padding: 1 }} />Step 2: Checkout</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Typography align="center" display="inline"><Typography display="inline" sx={{ backgroundColor: '#2C7EF8', color: 'white', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '10vh', padding: 1, paddingLeft: 2, paddingRight: 2 }}>3</Typography>Step 3: Special Offer</Typography>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Typography align="center"><Typography display="inline" sx={{ border: 2, borderColor: '#2C7EF8', color: '#2C7EF8', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '10vh', padding: 1, paddingLeft: 2, paddingRight: 2 }}>4</Typography>Step 4: Confirmation</Typography>
                    </Grid>
                </Grid>
            </Grid>

            {/*Steps Frame Mobile MODE*/}
            <Grid item xs={12} sm={12} md={10} py={1} sx={{ display: {xs: 'flex', sm: 'flex', md: 'none'}}}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Grid container direction="col">
                            <Grid item xs={12} py={2}>
                                <Typography align="center"><Check fontSize="small"  sx={{ backgroundColor: '#85BF55', color: 'white', verticalAlign:"middle", borderRadius: '3vh', padding: 1 }} /></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center">Cart Review</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Grid container direction="col">
                            <Grid item xs={12} py={2}>
                                <Typography align="center"><Check fontSize="small"  sx={{ backgroundColor: '#85BF55', color: 'white', verticalAlign:"middle", borderRadius: '3vh', padding: 1 }} /></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center">Checkout</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Grid container direction="col">
                            <Grid item xs={12} py={2}>
                                <Typography align="center"><Typography display="inline" sx={{ backgroundColor: '#2C7EF8', color: 'white', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '10vh', padding: 1, paddingLeft: 2, paddingRight: 2 }}>3</Typography></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center">Special Offer</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3} justifyContent="center" alignItems="center">
                        <Grid container direction="col">
                            <Grid item xs={12} py={2}>
                                <Typography align="center"><Typography display="inline" sx={{ border: 2, borderColor: '#2C7EF8', color: '#2C7EF8', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '10vh', padding: 1, paddingLeft: 2, paddingRight: 2 }}>4</Typography></Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography align="center">Confirmation</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/*Big Square*/}
            <Grid item xs={12} sm={12} md={10} sx={{ backgroundColor: "#FAFAFA", borderRadius: '1vh'}} mb={5}>
                <Grid container direction="row" justifyContent="center" alignItems="center" px={3} py={3}>
                    
                    {/*Image Square*/}
                    <Grid item xs={12} sm={12} md={6} justifyContent="center" alignItems="center" sx={{ display: {xs: 'none', sm: 'flex', md: 'flex'}}}>
                        <Box 
                            component="img"
                            sx={{
                                maxHeight: { xs: '70vh', md: '60vh' },
                                maxWidth: { xs: '70vh', md: '53vh' },
                            }}
                            alt="des"
                            src={des}
                        />
                    </Grid>

                    {/*Information Square*/}
                    <Grid item xs={12} sm={12} md={6} justifyContent="center" alignItems="center" px={3} py={3}>
                        <Grid container direction="col" justifyContent="center" alignItems="center">
                            {/*Title Line*/}
                            <Grid item xs={12} py={2} sx={{ display: {xs: "none", sm: "none", md: "flex"}}}>
                                <Typography align="left" variant="h5"><Typography display="inline" variant="h5" sx={{ color: "#2C7EF8" }}>One Time Only</Typography> Special Price For 6 Extra Clarifion For Only <Typography display="inline" variant="h5" sx={{ color: "#2C7EF8" }}>$14 Each</Typography> ($84.00 Total!)</Typography>
                            </Grid>
                            <Grid item xs={12} py={2} sx={{ display: {xs: "flex", sm: "flex", md: "none"}}}>
                                <Typography align="center" variant="h5"><Typography display="inline" variant="h5" sx={{ color: "#2C7EF8" }}>One Time Only</Typography> Special Price For 6 Extra Clarifion For Only <Typography display="inline" variant="h5" sx={{ color: "#2C7EF8" }}>$14 Each</Typography> ($84.00 Total!)</Typography>
                            </Grid>

                            {/*Product Square*/}
                            <Grid item xs={12} py={2}>
                                <Grid container direction="row" justifyContent="center" alignItems="center" >
                                    <Grid item xs={4} sm={4} md={3} sx={{ mr: {xs: '0vh', sm: '0vh', md: '8vh'}}}>
                                        <Box 
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: '10vh', sm:'15vh', md: '20vh' },
                                                maxWidth: { xs: '10vh', sm:'15vh', md: '20vh' },
                                            }}
                                            alt="productStock"
                                            src={product}
                                        />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={7}>
                                        <Grid container direction="col">
                                            <Grid item xs={12}>
                                                <Grid container direction="row">
                                                    <Grid item xs={8}>
                                                        <Typography align="left">Clarifion Air Ionizer</Typography>
                                                    </Grid>
                                                    <Grid item xs={4}>
                                                        <Typography display="inline" align="right">$180 <Typography display="inline" sx={{ color: "#2C7EF8" }}>$84</Typography></Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left"><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/></Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography align="left"><RadioButtonChecked fontSize="small"  sx={{ color: '#2C7EF8', verticalAlign:"middle", marginInlineEnd: 2 }}/>12 left in Stock</Typography>
                                            </Grid>
                                            <Grid item xs={12} sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}}}>
                                                <Typography align="left">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>


                            {/*Checks Square*/}
                            <Grid item xs={11} sx={{ display: { xs: 'flex', sm: 'flex', md: 'none'}}} mb={2}>
                                <Typography align="center">Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple</Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography align="left"><Check fontSize="small"  sx={{ color: 'blue', verticalAlign:"middle", marginInlineEnd: 2 }}/>Negative Ion Technology may help <Typography variant="bold">with allergens</Typography></Typography>
                            </Grid>
                            <Grid item xs={11}>
                                <Typography align="left"><Check fontSize="small"  sx={{ color: 'blue', verticalAlign:"middle", marginInlineEnd: 2 }}/>Designed for <Typography variant="bold">air rejuvenation</Typography></Typography>
                            </Grid>
                            <Grid item xs={11} mb={2}>
                                <Typography align="left"><Check fontSize="small"  sx={{ color: 'blue', verticalAlign:"middle", marginInlineEnd: 2 }}/><Typography variant="bold">Perfect for every room </Typography>in all types of places</Typography>
                            </Grid>



                            {/*Blue Square*/}
                            <Grid item xs={12} sx={{ backgroundColor: '#EDF3FD', borderRadius: '1vh'}} py={1}>
                                <Typography align="center"><PercentRounded fontSize="small"  sx={{ backgroundColor: '#2C7EF8', color: 'white', verticalAlign:"middle", marginInlineEnd: 2, borderRadius: '3vh', padding: 1 }} />Save <Typography display="inline" sx={{ color: "#2C7EF8" }}>53%</Typography> and get <Typography display="inline" sx={{ color: "#2C7EF8" }}>6 extra Clarifision</Typography> for only <Typography display="inline" sx={{ color: "#2C7EF8" }}>14$ Each.</Typography></Typography>
                            </Grid>



                            {/*Buttom Line*/}
                            <Grid item xs={12} py={2}>
                                <Button variant="contained" sx={{ backgroundColor: 'green', width: '100%' }}>YES - CLAIM MY DISCOUNT <ArrowForward fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineStart: 2 }}/></Button>
                            </Grid>



                            {/*FREE SHOP LINE */}
                            <Grid item xs={12} py={1} sx={{ border: 1, borderRadius: '1vh' }}>
                                <Grid container direction="row">
                                    <Grid item xs={5} sm={5} md={2}>
                                        <Typography align="center" variant="caption">Free Shipping</Typography>
                                    </Grid>
                                    <Grid item xs={2} sm={2} md={1}>
                                        <Typography align="center" variant="body1">|</Typography>
                                    </Grid>
                                    <Grid item xs={5} sm={5} md={5}>
                                        <Typography align="center" variant="caption"><LockOutlined fontSize="small"  sx={{ color: 'black', verticalAlign:"middle", marginInlineEnd: 1 }}/>Secure 256-Bit SSL Encryption</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={1}>
                                        <Typography align="center" variant="body1" sx={{ color: "black", display: { xs: 'none', sm: 'none', md: 'block'}}}>|</Typography>
                                        <Divider orientation="horinzontal" sx={{ backgroundColor: 'black', color: "black", display: { xs: 'flex', sm: 'flex', md: 'none'}}} />
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={3} justifyContent="center" alignContent="center">
                                        <Grid container direction="row">
                                            <Grid item xs={12}>
                                                <Box 
                                                    component="img"
                                                    sx={{
                                                        maxHeight: { xs: "100%", md: "100%"},
                                                        maxWidth: { xs: "100%", md: "100%"},
                                                        paddingX: { xs: 0, sm: 10, md: 0},
                                                        paddingY: { xs: 1, sm: 0, md: 0}
                                                    }}
                                                    alt="productStock"
                                                    src={visas}
                                                />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*Comments Square*/}
                    <Grid item xs={6} justifyContent="center" alignItems="center" sx={{ backgroundColor: "#FFFFFF", display: { xs: 'none', sm: 'none', md: 'flex'}, borderRadius: '2vh'}}>
                        <Grid container direction="col" justifyContent="center" alignItems="center" px={3} py={2}>
                            {/*Profile Line*/}
                            <Grid item xs={12} mb={2}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={1}>
                                        <Box 
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: '10vh' },
                                                maxWidth: { xs: '10vh' },
                                            }}
                                            alt="profilePhoto"
                                            src={profile}
                                        />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <Grid item direction="col" justifyContent="left" alignItems="left" px={5}>
                                            <Grid item xs={12}>
                                                <Typography align="left"><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/><Star fontSize="small"  sx={{ color: 'yellow', verticalAlign:"middle" }}/></Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" align="left" display="inline"><b>Ken T.</b><Verified fontSize="small"  sx={{ color: 'green', verticalAlign:"middle", marginInlineStart: 1, marginInlineEnd: 1 }}/><Typography sx={{ color: 'green'}} display="inline">Verified Customer</Typography></Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                            {/*Comments Line*/}
                            <Grid item xs={12}>
                                <Typography variant="body1" align="left">{`"As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to the bed I felt I could breathe better. Wonderful."`}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>




                    {/*Warning Square*/}
                    <Grid item xs={12} sm={12} md={6} justifyContent="center" alignItems="center">
                        <Grid container direction="col" justifyContent="center" alignItems="center">
                            {/*Decline Line*/}
                            <Grid item xs={12} mb={3}>
                                <Typography variant="subtitle1" align="center" sx={{textDecoration: 'underline', color: "red"}}>{`NO THANKS, I DON'T WANT THIS`}</Typography>
                            </Grid>

                            {/*Guarantee Line*/}
                            <Grid item xs={12}>
                                <Grid container direction="row" justifyContent="center" alignItems="center">
                                    <Grid item xs={2}>
                                        <Box 
                                            component="img"
                                            sx={{
                                                maxHeight: { xs: '10vh', md: '16vh' },
                                                maxWidth: { xs: '10vh', md: '16vh' },
                                            }}
                                            alt="guarantee"
                                            src={guarantee}
                                        />
                                    </Grid>
                                    <Grid item xs={9}>
                                        <Grid item direction="col" justifyContent="center" alignItems="center" px={8}>
                                            <Grid item xs={12}>
                                                <Typography variant="body1" align="left">If you are not completely thrilled with your Clarifion - We have <b>30 day satisfaction guarantee</b>. Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
