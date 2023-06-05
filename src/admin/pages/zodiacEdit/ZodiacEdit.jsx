import React, { useState } from 'react'
import classes from './zodiacEdit.module.css'

import { Col, Container, Row } from 'react-bootstrap'
import { BiImageAdd, BiShapePolygon } from 'react-icons/bi'
import { useFormik } from 'formik'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import ZodiacPosts from '../../components/zodiacposts/ZodiacPosts'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { isLoading, stopLoading } from '../../../redux/features/ZodiacSlice'
const ZodiacEdit = () => {

    const { link } = useSelector((state) => state.link)
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const params = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        Getuser()
    }, [])

    const Getuser = async () => {
        try {
            // dispatch(isLoading())
            let get = await axios.get(`${link}/zodiac/get/${params.id}`)
            dispatch(stopLoading())
            myFormik.setValues(get.data)
            console.log(get.data);
        } catch (error) {
            console.log(error);
        }

    }

    let myFormik = useFormik({
        initialValues: {
            _id: "",
            poto: "",
            title: "",
            desc: "",
            date: "",
            file: null,
        },
        validate: (values) => {
            let err = {}
            if (!values.title) {
                err.title = "Enter Title in Your blog "
            }
            // if (values.title.length < 5) {
            //     err.title = "minumam 5 letters "
            // }

            // if (!values.desc) {
            //     err.desc = "Fill the description "
            // }
            // if (values.desc.length < 25) {
            //     err.desc = "minumam 25 letters "
            // }
            if (!values.file) {
                err.file = "Upload one image in Your Blog"
            }

            return err

        },

        onSubmit: async (values) => {
            // setErr(false)
            // dispatch(isLoading())
            const file = myFormik.values.file
            if (file) {

                const data = new FormData();
                const filename = Date.now() + file.name;
                data.append("name", filename);
                data.append("file", file);
                myFormik.values.poto = filename;

                try {

                    await axios.post(`${link}/upload`, data);
                } catch (err) { }
            }
            try {
                dispatch(isLoading())
                const res = await axios.put(`${link}/zodiac/edit/${myFormik.values._id}`, values);
                console.log(res)
                dispatch(stopLoading())

                navigate('/zodiaclist')

            } catch (err) { console.log(err) }

        }
    })
    // const [posts, SetPosts] = useState([])
    // useEffect(() => {
    //     getposts()
    // }, [])
    // const getposts = async () => {
    //     const res = await axios.get(`${link}/zodiac/get`);

    // }

    return (
        <div className={classes.Container}>
            <Row>
                <Col lg='6'>
                    <div className={classes.imagebox}>
                        {myFormik.values.file ? (
                            <>

                                <img className={""} src={URL.createObjectURL(myFormik.values.file)} alt="" />
                            </>
                        ) : <img src={`${link}/images/${myFormik.values.poto}`} />}
                    </div>
                    <form onSubmit={myFormik.handleSubmit}>
                        <div className={classes.imageinput}>
                            <label htmlFor='fileInput'>'
                                <BiImageAdd className={classes.addimgIcon} />
                                <span> Choose File</span>
                            </label>
                            {/* {console.log(myFormik.values.poto)} */}

                            <input
                                style={{ display: 'none' }}
                                name='file'
                                type="file"
                                id="fileInput"
                                accept='image/*'

                                onChange={(e) =>
                                    myFormik.setFieldValue('file', e.currentTarget.files[0])}
                                autoFocus={true}
                            />
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
                    💚💚
                </Col>
            </Row>
        </div>
    )
}

export default ZodiacEdit

