import React, { useState, useEffect, useRef } from 'react';
import {
  Eye,
  Volume2,
  Type,
  Contrast,
  MousePointer,
  X,
  Moon,
  Sun,
  Mic,
} from 'lucide-react';

interface AccessibilitySettings {
  fontSize: 'normal' | 'large' | 'xlarge';
  contrast: 'normal';
  voiceOver: boolean;
  reducedMotion: boolean;
  highContrast: boolean;
  darkMode: boolean;
  voiceCommands: boolean;
}

const defaultSettings: AccessibilitySettings = {
  fontSize: 'normal',
  contrast: 'normal',
  voiceOver: false,
  reducedMotion: false,
  highContrast: false,
  darkMode: false,
  voiceCommands: false,
};

const AccessibilityMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(defaultSettings);
  const recognitionRef = useRef<any>(null);

  // Voice recognition setup
  useEffect(() => {
    if (!settings.voiceCommands || !('webkitSpeechRecognition' in window)) return;

    const Recognition = (window as any).webkitSpeechRecognition;
    const recognition = new Recognition();
    recognition.continuous = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => console.log('🎤 Voice recognition started');
    recognition.onresult = (event: any) => {
      const transcript = event.results[event.results.length - 1][0].transcript
        .toLowerCase()
        .trim();
      console.log('🎙️ Transcript:', transcript);

      if (transcript.includes('help') || transcript.includes('bachao')) {
       window.location.href = '/safety'; // Redirect to safety dashboard
       
      }
    };

    recognition.onerror = (event: any) => {
      console.error('❌ Voice recognition error:', event.error);
    };

    recognition.start();
    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, [settings.voiceCommands]);

  // Apply settings to document
  useEffect(() => {
    const root = document.documentElement;

    root.style.fontSize =
      settings.fontSize === 'large'
        ? '120%'
        : settings.fontSize === 'xlarge'
        ? '140%'
        : '100%';

    root.classList.toggle('high-contrast', settings.highContrast);
    root.classList.toggle('dark', settings.darkMode);

    if (settings.reducedMotion) {
      root.style.setProperty('--animation-duration', '0s');
    } else {
      root.style.removeProperty('--animation-duration');
    }
  }, [settings]);

  const updateSetting = (key: keyof AccessibilitySettings, value: any) => {
    setSettings((prev) => ({ ...prev, [key]: value }));
  };

  const resetSettings = () => setSettings(defaultSettings);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed left-6 top-1/2 -translate-y-1/2 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 z-50"
        aria-label="Open Accessibility Menu"
      >
        <Eye className="w-5 h-5" />
      </button>

      {/* Voice Command Indicator */}
      {settings.voiceCommands && (
        <div className="fixed bottom-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full shadow-lg z-40 text-sm flex items-center space-x-2">
          <Mic className="h-4 w-4 animate-pulse" />
          <span>Voice commands active: say "Help" or "Bachao"</span>
        </div>
      )}

      {/* Accessibility Menu Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl max-w-md w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Accessibility Settings
              </h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close">
                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Font Size */}
              <SettingSection label="Font Size" icon={<Type className="h-4 w-4 mr-2" />}>
                <div className="grid grid-cols-3 gap-2">
                  {['normal', 'large', 'xlarge'].map((size) => (
                    <button
                      key={size}
                      onClick={() => updateSetting('fontSize', size)}
                      className={`p-2 border rounded-lg text-sm transition ${
                        settings.fontSize === size
                          ? 'border-blue-500 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300'
                          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                </div>
              </SettingSection>

              {/* Voice Commands */}
              <ToggleSetting
                label="Voice Commands"
                icon={<Mic className="h-4 w-4 mr-2" />}
                value={settings.voiceCommands}
                onToggle={() => updateSetting('voiceCommands', !settings.voiceCommands)}
                note='Say "Help" or "Bachao" to navigate to the safety dashboard'
              />

              {/* Dark Mode */}
              <ToggleSetting
                label="Dark Mode"
                icon={
                  settings.darkMode ? (
                    <Moon className="h-4 w-4 mr-2" />
                  ) : (
                    <Sun className="h-4 w-4 mr-2" />
                  )
                }
                value={settings.darkMode}
                onToggle={() => updateSetting('darkMode', !settings.darkMode)}
              />

              {/* High Contrast */}
              <ToggleSetting
                label="High Contrast"
                icon={<Contrast className="h-4 w-4 mr-2" />}
                value={settings.highContrast}
                onToggle={() => updateSetting('highContrast', !settings.highContrast)}
              />

              {/* Reduced Motion */}
              <ToggleSetting
                label="Reduce Motion"
                icon={<MousePointer className="h-4 w-4 mr-2" />}
                value={settings.reducedMotion}
                onToggle={() => updateSetting('reducedMotion', !settings.reducedMotion)}
              />

              {/* Voice Over */}
              <ToggleSetting
                label="Voice Announcements"
                icon={<Volume2 className="h-4 w-4 mr-2" />}
                value={settings.voiceOver}
                onToggle={() => updateSetting('voiceOver', !settings.voiceOver)}
              />

              {/* Reset Button */}
              <button
                onClick={resetSettings}
                className="w-full p-3 mt-4 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition"
              >
                Reset to Default
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Reusable toggle switch component
const ToggleSetting: React.FC<{
  label: string;
  icon: React.ReactNode;
  value: boolean;
  onToggle: () => void;
  note?: string;
}> = ({ label, icon, value, onToggle, note }) => (
  <div>
    <label className="flex justify-between items-center">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center">
        {icon}
        {label}
      </span>
      <button
        onClick={onToggle}
        className={`inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
          value ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
            value ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </label>
    {value && note && <p className="text-xs text-green-600 mt-1">{note}</p>}
  </div>
);

// Section label wrapper
const SettingSection: React.FC<{
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}> = ({ label, icon, children }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center">
      {icon}
      {label}
    </label>
    {children}
  </div>
);

export default AccessibilityMenu;
