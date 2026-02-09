# ReqRes API Test Automation Framework

This project is a **professional-grade API automation framework** built using **Playwright Test**, **ES6 JavaScript**, and **Monocart Reporter**.  
It demonstrates a complete **User Lifecycle (Create, Read, Update)** against the public **ReqRes.in** hosted API.

The framework follows **industry best practices** for scalability, reporting, CI/CD integration, and artifact management.

---

## 🚀 Features

### ✅ API Page Object Model
- Clean separation of concerns:
  - API logic in `api/`
  - Test logic in `tests/`
- Easy to extend for additional endpoints.

### 🔄 Global Lifecycle Management
- Automated cleanup and artifact preparation using `globalSetup`.
- Ensures clean execution on every run (local & CI).

### 📊 Professional Reporting
- **Monocart Reporter**
  - Single-file, shareable HTML dashboard.
  - Ideal for stakeholders and management.
- **Playwright HTML Report**
  - Native technical report with traces and request/response inspection.

### ☁️ CI/CD Ready
- Fully integrated with **GitHub Actions**.
- Uses **encrypted GitHub Secrets** for token management.
- Runs automatically on every push and pull request.

### 📁 Dynamic Artifacts
- Automatically stores:
  - API response payloads as JSON
  - Execution traces on failure
  - HTML reports
- All artifacts are versioned per run.

---

## 📂 Project Structure

```plaintext
├── .github/workflows/        # GitHub Actions CI configuration
├── testAssets/
│   ├── api/                  # API Service Objects (UserApi.js)
│   ├── utils/                # Utilities (apiClient.js, env.js)
│   ├── artifacts/            # AUTO-GENERATED: Reports & JSON logs
│   ├── tests/                # Test suites (user.spec.js)
│   └── globalSetup.js        # Pre-test cleanup logic
├── .env                      # Local environment variables
├── playwright.config.js      # Global framework configuration
└── package.json              # Dependencies & scripts

🛠️ Installation & Local Setup
1️⃣ Clone the Repository
git clone <your-repo-url>
cd reqRes

2️⃣ Install Dependencies
npm install
npx playwright install --with-deps

3️⃣ Configure Environment Variables

Create a .env file in the project root:

BASE_URL=https://reqres.in
REQRES_TOKEN=your_token_here