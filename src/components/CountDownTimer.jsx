import { useEffect, useRef, useState } from 'react'
import { BsFillCalendarHeartFill } from 'react-icons/bs'

const CountDownTimer = () => {
  const [timerDay, setTimerDay] = useState(0)
  const [timerHour, setTimerHour] = useState(0)
  const [timerMinute, setTimerMinute] = useState(0)
  const [timerSecond, setTimerSecond] = useState(0)
  let interval = useRef()
  const runTimer = () => {
    const countdownDate = new Date('Dec 12, 2023').getTime()
    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const day = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hour = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      )

      const minute = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60),
      )

      const second = Math.floor((distance % (1000 * 60 * 60 * 24)) / 1000)

      if (distance < 0) {
        // stop timer
        clearInterval(interval.current)
      } else {
        // run timer
        setTimerDay(day)
        setTimerHour(hour)
        setTimerMinute(minute)
        setTimerSecond(second)
      }
    }, 1000)
  }
  // mount the timer
  useEffect(() => {
    runTimer()
    return () => clearInterval(interval.current)
  })
  return (
    <main className="flex justify-center items-center h-screen">
      <section className="flex flex-col gap-16 ">
        <div className=" flex flex-col gap-7 justify-center items-center">
          <BsFillCalendarHeartFill className=" text-9xl text-red-600" />
          <h1 className=" text-4xl font-bold text-violet-600">
            Countdown Timer
          </h1>
        </div>
        <div>
          <p className="custom-font text-violet-600 text-xl font-semibold mb-5 ">
            Our special time is in :{' '}
          </p>

          <div className="w-[340px] md:w-[400px] h-[150px] border-4 border-violet-400 flex justify-around items-center px-5">
            <section className="flex items-center flex-col">
              <p className=" text-xl font-semibold text-violet-600">
                {timerDay}
              </p>
              <span className=" text-xs text-violet-600">Days</span>
            </section>{' '}
            :
            <section className="flex items-center flex-col">
              <p className=" text-xl font-semibold text-violet-600">
                {timerHour}
              </p>
              <span className=" text-xs text-violet-600">Hours</span>
            </section>{' '}
            :
            <section className="flex items-center flex-col">
              <p className=" text-xl font-semibold text-violet-600">
                {timerMinute}
              </p>
              <span className=" text-xs text-violet-600">Minutes</span>
            </section>{' '}
            :
            <section className="flex items-center flex-col">
              <p className=" text-xl font-semibold text-violet-600">
                {timerSecond}
              </p>
              <span className=" text-xs text-violet-600">Seconds</span>
            </section>
          </div>
        </div>
      </section>
    </main>
  )
}

export default CountDownTimer
