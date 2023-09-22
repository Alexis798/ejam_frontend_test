import { Box, Grid } from "@mui/material"

export const EjamLayout = ({ children }) => {
    return (
       <Grid container>
         <Box 
            sx={{ 
                display: "flex",
                flexDirection: "column",
                height: '100%',
                width: '100%',
                overflow: "hidden",
                overflowY: "scroll",
                flex: 1
            }}>
                { children }
            </Box>
       </Grid>
    )
}
