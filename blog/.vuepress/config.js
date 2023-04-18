module.exports = {
    base: "/VBlog/",
    dest: "blog/.vuepress/dist",
    locales: {
        "/": {
            lang: "zh-CN",
            title: "VBlog",
            description: "New blog by vuepress",
        }
    },
    theme: "reco",
    themeConfig: {
        type: "blog",
        logo: "/assets/img/head.png",
        authorAvatar: "/assets/img/head.png",
        subSidebar: "auto",
        author: "xiaowu",
        blogConfig: {
            category: {
                location: 2,
                text: "分类"
            },
            tag: {
                location: 3,
                text: "标签"
            },
            socialLinks: [
                {
                    icon: "reco-github",
                    link: "https://github.com/wu-clan"
                }
            ]
        },
        nav: [
            { text: "归档", link: "/timeline/", icon: "reco-date" }
        ]
    },
    head: [
        [ "meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" } ]
    ]
}