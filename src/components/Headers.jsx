import { find, notification, avt } from "../assets/icons"

export default function () {
    const today = new Date()
    // lấy ngày tháng năm hiện tại
    const weekday = today.getDay()
    const day = today.getDate()
    const month = today.getMonth() + 1
    const year = today.getFullYear()

    const handleWeekday = (weekdays) => {
        switch (weekdays) {
            case 0:
                return "Chủ nhật"
            case 1:
                return "Thứ hai"
            case 2:
                return "Thứ ba"
            case 3:
                return "Thứ tư"
            case 4:
                return "Thứ năm"
            case 5:
                return "Thứ sáu"
            case 6:
                return "Thứ bảy"
            default:
                return "error"
        }
    }

    return (
        <div className="sticky top-0 z-10 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)] pb-8 border-b border-gray-200 flex justify-between px-[40px] mt-[24px] gap-[24px]">
            <div>
                <h1 className="font-bold text-2xl text-black">Hôm nay</h1>
                <p className="mt-1 font-normal text-sm text-gray-600">
                    {handleWeekday(weekday)}, {day} Tháng {month}, {year}
                </p>
            </div>
            <div className="flex gap-[24px]">
                <div className="relative flex items-center">
                    <label
                        htmlFor="find"
                        className="absolute left-2 flex justify-center"
                    >
                        <img src={find} width={20} height={20} />
                    </label>
                    <input
                        type="text"
                        id="find"
                        placeholder="Tìm kiếm công việc..."
                        className="form-input rounded-full pl-8 pr-3 py-4 w-[256px] h-[36px] 
                        bg-gray-100     
                        text-gray-700    
                        placeholder-gray-400 
                        border border-gray-300 
                        focus:outline-none 
                        focus:ring-2 
                        focus:ring-blue-500 
                        focus:border-blue-500"
                    />
                </div>
                <div className="flex gap-[24px]">
                    <img
                        src={notification}
                        alt="notification"
                        width={20}
                        height={20}
                    />
                    <img src={avt} alt="avt" width={24} height={24} />
                </div>
            </div>
        </div>
    )
}
