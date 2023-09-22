import {  LockOutlined } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"

export const Footer = () => {
    
    const footerContent = [{id: 1, des: "Copyright (C) 2023 | clarifionsupport@clarifion.com"}, {id: 2, des: "Secure 256-Bit SSL Encryption"}]

    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ backgroundColor: "#252F3D" }} py={3}>
            <Grid item xs={12}>
                <Grid container direction="row" justifyContent="left" alignItems="center" spacing={2}>
                    {footerContent.map((item) => (
                        <Grid key={item.id} item xs={12} sm={12} md={6} justifyContent="center" alignItems="center">
                            <Typography variant='body2' align="center" color='white'>{item.id == 2 && <LockOutlined fontSize="small"  sx={{ color: 'white', verticalAlign:"middle", marginInlineEnd: 3 }}/>}{item.des}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    )
}
