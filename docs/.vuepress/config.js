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
        ],
        sidebar: {
            // docs文件夹下面的/pages/browser/文件夹 文档中md文件 书写的位置(命名随意)
            '/pages/browser/': [
                '/pages/browser/', // /pages/browser/文件夹的README.md 不是下拉框形式
                {
                    title: '侧边栏下拉框的标题1',
                    children: [
                        '/pages/browser/render', // 以docs为根目录来查找文件 
                        // 上面地址查找的是：docs>pages>browser>render.md 文件
                        // 自动加.md 每个子选项的标题 是该md文件中的第一个h1/h2/h3标题
                    ]
                }
            ],
            // docs文件夹下面的algorithm文件夹 这是第二组侧边栏 跟第一组侧边栏没关系
            '/pages/algorithm/': [
                '/algorithm/', 
                {
                    title: '第二组侧边栏下拉框的标题1',
                    children: [
                      '/algorithm/simple/test' 
                    ]
                }
            ]
        }
    }
}