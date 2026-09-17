/* ============================================================
   ArogyaLink — Smart Symptom Analyzer (symptomAnalyzer.js)
   Multi-step questionnaire with dynamic follow-ups,
   condition prediction, Ayurvedic + Allopathic guidance.
   ============================================================ */

const SymptomAnalyzer = (() => {
  'use strict';

  /* ── State ─────────────────────────────────────────────── */
  let currentStep = 0;
  let userData = { name: '', age: '', gender: '' };
  let selectedSymptom = '';
  let followUpAnswers = {};

  /* ── Symptom Database ──────────────────────────────────── */

  /**
   * Each primary symptom has:
   *  - followUps: array of yes/no questions
   *  - conditions: array of possible conditions, each with:
   *      name, requiredSymptoms (indices into followUps), baseConfidence, description
   *  - ayurvedic: array of remedies
   *  - allopathic: array of wellness guidance
   */
  const SYMPTOM_DB = {
    fever: {
      label: 'Fever',
      icon: '🌡️',
      followUps: [
        { id: 'high_temp',   text: 'Do you have a high temperature (above 100°F / 38°C)?' },
        { id: 'chills',      text: 'Are you experiencing chills or shivering?' },
        { id: 'body_pain',   text: 'Do you have body pain or muscle aches?' },
        { id: 'sore_throat', text: 'Do you have a sore throat?' },
        { id: 'cough',       text: 'Do you have a cough along with the fever?' },
      ],
      conditions: [
        {
          name: 'Viral Fever',
          required: ['high_temp', 'body_pain'],
          boost: ['chills', 'cough'],
          baseConfidence: 72,
          description: 'A common viral infection causing elevated body temperature, body aches, and fatigue. Usually self-limiting within 5-7 days.',
        },
        {
          name: 'Seasonal Flu',
          required: ['high_temp', 'sore_throat'],
          boost: ['cough', 'body_pain'],
          baseConfidence: 70,
          description: 'An influenza-like illness with fever, throat pain, and respiratory symptoms. Common during weather changes in India.',
        },
        {
          name: 'Mild Infection',
          required: ['high_temp'],
          boost: ['chills'],
          baseConfidence: 60,
          description: 'A mild infectious process causing low-grade fever. Monitor symptoms and seek medical advice if fever persists beyond 3 days.',
        },
      ],
      ayurvedic: [
        { name: 'Tulsi Tea', desc: 'Boil 8-10 fresh Tulsi leaves in water. Drink warm 2-3 times daily.', icon: '🍵' },
        { name: 'Ginger Water', desc: 'Crush fresh ginger, boil in water with honey. Helps reduce fever naturally.', icon: '🫚' },
        { name: 'Turmeric Milk', desc: 'Add ½ tsp turmeric to warm milk. Drink before bed for immunity boost.', icon: '🥛' },
        { name: 'Coriander Seed Tea', desc: 'Boil 1 tsp coriander seeds in water. Strain and drink lukewarm.', icon: '🌿' },
      ],
      allopathic: [
        'Take adequate rest and avoid physical exertion',
        'Stay well hydrated — drink water, ORS, and clear fluids',
        'Use lukewarm water sponging if fever is high',
        'Monitor temperature regularly',
        'Eat light, easily digestible foods like khichdi',
      ],
    },

    headache: {
      label: 'Headache',
      icon: '🤕',
      followUps: [
        { id: 'one_sided',   text: 'Is the pain on one side of the head?' },
        { id: 'forehead',    text: 'Is the pain primarily in the forehead area?' },
        { id: 'light_sens',  text: 'Are you sensitive to bright light or loud sounds?' },
        { id: 'stress',      text: 'Have you been under significant stress lately?' },
        { id: 'nausea',      text: 'Do you feel nauseous or have you vomited?' },
      ],
      conditions: [
        {
          name: 'Migraine',
          required: ['one_sided', 'light_sens'],
          boost: ['nausea'],
          baseConfidence: 75,
          description: 'A neurological condition causing intense, throbbing headache usually on one side. May be accompanied by nausea and sensitivity to light/sound.',
        },
        {
          name: 'Tension Headache',
          required: ['forehead', 'stress'],
          boost: [],
          baseConfidence: 78,
          description: 'The most common type of headache, often described as a band-like pressure around the forehead. Usually triggered by stress, poor posture, or inadequate sleep.',
        },
        {
          name: 'Stress Headache',
          required: ['stress'],
          boost: ['forehead'],
          baseConfidence: 65,
          description: 'A headache directly linked to emotional or physical stress. Often occurs with neck tension and can be managed with relaxation techniques.',
        },
      ],
      ayurvedic: [
        { name: 'Peppermint Oil', desc: 'Apply diluted peppermint oil on temples and forehead. Massage gently.', icon: '🌿' },
        { name: 'Ginger Tea', desc: 'Fresh ginger tea with a pinch of black pepper helps relieve headaches.', icon: '🫚' },
        { name: 'Warm Water', desc: 'Drink warm water frequently throughout the day. Dehydration is a common headache trigger.', icon: '💧' },
        { name: 'Clove Compress', desc: 'Crush 2-3 cloves, wrap in cloth, inhale the aroma for relief.', icon: '🌸' },
      ],
      allopathic: [
        'Rest in a quiet, dark room',
        'Apply a cold compress to the forehead',
        'Stay hydrated — aim for 8-10 glasses of water daily',
        'Practice deep breathing and relaxation techniques',
        'Maintain a regular sleep schedule',
      ],
    },

    stomach_pain: {
      label: 'Stomach Pain',
      icon: '🤢',
      followUps: [
        { id: 'upper_abd',  text: 'Is the pain in the upper abdomen (above navel)?' },
        { id: 'lower_abd',  text: 'Is the pain in the lower abdomen (below navel)?' },
        { id: 'acidity',    text: 'Do you experience acidity or burning sensation?' },
        { id: 'diarrhea',   text: 'Are you having loose stools or diarrhea?' },
        { id: 'vomiting',   text: 'Have you been vomiting or feeling nauseous?' },
      ],
      conditions: [
        {
          name: 'Gastritis',
          required: ['upper_abd', 'acidity'],
          boost: ['vomiting'],
          baseConfidence: 76,
          description: 'Inflammation of the stomach lining causing burning pain in the upper abdomen. Often aggravated by spicy food, stress, or irregular meals.',
        },
        {
          name: 'Acidity',
          required: ['acidity'],
          boost: ['upper_abd'],
          baseConfidence: 72,
          description: 'Excessive acid production in the stomach causing heartburn and discomfort. Very common in India due to spicy food habits.',
        },
        {
          name: 'Mild Food Poisoning',
          required: ['diarrhea', 'vomiting'],
          boost: ['lower_abd'],
          baseConfidence: 74,
          description: 'A gastrointestinal illness caused by contaminated food or water. Usually resolves within 24-48 hours with proper hydration.',
        },
      ],
      ayurvedic: [
        { name: 'Jeera Water', desc: 'Boil 1 tsp cumin seeds in water. Strain and drink lukewarm. Excellent for digestion.', icon: '🫗' },
        { name: 'Ajwain (Carom Seeds)', desc: 'Chew ½ tsp ajwain with a pinch of black salt for quick relief.', icon: '🌱' },
        { name: 'Warm Water with Lemon', desc: 'Mix fresh lemon juice in warm water. Drink on empty stomach.', icon: '🍋' },
        { name: 'Fennel Seeds', desc: 'Chew a tsp of saunf after meals to prevent acidity and bloating.', icon: '🌿' },
      ],
      allopathic: [
        'Avoid spicy, oily, and acidic foods temporarily',
        'Eat small, frequent meals instead of large ones',
        'Stay hydrated with ORS, coconut water, or clear fluids',
        'Avoid lying down immediately after eating',
        'Monitor symptoms and seek help if pain persists beyond 48 hours',
      ],
    },

    cough: {
      label: 'Cough',
      icon: '😷',
      followUps: [
        { id: 'dry_cough',    text: 'Is it a dry cough (without mucus)?' },
        { id: 'mucus',        text: 'Are you coughing up mucus or phlegm?' },
        { id: 'fever_cough',  text: 'Do you also have a fever?' },
        { id: 'throat_irr',   text: 'Do you have throat irritation or itchiness?' },
        { id: 'long_duration', text: 'Has the cough lasted more than a week?' },
      ],
      conditions: [
        {
          name: 'Common Cold',
          required: ['throat_irr'],
          boost: ['mucus', 'dry_cough'],
          baseConfidence: 70,
          description: 'An upper respiratory viral infection causing cough, sore throat, and nasal congestion. Usually resolves within 7-10 days.',
        },
        {
          name: 'Viral Infection',
          required: ['fever_cough', 'mucus'],
          boost: ['long_duration'],
          baseConfidence: 73,
          description: 'A respiratory viral infection causing productive cough with fever. Monitor for worsening symptoms.',
        },
        {
          name: 'Seasonal Allergy',
          required: ['dry_cough', 'throat_irr'],
          boost: ['long_duration'],
          baseConfidence: 68,
          description: 'An allergic reaction to environmental triggers like pollen, dust, or pollution. Common during seasonal changes in Indian cities.',
        },
      ],
      ayurvedic: [
        { name: 'Honey & Ginger', desc: 'Mix 1 tsp honey with fresh ginger juice. Take twice daily.', icon: '🍯' },
        { name: 'Turmeric Milk', desc: 'Warm milk with turmeric and a pinch of black pepper before bed.', icon: '🥛' },
        { name: 'Steam Inhalation', desc: 'Inhale steam with a few drops of eucalyptus oil for 10 minutes.', icon: '♨️' },
        { name: 'Mulethi (Liquorice)', desc: 'Chew a small piece of mulethi root or make tea for throat relief.', icon: '🌱' },
      ],
      allopathic: [
        'Stay hydrated with warm fluids',
        'Use steam inhalation 2-3 times a day',
        'Avoid cold beverages and fried foods',
        'Rest adequately and avoid polluted environments',
        'Use a humidifier if the air is dry',
      ],
    },

    cold: {
      label: 'Cold',
      icon: '🤧',
      followUps: [
        { id: 'runny_nose',  text: 'Do you have a runny or blocked nose?' },
        { id: 'sneezing',    text: 'Are you sneezing frequently?' },
        { id: 'watery_eyes', text: 'Do you have watery or itchy eyes?' },
        { id: 'mild_fever',  text: 'Do you have a mild fever?' },
        { id: 'fatigue',     text: 'Are you feeling unusually tired or fatigued?' },
      ],
      conditions: [
        {
          name: 'Common Cold',
          required: ['runny_nose', 'sneezing'],
          boost: ['mild_fever', 'fatigue'],
          baseConfidence: 80,
          description: 'A viral upper respiratory infection causing nasal congestion, sneezing, and mild malaise. The most common illness worldwide.',
        },
        {
          name: 'Allergic Rhinitis',
          required: ['sneezing', 'watery_eyes'],
          boost: ['runny_nose'],
          baseConfidence: 72,
          description: 'An allergic reaction causing sneezing, runny nose, and itchy eyes. Often triggered by dust, pollen, or pet dander.',
        },
        {
          name: 'Seasonal Flu',
          required: ['mild_fever', 'fatigue'],
          boost: ['runny_nose', 'sneezing'],
          baseConfidence: 68,
          description: 'An influenza infection with cold-like symptoms plus fever and body fatigue. More severe than a common cold.',
        },
      ],
      ayurvedic: [
        { name: 'Steam Inhalation', desc: 'Add ajwain or eucalyptus to hot water and inhale steam 2-3 times daily.', icon: '♨️' },
        { name: 'Tulsi & Ginger Tea', desc: 'Boil tulsi leaves with ginger and black pepper. Add honey to taste.', icon: '🍵' },
        { name: 'Haldi Doodh', desc: 'Golden milk with turmeric, black pepper, and a pinch of cinnamon.', icon: '🥛' },
        { name: 'Nasal Oil (Anu Taila)', desc: 'Apply 2 drops of sesame oil or anu taila in each nostril.', icon: '💧' },
      ],
      allopathic: [
        'Rest well and get 7-8 hours of sleep',
        'Drink warm fluids — soups, herbal teas, warm water',
        'Use saline nasal drops for congestion',
        'Gargle with warm salt water',
        'Avoid exposure to cold winds and AC',
      ],
    },

    body_pain: {
      label: 'Body Pain',
      icon: '💪',
      followUps: [
        { id: 'joint_pain',   text: 'Is the pain in your joints (knees, elbows, wrists)?' },
        { id: 'back_pain',    text: 'Do you have back pain?' },
        { id: 'muscle_sore',  text: 'Are your muscles sore or stiff?' },
        { id: 'with_fever',   text: 'Is the body pain accompanied by fever?' },
        { id: 'after_exertion', text: 'Did the pain start after physical exertion or exercise?' },
      ],
      conditions: [
        {
          name: 'Viral Myalgia',
          required: ['muscle_sore', 'with_fever'],
          boost: ['joint_pain'],
          baseConfidence: 74,
          description: 'Muscle pain caused by a viral infection, commonly seen with seasonal fevers. Usually accompanied by fatigue and general malaise.',
        },
        {
          name: 'Muscular Strain',
          required: ['muscle_sore', 'after_exertion'],
          boost: ['back_pain'],
          baseConfidence: 78,
          description: 'Pain from overuse or stretching of muscles beyond their normal capacity. Common after unaccustomed physical activity.',
        },
        {
          name: 'Joint Inflammation',
          required: ['joint_pain'],
          boost: ['muscle_sore'],
          baseConfidence: 65,
          description: 'Inflammation of one or more joints causing pain and stiffness. May be related to aging, injury, or autoimmune conditions.',
        },
      ],
      ayurvedic: [
        { name: 'Warm Oil Massage', desc: 'Massage with warm sesame or mustard oil. Helps relieve muscle tension.', icon: '🫒' },
        { name: 'Turmeric Paste', desc: 'Apply warm turmeric paste on affected joints. Anti-inflammatory properties.', icon: '🟡' },
        { name: 'Ashwagandha', desc: 'Ashwagandha powder in warm milk helps with body pain and fatigue.', icon: '🌿' },
        { name: 'Hot Water Compress', desc: 'Apply hot water bottle or warm towel on painful areas for 15 minutes.', icon: '🔥' },
      ],
      allopathic: [
        'Rest the affected area and avoid overexertion',
        'Apply hot or cold compresses as needed',
        'Gentle stretching and light movement can help',
        'Stay hydrated and maintain a balanced diet',
        'If pain persists beyond 5 days, consult a doctor',
      ],
    },

    weakness: {
      label: 'Weakness',
      icon: '😴',
      followUps: [
        { id: 'fatigue_constant', text: 'Do you feel tired throughout the day?' },
        { id: 'poor_appetite',    text: 'Has your appetite decreased?' },
        { id: 'dizziness',        text: 'Do you feel dizzy or lightheaded?' },
        { id: 'poor_sleep',       text: 'Are you having trouble sleeping?' },
        { id: 'mood_low',         text: 'Are you feeling low or unmotivated?' },
      ],
      conditions: [
        {
          name: 'General Debility',
          required: ['fatigue_constant', 'poor_appetite'],
          boost: ['dizziness'],
          baseConfidence: 70,
          description: 'A state of general weakness and lack of energy, often caused by nutritional deficiencies, dehydration, or recovering from illness.',
        },
        {
          name: 'Nutritional Deficiency',
          required: ['fatigue_constant', 'dizziness'],
          boost: ['poor_appetite'],
          baseConfidence: 72,
          description: 'Weakness due to inadequate intake of essential nutrients like iron, vitamin B12, or vitamin D. Very common in Indian diets.',
        },
        {
          name: 'Stress-Related Fatigue',
          required: ['poor_sleep', 'mood_low'],
          boost: ['fatigue_constant'],
          baseConfidence: 68,
          description: 'Chronic fatigue related to mental stress, poor sleep quality, and emotional burnout. Requires lifestyle modifications.',
        },
      ],
      ayurvedic: [
        { name: 'Chyawanprash', desc: 'Take 1 tablespoon of Chyawanprash daily with warm milk for energy.', icon: '🍯' },
        { name: 'Amla (Indian Gooseberry)', desc: 'Eat fresh amla or drink amla juice daily. Rich in Vitamin C.', icon: '🟢' },
        { name: 'Dates & Dry Fruits', desc: 'Eat soaked almonds and dates every morning for natural energy.', icon: '🥜' },
        { name: 'Ashwagandha Milk', desc: 'Mix ashwagandha powder in warm milk before bed. Rejuvenating adaptogen.', icon: '🌿' },
      ],
      allopathic: [
        'Eat a balanced diet rich in iron, protein, and vitamins',
        'Stay hydrated — at least 2-3 liters of water daily',
        'Get 7-8 hours of quality sleep each night',
        'Engage in light physical activity like walking',
        'If weakness persists, get blood tests for deficiencies',
      ],
    },
  };

  /* ── Prediction Algorithm ──────────────────────────────── */

  /**
   * Calculate confidence score and identify the most probable condition.
   *
   * @returns {{ condition: string, confidence: number, description: string, allConditions: Array }}
   */
  function predict() {
    const symptomData = SYMPTOM_DB[selectedSymptom];
    if (!symptomData) return null;

    const results = symptomData.conditions.map((cond) => {
      let confidence = cond.baseConfidence;

      /* Check how many required symptoms are present */
      const requiredMet = cond.required.filter((id) => followUpAnswers[id] === true);
      const requiredRatio = requiredMet.length / cond.required.length;

      /* If no required symptoms are met, heavily penalize */
      if (requiredRatio === 0) {
        confidence = Math.max(20, confidence - 40);
      } else {
        /* Scale confidence by how many requirements are met */
        confidence = cond.baseConfidence + (requiredRatio * 15);
      }

      /* Boost for optional matching symptoms */
      const boostMet = cond.boost.filter((id) => followUpAnswers[id] === true);
      confidence += boostMet.length * 4;

      /* Age-based minor adjustments */
      const age = parseInt(userData.age, 10);
      if (age > 50) confidence += 2;
      if (age < 12) confidence += 1;

      /* Cap confidence at 95 */
      confidence = Math.min(95, Math.round(confidence));

      return {
        name: cond.name,
        confidence,
        description: cond.description,
        matchedRequired: requiredMet.length,
        totalRequired: cond.required.length,
      };
    });

    /* Sort by confidence (descending) */
    results.sort((a, b) => b.confidence - a.confidence);

    return {
      condition: results[0].name,
      confidence: results[0].confidence,
      description: results[0].description,
      allConditions: results,
    };
  }

  /* ── UI Rendering ──────────────────────────────────────── */

  function getContainer() {
    return document.getElementById('symptom-analyzer');
  }

  /**
   * Render the disclaimer at the top of the analyzer.
   */
  function renderDisclaimer() {
    return `
      <div class="disclaimer">
        <span class="disclaimer__icon">⚠️</span>
        <strong>Disclaimer:</strong> This tool is for educational and informational purposes only. 
        It does not provide medical diagnosis. Consult a qualified healthcare professional for medical advice.
      </div>
    `;
  }

  /**
   * Render the step indicator.
   */
  function renderStepIndicator(total) {
    const steps = [];
    for (let i = 0; i < total; i++) {
      const state = i < currentStep ? 'completed' : i === currentStep ? 'active' : '';
      steps.push(`
        <div class="step-indicator__step ${state}">
          ${i > 0 ? '<div class="step-indicator__line"></div>' : ''}
          <div class="step-indicator__circle">${i < currentStep ? '✓' : i + 1}</div>
        </div>
      `);
    }
    return `<div class="step-indicator">${steps.join('')}</div>`;
  }

  /**
   * Render the progress bar.
   */
  function renderProgressBar(total) {
    const pct = ((currentStep + 1) / total) * 100;
    return `
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width: ${pct}%"></div>
      </div>
    `;
  }

  /**
   * Step 0: Collect user info (name, age, gender).
   */
  function renderStep0() {
    return `
      ${renderDisclaimer()}
      ${renderStepIndicator(4)}
      ${renderProgressBar(4)}
      <div class="step-content active">
        <h3 class="step-content__title">👤 Tell Us About Yourself</h3>
        <p class="step-content__subtitle">We need some basic information to provide better analysis.</p>
        
        <div class="form-group">
          <label for="sa-name">Full Name</label>
          <input type="text" id="sa-name" class="form-input" placeholder="Enter your name" value="${userData.name}">
          <div class="form-error" id="sa-name-error">⚠ Please enter your name</div>
        </div>
        
        <div class="form-group">
          <label for="sa-age">Age</label>
          <input type="number" id="sa-age" class="form-input" placeholder="Enter your age" min="1" max="120" value="${userData.age}">
          <div class="form-error" id="sa-age-error">⚠ Please enter a valid age (1-120)</div>
        </div>
        
        <div class="form-group">
          <label>Gender</label>
          <div class="options-grid options-grid--2col" id="sa-gender-options">
            <div class="option-card ${userData.gender === 'male' ? 'selected' : ''}" data-value="male">
              <div class="option-card__radio"></div>
              <span class="option-card__label">🧑 Male</span>
            </div>
            <div class="option-card ${userData.gender === 'female' ? 'selected' : ''}" data-value="female">
              <div class="option-card__radio"></div>
              <span class="option-card__label">👩 Female</span>
            </div>
          </div>
          <div class="form-error" id="sa-gender-error">⚠ Please select your gender</div>
        </div>
        
        <div class="step-nav">
          <div></div>
          <button class="btn btn--primary" id="sa-next-0">Next Step →</button>
        </div>
      </div>
    `;
  }

  /**
   * Step 1: Select primary symptom.
   */
  function renderStep1() {
    const symptoms = Object.entries(SYMPTOM_DB).map(([key, data]) => `
      <div class="option-card ${selectedSymptom === key ? 'selected' : ''}" data-value="${key}">
        <div class="option-card__radio"></div>
        <span class="option-card__label">${data.icon} ${data.label}</span>
      </div>
    `).join('');

    return `
      ${renderDisclaimer()}
      ${renderStepIndicator(4)}
      ${renderProgressBar(4)}
      <div class="step-content active">
        <h3 class="step-content__title">🔍 Select Your Primary Symptom</h3>
        <p class="step-content__subtitle">Choose the main symptom you are experiencing right now.</p>
        
        <div class="options-grid" id="sa-symptom-options">
          ${symptoms}
        </div>
        <div class="form-error" id="sa-symptom-error">⚠ Please select a symptom</div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="sa-back-1">← Back</button>
          <button class="btn btn--primary" id="sa-next-1">Next Step →</button>
        </div>
      </div>
    `;
  }

  /**
   * Step 2: Dynamic follow-up questions.
   */
  function renderStep2() {
    const symptomData = SYMPTOM_DB[selectedSymptom];
    if (!symptomData) return '';

    const questions = symptomData.followUps.map((q) => `
      <div class="checkbox-card ${followUpAnswers[q.id] ? 'checked' : ''}" data-id="${q.id}">
        <div class="checkbox-card__box"></div>
        <span class="checkbox-card__label">${q.text}</span>
      </div>
    `).join('');

    return `
      ${renderDisclaimer()}
      ${renderStepIndicator(4)}
      ${renderProgressBar(4)}
      <div class="step-content active">
        <h3 class="step-content__title">${symptomData.icon} Follow-Up: ${symptomData.label}</h3>
        <p class="step-content__subtitle">Select all that apply to help us analyze your condition better.</p>
        
        <div class="options-grid" id="sa-followup-options">
          ${questions}
        </div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="sa-back-2">← Back</button>
          <button class="btn btn--primary" id="sa-analyze">Analyze Symptoms 🔬</button>
        </div>
      </div>
    `;
  }

  /**
   * Step 3: Results page.
   */
  function renderResults() {
    const result = predict();
    if (!result) return '<p>Unable to generate results.</p>';

    const symptomData = SYMPTOM_DB[selectedSymptom];
    const answeredSymptoms = symptomData.followUps
      .filter((q) => followUpAnswers[q.id])
      .map((q) => q.text.replace(/\?$/, ''));

    /* Save report to LocalStorage */
    ArogyaStorage.saveReport(ArogyaStorage.KEYS.SYMPTOM_REPORTS, {
      condition: result.condition,
      confidence: result.confidence,
      description: result.description,
      primarySymptom: symptomData.label,
      followUpSymptoms: answeredSymptoms,
      userName: userData.name,
      userAge: userData.age,
      userGender: userData.gender,
    });

    /* Build Ayurvedic remedies */
    const remedies = symptomData.ayurvedic.map((r) => `
      <div class="remedy-tag">${r.icon} ${r.name}</div>
    `).join('');

    const remedyDetails = symptomData.ayurvedic.map((r) => `
      <div style="margin-bottom: var(--sp-3);">
        <strong>${r.icon} ${r.name}</strong>
        <p style="margin: var(--sp-1) 0 0; font-size: var(--fs-sm); color: var(--text-body);">${r.desc}</p>
      </div>
    `).join('');

    /* Build allopathic guidance */
    const allopathic = symptomData.allopathic.map((tip) => `
      <li style="padding: var(--sp-2) 0; display: flex; align-items: flex-start; gap: var(--sp-2);">
        <span style="color: var(--clr-primary); flex-shrink: 0;">✓</span>
        <span>${tip}</span>
      </li>
    `).join('');

    /* Build all conditions list */
    const allConds = result.allConditions.map((c) => `
      <div style="display: flex; justify-content: space-between; align-items: center; padding: var(--sp-2) 0;">
        <span style="font-weight: var(--fw-medium);">${c.name}</span>
        <span class="badge ${c.confidence >= 70 ? 'badge--success' : c.confidence >= 50 ? 'badge--warning' : 'badge--info'}">${c.confidence}%</span>
      </div>
    `).join('');

    return `
      <div class="results-container">
        <div class="results-container__header">
          <div class="results-container__icon">✅</div>
          <h3 class="results-container__title">Analysis Complete</h3>
          <p class="text-muted">Here are the results for <strong>${userData.name}</strong></p>
        </div>
        
        <!-- Primary Condition -->
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__icon">🏥</div>
            <div>
              <div class="result-card__title">Possible Condition</div>
              <div class="result-card__subtitle">Based on your reported symptoms</div>
            </div>
          </div>
          
          <h3 style="font-size: var(--fs-2xl); color: var(--clr-primary); margin-bottom: var(--sp-4);">${result.condition}</h3>
          
          <div class="confidence-meter" style="--confidence: ${result.confidence}">
            <div class="confidence-meter__circle">
              <span class="confidence-meter__value">${result.confidence}%</span>
            </div>
            <div class="confidence-meter__label">Confidence Score</div>
          </div>
          
          <p style="color: var(--text-body); line-height: var(--lh-relaxed); font-size: var(--fs-sm);">${result.description}</p>
        </div>
        
        <!-- Symptom Summary -->
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__icon">📋</div>
            <div>
              <div class="result-card__title">Symptom Summary</div>
              <div class="result-card__subtitle">Primary: ${symptomData.label}</div>
            </div>
          </div>
          <div style="display: flex; flex-wrap: wrap; gap: var(--sp-2);">
            ${answeredSymptoms.map((s) => `<span class="badge badge--primary">${s}</span>`).join('')}
            ${answeredSymptoms.length === 0 ? '<span class="text-muted">No additional symptoms selected</span>' : ''}
          </div>
        </div>
        
        <!-- All Conditions -->
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__icon">📊</div>
            <div>
              <div class="result-card__title">All Possible Conditions</div>
              <div class="result-card__subtitle">Ranked by confidence</div>
            </div>
          </div>
          ${allConds}
        </div>
        
        <!-- Ayurvedic Suggestions -->
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__icon">🌿</div>
            <div>
              <div class="result-card__title">Ayurvedic Suggestions</div>
              <div class="result-card__subtitle">Traditional Indian remedies</div>
            </div>
          </div>
          ${remedyDetails}
        </div>
        
        <!-- Allopathic Guidance -->
        <div class="result-card">
          <div class="result-card__header">
            <div class="result-card__icon">💊</div>
            <div>
              <div class="result-card__title">General Wellness Guidance</div>
              <div class="result-card__subtitle">Allopathic recommendations</div>
            </div>
          </div>
          <ul style="list-style: none; padding: 0; margin: 0;">
            ${allopathic}
          </ul>
        </div>
        
        <!-- Warning -->
        <div class="warning-box">
          <strong>⚠️ Important:</strong> Use medicines only under the guidance of a qualified medical practitioner. 
          This analysis is not a substitute for professional medical consultation.
        </div>
        
        <div class="step-nav" style="border-top: none;">
          <button class="btn btn--secondary" id="sa-restart">↻ Start New Analysis</button>
          <button class="btn btn--primary" id="sa-go-dashboard" onclick="window.location.hash='dashboard'">View Dashboard →</button>
        </div>
      </div>
    `;
  }

  /* ── Event Binding ─────────────────────────────────────── */

  function bindEvents() {
    const container = getContainer();
    if (!container) return;

    container.addEventListener('click', (e) => {
      const target = e.target;

      /* --- Option cards (radio-style) --- */
      const optionCard = target.closest('.option-card');
      if (optionCard) {
        const parent = optionCard.parentElement;
        parent.querySelectorAll('.option-card').forEach((c) => c.classList.remove('selected'));
        optionCard.classList.add('selected');
      }

      /* --- Checkbox cards --- */
      const checkboxCard = target.closest('.checkbox-card');
      if (checkboxCard) {
        checkboxCard.classList.toggle('checked');
      }

      /* --- Step 0: Next --- */
      if (target.id === 'sa-next-0' || target.closest('#sa-next-0')) {
        const name = document.getElementById('sa-name').value.trim();
        const age = document.getElementById('sa-age').value.trim();
        const genderEl = document.querySelector('#sa-gender-options .option-card.selected');

        let valid = true;

        if (!name) {
          document.getElementById('sa-name-error').classList.add('visible');
          valid = false;
        } else {
          document.getElementById('sa-name-error').classList.remove('visible');
        }

        if (!age || parseInt(age) < 1 || parseInt(age) > 120) {
          document.getElementById('sa-age-error').classList.add('visible');
          valid = false;
        } else {
          document.getElementById('sa-age-error').classList.remove('visible');
        }

        if (!genderEl) {
          document.getElementById('sa-gender-error').classList.add('visible');
          valid = false;
        } else {
          document.getElementById('sa-gender-error').classList.remove('visible');
        }

        if (valid) {
          userData = { name, age, gender: genderEl.dataset.value };
          currentStep = 1;
          render();
        }
      }

      /* --- Step 1: Next --- */
      if (target.id === 'sa-next-1' || target.closest('#sa-next-1')) {
        const sel = document.querySelector('#sa-symptom-options .option-card.selected');
        if (!sel) {
          document.getElementById('sa-symptom-error').classList.add('visible');
          return;
        }
        document.getElementById('sa-symptom-error').classList.remove('visible');
        selectedSymptom = sel.dataset.value;
        followUpAnswers = {};
        currentStep = 2;
        render();
      }

      /* --- Step 1: Back --- */
      if (target.id === 'sa-back-1' || target.closest('#sa-back-1')) {
        currentStep = 0;
        render();
      }

      /* --- Step 2: Back --- */
      if (target.id === 'sa-back-2' || target.closest('#sa-back-2')) {
        currentStep = 1;
        render();
      }

      /* --- Analyze --- */
      if (target.id === 'sa-analyze' || target.closest('#sa-analyze')) {
        /* Collect follow-up answers */
        const checked = document.querySelectorAll('#sa-followup-options .checkbox-card');
        checked.forEach((card) => {
          followUpAnswers[card.dataset.id] = card.classList.contains('checked');
        });
        currentStep = 3;
        render();
      }

      /* --- Restart --- */
      if (target.id === 'sa-restart' || target.closest('#sa-restart')) {
        reset();
        render();
      }
    });
  }

  /* ── Render ────────────────────────────────────────────── */

  function render() {
    const container = getContainer();
    if (!container) return;

    let html = '';

    switch (currentStep) {
      case 0: html = renderStep0(); break;
      case 1: html = renderStep1(); break;
      case 2: html = renderStep2(); break;
      case 3: html = renderResults(); break;
    }

    container.innerHTML = `<div class="service-panel__box">${html}</div>`;
    
    /* Scroll to top of analyzer */
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /* ── Reset ─────────────────────────────────────────────── */

  function reset() {
    currentStep = 0;
    userData = { name: '', age: '', gender: '' };
    selectedSymptom = '';
    followUpAnswers = {};
  }

  /* ── Init ──────────────────────────────────────────────── */

  function init() {
    bindEvents();
  }

  /* ── Expose ────────────────────────────────────────────── */
  return { init, render, reset };
})();
