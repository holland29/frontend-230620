import { IPerson, makePerson } from "./person/Person";
// import { 심벌 목록 } from "파일의 상대경로";

const testMakePerson2 = (): void => {
    let daeho: IPerson = makePerson('Daeho')
    let share: IPerson = makePerson('Share')
    console.log(daeho, share);
}

testMakePerson2();