import React, { useContext } from 'react';
import { Box, Paper, TextField, makeStyles, Theme, createStyles, Typography, Checkbox, FormControlLabel } from '@material-ui/core';
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

function ProjectDetailsComponent() {
    const classes = useStyles();
    const model = useContext(CompEmpContext);

    const handleCheckBoxChange = () => {

    }

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper} elevation={5}>
                <Typography style={{ fontSize: '2em' }}>Project Details</Typography>
                <br />
                <TextField
                    label="Project Name"
                    variant="outlined"
                    value={model.projectDetails.projectName}
                />
                <TextField
                    label="Tenure"
                    type="number"
                    variant="outlined"
                    value={model.projectDetails.tenure}
                />
                <TextField
                    label="Total Exp"
                    variant="outlined"
                    value={model.projectDetails.totalExp}
                />
                <TextField
                    label="Location"
                    variant="outlined"
                    value={model.projectDetails.location}
                />
                <TextField
                    label="Address"
                    variant="outlined"
                    value={model.projectDetails.address}
                />
                <Box style={{ alignItems: 'center', display: 'inline-flex', minHeight: 70 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckBoxChange}
                                color="primary"
                            />
                        }
                        label="Have you verified everything?"
                    />
                </Box>
            </Paper>
        </Box>
    )
}

export default ProjectDetailsComponent;