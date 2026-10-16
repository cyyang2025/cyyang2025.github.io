/**
 * Main application script
 * - Theme toggle (Dark / Light mode with localStorage persistence)
 * - Dynamic project category filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 1. 深色 / 淺色模式切換 (Theme Toggle)
  // ==========================================
  const themeToggleBtn = document.getElementById('theme-toggle');
  const themeIcon = themeToggleBtn.querySelector('.icon');

  // 檢查使用者偏好或先前儲存的設定
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeIcon.textContent = '☀️';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    themeIcon.textContent = '🌙';
  }

  // 監聽按鈕點擊事件 (Click Event)
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // 1. 修改 HTML 根標籤屬性 (觸發 CSS 變數切換)
    document.documentElement.setAttribute('data-theme', newTheme);
    // 2. 切換圖示文字
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    // 3. 儲存至瀏覽器本地快取 (下次打開時維持設定)
    localStorage.setItem('theme', newTheme);
  });

  // ==========================================
  // 2. 專案分類篩選功能 (Project Filter)
  // ==========================================
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // 移除其他按鈕的 active 樣式，只給當前點擊的按鈕
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      // 遍歷所有專案卡片，決定顯示 (flex) 或隱藏 (none)
      projectCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');

        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  console.log('✅ Ching-Yu Yang Resume Site initialized successfully.');
});
