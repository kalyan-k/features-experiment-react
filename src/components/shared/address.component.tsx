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
    const propNavigationArr = parentPropNavigationName.split('.');
    let model: any = GlobalState;

    ({ model } = getModelAndItsName(propNavigationArr, model));

    return (
        <Box className={classes.root}>
            <TextField
                label="Street"
                variant="outlined"
                value={model.street}
                onChange={(e) => GlobalDispatch({ updatePath: `${parentPropNavigationName}.${'street'}`, updateValue: e.target.value })}
            />
            <TextField
                label="City"
                variant="outlined"
                value={model.city}
                onChange={(e) => GlobalDispatch({ updatePath: `${parentPropNavigationName}.${'city'}`, updateValue: e.target.value })}
            />
            <TextField
                label="Zip"
                variant="outlined"
                value={model.zipcode}
                onChange={(e) => GlobalDispatch({ updatePath: `${parentPropNavigationName}.${'zipcode'}`, updateValue: e.target.value })}
            />
            <TextField
                label="County"
                variant="outlined"
                value={model.county}
                onChange={(e) => GlobalDispatch({ updatePath: `${parentPropNavigationName}.${'county'}`, updateValue: e.target.value })}
            />
            <TextField
                label="Country"
                variant="outlined"
                value={model.country}
                onChange={(e) => GlobalDispatch({ updatePath: `${parentPropNavigationName}.${'country'}`, updateValue: e.target.value })}
            />
        </Box>
    )
}

export default AddressComponent;

function getModelAndItsName(propNavigationArr: any, model: any) {
    let parentModel: any;
    for (var i = 0; i < propNavigationArr.length; i++) {
        if (i === propNavigationArr.length - 1) {
            parentModel = model[propNavigationArr[i]];
        }
        model = model[propNavigationArr[i]];
    }
    return { parentModel, model };
}
