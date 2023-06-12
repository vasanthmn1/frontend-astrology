import React, { useState } from 'react'
import classes from './zodiacEdit.module.css'
import { Col, Row } from 'react-bootstrap'
import { BiImageAdd } from 'react-icons/bi'
import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
import { ToastContainer, toast } from 'react-toastify'
const ZodiacEdit = () => {

    const { link } = useSelector((state) => state.link)

    const navigate = useNavigate()
    const [getsingle, setgetsingle] = useState({})
    const params = useParams()
    const dispatch = useDispatch()
    console.log(getsingle.poto?.url);
    useEffect(() => {
        Getuser()
    }, [])

    const Getuser = async () => {





        try {
            dispatch(isLoading())
            let get = await axios.get(`${link}/zodiac/get/${params.id}`)
            setgetsingle(get.data)
            dispatch(stopLoading())
            myFormik.setValues(get.data)
            console.log(get.data);
        } catch (error) {

        }

    }

    let myFormik = useFormik({
        initialValues: {

            poto: "",
            title: "",
            desc: "",
            date: "",
        },
        validate: (values) => {
            let errors = {}

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


            return errors

        },

        onSubmit: async (values) => {
            try {
                dispatch(isLoading())
                const response = await axios.put(`${link}/zodiac/editimg/${params.id}`, {
                    poto: values.poto
                })
            } catch (error) {
                dispatch(stopLoading())
                toast.error(err.message)
            }

            try {
                dispatch(isLoading())
                const response = await axios.put(`${link}/zodiac/edit/${params.id}`, {
                    title: values.title,
                    desc: values.desc,
                    date: values.date,

                    poto: values.poto
                });
                dispatch(stopLoading())
                navigate('/zodiaclist')
            } catch (err) {
                console.log(values.poto.url)
                toast.error(err.message)
                dispatch(stopLoading())
                console.log(err)
            }



        }
    })
    const handleImage = (e) => {
        const file = e.target.files[0];
        setFileToBase(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            myFormik.setFieldValue("poto", reader.result)
        }
    }

    return (
        <div className={classes.Container}>
            <ToastContainer />
            <Row>
                <Col lg='6'>
                    <div className={classes.imagebox}>
                        {myFormik.values.poto.url ? (
                            <>

                                <img className={""} src={myFormik.values.poto.url} alt="" />
                            </>
                        ) : <img src={myFormik.values.poto} />}
                    </div>
                    <form onSubmit={myFormik.handleSubmit}>
                        <div className={classes.imageinput}>
                            <label htmlFor='fileInput'>'
                                <BiImageAdd className={classes.addimgIcon} />
                                <span> Choose File</span>
                            </label>


                            <input
                                style={{ display: 'none' }}
                                name='file'
                                type="file"
                                id="fileInput"
                                accept='image/*'
                                onChange={handleImage}
                                // value={getsingle.poto?.url}
                                // onChange={(e) =>
                                //     myFormik.setFieldValue('file', e.currentTarget.files[0])}
                                autoFocus={true}
                            />
                            <div className={classes.Spanerr}>
                                {myFormik.errors.poto && myFormik.touched.poto && myFormik.errors.poto}
                            </div>
                        </div>
                        <div className={classes.input}>
                            <label>Title</label>
                            <input
                                onChange={myFormik.handleChange}
                                onBlur={myFormik.handleBlur}
                                className={
                                    myFormik.errors.title && myFormik.touched.title ? classes.warinng : classes.success}
                                type='text'
                                name='title'
                                value={myFormik.values.title}

                                placeholder="Title"
                            />
                            <div className={classes.Spanerr}>
                                {myFormik.errors.title && myFormik.touched.title ? myFormik.errors.title : null} </div>

                        </div>
                        <div className={classes.input}>
                            <label>Description</label>
                            <textarea
                                name='desc'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.desc}
                                className={
                                    myFormik.errors.desc && myFormik.touched.desc ? classes.descwarinng : classes.descsuccess}
                                type='text' />
                            <div className={classes.Spanerr}>
                                {myFormik.errors.desc && myFormik.touched.desc && myFormik.errors.desc}
                            </div>
                        </div>

                        <div className={classes.input}>
                            <input
                                type='date'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.date}
                                name='date'
                                className={
                                    myFormik.errors.date && myFormik.touched.date ? classes.warinng : classes.success}

                            />
                        </div>
                        <div className={classes.Spanerr}>
                            {myFormik.errors.date && myFormik.touched.date && myFormik.errors.date}
                        </div>
                        <button type='submit' className={classes.sumitbtn}>Sumit</button>
                    </form>
                </Col >
                <Col lg='6'>

                </Col>
            </Row>
        </div>
    )
}

export default ZodiacEdit

