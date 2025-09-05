/**
 * HSP メンタルヘルスカウンセリング アフィリエイトページ
 * インタラクション・トラッキング JavaScript
 * HSP配慮の優しいユーザー体験を提供
 */

// ===== グローバル変数 =====
let isScrolling = false;

// ===== ページ読み込み時の初期化 =====
document.addEventListener('DOMContentLoaded', function() {
  initializeInteractions();
  initializeFAQ();
  initializeScrollObserver();
  initializeAnalytics();
  addAccessibilityFeatures();
  
  // HSP配慮：ページ読み込み完了の優しい通知
  console.log('🌸 繊細さんサポートページが読み込まれました');
});

// ===== セクションへのスムーズスクロール =====
function scrollToSection(sectionId) {
  // 既にスクロール中の場合は無視（HSP配慮：過剰な操作を防ぐ）
  if (isScrolling) return;
  
  const targetSection = document.getElementById(sectionId);
  if (!targetSection) {
    console.warn(`セクション "${sectionId}" が見つかりませんでした`);
    return;
  }
  
  isScrolling = true;
  
  // HSP配慮：ゆっくりとしたスムーズなスクロール
  targetSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest'
  });
  
  // アナリティクストラッキング
  trackEvent('scroll_to_section', { section: sectionId });
  
  // HSP配慮：少し長めの待機時間でスクロール完了を判定
  setTimeout(() => {
    isScrolling = false;
  }, 1500);
}

// ===== A8.net コンバージョントラッキング =====
function trackConversion(eventName) {
  try {
    // A8.netのコンバージョントラッキング
    // 実際の実装では、A8.netから提供されるトラッキングコードを使用
    if (typeof a8cvt !== 'undefined') {
      a8cvt.event(eventName);
    }
    
    // 自社アナリティクス（Google Analytics等）
    trackEvent('affiliate_click', {
      event_name: eventName,
      source: 'a8net',
      timestamp: new Date().toISOString()
    });
    
    // HSP配慮：控えめなフィードバック
    console.log(`✨ ${eventName} アクションが記録されました`);
    
    // ローカルストレージにクリックイベントを記録（分析用）
    recordClickEvent(eventName);
    
  } catch (error) {
    console.error('トラッキングエラー:', error);
  }
}

// ===== クリックイベントの記録（ローカルストレージ） =====
function recordClickEvent(eventName) {
  try {
    const clicks = JSON.parse(localStorage.getItem('hsp_affiliate_clicks') || '[]');
    clicks.push({
      event: eventName,
      timestamp: new Date().toISOString(),
      page: window.location.pathname
    });
    
    // 最新50件のみ保持
    if (clicks.length > 50) {
      clicks.splice(0, clicks.length - 50);
    }
    
    localStorage.setItem('hsp_affiliate_clicks', JSON.stringify(clicks));
  } catch (error) {
    console.warn('クリックイベントの記録に失敗:', error);
  }
}

// ===== FAQ折り畳み機能 =====
function initializeFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggle = item.querySelector('.faq-toggle');
    
    if (!question || !answer || !toggle) return;
    
    // 初期状態：回答を非表示
    answer.style.display = 'none';
    answer.style.opacity = '0';
    answer.style.maxHeight = '0';
    answer.style.overflow = 'hidden';
    answer.style.transition = 'all 0.5s ease-out';
    
    question.addEventListener('click', function() {
      const isOpen = answer.style.display !== 'none';
      
      if (isOpen) {
        // 閉じる - HSP配慮：ゆっくりとしたアニメーション
        answer.style.opacity = '0';
        answer.style.maxHeight = '0';
        toggle.textContent = '+';
        
        setTimeout(() => {
          answer.style.display = 'none';
        }, 500);
        
      } else {
        // 開く - HSP配慮：優しいアニメーション
        answer.style.display = 'block';
        answer.style.maxHeight = '300px';
        
        setTimeout(() => {
          answer.style.opacity = '1';
        }, 50);
        
        toggle.textContent = '−';
        
        // アナリティクストラッキング
        const questionText = question.querySelector('h3')?.textContent || '';
        trackEvent('faq_open', { question: questionText });
      }
    });
    
    // HSP配慮：キーボードアクセシビリティ
    question.setAttribute('tabindex', '0');
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
}

