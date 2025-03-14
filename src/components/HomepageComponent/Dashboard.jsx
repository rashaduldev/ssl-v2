import whoweare from '../../assets/image/fontImage/who_we_are.jpeg'
import whatwedo from '../../assets/image/fontImage/whatwedo.jpeg'
import dashboard3rdimg from '../../assets/image/fontImage/dashboard3rdimg.jpeg'

// eslint-disable-next-line react/prop-types
const ProgressBar = ({ label, percentage, color }) => {
    return (
        <div className="items-center mb-4">
            <span className="w-32 text-gray-700 text-xl font-semibold pl-2">{label}</span>
            <div className="flex items-center w-full bg-gray-200 rounded-full h-4 mx-2 mt-2">
                <div
                    style={{ width: `${percentage}%` }}
                    className={`h-4 rounded-full ${color}`}
                ></div>
                <span className="text-gray-700 text-sm font-semibold">{percentage}%</span>
            </div>
        </div>
    );
};

const Dashboard = () => {
    const progressData = [
        { label: 'Textile', percentage: 30, color: 'bg-[#0F2DED]' },
        { label: 'Handicraft', percentage: 15, color: 'bg-blue-500' },
        { label: 'Footwear', percentage: 18, color: 'bg-green-500' },
        { label: 'Household', percentage: 12, color: 'bg-yellow-500' },
        { label: 'Home textile', percentage: 15, color: 'bg-gray-500' },
        { label: 'Home furniture', percentage: 4, color: 'bg-indigo-500' },
        { label: 'Gloves', percentage: 6, color: 'bg-teal-500' },
    ];

    return (
        <div className="flex flex-col md:flex-row bg-gray-100 space-y-6 md:space-y-0 md:space-x-0">
            {/* 1st Div: Information Section */}
            <div className="flex-1 space-y-6">
              <div className='grid grid-cols-2'>
                      {/* card-1 */}
                <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src={whoweare}
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* card-2 */}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[18px]'>Your trusted partner</h1>
                    </div>
                    {/*  3*/}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[12px] md:text-[18px]'>We do Textile, Handicraft, Footwear, Household, Home textile, Home furniture, Gloves, Crockery, Coconut shell, kitchen item, Bag & Backpack, High tech sports, Toy etc.  </h1>
                    </div>
                    {/* 4 */}
                    <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src={whatwedo}
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* 5 */}
                    <div className="">
                    <figure>
                        <img
                        className='w-full h-56'
                        src={dashboard3rdimg}
                        alt="Shoes" />
                    </figure>
                    </div>
                    {/* 6 */}
                    <div className=" bg-gray-300 flex justify-center items-center">
                   <h1 className='p-4 text-[12px] md:text-[18px]'>The phrase sustainable industries is related to the development of industrial processes in a sustainable way. The phrase refers to greening of energy intensive industries such as the textiles, steel, cement, and paper industries.</h1>
                    </div>
              </div>
            </div>

            {/* 2nd Div: Progress Bar Section */}
          <div className='h-full flex-1 w-full'>
          <div className=" py-7 space-y-[37.4px] px-10 h-full bg-[#7E92BC] text-2xl">
                {progressData.map((data, index) => (
                    <ProgressBar
                        key={index}
                        label={data.label}
                        percentage={data.percentage}
                        color={data.color}
                    />
                ))}
            </div>
          </div>
        </div>
    );
};

export default Dashboard;
