/* 
    Field Component
    ErrorMessage Component
    Nested Objects
    Array
    Field Array Component
    Field Level Validation
    Manually trigering validation
    Disabling Submit 1
*/

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";


const YoutubeForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: '',
        comments: '',
        address: '',
        social: {
            facebook: '',
            twitter: ''
        },
        phoneNumbers: ['', '']
    };

    const onSubmit = values => {
        console.log("Form Submited Date: ", values);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email format').required("Required"),
        channel: Yup.string().required("Required")
    })

    const validateComments = value => {
        let error;
        if (!value) {
            error = "Required"
        }
        return error
    }


    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            /* for disable button on start */
            /* validateOnMount */
        >
            {
                formik => {
                    console.log('Formik: ', formik);
                    return (
                        <Form>
                            <div className="form-control">
                                <label htmlFor="name">Name</label>
                                <Field type="text" id="name" name="name" />
                                <ErrorMessage name="name" component={TextError} />
                            </div>
                            <div className="form-control">
                                <label htmlFor="email">E-mail</label>
                                <Field type="text" id="email" name="email" />
                                <ErrorMessage name="email">
                                    {
                                        (errorMsg) => <div className="error">{errorMsg}</div>
                                    }
                                </ErrorMessage>
                            </div>
                            <div className="form-control">
                                <label htmlFor="channel">Channel</label>
                                <Field type="text" id="channel" name="channel" />
                                <ErrorMessage name="channel" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="comments">Comments</label>
                                {/* <Field as="textarea" type="text" id="comments" name="comments" /> */}
                                <Field as="textarea" type="text" id="comments" name="comments" validate={validateComments} />
                                <ErrorMessage name="comments" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="address">Address</label>
                                <Field name="address" >
                                    {
                                        (props) => {
                                            const { field, form, meta } = props;
                                            return <div>
                                                <input type="text" id="address" {...field} />
                                                {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                            </div>
                                        }
                                    }
                                </Field>
                            </div>
                            <div className="form-control">
                                <label htmlFor="facebook">Facebook Profile</label>
                                <Field type="text" id="facebook" name="social.facebook" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="twitter">Twitter Profile</label>
                                <Field type="text" id="twitter" name="social.twitter" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="primaryPh">Primary phone number</label>
                                <Field type="text" id="primaryPh" name="phoneNumbers[0]" />
                            </div>
                            <div className="form-control">
                                <label htmlFor="secondaryPh">secondary phone number</label>
                                <Field type="text" id="secondaryPh" name="phoneNumbers[1]" />
                            </div>
                            <button
                                type="button"
                                onClick={()=>formik.validateField('comments')}
                            >
                                Validate comments
                            </button>
                            <button type="button"
                                onClick={()=>formik.validateForm()}
                            >
                                Validate all
                            </button>
                            <button
                                type="button"
                                onClick={()=>formik.setFieldTouched('comments')}
                            >
                                Visit comments
                            </button>
                            <button type="button"
                                onClick={()=>formik.setTouched({
                                    name: true,
                                    email: true,
                                    channel: true,
                                    comments: true
                                })}
                            >
                                Visit fields
                            </button>
                            <button type="submit" disabled={!(formik.isValid && formik.dirty)}>Submit</button>
                        </Form>
                    )
                }
            }
        </Formik>
    );
}

export default YoutubeForm;