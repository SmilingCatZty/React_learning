import { ADDPERSON } from '../constant'

const createAddPerson = (persomObj: any) => {
  return { type: ADDPERSON, data: persomObj }
}


export {
  createAddPerson
}