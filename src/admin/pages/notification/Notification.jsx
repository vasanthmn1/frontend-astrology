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
            setNotifaction(admin.data.user.notifaction
            )
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
    // console.log(notifaction)
    // console.log(notifaction.notifaction.data.onclickPath);

    let [categories] = useState({
        Read: [
            {
                id: 1,
                title: 'Does drinking coffee make you smarter?',
                noti: notifaction,
                commentCount: 5,
                shareCount: 2,
            },

        ],
        Popular: [
            {
                id: 1,
                title: 'Is tech making coffee better or worse?',
                date: 'Jan 7',
                commentCount: 29,
                shareCount: 16,
            },
            {
                id: 2,
                title: 'The most innovative things happening in coffee',
                date: 'Mar 19',
                commentCount: 24,
                shareCount: 12,
            },
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
                                {posts.map((post) => (
                                    <div>
                                        <li
                                            key={post.id}
                                            className="relative rounded-md p-3 hover:bg-gray-100"
                                        >
                                            <h3 className="text-sm font-medium leading-5">
                                                {post.title}
                                            </h3>

                                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                                                <li>{post.date}</li>
                                                <li>&middot;</li>
                                                <li>{post.commentCount} comments</li>
                                                <li>&middot;</li>
                                                <li>{post.shareCount} shares</li>
                                            </ul>

                                            <a
                                                href="#"
                                                className={classNames(
                                                    'absolute inset-0 rounded-md',
                                                    'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                                                )}
                                            />
                                        </li>
                                        <div>
                                            {/* {post.noti} */}
                                        </div>
                                        {
                                            // console.log(post.noti)
                                            post.noti && post.noti.map((val) => {
                                                return (
                                                    console.log(val.type)
                                                )
                                            })

                                        }
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
