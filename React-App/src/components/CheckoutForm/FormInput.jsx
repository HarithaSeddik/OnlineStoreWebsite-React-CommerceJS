// Connect react form hook to material UI text input!
import React from 'react'
import {TextField, Grid, Input, Select, MenuItem} from '@material-ui/core'
import {useFormContext, Controller} from 'react-hook-form'

const FormInput = ({name,label,required}) => {

    const {control} = useFormContext()
    return (
        <Grid item xs={12} sm={6}>
            {/* {console.log(name,label,required)} */}
            <Controller
                    // as = {TextField}
                    control={control}
                    fullWidth
                    label ={label}
                    required={required}
                    name={name}           
                    defaultValue=''
                    
                    render={({
                        
                      }) => (
                        <TextField name={name} label={label} required={required} fullWidth defaultValue=''/>
                      )} 
                                                                  
            />
                    
            
        </Grid>
    )
}

export default FormInput
