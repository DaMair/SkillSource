import { InputLabel, Select, MenuItem, Checkbox, FormControlLabel, CheckboxProps } from "@material-ui/core";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import React from "react";
import FormControl from '@material-ui/core/FormControl';
import SearchIcon from '@material-ui/icons/Search';
import ImgMediaCard from "./ImgMediaCard";

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        },
        color: 'white',
    },
    icon: {
        fill: 'white',
    },
}));

const WhiteCheckbox = withStyles({
    root: {
        color: 'white',
        '&$checked': {
            color: 'white',
        },
    },
    checked: {},
})((props: CheckboxProps) => <Checkbox color="default" {...props} />);

const Jobfinder = () => {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const [state, setState] = React.useState({ checkedB: true });

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setAge(event.target.value as string);
    };

    const handleCheckBoxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: '#303F9F', flex: 1 }}>
                    <div style={{ padding: 20, flexDirection: 'row', display: 'flex' }}>
                        <div style={{ flex: 1, padding: 10, flexDirection: 'column' }}>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="categoryLabel" style={{ color: 'white' }}>Category</InputLabel>
                                    <Select
                                        labelId="categoryLabel"
                                        id="categorySelect"
                                        value={age}
                                        onChange={handleChange}
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                            },
                                        }}>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="skillLabel" style={{ color: 'white' }}>Skill</InputLabel>
                                    <Select
                                        labelId="skillLabel"
                                        id="skillSelect"
                                        value={age}
                                        onChange={handleChange}
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                            },
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                        <div style={{ flex: 1, padding: 10, flexDirection: 'column' }}>
                            <div>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="organisationLabel" style={{ color: 'white' }}>Organisation</InputLabel>
                                    <Select
                                        labelId="organisationLabel"
                                        id="organisationSelect"
                                        value={age}
                                        onChange={handleChange}
                                        className={classes.select}
                                        inputProps={{
                                            classes: {
                                                icon: classes.icon,
                                            },
                                        }}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div>
                                <FormControlLabel
                                    control={
                                        <WhiteCheckbox checked={state.checkedB} onChange={handleCheckBoxChange} name="checkedB" />
                                    }
                                    label="Volunteer"
                                    style={{ color: 'white' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', width: 140, height: 50, marginTop: -20, backgroundColor: 'white', borderRadius: 30, display: 'flex', justifyContent: 'center', alignSelf: 'center'}}>
                    <div style={{alignSelf: 'center'}}><SearchIcon></SearchIcon>Find Jobs</div>
                </div>
                <div style={{ flex: 1 }}>
                    
                    <ImgMediaCard></ImgMediaCard>
                </div>
            </div>
        </>
    );
}

export default Jobfinder;
