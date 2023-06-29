// 웹 페이지가 로드될 때 실행되는 기능들을 정의
window.onload = () => {
    AsideEvent.getInstance().addEventShowMenuButton();
    AsideEvent.getInstance().addEventMainChange();
    
    // User Information 영역의 이벤트, 파일 업로드, (로컬 스토리지)파일 저장
    InformationEvent.getInstance().addEventPhotoChangeClick();
    InformationEvent.getInstance().addEventPhotoChange();
    InformationEvent.getInstance().addEventAboutMeModifyClick();
    InformationEvent.getInstance().addEventAboutMeSaveClick();
    InformationEvent.getInstance().addEventIntroduceModifyClick();
    InformationEvent.getInstance().addEventIntroduceSaveClick();
    InformationService.getInstance().loadInfo();

    TodoEvent.getInstance().addEventAddTodoClick();
    TodoEvent.getInstance().addEventAddTodoKeyUp();
    TodoService.getInstance();
}