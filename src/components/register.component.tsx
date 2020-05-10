import React, { useState, FunctionComponent } from 'react';
import { useGlobalState, createGlobalState } from "../shared/context/global.context";
import {
    Box, Popover, CircularProgress, Grid, Paper, Typography, TextField,
    Button, makeStyles, Theme, createStyles, RadioGroup, Radio, FormControlLabel, FormLabel, Select, MenuItem, InputLabel, FormControl
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        boxRoot: {
            display: 'inline-grid',
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
            },
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

type RegisterModel = {
    salution: string,
    userName: string,
    email: string,
    gender: string
}

const RegisterComponent: FunctionComponent = () => {
    const initialRegisterValues: RegisterModel = {
        salution: '',
        userName: '',
        email: '',
        gender: ''
    }
    const classes = useStyles();
    const GlobalStateProvider = createGlobalState(initialRegisterValues);
    const { GlobalState, GlobalDispatch } = useGlobalState();
    const [openPopover, setOpenPopover] = useState(false);

    return (
        <GlobalStateProvider>
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
                                        <FormControl>
                                            <FormLabel component="legend" style={{ textAlign: 'left' }}>Salutation</FormLabel>
                                            <RadioGroup name="salutation" value={''}>
                                                <FormControlLabel label="Mr" value="mr" control={<Radio />} />
                                                <FormControlLabel label="Mrs" value="mrs" control={<Radio />} />
                                            </RadioGroup>
                                        </FormControl>
                                        <TextField
                                            label="User Name"
                                            variant="outlined"
                                            value={GlobalState.companyName}
                                            onChange={(e) => GlobalDispatch({ updatePath: 'companyName', updateValue: e.target.value })}
                                        />
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            value={GlobalState.companyName}
                                            onChange={(e) => GlobalDispatch({ updatePath: 'companyName', updateValue: e.target.value })}
                                        />
                                        <FormControl variant="outlined" style={{ width: 200, margin: 8 }}>
                                            <InputLabel>Gender</InputLabel>
                                            <Select label="Gender">
                                                <MenuItem value={'male'}>Male</MenuItem>
                                                <MenuItem value={'female'}>Female</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </GlobalStateProvider>
    )
}

export default RegisterComponent;