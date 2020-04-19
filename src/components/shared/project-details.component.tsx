import React from 'react';
import { Box, Paper, TextField, makeStyles, Theme, createStyles, Typography, Checkbox, FormControlLabel, Divider } from '@material-ui/core';
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

function ProjectDetailsComponent() {
    const classes = useStyles();
    // const model = useContext(CompEmpContext);
    const { GlobalState, GlobalDispatch } = useGlobalState();

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <Typography style={{ fontSize: '2em' }}>Project Details</Typography>
                <br />
                <TextField
                    label="Project Name"
                    variant="outlined"
                    value={GlobalState.projectDetails.projectName}
                    onChange={(e) => GlobalDispatch({ updatePath: 'projectDetails.projectName', newValue: e.target.value })}
                //onChange={(e) => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, projectName: e.target.value } })}
                />
                <TextField
                    label="Tenure"
                    type="number"
                    variant="outlined"
                    value={GlobalState.projectDetails.tenure}
                    onChange={(e) => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, tenure: e.target.value } })}
                />
                <TextField
                    label="Total Exp"
                    variant="outlined"
                    value={GlobalState.projectDetails.totalExp}
                    onChange={(e) => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, totalExp: e.target.value } })}
                />
                <TextField
                    label="Location"
                    variant="outlined"
                    value={GlobalState.projectDetails.location}
                    onChange={(e) => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, location: e.target.value } })}
                />
                {/* <TextField
                    label="Address"
                    variant="outlined"
                    value={GlobalState.projectDetails.address}
                    onChange={(e) => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, address: e.target.value } })}
                /> */}
                <Box style={{ alignItems: 'center', display: 'inline-flex', minHeight: 70 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={GlobalState.projectDetails.verified}
                                onChange={() => GlobalDispatch({ projectDetails: { ...GlobalState.projectDetails, verified: !GlobalState.projectDetails.verified } })}
                                color="primary"
                            />
                        }
                        label="Have you verified everything?"
                    />
                </Box>
                <Divider style={{ margin: 10 }} />
                <AddressComponent parentPropNavigationName="projectDetails.address"></AddressComponent>
            </Paper>
        </Box>
    )
}

export default ProjectDetailsComponent;