import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Pation = ({ pationInfo }) => {
    return (
        <div className="p-2 mb-2 d-flex flex-row-reverse justify-content-between align-items-stretch"
            style={{
                backgroundColor: 'rgba(0,0,0,0.02)',
                borderBottom: '1px solid rgba(47,150,100,1)',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 1px 1px rgba(0,0,0,0.1)'
            }}>
            <div>
                <img
                    src={"./images/profiles/" + pationInfo.id + ".jpeg"}
                    alt="UP"
                    style={{
                        width: '50px',
                        aspectRatio: '1/1',
                        borderRadius: '15%',
                        marginRight: '10px',
                        border: '1px solid rgba(0, 104, 56,0.3)',
                    }}
                />

            </div>

            <div className="ms-auto me-3 d-flex align-items-end" style={{ fontSize: '1rem' }}>
                {pationInfo.name}
            </div>

            <div
                className='d-flex align-items-center'
                style={{ fontSize: '1rem' }}>
                <FontAwesomeIcon
                    icon={["fas", "close"]}
                    style={{ aspectRatio: '1/1', padding: '5px', cursor: 'pointer' }}
                    className='border rounded-2 ms-2 text-success'
                />
                <FontAwesomeIcon
                    icon={["fas", "info"]}
                    style={{ aspectRatio: '1/1', padding: '5px', cursor: 'pointer' }}
                    className='border rounded-2 ms-2 text-success'
                />


            </div>
        </div>
    )
}
export default Pation