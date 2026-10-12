const copy = {
  zh: {
    brand: "智能厨房助手",
    nav_loop: "闭环",
    nav_who: "适合谁",
    nav_use: "怎么用上",
    nav_demo: "展会",
    nav_cta: "打开应用",
    hero_title: "家里有什么就吃什么，缺什么自动列清单",
    hero_lede:
      "这是产品官网——给所有想自己做饭、少浪费的人。真正干活的应用在单独的 PWA 里，可添加到手机主屏幕。",
    hero_cta_primary: "打开 PWA 应用",
    hero_cta_secondary: "先看产品闭环",
    split_title: "官网 ≠ 应用",
    split_lede: "两个入口，别混用。",
    split_web_t: "本站 · website/",
    split_web_d:
      "宣传与说明页。给非展会用户、朋友、访客浏览——不需要登录，也不能管你的冰箱。",
    split_pwa_t: "应用 · pwa/",
    split_pwa_d:
      "真正的产品：库存、菜谱、推荐、周计划与购物清单。浏览器打开后可「添加到主屏幕」，像 App 一样用。",
    loop_title: "一条闭环，四个能力",
    loop_lede: "核心不是再做一个菜谱站，而是让「家里有的」决定「今晚吃什么」。",
    loop_1_t: "菜谱采集",
    loop_1_d: "粘贴链接或文字，整理成标准菜谱；起步家常菜库。外链可收藏，不做视频解析。",
    loop_2_t: "库存管理",
    loop_2_d: "数量、位置、过期日；拍照识别后确认再入库。",
    loop_3_t: "菜谱推荐",
    loop_3_d: "按食材与烹饪方式筛选；标注已有 / 缺少；临期优先消耗。",
    loop_4_t: "周计划与购物清单",
    loop_4_d: "待购量 = 需求 − 库存。缺什么自动列清单。",
    who_title: "适合谁",
    who_body:
      "留学生、租房白领、以及任何自己开火却讨厌浪费的人——不只是展会观众。界面可中英切换；应用为单用户密码，数据在本机。",
    use_title: "怎么用上 PWA",
    use_lede: "应用在独立文件夹。本地或部署后用手机浏览器打开，再固定到主屏幕。",
    use_1_t: "打开应用地址",
    use_1_d:
      "开发时：在 pwa 目录启动本地服务，手机访问电脑局域网地址。上线后：访问你部署的 HTTPS 链接。",
    use_2_t: "添加到主屏幕",
    use_2_d:
      "iPhone 用 Safari 分享 → 添加到主屏幕；Android 用 Chrome「安装应用」。详细步骤见 pwa/README.md。",
    use_3_t: "密码进入",
    use_3_d: "无公开注册。默认演示密码见应用登录页；正式使用请自行修改。",
    use_cta: "现在打开 PWA",
    demo_title: "展会只是场景之一",
    demo_body:
      "展会可走：扫描包装 → 入库 → 临期视图 → 分享小卡片。日常用户直接用 PWA 管冰箱与购物清单即可，不必到场。",
    demo_cta: "用应用体验闭环",
    cta_title: "先看官网，再用应用",
    cta_body:
      "想了解产品就留在本页；想管厨房请打开 PWA。也可留下邮箱，我们发部署好的应用链接。",
    cta_open: "打开 PWA 应用",
    cta_email_label: "邮箱",
    cta_email_ph: "you@example.com",
    cta_submit: "发送应用链接给我",
    cta_thanks: "已记下，我们会把应用地址发到你的邮箱。",
    footer_tag: "官网 website/ · 应用 pwa/",
  },
  en: {
    brand: "Smart Kitchen",
    nav_loop: "The loop",
    nav_who: "Who it’s for",
    nav_use: "How to use",
    nav_demo: "Expo",
    nav_cta: "Open app",
    hero_title: "Cook from what you have. Auto-list what you lack.",
    hero_lede:
      "This is the marketing site for everyone. The real product lives in a separate PWA you can add to your home screen.",
    hero_cta_primary: "Open the PWA",
    hero_cta_secondary: "See the product loop",
    split_title: "Website ≠ App",
    split_lede: "Two entry points — don’t mix them up.",
    split_web_t: "This site · website/",
    split_web_d:
      "Marketing and explainers for anyone — friends, visitors, non-expo users. No login; it won’t manage your fridge.",
    split_pwa_t: "The app · pwa/",
    split_pwa_d:
      "The real product: inventory, recipes, recommend, weekly plan & shopping list. Open in a browser, then Add to Home Screen.",
    loop_title: "One loop. Four capabilities.",
    loop_lede: "Not another recipe site — what you own decides dinner.",
    loop_1_t: "Recipe capture",
    loop_1_d: "Paste links or text into structured recipes; starter home-cooking library. Keep external links; no video parsing.",
    loop_2_t: "Inventory",
    loop_2_d: "Qty, location, expiry; photo ID with confirm-before-save.",
    loop_3_t: "Recommend",
    loop_3_d: "Filter by ingredients & methods; have / missing; use-up-soon first.",
    loop_4_t: "Weekly plan & list",
    loop_4_d: "Buy qty = demand − stock. Gaps become the shopping list.",
    who_title: "Who it’s for",
    who_body:
      "Students abroad, renters, anyone who cooks and hates waste — not only expo visitors. Bilingual UI; single-user password; data stays on device.",
    use_title: "How to use the PWA",
    use_lede: "The app is in its own folder. Serve it, open on your phone, pin to the home screen.",
    use_1_t: "Open the app URL",
    use_1_d:
      "Locally: start a server in pwa/ and open the LAN URL on your phone. In production: your HTTPS deploy URL.",
    use_2_t: "Add to Home Screen",
    use_2_d:
      "iPhone Safari → Share → Add to Home Screen. Android Chrome → Install app. Details in pwa/README.md.",
    use_3_t: "Password gate",
    use_3_d: "No public signup. Demo password is on the login screen; change it for real use.",
    use_cta: "Open the PWA now",
    demo_title: "Expo is just one scenario",
    demo_body:
      "On the floor: scan → stock → expiry → shareable card. Everyday users just use the PWA for fridge & shopping — no booth required.",
    demo_cta: "Try the loop in the app",
    cta_title: "Read here. Cook in the app.",
    cta_body:
      "Stay on this page to learn. Open the PWA to manage your kitchen. Or leave an email for a deployed app link.",
    cta_open: "Open the PWA",
    cta_email_label: "Email",
    cta_email_ph: "you@example.com",
    cta_submit: "Send me the app link",
    cta_thanks: "Noted — we’ll email the app URL.",
    footer_tag: "Site website/ · App pwa/",
  },
};

