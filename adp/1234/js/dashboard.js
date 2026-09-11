/* ============================================================
   ArogyaLink — Dashboard Module (dashboard.js)
   Reads LocalStorage data to render dashboard cards,
   statistics, and recent activity.
   ============================================================ */

const Dashboard = (() => {
  'use strict';

  /* ── Health Articles Data ──────────────────────────────── */
  const ARTICLES = [
    {
      title: '10 Superfoods for Immunity',
      excerpt: 'Discover traditional Indian superfoods like turmeric, amla, and ashwagandha that boost your natural immunity.',
      icon: '🥗',
      tag: 'Nutrition',
    },
    {
      title: 'Importance of Morning Yoga',
      excerpt: 'Learn why practicing yoga in the morning can transform your energy levels, mental clarity, and overall health.',
      icon: '🧘',
      tag: 'Wellness',
    },
    {
      title: 'Understanding Seasonal Illnesses',
      excerpt: 'A guide to common seasonal diseases in India — from monsoon fevers to winter colds — and how to prevent them.',
      icon: '🌦️',
      tag: 'Health',
    },
    {
      title: 'Ayurveda in Daily Life',
      excerpt: 'Simple Ayurvedic practices you can incorporate into your daily routine for better digestion and vitality.',
      icon: '🌿',
      tag: 'Ayurveda',
    },
    {
      title: 'Stay Hydrated: Water & Health',
      excerpt: 'Why drinking enough water is crucial for your body and mind. Tips for staying hydrated in Indian summers.',
      icon: '💧',
      tag: 'Lifestyle',
    },
  ];

  /* ── Render ────────────────────────────────────────────── */

  function render() {
    const container = document.getElementById('dashboard-content');
    if (!container) return;

    const stats = ArogyaStorage.getStats();
    const recentActivity = ArogyaStorage.getRecentActivity(5);
    const lastSymptom = ArogyaStorage.getLatest(ArogyaStorage.KEYS.SYMPTOM_REPORTS);
    const lastYoga = ArogyaStorage.getLatest(ArogyaStorage.KEYS.YOGA_REPORTS);

    /* Current date */
    const today = new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    container.innerHTML = `
      <!-- Header -->
      <div class="dashboard__header reveal">
        <h2 class="dashboard__greeting">Welcome to Your Dashboard 👋</h2>
        <p class="dashboard__date">📅 ${today}</p>
      </div>

      <!-- Quick Action Cards -->
      <div class="dashboard__cards reveal">
        <div class="card card--dashboard" onclick="window.location.hash='services'; setTimeout(() => document.querySelector('[data-service=symptom]')?.click(), 200);">
          <div class="card__icon" style="background: rgba(13,158,110,0.1);">🔍</div>
          <div class="card__title">Symptom Checker</div>
          <p class="card__text" style="margin-bottom: 0;">Analyze your symptoms and get health insights</p>
        </div>
        
        <div class="card card--dashboard" onclick="window.location.hash='services'; setTimeout(() => document.querySelector('[data-service=yoga]')?.click(), 200);">
          <div class="card__icon" style="background: rgba(0,180,216,0.1);">🧘</div>
          <div class="card__title">Yoga Recommendation</div>
          <p class="card__text" style="margin-bottom: 0;">Get personalized yoga plans for your goals</p>
        </div>
        
        <div class="card card--dashboard" onclick="document.getElementById('health-articles-section').scrollIntoView({behavior: 'smooth'});">
          <div class="card__icon" style="background: rgba(245,158,11,0.1);">📰</div>
          <div class="card__title">Health Articles</div>
          <p class="card__text" style="margin-bottom: 0;">Read curated wellness tips and guides</p>
        </div>
      </div>

      <!-- Stats -->
      <div class="dashboard__stats reveal">
        <div class="dashboard__stat-card">
          <div class="dashboard__stat-icon dashboard__stat-icon--green">🔬</div>
          <div>
            <div class="dashboard__stat-value">${stats.totalAnalyses}</div>
            <div class="dashboard__stat-label">Symptom Analyses</div>
          </div>
        </div>
        
        <div class="dashboard__stat-card">
          <div class="dashboard__stat-icon dashboard__stat-icon--blue">🧘</div>
          <div>
            <div class="dashboard__stat-value">${stats.totalYoga}</div>
            <div class="dashboard__stat-label">Yoga Plans Generated</div>
          </div>
        </div>
        
        <div class="dashboard__stat-card">
          <div class="dashboard__stat-icon dashboard__stat-icon--orange">📩</div>
          <div>
            <div class="dashboard__stat-value">${stats.totalContacts}</div>
            <div class="dashboard__stat-label">Messages Sent</div>
          </div>
        </div>
      </div>

      <!-- Two Column Layout -->
      <div class="dashboard__sections reveal">
        <!-- Recent Activity -->
        <div class="dashboard__section">
          <h3 class="dashboard__section-title">📋 Recent Activity</h3>
          ${recentActivity.length > 0
            ? recentActivity.map((item) => `
              <div class="activity-item">
                <div class="activity-item__dot ${item.type === 'yoga' ? 'activity-item__dot--yoga' : ''}"></div>
                <div class="activity-item__content">
                  <div class="activity-item__label">${item.label}</div>
                  <div class="activity-item__time">${item.timestamp}</div>
                </div>
              </div>
            `).join('')
            : `
              <div class="empty-state">
                <div class="empty-state__icon">📭</div>
                <p class="empty-state__text">No activity yet</p>
                <p class="empty-state__subtext">Use the Symptom Checker or Yoga Advisor to get started!</p>
              </div>
            `
          }
        </div>

        <!-- Last Reports Summary -->
        <div class="dashboard__section">
          <h3 class="dashboard__section-title">📊 Last Reports</h3>
          
          ${lastSymptom ? `
            <div style="padding: var(--sp-4); background: var(--clr-primary-light); border-radius: var(--radius-md); margin-bottom: var(--sp-4);">
              <div style="font-weight: var(--fw-semibold); color: var(--text-heading); margin-bottom: var(--sp-2);">
                🏥 Last Symptom Analysis
              </div>
              <div style="font-size: var(--fs-sm); color: var(--text-body);">
                <strong>Condition:</strong> ${lastSymptom.condition}<br>
                <strong>Confidence:</strong> ${lastSymptom.confidence}%<br>
                <strong>Date:</strong> ${lastSymptom.timestamp}
              </div>
            </div>
          ` : ''}
          
          ${lastYoga ? `
            <div style="padding: var(--sp-4); background: var(--clr-accent-light); border-radius: var(--radius-md); margin-bottom: var(--sp-4);">
              <div style="font-weight: var(--fw-semibold); color: var(--text-heading); margin-bottom: var(--sp-2);">
                🧘 Last Yoga Recommendation
              </div>
              <div style="font-size: var(--fs-sm); color: var(--text-body);">
                <strong>Goal:</strong> ${lastYoga.goal}<br>
                <strong>BMI:</strong> ${lastYoga.bmi} (${lastYoga.bmiCategory})<br>
                <strong>Date:</strong> ${lastYoga.timestamp}
              </div>
            </div>
          ` : ''}

          ${!lastSymptom && !lastYoga ? `
            <div class="empty-state">
              <div class="empty-state__icon">📄</div>
              <p class="empty-state__text">No reports yet</p>
              <p class="empty-state__subtext">Complete an analysis to see your reports here.</p>
            </div>
          ` : ''}
        </div>
      </div>

      <!-- Health Articles -->
      <div id="health-articles-section" class="reveal" style="margin-top: var(--sp-10);">
        <h3 class="dashboard__section-title" style="margin-bottom: var(--sp-6);">📰 Health Articles & Tips</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: var(--sp-6);">
          ${ARTICLES.map((article) => `
            <div class="card" style="cursor: default;">
              <div style="display: flex; align-items: center; gap: var(--sp-3); margin-bottom: var(--sp-4);">
                <span style="font-size: 28px;">${article.icon}</span>
                <span class="badge badge--primary">${article.tag}</span>
              </div>
              <h4 style="font-size: var(--fs-lg); margin-bottom: var(--sp-2);">${article.title}</h4>
              <p style="font-size: var(--fs-sm); color: var(--text-body); line-height: var(--lh-relaxed); margin-bottom: 0;">${article.excerpt}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    /* Re-initialize scroll reveals for dynamically added elements */
    setTimeout(() => ArogyaAnimations.initScrollReveal(), 100);
  }

  /* ── Init ──────────────────────────────────────────────── */
  function init() {
    /* Dashboard renders on demand when navigated to */
  }

  return { init, render };
})();
