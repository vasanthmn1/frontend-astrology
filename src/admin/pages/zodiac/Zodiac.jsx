import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BiImageAdd } from 'react-icons/bi';
import { useFormik } from 'formik';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './zodiac.module.css'

import { toast } from 'react-toastify';

const Zodiac = () => {
    const { link } = useSelector((state) => state.link);
    const navigate = useNavigate();
    useEffect(() => {
        console.log(formik.values.poto);
    }, [])
    const formik = useFormik({
        initialValues: {
            title: '',
            desc: '',
            date: '',
            poto: null
        },
        validate: (values) => {
            const errors = {};

            if (!values.title) {
                errors.title = 'Enter Title in Your blog';
            }

            if (values.title.length > 15) {
                errors.title = 'Maximum 15 letters';
            }

            if (!values.desc) {
                errors.desc = 'Enter Description';
            }

            if (!values.date) {
                errors.date = 'Enter Date';
            }

            if (!values.poto) {
                errors.poto = 'Upload one image';
            }

            return errors;
        },

        onSubmit: async (values) => {
            try {



                const res = await axios.post(`${link}/zodiac/create`,
                    {
                        title: values.title,
                        poto: {
                            public_id: values.poto.name,
                            url: values.poto
                        },
                        desc: values.desc,
                        date: values.date
                    }

                );
                navigate('/zodiaclist')
                console.log(res);
            } catch (error) {
                if (error.response) {
                    console.log('Server Error:', error.response.data);
                } else {
                    console.log('Request Error:', error.message);
                }
                toast.error('Server Error:', error.response.data)
            }
        },
    });

    console.log(formik.values.poto);
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
        console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            formik.setFieldValue("poto", reader.result)
        }

    }


    return (
        <div className={classes.Container}>
            <Row>
                <Col lg="6">
                    <div className={classes.imagebox}>
                        {formik.values.poto ? (
                            <img
                                className=""

                                src={formik.values.poto}
                                alt={formik.values.title}
                            />
                        ) : <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjl3C3TaTxwJToSwA6E4EGA1rlotxVf7XAmFIKNugGpQ&s' />}
                    </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={classes.imageinput} style={{ display: 'block' }}>
                            <label htmlFor="fileInput">
                                <BiImageAdd className={classes.addimgIcon} />
                                <span> Choose File</span>
                            </label>
                            <input
                                id='fileInput'
                                style={{ display: 'none' }}
                                name="poto"
                                type="file"
                                accept="image/*"
                                // onChange={(e) =>
                                //     formik.setFieldValue('poto', e.currentTarget.files[0])}
                                onChange={handleImage}
                            />
                            <div className={classes.Spanerr}>
                                {formik.errors.poto && formik.touched.poto && formik.errors.poto}
                            </div>
                        </div>
                        <div className={classes.input}>
                            <label>Title</label>
                            <input
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                name="title"
                                value={formik.values.title}
                                className={
                                    formik.errors.title && formik.touched.title ? classes.warinng : classes.success
                                }
                                placeholder="Title"
                            />
                            <span className={classes.Spanerr}>
                                {formik.errors.title && formik.touched.title && formik.errors.title}
                            </span>
                        </div>
                        <div className={classes.input}>
                            <label>Description</label>
                            <textarea
                                name="desc"
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                className={
                                    formik.errors.desc && formik.touched.desc ? classes.descwarinng : classes.descsuccess
                                }
                                type="text"
                            />
                            <span className={classes.Spanerr}>
                                {formik.errors.desc && formik.touched.desc && formik.errors.desc}
                            </span>
                        </div>
                        <div className={classes.input}>
                            <input
                                type="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                className={
                                    formik.errors.date && formik.touched.date ? classes.warinng : classes.success
                                }
                            />
                            <span className={classes.Spanerr}>
                                {formik.errors.date && formik.touched.date && formik.errors.date}
                            </span>
                        </div>
                        <button type="submit" className={classes.sumitbtn}>
                            Submit
                        </button>
                    </form>
                </Col>
                <Col lg="6"></Col>
            </Row>
        </div>
    );
};

export default Zodiac;

