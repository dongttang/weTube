// Global
const ROOT = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// User
const USER = "/user";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile"
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEO = "/video";
const VIDEO_UPLOAD = "/upload"
const VIDEO_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit"
const DELETE_VIDEO = "/:id/delete"

const routes = {
    root: ROOT,
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
    editVideo: EDIT_VIDEO,
    deleteVideo: DELETE_VIDEO
}

export default routes;