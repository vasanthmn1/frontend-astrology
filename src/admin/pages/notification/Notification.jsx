import React, { useEffect, useState } from 'react'
// import { useState } from 'react'
import { Tab } from '@headlessui/react'
import classes from './notification.module.css'
import axios from 'axios'
import { useSelector } from 'react-redux'

function classNames(...classe) {
    return classe.filter(Boolean).join(' ')
}


const Notification = () => {

    const { user } = useSelector((state) => state.auth)
    const { link } = useSelector((state) => state.link)
    const [notifaction, setNotifaction] = useState([])
    useEffect(() => {
        const getadmin = async () => {
            const admin = await axios.get(`${link}/auth/getadmin`)
            setNotifaction(...admin.data.user?.notifaction)
        }
        getadmin()
    }, [])


    const handelRead = async () => {
        try {
            const notifi = await axios.post(`${link}/user/readnoti`, {
                userId: user._id
            })
        } catch (error) {

        }
    }
    // console.log("Ss", notifaction)
    // console.log(notifaction.notifaction.data.onclickPath);

    let [categories] = useState({
        Read: [
            {
                id: "s",
                notifaction: notifaction,
                // a: console.log(notifaction)
            },

        ],
        UnRead: [
            {
                id: "sas"
            }
        ],


    })




    return (
        <div className="w-full max-w-md px-2 py-16 sm:px-0">
            <Tab.Group>
                <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                    {Object.keys(categories).map((category) => (
                        <Tab
                            key={category}
                            className={({ selected }) =>
                                classNames(
                                    classes.btns,
                                    selected
                                        ? classes.activebtn
                                        : classes.btn
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className={classes.warper}>
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel
                            key={idx}
                            className={
                                classes.active
                            }
                        >
                            <ul>
                                {posts && posts.map((post) => (
                                    <div>
                                        {/* {post.notifactions?.map((val, idx) => {
                                            return (
                                                <ul>
                                                    <li>{val.data.name}</li>
                                                    {console.log("sss", val)}
                                                </ul>
                                            )
                                        })} */}
                                        <div>
                                            {/* {post.noti} */}sas
                                        </div>
                                        <li>{post.id}</li>
                                        <li>{post.notifaction}</li>

                                        <li>{console.log(post)}</li>

                                        <li>{console.log("S", post.notifaction && post.notifaction)}</li>

                                    </div>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    )
}

export default Notification
