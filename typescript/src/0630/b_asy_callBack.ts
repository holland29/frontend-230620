// 타입스크립트의 동기 & 비동기 처리

// 1. 동기(Synchronous) 처리
// 코드가 순차적으로 실행(한 가지 작업이 완료될 때까지 다음 작업은 대기)

// 2. 비동기(Asynchronous) 처리
// 코드의 실행이 완료될 때까지 기다리지 않고 다음 코드를 실행
// 작업이 완료되면 결과를 받을 수 있다. (콜백 함수, 프로미스)

//! 콜백 함수(Callback)

// 다른 함수의 인자로 전달되어 실행되는 함수
// 비동기 작업의 결과를 처리하거나 작업이 완료되었을 때 호출

// 콜백 함수 작성
// 결과 처리를 위해 실행될 로직을 구현

function fetchDataCb(callback: (error: Error | null, data: any) => void) {
    // 비동기 작업 수행
    // 작업이 완료되면 결과를 콜백 함수의 인자로 전달하여 호출
}

fetchDataCb((error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

// 콜백 헬
// 콜백 패턴을 중첩하여 사용하면 코드의 가독성이 떨어지고 디버깅이 어려움.
// : 콜백 헬(callback hell)

// asyncFunc1((result1) => {
//     asyncFunc2(result1, (result2) => {
//         asyncFunc3(result2, (result3 => {
//             ......
//         })
//     })
// })

// 콜백 체이닝
// 콜백 헬을 해결하기 위해 콜백 체이닝을 사용
// 각 비동기 작업의 결과를 다음 작업의 인자로 전달하는 방식

// asyncFunc1()
//     .then((result1) => {
//         return asyncFunc2(result1);
//     })
//     .then((result2) => {
//         return asyncFunc3(result2);
//     })
//     .then((result3) => {
//         ...
//     })
//     .catch((error) => {
//         console.log(error);
//     });
    




