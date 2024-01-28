const NewsBox = () => {
    return (
        <div className=" d-flex px-2">
            <div className="p-1" style={{ flex: '0 0 70%' }}>
                <div className="border border-info border-2 rounded-3 d-flex justify-content-center align-items-center h-100">
                    1
                </div>
            </div>
            <div style={{ flex: '0 0 30%', display: 'flex', flexDirection: 'column' }}>
                <div className=" p-1" style={{ flex: '1', aspectRatio: '16/9' }}>
                    <div className="border border-info border-2 rounded-3 d-flex justify-content-center align-items-center h-100">
                        2
                    </div>
                </div>
                <div className="p-1" style={{ flex: '1', aspectRatio: '19/9' }}>
                    <div className="border border-info border-2 rounded-3 d-flex justify-content-center align-items-center h-100">
                        3
                    </div>
                </div>
                <div className="p-1" style={{ flex: '1', aspectRatio: '19/9' }}>
                    <div className="border border-info border-2 rounded-3 d-flex justify-content-center align-items-center h-100">
                        4
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsBox;
