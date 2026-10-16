# Ching-Yu Yang - 個人履歷網站 (靜態網頁專案)

這是一個依據你履歷資料量身打造的**純靜態履歷網站**。
完全採用原生的 **HTML5 + CSS3 + Vanilla JavaScript** 開發，完全契合前輩建議建立的學習目標。

---

## 網頁結構與三劍客分工 (呼應前輩第一點)

1. **`index.html` (骨架)**：
   * 使用語義化標籤（`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`）。
   * 結構化展示你的學歷（台科大碩士 4.10 / 台大護理）、9 項 C++/EDA/ML 專案、臨床與業務工作經歷、各項技能標籤。
2. **`style.css` (外觀與排版)**：
   * 使用 CSS 變數（`:root`）定義 Design Token。
   * 實作**現代極簡科技風格**卡片排版、時間軸（Timeline）以及針對手機/平板的響應式設計（Responsive Design）。
   * 內建 `@media print` 樣式，在瀏覽器按 `Cmd + P` 可直接另存為漂亮的單/雙頁 PDF 履歷。
3. **`script.js` (互動神經)**：
   * **深色/淺色主題切換**：透過監聽按鈕點擊，修改 HTML 屬性並記住於瀏覽器的 `localStorage`。
   * **專案即時篩選器**：提供「全部 / EDA (C++) / 機器學習 (Python)」切換按鈕，透過 DOM 操作即時隱藏或顯示對應卡片。

---

## 本地預覽方式 (Local Preview)

你可以在終端機中執行以下任一方式預覽：

### 方式 A：直接用瀏覽器開啟 HTML 檔案
```bash
open /Users/madashi/.gemini/antigravity/scratch/resume-website/index.html
```

### 方式 B：用 Python 啟動輕量級本地 Web 伺服器
```bash
cd /Users/madashi/.gemini/antigravity/scratch/resume-website
python3 -m http.server 3000
```
然後在瀏覽器打開：`http://localhost:3000`

---

## 未來上架至 GitHub Pages 的步驟 (等你準備好再做)

GitHub Pages 是一個免費的靜態網站託管服務。當你日後想把網站公開時，只需：
1. 在 GitHub 上建立一個名為 `<你的帳號>.github.io`（例如 `cyyang2025.github.io`）的公開儲存庫 (Public Repo)。
2. 將本專案的所有檔案（`index.html`, `style.css`, `script.js`）推送到該 repo 的 `main` 分支。
3. GitHub 就會自動將網站上架至 `https://cyyang2025.github.io/`！
