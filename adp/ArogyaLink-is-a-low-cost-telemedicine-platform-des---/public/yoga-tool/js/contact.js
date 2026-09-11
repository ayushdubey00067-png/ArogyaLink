/* ============================================================
   ArogyaLink — Contact Module (contact.js)
   Real-time form validation, submission, success modal,
   and LocalStorage persistence for messages.
   ============================================================ */

const Contact = (() => {
  'use strict';

  /* ── Validation Rules ──────────────────────────────────── */

  const RULES = {
    name: {
      required: true,
      minLength: 2,
      maxLength: 100,
      pattern: /^[a-zA-Z\s.'-]+$/,
      messages: {
        required: 'Please enter your name',
        minLength: 'Name must be at least 2 characters',
        pattern: 'Name can only contain letters, spaces, dots, and hyphens',
      },
    },
    email: {
      required: true,
      pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      messages: {
        required: 'Please enter your email address',
        pattern: 'Please enter a valid email address',
      },
    },
    phone: {
      required: true,
      pattern: /^[6-9]\d{9}$/,
      messages: {
        required: 'Please enter your phone number',
        pattern: 'Please enter a valid 10-digit Indian mobile number',
      },
    },
    message: {
      required: true,
      minLength: 10,
      maxLength: 1000,
      messages: {
        required: 'Please enter your message',
        minLength: 'Message must be at least 10 characters',
        maxLength: 'Message cannot exceed 1000 characters',
      },
    },
  };

  /* ── Validate a Single Field ───────────────────────────── */

  /**
   * @param {string} fieldName — key in RULES
   * @param {string} value — field value
   * @returns {{ valid: boolean, message: string }}
   */
  function validateField(fieldName, value) {
    const rule = RULES[fieldName];
    if (!rule) return { valid: true, message: '' };

    const trimmed = value.trim();

    if (rule.required && !trimmed) {
      return { valid: false, message: rule.messages.required };
    }

    if (rule.minLength && trimmed.length < rule.minLength) {
      return { valid: false, message: rule.messages.minLength };
    }

    if (rule.maxLength && trimmed.length > rule.maxLength) {
      return { valid: false, message: rule.messages.maxLength };
    }

    if (rule.pattern && !rule.pattern.test(trimmed)) {
      return { valid: false, message: rule.messages.pattern };
    }

    return { valid: true, message: '' };
  }

  /* ── Show / Clear Field Error ──────────────────────────── */

  function showError(fieldId, message) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.add('form-input--error');
    if (error) {
      error.textContent = '⚠ ' + message;
      error.classList.add('visible');
    }
  }

  function clearError(fieldId) {
    const input = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}-error`);
    if (input) input.classList.remove('form-input--error');
    if (error) error.classList.remove('visible');
  }

  /* ── Show Success Modal ────────────────────────────────── */

  function showSuccessModal() {
    const modal = document.getElementById('contact-success-modal');
    if (modal) {
      modal.classList.add('active');

      /* Auto-dismiss after 4 seconds */
      setTimeout(() => {
        modal.classList.remove('active');
      }, 4000);

      /* Click overlay to dismiss */
      modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.closest('.btn')) {
          modal.classList.remove('active');
        }
      });
    }
  }

  /* ── Form Submission ───────────────────────────────────── */

  function handleSubmit(e) {
    e.preventDefault();

    const fields = ['contact-name', 'contact-email', 'contact-phone', 'contact-message'];
    const fieldMap = {
      'contact-name': 'name',
      'contact-email': 'email',
      'contact-phone': 'phone',
      'contact-message': 'message',
    };

    let allValid = true;
    const data = {};

    fields.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      const value = input ? input.value : '';
      const ruleName = fieldMap[fieldId];
      const result = validateField(ruleName, value);

      if (!result.valid) {
        showError(fieldId, result.message);
        allValid = false;
      } else {
        clearError(fieldId);
        data[ruleName] = value.trim();
      }
    });

    if (!allValid) return;

    /* Save to LocalStorage */
    ArogyaStorage.saveReport(ArogyaStorage.KEYS.CONTACTS, data);

    /* Clear form */
    fields.forEach((fieldId) => {
      const input = document.getElementById(fieldId);
      if (input) input.value = '';
    });

    /* Show success */
    showSuccessModal();
  }

  /* ── Real-time Validation ──────────────────────────────── */

  function setupRealtimeValidation() {
    const fieldMap = {
      'contact-name': 'name',
      'contact-email': 'email',
      'contact-phone': 'phone',
      'contact-message': 'message',
    };

    Object.entries(fieldMap).forEach(([fieldId, ruleName]) => {
      const input = document.getElementById(fieldId);
      if (!input) return;

      /* Validate on blur */
      input.addEventListener('blur', () => {
        const result = validateField(ruleName, input.value);
        if (!result.valid) {
          showError(fieldId, result.message);
        } else {
          clearError(fieldId);
        }
      });

      /* Clear error on input */
      input.addEventListener('input', () => {
        clearError(fieldId);
      });
    });
  }

  /* ── Character Counter for Message ─────────────────────── */

  function setupCharCounter() {
    const textarea = document.getElementById('contact-message');
    const counter = document.getElementById('contact-message-counter');
    if (!textarea || !counter) return;

    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      counter.textContent = `${len}/1000`;
      counter.style.color = len > 900 ? 'var(--clr-danger)' : 'var(--text-muted)';
    });
  }

  /* ── Init ──────────────────────────────────────────────── */

  function init() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', handleSubmit);
    }

    setupRealtimeValidation();
    setupCharCounter();
  }

  return { init };
})();
