// 资源数据
const resources = [
    // 影视资源
    {
        title: "免费电影",
        description: "高清在线影视资源",
        url: "https://gaze.run/",
        icon: "bi bi-film",
        category: "影视"
    },
    {
        title: "黑猫影视",
        description: "热门影视剧集在线观看",
        url: "https://heimaotv.vip/",
        icon: "bi bi-tv",
        category: "影视"
    },

    // 动漫资源
    {
        title: "囧次元",
        description: "免费动漫在线观看",
        url: "https://www.jcydm.org/?ref=www.9eip.com",
        icon: "bi bi-play-btn",
        category: "动漫"
    },
    {
        title: "Anfuns",
        description: "优质动漫资源",
        url: "https://www.anfuns.cc/",
        icon: "bi bi-play-circle",
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
        title: "樱花茶",
        description: "AI聊天助手",
        url: "https://gpt.cherrychat.org/home",
        icon: "bi bi-chat-dots",
        category: "工具"
    },
    {
        title: "在线格式转换",
        description: "支持多种文件格式转换",
        url: "https://www.alltoall.net/",
        icon: "bi bi-file-earmark-arrow-up",
        category: "工具"
    },
    {
        title: "设计导航",
        description: "设计师常用工具导航",
        url: "https://hao.uisdc.com/",
        icon: "bi bi-compass",
        category: "工具"
    },
    {
        title: "在线抠图",
        description: "AI智能背景去除",
        url: "https://www.remove.bg/zh",
        icon: "bi bi-image",
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
