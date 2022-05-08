import { useContext, useState } from "react";
import { DispatchContext } from "../../../store/context";
import { DesktopTour } from "./DesktopTour/DesktopTour";
import { MobileTour } from "./MobileTour/MobileTour";

export function GuideTour() {
  const [step, setStep] = useState<0|1|2|3|4|5>(0)
  const dispatch = useContext(DispatchContext)

  function nextStepHandler() {
    switch(step) {
      case 0: {
        return setStep(1)
      }
      case 1: {
        return setStep(2)
      }
      case 2: {
        return setStep(3)
      }
      case 3: {
        return setStep(4)
      }
      case 3: {
        return setStep(4)
      }
      case 4: {
        localStorage.setItem('first-time', 'false')
        dispatch({ type: 'SET_FIRST_TIME_TO_FALSE' })
        return
      }
    }
  }

  return (
    <>
      <DesktopTour step={step} next={nextStepHandler}/>
      <MobileTour />
    </>
  )
}