// src/Clients/TodayReports/Branch/vite.config.js
import { defineConfig, normalizePath, build } from "file:///D:/SREENIVAS/2024/Oct/21/LaundryFrontEnd/node_modules/vite/dist/node/index.js";
import nunjucks from "file:///D:/SREENIVAS/2024/Oct/21/LaundryFrontEnd/node_modules/vite-plugin-nunjucks/dist/index.mjs";
import { viteStaticCopy } from "file:///D:/SREENIVAS/2024/Oct/21/LaundryFrontEnd/node_modules/vite-plugin-static-copy/dist/index.js";
import path, { resolve as resolve2 } from "path";
import { fileURLToPath } from "url";

// src/Clients/TodayReports/Branch/KCode/getFiles.js
import fs from "fs";
import { resolve } from "path";
var StartFunc = ({ inSrcPath }) => {
  const root2 = `${inSrcPath}/HtmlFiles`;
  let files2 = {};
  fs.readdirSync(root2).filter((filename) => filename.endsWith(".html")).forEach((filename) => {
    let LoopInsideKeyName = filename.slice(0, -5);
    files2[LoopInsideKeyName] = resolve(root2, filename);
  });
  return files2;
};

// src/Clients/TodayReports/Branch/KCode/sideBarItems.json
var sideBarItems_default = [
  {
    name: "Today-Reports"
  },
  {
    name: "Home",
    icon: "bi bi-grid",
    url: "../../Branch/NewOrders/HtmlFiles/Customer.html"
  },
  {
    name: "ShowAll",
    url: "PaymentsShowAll.html",
    icon: "bi bi-border-all"
  },
  {
    name: "Cash",
    url: "PaymentsCash.html",
    icon: "bi bi-cash-coin"
  },
  {
    name: "Card",
    url: "PaymentsCard.html",
    icon: "bi bi-person-vcard-fill"
  },
  {
    name: "UPI",
    url: "PaymentsUPI.html",
    icon: "bi bi-currency-dollar"
  }
];

// src/Clients/TodayReports/Branch/KCode/prepareSideBar.js
var StartFunc2 = () => {
  return sideBarItems_default;
};

// src/Clients/TodayReports/Branch/KCode/generateVariables.js
var StartFunc3 = ({ mode, inFilesArray, inSrcPath }) => {
  const variables = {};
  let LocalFiles = inFilesArray;
  const sidebarItems = StartFunc2();
  Object.keys(LocalFiles).forEach((filename) => {
    variables[filename + ".html"] = {
      web_title: "Mazer Admin Dashboard",
      filename: filename + ".html",
      sidebarItems,
      isDev: mode === "development",
      tableName: "",
      columnData: {}
    };
  });
  return variables;
};

