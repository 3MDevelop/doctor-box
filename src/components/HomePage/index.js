
import HomeCarousel from './homeCarousel'
import NewsBox from './newsBox'

const HomePage = () => {
    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <div className='mb-1' style={{ width: '97%' }}>
                <HomeCarousel />
            </div>
            <div className='w-100 '>
                <NewsBox />
            </div>
            <div>News Box</div>
        </div>
    )
}

export default HomePage