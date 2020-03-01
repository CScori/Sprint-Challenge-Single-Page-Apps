import React, { useState, useEffect } from "react";
import { Formik, Form, Field } from 'formik'
import { TextField} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    margin: '1rem',
  },
  inputBox: {
    margin: '1rem',
  },
  submit: {
    width: '100%',
    display: 'flex',
    // flexDirection: 'space-between'
    marginLeft: '1rem',

  },
  btn: {
    marginLeft: '10rem',
  }
}))

const SearchForm = (props) => {
  const [search, setSearch] = useState('')
  const classes = useStyles();
  const method = props.query

 
  return (
    <section className={classes.root}>
     <Formik
        initialValues={{ search: '' }}
        onSubmit={(data, {setSubmitting, resetForm}) => {
          setSubmitting(true)
          // ^ Makes the Async Call for Data
          setSearch(data)
          method(data.search)

          setSubmitting(false)
          resetForm()
        }}
      >
     {({ values }) => (
       <Form>
         <Field
         name='search'
         label='Search Name'
         as={TextField}
         />
         {props.children}
       </Form>
     )}
     </Formik>
    </section>
  );
}

export default SearchForm