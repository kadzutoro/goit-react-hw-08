import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useId } from 'react';
import css from './ContactForm.module.css';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const initialValues = {
    name: "",
    number: ""
  };

  const ContactsSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
  });


const ContactForm = () => {
    const elementId = useId();
    const dispatch = useDispatch();
    const handleSubmit = (values, actions) => {
        dispatch(addContact(values));
        actions.resetForm();
      };
      return (
        <div className={css.container}>
        <Formik initialValues={initialValues} validationSchema={ContactsSchema} onSubmit={handleSubmit}>
            <Form className={css.form}>
                <div className={css.field}>
                <label htmlFor={elementId + '-name'}>Name</label>
                    <Field name="name" type="text" id={elementId + '-name'} placeholder="Name" />
                <ErrorMessage component="div" className={css.error} name="name" as="span" />
                </div>

                 <div className={css.field}>
                 <label htmlFor={elementId + '-number'}>Number</label>
                       <Field name="number" type="tel" id={elementId + '-number'} placeholder="000-00-00" />
                <ErrorMessage component="div" className={css.error} name="number" as="span" />
                </div>
        <button type="submit">Add Contact</button>
        </Form>
    </Formik>
</div>
)
};

export default ContactForm;