export const user = (req, res) => res.render("user", { pageTitle: "user" });

export const userDetail = (req, res) => res.render("userDetail", { pageTitle: "userDetail" });

export const editProfile = (req, res) => res.render("editProfile", { pageTitle: "editProfile" });

export const changePassword = (req, res) => res.render("changePassword", { pageTitle: "changePassword" });

export const getJoin = (req, res) => {
    res.render("join", { pageTitle: "join" })
};

export const postJoin = (req, res) => {
    console.log(req.body)
    res.render("join", { pageTitle: "join" })
};

export const login = (req, res) => res.render("login", { pageTitle: "login" });

export const logout = (req, res) => res.render("logout", { pageTitle: "logout" });