let lang = "zh";

function applyLang(next) {
  lang = next;
  document.documentElement.lang = next === "zh" ? "zh-Hans" : "en";
  const dict = copy[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
  });
  const toggle = document.getElementById("langToggle");
  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  document.title =
    lang === "zh"
      ? "智能厨房助手 — 家里有什么就吃什么"
      : "Smart Kitchen — Cook from what you have";
}

function setupReveal() {
  const nodes = document.querySelectorAll("[data-reveal]");
  if (!("IntersectionObserver" in window)) {
    nodes.forEach((n) => n.classList.add("is-in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  nodes.forEach((n) => io.observe(n));
}

function setupHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 24);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function setupWaitlist() {
  const form = document.getElementById("waitlist");
  const note = document.getElementById("formNote");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = new FormData(form).get("email");
    try {
      const prev = JSON.parse(localStorage.getItem("kitchen.waitlist") || "[]");
      prev.push({ email, at: new Date().toISOString(), lang, source: "website" });
      localStorage.setItem("kitchen.waitlist", JSON.stringify(prev));
    } catch (_) {}
    form.hidden = true;
    if (note) note.hidden = false;
  });
}

document.getElementById("langToggle")?.addEventListener("click", () => {
  applyLang(lang === "zh" ? "en" : "zh");
});

applyLang("zh");
setupReveal();
setupHeader();
setupWaitlist();
