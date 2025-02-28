// 资源数据
const resources = [
    // 影视资源
    {
        title: "豆瓣电影",
        description: "中国最大的电影社区和评分网站",
        url: "https://movie.douban.com",
        icon: "bi bi-film",
        category: "影视"
    },
    {
        title: "IMDb",
        description: "全球最大的电影数据库",
        url: "https://www.imdb.com",
        icon: "bi bi-camera-reels",
        category: "影视"
    },
    {
        title: "Netflix",
        description: "全球领先的流媒体平台",
        url: "https://www.netflix.com",
        icon: "bi bi-tv",
        category: "影视"
    },

    // 动漫资源
    {
        title: "Bilibili",
        description: "中国领先的年轻人文化社区",
        url: "https://www.bilibili.com",
        icon: "bi bi-play-btn",
        category: "动漫"
    },
    {
        title: "AcFun",
        description: "中国最早的弹幕视频网站",
        url: "https://www.acfun.cn",
        icon: "bi bi-play-circle",
        category: "动漫"
    },
    {
        title: "MyAnimeList",
        description: "全球最大的动漫数据库",
        url: "https://myanimelist.net",
        icon: "bi bi-joystick",
        category: "动漫"
    },

    // 工具资源
    {
        title: "GitHub",
        description: "全球最大的代码托管平台",
        url: "https://github.com",
        icon: "bi bi-github",
        category: "工具"
    },
    {
        title: "Canva",
        description: "在线设计工具",
        url: "https://www.canva.com",
        icon: "bi bi-palette",
        category: "工具"
    },
    {
        title: "Notion",
        description: "一体化工作空间",
        url: "https://www.notion.so",
        icon: "bi bi-journal-text",
        category: "工具"
    }
];

// 获取所有分类
function getCategories() {
    const categories = new Set(['影视', '动漫', '工具']);
    return Array.from(categories);
}

// 生成资源卡片
function createResourceCard(resource) {
    return `
        <div class="col-md-4">
            <div class="resource-card">
                <div class="d-flex align-items-center mb-3">
                    <i class="${resource.icon} fs-3 me-2"></i>
                    <h5 class="mb-0">${resource.title}</h5>
                </div>
                <p class="text-muted">${resource.description}</p>
                <a href="${resource.url}" target="_blank" class="btn btn-primary btn-sm">
                    访问网站
                </a>
            </div>
        </div>
    `;
}

// 初始化资源网格
function initResourceGrid() {
    const grid = document.getElementById('resource-grid');
    if (grid) {
        grid.innerHTML = resources.map(createResourceCard).join('');
    }
}

// 根据分类过滤资源
function filterResources(category) {
    if (category === 'all') {
        return resources;
    }
    return resources.filter(resource => resource.category === category);
}

// 初始化分类筛选按钮
function initCategoryFilter() {
    const filterContainer = document.getElementById('category-filter');
    if (!filterContainer) return;

    const categories = getCategories();
    categories.forEach(category => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'btn btn-outline-primary';
        button.textContent = category;
        button.dataset.category = category;
        button.addEventListener('click', function() {
            // 移除所有按钮的 active 状态
            document.querySelectorAll('#category-filter button').forEach(btn => {
                btn.classList.remove('active');
            });
            // 设置当前按钮为 active
            this.classList.add('active');
            // 过滤并显示资源
            const filteredResources = filterResources(this.dataset.category);
            const grid = document.getElementById('resource-grid');
            grid.innerHTML = filteredResources.map(createResourceCard).join('');
        });
        filterContainer.appendChild(button);
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initCategoryFilter();
    initResourceGrid();
    
    // 添加 Bootstrap 图标
    const iconLink = document.createElement('link');
    iconLink.rel = 'stylesheet';
    iconLink.href = 'https://cdn.bootcdn.net/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css';
    document.head.appendChild(iconLink);
});
