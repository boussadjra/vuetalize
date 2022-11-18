import { defineComponent, resolveComponent, withCtx, createVNode, useSSRContext, computed, mergeProps, unref, createTextVNode, createApp } from "vue";
import { createPinia } from "pinia";
import { useHead, createHead } from "@vueuse/head";
import { ssrRenderComponent, ssrRenderAttrs, ssrRenderSlot } from "vue/server-renderer";
import { createRouter, createWebHistory } from "vue-router";
import { useTheme, createVuetify } from "vuetify";
import * as directives from "vuetify/directives";
import * as components from "vuetify/components";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vuetify 3 template",
      meta: [{ name: "description", content: "Opinionated Vuetify Starter Template" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_app = resolveComponent("v-app");
      const _component_RouterView = resolveComponent("RouterView");
      _push(ssrRenderComponent(_component_v_app, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_RouterView, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_RouterView)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> Home layout `);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/HomeLayout.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const layouts = {
  "HomeLayout": __layout_0
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a;
    return {
      path: route.path,
      component: layouts[((_a = route.meta) == null ? void 0 : _a.layout) || "HomeLayout"],
      children: [{ ...route, path: "" }]
    };
  });
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ThemeToggler",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = useTheme();
    function toggleTheme() {
      theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
    }
    const isDark = computed(() => theme.global.current.value.dark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_btn = resolveComponent("v-btn");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "position-absolute theme-toggler" }, _attrs))} data-v-ffae1e85>`);
      _push(ssrRenderComponent(_component_v_btn, {
        icon: unref(isDark) ? "mdi-white-balance-sunny" : "mdi-weather-night",
        color: "secondary",
        onClick: toggleTheme
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const ThemeToggler_vue_vue_type_style_index_0_scoped_ffae1e85_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/blocks/ThemeToggler.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-ffae1e85"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Home",
      meta: [
        {
          name: "description",
          content: "This is the home page"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_v_main = resolveComponent("v-main");
      const _component_v_container = resolveComponent("v-container");
      const _component_v_btn = resolveComponent("v-btn");
      const _component_ThemeToggler = __unplugin_components_0;
      _push(ssrRenderComponent(_component_v_main, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_v_container, { class: "h-100 d-flex justify-center" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="d-flex flex-column justify-center align-center h-100 hero" data-v-bd9f7ae0${_scopeId2}><h1 class="tagline" data-v-bd9f7ae0${_scopeId2}> Start your project with <span class="vuetify3" data-v-bd9f7ae0${_scopeId2}>Vuetify 3</span> faster than ever </h1><p class="text-muted py-8 description" data-v-bd9f7ae0${_scopeId2}> This template is opinionated and comes with a lot of features out of the box. It is meant to be a starting point for your project. </p><div class="d-flex justify-start w-100" data-v-bd9f7ae0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "primary",
                    to: "/about",
                    class: ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` GET STARTED `);
                      } else {
                        return [
                          createTextVNode(" GET STARTED ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_v_btn, {
                    color: "secondary",
                    variant: "outlined",
                    href: "https://github.com/boussadjra/vuetify-3-template",
                    class: "ml-8",
                    "prepend-icon": "mdi-github"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Github `);
                      } else {
                        return [
                          createTextVNode(" Github ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_ThemeToggler, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", { class: "d-flex flex-column justify-center align-center h-100 hero" }, [
                      createVNode("h1", { class: "tagline" }, [
                        createTextVNode(" Start your project with "),
                        createVNode("span", { class: "vuetify3" }, "Vuetify 3"),
                        createTextVNode(" faster than ever ")
                      ]),
                      createVNode("p", { class: "text-muted py-8 description" }, " This template is opinionated and comes with a lot of features out of the box. It is meant to be a starting point for your project. "),
                      createVNode("div", { class: "d-flex justify-start w-100" }, [
                        createVNode(_component_v_btn, {
                          color: "primary",
                          to: "/about",
                          class: ""
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" GET STARTED ")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_v_btn, {
                          color: "secondary",
                          variant: "outlined",
                          href: "https://github.com/boussadjra/vuetify-3-template",
                          class: "ml-8",
                          "prepend-icon": "mdi-github"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" Github ")
                          ]),
                          _: 1
                        })
                      ])
                    ]),
                    createVNode(_component_ThemeToggler)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_v_container, { class: "h-100 d-flex justify-center" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "d-flex flex-column justify-center align-center h-100 hero" }, [
                    createVNode("h1", { class: "tagline" }, [
                      createTextVNode(" Start your project with "),
                      createVNode("span", { class: "vuetify3" }, "Vuetify 3"),
                      createTextVNode(" faster than ever ")
                    ]),
                    createVNode("p", { class: "text-muted py-8 description" }, " This template is opinionated and comes with a lot of features out of the box. It is meant to be a starting point for your project. "),
                    createVNode("div", { class: "d-flex justify-start w-100" }, [
                      createVNode(_component_v_btn, {
                        color: "primary",
                        to: "/about",
                        class: ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" GET STARTED ")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_v_btn, {
                        color: "secondary",
                        variant: "outlined",
                        href: "https://github.com/boussadjra/vuetify-3-template",
                        class: "ml-8",
                        "prepend-icon": "mdi-github"
                      }, {
                        default: withCtx(() => [
                          createTextVNode(" Github ")
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  createVNode(_component_ThemeToggler)
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_bd9f7ae0_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_1__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd9f7ae0"]]);
const __pages_import_0__ = () => import("./assets/Test.e6a05be8.js");
const __pages_import_2__ = () => import("./assets/About.155edc85.js");
const routes$1 = [{ "name": "Test", "path": "/test", "component": __pages_import_0__, "props": true }, { "name": "index", "path": "/", "component": __pages_import_1__, "props": true }, { "name": "About", "path": "/about", "component": __pages_import_2__, "props": true }];
const main$1 = "";
const materialdesignicons = "";
const lightTheme = {
  dark: false,
  colors: {
    background: "#efefef",
    surface: "#FFFFFF",
    primary: "#7743DB",
    "primary-darken-1": "#3B3486",
    secondary: "#ef476f",
    "secondary-darken-1": "#ed315d",
    error: "#B00020",
    info: "#4496F3",
    success: "#16DB93",
    warning: "#CB8C00"
  }
};
const darkTheme = {
  dark: true,
  colors: {
    background: "#181833",
    surface: "#181833",
    primary: "#7743DB",
    "primary-darken-1": "#3B3486",
    secondary: "#ef476f",
    "secondary-darken-1": "#ed315d",
    error: "#B00020",
    info: "#4496F3",
    success: "#16DB93",
    warning: "#CB8C00"
  }
};
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "lightTheme",
    themes: {
      lightTheme,
      darkTheme
    }
  }
});
const main = "";
const routes = setupLayouts(routes$1);
console.log("--------------------");
console.log("generatedRoutes", routes$1);
console.log("routes", routes);
console.log("--------------------");
const app = createApp(_sfc_main$3);
app.use(createPinia());
app.use(vuetify);
app.use(createHead());
app.use(
  createRouter({
    history: createWebHistory("/"),
    routes: routes$1
  })
);
app.mount("#app");
export {
  _export_sfc as _
};
