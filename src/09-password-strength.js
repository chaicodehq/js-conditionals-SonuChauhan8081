/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  if(password === "" || typeof password !== 'string'){
    return "weak";
  }

  let criteria = 0;
  let upperCase = false;
  let lowerCase = false;
  let number = false;
  let specialChar = false

  for(let ch of password){
    if (/[^a-zA-Z0-9]/.test(ch) && !specialChar) {
      specialChar = true;
      criteria += 1;
    } else if(/[0-9]/.test(ch) && !number){
      number = true;
      criteria += 1;
    } else if(/[a-z]/.test(ch) && !lowerCase){
      lowerCase = true;
      criteria += 1;
    } else if(/[A-Z]/.test(ch) && !upperCase){
      upperCase = true;
      criteria += 1;
    }
  }
  if(password.length >= 8) criteria += 1;

  if(criteria >= 0 && criteria <=1) return "weak";
  else if(criteria >= 2 && criteria <= 3) return "medium";
  else if(criteria == 4) return "strong";
  else return "very strong";
}
