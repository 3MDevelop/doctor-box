import Pation from "../Pation"

const PationsList = () => {

  const pationList = Array.from({ length: 30 }, (_, index) => index);


  const pationInfo = {
    name: 'نام بیمار',
    id: 12341234
  }
  return (
    <div
      className="h-100 p-3 "
      style={{ overflowY: 'auto', maxHeight: 'calc(100vh - 150px)' }}
    >
      {pationList.map((index) => (
      <Pation key={index} pationInfo={pationInfo} />
    ))}
    </div>
  )
}
export default PationsList