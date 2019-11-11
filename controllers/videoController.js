export const root = (req, res) => res.render("root", { pageTitle: "Home" });
export const search = (req, res) => res.render("search", { pageTitle: "Search" });
export const video = (req, res) => res.render("video", { pageTitle: "Video" });
export const videoUpload = (req, res) => res.render("videoUpload", { pageTitle: "VideoUpload" });
export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });
export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });