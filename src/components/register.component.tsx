import React, { useState, FunctionComponent, useEffect } from 'react';
import { useGlobalState } from "../shared/context/global.context";
import {
    Box, Popover, CircularProgress, Grid, Paper, Typography,
    makeStyles, Theme, createStyles
} from '@material-ui/core';
import RadioWrapper from './shared/controls/radio-field-wrapper';
import TextFieldWrapper from './shared/controls/text-field-wrapper';
import SelectWrapper from './shared/controls/select-field-wrapper';
import { IValidationObj } from '../shared/interfaces/validation-object.interface';
import { IErrorObj } from '../shared/interfaces/error-object.interface';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        boxRoot: {
            display: 'inline-grid',
            '& .MuiTextField-root': {
                width: '25ch',
            },
            '& .MuiFormControl-root': {
                margin: theme.spacing(2),
            }
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minHeight: '60em'
        },
        popoverPaper: {
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,0.5)',
            textAlign: 'center',
            position: 'initial',
            maxWidth: '100%',
            maxHeight: '100%'
        }
    }),
);

const RegisterComponent: FunctionComponent = () => {
    const classes = useStyles();
    const { GlobalState, GlobalDispatch } = useGlobalState();
    const [validationObj, setValidationObj] = useState<IValidationObj>({});
    const [errorObj, setErrorObj] = useState<IErrorObj>({});
    const [openPopover, setOpenPopover] = useState(false);
    const salutationItems = [{ text: 'Mr', value: 'mr' }, { text: 'Mrs', value: 'mrs' }];
    const genderItems = [{ display: 'Male', value: 'm' }, { display: 'Female', value: 'f' }];

    useEffect(() => {
        console.log(GlobalState);
    })

    return (
        <Box>
            <Popover open={openPopover} classes={{
                paper: classes.popoverPaper
            }}>
                <CircularProgress style={{ position: 'relative', top: '50%', color: 'white' }} />
            </Popover>
            <Box className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={3}
                    style={{ margin: 0 }}
                >
                    <Grid item xs={12} sm={6}>
                        <Paper className={classes.paper}>
                            <Grid item xs={12} sm={12} style={{ margin: 15 }}>
                                <Typography style={{ fontSize: '2em', display: 'inline' }}>Register &nbsp;&nbsp; </Typography>
                                <br /><br /><br />

                                <Box className={classes.boxRoot}>
                                    <RadioWrapper label="" model={GlobalState.salution} errorObj={errorObj} setErrorObj={setErrorObj} validationObj={validationObj} setValidationObj={setValidationObj} globalDispatch={GlobalDispatch} updatePath="salution" radioItems={salutationItems} />
                                    <TextFieldWrapper label="User Name" model={GlobalState.userName} errorObj={errorObj} setErrorObj={setErrorObj} validationObj={validationObj} setValidationObj={setValidationObj} globalDispatch={GlobalDispatch} updatePath="userName" />
                                    <TextFieldWrapper label="Email" model={GlobalState.email} errorObj={errorObj} setErrorObj={setErrorObj} validationObj={validationObj} setValidationObj={setValidationObj} globalDispatch={GlobalDispatch} updatePath="email" />
                                    <SelectWrapper name="Gender" label="Gender" model={GlobalState.gender} errorObj={errorObj} setErrorObj={setErrorObj} validationObj={validationObj} setValidationObj={setValidationObj} globalDispatch={GlobalDispatch} updatePath="gender" menuItems={genderItems} />
                                </Box>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default RegisterComponent;