/* ============================================================
   ArogyaLink — Yoga Recommendation Engine (yogaAdvisor.js)
   5-step questionnaire, BMI calculation, personalized yoga
   recommendations with detailed pose information.
   ============================================================ */

const YogaAdvisor = (() => {
  'use strict';

  /* ── State ─────────────────────────────────────────────── */
  let currentStep = 0;
  let yogaData = {
    goal: '',
    age: '',
    height: '',
    weight: '',
    activityLevel: '',
  };

  /* ── Yoga Pose Database ────────────────────────────────── */

  const YOGA_DB = {
    weight_loss: {
      label: 'Weight Loss',
      icon: '🏋️',
      poses: [
        {
          name: 'Surya Namaskar',
          sanskrit: 'Sun Salutation',
          benefits: ['Burns calories effectively', 'Improves flexibility', 'Strengthens the entire body', 'Boosts metabolism'],
          instructions: [
            'Stand at the edge of your mat with feet together',
            'Raise your arms overhead and arch back slightly',
            'Bend forward, touching your toes (Uttanasana)',
            'Step back into plank, then lower to the floor',
            'Push up into Cobra pose (Bhujangasana)',
            'Lift hips into Downward Dog (Adho Mukha Svanasana)',
            'Step forward, fold, and rise back to standing',
            'Repeat for 12 rounds',
          ],
          duration: '15-20 minutes',
          level: 'All Levels',
        },
        {
          name: 'Naukasana',
          sanskrit: 'Boat Pose',
          benefits: ['Strengthens core muscles', 'Reduces belly fat', 'Improves digestion', 'Tones abdominal muscles'],
          instructions: [
            'Lie flat on your back with arms by your side',
            'Inhale and lift your chest, arms, and legs off the floor',
            'Keep your arms parallel to the ground, pointing forward',
            'Hold the position with core engaged for 15-30 seconds',
            'Exhale and slowly lower back down',
            'Repeat 5-8 times',
          ],
          duration: '10-15 minutes',
          level: 'Intermediate',
        },
        {
          name: 'Bhujangasana',
          sanskrit: 'Cobra Pose',
          benefits: ['Reduces belly fat', 'Strengthens spine', 'Opens chest and shoulders', 'Improves blood circulation'],
          instructions: [
            'Lie face down with palms placed near your chest',
            'Press palms into the floor and slowly lift your upper body',
            'Keep elbows slightly bent and shoulders relaxed',
            'Hold for 15-30 seconds, breathing deeply',
            'Slowly lower back down',
            'Repeat 3-5 times',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
        {
          name: 'Virabhadrasana',
          sanskrit: 'Warrior Pose',
          benefits: ['Strengthens legs and arms', 'Improves stamina', 'Burns calories', 'Enhances balance'],
          instructions: [
            'Stand with feet wide apart (3-4 feet)',
            'Turn right foot out 90 degrees and left foot slightly inward',
            'Bend right knee to 90 degrees over the ankle',
            'Raise arms overhead, palms facing each other',
            'Hold for 30 seconds, then switch sides',
            'Repeat 3 times each side',
          ],
          duration: '10-15 minutes',
          level: 'Beginner',
        },
      ],
    },

    stress_relief: {
      label: 'Stress Relief',
      icon: '🧘',
      poses: [
        {
          name: 'Balasana',
          sanskrit: 'Child\'s Pose',
          benefits: ['Calms the nervous system', 'Relieves stress and tension', 'Gently stretches the back', 'Promotes relaxation'],
          instructions: [
            'Kneel on the floor with big toes touching',
            'Sit back on your heels and separate knees hip-width',
            'Fold forward, extending arms in front or alongside body',
            'Rest your forehead on the mat',
            'Breathe deeply and hold for 1-3 minutes',
            'Focus on releasing tension with each exhale',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
        {
          name: 'Dhyana',
          sanskrit: 'Meditation',
          benefits: ['Reduces anxiety and stress', 'Improves mental clarity', 'Enhances emotional well-being', 'Lowers cortisol levels'],
          instructions: [
            'Sit in a comfortable cross-legged position (Sukhasana)',
            'Keep your spine straight and shoulders relaxed',
            'Close your eyes gently and place hands on knees',
            'Focus on your natural breath — inhale and exhale',
            'When thoughts arise, acknowledge them and return to breath',
            'Start with 5 minutes and gradually increase to 15-20 minutes',
          ],
          duration: '15-20 minutes',
          level: 'All Levels',
        },
        {
          name: 'Vajrasana',
          sanskrit: 'Thunderbolt Pose',
          benefits: ['Calms the mind', 'Aids digestion', 'Strengthens pelvic muscles', 'Promotes steady breathing'],
          instructions: [
            'Kneel on the floor with knees together',
            'Sit back on your heels with toes pointing backward',
            'Place palms on thighs and keep spine erect',
            'Close eyes and focus on breathing',
            'Hold for 5-10 minutes after meals',
            'This is the only asana that can be done after eating',
          ],
          duration: '5-15 minutes',
          level: 'Beginner',
        },
        {
          name: 'Savasana',
          sanskrit: 'Corpse Pose',
          benefits: ['Deep relaxation of body and mind', 'Reduces blood pressure', 'Relieves headaches', 'Combats insomnia'],
          instructions: [
            'Lie flat on your back on a comfortable surface',
            'Keep legs slightly apart and arms at your sides, palms up',
            'Close your eyes and relax every muscle',
            'Start from toes and progressively relax up to the head',
            'Breathe naturally and let go of all tension',
            'Remain in this pose for 10-15 minutes',
          ],
          duration: '10-15 minutes',
          level: 'All Levels',
        },
      ],
    },

    better_sleep: {
      label: 'Better Sleep',
      icon: '😴',
      poses: [
        {
          name: 'Savasana',
          sanskrit: 'Corpse Pose',
          benefits: ['Induces deep relaxation', 'Prepares body for sleep', 'Calms the nervous system', 'Reduces insomnia'],
          instructions: [
            'Lie on your back in bed or on a mat',
            'Spread arms and legs slightly apart, palms facing up',
            'Close your eyes and consciously relax each body part',
            'Start with your toes and move up to the crown of your head',
            'Maintain slow, deep breathing',
            'Practice for 10-15 minutes before sleep',
          ],
          duration: '10-15 minutes',
          level: 'All Levels',
        },
        {
          name: 'Pranayama',
          sanskrit: 'Deep Breathing',
          benefits: ['Slows heart rate', 'Activates parasympathetic nervous system', 'Reduces anxiety before bed', 'Improves oxygen supply'],
          instructions: [
            'Lie down comfortably or sit in Sukhasana',
            'Place one hand on your chest and one on your belly',
            'Inhale slowly through your nose for 4 counts',
            'Hold your breath for 4 counts',
            'Exhale slowly through your mouth for 6 counts',
            'Repeat this cycle 10-15 times',
          ],
          duration: '10-15 minutes',
          level: 'All Levels',
        },
        {
          name: 'Supta Baddha Konasana',
          sanskrit: 'Reclining Bound Angle Pose',
          benefits: ['Relaxes groin and inner thighs', 'Calms the mind', 'Stimulates heart and circulation', 'Ideal bedtime pose'],
          instructions: [
            'Lie on your back',
            'Bend your knees and bring soles of feet together',
            'Let your knees drop open to the sides',
            'Place arms at your sides, palms up',
            'Support knees with pillows if needed',
            'Hold for 5-10 minutes while breathing deeply',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
      ],
    },

    breathing: {
      label: 'Breathing Improvement',
      icon: '🌬️',
      poses: [
        {
          name: 'Anulom Vilom',
          sanskrit: 'Alternate Nostril Breathing',
          benefits: ['Purifies energy channels', 'Balances left and right brain', 'Reduces stress and anxiety', 'Improves lung capacity'],
          instructions: [
            'Sit in Padmasana or Sukhasana with spine straight',
            'Close right nostril with right thumb',
            'Inhale slowly through the left nostril for 4 counts',
            'Close left nostril with ring finger, open right nostril',
            'Exhale through right nostril for 8 counts',
            'Inhale through right nostril for 4 counts',
            'Close right, exhale through left for 8 counts',
            'This is one round. Do 10-15 rounds.',
          ],
          duration: '10-15 minutes',
          level: 'All Levels',
        },
        {
          name: 'Kapalbhati',
          sanskrit: 'Skull Shining Breath',
          benefits: ['Cleanses lungs and sinuses', 'Boosts metabolism', 'Strengthens abdominal muscles', 'Increases oxygen supply'],
          instructions: [
            'Sit comfortably with spine erect',
            'Take a deep breath in through both nostrils',
            'Exhale forcefully through the nose by pulling navel toward spine',
            'Let the inhalation happen passively (natural)',
            'Start with 30 strokes per round',
            'Do 3 rounds with 1-minute rest between rounds',
            'Avoid if you have high blood pressure or are pregnant',
          ],
          duration: '10-15 minutes',
          level: 'Intermediate',
        },
        {
          name: 'Bhramari',
          sanskrit: 'Bee Breathing',
          benefits: ['Calms the mind instantly', 'Reduces anger and anxiety', 'Improves concentration', 'Beneficial for throat health'],
          instructions: [
            'Sit comfortably and close your eyes',
            'Place index fingers on the tragus of each ear',
            'Take a deep breath in through the nose',
            'Exhale while making a low humming sound like a bee',
            'Feel the vibration in your head and throat',
            'Do 5-10 rounds',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
      ],
    },

    flexibility: {
      label: 'Flexibility',
      icon: '🤸',
      poses: [
        {
          name: 'Trikonasana',
          sanskrit: 'Triangle Pose',
          benefits: ['Stretches legs, hips, and spine', 'Opens chest and shoulders', 'Improves balance', 'Stimulates abdominal organs'],
          instructions: [
            'Stand with feet 3-4 feet apart',
            'Turn right foot out 90 degrees',
            'Extend arms parallel to the floor',
            'Reach right hand toward right foot, bending at the hip',
            'Extend left arm straight up toward the ceiling',
            'Hold for 30 seconds, then switch sides',
          ],
          duration: '10-15 minutes',
          level: 'Beginner',
        },
        {
          name: 'Paschimottanasana',
          sanskrit: 'Seated Forward Bend',
          benefits: ['Stretches hamstrings and spine', 'Calms the mind', 'Improves digestion', 'Reduces stress'],
          instructions: [
            'Sit with legs extended straight in front',
            'Inhale and raise arms overhead',
            'Exhale and fold forward from the hips',
            'Reach for your toes, ankles, or shins',
            'Keep your spine as long as possible',
            'Hold for 30-60 seconds, breathing deeply',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
        {
          name: 'Marjariasana',
          sanskrit: 'Cat-Cow Pose',
          benefits: ['Improves spine flexibility', 'Relieves back tension', 'Massages abdominal organs', 'Warms up the body'],
          instructions: [
            'Come to all fours — hands under shoulders, knees under hips',
            'Inhale: arch your back, lift chest and tailbone (Cow)',
            'Exhale: round your spine, tuck chin and tailbone (Cat)',
            'Move slowly, synchronizing with breath',
            'Repeat 10-15 rounds',
            'Keep movements smooth and controlled',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
      ],
    },

    general_fitness: {
      label: 'General Fitness',
      icon: '💪',
      poses: [
        {
          name: 'Surya Namaskar',
          sanskrit: 'Sun Salutation',
          benefits: ['Complete body workout', 'Improves cardiovascular health', 'Enhances flexibility and strength', 'Boosts energy levels'],
          instructions: [
            'Stand at the edge of your mat, feet together, hands in prayer',
            'Inhale, raise arms. Exhale, fold forward',
            'Inhale, look up with flat back. Exhale, step back to plank',
            'Lower to floor (Chaturanga), then inhale into Cobra',
            'Exhale, lift into Downward Dog. Hold for 5 breaths',
            'Step forward, fold, and rise to standing',
            'Complete 6-12 rounds',
          ],
          duration: '15-20 minutes',
          level: 'All Levels',
        },
        {
          name: 'Tadasana',
          sanskrit: 'Mountain Pose',
          benefits: ['Improves posture', 'Strengthens thighs and ankles', 'Increases awareness', 'Foundation for all standing poses'],
          instructions: [
            'Stand with feet together, big toes touching',
            'Distribute weight evenly across both feet',
            'Engage thigh muscles and lift kneecaps',
            'Lengthen spine, roll shoulders back and down',
            'Extend arms alongside body, palms facing forward',
            'Hold for 30-60 seconds, breathing steadily',
          ],
          duration: '2-5 minutes',
          level: 'Beginner',
        },
        {
          name: 'Vrksasana',
          sanskrit: 'Tree Pose',
          benefits: ['Improves balance', 'Strengthens legs and core', 'Enhances focus and concentration', 'Builds confidence'],
          instructions: [
            'Stand in Tadasana (Mountain Pose)',
            'Shift weight to left foot',
            'Place right foot on inner left thigh (avoid the knee)',
            'Bring hands to prayer position or raise overhead',
            'Fix your gaze on a still point for balance',
            'Hold for 30-60 seconds, then switch sides',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
        {
          name: 'Setu Bandhasana',
          sanskrit: 'Bridge Pose',
          benefits: ['Strengthens glutes and back', 'Opens chest and hip flexors', 'Calms the brain', 'Reduces backache'],
          instructions: [
            'Lie on your back with knees bent, feet hip-width apart',
            'Place arms alongside body, palms down',
            'Press feet into floor and lift hips toward ceiling',
            'Interlace fingers under your back if comfortable',
            'Hold for 30-60 seconds, breathing deeply',
            'Slowly lower down one vertebra at a time',
          ],
          duration: '5-10 minutes',
          level: 'Beginner',
        },
      ],
    },
  };

  /* ── BMI Calculation ───────────────────────────────────── */

  /**
   * Calculate BMI and return category.
   */
  function calculateBMI() {
    const heightCm = parseFloat(yogaData.height);
    const weightKg = parseFloat(yogaData.weight);

    if (!heightCm || !weightKg) return null;

    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);

    let category = 'Normal';
    if (bmi < 18.5) category = 'Underweight';
    else if (bmi < 25) category = 'Normal';
    else if (bmi < 30) category = 'Overweight';
    else category = 'Obese';

    return { value: bmi.toFixed(1), category };
  }

  /**
   * Adjust duration recommendations based on activity level and BMI.
   */
  function getDurationAdvice() {
    const bmi = calculateBMI();
    const activity = yogaData.activityLevel;

    if (activity === 'low') {
      return 'Start with shorter sessions (10-15 min) and gradually increase. Listen to your body.';
    } else if (activity === 'high') {
      return 'You can practice for longer sessions (30-45 min). Challenge yourself with advanced variations.';
    }
    return 'Aim for 20-30 minute sessions. Maintain consistency for best results.';
  }

  /* ── UI Rendering ──────────────────────────────────────── */

  function getContainer() {
    return document.getElementById('yoga-advisor');
  }

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

  function renderProgressBar(total) {
    const pct = ((currentStep + 1) / total) * 100;
    return `
      <div class="progress-bar">
        <div class="progress-bar__fill" style="width: ${pct}%"></div>
      </div>
    `;
  }

  /* Step 0: Yoga Goal */
  function renderStep0() {
    const goals = Object.entries(YOGA_DB).map(([key, data]) => `
      <div class="option-card ${yogaData.goal === key ? 'selected' : ''}" data-value="${key}">
        <div class="option-card__radio"></div>
        <span class="option-card__label">${data.icon} ${data.label}</span>
      </div>
    `).join('');

    return `
      ${renderStepIndicator(6)}
      ${renderProgressBar(6)}
      <div class="step-content active">
        <h3 class="step-content__title">🎯 Why do you want to practice yoga?</h3>
        <p class="step-content__subtitle">Select your primary goal for yoga practice.</p>
        
        <div class="options-grid" id="ya-goal-options">
          ${goals}
        </div>
        <div class="form-error" id="ya-goal-error">⚠ Please select a goal</div>
        
        <div class="step-nav">
          <div></div>
          <button class="btn btn--primary" id="ya-next-0">Next Step →</button>
        </div>
      </div>
    `;
  }

  /* Step 1: Age */
  function renderStep1() {
    return `
      ${renderStepIndicator(6)}
      ${renderProgressBar(6)}
      <div class="step-content active">
        <h3 class="step-content__title">📅 How old are you?</h3>
        <p class="step-content__subtitle">Your age helps us recommend appropriate yoga practices.</p>
        
        <div class="form-group">
          <label for="ya-age">Age (years)</label>
          <input type="number" id="ya-age" class="form-input" placeholder="Enter your age" min="5" max="100" value="${yogaData.age}">
          <div class="form-error" id="ya-age-error">⚠ Please enter a valid age (5-100)</div>
        </div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="ya-back-1">← Back</button>
          <button class="btn btn--primary" id="ya-next-1">Next Step →</button>
        </div>
      </div>
    `;
  }

  /* Step 2: Height */
  function renderStep2() {
    return `
      ${renderStepIndicator(6)}
      ${renderProgressBar(6)}
      <div class="step-content active">
        <h3 class="step-content__title">📏 What is your height?</h3>
        <p class="step-content__subtitle">Height is used for BMI calculation and personalized recommendations.</p>
        
        <div class="form-group">
          <label for="ya-height">Height (cm)</label>
          <input type="number" id="ya-height" class="form-input" placeholder="e.g. 170" min="80" max="250" value="${yogaData.height}">
          <div class="form-error" id="ya-height-error">⚠ Please enter a valid height (80-250 cm)</div>
        </div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="ya-back-2">← Back</button>
          <button class="btn btn--primary" id="ya-next-2">Next Step →</button>
        </div>
      </div>
    `;
  }

  /* Step 3: Weight */
  function renderStep3() {
    return `
      ${renderStepIndicator(6)}
      ${renderProgressBar(6)}
      <div class="step-content active">
        <h3 class="step-content__title">⚖️ What is your weight?</h3>
        <p class="step-content__subtitle">Weight helps calculate your BMI for more accurate recommendations.</p>
        
        <div class="form-group">
          <label for="ya-weight">Weight (kg)</label>
          <input type="number" id="ya-weight" class="form-input" placeholder="e.g. 65" min="15" max="300" value="${yogaData.weight}">
          <div class="form-error" id="ya-weight-error">⚠ Please enter a valid weight (15-300 kg)</div>
        </div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="ya-back-3">← Back</button>
          <button class="btn btn--primary" id="ya-next-3">Next Step →</button>
        </div>
      </div>
    `;
  }

  /* Step 4: Activity Level */
  function renderStep4() {
    return `
      ${renderStepIndicator(6)}
      ${renderProgressBar(6)}
      <div class="step-content active">
        <h3 class="step-content__title">🏃 What is your activity level?</h3>
        <p class="step-content__subtitle">This helps us calibrate intensity and duration of recommendations.</p>
        
        <div class="options-grid" id="ya-activity-options">
          <div class="option-card ${yogaData.activityLevel === 'low' ? 'selected' : ''}" data-value="low">
            <div class="option-card__radio"></div>
            <span class="option-card__label">🚶 Low — Mostly sedentary</span>
          </div>
          <div class="option-card ${yogaData.activityLevel === 'medium' ? 'selected' : ''}" data-value="medium">
            <div class="option-card__radio"></div>
            <span class="option-card__label">🚴 Medium — Moderately active</span>
          </div>
          <div class="option-card ${yogaData.activityLevel === 'high' ? 'selected' : ''}" data-value="high">
            <div class="option-card__radio"></div>
            <span class="option-card__label">🏋️ High — Very active</span>
          </div>
        </div>
        <div class="form-error" id="ya-activity-error">⚠ Please select your activity level</div>
        
        <div class="step-nav">
          <button class="btn btn--secondary" id="ya-back-4">← Back</button>
          <button class="btn btn--primary" id="ya-generate">Generate Plan 🧘</button>
        </div>
      </div>
    `;
  }

  /* Step 5: Results */
  function renderResults() {
    const goalData = YOGA_DB[yogaData.goal];
    if (!goalData) return '';

    const bmi = calculateBMI();
    const durationAdvice = getDurationAdvice();

    /* Save to LocalStorage */
    ArogyaStorage.saveReport(ArogyaStorage.KEYS.YOGA_REPORTS, {
      goal: goalData.label,
      age: yogaData.age,
      height: yogaData.height,
      weight: yogaData.weight,
      activityLevel: yogaData.activityLevel,
      bmi: bmi ? bmi.value : 'N/A',
      bmiCategory: bmi ? bmi.category : 'N/A',
      poses: goalData.poses.map((p) => p.name),
    });

    /* Render pose cards */
    const poseCards = goalData.poses.map((pose) => {
      const benefits = pose.benefits.map((b) => `<li>✦ ${b}</li>`).join('');
      const instructions = pose.instructions.map((s, i) => `<li>${i + 1}. ${s}</li>`).join('');

      return `
        <div class="yoga-card reveal">
          <div class="yoga-card__name">${pose.name}</div>
          <div class="yoga-card__sanskrit">${pose.sanskrit}</div>
          
          <div class="yoga-card__section">
            <div class="yoga-card__section-title">💚 Benefits</div>
            <ul style="list-style: none; padding: 0;">${benefits}</ul>
          </div>
          
          <div class="yoga-card__section">
            <div class="yoga-card__section-title">📝 Instructions</div>
            <ol>${instructions}</ol>
          </div>
          
          <div class="yoga-card__duration">⏱️ ${pose.duration}</div>
          <span class="badge badge--primary" style="margin-left: var(--sp-2);">${pose.level}</span>
        </div>
      `;
    }).join('');

    return `
      <div class="results-container">
        <div class="results-container__header">
          <div class="results-container__icon">🧘</div>
          <h3 class="results-container__title">Your Personalized Yoga Plan</h3>
          <p class="text-muted">Goal: <strong>${goalData.label}</strong></p>
        </div>
        
        <!-- BMI Card -->
        ${bmi ? `
        <div class="result-card" style="margin-bottom: var(--sp-6);">
          <div class="result-card__header">
            <div class="result-card__icon">⚖️</div>
            <div>
              <div class="result-card__title">Your Body Profile</div>
              <div class="result-card__subtitle">BMI Assessment</div>
            </div>
          </div>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: var(--sp-4); text-align: center;">
            <div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--clr-primary);">${bmi.value}</div>
              <div style="font-size: var(--fs-sm); color: var(--text-muted);">BMI Score</div>
            </div>
            <div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--text-heading);">${bmi.category}</div>
              <div style="font-size: var(--fs-sm); color: var(--text-muted);">Category</div>
            </div>
            <div>
              <div style="font-size: var(--fs-2xl); font-weight: var(--fw-extrabold); color: var(--clr-accent);">${yogaData.activityLevel.charAt(0).toUpperCase() + yogaData.activityLevel.slice(1)}</div>
              <div style="font-size: var(--fs-sm); color: var(--text-muted);">Activity</div>
            </div>
          </div>
          <p style="margin-top: var(--sp-4); font-size: var(--fs-sm); color: var(--text-body); background: var(--clr-primary-light); padding: var(--sp-3) var(--sp-4); border-radius: var(--radius-md);">
            💡 ${durationAdvice}
          </p>
        </div>
        ` : ''}
        
        <!-- Yoga Poses -->
        <h4 style="margin-bottom: var(--sp-6); font-size: var(--fs-xl);">🧘 Recommended Poses</h4>
        <div style="display: grid; gap: var(--sp-6);">
          ${poseCards}
        </div>
        
        <div class="step-nav" style="border-top: none; margin-top: var(--sp-8);">
          <button class="btn btn--secondary" id="ya-restart">↻ Start Over</button>
          <button class="btn btn--primary" id="ya-go-dashboard" onclick="window.location.hash='dashboard'">View Dashboard →</button>
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

      /* Option cards */
      const optionCard = target.closest('.option-card');
      if (optionCard) {
        const parent = optionCard.parentElement;
        parent.querySelectorAll('.option-card').forEach((c) => c.classList.remove('selected'));
        optionCard.classList.add('selected');
      }

      /* Step 0: Goal */
      if (target.id === 'ya-next-0' || target.closest('#ya-next-0')) {
        const sel = document.querySelector('#ya-goal-options .option-card.selected');
        if (!sel) {
          document.getElementById('ya-goal-error').classList.add('visible');
          return;
        }
        document.getElementById('ya-goal-error').classList.remove('visible');
        yogaData.goal = sel.dataset.value;
        currentStep = 1;
        render();
      }

      /* Step 1: Age */
      if (target.id === 'ya-next-1' || target.closest('#ya-next-1')) {
        const age = document.getElementById('ya-age').value.trim();
        if (!age || parseInt(age) < 5 || parseInt(age) > 100) {
          document.getElementById('ya-age-error').classList.add('visible');
          return;
        }
        document.getElementById('ya-age-error').classList.remove('visible');
        yogaData.age = age;
        currentStep = 2;
        render();
      }

      /* Step 2: Height */
      if (target.id === 'ya-next-2' || target.closest('#ya-next-2')) {
        const height = document.getElementById('ya-height').value.trim();
        if (!height || parseInt(height) < 80 || parseInt(height) > 250) {
          document.getElementById('ya-height-error').classList.add('visible');
          return;
        }
        document.getElementById('ya-height-error').classList.remove('visible');
        yogaData.height = height;
        currentStep = 3;
        render();
      }

      /* Step 3: Weight */
      if (target.id === 'ya-next-3' || target.closest('#ya-next-3')) {
        const weight = document.getElementById('ya-weight').value.trim();
        if (!weight || parseInt(weight) < 15 || parseInt(weight) > 300) {
          document.getElementById('ya-weight-error').classList.add('visible');
          return;
        }
        document.getElementById('ya-weight-error').classList.remove('visible');
        yogaData.weight = weight;
        currentStep = 4;
        render();
      }

      /* Step 4: Activity Level */
      if (target.id === 'ya-generate' || target.closest('#ya-generate')) {
        const sel = document.querySelector('#ya-activity-options .option-card.selected');
        if (!sel) {
          document.getElementById('ya-activity-error').classList.add('visible');
          return;
        }
        document.getElementById('ya-activity-error').classList.remove('visible');
        yogaData.activityLevel = sel.dataset.value;
        currentStep = 5;
        render();
      }

      /* Back buttons */
      if (target.id === 'ya-back-1' || target.closest('#ya-back-1')) { currentStep = 0; render(); }
      if (target.id === 'ya-back-2' || target.closest('#ya-back-2')) { currentStep = 1; render(); }
      if (target.id === 'ya-back-3' || target.closest('#ya-back-3')) { currentStep = 2; render(); }
      if (target.id === 'ya-back-4' || target.closest('#ya-back-4')) { currentStep = 3; render(); }

      /* Restart */
      if (target.id === 'ya-restart' || target.closest('#ya-restart')) {
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
      case 3: html = renderStep3(); break;
      case 4: html = renderStep4(); break;
      case 5: html = renderResults(); break;
    }

    container.innerHTML = `<div class="service-panel__box">${html}</div>`;
    container.scrollIntoView({ behavior: 'smooth', block: 'start' });

    /* Re-init scroll reveals for result cards */
    if (currentStep === 5) {
      setTimeout(() => ArogyaAnimations.initScrollReveal(), 100);
    }
  }

  /* ── Reset ─────────────────────────────────────────────── */

  function reset() {
    currentStep = 0;
    yogaData = { goal: '', age: '', height: '', weight: '', activityLevel: '' };
  }

  /* ── Init ──────────────────────────────────────────────── */

  function init() {
    bindEvents();
  }

  return { init, render, reset };
})();
