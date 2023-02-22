import { ADDMIX } from '../constant'

const initMix: number = 0
const MixReducer = (prestate: number = initMix, action: any) => {

  const { type, data } = action
  switch (type) {
    case ADDMIX:
      return prestate = data

    default:
      return prestate
    // prestate

  }
}

export default MixReducer