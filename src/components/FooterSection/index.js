import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FooterSection = ({ handlePageChange }) => {
    return (
        <div>
            <div className='appFooter d-flex flex-row-reverse px-1 py-1 text-white'>
                <div>
                    <FontAwesomeIcon
                        icon="fa-solid fa-home"
                        onClick={() => { handlePageChange('home') }}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon="fa-solid fa-user"
                        onClick={() => { handlePageChange('profile') }}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon="fa-solid fa-comment-medical"
                        onClick={() => { handlePageChange('chat') }}
                    />
                </div>
                <div>
                    <FontAwesomeIcon
                        icon="fa-solid fa-users"
                        onClick={() => { handlePageChange('patientsList') }}
                    />
                </div>
            </div>
        </div>
    )
}

export default FooterSection