import React from 'react';
import { Box, TextField, makeStyles, Theme, createStyles } from '@material-ui/core';
import { useGlobalState } from '../../shared/context/global.context';

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

const AddressComponent = ({ parentPropNavigationName }: any) => {
    const classes = useStyles();
    const { GlobalState, GlobalDispatch } = useGlobalState();
    let parentModel: any;
    let model: any = GlobalState;
    const propNavigationArr = parentPropNavigationName.split('.');

    ({ parentModel, model } = getModelAndItsName(propNavigationArr, model));

    return (
        <Box className={classes.root}>
            <TextField
                label="Street"
                variant="outlined"
                value={model.street}
            />
            <TextField
                label="City"
                variant="outlined"
                value={model.city}
            />
            <TextField
                label="Zip"
                variant="outlined"
                value={model.zipcode}
            />
            <TextField
                label="County"
                variant="outlined"
                value={model.county}
            />
            <TextField
                label="Country"
                variant="outlined"
                value={model.country}
            />
        </Box>
    )
}

export default AddressComponent;

function getModelAndItsName(propNavigationArr: any, model: any) {
    let parentModel:any;
    for (var i = 0; i < propNavigationArr.length; i++) {
        if (i == propNavigationArr.length - 1) {
            parentModel = model[propNavigationArr[i]];
        }
        model = model[propNavigationArr[i]];
    }
    return { parentModel, model };
}
