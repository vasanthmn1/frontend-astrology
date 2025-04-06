
import { Link } from 'react-router-dom'
import { localStorageAction } from '../../../action/localStorage/localStorageAction'
const AdminHeaderBar = () => {

    let user = localStorageAction.getAuthUser().user

    return (
        <div>
            <nav className={'ad-navbar'}>
                <Link className="navbar-brand" to="/">

                    Logo
                </Link>
                <div className={'user-profile'}>

                    <div className={'notification'} onClick={() => {


                    }}>
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="" id="dropdown-basic" >
                                <AiOutlineBell className={classes.logout} onClick={() => handelRead()} />
                                <span className={classes.badge}

                                >
                                    {notifaction.notifaction?.length}
                                </span>
                            </Dropdown.Toggle>
                         

                        </Dropdown> */}

                    </div>
                    <div>

                        <span>{user.email}</span>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default AdminHeaderBar
