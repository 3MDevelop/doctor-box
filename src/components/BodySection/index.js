import FooterSection from '../FooterSection'

const BodySection=()=>{
    return(
        <div className='appBody flex-fill d-flex flex-column justify-content-end align-items-center '>
          <div className='p-2 flex-fill w-100'>
            Welcome to Doctor Box
          </div>
         <FooterSection />
        </div>
    )
}

export default BodySection