import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Website of Ryan",
  description: "void",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
});
