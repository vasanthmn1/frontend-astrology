import React, { useState } from 'react'
import classes from './zodiac.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import { BiImageAdd, BiShapePolygon } from 'react-icons/bi'
import { useFormik } from 'formik'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ZodiacPosts from '../../components/zodiacposts/ZodiacPosts'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const Zodiac = () => {

    const { link } = useSelector((state) => state.link)
    const { user } = useSelector((state) => state.auth)

    const navigate = useNavigate()

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
            if (values.title.length > 15) {
                err.title = "maximum 15 leater "
            }
            if (!values.desc) {
                err.desc = "Enter Description "
            }
            if (!values.date) {
                err.date = "Enter Date "
            }
            if (!values.file) {
                err.file = "Upload one image "
            }

            return err

        },

        onSubmit: async (values) => {

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

                const res = await axios.post(`${link}/zodiac/create`, values);
                navigate('/zodiaclist')

            } catch (err) { }

        }
    })
    // const [posts, SetPosts] = useState([])


    return (
        <div className={classes.Container}>
            <Row>
                <Col lg='6'>
                    <div className={classes.imagebox}>
                        {myFormik.values.file && (
                            <img className={""} src={URL.createObjectURL(myFormik.values.file)} alt="" />
                        )}
                    </div>
                    <form onSubmit={myFormik.handleSubmit}>
                        <div className={classes.imageinput} style={{ display: "block" }}>
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
                            <div className={classes.Spanerr}>    {myFormik.errors.file && myFormik.touched.file ? myFormik.errors.file : null} </div>


                        </div>
                        <div className={classes.input}>
                            <label>Title</label>
                            <input
                                onChange={myFormik.handleChange}
                                onBlur={myFormik.handleBlur}

                                type='text'
                                name='title'
                                value={myFormik.values.title}
                                className={
                                    myFormik.errors.title && myFormik.touched.title ? classes.warinng : classes.success}
                                placeholder="Title"
                            />
                            <span className={classes.Spanerr}>  {myFormik.errors.title && myFormik.touched.title ? myFormik.errors.title : null} </span>
                        </div>
                        <div className={classes.input}>
                            <label>Description</label>
                            <textarea
                                name='desc'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                className={
                                    myFormik.errors.desc && myFormik.touched.desc ? classes.descwarinng : classes.descsuccess}
                                type='text' />
                            <span className={classes.Spanerr}>  {myFormik.errors.desc && myFormik.touched.desc ? myFormik.errors.desc : null} </span>

                        </div>
                        <div className={classes.input}>
                            <input
                                type='date'
                                onBlur={myFormik.handleBlur}
                                onChange={myFormik.handleChange}
                                value={myFormik.values.date}
                                className={
                                    myFormik.errors.date && myFormik.touched.date ? classes.warinng : classes.success}
                                name='date'
                            />
                            <span className={classes.Spanerr}>  {myFormik.errors.date && myFormik.touched.date ? myFormik.errors.date : null} </span>

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

