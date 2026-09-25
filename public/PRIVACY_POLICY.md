# Privacy Policy for SpareTank

**Effective Date:** September 24, 2026  
**Last Updated:** September 24, 2026

Tekromancy ("we", "our", or "us") developed **SpareTank** and **SpareTank Pro** as utility applications designed to manage battery longevity and preserve emergency reserve battery power.

This Privacy Policy explains how our applications handle device information and user privacy in compliance with the Google Play Developer Program Policies.

---

## 1. Information Collection and Use

### A. Personal Information
SpareTank does **NOT** collect, transmit, store, or sell any personally identifiable information (such as your name, email address, phone number, contacts, or location).

### B. Battery & Hardware Telemetry
To deliver battery monitoring and alerts, SpareTank reads standard system battery broadcasts provided by Android:
- Battery percentage level and charging status (charging, discharging, AC, USB, wireless).
- Hardware health, battery temperature, and voltage.

**All telemetry processing occurs strictly on your local device in real time.** None of this battery telemetry is recorded, transmitted to any remote server, or shared with third parties.

---

## 2. Prominent Disclosure: Accessibility Service API Usage

SpareTank includes an optional Accessibility Service (`SpareTankAccessibilityService`). In accordance with Google Play's User Data and Accessibility API Policies:

- **Specific Purpose:** The Accessibility Service is used solely to execute standard Android global actions (`GLOBAL_ACTION_POWER_DIALOG` and `GLOBAL_ACTION_LOCK_SCREEN`) when the battery drops to your designated critical reserve threshold (Spare Tank floor), providing an assistive power-off mechanism for unrooted devices.
- **No Data Collection or Keystroke Logging:** SpareTank does **NOT** use Accessibility APIs to monitor user interactions, inspect screen contents (`canRetrieveWindowContent="false"`), record keystrokes, alter settings without consent, or circumvent any Android security controls.
- **Voluntary & User-Controlled:** The service is disabled by default and can only be enabled or disabled explicitly by the user within Android System Settings at any time.

---

## 3. Permissions Used and Why

- **Notifications (`POST_NOTIFICATIONS`)**: Used to display persistent foreground monitoring status and trigger alerts when you need to plug in, unplug, or respond to the reserve countdown.
- **Foreground Service (`FOREGROUND_SERVICE`, `FOREGROUND_SERVICE_SPECIAL_USE`)**: Required for real-time monitoring of battery state changes when the app is in the background.
- **Full Screen Intent (`USE_FULL_SCREEN_INTENT`)**: Used to display the emergency reserve countdown dialog over the lock screen so you have time to cancel automated shutdown if actively using your device.
- **Ignore Battery Optimizations (`REQUEST_IGNORE_BATTERY_OPTIMIZATIONS`)**: Requested optionally so Android's Doze mode does not suspend the background battery listener.
- **Vibrate (`VIBRATE`) & Wake Lock (`WAKE_LOCK`)**: Used for tactile alerts and to briefly wake the screen during emergency countdowns.

---

## 4. Advertising & Third-Party SDKs

- **SpareTank (Free Edition)**: Integrates Google Mobile Ads (AdMob) to display banner ads. AdMob may collect and process device identifiers, advertising ID (GAID), and diagnostic data in accordance with [Google's Privacy Policy](https://policies.google.com/privacy).
- **SpareTank Pro**: 100% ad-free and contains no advertising SDKs or third-party tracking libraries.

---

## 5. Security & Data Retention

Because SpareTank does not collect or transmit personal user data to external servers, we do not store your data on external databases. App preferences (such as threshold percentages and alert toggles) are stored locally on your device via Android DataStore.

---

## 6. Children's Privacy

Our application is not targeted at children under 13, and we do not knowingly collect personal data from children.

---

## 7. Changes to This Privacy Policy

We may update our Privacy Policy periodically. Any changes will be posted on this page with an updated Effective Date.

---

## 8. Contact Us

If you have any questions or suggestions regarding our Privacy Policy or data practices, please contact us at:
- **Developer / Publisher:** Tekromancy
- **Email:** support@tekromancy.com
