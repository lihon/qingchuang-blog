// 站点仓库信息 —— 与 astro.config.mjs 里的 GITHUB_USER / REPO_NAME 保持一致
export const GITHUB_USER = 'lihon';
export const REPO_NAME = 'qingchuang-blog';
export const REPO_URL = `https://github.com/${GITHUB_USER}/${REPO_NAME}`;

const BRANCH = 'main';
const POSTS_DIR = 'src/content/posts';

// 跳转到 GitHub 的「编辑文件」页
export const editUrl = (slug: string) =>
  `${REPO_URL}/edit/${BRANCH}/${POSTS_DIR}/${slug}.md`;

// 跳转到 GitHub 的「删除文件」确认页
export const deleteUrl = (slug: string) =>
  `${REPO_URL}/delete/${BRANCH}/${POSTS_DIR}/${slug}.md`;
