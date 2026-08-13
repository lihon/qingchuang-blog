import { defineConfig } from 'astro/config';

// ===== GitHub Pages 部署配置 =====
// 部署前把 GITHUB_USER 改成你的 GitHub 用户名（比如 "zm-entropy"）。
const GITHUB_USER = 'lihon';
const REPO_NAME = 'qingchuang-blog';

// https://astro.build/config
export default defineConfig({
  // 项目 Pages 地址：https://<user>.github.io/<repo>/
  site: `https://${GITHUB_USER}.github.io`,
  base: `/${REPO_NAME}/`,
});
