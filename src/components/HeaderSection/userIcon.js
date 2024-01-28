
const UserIcon = ({ userAuth, userData }) => {
    return (
        <div>
            {(userAuth) ? (
                <div className="d-flex flex-row-reverse align-items-end">
                    <img
                        src={"./images/profiles/" + userData.uID + ".jpeg"}

                        alt="UP"
                        style={{
                            width: '42px',
                            aspectRatio: '1/1',
                            borderRadius: '50%',
                            marginRight: '10px',
                            border: '1px solid rgba(0, 104, 56,0.3)',
                            boxShadow: '0 0 3px 1px rgba(0, 104, 56,0.2)'
                        }}
                    />
                    <div className="mb-2 me-2" style={{
                        fontSize: '0.9rem',
                        fontWeight: 'Bolder',
                        color: 'rgb(0, 104, 56)'
                    }}>
                        {userData.fName} {userData.lName}
                    </div>
                </div>
            ) : null
            }

        </div>
    )
}

export default UserIcon