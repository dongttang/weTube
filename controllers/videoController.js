import { videos } from "../db";

export const root = (req, res) => {
    res.render("root", { pageTitle: "Home", videos });
}

export const search = (req, res) => {
    const {
        query: { term: searchingBy }
    } = req;
    res.render("search", { pageTitle: "Search", searchingBy: searchingBy, videos });
};

export const video = (req, res) => res.render("video", { pageTitle: "Video" });

export const videoUpload = (req, res) => res.render("videoUpload", { pageTitle: "VideoUpload" });

export const videoDetail = (req, res) => res.render("videoDetail", { pageTitle: "VideoDetail" });

export const editVideo = (req, res) => res.render("editVideo", { pageTitle: "EditVideo" });

export const deleteVideo = (req, res) => res.render("deleteVideo", { pageTitle: "DeleteVideo" });