// ===== スクロール監視（セクション表示トラッキング） =====
function initializeScrollObserver() {
  if (!window.IntersectionObserver) return;
  
  const sections = document.querySelectorAll('section[id]');
  const observedSections = new Set();
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !observedSections.has(entry.target.id)) {
        observedSections.add(entry.target.id);
        trackEvent('section_viewed', { 
          section: entry.target.id,
          scroll_depth: Math.round((window.scrollY / document.body.scrollHeight) * 100)
        });
      }
    });
  }, {
    root: null,
    rootMargin: '-20%',
    threshold: 0.5
  });
  
  sections.forEach(section => {
    observer.observe(section);
  });
}

// ===== アナリティクス初期化 =====
function initializeAnalytics() {
  // ページビュートラッキング
  trackEvent('page_view', {
    page: window.location.pathname,
    referrer: document.referrer,
    user_agent: navigator.userAgent,
    viewport: `${window.innerWidth}x${window.innerHeight}`,
    timestamp: new Date().toISOString()
  });
  
  // 滞在時間の計測開始
  const startTime = Date.now();
  
  // HSP配慮：ページ離脱時の滞在時間記録
  window.addEventListener('beforeunload', function() {
    const durationMinutes = Math.round((Date.now() - startTime) / 60000);
    trackEvent('page_duration', { duration_minutes: durationMinutes });
  });
  
  // スクロール深度の測定
  let maxScrollDepth = 0;
  window.addEventListener('scroll', throttle(function() {
    const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    if (scrollDepth > maxScrollDepth) {
      maxScrollDepth = scrollDepth;
      trackEvent('scroll_depth', { depth: scrollDepth });
    }
  }, 1000));
}

// ===== 汎用アナリティクストラッキング関数 =====
function trackEvent(eventName, parameters = {}) {
  try {
    // Google Analytics (gtag)
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, parameters);
    }
    
    // その他のアナリティクスツール
    if (typeof analytics !== 'undefined') {
      analytics.track(eventName, parameters);
    }
    
    // デバッグ用ログ（本番では削除）
    if (window.location.hostname === 'localhost') {
      console.log('📊 Analytics Event:', eventName, parameters);
    }
    
  } catch (error) {
    console.warn('アナリティクストラッキングエラー:', error);
  }
}

// ===== インタラクション初期化 =====
function initializeInteractions() {
  // ボタンのホバーエフェクト強化
  const buttons = document.querySelectorAll('.cta-button');
  buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
    
    // HSP配慮：クリック時の視覚的フィードバック
    button.addEventListener('click', function(e) {
      // リップルエフェクト
      createRippleEffect(e, this);
      
      // クリックトラッキング
      const buttonText = this.textContent.trim();
      trackEvent('button_click', { 
        button_text: buttonText,
        button_type: this.classList.contains('primary') ? 'primary' : 'secondary'
      });
    });
  });
  
  // カードのホバーエフェクト
  const cards = document.querySelectorAll('.empathy-card, .testimonial-card, .step-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-6px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
}

