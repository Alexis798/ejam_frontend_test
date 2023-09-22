import { ArrowBackIos, ArrowForwardIos, CheckCircle, FavoriteBorder, LocalShipping, Public } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react"

export const Header = () => {

    const headerContent = [{ id: 1, des: '30-DAY SATISFACTION GUARANTEE'}, { id: 2, des: 'FREE DELIVERY ON ORDERS OVER $40.00'}, { id: 3, des: '50.000+ HAPPY CUSTOMERS'}, { id: 4, des: '100% MONEY BACK GUARANTEE'}]

    const [counter, setCounter] = useState(1)

    const BackClick = () => {
        setCounter(counter - 1)
    }

    const NextClick = () => {
        setCounter(counter + 1)
    }

    useEffect(() => {
        if(counter < 1) {
            setCounter(4)
        }
        if(counter > 4) {
            setCounter(1)
        }
    }, [counter])



    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#252F3D" }} py={1}>
            <Grid item xs={12}>
                
                {/*PC version */}
                <Grid container direction="row" justifyContent="left" alignItems="center" sx={{ display: { xs: 'none', sm: 'none', md: 'flex'}}}>
                    {headerContent.map((item) => (
                        <Grid key={item.id} item xs={3} justifyContent="center" alignItems="center">
                            <Typography variant='body2' align="center" color='white'>
                                {item.id == 1 && <CheckCircle fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                {item.id == 2 && <LocalShipping fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                {item.id == 3 && <FavoriteBorder fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                {item.id == 4 && <Public fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                {item.des}
                            </Typography>
                        </Grid>
                    ))}
                </Grid>

                {/*Mobile Version*/}
                <Grid container direction="row" justifyContent="left" alignItems="center" sx={{ display: { xs: 'flex', sm: 'flex', md: 'none'}}} px={2}>
                    <Grid item xs={2} onClick={BackClick}>
                        <Typography variant='body2' align="center" color='white'><ArrowBackIos fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 2 }}/></Typography>
                    </Grid>
                    <Grid item xs={8}>
                        {headerContent.map((item) => (
                            <Grid container key={item.id}>
                                { counter == item.id && (
                                    <Grid item xs={12} justifyContent="center" alignItems="center">
                                        <Typography variant='body2' align="center" color='white'>
                                            {item.id == 1 && <CheckCircle fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                            {item.id == 2 && <LocalShipping fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                            {item.id == 3 && <FavoriteBorder fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                            {item.id == 4 && <Public fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 1 }}/>}
                                            {item.des}
                                        </Typography>
                                    </Grid>
                                )}
                            </Grid>
                        ))}
                    </Grid>
                    <Grid item xs={2} onClick={NextClick}>
                        <Typography variant='body2' align="center" color='white'><ArrowForwardIos fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 2 }}/></Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
