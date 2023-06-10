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
            let err = {}
            if (!values.title) {
                err.title = "Enter Title in Your blog "
            }


            return err

        },

        onSubmit: async (values) => {

            // setFileToBase
            try {
                dispatch(isLoading())
                const response = await axios.put(`${link}/zodiac/edit/${params.id}`, {
                    title: values.title,
                    desc: values.desc,
                    date: values.date,

                    poto: values.poto
                });
                console.log(response.data)


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
        // console.log(file);
    }

    const setFileToBase = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            myFormik.setFieldValue("poto", reader.result)
            console.log(reader.result);

        }
        // console.log(reader);

        console.log(reader.result);

    }
    // myFormik.setFieldValue("poto", getsingle.poto)
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
                            <div className={classes.Spanerr}>    {myFormik.errors.file && myFormik.touched.file ? myFormik.errors.file : null} </div>
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
                            <div className={classes.Spanerr}>    {myFormik.errors.title && myFormik.touched.title ? myFormik.errors.title : null} </div>

                        </div>
                        <div className={classes.input}>
                            <label>Description</label>
                            <textarea
                                name='desc'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.desc}
                                type='text' />
                        </div>
                        <div className={classes.input}>
                            <input
                                type='date'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.date}


                                // onBlur={myFormik.handleBlur}
                                // onChange={myFormik.handleChange}
                                // value={myFormik.values.date}

                                name='date'
                            // className={
                            //     myFormik.errors.date && myFormik.touched.date ? classes.warinng : classes.success}

                            />
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

