import React, { useContext } from 'react';

import EmployeeComponent from './shared/employee.component';
import ProjectDetailsComponent from './shared/project-details.component';
import { Box, Grid, Paper, makeStyles, Theme, createStyles } from '@material-ui/core';
import { CompEmpContext } from '../shared/context/company-employee.context';

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
    }),
);

function SampleFormComponent() {
    const classes = useStyles();
    const model = useContext(CompEmpContext);

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
                            <EmployeeComponent />
                        </Grid>
                        <Grid item xs={12} sm={12} style={{ margin: 15 }}>
                            <ProjectDetailsComponent />
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        Show the output here
                        <br />
                        {JSON.stringify(model)}
                    </Paper>
                </Grid>
            </Grid>

        </Box>
    )
}

export default SampleFormComponent;