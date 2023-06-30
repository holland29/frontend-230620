// 프로미스(Promise)
// 비동기 작업의 결과를 나타내는 객체
// 비동기 작업의 성공 또는 실패를 처리하고, 결과를 받을 수 있도록 도와주는 일을 처리하는 객체

//! Promise 생성
// Promise 생성자는 비동기 작업을 수행하는 함수를 인자로 전달 받는다.
// 함수가 Promise를 반환하는 경우, 해당 Promise를 이용하여 비동기 작업을 처리 가능

function fetchDataP(): Promise<any> {
    return new Promise((resolve, reject) => {
        // 비동기 작업 수행
        // 작업이 성공적으로 완료: resolve 호출하여 결과 전달
        // 작업 중 에러가 발생: reject 호출하여 에러 전달
    })
}

//! Promise 체이닝
// Promise는 then() 메서드를 이용하여 비동기 작업의 결과를 처리할 수 있습니다.
// 여러 개의 then() 메서드를 체인으로 연결하여 비동기 작업을 순차적으로 처리
// 각 Promise의 결과를 다음 Promise의 입력으로 전달하여 작업을 연속적으로 진행 가능

fetchDataP()
    .then((result1) => {
        //result1을 가지고 다음 작업 처리
        // return asyncFunc(result1);
    })
    .then((result2) => {
        //result2을 가지고 다음 작업 처리
        // return asyncFunc(result2);
    })
    .then((result3) => {
        //result3을 가지고 마지막 작업 처리
        console.log(result3);
    })
    .catch((error) => {
        //에러 처리
        console.log(error);
    })
    .finally(() => {
        // 항상 실행되는 블록
    });
    
//! Promise 에러처리
// Promise 에러 처리는 catch 메서드를 사용하여 에러를 처리
// 각 then 블록에서 발생한 에러는 가장 가까운 catch 블록으로 전달됩니다.

//! finally 블록
// Promise체인의 마지막에 사용할 수 있는 블록
// 성공하든 실패하든 항상 실행
// finally 블록은 선택적으로 사용할 수 있으며, 마지막 then블록 또는 catch블록 다음에 위치시킵니다.
// 작업의 마무리 작업이나 정리 작업을 수행

//! Promise의 메서드

//? Promise.all()
// 여러 개의 Promise를 병렬로 처리하고 모든 Promise의 결과를 기다리는 것이 가능

// Promise.all에서 발생한 에러는 첫 번째로 발생한 에러만을 캐치
// 여러 개의 Promise 중에서 하나라도 에러가 발생하면 그 이후의 에러는 무시

const promise1 = fetchDataP();
const promise2 = fetchDataP();
const promise3 = fetchDataP();

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        // 모든 Promise의 결과 처리
        console.log(results);
    })
    .catch((error) => {
        // 에러 처리
        console.log(error);
    });

//? Promise.race()
// 여러 개의 Promise 중 가장 빨리 완료되는 Promise의 결과만 사용 가능
// 가장 먼저 완료된 Promise의 결과나 에러만을 반환,
// 나머지 Promise의 결과는 무시

const promise4 = fetchDataP();
const promise5 = fetchDataP();
const promise6 = fetchDataP();

Promise.race([promise4, promise5, promise6])
    .then((result) => {
        // 가장 빨리 완료된 Promise의 결과 처리
        console.log(result);
    })
    .catch((error) => {
        // 에러 처리
        console.log(error);
    });

//! Promise.all()메서드 활용

const urls = ["url1", "url2", "url3"];
const promises = urls.map((url) => fetch(url));

Promise.all(promises)
    .then((responses) => {
        return Promise.all(responses.map((response) => response.json()));
    })
    .then((data) => {
        // 모든 데이터 처리
    })
    .catch((error) => {
        // 에러 처리
    });

//! Promise.race()메서드 활용

const timeout = 5000; // 5초

const fetchPromise = urls.map((url) => fetch(url));

const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("Timeout"));
    }, timeout);
});

Promise.race([fetchPromise, timeoutPromise])
    .then((response) => {
        // 가장 빨리 완료된 작업의 결과 사용
    })
    .catch((error) => {
        // 에러 처리
    });