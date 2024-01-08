
function getImgAlpha() {
    let t = `
        <!-- 使用svg轉base64圖片 -->
        <svg viewBox="0 0 10 10" width="10" height="10" xmlns="http://www.w3.org/2000/svg" v-if="false">
            <rect x="0" y="0" width="5" height="5" fill="#ddd" />
            <rect x="0" y="5" width="5" height="5" fill="#fff" />
            <rect x="5" y="0" width="5" height="5" fill="#fff" />
            <rect x="5" y="5" width="5" height="5" fill="#ddd" />
        </svg>
    `
    return `data:image/svg+xml;base64,ICAgICAgICAgICAgICAgIDxzdmcgdmlld0JveD0iMCAwIDEwIDEwIiB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiNkZGQiIC8+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjAiIHk9IjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiNmZmYiIC8+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjUiIHk9IjAiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiNmZmYiIC8+DQogICAgICAgICAgICAgICAgICAgIDxyZWN0IHg9IjUiIHk9IjUiIHdpZHRoPSI1IiBoZWlnaHQ9IjUiIGZpbGw9IiNkZGQiIC8+DQogICAgICAgICAgICAgICAgPC9zdmc+`
}


export default getImgAlpha
