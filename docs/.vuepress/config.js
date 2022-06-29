module.exports = {
    title: '快融化的冰淇淋',
    description: '快融化冰淇淋的个人技术博客',
    head: [
        ['link', 
            { rel: 'icon', href: '/ico.png' }
            //浏览器的标签栏的网页图标，第一个'/'会遍历public文件夹的文件
        ],  
    ],
    themeConfig: {
        logo: '/ico.png',  //网页顶端导航栏左上角的图标
        nav: [
            { text: '浏览器相关', link: '/pages/browser/index.md' },
            {
                text: '前端基础',  //默认显示        
                ariaLabel: '前端基础',   //用于识别的label
                items: [
                    { text: 'HTML', link: '/pages/front/html/index.md' },  
                    //点击标签会跳转至link的markdown文件生成的页面
                    { text: 'CSS', link: '/pages/front/css/index.md' },
                    { text: 'JavaScript', link: '/pages/front/javascript/index.md' },
                ]
            },
            { text: '构建工具', link: '/pages/buildtools/index.md' },
            { text: 'Github', link: 'https://github.com/iJay' },
        ]
    }
}