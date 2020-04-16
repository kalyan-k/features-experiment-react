import React, { useContext } from 'react';
import { Box, makeStyles, Theme, createStyles, Paper, TextField, Typography, RadioGroup, FormControlLabel, Radio, FormLabel } from '@material-ui/core';
import { CompEmpContext } from '../../shared/context/company-employee.context';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
        },
        paper: {
            padding: theme.spacing(3),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minHeight: '10em'
        },
    }),
);

function EmployeeComponent() {
    const classes = useStyles();
    const model = useContext(CompEmpContext);

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <Typography style={{ fontSize: '2em' }}>Employee Details</Typography>
                <br />
                <TextField
                    label="First Name"
                    variant="outlined"
                    value={model.employeeDetails.firstName}
                    onChange={(e) => { model.employeeDetails.firstName = e.target.value; }}
                />
                <TextField
                    label="Last Name"
                    variant="outlined"
                    value={model.employeeDetails.lastName}
                />
                <Box style={{ alignItems: 'center', display: 'inline-flex', minHeight: 65 }}>
                    <FormLabel>Gender: &nbsp;</FormLabel>
                    <RadioGroup value={model.employeeDetails.gender} style={{ display: 'inline-flex', flexDirection: 'row' }}>
                        <FormControlLabel value="m" control={<Radio color="primary" />} label="Male" />
                        <FormControlLabel value="f" control={<Radio color="primary" />} label="Female" />
                    </RadioGroup>
                </Box>
                <TextField
                    label="Age"
                    type="number"
                    variant="outlined"
                    value={model.employeeDetails.age}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    value={model.employeeDetails.address}
                />
            </Paper>
        </Box>
    )
}

export default EmployeeComponent;