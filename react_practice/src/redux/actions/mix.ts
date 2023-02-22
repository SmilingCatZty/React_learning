import { ADDMIX } from '../../redux/constant'


const MixPersonAndCount = (c: number, p: number) => ({ type: ADDMIX, data: c + p })

export {
  MixPersonAndCount
}