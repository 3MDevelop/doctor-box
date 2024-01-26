import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FooterSection = () => {
    const pagehandler = () => {
        console.info('page changed')
    }
    return (
        <div>
            <div className='appFooter d-flex flex-row-reverse px-1 py-1 text-white'>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-home" onClick={() => { pagehandler() }} />
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-user" onClick={() => { pagehandler() }} />
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-comment-medical" onClick={() => { pagehandler() }} />
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-users" onClick={() => { pagehandler() }} />
                </div>
            </div>
        </div>
    )
}

export default FooterSection