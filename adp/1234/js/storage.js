/* ============================================================
   ArogyaLink — Storage Module (storage.js)
   LocalStorage abstraction with JSON handling, timestamps,
   and capped history management.
   ============================================================ */

const ArogyaStorage = (() => {
  'use strict';

  /* ── Storage Keys ────────────────────────────────────────── */
  const KEYS = {
    SYMPTOM_REPORTS:  'arogyalink_symptom_reports',
    YOGA_REPORTS:     'arogyalink_yoga_reports',
    CONTACTS:         'arogyalink_contacts',
    USER_PREFS:       'arogyalink_user_prefs',
  };

  /** Maximum number of history entries to retain per key */
  const MAX_HISTORY = 10;

  /* ── Private Helpers ─────────────────────────────────────── */

  /**
   * Safely read and parse JSON from localStorage.
   * @param {string} key — localStorage key
   * @returns {*} Parsed value or null on failure
   */
  function _read(key) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    } catch (err) {
      console.warn(`[ArogyaStorage] Failed to read "${key}":`, err);
      return null;
    }
  }

  /**
   * Safely stringify and write JSON to localStorage.
   * @param {string} key — localStorage key
   * @param {*} value — data to store
   */
  function _write(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(`[ArogyaStorage] Failed to write "${key}":`, err);
    }
  }

  /**
   * Generate a human-readable timestamp string.
   * @returns {string} e.g. "18 Jun 2026, 01:05 AM"
   */
  function _timestamp() {
    return new Date().toLocaleString('en-IN', {
      day:    '2-digit',
      month:  'short',
      year:   'numeric',
      hour:   '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }

  /* ── Public API ──────────────────────────────────────────── */

  /**
   * Save a new report entry to a history array.
   * Automatically adds a timestamp and caps at MAX_HISTORY.
   * @param {string} key — one of KEYS.*
   * @param {Object} data — report payload
   */
  function saveReport(key, data) {
    const history = _read(key) || [];

    history.unshift({
      ...data,
      timestamp: _timestamp(),
      id: Date.now(),
    });

    /* Keep only the most recent entries */
    if (history.length > MAX_HISTORY) {
      history.length = MAX_HISTORY;
    }

    _write(key, history);
  }

  /**
   * Get the most recent report for a given key.
   * @param {string} key
   * @returns {Object|null}
   */
  function getLatest(key) {
    const history = _read(key);
    return history && history.length > 0 ? history[0] : null;
  }

  /**
   * Get the full history array for a given key.
   * @param {string} key
   * @returns {Array}
   */
  function getHistory(key) {
    return _read(key) || [];
  }

  /**
   * Clear all history for a specific key.
   * @param {string} key
   */
  function clearHistory(key) {
    localStorage.removeItem(key);
  }

  /**
   * Clear all ArogyaLink data from localStorage.
   */
  function clearAll() {
    Object.values(KEYS).forEach((k) => localStorage.removeItem(k));
  }

  /**
   * Get combined recent activity across all report types.
   * Returns a flat list sorted by most-recent-first.
   * @param {number} [limit=5]
   * @returns {Array}
   */
  function getRecentActivity(limit = 5) {
    const symptoms = getHistory(KEYS.SYMPTOM_REPORTS).map((r) => ({
      ...r,
      type: 'symptom',
      label: `Symptom Analysis: ${r.condition || 'Unknown'}`,
    }));

    const yoga = getHistory(KEYS.YOGA_REPORTS).map((r) => ({
      ...r,
      type: 'yoga',
      label: `Yoga Plan: ${r.goal || 'General'}`,
    }));

    return [...symptoms, ...yoga]
      .sort((a, b) => b.id - a.id)
      .slice(0, limit);
  }

  /**
   * Get quick statistics for the dashboard.
   * @returns {Object}
   */
  function getStats() {
    return {
      totalAnalyses:       getHistory(KEYS.SYMPTOM_REPORTS).length,
      totalYoga:           getHistory(KEYS.YOGA_REPORTS).length,
      totalContacts:       getHistory(KEYS.CONTACTS).length,
      lastSymptomDate:     getLatest(KEYS.SYMPTOM_REPORTS)?.timestamp || 'No data yet',
      lastYogaDate:        getLatest(KEYS.YOGA_REPORTS)?.timestamp    || 'No data yet',
    };
  }

  /* ── Expose ──────────────────────────────────────────────── */
  return {
    KEYS,
    saveReport,
    getLatest,
    getHistory,
    clearHistory,
    clearAll,
    getRecentActivity,
    getStats,
  };
})();
