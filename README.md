I'm# LinkedOut directory structure 
backend/
├── models/
│   ├── Link.js
│   ├── Theme.js
│   ├── Template.js
│   ├── User.js
│   └── Plan.js         # NEW
├── routes/
│   ├── links.js
│   ├── themes.js
│   ├── templates.js
│   ├── analytics.js
│   ├── users.js        # NEW
│   └── plans.js        # NEW
├── utils/
│   ├── db.js
│   └── payments.js     # NEW
├── server.js
└── package.json
Front end 
frontend/
├── public/        # Static assets
│   └── index.html
├── src/
│   ├── components/
│   │   ├── LinkBuilder.js
│   │   ├── ThemeCustomizer.js
│   │   ├── TemplateSelector.js
│   │   ├── LandingPage.js
│   │   └── AnalyticsDashboard.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Admin.js
│   │   └── Landing.js
│   ├── styles/    # Custom CSS for templates
│   │   └── templates.css
│   ├── App.js     # Main App component
│   ├── index.js   # Entry point
│   └── api/       # Axios API utility
│       └── api.js
└── package.json   # Dependencies
