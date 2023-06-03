import React, { useState } from 'react'
import classes from './zodiac.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { BiImageAdd, BiShapePolygon } from 'react-icons/bi'
import { useFormik } from 'formik'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ZodiacPosts from '../../components/zodiacposts/ZodiacPosts'
import { useEffect } from 'react'
const Zodiac = () => {

    const { link } = useSelector((state) => state.link)
    const { user } = useSelector((state) => state.auth)



    let myFormik = useFormik({
        initialValues: {

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
                // setisLoding(true)
                const res = await axios.post(`${link}/zodiac/create`, values);
                console.log(res)
                // window.location.replace("/post/" + res.data._id);
            } catch (err) { }

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
                        {myFormik.values.file && (
                            <img className={""} src={URL.createObjectURL(myFormik.values.file)} alt="" />
                        )}
                        {/* <img src='https://img.freepik.com/free-vector/gradient-zodiac-sign-collection_23-2148988174.jpg?size=626&ext=jpg' /> */}
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

export default Zodiac

