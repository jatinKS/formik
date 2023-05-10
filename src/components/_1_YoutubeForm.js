import { useFormik } from "formik";


const YoutubeForm = () => {
    const initialValues = {
        name: '',
        email: '',
        channel: ''
    };

    const onSubmit = values => {
        console.log("Form Submited Date: ", values);
    };

    const validate = values => {
        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }
        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
            errors.email = "Invalid email format"
        }

        if (!values.channel) {
            errors.channel = 'Required'
        }
        return errors;
    };

    const formik = useFormik({
        initialValues,
        onSubmit,
        validate
    });

    console.log('FOrm errors: ', formik.errors)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.name && formik.touched.name ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" name="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {formik.errors.email && formik.touched.email ? (
                        <div className="error">{formik.errors.email}</div>
                    ) : null}
                </div>
                <div className="form-control">
                    <label htmlFor="channel">Channel</label>
                    <input type="text" id="channel" name="channel"
                        onChange={formik.handleChange}
                        value={formik.values.channel}
                        onBlur={formik.handleBlur} 
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