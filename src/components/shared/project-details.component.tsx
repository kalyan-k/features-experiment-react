import React from 'react';
import { Box, Paper, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';

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

    return (
        <Box className={classes.root}>
            <Paper className={classes.paper}>
                <TextField
                    required
                    id="outlined-required"
                    label="Required"
                    defaultValue="Hello World"
                    variant="outlined"
                />
                <TextField
                    disabled
                    id="outlined-disabled"
                    label="Disabled"
                    defaultValue="Hello World"
                    variant="outlined"
                />
                <TextField
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                />
                <TextField
                    id="outlined-read-only-input"
                    label="Read Only"
                    defaultValue="Hello World"
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="outlined"
                />
                <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />
                <TextField id="outlined-search" label="Search field" type="search" variant="outlined" />
                <TextField
                    id="outlined-helperText"
                    label="Helper text"
                    defaultValue="Default Value"
                    helperText="Some important text"
                    variant="outlined"
                />
            </Paper>
        </Box>
    )
}

export default ProjectDetailsComponent;