import React from 'react';
import './App.css'
import { BsQuestionLg } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function App() {
  const [isChecked, setIsChecked] = React.useState(true);
  const [collapse, setCollapse] = React.useState(false);
  const onChange = () => {
    setIsChecked(!isChecked)
  }
  const custom_style = 'appearance-none w-[59px] h-6 bg-[#47484E] rounded-[6px] ml-[8.38px] pl-[6px] text-[#FFFFFF] outline-none text-sm focus:border-2 border-sky-600'
  return (
    <>
      <section className='w-full h-[100vh] grid place-items-center bg-slate-800'>
        <section className='w-[40%] h-[60vh] grid place-content-center bg-black bg-opacity-90'>
          <div className='w-[340px] h-[193px] bg-[#302F35] rounded-[12px] pt-[17.82px] bg-opacity-95'>
            <div className='flex items-center pl-[15.08px] pr-[15px] justify-between'>
              <h3 className='text-[#FFFFFF] w-[82px] h-4 flex items-center font-medium'>EXTRUSION</h3>
              <div className='flex items-center'>
                <span className='grid place-items-center w-4 h-4 text-[#BEC2C4] rounded-full bg-[#454548] text-xs'>
                  <BsQuestionLg />
                </span>
                <button
                  onClick={() => setCollapse(!collapse)}
                  className='grid place-items-center w-7 h-7 text-[#D2D6D8] transition-all text-[1.5rem] ml-1'>
                  {collapse ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
            </div>
            <div className='flex items-center pl-[27.5px] mt-[17px]'>
              <label
                htmlFor='check'
                className='w-[52.5px] h-4 flex items-center text-gray-300 ml-[3px] text-sm'>Linear :
              </label>
              <input
                id='check'
                className={`text-[#FFFFFF ] w-4 h-4 ml-[4.38px] rounded-[3px] check`}
                type="checkbox" checked={isChecked} onChange={onChange} />
              <input
                className={`${custom_style}`}
                type="number" name="" id="" />
            </div>
            <div className='pl-[17.5px] mt-[15px] flex items-center pr-5'>
              <div className='flex items-center'>
                <label className='w-[61.5px] h-4 text-gray-300 pl-[1px] text-sm'>Variable :</label>
                <input
                  className='bg-[#47484E] text-[#FFFFFF ] w-4 h-4 ml-[8.38px] rounded-[3px] check'
                  type="checkbox" name="" id="" checked={!isChecked} onChange={onChange} />
              </div>

              <div className='flex items-center ml-[13px]'>
                <label htmlFor='min' className='w-7 h-4 text-gray-400 pl-[1px] text-[14px]'>Min:</label>
                <input
                  className={`${custom_style} ${isChecked ? "bg-opacity-30" : ""} number_check`}
                  type="number" name="min" id="min" readOnly={!isChecked} disabled={!isChecked} />
              </div>
              <div className='flex items-center ml-[13px]'>
                <label htmlFor='max' className='w-7 h-4 text-gray-400 pl-[1px] text-[14px]'>Max:</label>
                <input
                  className={`${custom_style} ${isChecked ? "bg-opacity-30" : ""} number_check`}
                  type="number" name="max" id="max" readOnly={!isChecked} disabled={!isChecked} />
              </div>
            </div>
            <div className='pr-5 flex items-center justify-end mt-[21px]'>
              <button className='w-[118px] h-7 text-sm bg-[#4E4E54] rounded-[17px] grid place-items-center text-[#CCCCCC] font-medium'>
                Smart Reset
              </button>
            </div>
          </div>
        </section>
      </section>

    </>
  )
}

export default App
