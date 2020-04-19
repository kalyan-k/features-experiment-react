import React from 'react';

import EmployeeComponent from './shared/employee.component';
import ProjectDetailsComponent from './shared/project-details.component';
import { Box, Grid, Paper, makeStyles, Theme, createStyles, Typography, TextField, Button } from '@material-ui/core';
import { useGlobalState } from '../shared/context/global.context';
import TransactionService from '../shared/services/transaction-initialization.service';
import HighlightDifferencesComponent from './shared/highlight-differences.component';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            minHeight: '60em'
        },
        outputBox: {
            width: "375px",
            padding: "25px",
            margin: "5px 20px"
        }
    }),
);

function SampleFormComponent() {
    const classes = useStyles();
    const { GlobalState, GlobalDispatch } = useGlobalState();

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        setTimeout(() => {
            GlobalDispatch({ updateValue: TransactionService.getTrans() })
        }, 2000);
    }

    const handleClear = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        GlobalDispatch({ updateValue: TransactionService.initializeTrans() })
    }

    return (
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
                            <Typography style={{ fontSize: '2em', display: 'inline' }}>Company &nbsp;&nbsp; </Typography>
                            <TextField
                                label="Company Name"
                                variant="outlined"
                                value={GlobalState.companyName}
                                onChange={(e) => GlobalDispatch({ updatePath: 'companyName', updateValue: e.target.value })}
                            />
                            <Button variant="contained" style={{ float: 'right', marginLeft: 5 }} onClick={handleClear}>Clear</Button>
                            <Button variant="contained" style={{ float: 'right', marginRight: 5 }} onClick={handleSubmit}>Fill Data</Button>
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ margin: 15 }}>
                            <EmployeeComponent />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ margin: 15 }}>
                            <ProjectDetailsComponent />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Typography style={{ fontSize: '2em' }}>Output here</Typography>
                        <br />
                        <Box className={classes.outputBox}>
                            <Typography style={{ fontSize: '1.5em', textDecoration: 'underline' }}>Employee Details Model:- </Typography>
                            <pre style={{ textAlign: 'left' }}>
                                <code>
                                    {/* {JSON.stringify(GlobalState, null, 4)} */}
                                    <HighlightDifferencesComponent text1={''} text2={JSON.stringify(GlobalState, null, 4)} />
                                </code>
                            </pre>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    )
}

export default SampleFormComponent;