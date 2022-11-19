import { fileURLToPath, URL } from "node:url";
import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Pages from "vite-plugin-pages";
import Layouts from "vite-plugin-vue-layouts";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueI18n from "@intlify/vite-plugin-vue-i18n";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Pages({
      extensions: ["vue", "md"],
      exclude: ["**/components/**"],
      dirs: [
        {
          dir: "src/pages",
          baseRoute: "",
        },
      ],
      extendRoute(route) {
        if (route.path === "/") {
          route.redirect("/home");
        }
      },
    }),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "HomeLayout",
    }),
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue-i18n",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
        {
          vuetify: ["useTheme"],
        },
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables", "src/store"],
      vueTemplate: true,
    }),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      include: [path.resolve(__dirname, "src/locales/**")],
    }),
  ],
  ssr: {
    noExternal: ["vuetify", /vue-i18n/],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
