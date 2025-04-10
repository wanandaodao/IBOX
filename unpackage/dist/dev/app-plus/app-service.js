if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then(
      (value) => promise.resolve(callback()).then(() => value),
      (reason) => promise.resolve(callback()).then(() => {
        throw reason;
      })
    );
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global = uni.requireGlobal();
  ArrayBuffer = global.ArrayBuffer;
  Int8Array = global.Int8Array;
  Uint8Array = global.Uint8Array;
  Uint8ClampedArray = global.Uint8ClampedArray;
  Int16Array = global.Int16Array;
  Uint16Array = global.Uint16Array;
  Int32Array = global.Int32Array;
  Uint32Array = global.Uint32Array;
  Float32Array = global.Float32Array;
  Float64Array = global.Float64Array;
  BigInt64Array = global.BigInt64Array;
  BigUint64Array = global.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(vue) {
  "use strict";
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main$o = {
    __name: "index",
    setup(__props) {
      const toLogin = () => {
        uni.reLaunch({
          url: "/pages/login/login"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "status_bar" }, [
            vue.createCommentVNode(" 这里是状态栏 ")
          ]),
          vue.createElementVNode("view", { class: "login-img-box" }, [
            vue.createElementVNode("view", { class: "login-img1" }),
            vue.createElementVNode("view", { class: "login-img2" })
          ]),
          vue.createElementVNode("view", { class: "welcome-box" }, [
            vue.createElementVNode("view", { class: "title-box" }, [
              vue.createElementVNode("text", null, "Welcome To"),
              vue.createElementVNode("text", { class: "box" }, "BOX"),
              vue.createElementVNode("text", null, "Create and Sell your NTFs in 1 seconds")
            ])
          ]),
          vue.createElementVNode("button", { onClick: toLogin }, "开始")
        ]);
      };
    }
  };
  const PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-1cf27b2a"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/index/index.vue"]]);
  const _sfc_main$n = {
    __name: "login",
    setup(__props) {
      const toLoginElse = () => {
        uni.navigateTo({
          url: "/pages/register/register"
        });
      };
      const login = () => {
        uni.reLaunch({
          url: "/pages/home/home"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "status_bar" }, [
            vue.createCommentVNode(" 这里是状态栏 ")
          ]),
          vue.createElementVNode("view", { class: "img-box" }, [
            vue.createElementVNode("view", { class: "img1" }),
            vue.createElementVNode("view", { class: "img2" }),
            vue.createElementVNode("view", { class: "img3" })
          ]),
          vue.createElementVNode("view", { class: "phone-box" }, " 13541245612 "),
          vue.createElementVNode("view", {
            class: "use-other-phone",
            onClick: toLoginElse
          }, "其他手机登录"),
          vue.createElementVNode("button", {
            class: "login-button",
            onClick: login
          }, "登录"),
          vue.createElementVNode("view", { class: "notice" }, "未注册号码将自动注册账号"),
          vue.createElementVNode("view", { class: "confirm-box" }, [
            vue.createElementVNode("checkbox"),
            vue.createElementVNode("view", null, [
              vue.createElementVNode("span", null, "登录即同意"),
              vue.createElementVNode("span", { class: "constract" }, "《中国移动认证服务条款》和《用户协议》、《隐私政策》"),
              vue.createElementVNode("span", null, "并使用本机号码登录")
            ])
          ])
        ]);
      };
    }
  };
  const PagesLoginLogin = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-e4e4508d"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/login/login.vue"]]);
  const _sfc_main$m = {};
  function _sfc_render$d(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" 这里是状态栏 ")
      ]),
      vue.createElementVNode("view", { class: "img-box" }, [
        vue.createElementVNode("view", { class: "img1" }),
        vue.createElementVNode("view", { class: "img2" }),
        vue.createElementVNode("view", { class: "img3" })
      ]),
      vue.createElementVNode("view", { class: "register-box" }, [
        (vue.openBlock(), vue.createElementBlock("svg", {
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          vue.createElementVNode("path", {
            "fill-rule": "evenodd",
            "clip-rule": "evenodd",
            d: "M3.01732 8C3.01732 8 3.0037 8.16614 3.01098 8.24824C3 8.76331 3 9.34357 3 10V14C3 16.8284 3 18.2426 3.87868 19.1213C4.75736 20 6.17157 20 9 20H15C17.8284 20 19.2426 20 20.1213 19.1213C21 18.2426 21 16.8284 21 14V10C21 9.34357 21 8.76331 20.989 8.24824C20.9963 8.16614 20.9827 8 20.9827 8C20.9359 6.44655 20.7626 5.51998 20.1213 4.87868C19.2426 4 17.8284 4 15 4H9C6.17157 4 4.75736 4 3.87868 4.87868C3.23738 5.51998 3.06413 6.44655 3.01732 8ZM9 6H15C16.4708 6 17.3726 6.00425 18.0253 6.092C18.599 6.16913 18.6948 6.27883 18.7062 6.29185L18.7071 6.29289L18.7082 6.29383C18.7212 6.3052 18.8309 6.40098 18.908 6.97468C18.9509 7.29398 18.9739 7.67291 18.9861 8.1489C18.945 8.36744 18.8144 8.56178 18.622 8.682L14.65 11.1645C13.8592 11.6587 13.3301 11.988 12.8935 12.2015C12.4778 12.4047 12.2242 12.4623 12 12.4623C11.7758 12.4623 11.5222 12.4047 11.1065 12.2015C10.6699 11.988 10.1408 11.6587 9.35001 11.1645L5.378 8.682C5.18564 8.56178 5.05505 8.36744 5.01389 8.1489C5.02613 7.67291 5.04907 7.29398 5.092 6.97468C5.16913 6.40099 5.27883 6.3052 5.29185 6.29383L5.29289 6.29289L5.29383 6.29185C5.3052 6.27883 5.40099 6.16913 5.97468 6.092C6.62738 6.00425 7.52925 6 9 6ZM19 10.8042V14C19 15.4708 18.9958 16.3726 18.908 17.0253C18.8309 17.599 18.7212 17.6948 18.7082 17.7062L18.7071 17.7071L18.7062 17.7082C18.6948 17.7212 18.599 17.8309 18.0253 17.908C17.3726 17.9958 16.4708 18 15 18H9C7.52925 18 6.62738 17.9958 5.97468 17.908C5.40098 17.8309 5.3052 17.7212 5.29383 17.7082L5.29289 17.7071L5.29185 17.7062C5.27883 17.6948 5.16913 17.599 5.092 17.0253C5.00425 16.3726 5 15.4708 5 14V10.8042L8.33294 12.8873C9.06958 13.3478 9.68679 13.7335 10.228 13.9982C10.8007 14.2782 11.3638 14.4623 12 14.4623C12.6362 14.4623 13.1993 14.2782 13.772 13.9982C14.3132 13.7335 14.9304 13.3478 15.6671 12.8873L19 10.8042Z",
            fill: "#EAE9E9"
          })
        ])),
        vue.createElementVNode("input", {
          type: "number",
          placeholder: "电话号码"
        })
      ]),
      vue.createElementVNode("button", { class: "login-button" }, "登录")
    ]);
  }
  const PagesRegisterRegister = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$d], ["__scopeId", "data-v-bac4a35d"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/register/register.vue"]]);
  const _imports_0$4 = "/static/login-img3.png";
  const _sfc_main$l = {};
  function _sfc_render$c(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
      vue.createElementVNode("view", { class: "status_bar" }, [
        vue.createCommentVNode(" 这里是状态栏 ")
      ]),
      vue.createElementVNode("view", { class: "head-img" }, [
        vue.createElementVNode("image", {
          src: _imports_0$4,
          mode: "aspectFit"
        })
      ])
    ]);
  }
  const PagesCreatepocketCreatepocket = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$c], ["__scopeId", "data-v-310b04d3"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/createpocket/createpocket.vue"]]);
  const ON_SHOW = "onShow";
  function formatAppLog(type, filename, ...args) {
    if (uni.__log__) {
      uni.__log__(type, filename, ...args);
    } else {
      console[type].apply(console, [...args, filename]);
    }
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onShow = /* @__PURE__ */ createHook(ON_SHOW);
  const _imports_5$2 = "/static/home.png";
  const _imports_1$8 = "/static/home-choose.png";
  const _imports_6$1 = "/static/Category.png";
  const _imports_3$5 = "/static/Category-choose.png";
  const _imports_4$1 = "/static/profile.png";
  const _imports_1$7 = "/static/Search.png";
  const _imports_1$6 = "/static/notice.png";
  const _imports_2$5 = "/static/board.png";
  const _imports_3$4 = "/static/sideBar.png";
  const _imports_3$3 = "/static/activity.png";
  const _imports_5$1 = "/static/commodity.png";
  const _sfc_main$k = {
    __name: "home-home",
    setup(__props) {
      const sellBoxId = vue.ref("sellBox");
      const targetId = vue.ref(null);
      const scrollY = vue.ref(true);
      const scrollViewHeight = vue.ref(0);
      const propHeight = vue.ref(0);
      const showProp = vue.ref(false);
      const typeIndex = vue.ref(0);
      const sortIndex = vue.ref(-1);
      const selectedSortIcon = vue.ref(-1);
      const popupType = vue.ref("category");
      vue.onBeforeMount(() => {
        const systemInfo = uni.getSystemInfoSync();
        const windowHeight = systemInfo.windowHeight;
        const subtractHeight = uni.upx2px(376);
        const other = uni.upx2px(325);
        scrollViewHeight.value = windowHeight - subtractHeight;
        propHeight.value = windowHeight - other;
      });
      const toSellBox = () => {
        sortIndex.value = 0;
        popupType.value = "category";
        if (!showProp.value) {
          targetId.value = sellBoxId.value;
        }
        setTimeout(() => {
          targetId.value = null;
        }, 300);
        if (!showProp.value) {
          setTimeout(() => {
            showProp.value = true;
            scrollY.value = false;
          }, 300);
        } else {
          showProp.value = false;
          scrollY.value = true;
          sortIndex.value = -1;
        }
      };
      const toStatusBox = () => {
        sortIndex.value = 1;
        popupType.value = "status";
        if (!showProp.value) {
          targetId.value = sellBoxId.value;
        }
        setTimeout(() => {
          targetId.value = null;
        }, 300);
        if (!showProp.value) {
          setTimeout(() => {
            showProp.value = true;
            scrollY.value = false;
          }, 300);
        } else {
          showProp.value = false;
          scrollY.value = true;
          sortIndex.value = -1;
        }
      };
      const toMessage = () => {
        uni.navigateTo({
          url: "/pages/message/message"
        });
      };
      const toAnnouncement = () => {
        uni.navigateTo({
          url: "/pages/announcement/announcement"
        });
      };
      const toAnnouncementInfo = () => {
        uni.navigateTo({
          url: "/pages/announcementInfo/announcementInfo"
        });
      };
      const toLottery = () => {
        uni.navigateTo({
          url: "/pages/lottery/lottery"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "wrap" }, [
          vue.createElementVNode("view", { class: "status_bar" }),
          vue.createElementVNode("view", { class: "head" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createCommentVNode(' <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<path fill-rule="evenodd" clip-rule="evenodd"\n						d="M13.7602 13.9982C12.5645 15.1354 10.9471 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667C15.8333 10.9471 15.1354 12.5645 13.9982 13.7602C14.7077 13.8187 15.3767 14.1267 15.8839 14.6339L17.2727 16.0227C17.4182 16.1682 17.5 16.3656 17.5 16.5714V16.6161C17.5 16.6631 17.5 16.6865 17.4991 16.7064C17.4786 17.1354 17.1354 17.4786 16.7064 17.4991C16.6865 17.5 16.6631 17.5 16.6161 17.5H16.5714C16.3656 17.5 16.1682 17.4182 16.0227 17.2727L14.6339 15.8839C14.1267 15.3767 13.8187 14.7077 13.7602 13.9982ZM14.1667 9.16667C14.1667 11.9281 11.9281 14.1667 9.16667 14.1667C6.40524 14.1667 4.16667 11.9281 4.16667 9.16667C4.16667 6.40524 6.40524 4.16667 9.16667 4.16667C11.9281 4.16667 14.1667 6.40524 14.1667 9.16667Z"\n						fill="#C7C7C7" />\n				</svg> '),
              vue.createElementVNode("image", {
                src: _imports_1$7,
                mode: ""
              }),
              vue.createElementVNode("input", {
                type: "text",
                placeholder: "搜索商品"
              })
            ]),
            vue.createElementVNode("view", {
              onClick: toMessage,
              class: "right"
            }, [
              vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<path fill-rule="evenodd" clip-rule="evenodd"\n						d="M20.8018 17.1316C20.6104 17.6724 20.1395 18.0868 19.5483 18.2096C18.3079 18.4675 17.0563 18.661 15.7992 18.7902C15.1017 20.1005 13.6624 21 12 21C10.3377 21 8.89837 20.1005 8.20088 18.7902C6.94368 18.661 5.69209 18.4675 4.45169 18.2096C3.86056 18.0868 3.38965 17.6724 3.19822 17.1316C2.73584 15.8252 3.09686 14.3849 4.13077 13.4112L4.74318 12.8344C5.29501 12.3147 5.52549 11.5605 5.3562 10.8431C4.41055 6.83532 7.64077 2.99997 12 2.99997C16.3593 2.99997 19.5895 6.83532 18.6438 10.8431C18.4745 11.5605 18.705 12.3147 19.2568 12.8344L19.8693 13.4112C20.9032 14.3849 21.2642 15.8252 20.8018 17.1316ZM17.7552 14.2486L18.3676 14.8254C18.7827 15.2163 18.9567 15.7743 18.8416 16.3075C14.3311 17.2106 9.66898 17.2106 5.15845 16.3075C5.04333 15.7743 5.21735 15.2163 5.63239 14.8254L6.2448 14.2486C7.31393 13.2417 7.75484 11.7891 7.42924 10.4092C6.77477 7.6355 9.0156 4.99997 12 4.99997C14.9844 4.99997 17.2253 7.6355 16.5708 10.4092C16.2452 11.7891 16.6861 13.2417 17.7552 14.2486Z"\n						fill="#171718" />\n				</svg> '),
              vue.createElementVNode("image", {
                src: _imports_1$6,
                mode: ""
              })
            ])
          ]),
          vue.createElementVNode("scroll-view", {
            "show-scrollbar": false,
            onScroll: _cache[6] || (_cache[6] = (...args) => _ctx.scrollHandler && _ctx.scrollHandler(...args)),
            "scroll-into-view": targetId.value,
            "scroll-with-animation": "true",
            style: vue.normalizeStyle({ height: `${scrollViewHeight.value}px` }),
            "scroll-y": scrollY.value,
            class: "wrap-content"
          }, [
            vue.createElementVNode("view", { class: "board-box-wrap" }, [
              vue.createElementVNode("view", { class: "board-box" }, [
                vue.createElementVNode("image", {
                  onClick: toAnnouncementInfo,
                  src: _imports_2$5,
                  mode: "aspectFill"
                }),
                vue.createElementVNode("view", { class: "text-box" }, [
                  vue.createElementVNode("view", { class: "left" }, [
                    vue.createElementVNode("text", null, "公告"),
                    vue.createElementVNode("text", null, "携手iZen数字原生，共赴蛇年数藏新盛宴！")
                  ]),
                  vue.createElementVNode("view", { class: "right" }, [
                    vue.createElementVNode("image", {
                      onClick: toAnnouncement,
                      src: _imports_3$4,
                      mode: "aspectFit"
                    })
                  ])
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "activity-box" }, [
              vue.createElementVNode("view", { class: "activity-box-wrap" }, [
                vue.createElementVNode("view", { class: "activity-list" }, [
                  vue.createElementVNode("image", { src: _imports_3$3 }),
                  vue.createElementVNode("view", null, "合成中心")
                ]),
                vue.createElementVNode("view", {
                  onClick: toLottery,
                  class: "activity-list"
                }, [
                  vue.createElementVNode("image", { src: _imports_3$3 }),
                  vue.createElementVNode("view", null, "抽奖活动")
                ]),
                vue.createElementVNode("view", { class: "activity-list" }, [
                  vue.createElementVNode("image", { src: _imports_3$3 }),
                  vue.createElementVNode("view", null, "龙晶")
                ]),
                vue.createElementVNode("view", { class: "activity-list" }, [
                  vue.createElementVNode("image", { src: _imports_3$3 }),
                  vue.createElementVNode("view", null, "在线客服")
                ]),
                vue.createElementVNode("view", { class: "activity-list" }, [
                  vue.createElementVNode("image", { src: _imports_3$3 }),
                  vue.createElementVNode("view", null, "识别码")
                ])
              ])
            ]),
            vue.createElementVNode("view", { class: "activity-box1" }, [
              vue.createElementVNode("view", { class: "left" }, [
                vue.createElementVNode("swiper", {
                  "indicator-dots": true,
                  autoplay: true,
                  interval: 3e3,
                  duration: 1e3,
                  circular: true
                }, [
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("image", {
                      src: _imports_2$5,
                      mode: "aspectFill"
                    })
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("image", {
                      src: _imports_3$3,
                      mode: "aspectFill"
                    })
                  ]),
                  vue.createElementVNode("swiper-item", null, [
                    vue.createElementVNode("image", {
                      src: _imports_2$5,
                      mode: "aspectFill"
                    })
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "right" }, [
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", null, "市场"),
                  vue.createElementVNode("text", null, "板块涨幅一览无余")
                ]),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", null, "今日热榜"),
                  vue.createElementVNode("text", null, "每天24点更新")
                ]),
                vue.createElementVNode("view", null, [
                  vue.createElementVNode("text", null, "数字原生"),
                  vue.createElementVNode("text", null, "下载链接")
                ])
              ])
            ]),
            vue.createElementVNode("view", {
              id: sellBoxId.value,
              class: "sell-box"
            }, [
              vue.createElementVNode("text", { style: { "font-size": "24rpx", "height": "48rpx", "display": "block" } }, "发售记录"),
              vue.createElementVNode("view", { class: "sort-box" }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createElementVNode(
                    "view",
                    {
                      class: vue.normalizeClass([{ choose: sortIndex.value == 0 }, "sort-icon-container"]),
                      onClick: toSellBox
                    },
                    [
                      vue.createElementVNode("text", null, "类别"),
                      vue.createElementVNode("view", { class: "sort-icon-down" })
                    ],
                    2
                    /* CLASS */
                  ),
                  vue.createElementVNode(
                    "view",
                    {
                      onClick: toStatusBox,
                      class: vue.normalizeClass([{ choose: sortIndex.value == 1 }, "sort-icon-container"])
                    },
                    [
                      vue.createElementVNode("text", null, "售卖状态"),
                      vue.createElementVNode("view", { class: "sort-icon-down" })
                    ],
                    2
                    /* CLASS */
                  )
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", {
                    style: { "background-color": "#fff" },
                    class: "sort-icon-container",
                    onClick: _cache[2] || (_cache[2] = ($event) => _ctx.toggleSortIcon("price"))
                  }, [
                    vue.createElementVNode("text", null, "价格排序"),
                    vue.createElementVNode("view", { class: "sort-icon-box" }, [
                      vue.createElementVNode(
                        "view",
                        {
                          onClick: _cache[0] || (_cache[0] = ($event) => selectedSortIcon.value = 0),
                          style: vue.normalizeStyle({ borderBottom: selectedSortIcon.value == 0 ? "rgb(161, 184, 243) solid 8rpx" : "rgb(218, 218, 218) solid 8rpx" }),
                          class: "sort-icon-up"
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      vue.createElementVNode(
                        "view",
                        {
                          onClick: _cache[1] || (_cache[1] = ($event) => selectedSortIcon.value = 1),
                          style: vue.normalizeStyle({ borderTop: selectedSortIcon.value == 1 ? "rgb(161, 184, 243) solid 8rpx" : "rgb(218, 218, 218) solid 8rpx" }),
                          class: "sort-icon-down"
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ]),
                  vue.createElementVNode("view", {
                    style: { "background-color": "#fff" },
                    class: "sort-icon-container",
                    onClick: _cache[5] || (_cache[5] = ($event) => _ctx.toggleSortIcon("status"))
                  }, [
                    vue.createElementVNode("text", null, "售卖状态"),
                    vue.createElementVNode("view", { class: "sort-icon-box" }, [
                      vue.createElementVNode(
                        "view",
                        {
                          onClick: _cache[3] || (_cache[3] = ($event) => selectedSortIcon.value = 2),
                          style: vue.normalizeStyle({ borderBottom: selectedSortIcon.value == 2 ? "rgb(161, 184, 243) solid 8rpx" : "rgb(218, 218, 218) solid 8rpx" }),
                          class: "sort-icon-up"
                        },
                        null,
                        4
                        /* STYLE */
                      ),
                      vue.createElementVNode(
                        "view",
                        {
                          onClick: _cache[4] || (_cache[4] = ($event) => selectedSortIcon.value = 3),
                          style: vue.normalizeStyle({ borderTop: selectedSortIcon.value == 3 ? "rgb(161, 184, 243) solid 8rpx" : "rgb(218, 218, 218) solid 8rpx" }),
                          class: "sort-icon-down"
                        },
                        null,
                        4
                        /* STYLE */
                      )
                    ])
                  ])
                ])
              ]),
              vue.createElementVNode("view", { class: "commodity-box" }, [
                (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList(5, (i) => {
                    return vue.createElementVNode("view", { class: "commodity-card" }, [
                      vue.createElementVNode("view", { class: "commodity-status" }, " 暂停售卖 "),
                      vue.createElementVNode("image", { src: _imports_5$1 }),
                      vue.createElementVNode("text", { style: { "font-weight": "bole", "font-size": "28rpx" } }, "猪猪侠超能宝箱"),
                      vue.createElementVNode("view", { class: "commodity-info-box" }, [
                        vue.createElementVNode("view", null, " 发行20000 "),
                        vue.createElementVNode("view", null, " 流通6712 ")
                      ]),
                      vue.createElementVNode("text", { style: { "font-weight": "bold", "font-size": "12rpx" } }, "￥"),
                      vue.createElementVNode("text", { style: { "font-weight": "bold", "font-size": "30rpx" } }, "99")
                    ]);
                  }),
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ], 8, ["id"])
          ], 44, ["scroll-into-view", "scroll-y"]),
          showProp.value ? (vue.openBlock(), vue.createElementBlock(
            "view",
            {
              key: 0,
              style: vue.normalizeStyle({ height: `${propHeight.value}px` }),
              class: "prop"
            },
            [
              vue.createElementVNode("view", { class: "propBox" }, [
                popupType.value === "category" ? (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 0 },
                  [
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[7] || (_cache[7] = ($event) => typeIndex.value = 0),
                        class: vue.normalizeClass({ choose: typeIndex.value == 0 })
                      },
                      " 全部 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[8] || (_cache[8] = ($event) => typeIndex.value = 1),
                        class: vue.normalizeClass({ choose: typeIndex.value == 1 })
                      },
                      " 盲盒 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[9] || (_cache[9] = ($event) => typeIndex.value = 2),
                        class: vue.normalizeClass({ choose: typeIndex.value == 2 })
                      },
                      " 藏品 ",
                      2
                      /* CLASS */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                )) : (vue.openBlock(), vue.createElementBlock(
                  vue.Fragment,
                  { key: 1 },
                  [
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[10] || (_cache[10] = ($event) => typeIndex.value = 0),
                        class: vue.normalizeClass({ choose: typeIndex.value == 0 })
                      },
                      " 全部 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[11] || (_cache[11] = ($event) => typeIndex.value = 1),
                        class: vue.normalizeClass({ choose: typeIndex.value == 1 })
                      },
                      " 即将开售 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[12] || (_cache[12] = ($event) => typeIndex.value = 2),
                        class: vue.normalizeClass({ choose: typeIndex.value == 2 })
                      },
                      " 售卖中 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[13] || (_cache[13] = ($event) => typeIndex.value = 3),
                        class: vue.normalizeClass({ choose: typeIndex.value == 3 })
                      },
                      " 暂停售卖 ",
                      2
                      /* CLASS */
                    ),
                    vue.createElementVNode(
                      "view",
                      {
                        onClick: _cache[14] || (_cache[14] = ($event) => typeIndex.value = 4),
                        class: vue.normalizeClass({ choose: typeIndex.value == 4 })
                      },
                      " 已售罄 ",
                      2
                      /* CLASS */
                    )
                  ],
                  64
                  /* STABLE_FRAGMENT */
                ))
              ])
            ],
            4
            /* STYLE */
          )) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  const homeHomeVue = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["__scopeId", "data-v-8bba771e"], ["__file", "D:/a1875/Desktop/IBOX-master/components/home-home.vue"]]);
  const _imports_0$3 = "/static/avatar.png";
  const _imports_1$5 = "/static/share.png";
  const _sfc_main$j = {
    __name: "home-Box",
    setup(__props) {
      const scrollViewHeight = vue.ref(0);
      vue.onBeforeMount(() => {
        const systemInfo = uni.getSystemInfoSync();
        const windowHeight = systemInfo.windowHeight;
        const subtractHeight = uni.upx2px(336);
        uni.upx2px(325);
        scrollViewHeight.value = windowHeight - subtractHeight;
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "wrap" }, [
          vue.createElementVNode("view", { class: "side-bars" }),
          vue.createElementVNode("view", { class: "head" }, " bobo有话说 "),
          vue.createElementVNode(
            "scroll-view",
            {
              "scroll-y": "true",
              style: vue.normalizeStyle({ height: `${scrollViewHeight.value}px` }),
              class: "box-content",
              "show-scrollbar": false
            },
            [
              (vue.openBlock(), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(5, (i) => {
                  return vue.createElementVNode("view", { class: "card" }, [
                    vue.createElementVNode("view", { class: "left" }, [
                      vue.createElementVNode("image", { src: _imports_0$3 })
                    ]),
                    vue.createElementVNode("view", { class: "right" }, [
                      vue.createElementVNode("view", { class: "text-title1" }, [
                        vue.createElementVNode("text", null, " 针对部分直播团体警告 ")
                      ]),
                      vue.createElementVNode("view", { class: "text-content" }, [
                        vue.createElementVNode("text", null, " 针对恶意使用平台相关运营人员信息，以平台的名义进行承诺收益、承诺回购、非法集资、非法吸收公共存款；为了非法目的的进行拉人头，要求缴纳awdadaw ")
                      ]),
                      vue.createElementVNode("image", { src: _imports_2$5 }),
                      vue.createElementVNode("view", { class: "right-bottom" }, [
                        vue.createElementVNode("text", null, "昨天 20:19"),
                        vue.createElementVNode("view", null, [
                          vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n							<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7765 3.10223C17.1761 2.67341 15.531 3.62316 15.1022 5.22356L14.7423 6.56695L9.95409 9.30305C9.22264 8.50232 8.16998 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C8.16998 16 9.22264 15.4977 9.95409 14.697L14.7423 17.4331L15.1022 18.7764C15.531 20.3768 17.1761 21.3266 18.7765 20.8978C20.3769 20.4689 21.3266 18.8239 20.8978 17.2235C20.469 15.6231 18.8239 14.6734 17.2235 15.1022L15.5018 15.5636L10.8915 12.9291C10.9625 12.631 11 12.3199 11 12C11 11.6801 10.9625 11.369 10.8915 11.0709L15.5018 8.43644L17.2235 8.89779C18.8239 9.32661 20.469 8.37687 20.8978 6.77647C21.3266 5.17607 20.3769 3.53106 18.7765 3.10223ZM16.7753 6.70712L17.7412 6.96594C18.2746 7.10888 18.823 6.7923 18.9659 6.25883C19.1089 5.72537 18.7923 5.17703 18.2588 5.03409C17.7254 4.89114 17.177 5.20773 17.0341 5.74119L16.7753 6.70712ZM5 12C5 13.1046 5.89543 14 7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12ZM17.7412 17.0341L16.7753 17.2929L17.0341 18.2588C17.177 18.7923 17.7254 19.1089 18.2588 18.9659C18.7923 18.823 19.1089 18.2746 18.9659 17.7412C18.823 17.2077 18.2746 16.8911 17.7412 17.0341Z" fill="#444"/>\n							</svg> '),
                          vue.createElementVNode("image", {
                            src: _imports_1$5,
                            mode: ""
                          }),
                          vue.createElementVNode("text", null, "分享")
                        ])
                      ])
                    ])
                  ]);
                }),
                64
                /* STABLE_FRAGMENT */
              ))
            ],
            4
            /* STYLE */
          )
        ]);
      };
    }
  };
  const homeBoxVue = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-44bb2758"], ["__file", "D:/a1875/Desktop/IBOX-master/components/home-Box.vue"]]);
  const _sfc_main$i = {
    __name: "home",
    setup(__props) {
      const tabbarIndex = vue.ref(0);
      const toProfile = () => {
        formatAppLog("log", "at pages/home/home.vue:45", 111);
        uni.navigateTo({
          url: "/pages/profile/profile",
          animationType: "none",
          animationDuration: 0
        });
      };
      onShow(() => {
        const isFromNavigation = uni.getStorageSync("isFromNavigation");
        if (isFromNavigation) {
          const index = uni.getStorageSync("tabbarIndex");
          if (index !== void 0 && index !== null) {
            tabbarIndex.value = index;
          }
          uni.removeStorageSync("tabbarIndex");
          uni.removeStorageSync("isFromNavigation");
        } else {
          if (tabbarIndex.value === void 0) {
            tabbarIndex.value = 0;
          }
        }
      });
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          tabbarIndex.value == 0 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "home"
          }, [
            vue.createVNode(homeHomeVue)
          ])) : vue.createCommentVNode("v-if", true),
          tabbarIndex.value == 1 ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "box"
          }, [
            vue.createVNode(homeBoxVue)
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "tabbar" }, [
            vue.createElementVNode("view", {
              onClick: _cache[0] || (_cache[0] = ($event) => tabbarIndex.value = 0)
            }, [
              tabbarIndex.value != 0 ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: _imports_5$2,
                mode: ""
              })) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value == 0 ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                src: _imports_1$8,
                mode: ""
              })) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value != 0 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "Home")) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value == 0 ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 3,
                style: { "color": "black" }
              }, "Home")) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", {
              onClick: _cache[1] || (_cache[1] = ($event) => tabbarIndex.value = 1)
            }, [
              tabbarIndex.value != 1 ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 0,
                src: _imports_6$1,
                mode: ""
              })) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value == 1 ? (vue.openBlock(), vue.createElementBlock("image", {
                key: 1,
                src: _imports_3$5,
                mode: ""
              })) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value != 1 ? (vue.openBlock(), vue.createElementBlock("text", { key: 2 }, "Box超话")) : vue.createCommentVNode("v-if", true),
              tabbarIndex.value == 1 ? (vue.openBlock(), vue.createElementBlock("text", {
                key: 3,
                style: { "color": "black" }
              }, "Box超话")) : vue.createCommentVNode("v-if", true)
            ]),
            vue.createElementVNode("view", { onClick: toProfile }, [
              vue.createElementVNode("image", {
                src: _imports_4$1,
                mode: ""
              }),
              vue.createElementVNode("text", null, "Profile")
            ])
          ])
        ]);
      };
    }
  };
  const PagesHomeHome = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-07e72d3c"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/home/home.vue"]]);
  const _imports_0$2 = "/static/arrow-left.png";
  const _imports_1$4 = "/static/arrow-right.png";
  const _sfc_main$h = {
    __name: "message",
    setup(__props) {
      const toMessageInfo = (title) => {
        uni.navigateTo({
          url: `/pages/messageInfo/messageInfo?title=${title}`
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createCommentVNode(" 导航条 "),
          vue.createElementVNode("view", { class: "side-bars" }),
          vue.createElementVNode("view", { class: "nav-bar" }, [
            vue.createElementVNode("view", {
              class: "back-icon",
              onClick: goBack
            }, [
              vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<path fill-rule="evenodd" clip-rule="evenodd"\n						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"\n						fill="#171718" />\n				</svg> '),
              vue.createElementVNode("image", {
                src: _imports_0$2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "title" }, "消息")
          ]),
          vue.createCommentVNode(" 消息列表 "),
          vue.createElementVNode("view", { class: "message-list" }, [
            vue.createCommentVNode(" 系统消息 "),
            vue.createElementVNode("view", {
              onClick: _cache[0] || (_cache[0] = ($event) => toMessageInfo("系统消息")),
              class: "message-item"
            }, [
              vue.createElementVNode("view", { class: "message-icon" }, [
                vue.createElementVNode("image", {
                  src: _imports_0$3,
                  mode: "aspectFill"
                })
              ]),
              vue.createElementVNode("view", { class: "message-content" }, [
                vue.createElementVNode("text", { class: "message-title" }, "系统消息")
              ]),
              vue.createElementVNode("view", { class: "message-arrow" }, [
                vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n						<path fill-rule="evenodd" clip-rule="evenodd"\n							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"\n							fill="#171718" />\n					</svg> '),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: ""
                })
              ])
            ]),
            vue.createCommentVNode(" 平台消息 "),
            vue.createElementVNode("view", {
              onClick: _cache[1] || (_cache[1] = ($event) => toMessageInfo("平台消息")),
              class: "message-item"
            }, [
              vue.createElementVNode("view", { class: "message-icon" }, [
                vue.createElementVNode("image", {
                  src: _imports_3$3,
                  mode: "aspectFill"
                })
              ]),
              vue.createElementVNode("view", { class: "message-content" }, [
                vue.createElementVNode("text", { class: "message-title" }, "平台消息")
              ]),
              vue.createElementVNode("view", { class: "message-arrow" }, [
                vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n						<path fill-rule="evenodd" clip-rule="evenodd"\n							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"\n							fill="#171718" />\n					</svg> '),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: ""
                })
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesMessageMessage = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-4c1b26cf"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/message/message.vue"]]);
  const _imports_1$3 = "/static/message-empty.png";
  const _sfc_main$g = {
    __name: "messageInfo",
    setup(__props) {
      const messageTitle = vue.ref("");
      vue.onMounted(() => {
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        const options = currentPage.$page.options;
        messageTitle.value = options.title || "消息";
      });
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "status-bars" }),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createElementVNode("view", {
                class: "back-icon",
                onClick: goBack
              }, [
                vue.createCommentVNode(" 这里预留svg图标位置 "),
                vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n						<path fill-rule="evenodd" clip-rule="evenodd"\n							d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"\n							fill="#171718" />\n					</svg> '),
                vue.createElementVNode("image", {
                  src: _imports_0$2,
                  mode: ""
                })
              ])
            ]),
            vue.createElementVNode("view", { class: "center" }, [
              vue.createElementVNode(
                "text",
                { class: "title" },
                vue.toDisplayString(messageTitle.value),
                1
                /* TEXT */
              )
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createElementVNode("text", { class: "read-all" }, "一键已读")
            ])
          ]),
          vue.createElementVNode("view", { class: "empty-container" }, [
            vue.createElementVNode("image", {
              class: "empty-image",
              src: _imports_1$3,
              mode: "aspectFit"
            }),
            vue.createElementVNode("text", { class: "empty-text" }, "暂无消息")
          ])
        ]);
      };
    }
  };
  const PagesMessageInfoMessageInfo = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-64958264"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/messageInfo/messageInfo.vue"]]);
  const _sfc_main$f = {
    __name: "announcement",
    setup(__props) {
      const activeTab = vue.ref("official");
      const activeCategory = vue.ref("all");
      const currentCategoryIndex = vue.ref(0);
      const scrollLeft = vue.ref(0);
      const scrollHeight = vue.ref("0px");
      const scrollHeight2 = vue.ref("0px");
      const calculateScrollHeight = () => {
        const systemInfo = uni.getSystemInfoSync();
        const windowHeight = systemInfo.windowHeight;
        const height = windowHeight - systemInfo.statusBarHeight - uni.upx2px(380);
        scrollHeight.value = height + "px";
        scrollHeight2.value = height + 112 + "px";
      };
      vue.onMounted(() => {
        calculateScrollHeight();
      });
      const announcementCategories = vue.ref([
        { id: "all", name: "全部" },
        { id: "up", name: "上新公告" },
        { id: "synthesis", name: "合成公告" },
        { id: "retail", name: "零售公告" },
        { id: "airdrop", name: "空投公告" },
        { id: "activity", name: "活动公告" }
      ]);
      const newsCategories = vue.ref([
        { id: "company", name: "公司新闻" },
        { id: "industry", name: "行业资讯" }
      ]);
      const currentCategories = vue.computed(() => {
        return activeTab.value === "official" ? announcementCategories.value : newsCategories.value;
      });
      const announcements = vue.ref([
        {
          type: "up",
          tagName: "上新公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "up"
        },
        {
          type: "synthesis",
          tagName: "合成公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "synthesis"
        },
        {
          type: "retail",
          tagName: "零售公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "retail"
        },
        {
          type: "airdrop",
          tagName: "空投公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "airdrop"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        },
        {
          type: "activity",
          tagName: "活动公告",
          title: "[IBox官方公告] 商品《近排铁衣娃雪色》开启发售",
          time: "2025-04-07 21:45:22",
          category: "activity"
        }
        // 可以添加更多公告数据
      ]);
      const news = vue.ref([
        {
          type: "industry",
          tagName: "行业资讯",
          title: "IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式",
          time: "2025-03-10 16:00:48",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...",
          time: "2025-03-08 11:10:03",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...",
          time: "2025-03-04 10:48:36",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒推出《精锐侠》，开启数字藏品新玩法！",
          time: "2025-03-02 17:24:31",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式",
          time: "2025-03-10 16:00:48",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...",
          time: "2025-03-08 11:10:03",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...",
          time: "2025-03-04 10:48:36",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒推出《精锐侠》，开启数字藏品新玩法！",
          time: "2025-03-02 17:24:31",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式",
          time: "2025-03-10 16:00:48",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...",
          time: "2025-03-08 11:10:03",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...",
          time: "2025-03-04 10:48:36",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒推出《精锐侠》，开启数字藏品新玩法！",
          time: "2025-03-02 17:24:31",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "IBox链盒获得数字藏品经营批准证书，探索数字藏品拍卖新模式",
          time: "2025-03-10 16:00:48",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒手手画艺术家张若桥，带你领略千年古都长安的...",
          time: "2025-03-08 11:10:03",
          category: "company",
          image: "/static/board.png"
        },
        {
          type: "industry",
          tagName: "行业资讯",
          title: "知名街道艺术家齐兴华力作《猛虎回头》上线IBox链盒，深受用户...",
          time: "2025-03-04 10:48:36",
          category: "industry",
          image: "/static/board.png"
        },
        {
          type: "company",
          tagName: "公司新闻",
          title: "IBox链盒推出《精锐侠》，开启数字藏品新玩法！",
          time: "2025-03-02 17:24:31",
          category: "company",
          image: "/static/board.png"
        }
      ]);
      const getAnnouncementsByCategory = (category) => {
        if (category === "all") {
          return announcements.value;
        }
        return announcements.value.filter((item) => item.category === category);
      };
      const getNewsByCategory = (category) => {
        if (category === "all") {
          return news.value;
        }
        return news.value.filter((item) => item.category === category);
      };
      const switchTab = (tab) => {
        activeTab.value = tab;
        if (tab === "news") {
          activeCategory.value = "company";
          currentCategoryIndex.value = 0;
        } else if (tab === "official") {
          activeCategory.value = "all";
          currentCategoryIndex.value = 0;
        } else {
          activeCategory.value = "all";
          currentCategoryIndex.value = 0;
        }
        scrollLeft.value = 0;
      };
      const switchCategory = (category, index) => {
        activeCategory.value = category;
        currentCategoryIndex.value = index;
        const categoryElement = document.getElementById("category-" + category);
        if (categoryElement) {
          const offsetLeft = categoryElement.offsetLeft;
          const elementWidth = categoryElement.offsetWidth;
          const scrollViewWidth = 375;
          scrollLeft.value = offsetLeft - scrollViewWidth / 2 + elementWidth / 2;
        }
      };
      const onSwiperChange = (e) => {
        const index = e.detail.current;
        const category = currentCategories.value[index];
        if (category) {
          activeCategory.value = category.id;
          switchCategory(category.id, index);
        }
      };
      const onSwiperTransition = (e) => {
      };
      const goBack = () => {
        uni.navigateTo({
          url: "/pages/home/home"
        });
      };
      const exposureList = vue.ref([
        {
          userName: "匿名用户",
          avatar: "/static/avatar.png",
          time: "2025-04-01 10:23",
          title: "选通投诉格式如图",
          image: "/static/board.png",
          isResolved: true
        },
        {
          userName: "人心不足老爷",
          avatar: "/static/avatar.png",
          time: "2025-03-28 23:04",
          title: "热狗来也当初切?",
          image: "/static/board.png",
          isResolved: false
        },
        {
          userName: "人心不足老爷",
          avatar: "/static/avatar.png",
          time: "2025-03-28 23:04",
          title: "热狗来也当初切?",
          image: "/static/board.png",
          isResolved: false
        },
        {
          userName: "人心不足老爷",
          avatar: "/static/avatar.png",
          time: "2025-03-28 23:04",
          title: "热狗来也当初切?",
          image: "/static/board.png",
          isResolved: false
        },
        {
          userName: "人心不足老爷",
          avatar: "/static/avatar.png",
          time: "2025-03-28 23:04",
          title: "热狗来也当初切?",
          image: "/static/board.png",
          isResolved: false
        }
      ]);
      const handleAddExposure = () => {
        formatAppLog("log", "at pages/announcement/announcement.vue:500", "添加曝光");
      };
      const goToAnnouncementInfo = (item) => {
        uni.navigateTo({
          url: `/pages/announcementInfo/announcementInfo?type=${item.type}&tagName=${item.tagName}`
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "side-bars" }),
          vue.createElementVNode("view", { class: "nav-bar" }, [
            vue.createElementVNode("view", {
              class: "back-icon",
              onClick: goBack
            }, [
              vue.createCommentVNode(" 返回按钮SVG将在后续添加 "),
              vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<path fill-rule="evenodd" clip-rule="evenodd"\n						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"\n						fill="#171718" />\n				</svg> '),
              vue.createElementVNode("image", {
                src: _imports_0$2,
                mode: ""
              })
            ]),
            vue.createElementVNode("view", { class: "tab-container" }, [
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["tab-item", { active: activeTab.value === "official" }]),
                  onClick: _cache[0] || (_cache[0] = ($event) => switchTab("official"))
                },
                " 官方公告 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["tab-item", { active: activeTab.value === "news" }]),
                  onClick: _cache[1] || (_cache[1] = ($event) => switchTab("news"))
                },
                " 新闻中心 ",
                2
                /* CLASS */
              ),
              vue.createElementVNode(
                "view",
                {
                  class: vue.normalizeClass(["tab-item", { active: activeTab.value === "update" }]),
                  onClick: _cache[2] || (_cache[2] = ($event) => switchTab("update"))
                },
                " 运营爆光 ",
                2
                /* CLASS */
              )
            ])
          ]),
          activeTab.value !== "update" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "search-box"
          }, [
            vue.createElementVNode("input", {
              type: "text",
              placeholder: "请输入搜索关键词",
              class: "search-input"
            })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "tab-content" }, [
            activeTab.value !== "update" ? (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 0 },
              [
                vue.createElementVNode("scroll-view", {
                  class: "category-tabs",
                  "scroll-x": "true",
                  "scroll-left": scrollLeft.value,
                  "show-scrollbar": false,
                  "scroll-with-animation": ""
                }, [
                  vue.createElementVNode("view", { class: "category-tabs-content" }, [
                    (vue.openBlock(true), vue.createElementBlock(
                      vue.Fragment,
                      null,
                      vue.renderList(currentCategories.value, (item, index) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          class: vue.normalizeClass(["category-item", { active: activeCategory.value === item.id }]),
                          key: index,
                          id: "category-" + item.id,
                          onClick: ($event) => switchCategory(item.id, index)
                        }, vue.toDisplayString(item.name), 11, ["id", "onClick"]);
                      }),
                      128
                      /* KEYED_FRAGMENT */
                    ))
                  ])
                ], 8, ["scroll-left"]),
                vue.createElementVNode("swiper", {
                  class: "announcement-swiper",
                  style: vue.normalizeStyle({ height: scrollHeight.value }),
                  current: currentCategoryIndex.value,
                  onChange: onSwiperChange,
                  onTransition: onSwiperTransition
                }, [
                  (vue.openBlock(true), vue.createElementBlock(
                    vue.Fragment,
                    null,
                    vue.renderList(currentCategories.value, (category, index) => {
                      return vue.openBlock(), vue.createElementBlock("swiper-item", { key: index }, [
                        vue.createElementVNode("scroll-view", {
                          class: "announcement-scroll",
                          "scroll-y": "true",
                          "show-scrollbar": false
                        }, [
                          vue.createElementVNode(
                            "view",
                            {
                              style: vue.normalizeStyle({ height: scrollHeight.value }),
                              class: "announcement-list"
                            },
                            [
                              activeTab.value === "official" ? (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                { key: 0 },
                                vue.renderList(getAnnouncementsByCategory(category.id), (item, itemIndex) => {
                                  return vue.openBlock(), vue.createElementBlock("view", {
                                    class: "announcement-item",
                                    key: itemIndex,
                                    onClick: ($event) => goToAnnouncementInfo(item)
                                  }, [
                                    vue.createElementVNode(
                                      "view",
                                      { class: "announcement-content" },
                                      vue.toDisplayString(item.title),
                                      1
                                      /* TEXT */
                                    ),
                                    vue.createElementVNode("view", { class: "announcement-info" }, [
                                      vue.createElementVNode(
                                        "view",
                                        {
                                          class: vue.normalizeClass(["announcement-tag", item.type])
                                        },
                                        vue.toDisplayString(item.tagName),
                                        3
                                        /* TEXT, CLASS */
                                      ),
                                      vue.createElementVNode(
                                        "view",
                                        { class: "announcement-time" },
                                        vue.toDisplayString(item.time),
                                        1
                                        /* TEXT */
                                      )
                                    ])
                                  ], 8, ["onClick"]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              )) : activeTab.value === "news" ? (vue.openBlock(true), vue.createElementBlock(
                                vue.Fragment,
                                { key: 1 },
                                vue.renderList(getNewsByCategory(category.id), (item, itemIndex) => {
                                  return vue.openBlock(), vue.createElementBlock("view", {
                                    class: "news-item",
                                    key: itemIndex
                                  }, [
                                    vue.createElementVNode("view", { class: "news-left" }, [
                                      vue.createElementVNode(
                                        "view",
                                        { class: "news-title" },
                                        vue.toDisplayString(item.title),
                                        1
                                        /* TEXT */
                                      ),
                                      vue.createElementVNode("view", { class: "news-info" }, [
                                        vue.createElementVNode(
                                          "view",
                                          {
                                            class: vue.normalizeClass(["news-tag", item.type])
                                          },
                                          vue.toDisplayString(item.tagName),
                                          3
                                          /* TEXT, CLASS */
                                        ),
                                        vue.createElementVNode(
                                          "view",
                                          { class: "news-time" },
                                          vue.toDisplayString(item.time),
                                          1
                                          /* TEXT */
                                        )
                                      ])
                                    ]),
                                    vue.createElementVNode("image", {
                                      class: "news-image",
                                      src: item.image,
                                      mode: "aspectFill"
                                    }, null, 8, ["src"])
                                  ]);
                                }),
                                128
                                /* KEYED_FRAGMENT */
                              )) : vue.createCommentVNode("v-if", true)
                            ],
                            4
                            /* STYLE */
                          )
                        ])
                      ]);
                    }),
                    128
                    /* KEYED_FRAGMENT */
                  ))
                ], 44, ["current"])
              ],
              64
              /* STABLE_FRAGMENT */
            )) : (vue.openBlock(), vue.createElementBlock(
              vue.Fragment,
              { key: 1 },
              [
                vue.createElementVNode(
                  "scroll-view",
                  {
                    style: vue.normalizeStyle({ height: scrollHeight2.value }),
                    class: "exposure-scroll",
                    "scroll-y": "true"
                  },
                  [
                    vue.createElementVNode("view", { class: "exposure-list" }, [
                      (vue.openBlock(true), vue.createElementBlock(
                        vue.Fragment,
                        null,
                        vue.renderList(exposureList.value, (item, index) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "exposure-item",
                            key: index
                          }, [
                            vue.createElementVNode(
                              "view",
                              {
                                class: vue.normalizeClass(["status-tag", { "status-resolved": item.isResolved }])
                              },
                              vue.toDisplayString(item.isResolved ? "已辟谣" : "未辟谣"),
                              3
                              /* TEXT, CLASS */
                            ),
                            vue.createElementVNode("view", { class: "user-info" }, [
                              vue.createElementVNode("image", {
                                class: "user-avatar",
                                src: item.avatar,
                                mode: "aspectFill"
                              }, null, 8, ["src"]),
                              vue.createElementVNode("view", { class: "user-detail" }, [
                                vue.createElementVNode(
                                  "view",
                                  { class: "user-name" },
                                  vue.toDisplayString(item.userName),
                                  1
                                  /* TEXT */
                                ),
                                vue.createElementVNode(
                                  "view",
                                  { class: "exposure-time" },
                                  vue.toDisplayString(item.time),
                                  1
                                  /* TEXT */
                                )
                              ])
                            ]),
                            vue.createElementVNode("view", { class: "exposure-content" }, [
                              vue.createElementVNode("view", { class: "exposure-title" }, [
                                vue.createElementVNode("text", { class: "title-prefix" }, "用户投稿："),
                                vue.createElementVNode(
                                  "text",
                                  { class: "title-content" },
                                  vue.toDisplayString(item.title),
                                  1
                                  /* TEXT */
                                )
                              ]),
                              item.image ? (vue.openBlock(), vue.createElementBlock("image", {
                                key: 0,
                                class: "exposure-image",
                                src: item.image,
                                mode: "aspectFill"
                              }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
                            ]),
                            vue.createElementVNode("view", { class: "exposure-actions" }, [
                              vue.createElementVNode("view", { class: "share-btn" }, [
                                vue.createCommentVNode(' <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n										<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7765 3.10223C17.1761 2.67341 15.531 3.62316 15.1022 5.22356L14.7423 6.56695L9.95409 9.30305C9.22264 8.50232 8.16998 8 7 8C4.79086 8 3 9.79086 3 12C3 14.2091 4.79086 16 7 16C8.16998 16 9.22264 15.4977 9.95409 14.697L14.7423 17.4331L15.1022 18.7764C15.531 20.3768 17.1761 21.3266 18.7765 20.8978C20.3769 20.4689 21.3266 18.8239 20.8978 17.2235C20.469 15.6231 18.8239 14.6734 17.2235 15.1022L15.5018 15.5636L10.8915 12.9291C10.9625 12.631 11 12.3199 11 12C11 11.6801 10.9625 11.369 10.8915 11.0709L15.5018 8.43644L17.2235 8.89779C18.8239 9.32661 20.469 8.37687 20.8978 6.77647C21.3266 5.17607 20.3769 3.53106 18.7765 3.10223ZM16.7753 6.70712L17.7412 6.96594C18.2746 7.10888 18.823 6.7923 18.9659 6.25883C19.1089 5.72537 18.7923 5.17703 18.2588 5.03409C17.7254 4.89114 17.177 5.20773 17.0341 5.74119L16.7753 6.70712ZM5 12C5 13.1046 5.89543 14 7 14C8.10457 14 9 13.1046 9 12C9 10.8954 8.10457 10 7 10C5.89543 10 5 10.8954 5 12ZM17.7412 17.0341L16.7753 17.2929L17.0341 18.2588C17.177 18.7923 17.7254 19.1089 18.2588 18.9659C18.7923 18.823 19.1089 18.2746 18.9659 17.7412C18.823 17.2077 18.2746 16.8911 17.7412 17.0341Z" fill="#333"/>\n									</svg> '),
                                vue.createElementVNode("image", {
                                  src: _imports_1$5,
                                  mode: ""
                                }),
                                vue.createElementVNode("text", null, "分享")
                              ])
                            ])
                          ]);
                        }),
                        128
                        /* KEYED_FRAGMENT */
                      ))
                    ])
                  ],
                  4
                  /* STYLE */
                ),
                vue.createElementVNode("view", {
                  class: "add-button",
                  onClick: handleAddExposure
                }, [
                  vue.createElementVNode("text", null, "+")
                ])
              ],
              64
              /* STABLE_FRAGMENT */
            ))
          ])
        ]);
      };
    }
  };
  const PagesAnnouncementAnnouncement = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-f5f0b107"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/announcement/announcement.vue"]]);
  const _sfc_main$e = {
    __name: "announcementInfo",
    setup(__props) {
      const announcementType = vue.ref("");
      vue.onMounted(() => {
        var _a;
        const pages = getCurrentPages();
        const currentPage = pages[pages.length - 1];
        const options = (_a = currentPage.$page) == null ? void 0 : _a.options;
        if (options) {
          announcementType.value = options.tagName || "公告";
        }
      });
      const goToAnnouncement = () => {
        uni.navigateTo({
          url: "/pages/announcement/announcement"
        });
      };
      const goBack = () => {
        uni.navigateBack();
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createElementVNode("view", { class: "side-bars" }),
          vue.createCommentVNode(" 顶部导航区域 "),
          vue.createElementVNode("view", { class: "nav-section" }, [
            vue.createElementVNode("view", {
              class: "back-btn",
              onClick: goBack
            }, [
              vue.createCommentVNode(' <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n					<path fill-rule="evenodd" clip-rule="evenodd"\n						d="M14.1424 18.5863C14.5028 19.0909 15.2014 19.142 15.6241 18.6947L15.7116 18.602C16.0519 18.2418 16.0964 17.6739 15.8166 17.2593L11.4882 11.9671L15.8165 6.74074C16.0963 6.32615 16.0519 5.75822 15.7115 5.39795L15.624 5.30529C15.2014 4.85796 14.5028 4.90906 14.1423 5.41367L9.19925 11.3385C8.93359 11.7104 8.93358 12.2239 9.19925 12.5958L14.1424 18.5863Z"\n						fill="#171718" />\n				</svg> '),
              vue.createElementVNode("image", {
                src: _imports_0$2,
                mode: "aspectFit"
              })
            ]),
            vue.createElementVNode("view", { class: "breadcrumb" }, [
              vue.createElementVNode("text", {
                class: "breadcrumb-link",
                onClick: goToAnnouncement
              }, "公告"),
              vue.createElementVNode("view", { class: "breadcrumb-arrow" }, [
                vue.createCommentVNode(' <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">\n						<path fill-rule="evenodd" clip-rule="evenodd"\n							d="M10.8576 18.5863C10.4972 19.0909 9.79856 19.142 9.37595 18.6947L9.28841 18.602C8.94805 18.2418 8.90365 17.6739 9.18342 17.2593L13.5118 11.9671L9.1835 6.74074C8.90373 6.32615 8.94813 5.75822 9.28849 5.39795L9.37603 5.30529C9.79864 4.85796 10.4972 4.90906 10.8577 5.41367L15.8008 11.3385C16.0664 11.7104 16.0664 12.2239 15.8008 12.5958L10.8576 18.5863Z"\n							fill="#999" />\n					</svg> '),
                vue.createElementVNode("image", {
                  src: _imports_1$4,
                  mode: "aspectFit"
                })
              ]),
              vue.createElementVNode(
                "text",
                { class: "breadcrumb-current" },
                vue.toDisplayString(announcementType.value),
                1
                /* TEXT */
              )
            ])
          ]),
          vue.createCommentVNode(" 公告内容区域 "),
          vue.createElementVNode("view", { class: "announcement-content" }, [
            vue.createElementVNode("view", { class: "announcement-header" }, [
              vue.createElementVNode("text", { class: "announcement-title" }, "【iBox上新公告】「猪猪侠超能宝箱」今日上线！"),
              vue.createElementVNode("text", { class: "announcement-time" }, "2025-03-26 09:58:58")
            ]),
            vue.createElementVNode("view", { class: "announcement-image" }, [
              vue.createElementVNode("image", {
                src: _imports_2$5,
                mode: "aspectFill"
              })
            ]),
            vue.createElementVNode("view", { class: "announcement-text" }, [
              vue.createElementVNode("text", { class: "greeting bold" }, "亲爱的iBox用户："),
              vue.createElementVNode("view", { class: "letter-content" }, [
                vue.createElementVNode("text", { class: "text-content bold" }, "您好！"),
                vue.createElementVNode("text", { class: "text-content" }, [
                  vue.createTextVNode("iBox平台"),
                  vue.createElementVNode("text", { class: "highlight-red" }, "《猪猪侠超能宝箱》"),
                  vue.createTextVNode("将于"),
                  vue.createElementVNode("text", { class: "highlight-red" }, "2025年3月26日16:00"),
                  vue.createTextVNode("正式开始采集，详情如下，敬请广大用户知悉！")
                ])
              ]),
              vue.createElementVNode("view", { class: "highlight-box" }, [
                vue.createElementVNode("text", { class: "highlight-text" }, "⭐藏品《猪猪侠超能宝箱》首发首创认证⭐")
              ]),
              vue.createElementVNode("view", { class: "info-list" }, [
                vue.createElementVNode("view", { class: "info-item" }, [
                  vue.createElementVNode("text", { class: "dot" }, "•"),
                  vue.createElementVNode("text", { class: "item-label" }, "总发行数："),
                  vue.createElementVNode("text", { class: "item-value highlight-red" }, "26,000份")
                ]),
                vue.createElementVNode("view", { class: "info-item" }, [
                  vue.createElementVNode("text", { class: "dot" }, "•"),
                  vue.createElementVNode("text", { class: "item-label" }, "发行单价："),
                  vue.createElementVNode("text", { class: "item-value highlight-red" }, "99元")
                ]),
                vue.createElementVNode("view", { class: "info-item" }, [
                  vue.createElementVNode("text", { class: "dot" }, "•"),
                  vue.createElementVNode("text", { class: "item-label" }, "藏品名称："),
                  vue.createElementVNode("text", { class: "item-value highlight-red" }, "《猪猪侠超能宝箱》")
                ])
              ])
            ])
          ])
        ]);
      };
    }
  };
  const PagesAnnouncementInfoAnnouncementInfo = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__file", "D:/a1875/Desktop/IBOX-master/pages/announcementInfo/announcementInfo.vue"]]);
  const _imports_1$2 = "/static/order.png";
  const _imports_2$4 = "/static/wallet.png";
  const _imports_3$2 = "/static/settings.png";
  const _imports_2$3 = "/static/empty-box.svg";
  const _imports_7$1 = "/static/profile-choose.png";
  const _sfc_main$d = {
    data() {
      return {
        currentAssetTab: 0,
        currentSubTab: 0,
        assetTabs: ["藏品", "盲盒", "元宇宙"]
      };
    },
    methods: {
      copyWalletAddress() {
        const walletAddress = "0x30ad...18bb1c0";
        uni.setClipboardData({
          data: walletAddress,
          success: () => {
            uni.showToast({
              title: "复制成功",
              icon: "success"
            });
          }
        });
      },
      navigateTo(url) {
        uni.navigateTo({
          url,
          success: () => {
            formatAppLog("log", "at pages/profile/profile.vue:138", "页面跳转成功：", url);
          },
          fail: (err) => {
            formatAppLog("error", "at pages/profile/profile.vue:141", "页面跳转失败：", err);
            uni.showToast({
              title: "页面跳转失败",
              icon: "none"
            });
          }
        });
      },
      handleSwiperChange(e) {
        this.currentAssetTab = e.detail.current;
      },
      switchAssetTab(index) {
        this.currentAssetTab = index;
      },
      switchSubTab(index) {
        this.currentSubTab = index;
      },
      toHome(index) {
        uni.setStorageSync("tabbarIndex", index);
        uni.setStorageSync("isFromNavigation", true);
        uni.navigateTo({
          url: "/pages/home/home",
          animationType: "none",
          animationDuration: 0
        });
      }
    }
  };
  function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "profile-container" }, [
      vue.createCommentVNode(" 顶部用户信息区域 "),
      vue.createElementVNode("view", { class: "status-bars" }),
      vue.createElementVNode("view", { class: "user-info" }, [
        vue.createElementVNode("view", { class: "avatar-section" }, [
          vue.createElementVNode("image", {
            class: "avatar",
            src: _imports_0$3,
            mode: "aspectFill"
          }),
          vue.createElementVNode("view", { class: "user-detail" }, [
            vue.createElementVNode("text", { class: "username" }, "bs3dq3z6"),
            vue.createElementVNode("view", { class: "wallet-address" }, [
              vue.createElementVNode("text", null, "0x30ad...18bb1c0"),
              vue.createElementVNode("view", {
                class: "copy-btn",
                onClick: _cache[0] || (_cache[0] = (...args) => $options.copyWalletAddress && $options.copyWalletAddress(...args))
              }, [
                vue.createElementVNode("text", { class: "copy-icon" }, "复制")
              ])
            ])
          ])
        ]),
        vue.createElementVNode("view", { class: "action-buttons" }, [
          vue.createElementVNode("view", {
            class: "action-btn",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.navigateTo("/pages/mine/order"))
          }, [
            vue.createElementVNode("image", {
              src: _imports_1$2,
              mode: "aspectFit"
            }),
            vue.createElementVNode("text", null, "我的订单")
          ]),
          vue.createElementVNode("view", {
            class: "action-btn",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.navigateTo("/pages/wallet/index"))
          }, [
            vue.createElementVNode("image", {
              src: _imports_2$4,
              mode: "aspectFit"
            }),
            vue.createElementVNode("text", null, "我的钱包")
          ]),
          vue.createElementVNode("view", {
            class: "action-btn",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateTo("/pages/mine/setting/mainsetting"))
          }, [
            vue.createElementVNode("image", {
              src: _imports_3$2,
              mode: "aspectFit"
            }),
            vue.createElementVNode("text", null, "设置中心")
          ])
        ])
      ]),
      vue.createCommentVNode(" 资产切换区域 "),
      vue.createElementVNode("view", { class: "assets-section" }, [
        vue.createElementVNode("view", { class: "assets-header" }, [
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["header-tab", { active: $data.currentAssetTab === 0 }]),
              onClick: _cache[4] || (_cache[4] = ($event) => $options.switchAssetTab(0))
            },
            " 持有资产 ",
            2
            /* CLASS */
          ),
          vue.createElementVNode(
            "view",
            {
              class: vue.normalizeClass(["header-tab", { active: $data.currentAssetTab === 1 }]),
              onClick: _cache[5] || (_cache[5] = ($event) => $options.switchAssetTab(1))
            },
            " 售出资产 ",
            2
            /* CLASS */
          )
        ]),
        vue.createElementVNode("swiper", {
          class: "assets-swiper",
          current: $data.currentAssetTab,
          onChange: _cache[7] || (_cache[7] = (...args) => $options.handleSwiperChange && $options.handleSwiperChange(...args))
        }, [
          vue.createCommentVNode(" 持有资产 "),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "assets-content" }, [
              vue.createElementVNode("view", { class: "sub-tabs" }, [
                (vue.openBlock(true), vue.createElementBlock(
                  vue.Fragment,
                  null,
                  vue.renderList($data.assetTabs, (tab, index) => {
                    return vue.openBlock(), vue.createElementBlock("view", {
                      key: index,
                      class: vue.normalizeClass(["sub-tab", { active: $data.currentSubTab === index }]),
                      onClick: ($event) => $options.switchSubTab(index)
                    }, vue.toDisplayString(tab), 11, ["onClick"]);
                  }),
                  128
                  /* KEYED_FRAGMENT */
                ))
              ]),
              vue.createCommentVNode(" 在盲盒标签处添加开盒记录按钮 "),
              $data.currentSubTab === 1 ? (vue.openBlock(), vue.createElementBlock("view", {
                key: 0,
                class: "box-record-btn-container"
              }, [
                vue.createElementVNode("view", {
                  class: "box-record-btn",
                  onClick: _cache[6] || (_cache[6] = ($event) => $options.navigateTo("/pages/mine/box-record"))
                }, " 开盒记录 > ")
              ])) : vue.createCommentVNode("v-if", true),
              vue.createElementVNode("view", { class: "empty-box" }, [
                vue.createElementVNode("image", {
                  src: _imports_2$3,
                  mode: "aspectFit"
                }),
                vue.createElementVNode("text", null, "暂无数据")
              ])
            ])
          ]),
          vue.createCommentVNode(" 售出资产 "),
          vue.createElementVNode("swiper-item", null, [
            vue.createElementVNode("view", { class: "assets-content" }, [
              vue.createElementVNode("view", { class: "empty-box" }, [
                vue.createElementVNode("image", {
                  src: _imports_2$3,
                  mode: "aspectFit"
                }),
                vue.createElementVNode("text", null, "暂无数据")
              ])
            ])
          ])
        ], 40, ["current"])
      ]),
      vue.createElementVNode("view", { class: "tabbar" }, [
        vue.createElementVNode("view", {
          onClick: _cache[8] || (_cache[8] = ($event) => $options.toHome(0))
        }, [
          vue.createElementVNode("image", {
            src: _imports_5$2,
            mode: ""
          }),
          vue.createElementVNode("text", null, "Home")
        ]),
        vue.createElementVNode("view", {
          onClick: _cache[9] || (_cache[9] = ($event) => $options.toHome(1))
        }, [
          vue.createElementVNode("image", {
            src: _imports_6$1,
            mode: ""
          }),
          vue.createElementVNode("text", null, "Box超话")
        ]),
        vue.createElementVNode("view", null, [
          vue.createElementVNode("image", {
            src: _imports_7$1,
            mode: ""
          }),
          vue.createElementVNode("text", { style: { "color": "black" } }, "Profile")
        ])
      ])
    ]);
  }
  const PagesProfileProfile = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$b], ["__file", "D:/a1875/Desktop/IBOX-master/pages/profile/profile.vue"]]);
  const _imports_0$1 = "/uni_modules/iliya-capsule-toys/static/niu-dan-ji.png";
  const _imports_1$1 = "/uni_modules/iliya-capsule-toys/static/jin-yong-btn.png";
  const _imports_2$2 = "/uni_modules/iliya-capsule-toys/static/not-start-btn.png";
  const _imports_3$1 = "/uni_modules/iliya-capsule-toys/static/xiao-shou.png";
  const _imports_4 = "/uni_modules/iliya-capsule-toys/static/starting-btn.png";
  const _imports_5 = "/uni_modules/iliya-capsule-toys/static/chu-kou.png";
  const _imports_6 = "/uni_modules/iliya-capsule-toys/static/guang.png";
  const _imports_7 = "/uni_modules/iliya-capsule-toys/static/que-ren.png";
  const _sfc_main$c = {
    props: {
      // 扭蛋机大小，最小0.1
      size: {
        type: Number,
        default: 0.9
      },
      // 是否禁用
      disabled: {
        type: Boolean,
        default: false
      },
      // 掉落几等奖，1-5
      resLv: {
        type: Number,
        default: 1
      },
      // 播放掉落动画时默认使用resLv掉落1-5号球，如果需要自定义掉落图片，传递图片url
      resBallImg: {
        type: String,
        default: ""
      },
      // 抽取结果
      giftRes: {
        type: Object,
        default: () => {
          return {
            giftName: null,
            url: ""
          };
        }
      },
      // 未中奖时显示的图片
      notWinImg: {
        type: String,
        default: "../../static/wei-zhong-jiang.png"
      },
      // 替换奖品列表图，将按顺序依次替换，最多可替换12张
      giftImgList: {
        type: Array,
        default: () => {
          return [];
        }
      }
    },
    data() {
      return {
        start: false,
        getRes: false,
        showGiftRes: false,
        /**
         * 默认扭蛋列表，顺序如下
         * 0 - 2：礼物、手机、手表
         * 3 - 7：数字球1 - 数字球5
         * 8 - 9：紫球
         * 10 - 11：蓝球
         * 12：金蛋
         */
        defGiftImgList: [
          "../../static/li-wu.png",
          "../../static/shou-ji.png",
          "../../static/shou-biao.png",
          "../../static/qiu1.png",
          "../../static/qiu2.png",
          "../../static/qiu3.png",
          "../../static/qiu4.png",
          "../../static/qiu5.png",
          "../../static/zi-qiu.png",
          "../../static/zi-qiu.png",
          "../../static/lan-qiu.png",
          "../../static/lan-qiu.png",
          "../../static/jin-dan.png"
        ]
      };
    },
    created() {
      this.initGiftList();
    },
    methods: {
      initGiftList() {
        this.defGiftImgList.splice(0, this.giftImgList.length, ...this.giftImgList);
      },
      handleStart() {
        this.$emit("start", () => {
          formatAppLog("log", "at uni_modules/iliya-capsule-toys/components/iliya-capsule-toys/iliya-capsule-toys.vue:126", this.giftRes);
          this.start = true;
          setTimeout(() => {
            this.getRes = true;
            this.start = false;
            setTimeout(() => {
              this.getRes = false;
              this.showGiftRes = true;
            }, 3e3);
          }, 2e3);
        });
      },
      handleDisabled() {
        this.$emit("canNotStart");
      },
      handleOk() {
        this.showGiftRes = false;
        this.$emit("ok");
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "egg-twist" }, [
      vue.createCommentVNode(" 抽奖机主体 "),
      vue.createElementVNode(
        "view",
        {
          class: "egg-twist-container",
          style: vue.normalizeStyle({ scale: $props.size })
        },
        [
          vue.createElementVNode("image", {
            src: _imports_0$1,
            class: "egg-twist-main-img",
            mode: "aspectFit"
          }),
          $props.disabled ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: _imports_1$1,
            class: "egg-twist-btn",
            mode: "aspectFit",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.handleDisabled && $options.handleDisabled(...args))
          })) : vue.createCommentVNode("v-if", true),
          !$data.start && !$props.disabled && !$data.getRes ? (vue.openBlock(), vue.createElementBlock(
            vue.Fragment,
            { key: 1 },
            [
              vue.createElementVNode("image", {
                src: _imports_2$2,
                class: "egg-twist-btn",
                mode: "aspectFit",
                onClick: _cache[1] || (_cache[1] = (...args) => $options.handleStart && $options.handleStart(...args))
              }),
              vue.createElementVNode("image", {
                src: _imports_3$1,
                class: "egg-twist-shou",
                mode: "aspectFit",
                onClick: _cache[2] || (_cache[2] = (...args) => $options.handleStart && $options.handleStart(...args))
              })
            ],
            64
            /* STABLE_FRAGMENT */
          )) : vue.createCommentVNode("v-if", true),
          $data.start || $data.getRes ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 2,
            src: _imports_4,
            class: "egg-twist-btn",
            mode: "aspectFit"
          })) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("image", {
            src: _imports_5,
            class: "egg-twist-chu-kou",
            mode: "aspectFit"
          }),
          vue.createCommentVNode(" 以下为扭蛋图 "),
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.defGiftImgList, (giftImg, index) => {
              return vue.openBlock(), vue.createElementBlock("image", {
                key: index,
                src: giftImg,
                class: vue.normalizeClass(["egg-twist-" + (index + 1), { gift: $data.start }]),
                mode: "aspectFit"
              }, null, 10, ["src"]);
            }),
            128
            /* KEYED_FRAGMENT */
          )),
          vue.createCommentVNode(" 抽取结果蛋 "),
          $data.getRes ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 3,
            src: $props.resBallImg || `../../static/qiu${$props.resLv}.png`,
            class: "res-egg",
            mode: "aspectFit"
          }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
        ],
        4
        /* STYLE */
      ),
      vue.createCommentVNode(" 抽奖结果 "),
      $data.showGiftRes ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "gift-res"
      }, [
        vue.createElementVNode("view", { class: "res-container" }, [
          !$props.giftRes.giftName ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            src: $props.notWinImg,
            mode: "aspectFit",
            class: "not-win-img"
          }, null, 8, ["src"])) : (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "res-img-box"
          }, [
            vue.createElementVNode("image", {
              src: _imports_6,
              mode: "aspectFit",
              class: "res-guang"
            }),
            vue.createElementVNode("image", {
              src: $props.giftRes.url,
              mode: "aspectFit",
              class: "res-img"
            }, null, 8, ["src"]),
            vue.createElementVNode(
              "view",
              { class: "res-text" },
              "恭喜获得：" + vue.toDisplayString($props.giftRes.giftName),
              1
              /* TEXT */
            )
          ])),
          vue.createElementVNode("image", {
            src: _imports_7,
            class: "res-submit",
            mode: "aspectFit",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.handleOk && $options.handleOk(...args))
          })
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const iliyaCapsuleToys = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$a], ["__scopeId", "data-v-0eae494f"], ["__file", "D:/a1875/Desktop/IBOX-master/uni_modules/iliya-capsule-toys/components/iliya-capsule-toys/iliya-capsule-toys.vue"]]);
  const _sfc_main$b = {
    __name: "lottery",
    setup(__props) {
      const giftRes = vue.ref({
        giftName: null,
        url: ""
      });
      vue.ref(Array(10).fill("/static/egg1.png"));
      const resBallImg = vue.ref("");
      const disabled = vue.ref(false);
      vue.ref(1);
      const drawCount = vue.ref(4e3);
      const prizeList = vue.ref([
        { name: "一等奖", count: 168, total: 188, product: "万能卡-第12日" }
      ]);
      const start = (fn) => {
        giftRes.value.giftName = "预制菜";
        giftRes.value.url = "/static/egg1.png";
        fn();
      };
      const canNotStart = () => {
        uni.showModal({
          title: "提示",
          content: "余额不足"
        });
      };
      const ok = () => {
        formatAppLog("log", "at pages/lottery/lottery.vue:99", "确认中奖信息");
      };
      const goBack = () => {
        uni.navigateTo({
          url: "/pages/home/home"
        });
      };
      const goRecord = () => {
        uni.navigateTo({
          url: "/pages/lottery/record"
        });
      };
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock("view", { class: "content" }, [
          vue.createCommentVNode(" 头部区域 "),
          vue.createElementVNode("view", { class: "header" }, [
            vue.createElementVNode("view", {
              class: "back-btn",
              onClick: goBack
            }, [
              vue.createElementVNode("image", {
                src: _imports_0$2,
                mode: "aspectFit",
                class: "back-icon"
              })
            ]),
            vue.createElementVNode("view", {
              class: "record-btn",
              onClick: goRecord
            }, [
              vue.createElementVNode("text", null, "中奖记录")
            ])
          ]),
          vue.createCommentVNode(" 标题区域 "),
          vue.createElementVNode("view", { class: "title-container" }, [
            vue.createElementVNode("text", { class: "title-text" }, "抽奖"),
            vue.createElementVNode("text", { class: "title-text" }, "活动")
          ]),
          vue.createCommentVNode(" 右侧边栏 "),
          vue.createElementVNode("view", { class: "sidebar" }, [
            vue.createElementVNode("view", { class: "sidebar-btn" }, [
              vue.createElementVNode("text", { class: "sidebar-text" }, "活动规则")
            ])
          ]),
          vue.createCommentVNode(" 抽奖区域 "),
          vue.createElementVNode("view", { class: "lottery-container" }, [
            vue.createVNode(iliyaCapsuleToys, {
              giftRes: giftRes.value,
              resBallImg: resBallImg.value,
              disabled: disabled.value,
              resLv: 2,
              onStart: start,
              onCanNotStart: canNotStart,
              onOk: ok
            }, null, 8, ["giftRes", "resBallImg", "disabled"])
          ]),
          vue.createCommentVNode(" 信息区域 "),
          vue.createElementVNode("view", { class: "info-container" }, [
            vue.createElementVNode("view", { class: "draw-info" }, [
              vue.createElementVNode("view", { class: "draw-count" }, [
                vue.createElementVNode("text", { class: "draw-text" }, "当前已抽"),
                vue.createElementVNode(
                  "text",
                  { class: "count-num" },
                  vue.toDisplayString(drawCount.value),
                  1
                  /* TEXT */
                ),
                vue.createElementVNode("text", { class: "draw-text" }, "次")
              ]),
              vue.createElementVNode("view", { class: "refresh-icon" }, [
                vue.createElementVNode("text", { class: "iconfont icon-refresh" }, "↻")
              ])
            ]),
            vue.createElementVNode("view", { class: "prize-table" }, [
              vue.createElementVNode("view", { class: "table-header" }, [
                vue.createElementVNode("text", { class: "header-item" }, "名称"),
                vue.createElementVNode("text", { class: "header-item" }, "已中/总数"),
                vue.createElementVNode("text", { class: "header-item" }, "对应奖品")
              ]),
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList(prizeList.value, (prize, index) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    key: index,
                    class: "prize-item"
                  }, [
                    vue.createElementVNode(
                      "text",
                      { class: "prize-name" },
                      vue.toDisplayString(prize.name),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "prize-count" },
                      vue.toDisplayString(prize.count) + "/" + vue.toDisplayString(prize.total),
                      1
                      /* TEXT */
                    ),
                    vue.createElementVNode(
                      "text",
                      { class: "prize-product" },
                      vue.toDisplayString(prize.product),
                      1
                      /* TEXT */
                    )
                  ]);
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ])
        ]);
      };
    }
  };
  const PagesLotteryLottery = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-619cda96"], ["__file", "D:/a1875/Desktop/IBOX-master/pages/lottery/lottery.vue"]]);
  const _imports_0 = "/static/back.png";
  const _sfc_main$a = {
    data() {
      return {
        version: "2.1.01"
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      navigateTo(url) {
        uni.navigateTo({
          url
        });
      },
      showToast(message) {
        uni.showToast({
          title: message,
          icon: "none"
        });
      },
      checkUpdate() {
        uni.showToast({
          title: "已是最新版本",
          icon: "none"
        });
      },
      deactivateAccount() {
        uni.showModal({
          title: "注销账号",
          content: "确定要注销您的账号吗？此操作不可恢复。",
          confirmText: "确定",
          cancelText: "取消",
          success: (res) => {
            if (res.confirm) {
              uni.showToast({
                title: "账号注销申请已提交",
                icon: "none"
              });
            }
          }
        });
      },
      logout() {
        uni.showModal({
          title: "退出登录",
          content: "确定要退出登录吗？",
          confirmText: "确定",
          cancelText: "取消",
          success: (res) => {
            if (res.confirm) {
              uni.clearStorageSync();
              uni.reLaunch({
                url: "/pages/index/index"
              });
            }
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "setting-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "设置中心"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 设置项列表 "),
      vue.createElementVNode("view", { class: "setting-list" }, [
        vue.createCommentVNode(" 第一组 "),
        vue.createElementVNode("view", { class: "setting-group" }, [
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[1] || (_cache[1] = ($event) => $options.navigateTo("/pages/mine/setting/personal-info"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box profile-icon" }),
              vue.createElementVNode("text", null, "个人信息")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[2] || (_cache[2] = ($event) => $options.showToast("实名认证功能正在开发中"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box verify-icon" }),
              vue.createElementVNode("text", null, "实名认证")
            ]),
            vue.createElementVNode("view", { class: "item-right" }, [
              vue.createElementVNode("text", { class: "status-text unverified" }, "未实名"),
              vue.createElementVNode("view", { class: "arrow" })
            ])
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[3] || (_cache[3] = ($event) => $options.navigateTo("/pages/mine/setting/privacy"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box privacy-icon" }),
              vue.createElementVNode("text", null, "隐私设置")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[4] || (_cache[4] = ($event) => $options.showToast("安全中心功能正在开发中"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box security-icon" }),
              vue.createElementVNode("text", null, "安全中心")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[5] || (_cache[5] = ($event) => $options.showToast("开具发票功能正在开发中"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box invoice-icon" }),
              vue.createElementVNode("text", null, "开具发票")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ]),
        vue.createCommentVNode(" 第二组 "),
        vue.createElementVNode("view", { class: "setting-group" }, [
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[6] || (_cache[6] = ($event) => $options.showToast("帮助中心功能正在开发中"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box help-icon" }),
              vue.createElementVNode("text", null, "帮助中心")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[7] || (_cache[7] = (...args) => $options.checkUpdate && $options.checkUpdate(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box update-icon" }),
              vue.createElementVNode("text", null, "版本更新")
            ]),
            vue.createElementVNode("view", { class: "item-right" }, [
              vue.createElementVNode("text", { class: "version-text" }, "1.0.0"),
              vue.createElementVNode("view", { class: "arrow" })
            ])
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[8] || (_cache[8] = ($event) => $options.navigateTo("/pages/mine/setting/about"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box about-icon" }),
              vue.createElementVNode("text", null, "关于我们")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[9] || (_cache[9] = ($event) => $options.navigateTo("/pages/mine/setting/privacypolicy"))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box privacy-policy-icon" }),
              vue.createElementVNode("text", null, "隐私政策")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ]),
        vue.createCommentVNode(" 第三组 "),
        vue.createElementVNode("view", { class: "setting-group" }, [
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[10] || (_cache[10] = (...args) => $options.deactivateAccount && $options.deactivateAccount(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box deactivate-icon" }),
              vue.createElementVNode("text", null, "注销账号")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ]),
          vue.createElementVNode("view", {
            class: "setting-item",
            onClick: _cache[11] || (_cache[11] = (...args) => $options.logout && $options.logout(...args))
          }, [
            vue.createElementVNode("view", { class: "item-left" }, [
              vue.createElementVNode("view", { class: "icon-box logout-icon" }),
              vue.createElementVNode("text", null, "退出登录")
            ]),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ])
      ])
    ]);
  }
  const PagesMineSettingMainsetting = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$9], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/mainsetting.vue"]]);
  const _imports_1 = "/static/dropdown.png";
  const _sfc_main$9 = {
    data() {
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
      const years = [];
      for (let i = currentYear - 5; i <= currentYear; i++) {
        years.push(i);
      }
      const months = [];
      for (let i = 1; i <= 12; i++) {
        months.push(i);
      }
      return {
        hasRecords: false,
        showFilter: false,
        filterType: "all",
        filterText: "全部订单",
        showDatePicker: false,
        years,
        months,
        datePickerValue: [5, (/* @__PURE__ */ new Date()).getMonth()],
        // 默认选中当前年和月
        selectedDate: {
          year: currentYear,
          month: (/* @__PURE__ */ new Date()).getMonth() + 1
        }
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      showFilterOptions() {
        this.showFilter = true;
        setTimeout(() => {
          document.addEventListener("click", this.hideFilterOptions, { once: true });
        }, 0);
      },
      hideFilterOptions() {
        this.showFilter = false;
      },
      selectFilter(type) {
        this.filterType = type;
        this.hideFilterOptions();
        if (type === "all") {
          this.filterText = "全部订单";
        } else if (type === "custom") {
          this.showDatePicker = true;
          this.filterText = `${this.selectedDate.year}年${this.selectedDate.month}月`;
        }
      },
      handleDateChange(e) {
        const values = e.detail.value;
        this.datePickerValue = values;
        this.selectedDate = {
          year: this.years[values[0]],
          month: this.months[values[1]]
        };
      },
      cancelDatePicker() {
        this.showDatePicker = false;
        if (this.filterType === "custom" && !this.selectedDate) {
          this.filterType = "all";
          this.filterText = "全部订单";
        }
      },
      confirmDatePicker() {
        this.showDatePicker = false;
        this.filterText = `${this.selectedDate.year}年${this.selectedDate.month}月`;
        formatAppLog("log", "at pages/mine/box-record.vue:130", "Filter by date:", this.selectedDate);
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "box-record-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "开盒记录"),
        vue.createElementVNode("view", {
          class: "filter-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.showFilterOptions && $options.showFilterOptions(...args))
        }, [
          vue.createElementVNode(
            "text",
            null,
            vue.toDisplayString($data.filterText),
            1
            /* TEXT */
          ),
          vue.createElementVNode("image", {
            src: _imports_1,
            mode: "aspectFit"
          })
        ])
      ]),
      vue.createCommentVNode(" 空状态展示 "),
      !$data.hasRecords ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "empty-state"
      }, [
        vue.createElementVNode("image", {
          src: _imports_2$3,
          mode: "aspectFit"
        }),
        vue.createElementVNode("text", null, "暂无数据"),
        vue.createElementVNode("text", null, "目前没有任何数据")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 过滤选项弹出菜单 "),
      $data.showFilter ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "filter-options",
        onClick: _cache[4] || (_cache[4] = vue.withModifiers((...args) => $options.hideFilterOptions && $options.hideFilterOptions(...args), ["stop"]))
      }, [
        vue.createElementVNode("view", {
          class: "filter-option-item",
          onClick: _cache[2] || (_cache[2] = vue.withModifiers(($event) => $options.selectFilter("all"), ["stop"]))
        }, [
          vue.createElementVNode("text", null, "全部订单")
        ]),
        vue.createElementVNode("view", {
          class: "filter-option-item",
          onClick: _cache[3] || (_cache[3] = vue.withModifiers(($event) => $options.selectFilter("custom"), ["stop"]))
        }, [
          vue.createElementVNode("text", null, "自定义时间")
        ])
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 时间选择器弹出层 "),
      $data.showDatePicker ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 2,
        class: "picker-popup"
      }, [
        vue.createElementVNode("view", {
          class: "picker-mask",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.cancelDatePicker && $options.cancelDatePicker(...args))
        }),
        vue.createElementVNode("view", { class: "picker-content" }, [
          vue.createElementVNode("view", { class: "picker-header" }, [
            vue.createElementVNode("text", {
              onClick: _cache[6] || (_cache[6] = (...args) => $options.cancelDatePicker && $options.cancelDatePicker(...args))
            }, "取消"),
            vue.createElementVNode("text", {
              onClick: _cache[7] || (_cache[7] = (...args) => $options.confirmDatePicker && $options.confirmDatePicker(...args))
            }, "确定")
          ]),
          vue.createElementVNode("picker-view", {
            class: "time-picker",
            value: $data.datePickerValue,
            onChange: _cache[8] || (_cache[8] = (...args) => $options.handleDateChange && $options.handleDateChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.years, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "picker-item",
                      key: index
                    },
                    vue.toDisplayString(item) + "年",
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.months, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "picker-item",
                      key: index
                    },
                    vue.toDisplayString(item) + "月",
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 40, ["value"])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMineBoxRecord = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$8], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/box-record.vue"]]);
  const _imports_2$1 = "/static/images/empty-box.png";
  const _sfc_main$8 = {
    data() {
      return {
        currentMainNav: 0,
        currentSubNav: 0,
        mainNavItems: ["藏品", "盲盒", "合成", "空投", "寄售", "求购", "求购寄售"],
        subNavItems: ["全部", "待支付", "藏品转入", "已完成", "退款"],
        hasOrders: false
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      goSearch() {
        uni.navigateTo({
          url: "/pages/mine/order-search"
        });
      },
      switchMainNav(index) {
        this.currentMainNav = index;
      },
      switchSubNav(index) {
        this.currentSubNav = index;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "order-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部返回按钮和搜索框 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", {
          class: "search-box",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.goSearch && $options.goSearch(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_1$7,
            mode: "aspectFit"
          }),
          vue.createElementVNode("text", null, "搜索")
        ])
      ]),
      vue.createCommentVNode(" 顶部主要分类导航 "),
      vue.createElementVNode("scroll-view", {
        class: "main-nav",
        "scroll-x": "true",
        "show-scrollbar": "false"
      }, [
        vue.createElementVNode("view", { class: "nav-content" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.mainNavItems, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["nav-item", { "active": $data.currentMainNav === index }]),
                key: index,
                onClick: ($event) => $options.switchMainNav(index)
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 二级状态分类导航 "),
      vue.createElementVNode("scroll-view", {
        class: "sub-nav",
        "scroll-x": "true",
        "show-scrollbar": "false"
      }, [
        vue.createElementVNode("view", { class: "nav-content" }, [
          (vue.openBlock(true), vue.createElementBlock(
            vue.Fragment,
            null,
            vue.renderList($data.subNavItems, (item, index) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                class: vue.normalizeClass(["nav-item", { "active": $data.currentSubNav === index }]),
                key: index,
                onClick: ($event) => $options.switchSubNav(index)
              }, vue.toDisplayString(item), 11, ["onClick"]);
            }),
            128
            /* KEYED_FRAGMENT */
          ))
        ])
      ]),
      vue.createCommentVNode(" 空状态展示 "),
      !$data.hasOrders ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "empty-state"
      }, [
        vue.createElementVNode("image", {
          src: _imports_2$1,
          mode: "aspectFit"
        }),
        vue.createElementVNode("text", null, "暂无订单"),
        vue.createElementVNode("text", null, "目前没有任何数据")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMineOrder = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$7], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/order.vue"]]);
  const _imports_2 = "/static/images/clear.png";
  const _imports_3 = "/static/images/empty-search.png";
  const _sfc_main$7 = {
    data() {
      return {
        searchKeyword: "",
        currentType: 0,
        searchTypes: ["普通订单", "求购/寄售"],
        hasResults: false
      };
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
        });
      },
      clearSearch() {
        this.searchKeyword = "";
        this.hasResults = false;
      },
      onSearch(e) {
        this.hasResults = false;
      },
      switchType(index) {
        this.currentType = index;
        this.onSearch();
      }
    }
  };
  function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "search-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部搜索栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "search-box" }, [
          vue.createElementVNode("image", {
            src: _imports_1$7,
            mode: "aspectFit"
          }),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.searchKeyword = $event),
              placeholder: "搜索订单",
              onInput: _cache[2] || (_cache[2] = (...args) => $options.onSearch && $options.onSearch(...args)),
              focus: ""
            },
            null,
            544
            /* NEED_HYDRATION, NEED_PATCH */
          ), [
            [vue.vModelText, $data.searchKeyword]
          ]),
          $data.searchKeyword ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "clear-icon",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.clearSearch && $options.clearSearch(...args))
          }, [
            vue.createElementVNode("image", {
              src: _imports_2,
              mode: "aspectFit"
            })
          ])) : vue.createCommentVNode("v-if", true)
        ])
      ]),
      vue.createCommentVNode(" 搜索类型切换 "),
      vue.createElementVNode("view", { class: "search-type" }, [
        (vue.openBlock(true), vue.createElementBlock(
          vue.Fragment,
          null,
          vue.renderList($data.searchTypes, (item, index) => {
            return vue.openBlock(), vue.createElementBlock("view", {
              class: vue.normalizeClass(["type-item", { "active": $data.currentType === index }]),
              key: index,
              onClick: ($event) => $options.switchType(index)
            }, vue.toDisplayString(item), 11, ["onClick"]);
          }),
          128
          /* KEYED_FRAGMENT */
        ))
      ]),
      vue.createCommentVNode(" 搜索结果为空的状态 "),
      !$data.hasResults ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "empty-state"
      }, [
        vue.createElementVNode("image", {
          src: _imports_3,
          mode: "aspectFit"
        }),
        vue.createElementVNode("text", null, "暂无搜索结果")
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMineOrderSearch = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$6], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/order-search.vue"]]);
  const _sfc_main$6 = {
    data() {
      return {
        // 默认头像或从用户信息获取
        avatarUrl: "/static/avatar.png",
        walletAddress: "0x30ad1234567890abcdef18bb1c0",
        // 完整地址用于复制
        nickname: "bs3dq3z6",
        // 默认昵称
        addressInfo: "这里是实物收货地址"
        // 默认地址信息
      };
    },
    // 每次页面显示时执行
    onShow() {
      const updatedNickname = uni.getStorageSync("updatedNickname");
      if (updatedNickname) {
        this.nickname = updatedNickname;
      }
      const updatedAddress = uni.getStorageSync("updatedAddress");
      if (updatedAddress) {
        this.addressInfo = updatedAddress;
      }
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      changeAvatar() {
        uni.showActionSheet({
          itemList: ["从相册中选择", "相机"],
          success: (res) => {
            formatAppLog("log", "at pages/mine/setting/personal-info.vue:97", "选择的按钮索引：" + res.tapIndex);
            let sourceType = [];
            if (res.tapIndex === 0) {
              sourceType = ["album"];
            } else if (res.tapIndex === 1) {
              sourceType = ["camera"];
            }
            if (sourceType.length > 0) {
              uni.chooseImage({
                count: 1,
                // 默认9
                sizeType: ["original", "compressed"],
                // 可以指定是原图还是压缩图，默认二者都有
                sourceType,
                success: (chooseRes) => {
                  const tempFilePaths = chooseRes.tempFilePaths;
                  formatAppLog("log", "at pages/mine/setting/personal-info.vue:112", "选择的图片:", tempFilePaths[0]);
                  this.avatarUrl = tempFilePaths[0];
                  uni.showToast({
                    title: "头像更换成功(模拟)",
                    icon: "success"
                  });
                },
                fail: (err) => {
                  formatAppLog("log", "at pages/mine/setting/personal-info.vue:121", "选择图片失败:", err);
                  uni.showToast({
                    title: "选择图片失败",
                    icon: "none"
                  });
                }
              });
            }
          },
          fail: (res) => {
            formatAppLog("log", "at pages/mine/setting/personal-info.vue:131", res.errMsg);
          }
        });
      },
      copyWalletAddress() {
        uni.setClipboardData({
          data: this.walletAddress,
          success: () => {
            uni.showToast({
              title: "复制成功",
              icon: "success"
            });
          },
          fail: () => {
            uni.showToast({
              title: "复制失败",
              icon: "none"
            });
          }
        });
      },
      navigateToAddress() {
        uni.navigateTo({
          url: "/pages/mine/setting/address-edit"
        });
      },
      navigateToNickname() {
        uni.navigateTo({
          url: "/pages/mine/setting/nickname-edit"
        });
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "personal-info-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "个人信息"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 信息列表 "),
      vue.createElementVNode("view", { class: "info-list" }, [
        vue.createElementVNode("view", {
          class: "info-item avatar-item",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.changeAvatar && $options.changeAvatar(...args))
        }, [
          vue.createElementVNode("text", { class: "label" }, "头像"),
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode("image", {
              class: "avatar-img",
              src: $data.avatarUrl,
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "info-item",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.navigateToNickname && $options.navigateToNickname(...args))
        }, [
          vue.createElementVNode("text", { class: "label" }, "昵称"),
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode(
              "text",
              { class: "value" },
              vue.toDisplayString($data.nickname),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ]),
        vue.createElementVNode("view", { class: "info-item" }, [
          vue.createElementVNode("text", { class: "label" }, "手机号"),
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode("text", { class: "value" }, "180****5508"),
            vue.createCommentVNode(" 手机号通常不可直接修改 ")
          ])
        ]),
        vue.createElementVNode("view", { class: "info-item" }, [
          vue.createElementVNode("text", { class: "label" }, "钱包地址"),
          vue.createElementVNode("view", {
            class: "item-right",
            onClick: _cache[3] || (_cache[3] = (...args) => $options.copyWalletAddress && $options.copyWalletAddress(...args))
          }, [
            vue.createElementVNode("text", { class: "value" }, "0x30ad****b1c0"),
            vue.createElementVNode("view", { class: "copy-icon" })
          ])
        ]),
        vue.createElementVNode("view", {
          class: "info-item address-item",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.navigateToAddress && $options.navigateToAddress(...args))
        }, [
          vue.createElementVNode("text", { class: "label" }, "收货地址"),
          vue.createElementVNode("view", { class: "item-right" }, [
            vue.createElementVNode(
              "text",
              { class: "value placeholder-text" },
              vue.toDisplayString($data.addressInfo),
              1
              /* TEXT */
            ),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ])
      ]),
      vue.createCommentVNode(" 分隔线 "),
      vue.createElementVNode("view", { class: "divider-line" })
    ]);
  }
  const PagesMineSettingPersonalInfo = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$5], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/personal-info.vue"]]);
  const _sfc_main$5 = {
    data() {
      return {
        ownPrivacy: false,
        sellPrivacy: false
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      handleOwnPrivacyChange(e) {
        this.ownPrivacy = e.detail.value;
      },
      handleSellPrivacyChange(e) {
        this.sellPrivacy = e.detail.value;
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "privacy-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "隐私设置"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 隐私设置列表 "),
      vue.createElementVNode("view", { class: "privacy-list" }, [
        vue.createElementVNode("view", { class: "privacy-item" }, [
          vue.createElementVNode("text", null, "我拥有的仅自己可见"),
          vue.createElementVNode("switch", {
            checked: $data.ownPrivacy,
            onChange: _cache[1] || (_cache[1] = (...args) => $options.handleOwnPrivacyChange && $options.handleOwnPrivacyChange(...args)),
            color: "#4B6CFF"
          }, null, 40, ["checked"])
        ]),
        vue.createElementVNode("view", { class: "privacy-item" }, [
          vue.createElementVNode("text", null, "我卖出的仅自己可见"),
          vue.createElementVNode("switch", {
            checked: $data.sellPrivacy,
            onChange: _cache[2] || (_cache[2] = (...args) => $options.handleSellPrivacyChange && $options.handleSellPrivacyChange(...args)),
            color: "#4B6CFF"
          }, null, 40, ["checked"])
        ])
      ])
    ]);
  }
  const PagesMineSettingPrivacy = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$4], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/privacy.vue"]]);
  const _sfc_main$4 = {
    methods: {
      goBack() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "about-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "关于我们"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "about-content" }, [
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "企业介绍"),
            vue.createElementVNode("view", { class: "text" }, "iBox链盒（霍尔斯链腾科技有限公司）是国内领先的数字藏品生态平台。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "全价值链服务提供者"),
            vue.createElementVNode("view", { class: "text" }, "与文旅、非遗、体育等多领域800+头部IP建立合作，完成传统IP从挖掘、二次创作、藏品发行到价值实现的全过程。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "赋能产业发展先行者"),
            vue.createElementVNode("view", { class: "text" }, "积极探索数字藏品与实体产业深度融合的新模式，与各领域共建新消费生态，为整个实体产业发展赋能。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "行业安全标准引领者"),
            vue.createElementVNode("view", { class: "text" }, "构建全方位安全技术体系、完善的风险管控体系和以安全为基础的合规生态体系，为整个行业的安全发展保驾护航。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "业务领域"),
            vue.createElementVNode("view", { class: "text" }, "依靠创新的业务模式，实现了数字藏品从发行、购买、收藏到使用的完整闭环，赋能数字藏品多元化应用场景，通过联动线下权益，进一步完善数字藏品的价值体系构建，为用户带来具有艺术性、文化性、使用性的数字生活体验。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "传统IP的数字藏品化"),
            vue.createElementVNode("view", { class: "text" }, "传统IP具有极大的文化价值和收藏价值，深受平台用户喜爱。iBox助力国内非遗、文旅、体育、艺术等高价值IP数字藏品化，并协助相关机构、艺术家等构建传统IP数字藏品化的供应链体系。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "数字IP运营及管理服务"),
            vue.createElementVNode("view", { class: "text" }, "在IP数字藏品化的基础上，iBox通过自营及跨界等多种合作模式，为数字IP提供运营营销及管理服务，包括新营销、IP授权管理、价值挖掘、应用场景拓展等多种赋能，全力打造面向Web3.0时代的内容基础设施。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "打造元宇宙全场景生态体系"),
            vue.createElementVNode("view", { class: "text" }, "不断挖掘与提高IP价值，促进数字技术与各产业的深度融合，同全球用户共同打造元宇宙全场景生态体系，实现数字经济规模化发展。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, '让"国潮"走向世界'),
            vue.createElementVNode("view", { class: "text" }, 'iBox是年轻人喜爱的数字藏品平台，数字藏品成为年轻一代释放"文化自信"的重要通道。通过将"国潮"与科技结合，让"国潮"在"文化+数字技术+高质量平台"的支持下，更好地走向全世界。')
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "title" }, "公司使命"),
            vue.createElementVNode("view", { class: "text" }, "用数字收藏美好生活")
          ])
        ])
      ])
    ]);
  }
  const PagesMineSettingAbout = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$3], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/about.vue"]]);
  const _sfc_main$3 = {
    methods: {
      goBack() {
        uni.navigateBack();
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "privacy-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "TopBox平台隐私政策"),
        vue.createElementVNode("view", { class: "placeholder" })
      ]),
      vue.createCommentVNode(" 内容区域 "),
      vue.createElementVNode("view", { class: "content" }, [
        vue.createElementVNode("view", { class: "privacy-content" }, [
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "greeting" }, "尊敬的用户，您好："),
            vue.createElementVNode("text", { class: "company-intro" }, '霍尔斯链腾科技有限公司（下文称"iBox"或"我们"）深知隐私对您的重要性，并会尽全力保护您的隐私。请在向iBox提交个人信息之前，阅读、了解本《iBox平台隐私政策》（下文简称"本政策"）。本政策适用于显示本隐私政策、或链接至本隐私政策的所有iBox官网和产品、服务。')
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "description" }, "本政策阐述了iBox如何处理您的个人信息，但本政策可能并不涉及所有可能的信息处理情境。有关收集产品或服务特定数据的信息可能由iBox在补充政策中，或者在收集信息时提供的通知，或在不定期更新的本政策中即时发布。")
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("text", { class: "purpose" }, "我们制定本政策的目的在于帮助您了解以下内容："),
            vue.createElementVNode("view", { class: "policy-items" }, [
              vue.createElementVNode("text", null, "1. 如何收集和使用您的个人信息"),
              vue.createElementVNode("text", null, "2. 如何使用Cookie和同类技术"),
              vue.createElementVNode("text", null, "3. 如何披露您的个人信息"),
              vue.createElementVNode("text", null, "4. 如何保护您的个人信息"),
              vue.createElementVNode("text", null, "5. 如何存储您的个人信息"),
              vue.createElementVNode("text", null, "6. 如何查看、更新和删除您的个人信息"),
              vue.createElementVNode("text", null, "7. 第三方服务提供商"),
              vue.createElementVNode("text", null, "8. 您的个人信息如何在全球范围转移"),
              vue.createElementVNode("text", null, "9. 未成年人保护"),
              vue.createElementVNode("text", null, "10. 本政策如何更新"),
              vue.createElementVNode("text", null, "11. 如何联系我们")
            ])
          ])
        ])
      ])
    ]);
  }
  const PagesMineSettingPrivacypolicy = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$2], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/privacypolicy.vue"]]);
  const _sfc_main$2 = {
    data() {
      return {
        isEdit: false,
        // 是否编辑已有地址
        addressData: {
          id: "",
          name: "",
          phone: "",
          region: "",
          address: "",
          isDefault: false
        },
        // 省市区选择器相关数据
        showPicker: false,
        provinces: [],
        // 省份数据
        cities: [],
        // 城市数据
        districts: [],
        // 区县数据
        regionIndexes: [0, 0, 0],
        // 选择的省市区索引
        selectedRegion: {
          province: "",
          city: "",
          district: ""
        },
        // 模拟省市区数据
        mockRegionData: [
          {
            name: "北京市",
            children: [
              {
                name: "北京市",
                children: [
                  { name: "东城区" },
                  { name: "西城区" },
                  { name: "朝阳区" },
                  { name: "海淀区" },
                  { name: "丰台区" }
                ]
              }
            ]
          },
          {
            name: "上海市",
            children: [
              {
                name: "上海市",
                children: [
                  { name: "黄浦区" },
                  { name: "徐汇区" },
                  { name: "长宁区" },
                  { name: "静安区" },
                  { name: "普陀区" }
                ]
              }
            ]
          },
          {
            name: "广东省",
            children: [
              {
                name: "广州市",
                children: [
                  { name: "越秀区" },
                  { name: "海珠区" },
                  { name: "荔湾区" },
                  { name: "天河区" },
                  { name: "白云区" }
                ]
              },
              {
                name: "深圳市",
                children: [
                  { name: "福田区" },
                  { name: "罗湖区" },
                  { name: "南山区" },
                  { name: "宝安区" },
                  { name: "龙岗区" }
                ]
              }
            ]
          },
          {
            name: "江苏省",
            children: [
              {
                name: "南京市",
                children: [
                  { name: "玄武区" },
                  { name: "秦淮区" },
                  { name: "建邺区" },
                  { name: "鼓楼区" },
                  { name: "浦口区" }
                ]
              },
              {
                name: "苏州市",
                children: [
                  { name: "姑苏区" },
                  { name: "虎丘区" },
                  { name: "吴中区" },
                  { name: "相城区" },
                  { name: "吴江区" }
                ]
              }
            ]
          }
        ]
      };
    },
    created() {
      var _a, _b, _c, _d;
      this.provinces = this.mockRegionData;
      this.cities = ((_a = this.provinces[0]) == null ? void 0 : _a.children) || [];
      this.districts = ((_b = this.cities[0]) == null ? void 0 : _b.children) || [];
      const savedAddressData = uni.getStorageSync("savedAddressData");
      const addressId = (_d = (_c = this.$route) == null ? void 0 : _c.query) == null ? void 0 : _d.id;
      if (addressId) {
        this.isEdit = true;
        this.addressData = {
          id: addressId,
          name: "张三",
          phone: "13800138000",
          region: "广东省 深圳市 南山区",
          address: "科技园南路XX号XX室",
          isDefault: true
        };
      } else if (savedAddressData) {
        this.addressData = JSON.parse(savedAddressData);
      }
      if (this.addressData.region) {
        const regions = this.addressData.region.split(" ");
        if (regions.length === 3) {
          this.selectedRegion.province = regions[0];
          this.selectedRegion.city = regions[1];
          this.selectedRegion.district = regions[2];
          this.setRegionIndexes();
        }
      }
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      showRegionPicker() {
        this.showPicker = true;
      },
      hideRegionPicker() {
        this.showPicker = false;
      },
      setRegionIndexes() {
        const provinceIndex = this.provinces.findIndex((p) => p.name === this.selectedRegion.province);
        if (provinceIndex > -1) {
          this.regionIndexes[0] = provinceIndex;
          this.cities = this.provinces[provinceIndex].children || [];
          const cityIndex = this.cities.findIndex((c) => c.name === this.selectedRegion.city);
          if (cityIndex > -1) {
            this.regionIndexes[1] = cityIndex;
            this.districts = this.cities[cityIndex].children || [];
            const districtIndex = this.districts.findIndex((d) => d.name === this.selectedRegion.district);
            if (districtIndex > -1) {
              this.regionIndexes[2] = districtIndex;
            } else {
              this.regionIndexes[2] = 0;
            }
          } else {
            this.regionIndexes[1] = 0;
            this.regionIndexes[2] = 0;
          }
        } else {
          this.regionIndexes = [0, 0, 0];
        }
      },
      handleRegionChange(e) {
        var _a, _b, _c, _d, _e;
        const values = e.detail.value;
        if (values[0] !== this.regionIndexes[0]) {
          this.cities = this.provinces[values[0]].children || [];
          this.districts = ((_a = this.cities[0]) == null ? void 0 : _a.children) || [];
          values[1] = 0;
          values[2] = 0;
        }
        if (values[1] !== this.regionIndexes[1]) {
          this.districts = ((_b = this.cities[values[1]]) == null ? void 0 : _b.children) || [];
          values[2] = 0;
        }
        this.regionIndexes = values;
        this.selectedRegion = {
          province: ((_c = this.provinces[values[0]]) == null ? void 0 : _c.name) || "",
          city: ((_d = this.cities[values[1]]) == null ? void 0 : _d.name) || "",
          district: ((_e = this.districts[values[2]]) == null ? void 0 : _e.name) || ""
        };
        this.$nextTick(() => {
          this.addressData.region = `${this.selectedRegion.province} ${this.selectedRegion.city} ${this.selectedRegion.district}`;
        });
      },
      confirmRegion() {
        if (!this.selectedRegion.province || !this.selectedRegion.city || !this.selectedRegion.district) {
          uni.showToast({
            title: "请选择完整的地区信息",
            icon: "none"
          });
          return;
        }
        this.addressData.region = `${this.selectedRegion.province} ${this.selectedRegion.city} ${this.selectedRegion.district}`;
        formatAppLog("log", "at pages/mine/setting/address-edit.vue:304", "已选择地区：", this.addressData.region);
        this.hideRegionPicker();
      },
      toggleDefault(e) {
        this.addressData.isDefault = e.detail.value;
      },
      saveAddress() {
        if (!this.addressData.name) {
          return uni.showToast({ title: "请输入收货人姓名", icon: "none" });
        }
        if (!this.addressData.phone) {
          return uni.showToast({ title: "请输入手机号码", icon: "none" });
        }
        if (!/^1\d{10}$/.test(this.addressData.phone)) {
          return uni.showToast({ title: "手机号码格式不正确", icon: "none" });
        }
        if (!this.addressData.region) {
          return uni.showToast({ title: "请选择所在地区", icon: "none" });
        }
        if (!this.addressData.address) {
          return uni.showToast({ title: "请输入详细地址", icon: "none" });
        }
        const fullAddress = `${this.addressData.region} ${this.addressData.address}`;
        uni.setStorageSync("updatedAddress", fullAddress);
        uni.setStorageSync("savedAddressData", JSON.stringify(this.addressData));
        uni.showLoading({ title: "保存中..." });
        setTimeout(() => {
          uni.hideLoading();
          uni.showToast({
            title: "保存成功",
            icon: "success",
            success: () => {
              setTimeout(() => {
                uni.navigateBack();
              }, 1500);
            }
          });
        }, 500);
      },
      deleteAddress() {
        uni.showModal({
          title: "提示",
          content: "确定要删除该收货地址吗？",
          success: (res) => {
            if (res.confirm) {
              uni.removeStorageSync("savedAddressData");
              uni.setStorageSync("updatedAddress", "");
              uni.showLoading({ title: "删除中..." });
              setTimeout(() => {
                uni.hideLoading();
                uni.showToast({
                  title: "删除成功",
                  icon: "success",
                  success: () => {
                    setTimeout(() => {
                      uni.navigateBack();
                    }, 1500);
                  }
                });
              }, 500);
            }
          }
        });
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "address-edit-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "收货地址"),
        vue.createElementVNode("view", {
          class: "save-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.saveAddress && $options.saveAddress(...args))
        }, "保存")
      ]),
      vue.createCommentVNode(" 地址表单 "),
      vue.createElementVNode("view", { class: "address-form" }, [
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "收货人"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "text",
              "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.addressData.name = $event),
              placeholder: "请输入收货人姓名",
              class: "input"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.addressData.name]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "手机号码"),
          vue.withDirectives(vue.createElementVNode(
            "input",
            {
              type: "number",
              "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.addressData.phone = $event),
              placeholder: "请输入手机号码",
              class: "input",
              maxlength: "11"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.addressData.phone]
          ])
        ]),
        vue.createElementVNode("view", {
          class: "form-item",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.showRegionPicker && $options.showRegionPicker(...args))
        }, [
          vue.createElementVNode("view", { class: "label" }, "所在地区"),
          vue.createElementVNode("view", { class: "region-picker" }, [
            vue.createElementVNode(
              "text",
              {
                class: vue.normalizeClass(["region-text", { "placeholder": !$data.addressData.region }])
              },
              vue.toDisplayString($data.addressData.region || "请选择省/市/区"),
              3
              /* TEXT, CLASS */
            ),
            vue.createElementVNode("view", { class: "arrow" })
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item" }, [
          vue.createElementVNode("view", { class: "label" }, "详细地址"),
          vue.withDirectives(vue.createElementVNode(
            "textarea",
            {
              "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.addressData.address = $event),
              placeholder: "请输入详细地址，如街道名称、门牌号等",
              class: "textarea"
            },
            null,
            512
            /* NEED_PATCH */
          ), [
            [vue.vModelText, $data.addressData.address]
          ])
        ]),
        vue.createElementVNode("view", { class: "form-item switch-item" }, [
          vue.createElementVNode("view", { class: "label" }, "设为默认地址"),
          vue.createElementVNode("switch", {
            checked: $data.addressData.isDefault,
            onChange: _cache[6] || (_cache[6] = (...args) => $options.toggleDefault && $options.toggleDefault(...args)),
            color: "#4B6CFF"
          }, null, 40, ["checked"])
        ])
      ]),
      vue.createCommentVNode(" 底部操作区 "),
      $data.isEdit ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        class: "bottom-actions"
      }, [
        vue.createElementVNode("view", {
          class: "delete-btn",
          onClick: _cache[7] || (_cache[7] = (...args) => $options.deleteAddress && $options.deleteAddress(...args))
        }, "删除收货地址")
      ])) : vue.createCommentVNode("v-if", true),
      vue.createCommentVNode(" 省市区选择器弹出层 "),
      $data.showPicker ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        class: "picker-popup"
      }, [
        vue.createElementVNode("view", {
          class: "picker-mask",
          onClick: _cache[8] || (_cache[8] = (...args) => $options.hideRegionPicker && $options.hideRegionPicker(...args))
        }),
        vue.createElementVNode("view", { class: "picker-content" }, [
          vue.createElementVNode("view", { class: "picker-header" }, [
            vue.createElementVNode("text", {
              onClick: _cache[9] || (_cache[9] = (...args) => $options.hideRegionPicker && $options.hideRegionPicker(...args))
            }, "取消"),
            vue.createElementVNode("text", null, "所在地区"),
            vue.createElementVNode("text", {
              onClick: _cache[10] || (_cache[10] = (...args) => $options.confirmRegion && $options.confirmRegion(...args))
            }, "确定")
          ]),
          vue.createElementVNode("picker-view", {
            class: "region-picker-view",
            value: $data.regionIndexes,
            onChange: _cache[11] || (_cache[11] = (...args) => $options.handleRegionChange && $options.handleRegionChange(...args))
          }, [
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.provinces, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "picker-item",
                      key: index
                    },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.cities, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "picker-item",
                      key: index
                    },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ]),
            vue.createElementVNode("picker-view-column", null, [
              (vue.openBlock(true), vue.createElementBlock(
                vue.Fragment,
                null,
                vue.renderList($data.districts, (item, index) => {
                  return vue.openBlock(), vue.createElementBlock(
                    "view",
                    {
                      class: "picker-item",
                      key: index
                    },
                    vue.toDisplayString(item.name),
                    1
                    /* TEXT */
                  );
                }),
                128
                /* KEYED_FRAGMENT */
              ))
            ])
          ], 40, ["value"])
        ])
      ])) : vue.createCommentVNode("v-if", true)
    ]);
  }
  const PagesMineSettingAddressEdit = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$1], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/address-edit.vue"]]);
  const _sfc_main$1 = {
    data() {
      return {
        nickname: "bs3dq3z6"
        // 默认显示当前昵称
      };
    },
    methods: {
      goBack() {
        uni.navigateBack();
      },
      saveNickname() {
        if (!this.nickname.trim()) {
          uni.showToast({
            title: "昵称不能为空",
            icon: "none"
          });
          return;
        }
        uni.setStorageSync("updatedNickname", this.nickname);
        uni.showToast({
          title: "保存成功",
          icon: "success",
          duration: 1500,
          success: () => {
            setTimeout(() => {
              uni.navigateBack();
            }, 1500);
          }
        });
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "nickname-edit-container" }, [
      vue.createCommentVNode(" iOS状态栏空白区域 "),
      vue.createElementVNode("view", { class: "status-bar-height" }),
      vue.createCommentVNode(" 顶部栏 "),
      vue.createElementVNode("view", { class: "header" }, [
        vue.createElementVNode("view", {
          class: "back-icon",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.goBack && $options.goBack(...args))
        }, [
          vue.createElementVNode("image", {
            src: _imports_0,
            mode: "aspectFit"
          })
        ]),
        vue.createElementVNode("view", { class: "title" }, "修改昵称"),
        vue.createElementVNode("view", {
          class: "save-btn",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.saveNickname && $options.saveNickname(...args))
        }, "保存")
      ]),
      vue.createCommentVNode(" 昵称输入框 "),
      vue.createElementVNode("view", { class: "input-container" }, [
        vue.withDirectives(vue.createElementVNode(
          "input",
          {
            type: "text",
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.nickname = $event),
            placeholder: "请输入昵称",
            maxlength: "20",
            class: "nickname-input"
          },
          null,
          512
          /* NEED_PATCH */
        ), [
          [vue.vModelText, $data.nickname]
        ])
      ])
    ]);
  }
  const PagesMineSettingNicknameEdit = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render], ["__file", "D:/a1875/Desktop/IBOX-master/pages/mine/setting/nickname-edit.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/login/login", PagesLoginLogin);
  __definePage("pages/register/register", PagesRegisterRegister);
  __definePage("pages/createpocket/createpocket", PagesCreatepocketCreatepocket);
  __definePage("pages/home/home", PagesHomeHome);
  __definePage("pages/message/message", PagesMessageMessage);
  __definePage("pages/messageInfo/messageInfo", PagesMessageInfoMessageInfo);
  __definePage("pages/announcement/announcement", PagesAnnouncementAnnouncement);
  __definePage("pages/announcementInfo/announcementInfo", PagesAnnouncementInfoAnnouncementInfo);
  __definePage("pages/profile/profile", PagesProfileProfile);
  __definePage("pages/lottery/lottery", PagesLotteryLottery);
  __definePage("pages/mine/setting/mainsetting", PagesMineSettingMainsetting);
  __definePage("pages/mine/box-record", PagesMineBoxRecord);
  __definePage("pages/mine/order", PagesMineOrder);
  __definePage("pages/mine/order-search", PagesMineOrderSearch);
  __definePage("pages/mine/setting/personal-info", PagesMineSettingPersonalInfo);
  __definePage("pages/mine/setting/privacy", PagesMineSettingPrivacy);
  __definePage("pages/mine/setting/about", PagesMineSettingAbout);
  __definePage("pages/mine/setting/privacypolicy", PagesMineSettingPrivacypolicy);
  __definePage("pages/mine/setting/address-edit", PagesMineSettingAddressEdit);
  __definePage("pages/mine/setting/nickname-edit", PagesMineSettingNicknameEdit);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "D:/a1875/Desktop/IBOX-master/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(Vue);
