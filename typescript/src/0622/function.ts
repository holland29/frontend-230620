// 함수

import { create } from "domain";

//! 함수 매개변수

function sing(song: string) {
    console.log(`Singing: ${song}`)
}

//! 필수 매개변수

function sing2(first: string, second: string) {
    console.log(`${first} / ${second}`);
}

// sing2("hello"); // 2개의 인수가 필요한데 1개를 가져왔습니다.
sing2("hello", "hi");
// sing2("hello", "hi", "bye"); // 2개의 인수가 필요한데 1개를 가져왔습니다.

//! 선택적 매개변수

function music(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
        console.log(`Singer: ${singer}`);
    }
}

music("clap");
music("clap", undefined);
music("clap", "seventeen");

function announceMusic(song: string, singer: string | undefined) {
}

// announceMusic("clap"); // 2개의 인수가 필요한데 1개를 가져왔습니다.
announceMusic("clap", undefined);
announceMusic("clap", "seventeen");

//! 기본 매개변수
function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating} rate`);
}

rateSong("Hello"); // Hello gets 0 rate

rateSong("Hello2", 5); // Hello2 gets 5 rate
// rateSong("Hello3", "5");

//! 나머지 매개변수
// ...스프레드
function singerToSing(singer: string, ...songs: string[]) {
    for (const song of songs) {
        console.log(`${song}, by ${singer}`)
    }
}
singerToSing("A", "B", "C", "D");
// singerToSing("A", 123);

//! 반환 타입
function singSongs(songs: string[], count = 0): number {
    return songs.length ? singSongs(songs.slice(1), count + 1) : count;
}

// 화살표 함수
const singSongs2 = (songs: string[], count = 0): number =>
    songs.length ? singSongs(songs.slice(1), count + 1) : count;

//! 함수 타입
let singSong3: () => string;

let inputAndOutput: (songs: string[], count?: number) => number;

//
const songs = ["A", "B", "C"];

function playSongs(getSong: (index: number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log
            (getSong(i));
    }
}

function getSong(index: number) {
    return `${songs[index]}`;
}
playSongs(getSong);

// function getSong2(index: string) {
//   return `${songs}`;
// }
// playSongs(getSong2);

//! void 반환 타입
// 값을 반환하지 않을 때 사용

function logSong(song: string | undefined): void {
    if (!song) {
        return;
    }
    console.log(`${song}`);
    // return true;
}

// void로 반환하도록 선언된 타입 위치에 전달된 함수가 반환된 모든 값을 무시하도록 설정하는데 유용

//! never 반환 타입
// (의도적으로) 항상 오류를 발생시키거나 무한 루프를 실행하는 함수
// 타입스크립트에서 제어 흐름 분석

//? 함수 오버로드

// 오버로드 시그니처
function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;

// 구현 시그니처
function createDate(monthOrTimestamp: number, day?: number, year?: number) {
    return day === undefined || year === undefined
        ? new Date(monthOrTimestamp) : new Date(year, monthOrTimestamp, day);
}

createDate(295809580);
createDate(7, 27, 2023);
// createDate(4, 5);