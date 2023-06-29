// 사용자 정보(User Information)의 사진 및 텍스트 입력 관련 UI 이벤트 관리
class InformationEvent {
    static #instance = null;
    // 싱글톤(Singleton)패턴 구현에 사용
    static getInstance() {
        if (this.#instance == null) {
            this.#instance = new InformationEvent();
        }
        return this.#instance;
    }

    // 사용자가 사진영역을 클릭하면 파일 선택 대화 상자 열리도록 하는 이벤트를 추가
    addEventPhotoChangeClick() {
        const infoPhoto = document.querySelector(".info-photo");
        infoPhoto.onclick = () => {
            const photoFile = document.querySelector(".photo-file");
            photoFile.click();
        }
    }
    
    addEventPhotoChange() {
        const photoFile = document.querySelector(".photo-file");
        photoFile.onchange = () => { 
            FileService.getInstance().changePhoto();
        }
    }

    addEventAboutMeModifyClick() {
        const aboutMeModifyButton = document.querySelector("m-aboutme");
        aboutMeModifyButton.onclick = () => {
            const aboutMeSaveButton = document.querySelector("s-aboutme");
            aboutMeSaveButton.classList.remove("button-hidden");
            aboutMeModifyButton.classList.add("button-hidden");

            const infoInputContainers = document.querySelector("info-input-container");
            infoInputContainers.forEach(infoInputContainer => {
                infoInputContainer.querySelector(".info-input").disabled = false;
            })
        }
    }

    addEventIntroduceSaveClick() {
        const introduceSaveButton = document.querySelector(".s-introduce");
        introduceSaveButton.onclick = () => {
            const introduceModifyButton = document.querySelector(".m-introduce");
            introduceModifyButton.classList.remove("button-hidden");
            introduceSaveButton.classList.add("button-hidden");
            const introduceInput = document.querySelector(".introduce-input");
            introduceInput.disabled = true;

            const userInfo = InformationService.getInstance().userInfo;
            userInfo["introduce"] = introduceInput.value;

            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        }
    }

}

class InformationService {
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new InformationService();
        }
        return this.#instance;
    }

    userInfo = {};

    loadInfo() {
        this.loadInfoPhoto();
        this.loadInfoUser();
    }

    loadInfoPhoto() {
        const infoPhotoImg = document.querySelector(".info-photo img")
        const infoPhoto = localStorage.setItem("infoPhoto");
        if (infoPhoto == null) {
            infoPhotoImg.src = "./images/noimage.jpg";
        } else {
            infoPhotoImg.src = infoPhoto;
        }
    }

    loadInfoUser() {
        this.userInfo = JSON.parse(localStorage.getItem("userInfo"));

        if(this.userInfo == null) {
            this.userInfo = {};
            return;
        }
        Object.keys(this.userInfo).forEach(key => {
            const infoInput = document.querySelectorAll(".info-input");
            infoInput.forEach(input => {
                if(input.id == key) {
                    input.value = this.userInfo[key];
                }
            })
        });

        if(typeof this.userInfo.introduce == "undefined"){
            return;
        }
        const introduceInput = document.querySelector(".introduce-input");
        introduceInput.value = this.userInfo.introduce;
    }

}

// 
class FileService{
    static #instance = null;
    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new FileService();
        }
        return this.#instance;
    }

    changePhoto() {
        const photoForm = document.querySelector(".photo-form");
        const formData = new FormData(photoForm);
        const fileValue = formData.get("file");

        if (fileValue.size == 0) {
            return;
        }
        this.showPreview(fileValue);
    }

    showPreview(fileValue) {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(fileValue);
        fileReader.onload = (e) => {
            const photoImg = document.querySelector(".info-photo img");
            photoImg.src = e.target.result;
            localStorage.setItem("infoPhoto", photoImg.src);
        }
    
    }
}