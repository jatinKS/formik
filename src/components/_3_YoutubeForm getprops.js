import { useFormik } from "formik";
import * as Yup from "yup";


const YoutubeForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    };

    const onSubmit = values => {
        console.log("Form Submited Date: ", values);
    };

    const validationSchema = Yup.object({
        name: Yup.string().required("Required"),
        email: Yup.string().email('Invalid email format').required("Required"),
        channel: Yup.string().required("Required")
    })


    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    });

    console.log('FOrm errors: ', formik.errors)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        {...formik.getFieldProps('name')}
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email"
                        {...formik.getFieldProps('email')}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel"
                        {...formik.getFieldProps('channel')}
                    />
                    {formik.errors.channel && formik.touched.channel ? (
                        <div className="error">{formik.errors.channel}</div>
                    ) : null}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default YoutubeForm;