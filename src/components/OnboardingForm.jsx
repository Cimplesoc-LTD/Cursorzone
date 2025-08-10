import React, { useState } from "react";

function OnboardingForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    company: "",
    contactName: "",
    email: "",
    phone: "",
    systems: "",
    ipAddresses: "",
    users: "",
    specialReqs: "",
    connectionMethod: "",
    agentInstalled: false,
    logsSent: false,
  });

  const next = () => setStep(step + 1);
  const prev = () => setStep(step - 1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // כאן אפשר לשלוח את הנתונים לשרת/דאטאבייס
    alert("הטופס נשלח בהצלחה!");
  };

  return (
    <form onSubmit={handleSubmit} dir="rtl" style={{ maxWidth: 500, margin: "auto" }}>
      {step === 1 && (
        <>
          <h2>שלב 1: פרטי לקוח</h2>
          <input name="company" placeholder="שם חברה" value={form.company} onChange={handleChange} required />
          <input name="contactName" placeholder="איש קשר" value={form.contactName} onChange={handleChange} required />
          <input name="email" placeholder="אימייל" type="email" value={form.email} onChange={handleChange} required />
          <input name="phone" placeholder="טלפון" value={form.phone} onChange={handleChange} required />
          <button type="button" onClick={next}>המשך</button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>שלב 2: הגדרת הסביבה</h2>
          <textarea name="systems" placeholder="מערכות עיקריות (AD, Firewall, Cloud וכו')" value={form.systems} onChange={handleChange} />
          <input name="ipAddresses" placeholder="כתובות IP מרכזיות" value={form.ipAddresses} onChange={handleChange} />
          <input name="users" placeholder="משתמשים עיקריים" value={form.users} onChange={handleChange} />
          <textarea name="specialReqs" placeholder="הערות/דרישות מיוחדות" value={form.specialReqs} onChange={handleChange} />
          <button type="button" onClick={prev}>חזור</button>
          <button type="button" onClick={next}>המשך</button>
        </>
      )}

      {step === 3 && (
        <>
          <h2>שלב 3: On-boarding טכני</h2>
          <label>
            שיטת חיבור: 
            <select name="connectionMethod" value={form.connectionMethod} onChange={handleChange}>
              <option value="">בחר...</option>
              <option value="vpn">VPN</option>
              <option value="direct">Direct Connection</option>
              <option value="cloud">Cloud Integration</option>
            </select>
          </label>
          <label>
            <input type="checkbox" name="agentInstalled" checked={form.agentInstalled} onChange={handleChange} />
            התקנת Agent בוצעה
          </label>
          <label>
            <input type="checkbox" name="logsSent" checked={form.logsSent} onChange={handleChange} />
            שליחת לוגים נבדקה
          </label>
          <button type="button" onClick={prev}>חזור</button>
          <button type="submit">סיום הרשמה</button>
        </>
      )}
    </form>
  );
}

export default OnboardingForm;