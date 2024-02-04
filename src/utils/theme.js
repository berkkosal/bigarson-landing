import { createTheme } from '@mui/material/styles';


const theme = createTheme({

    
   typography:{
    fontFamily:['Poppins','sans-serif'],
    button:{
        textTransform:'none',
        fontFamily:['Poppins']
    }
   },

   components:{
    MuiButton:{
        styleOverrides:{
            root:({ownerState})=>({
                ...(ownerState.variant ==='contained' ? {backgroundColor:'#0156D2'} : {backgroundColor:'#FFFFFF'}),
            })
        }
    }
   }
});

export default theme;