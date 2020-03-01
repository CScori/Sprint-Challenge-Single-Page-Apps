import React from "react";
import { Formik, Form, Field } from 'formik'

export default function SearchForm(props) {
//  console.log('search props', props)
 const [search, setSearch] = React.useState('')
 const method = props.query
 
  return (
    <section className="search-form">
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
         
         />
         {props.children}
        
       </Form>
     )}
     </Formik>

    </section>
  );
}
