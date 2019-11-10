// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/:id/edit-Profile"
const CHANGE_PASSWORD = "/:id/change-password";

// Videos
const VIDEO = "/video";
const VIDEO_UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"

const routes = {
    home: HOME,
    join: JOIN,
    login: LOGIN,
    logout: LOGOUT,
    search: SEARCH,
    user: USER,
    userDetail: USER_DETAIL,
    editProfile: EDIT_PROFILE,
    changePassword: CHANGE_PASSWORD,
    video: VIDEO,
    videoUpload: VIDEO_UPLOAD,
    videoDetail: VIDEO_DETAIL,
    editVideo: EDIT_VIDEO
}

export default routes;