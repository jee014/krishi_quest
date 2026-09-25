import React, { useState, useEffect } from 'react';
import { Sprout, Users, TrendingUp, Calendar, Globe, User, LogOut, Menu, X } from 'lucide-react';

// Language translations
const translations = {
  en: {
    title: "Agricultural Web App Platform",
    subtitle: "Empowering farmers with modern technology",
    smartPlanning: "Smart Planning",
    communitySupport: "Community Support",
    marketInsights: "Market Insights",
    eventCalendar: "Event Calendar",
    login: "Login",
    signup: "Sign Up",
    logout: "Logout",
    email: "Email",
    password: "Password",
    confirmPassword: "Confirm Password",
    name: "Full Name",
    welcomeBack: "Welcome Back",
    createAccount: "Create Account",
    alreadyHaveAccount: "Already have an account?",
    dontHaveAccount: "Don't have an account?",
    planningDescription: "AI-powered crop planning and resource optimization",
    communityDescription: "Connect with fellow farmers and agricultural experts",
    marketDescription: "Real-time market prices and trend analysis",
    calendarDescription: "Agricultural events and seasonal reminders",
    language: "Language"
  },
  hi: {
    title: "कृषि वेब ऐप प्लेटफॉर्म",
    subtitle: "आधुनिक तकनीक के साथ किसानों को सशक्त बनाना",
    smartPlanning: "स्मार्ट योजना",
    communitySupport: "सामुदायिक सहायता",
    marketInsights: "बाजार अंतर्दृष्टि",
    eventCalendar: "कार्यक्रम कैलेंडर",
    login: "लॉगिन",
    signup: "साइन अप",
    logout: "लॉगआउट",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्ड की पुष्टि करें",
    name: "पूरा नाम",
    welcomeBack: "वापसी पर स्वागत है",
    createAccount: "खाता बनाएं",
    alreadyHaveAccount: "क्या आपका पहले से खाता है?",
    dontHaveAccount: "क्या आपका खाता नहीं है?",
    planningDescription: "AI-संचालित फसल योजना और संसाधन अनुकूलन",
    communityDescription: "साथी किसानों और कृषि विशेषज्ञों से जुड़ें",
    marketDescription: "वास्तविक समय बाजार मूल्य और प्रवृत्ति विश्लेषण",
    calendarDescription: "कृषि कार्यक्रम और मौसमी अनुस्मारक",
    language: "भाषा"
  },
  bn: {
    title: "কৃষি ওয়েব অ্যাপ প্ল্যাটফর্ম",
    subtitle: "আধুনিক প্রযুক্তির সাথে কৃষকদের ক্ষমতায়ন",
    smartPlanning: "স্মার্ট পরিকল্পনা",
    communitySupport: "সম্প্রদায়ের সহায়তা",
    marketInsights: "বাজার অন্তর্দৃষ্টি",
    eventCalendar: "ইভেন্ট ক্যালেন্ডার",
    login: "লগইন",
    signup: "সাইন আপ",
    logout: "লগআউট",
    email: "ইমেইল",
    password: "পাসওয়ার্ড",
    confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
    name: "পূর্ণ নাম",
    welcomeBack: "স্বাগতম",
    createAccount: "অ্যাকাউন্ট তৈরি করুন",
    alreadyHaveAccount: "ইতিমধ্যে অ্যাকাউন্ট আছে?",
    dontHaveAccount: "অ্যাকাউন্ট নেই?",
    planningDescription: "AI-চালিত ফসল পরিকল্পনা এবং সম্পদ অপ্টিমাইজেশন",
    communityDescription: "সহকর্মী কৃষক এবং কৃষি বিশেষজ্ঞদের সাথে সংযোগ করুন",
    marketDescription: "রিয়েল-টাইম বাজার মূল্য এবং ট্রেন্ড বিশ্লেষণ",
    calendarDescription: "কৃষি ইভেন্ট এবং মৌসুমী অনুস্মারক",
    language: "ভাষা"
  },
  te: {
    title: "వ్యవసాయ వెబ్ యాప్ ప్లాట్‌ఫారమ్",
    subtitle: "ఆధునిక సాంకేతికతతో రైతులను శక్తివంతం చేయడం",
    smartPlanning: "స్మార్ట్ ప్లానింగ్",
    communitySupport: "కమ్యూనిటీ సపోర్ట్",
    marketInsights: "మార్కెట్ ఇన్‌సైట్స్",
    eventCalendar: "ఈవెంట్ క్యాలెండర్",
    login: "లాగిన్",
    signup: "సైన్ అప్",
    logout: "లాగ్అవుట్",
    email: "ఇమెయిల్",
    password: "పాస్‌వర్డ్",
    confirmPassword: "పాస్‌వర్డ్ నిర్ధారించండి",
    name: "పూర్తి పేరు",
    welcomeBack: "తిరిగి స్వాగతం",
    createAccount: "ఖాతా సృష్టించండి",
    alreadyHaveAccount: "ఇప్పటికే ఖాతా ఉందా?",
    dontHaveAccount: "ఖాతా లేదా?",
    planningDescription: "AI-శక్తితో పంట ప్రణాళిక మరియు వనరుల అనుకూలీకరణ",
    communityDescription: "తోటి రైతులు మరియు వ్యవసాయ నిపుణులతో కనెక్ట్ అవ్వండి",
    marketDescription: "రియల్-టైమ్ మార్కెట్ ధరలు మరియు ట్రెండ్ విశ్లేషణ",
    calendarDescription: "వ్యవసాయ కార్యక్రమాలు మరియు కాలానుగుణ రిమైండర్లు",
    language: "భాష"
  },
  ta: {
    title: "விவசாய வலை பயன்பாட்டு தளம்",
    subtitle: "நவீన தொழில்நுட்பத்துடன் விவசாயிகளை வலுப்படுத்துதல்",
    smartPlanning: "ஸ்மார்ட் திட்டமிடல்",
    communitySupport: "சமூக ஆதரவு",
    marketInsights: "சந்தை நுண்ணறிவு",
    eventCalendar: "நிகழ்வு நாட்காட்டி",
    login: "உள்நுழைவு",
    signup: "பதிவு செய்யவும்",
    logout: "வெளியேறு",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    confirmPassword: "கடவுச்சொல்லை உறுதிப்படுத்தவும்",
    name: "முழு பெயர்",
    welcomeBack: "மீண்டும் வரவேற்கிறோம்",
    createAccount: "கணக்கை உருவாக்கவும்",
    alreadyHaveAccount: "ஏற்கனவே கணக்கு உள்ளதா?",
    dontHaveAccount: "கணக்கு இல்லையா?",
    planningDescription: "AI-இயங்கும் பயிர் திட்டமிடல் மற்றும் வள மேம்படுத்தல்",
    communityDescription: "சக விவசாயிகள் மற்றும் விவசாய நிபுணர்களுடன் இணைக்கவும்",
    marketDescription: "நிகழ்நேர சந்தை விலைகள் மற்றும் போக்கு பகுப்பாய்வு",
    calendarDescription: "விவசாய நிகழ்வுகள் மற்றும் பருவகால நினைவூட்டல்கள்",
    language: "மொழி"
  },
  mr: {
    title: "कृषी वेब अॅप प्लॅटफॉर्म",
    subtitle: "आधुनिक तंत्रज्ञानासह शेतकऱ्यांना सक्षम करणे",
    smartPlanning: "स्मार्ट नियोजन",
    communitySupport: "समुदाय समर्थन",
    marketInsights: "बाजार अंतर्दृष्टी",
    eventCalendar: "कार्यक्रम दिनदर्शिका",
    login: "लॉगिन",
    signup: "साइन अप",
    logout: "लॉगआउट",
    email: "ईमेल",
    password: "पासवर्ड",
    confirmPassword: "पासवर्डची पुष्टी करा",
    name: "पूर्ण नाव",
    welcomeBack: "परत स्वागत आहे",
    createAccount: "खाते तयार करा",
    alreadyHaveAccount: "आधीच खाते आहे?",
    dontHaveAccount: "खाते नाही?",
    planningDescription: "AI-चालित पीक नियोजन आणि संसाधन अनुकूलन",
    communityDescription: "सहकारी शेतकरी आणि कृषी तज्ञांशी जोडा",
    marketDescription: "रिअल-टाइम बाजार किंमती आणि ट्रेंड विश्लेषण",
    calendarDescription: "कृषी कार्यक्रम आणि हंगामी स्मरणपत्रे",
    language: "भाषा"
  },
  gu: {
    title: "કૃષિ વેબ એપ્લિકેશન પ્લેટફોર્મ",
    subtitle: "આધુનિક ટેકનોલોજી સાથે ખેડૂતોને સશક્ત બનાવવું",
    smartPlanning: "સ્માર્ટ પ્લાનિંગ",
    communitySupport: "કોમ્યુનિટી સપોર્ટ",
    marketInsights: "માર્કેટ ઇન્સાઇટ્સ",
    eventCalendar: "ઇવેન્ટ કેલેન્ડર",
    login: "લોગિન",
    signup: "સાઇન અપ",
    logout: "લોગઆઉટ",
    email: "ઇમેઇલ",
    password: "પાસવર્ડ",
    confirmPassword: "પાસવર્ડની પુષ્ટિ કરો",
    name: "પૂરું નામ",
    welcomeBack: "પાછા આવવા બદલ સ્વાગત",
    createAccount: "એકાઉન્ટ બનાવો",
    alreadyHaveAccount: "પહેલેથી એકાઉન્ટ છે?",
    dontHaveAccount: "એકાઉન્ટ નથી?",
    planningDescription: "AI-સંચાલિત પાક આયોજન અને સંસાધન ઑપ્ટિમાઇઝેશન",
    communityDescription: "સાથી ખેડૂતો અને કૃષિ નિષ્ણાતો સાથે જોડાઓ",
    marketDescription: "રિયલ-ટાઇમ માર્કેટ કિંમતો અને ટ્રેન્ડ વિશ્લેષણ",
    calendarDescription: "કૃષિ ઇવેન્ટ્સ અને મોસમી રિમાઇન્ડર્સ",
    language: "ભાષા"
  },
  kn: {
    title: "ಕೃಷಿ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್ ಪ್ಲಾಟ್‌ಫಾರ್ಮ್",
    subtitle: "ಆಧುನಿಕ ತಂತ್ರಜ್ಞಾನದೊಂದಿಗೆ ರೈತರನ್ನು ಸಶಕ್ತಗೊಳಿಸುವುದು",
    smartPlanning: "ಸ್ಮಾರ್ಟ್ ಯೋಜನೆ",
    communitySupport: "ಸಮುದಾಯ ಬೆಂಬಲ",
    marketInsights: "ಮಾರುಕಟ್ಟೆ ಒಳನೋಟಗಳು",
    eventCalendar: "ಈವೆಂಟ್ ಕ್ಯಾಲೆಂಡರ್",
    login: "ಲಾಗಿನ್",
    signup: "ಸೈನ್ ಅಪ್",
    logout: "ಲಾಗ್ಔಟ್",
    email: "ಇಮೇಲ್",
    password: "ಪಾಸ್‌ವರ್ಡ್",
    confirmPassword: "ಪಾಸ್‌ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
    name: "ಪೂರ್ಣ ಹೆಸರು",
    welcomeBack: "ಮತ್ತೆ ಸ್ವಾಗತ",
    createAccount: "ಖಾತೆ ರಚಿಸಿ",
    alreadyHaveAccount: "ಈಗಾಗಲೇ ಖಾತೆ ಇದೆಯೇ?",
    dontHaveAccount: "ಖಾತೆ ಇಲ್ಲವೇ?",
    planningDescription: "AI-ಚಾಲಿತ ಬೆಳೆ ಯೋಜನೆ ಮತ್ತು ಸಂಪನ್ಮೂಲ ಅನುಕೂಲೀಕರಣ",
    communityDescription: "ಸಹ ರೈತರು ಮತ್ತು ಕೃಷಿ ತಜ್ಞರೊಂದಿಗೆ ಸಂಪರ್ಕ ಸಾಧಿಸಿ",
    marketDescription: "ನೈಜ-ಸಮಯದ ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು ಮತ್ತು ಪ್ರವೃತ್ತಿ ವಿಶ್ಲೇಷಣೆ",
    calendarDescription: "ಕೃಷಿ ಘಟನೆಗಳು ಮತ್ತು ಋತುಮಾನದ ಜ್ಞಾಪನೆಗಳು",
    language: "ಭಾಷೆ"
  }
};

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'mr', name: 'मराठी' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' }
];

