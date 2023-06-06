import React, { useCallback, useEffect, useState } from 'react';
import { Tab } from '@headlessui/react';
import classes from './notification.module.css';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { isLoading, stopLoading } from '../../../redux/features/AuthSclice';

function classNames(...classe) {
    return classe.filter(Boolean).join(' ');
}

const Notification = () => {
    const { user } = useSelector((state) => state.auth);
    const { link } = useSelector((state) => state.link);
    const dispatch = useDispatch()
    const [notifaction, setNotifaction] = useState([]);
    const [seenotifaction, setseeNotifaction] = useState([]);

    const [categories, setCategories] = useState({});


    const handelRead = async () => {
        // dispatch(isLoading())
        try {
            const notifi = await axios.post(`${link}/user/readnoti`, {
                userId: user._id,
            });
            console.log("not", notifi);
            setNotifaction([])

            // dispatch(stopLoading())
        } catch (error) { }
    };

    const handelAllReadRead = async () => {
        try {
            const dellAllnotifi = await axios.post(`${link}/user/deleteallnoti`, {
                userId: user._id,
            });
            setseeNotifaction([])
            console.log(dellAllnotifi);
        } catch (error) { console.log(error); }
    };

    useEffect(() => {
        dispatch(isLoading())
        const getadmin = async () => {

            try {
                const admin = await axios.get(`${link}/auth/getadmin`);
                const notifi = admin.data.user;
                setNotifaction(notifi?.notifaction || []);
                setseeNotifaction(notifi?.seenotnotifaction)
                dispatch(stopLoading())
            } catch (error) {
                console.error(error);
            }
        };

        getadmin();
    }, []);
    console.log(seenotifaction);


    useEffect(() => {
        setCategories({
            UnRead: [
                {
                    id: 's',
                    notifaction: notifaction,
                },
            ],
            Read: [
                {
                    notifaction: seenotifaction,
                    delnoti: "Delete All Notification"
                },
            ],
        });
    }, [seenotifaction, notifaction])



    // const handelRead = async () => {
    //     try {
    //         const notifi = await axios.post(`${link}/user/readnoti`, {
    //             userId: user._id,
    //         });
    //     } catch (error) { }
    // };




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
                                    selected ? classes.activebtn : classes.btn
                                )
                            }
                        >
                            {category}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className={classes.warper}>
                    {Object.values(categories).map((posts, idx) => (
                        <Tab.Panel key={idx} className={classes.active}>
                            <ul>
                                {posts.map((post) => (
                                    <div>
                                        {post.notifaction &&
                                            post.notifaction.map((val, index) => (
                                                <div key={index}>
                                                    <li>{val.data.name}</li>


                                                </div>
                                            ))}
                                        {post.delnoti ?
                                            <button
                                                onClick={(event) => handelAllReadRead(event)}
                                            >{post.delnoti}</button> :
                                            <button
                                                onClick={() => handelRead()}
                                            >Mark All Read</button>
                                        }
                                    </div>
                                ))}
                            </ul>
                        </Tab.Panel>
                    ))}
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
};

export default Notification;
