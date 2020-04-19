import React from 'react';
import { Box, makeStyles, Theme, createStyles, Paper, TextField, Typography, RadioGroup, FormControlLabel, Radio, FormLabel, Divider } from '@material-ui/core';
import { useGlobalState } from '../../shared/context/global.context';
import AddressComponent from './address.component';

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
    //const model = useContext(CompEmpContext);
    const { GlobalState, GlobalDispatch } = useGlobalState();

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <Typography style={{ fontSize: '2em' }}>Employee Details</Typography>
                <br />
                <TextField
                    label="First Name"
                    variant="outlined"
                    value={GlobalState.employeeDetails.firstName}
                    onChange={(e) => GlobalDispatch({ employeeDetails: { ...GlobalState.employeeDetails, firstName: e.target.value } })}
                // onChange={(e) => {
                //     GlobalState.setCompanyEmpDetails(prevCompEmpDetails => ({
                //         ...prevCompEmpDetails,
                //         employeeDetails: {
                //             ...prevCompEmpDetails.employeeDetails,
                //             firstName: e.target.value
                //         }
                //     }))
                // }}
                />
                < TextField
                    label="Last Name"
                    variant="outlined"
                    value={GlobalState.employeeDetails.lastName}
                    onChange={(e) => GlobalDispatch({ employeeDetails: { ...GlobalState.employeeDetails, lastName: e.target.value } })}
                />
                <Box style={{ alignItems: 'center', display: 'inline-flex', minHeight: 65 }}>
                    <FormLabel>Gender: &nbsp;</FormLabel>
                    <RadioGroup value={GlobalState.employeeDetails.gender}
                        onChange={(e) => GlobalDispatch({ employeeDetails: { ...GlobalState.employeeDetails, gender: e.target.value } })}
                        style={{ display: 'inline-flex', flexDirection: 'row' }}>
                        <FormControlLabel value="m" control={<Radio color="primary" />} label="Male" />
                        <FormControlLabel value="f" control={<Radio color="primary" />} label="Female" />
                    </RadioGroup>
                </Box>
                <TextField
                    label="Age"
                    type="number"
                    variant="outlined"
                    value={GlobalState.employeeDetails.age}
                    onChange={(e) => GlobalDispatch({ employeeDetails: { ...GlobalState.employeeDetails, age: e.target.value } })}
                />
                {/* <TextField
                    label="Address"
                    variant="outlined"
                    value={GlobalState.employeeDetails.address}
                    onChange={(e) => GlobalDispatch({ employeeDetails: { ...GlobalState.employeeDetails, address: e.target.value } })}
                /> */}
                <Divider style={{ margin: 10 }} />
                <AddressComponent parentPropNavigationName="employeeDetails.address"></AddressComponent>
            </Paper>
        </Box>
    )
}

export default EmployeeComponent;