// src/Clients/TodayReports/Branch/vite.config.js
var __vite_injected_original_import_meta_url = "file:///D:/SREENIVAS/2024/Oct/21/LaundryFrontEnd/src/Clients/TodayReports/Branch/vite.config.js";
var __filename = fileURLToPath(__vite_injected_original_import_meta_url);
var __dirname = path.dirname(__filename);
var SourceFolderName = "SourceCode";
var SrcFolder = "src/Clients/TodayReports/Branch";
var FrontEndDistFolder = "publicDir/TodayReports";
var root = resolve2(__dirname, `${SrcFolder}/${SourceFolderName}`);
console.log("root : ", root);
var files = StartFunc({ inSrcPath: `${SrcFolder}/${SourceFolderName}` });
build({
  configFile: false,
  build: {
    emptyOutDir: false,
    outDir: resolve2(__dirname, `../../../../${FrontEndDistFolder}/assets/compiled/js`),
    lib: {
      name: "app",
      formats: ["umd"],
      fileName: "app",
      entry: `${SrcFolder}/${SourceFolderName}/assets/js/app.js`
    },
    rollupOptions: {
      output: {
        entryFileNames: "[name].js"
      }
    }
  }
});
var vite_config_default = defineConfig((env) => ({
  publicDir: "static",
  base: "./",
  root: resolve2(__dirname, `../../../../${SrcFolder}/${SourceFolderName}`),
  plugins: [
    viteStaticCopy({
      targets: [
        { src: normalizePath(resolve2(__dirname, `../../../../${SrcFolder}/${SourceFolderName}/assets/static`)), dest: "assets" }
      ],
      watch: {
        reloadPageOnChange: true
      }
    }),
    nunjucks({
      templatesDir: root,
      variables: StartFunc3({ mode: env.mode, inFilesArray: files, inSrcPath: SrcFolder }),
      nunjucksEnvironment: {
        filters: {
          containString: (str, containStr) => {
            if (!str.length) return false;
            return str.indexOf(containStr) >= 0;
          },
          startsWith: (str, targetStr) => {
            if (!str.length) return false;
            return str.startsWith(targetStr);
          }
        }
      }
    })
  ],
  resolve: {
    alias: {
      "@": normalizePath(resolve2(__dirname, "src")),
      "~bootstrap": resolve2(__dirname, "node_modules/bootstrap"),
      "~bootstrap-icons": resolve2(__dirname, "node_modules/bootstrap-icons"),
      "~perfect-scrollbar": resolve2(__dirname, "node_modules/perfect-scrollbar"),
      "~@fontsource": resolve2(__dirname, "node_modules/@fontsource")
    }
  },
  build: {
    emptyOutDir: false,
    manifest: true,
    target: "chrome58",
    outDir: resolve2(__dirname, `../../../../${FrontEndDistFolder}`),
    rollupOptions: {
      input: files,
      output: {}
    }
  }
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0NsaWVudHMvVG9kYXlSZXBvcnRzL0JyYW5jaC92aXRlLmNvbmZpZy5qcyIsICJzcmMvQ2xpZW50cy9Ub2RheVJlcG9ydHMvQnJhbmNoL0tDb2RlL2dldEZpbGVzLmpzIiwgInNyYy9DbGllbnRzL1RvZGF5UmVwb3J0cy9CcmFuY2gvS0NvZGUvc2lkZUJhckl0ZW1zLmpzb24iLCAic3JjL0NsaWVudHMvVG9kYXlSZXBvcnRzL0JyYW5jaC9LQ29kZS9wcmVwYXJlU2lkZUJhci5qcyIsICJzcmMvQ2xpZW50cy9Ub2RheVJlcG9ydHMvQnJhbmNoL0tDb2RlL2dlbmVyYXRlVmFyaWFibGVzLmpzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDpcXFxcU1JFRU5JVkFTXFxcXDIwMjRcXFxcT2N0XFxcXDIxXFxcXExhdW5kcnlGcm9udEVuZFxcXFxzcmNcXFxcQ2xpZW50c1xcXFxUb2RheVJlcG9ydHNcXFxcQnJhbmNoXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxTUkVFTklWQVNcXFxcMjAyNFxcXFxPY3RcXFxcMjFcXFxcTGF1bmRyeUZyb250RW5kXFxcXHNyY1xcXFxDbGllbnRzXFxcXFRvZGF5UmVwb3J0c1xcXFxCcmFuY2hcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L1NSRUVOSVZBUy8yMDI0L09jdC8yMS9MYXVuZHJ5RnJvbnRFbmQvc3JjL0NsaWVudHMvVG9kYXlSZXBvcnRzL0JyYW5jaC92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbm9ybWFsaXplUGF0aCwgYnVpbGQgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IG51bmp1Y2tzIGZyb20gJ3ZpdGUtcGx1Z2luLW51bmp1Y2tzJztcclxuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XHJcblxyXG5pbXBvcnQgcGF0aCwgeyByZXNvbHZlIH0gZnJvbSAncGF0aCc7XHJcbmltcG9ydCB7IGZpbGVVUkxUb1BhdGggfSBmcm9tICd1cmwnO1xyXG5cclxuaW1wb3J0IHsgU3RhcnRGdW5jIGFzIFN0YXJ0RnVuY0dldEZpbGVzIH0gZnJvbSBcIi4vS0NvZGUvZ2V0RmlsZXMuanNcIjtcclxuaW1wb3J0IHsgU3RhcnRGdW5jIGFzIFN0YXJ0RnVuY0dldFZhcmlhYmxlcyB9IGZyb20gXCIuL0tDb2RlL2dlbmVyYXRlVmFyaWFibGVzLmpzXCI7XHJcblxyXG5jb25zdCBfX2ZpbGVuYW1lID0gZmlsZVVSTFRvUGF0aChpbXBvcnQubWV0YS51cmwpO1xyXG5jb25zdCBfX2Rpcm5hbWUgPSBwYXRoLmRpcm5hbWUoX19maWxlbmFtZSk7XHJcblxyXG5jb25zdCBTb3VyY2VGb2xkZXJOYW1lID0gXCJTb3VyY2VDb2RlXCI7XHJcbmNvbnN0IFNyY0ZvbGRlciA9IFwic3JjL0NsaWVudHMvVG9kYXlSZXBvcnRzL0JyYW5jaFwiO1xyXG5cclxuY29uc3QgRnJvbnRFbmREaXN0Rm9sZGVyID0gXCJwdWJsaWNEaXIvVG9kYXlSZXBvcnRzXCI7XHJcblxyXG5jb25zdCByb290ID0gcmVzb2x2ZShfX2Rpcm5hbWUsIGAke1NyY0ZvbGRlcn0vJHtTb3VyY2VGb2xkZXJOYW1lfWApO1xyXG5cclxuY29uc29sZS5sb2coXCJyb290IDogXCIsIHJvb3QpO1xyXG5cclxubGV0IGZpbGVzID0gU3RhcnRGdW5jR2V0RmlsZXMoeyBpblNyY1BhdGg6IGAke1NyY0ZvbGRlcn0vJHtTb3VyY2VGb2xkZXJOYW1lfWAgfSk7XHJcblxyXG5idWlsZCh7XHJcbiAgICBjb25maWdGaWxlOiBmYWxzZSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgICAgZW1wdHlPdXREaXI6IGZhbHNlLFxyXG4gICAgICAgIG91dERpcjogcmVzb2x2ZShfX2Rpcm5hbWUsIGAuLi8uLi8uLi8uLi8ke0Zyb250RW5kRGlzdEZvbGRlcn0vYXNzZXRzL2NvbXBpbGVkL2pzYCksXHJcbiAgICAgICAgbGliOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdhcHAnLFxyXG4gICAgICAgICAgICBmb3JtYXRzOiBbJ3VtZCddLFxyXG4gICAgICAgICAgICBmaWxlTmFtZTogJ2FwcCcsXHJcbiAgICAgICAgICAgIGVudHJ5OiBgJHtTcmNGb2xkZXJ9LyR7U291cmNlRm9sZGVyTmFtZX0vYXNzZXRzL2pzL2FwcC5qc2AsXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdbbmFtZV0uanMnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoZW52KSA9PiAoe1xyXG4gICAgcHVibGljRGlyOiAnc3RhdGljJyxcclxuICAgIGJhc2U6ICcuLycsXHJcbiAgICByb290OiByZXNvbHZlKF9fZGlybmFtZSwgYC4uLy4uLy4uLy4uLyR7U3JjRm9sZGVyfS8ke1NvdXJjZUZvbGRlck5hbWV9YCksXHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgdml0ZVN0YXRpY0NvcHkoe1xyXG4gICAgICAgICAgICB0YXJnZXRzOiBbXHJcbiAgICAgICAgICAgICAgICB7IHNyYzogbm9ybWFsaXplUGF0aChyZXNvbHZlKF9fZGlybmFtZSwgYC4uLy4uLy4uLy4uLyR7U3JjRm9sZGVyfS8ke1NvdXJjZUZvbGRlck5hbWV9L2Fzc2V0cy9zdGF0aWNgKSksIGRlc3Q6IFwiYXNzZXRzXCIgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICB3YXRjaDoge1xyXG4gICAgICAgICAgICAgICAgcmVsb2FkUGFnZU9uQ2hhbmdlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBudW5qdWNrcyh7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlc0Rpcjogcm9vdCxcclxuICAgICAgICAgICAgdmFyaWFibGVzOiBTdGFydEZ1bmNHZXRWYXJpYWJsZXMoeyBtb2RlOiBlbnYubW9kZSwgaW5GaWxlc0FycmF5OiBmaWxlcywgaW5TcmNQYXRoOiBTcmNGb2xkZXIgfSksXHJcbiAgICAgICAgICAgIG51bmp1Y2tzRW52aXJvbm1lbnQ6IHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluU3RyaW5nOiAoc3RyLCBjb250YWluU3RyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghc3RyLmxlbmd0aCkgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIuaW5kZXhPZihjb250YWluU3RyKSA+PSAwXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydHNXaXRoOiAoc3RyLCB0YXJnZXRTdHIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdHIubGVuZ3RoKSByZXR1cm4gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5zdGFydHNXaXRoKHRhcmdldFN0cilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgXSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgICBhbGlhczoge1xyXG4gICAgICAgICAgICAnQCc6IG5vcm1hbGl6ZVBhdGgocmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKSksXHJcbiAgICAgICAgICAgICd+Ym9vdHN0cmFwJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvYm9vdHN0cmFwJyksXHJcbiAgICAgICAgICAgICd+Ym9vdHN0cmFwLWljb25zJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvYm9vdHN0cmFwLWljb25zJyksXHJcbiAgICAgICAgICAgICd+cGVyZmVjdC1zY3JvbGxiYXInOiByZXNvbHZlKF9fZGlybmFtZSwgJ25vZGVfbW9kdWxlcy9wZXJmZWN0LXNjcm9sbGJhcicpLFxyXG4gICAgICAgICAgICAnfkBmb250c291cmNlJzogcmVzb2x2ZShfX2Rpcm5hbWUsICdub2RlX21vZHVsZXMvQGZvbnRzb3VyY2UnKSxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICBlbXB0eU91dERpcjogZmFsc2UsXHJcbiAgICAgICAgbWFuaWZlc3Q6IHRydWUsXHJcbiAgICAgICAgdGFyZ2V0OiBcImNocm9tZTU4XCIsXHJcbiAgICAgICAgb3V0RGlyOiByZXNvbHZlKF9fZGlybmFtZSwgYC4uLy4uLy4uLy4uLyR7RnJvbnRFbmREaXN0Rm9sZGVyfWApLFxyXG4gICAgICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgICAgICAgaW5wdXQ6IGZpbGVzLFxyXG4gICAgICAgICAgICBvdXRwdXQ6IHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9XHJcbn0pKTsiLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFNSRUVOSVZBU1xcXFwyMDI0XFxcXE9jdFxcXFwyMVxcXFxMYXVuZHJ5RnJvbnRFbmRcXFxcc3JjXFxcXENsaWVudHNcXFxcVG9kYXlSZXBvcnRzXFxcXEJyYW5jaFxcXFxLQ29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcU1JFRU5JVkFTXFxcXDIwMjRcXFxcT2N0XFxcXDIxXFxcXExhdW5kcnlGcm9udEVuZFxcXFxzcmNcXFxcQ2xpZW50c1xcXFxUb2RheVJlcG9ydHNcXFxcQnJhbmNoXFxcXEtDb2RlXFxcXGdldEZpbGVzLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TUkVFTklWQVMvMjAyNC9PY3QvMjEvTGF1bmRyeUZyb250RW5kL3NyYy9DbGllbnRzL1RvZGF5UmVwb3J0cy9CcmFuY2gvS0NvZGUvZ2V0RmlsZXMuanNcIjtpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5cclxuY29uc3QgU3RhcnRGdW5jID0gKHsgaW5TcmNQYXRoIH0pID0+IHtcclxuICAgIGNvbnN0IHJvb3QgPSBgJHtpblNyY1BhdGh9L0h0bWxGaWxlc2A7XHJcbiAgICBsZXQgZmlsZXMgPSB7fVxyXG5cclxuICAgIGZzLnJlYWRkaXJTeW5jKHJvb3QpXHJcbiAgICAgICAgLmZpbHRlcihmaWxlbmFtZSA9PiBmaWxlbmFtZS5lbmRzV2l0aCgnLmh0bWwnKSlcclxuICAgICAgICAuZm9yRWFjaChmaWxlbmFtZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBMb29wSW5zaWRlS2V5TmFtZSA9IGZpbGVuYW1lLnNsaWNlKDAsIC01KTtcclxuICAgICAgICAgICAgZmlsZXNbTG9vcEluc2lkZUtleU5hbWVdID0gcmVzb2x2ZShyb290LCBmaWxlbmFtZSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZmlsZXM7XHJcbn07XHJcblxyXG5leHBvcnQgeyBTdGFydEZ1bmMgfTsiLCAiW1xyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlRvZGF5LVJlcG9ydHNcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBcIm5hbWVcIjogXCJIb21lXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiYmkgYmktZ3JpZFwiLFxyXG4gICAgICAgIFwidXJsXCI6IFwiLi4vLi4vQnJhbmNoL05ld09yZGVycy9IdG1sRmlsZXMvQ3VzdG9tZXIuaHRtbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlNob3dBbGxcIixcclxuICAgICAgICBcInVybFwiOiBcIlBheW1lbnRzU2hvd0FsbC5odG1sXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiYmkgYmktYm9yZGVyLWFsbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIkNhc2hcIixcclxuICAgICAgICBcInVybFwiOiBcIlBheW1lbnRzQ2FzaC5odG1sXCIsXHJcbiAgICAgICAgXCJpY29uXCI6IFwiYmkgYmktY2FzaC1jb2luXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2FyZFwiLFxyXG4gICAgICAgIFwidXJsXCI6IFwiUGF5bWVudHNDYXJkLmh0bWxcIixcclxuICAgICAgICBcImljb25cIjogXCJiaSBiaS1wZXJzb24tdmNhcmQtZmlsbFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIFwibmFtZVwiOiBcIlVQSVwiLFxyXG4gICAgICAgIFwidXJsXCI6IFwiUGF5bWVudHNVUEkuaHRtbFwiLFxyXG4gICAgICAgIFwiaWNvblwiOiBcImJpIGJpLWN1cnJlbmN5LWRvbGxhclwiXHJcbiAgICB9XHJcbl0iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6XFxcXFNSRUVOSVZBU1xcXFwyMDI0XFxcXE9jdFxcXFwyMVxcXFxMYXVuZHJ5RnJvbnRFbmRcXFxcc3JjXFxcXENsaWVudHNcXFxcVG9kYXlSZXBvcnRzXFxcXEJyYW5jaFxcXFxLQ29kZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcU1JFRU5JVkFTXFxcXDIwMjRcXFxcT2N0XFxcXDIxXFxcXExhdW5kcnlGcm9udEVuZFxcXFxzcmNcXFxcQ2xpZW50c1xcXFxUb2RheVJlcG9ydHNcXFxcQnJhbmNoXFxcXEtDb2RlXFxcXHByZXBhcmVTaWRlQmFyLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9TUkVFTklWQVMvMjAyNC9PY3QvMjEvTGF1bmRyeUZyb250RW5kL3NyYy9DbGllbnRzL1RvZGF5UmVwb3J0cy9CcmFuY2gvS0NvZGUvcHJlcGFyZVNpZGVCYXIuanNcIjtpbXBvcnQgc2lkZUJhckl0ZW1zSnNvbiBmcm9tICcuL3NpZGVCYXJJdGVtcy5qc29uJyB3aXRoIHt0eXBlOiAnanNvbid9O1xyXG5cclxuY29uc3QgU3RhcnRGdW5jID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHNpZGVCYXJJdGVtc0pzb247XHJcbn07XHJcblxyXG5leHBvcnQgeyBTdGFydEZ1bmMgfTtcclxuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxTUkVFTklWQVNcXFxcMjAyNFxcXFxPY3RcXFxcMjFcXFxcTGF1bmRyeUZyb250RW5kXFxcXHNyY1xcXFxDbGllbnRzXFxcXFRvZGF5UmVwb3J0c1xcXFxCcmFuY2hcXFxcS0NvZGVcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXFNSRUVOSVZBU1xcXFwyMDI0XFxcXE9jdFxcXFwyMVxcXFxMYXVuZHJ5RnJvbnRFbmRcXFxcc3JjXFxcXENsaWVudHNcXFxcVG9kYXlSZXBvcnRzXFxcXEJyYW5jaFxcXFxLQ29kZVxcXFxnZW5lcmF0ZVZhcmlhYmxlcy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovU1JFRU5JVkFTLzIwMjQvT2N0LzIxL0xhdW5kcnlGcm9udEVuZC9zcmMvQ2xpZW50cy9Ub2RheVJlcG9ydHMvQnJhbmNoL0tDb2RlL2dlbmVyYXRlVmFyaWFibGVzLmpzXCI7aW1wb3J0IHsgU3RhcnRGdW5jIGFzIHByZXBhcmVTaWRlQmFyIH0gZnJvbSBcIi4vcHJlcGFyZVNpZGVCYXIuanNcIjtcclxuXHJcbmNvbnN0IFN0YXJ0RnVuYyA9ICh7IG1vZGUsIGluRmlsZXNBcnJheSwgaW5TcmNQYXRoIH0pID0+IHtcclxuICAgIGNvbnN0IHZhcmlhYmxlcyA9IHt9O1xyXG4gICAgbGV0IExvY2FsRmlsZXMgPSBpbkZpbGVzQXJyYXk7XHJcbiAgICBjb25zdCBzaWRlYmFySXRlbXMgPSBwcmVwYXJlU2lkZUJhcigpO1xyXG5cclxuICAgIE9iamVjdC5rZXlzKExvY2FsRmlsZXMpLmZvckVhY2goKGZpbGVuYW1lKSA9PiB7XHJcbiAgICAgICAgdmFyaWFibGVzW2ZpbGVuYW1lICsgJy5odG1sJ10gPSB7XHJcbiAgICAgICAgICAgIHdlYl90aXRsZTogXCJNYXplciBBZG1pbiBEYXNoYm9hcmRcIixcclxuICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGVuYW1lICsgJy5odG1sJyxcclxuICAgICAgICAgICAgc2lkZWJhckl0ZW1zLFxyXG4gICAgICAgICAgICBpc0RldjogbW9kZSA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgICAgICAgICAgdGFibGVOYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBjb2x1bW5EYXRhOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gdmFyaWFibGVzO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgU3RhcnRGdW5jIH07Il0sCiAgIm1hcHBpbmdzIjogIjtBQUE4WixTQUFTLGNBQWMsZUFBZSxhQUFhO0FBQ2pkLE9BQU8sY0FBYztBQUNyQixTQUFTLHNCQUFzQjtBQUUvQixPQUFPLFFBQVEsV0FBQUEsZ0JBQWU7QUFDOUIsU0FBUyxxQkFBcUI7OztBQ0w4WSxPQUFPLFFBQVE7QUFDM2IsU0FBUyxlQUFlO0FBRXhCLElBQU0sWUFBWSxDQUFDLEVBQUUsVUFBVSxNQUFNO0FBQ2pDLFFBQU1DLFFBQU8sR0FBRyxTQUFTO0FBQ3pCLE1BQUlDLFNBQVEsQ0FBQztBQUViLEtBQUcsWUFBWUQsS0FBSSxFQUNkLE9BQU8sY0FBWSxTQUFTLFNBQVMsT0FBTyxDQUFDLEVB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V0MsV0FBc0IsRUFBRSxNQUFNLElBQUksTUFBTSxjQUFjLE9BQU8sV0FBVyxVQUFVLENBQUM7QUFBQSxNQUM5RixxQkFBcUI7QUFBQSxRQUNqQixTQUFTO0FBQUEsVUFDTCxlQUFlLENBQUMsS0FBSyxlQUFlO0FBQ2hDLGdCQUFJLENBQUMsSUFBSSxPQUFRLFFBQU87QUFDeEIsbUJBQU8sSUFBSSxRQUFRLFVBQVUsS0FBSztBQUFBLFVBQ3RDO0FBQUEsVUFDQSxZQUFZLENBQUMsS0FBSyxjQUFjO0FBQzVCLGdCQUFJLENBQUMsSUFBSSxPQUFRLFFBQU87QUFDeEIsbUJBQU8sSUFBSSxXQUFXLFNBQVM7QUFBQSxVQUNuQztBQUFBLFFBQ0o7QUFBQSxNQUNKO0FBQUEsSUFDSixDQUFDO0FBQUEsRUFDTDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ0wsT0FBTztBQUFBLE1BQ0gsS0FBSyxjQUFjRCxTQUFRLFdBQVcsS0FBSyxDQUFDO0FBQUEsTUFDNUMsY0FBY0EsU0FBUSxXQUFXLHdCQUF3QjtBQUFBLE1BQ3pELG9CQUFvQkEsU0FBUSxXQUFXLDhCQUE4QjtBQUFBLE1BQ3JFLHNCQUFzQkEsU0FBUSxXQUFXLGdDQUFnQztBQUFBLE1BQ3pFLGdCQUFnQkEsU0FBUSxXQUFXLDBCQUEwQjtBQUFBLElBQ2pFO0FBQUEsRUFDSjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0gsYUFBYTtBQUFBLElBQ2IsVUFBVTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsUUFBUUEsU0FBUSxXQUFXLGVBQWUsa0JBQWtCLEVBQUU7QUFBQSxJQUM5RCxlQUFlO0FBQUEsTUFDWCxPQUFPO0FBQUEsTUFDUCxRQUFRLENBQ1I7QUFBQSxJQUNKO0FBQUEsRUFDSjtBQUNKLEVBQUU7IiwKICAibmFtZXMiOiBbInJlc29sdmUiLCAicm9vdCIsICJmaWxlcyIsICJTdGFydEZ1bmMiLCAiU3RhcnRGdW5jIiwgInJlc29sdmUiLCAiU3RhcnRGdW5jIl0KfQo=
