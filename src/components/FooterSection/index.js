import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'

const FooterSection = ({ handlePageChange, userAuth, activePage }) => {

    useEffect(() => {
        console.info(activePage)
    }, [activePage]);

    return (
        <div>
            <div className='appFooter d-flex flex-row-reverse px-1 py-1 text-white'>
                <div >
                    <FontAwesomeIcon
                        icon="fa-solid fa-home"
                        style={{ cursor: 'pointer' }}
                        className={activePage === 'home' ? 'py-1 activeIcon' : 'py-1'}
                        onClick={() => { handlePageChange('home') }}
                    />
                </div>
                <div >
                    <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        style={{ cursor: 'pointer' }}
                        className={activePage === 'profile' ? 'py-1 activeIcon' : 'py-1'}
                        onClick={() => { handlePageChange('profile') }}
                    />
                </div>
                {
                    (userAuth) &&
                    <div >
                        <FontAwesomeIcon
                            icon="fa-solid fa-users"
                            style={{ cursor: 'pointer' }}
                            className={activePage === 'patientsList' ? 'py-1 activeIcon' : 'py-1'}
                            onClick={() => { handlePageChange('patientsList') }}
                        />
                    </div>
                }
            </div>
        </div>
    )
}

export default FooterSection
