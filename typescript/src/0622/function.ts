// 함수

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