function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const t = translations[currentLanguage];

  // Smart Planning functionality
  const handleSmartPlanning = () => {
    if (!isAuthenticated) {
      setShowLogin(true);
      return;
    }
    
    // Smart planning functionality
    alert(`${t.smartPlanning}: ${t.planningDescription}`);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Simple mock authentication
    if (email && password) {
      setUser({ email, name: email.split('@')[0] });
      setIsAuthenticated(true);
      setShowLogin(false);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirmPassword');
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (name && email && password) {
      setUser({ email, name });
      setIsAuthenticated(true);
      setShowSignup(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-green-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Sprout className="h-8 w-8 text-green-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">AgriPlatform</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Selector */}
              <div className="relative">
                <button
                  onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
                </button>
                
                {showLanguageDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setCurrentLanguage(lang.code);
                          setShowLanguageDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-700">Welcome, {user?.name}</span>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>{t.logout}</span>
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setShowLogin(true)}
                    className="text-green-600 hover:text-green-700 font-medium"
                  >
                    {t.login}
                  </button>
                  <button
                    onClick={() => setShowSignup(true)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                  >
                    {t.signup}
                  </button>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="text-gray-700 hover:text-green-600"
              >
                {showMobileMenu ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {showMobileMenu && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col space-y-4">
                <div className="relative">
                  <button
                    onClick={() => setShowLanguageDropdown(!showLanguageDropdown)}
                    className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:text-green-600 transition-colors"
                  >
                    <Globe className="h-4 w-4" />
                    <span>{languages.find(lang => lang.code === currentLanguage)?.name}</span>
                  </button>
                  
                  {showLanguageDropdown && (
                    <div className="mt-2 w-full bg-white rounded-md shadow-lg border border-gray-200">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => {
                            setCurrentLanguage(lang.code);
                            setShowLanguageDropdown(false);
                          }}
                          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
                        >
                          {lang.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {isAuthenticated ? (
                  <div className="flex flex-col space-y-2">
                    <span className="text-sm text-gray-700 px-3">Welcome, {user?.name}</span>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-1 px-3 py-2 text-sm text-red-600 hover:text-red-700 transition-colors"
                    >
                      <LogOut className="h-4 w-4" />
                      <span>{t.logout}</span>
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => {
                        setShowLogin(true);
                        setShowMobileMenu(false);
                      }}
                      className="text-left px-3 py-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      {t.login}
                    </button>
                    <button
                      onClick={() => {
                        setShowSignup(true);
                        setShowMobileMenu(false);
                      }}
                      className="text-left px-3 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      {t.signup}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t.title}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div 
            onClick={handleSmartPlanning}
            className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.smartPlanning}</h3>
            <p className="text-gray-600">{t.planningDescription}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.communitySupport}</h3>
            <p className="text-gray-600">{t.communityDescription}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.marketInsights}</h3>
            <p className="text-gray-600">{t.marketDescription}</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.eventCalendar}</h3>
            <p className="text-gray-600">{t.calendarDescription}</p>
          </div>
        </div>
      </main>

      {/* Login Modal */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t.welcomeBack}</h2>
              <button
                onClick={() => setShowLogin(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                {t.login}
              </button>
            </form>
            
            <p className="mt-4 text-center text-sm text-gray-600">
              {t.dontHaveAccount}{' '}
              <button
                onClick={() => {
                  setShowLogin(false);
                  setShowSignup(true);
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.signup}
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">{t.createAccount}</h2>
              <button
                onClick={() => setShowSignup(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <form onSubmit={handleSignup} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.name}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.email}
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.password}
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t.confirmPassword}
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
              >
                {t.signup}
              </button>
            </form>
            
            <p className="mt-4 text-center text-sm text-gray-600">
              {t.alreadyHaveAccount}{' '}
              <button
                onClick={() => {
                  setShowSignup(false);
                  setShowLogin(true);
                }}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                {t.login}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;