// ===== リップルエフェクト（Material Design風） =====
function createRippleEffect(event, element) {
  const rect = element.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  const ripple = document.createElement('div');
  ripple.style.cssText = `
    position: absolute;
    width: ${size}px;
    height: ${size}px;
    left: ${x}px;
    top: ${y}px;
    background: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
    z-index: 1;
  `;
  
  // リップルアニメーションのCSS
  if (!document.getElementById('ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `;
    document.head.appendChild(style);
  }
  
  element.style.position = 'relative';
  element.style.overflow = 'hidden';
  element.appendChild(ripple);
  
  // アニメーション完了後にリップル要素を削除
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// ===== アクセシビリティ機能 =====
function addAccessibilityFeatures() {
  // フォーカス可能な要素にフォーカス表示を強化
  const focusableElements = document.querySelectorAll(
    'a, button, [tabindex]:not([tabindex="-1"])'
  );
  
  focusableElements.forEach(element => {
    element.addEventListener('focus', function() {
      this.style.outline = '3px solid #f97316';
      this.style.outlineOffset = '2px';
    });
    
    element.addEventListener('blur', function() {
      this.style.outline = '';
      this.style.outlineOffset = '';
    });
  });
  
  // Alt+1でメインコンテンツにスキップ
  document.addEventListener('keydown', function(e) {
    if (e.altKey && e.key === '1') {
      const mainContent = document.querySelector('main, .hero');
      if (mainContent) {
        mainContent.scrollIntoView({ behavior: 'smooth' });
        mainContent.focus();
      }
    }
  });
  
  // HSP配慮：Escキーでモーダルやオーバーレイを閉じる
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      // FAQ項目が開いている場合は閉じる
      const openFAQs = document.querySelectorAll('.faq-answer[style*="block"]');
      openFAQs.forEach(answer => {
        const question = answer.parentElement.querySelector('.faq-question');
        if (question) question.click();
      });
    }
  });
}

// ===== ユーティリティ関数 =====

// スロットル関数（パフォーマンス最適化）
function throttle(func, limit) {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// デバウンス関数（HSP配慮：過剰な実行を防ぐ）
function debounce(func, delay) {
  let timeoutId;
  return function() {
    const args = arguments;
    const context = this;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(context, args), delay);
  };
}

// ===== エラーハンドリング =====
window.addEventListener('error', function(e) {
  console.error('JavaScriptエラー:', e.error);
  trackEvent('javascript_error', {
    message: e.message,
    filename: e.filename,
    lineno: e.lineno,
    colno: e.colno
  });
});

// ===== パフォーマンス測定 =====
window.addEventListener('load', function() {
  // ページ読み込み完了時のパフォーマンス測定
  setTimeout(() => {
    if (window.performance && window.performance.timing) {
      const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
      trackEvent('page_performance', {
        load_time_ms: loadTime,
        dom_content_loaded: window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart
      });
    }
  }, 0);
});

// ===== ダークモード検出（HSP配慮） =====
if (window.matchMedia) {
  const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
  
  function handleDarkModeChange(e) {
    trackEvent('color_scheme_preference', { prefers_dark: e.matches });
  }
  
  darkModeQuery.addEventListener('change', handleDarkModeChange);
  handleDarkModeChange(darkModeQuery);
}

// ===== 動画・アニメーション設定の検出（HSP配慮） =====
if (window.matchMedia) {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  function handleReducedMotionChange(e) {
    if (e.matches) {
      // アニメーションを削減
      document.documentElement.style.setProperty('--hsp-transition-fast', 'all 0.01s');
      document.documentElement.style.setProperty('--hsp-transition-normal', 'all 0.01s');
      document.documentElement.style.setProperty('--hsp-transition-slow', 'all 0.01s');
    }
    
    trackEvent('motion_preference', { prefers_reduced: e.matches });
  }
  
  reducedMotionQuery.addEventListener('change', handleReducedMotionChange);
  handleReducedMotionChange(reducedMotionQuery);
}

// ===== コンソールメッセージ（開発者向け） =====
console.log(`
🌸 HSP メンタルヘルスカウンセリング アフィリエイトページ
✨ 繊細な方々に寄り添うウェブサイトです
📊 アナリティクス機能: 有効
🎯 A8.netトラッキング: 有効
♿ アクセシビリティ機能: 有効
💝 HSP配慮機能: 有効

開発者の方へ：
- このサイトは繊細な方(HSP)に配慮した設計になっています
- アニメーションは控えめに、操作は優しく実装されています
- ユーザーの行動データは丁寧に収集・分析されています
`);

// エクスポート（モジュール対応）
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    scrollToSection,
    trackConversion,
    trackEvent
  };
}