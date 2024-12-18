

// eslint-disable-next-line react/prop-types
const TaskNumber = ({data= {}}) => {
      
  return (
    <div className=' mt-10 flex  justify-between gap-5  screen'>
        <div className='w-[45%] bg-red-400 p-7  px-5 py-5 rounded-xl'>
<h2 className="  text-2xl font-semibold">{data.taskNumbers.new}</h2>
<h3 className="  text-xl font-medium"> new Task </h3>
        </div>
        <div className='w-[45%] bg-blue-400 p-7  px-5 py-5 rounded-xl'>
<h2 className="  text-2xl font-semibold"> {data.taskNumbers.active}</h2>
<h3 className="  text-xl font-medium">Active </h3>
        </div>
        <div className='w-[45%] bg-green-400 p-7  px-5 py-5 rounded-xl'>
<h2 className="  text-2xl font-semibold"> {data.taskNumbers.complete}</h2>
<h3 className="  text-xl font-medium">Accepted Task </h3>
        </div>
        <div className='w-[45%] bg-yellow-400 p-7  px-5 py-5 rounded-xl'>
<h2 className="  text-2xl font-semibold"> {data.taskNumbers.failed}</h2>
<h3 className="  text-xl font-medium"> Failed </h3>
        </div>
    </div>
  )
}

export default TaskNumber