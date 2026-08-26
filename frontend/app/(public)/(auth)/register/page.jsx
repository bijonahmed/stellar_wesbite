"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
    confirmPassword: "",
    register_type: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [alertMsg, setAlertMsg] = useState({ type: "", text: "" });

  useEffect(() => { setMounted(true); }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    if (errors[id]) setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setAlertMsg({ type: "", text: "" });

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match." });
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE}/register`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone_number: formData.phone_number,
            password: formData.password,
            password_confirmation: formData.confirmPassword,
            register_type: formData.register_type,
          }),
        }
      );

      let data = {};
      try { data = await response.json(); } catch { data = { message: "Invalid JSON response from server" }; }

      if (response.ok && data.success) {
        setLoading(false);
        setAlertMsg({ type: "success", text: data.message || "Registration successful! Redirecting..." });
        setFormData({ name: "", email: "", password: "", phone_number: "", confirmPassword: "", register_type: "" });
        setTimeout(() => router.replace("/login"), 2000);
        return;
      }

      if (response.status === 422 && data.errors) {
        setLoading(false);
        const fieldErrors = {};
        Object.entries(data.errors).forEach(([field, msgs]) => {
          fieldErrors[field] = Array.isArray(msgs) ? msgs[0] : msgs;
        });
        setErrors(fieldErrors);
        return;
      }

      setLoading(false);
      setAlertMsg({ type: "error", text: data.message || "Something went wrong. Please try again." });
    } catch {
      setLoading(false);
      setAlertMsg({ type: "error", text: "Unable to register. Please check your network connection." });
    }
    setLoading(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chivo:wght@300;400;500;600;700;800&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .auth-root {
          min-height: 100vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
          font-family: 'Chivo', sans-serif;
          background: #09090b;
        }

        @media (max-width: 968px) {
          .auth-root { grid-template-columns: 1fr; }
          .auth-left { display: none; }
        }

        .auth-left {
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 48px;
          background: linear-gradient(145deg, #0f0f12 0%, #18181b 100%);
        }

        .auth-left::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(ellipse at 30% 50%, rgba(234,179,8,0.06) 0%, transparent 60%);
          pointer-events: none;
        }

        .auth-left::after {
          content: '';
          position: absolute;
          bottom: -30%;
          right: -30%;
          width: 60%;
          height: 60%;
          background: radial-gradient(ellipse at center, rgba(234,179,8,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .auth-grid-bg {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 48px 48px;
          mask-image: linear-gradient(180deg, transparent, white 30%, white 70%, transparent);
        }

        .left-top { position: relative; z-index: 2; }

        .logo-row { display: flex; align-items: center; gap: 12px; }
        .logo-icon {
          width: 40px; height: 40px;
          background: #eab308;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 0 24px rgba(234,179,8,0.25);
        }
        .logo-text { font-weight: 700; font-size: 18px; color: #fafafa; letter-spacing: -0.5px; }

        .left-center { position: relative; z-index: 2; max-width: 440px; }

        .badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 6px 14px;
          background: rgba(234,179,8,0.08);
          border: 1px solid rgba(234,179,8,0.15);
          border-radius: 100px;
          font-size: 11px; font-weight: 600; color: #eab308;
          letter-spacing: 1px; text-transform: uppercase;
          margin-bottom: 28px;
        }
        .badge-dot { width: 6px; height: 6px; background: #eab308; border-radius: 50%; }

        .left-h {
          font-size: clamp(32px, 4vw, 48px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -1.5px; color: #fafafa;
          margin-bottom: 20px;
        }
        .left-h span { color: #eab308; }

        .left-desc {
          font-size: 15px; color: #71717a;
          line-height: 1.7; max-width: 380px;
          margin-bottom: 40px;
        }

        .features { display: flex; flex-direction: column; gap: 16px; }
        .feature { display: flex; align-items: center; gap: 14px; }
        .feature-icon {
          width: 36px; height: 36px; flex-shrink: 0;
          background: rgba(234,179,8,0.08);
          border: 1px solid rgba(234,179,8,0.12);
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
        }
        .feature-label { font-size: 14px; color: #a1a1aa; font-weight: 500; }

        .left-bottom { position: relative; z-index: 2; display: flex; gap: 24px; }
        .left-bottom a {
          font-size: 12px; color: #52525b; text-decoration: none;
          transition: color 0.2s; font-weight: 500;
        }
        .left-bottom a:hover { color: #eab308; }

        .auth-right {
          background: #fafafa;
          display: flex; align-items: center; justify-content: center;
          padding: 48px 40px;
          overflow-y: auto;
        }

        .form-card {
          width: 100%; max-width: 420px;
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .form-header { margin-bottom: 32px; }
        .form-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #eab308; margin-bottom: 12px;
        }
        .form-title {
          font-size: 28px; font-weight: 800;
          color: #09090b; letter-spacing: -0.8px; margin-bottom: 8px;
        }
        .form-subtitle { font-size: 14px; color: #71717a; line-height: 1.6; }

        .alert {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px 16px; border-radius: 12px;
          font-size: 13px; line-height: 1.5; margin-bottom: 20px;
          font-weight: 500;
        }
        .alert-error { background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c; }
        .alert-success { background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d; }
        .alert-icon { flex-shrink: 0; margin-top: 1px; }

        .field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        .field-group { margin-bottom: 18px; }
        .field-label {
          display: block; font-size: 13px; font-weight: 600;
          color: #3f3f46; margin-bottom: 8px;
        }
        .field-wrapper { position: relative; }
        .field-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%); color: #a1a1aa;
          display: flex; pointer-events: none;
        }
        .field-input {
          width: 100%; height: 48px;
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 12px;
          padding: 0 44px;
          font-size: 14px; color: #09090b;
          font-family: 'Chivo', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .field-input::placeholder { color: #a1a1aa; }
        .field-input:focus {
          border-color: #eab308;
          box-shadow: 0 0 0 3px rgba(234,179,8,0.1);
        }
        .field-input.input-error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .pwd-btn {
          position: absolute; right: 14px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: #a1a1aa; display: flex; padding: 0;
          transition: color 0.2s;
        }
        .pwd-btn:hover { color: #eab308; }

        .field-select {
          width: 100%; height: 48px;
          background: #fff;
          border: 1.5px solid #e4e4e7;
          border-radius: 12px;
          padding: 0 44px;
          font-size: 14px; color: #09090b;
          font-family: 'Chivo', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
          cursor: pointer;
        }
        .field-select:focus {
          border-color: #eab308;
          box-shadow: 0 0 0 3px rgba(234,179,8,0.1);
        }
        .field-select.input-error {
          border-color: #ef4444;
          box-shadow: 0 0 0 3px rgba(239,68,68,0.08);
        }

        .field-error {
          display: block;
          font-size: 12px; color: #ef4444;
          margin-top: 6px; font-weight: 500;
        }

        .submit-btn {
          width: 100%; height: 50px; border: none; border-radius: 12px;
          background: #09090b; color: #fff;
          font-family: 'Chivo', sans-serif;
          font-size: 14px; font-weight: 700;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.2s;
          position: relative; overflow: hidden;
          margin-top: 8px;
        }
        .submit-btn::before {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0.05));
          opacity: 0; transition: opacity 0.2s;
        }
        .submit-btn:hover:not(:disabled)::before { opacity: 1; }
        .submit-btn:hover:not(:disabled) { transform: translateY(-1px); box-shadow: 0 8px 24px rgba(9,9,11,0.25); }
        .submit-btn:active:not(:disabled) { transform: translateY(0); }
        .submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.2);
          border-top-color: #eab308;
          border-radius: 50%;
          animation: spin 0.6s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }

        .login-link {
          text-align: center;
          font-size: 14px; color: #71717a;
          margin-top: 24px;
        }
        .login-link a {
          color: #eab308; text-decoration: none; font-weight: 700;
          transition: opacity 0.2s;
        }
        .login-link a:hover { opacity: 0.8; }

        .form-footer {
          margin-top: 28px; padding-top: 20px;
          border-top: 1px solid #e4e4e7;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          font-size: 12px; color: #a1a1aa; font-weight: 500;
        }
      `}</style>

      <div className="auth-root">
        {/* Left Panel */}
        <div className="auth-left">
          <div className="auth-grid-bg" />

          <div className="left-top">
            <div className="logo-row">
              <div className="logo-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#09090b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <span className="logo-text">Stellar</span>
            </div>
          </div>

          <div className="left-center">
            <div className="badge">
              <span className="badge-dot" />
              Real Estate Platform
            </div>
            <h1 className="left-h">
              Grow your property <span>business today</span>
            </h1>
            <p className="left-desc">
              Join Stellar to access powerful real estate tools, manage listings, and close deals faster than ever.
            </p>
            <div className="features">
              {[
                { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10", label: "List & manage properties" },
                { icon: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0.001 8 A4 4 0 0 0 9 3z", label: "Connect with clients" },
                { icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14 M22 4L12 14.01l-3-3", label: "Track deals & commissions" },
              ].map((f) => (
                <div className="feature" key={f.label}>
                  <div className="feature-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#eab308" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={f.icon} />
                    </svg>
                  </div>
                  <span className="feature-label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="left-bottom">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>

        {/* Right Panel */}
        <div className="auth-right">
          <div className="form-card">
            <div className="form-header">
              <p className="form-tag">Get Started</p>
              <h2 className="form-title">Create your account</h2>
              <p className="form-subtitle">Fill in your details to get started with Stellar.</p>
            </div>

            {alertMsg.text && (
              <div className={`alert alert-${alertMsg.type}`}>
                <span className="alert-icon">
                  {alertMsg.type === "error" ? (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  )}
                </span>
                {alertMsg.text}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label">Register as</label>
                <div className="field-wrapper">
                  <span className="field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <select className={`field-select${errors.register_type ? ' input-error' : ''}`} id="register_type"
                    value={formData.register_type} onChange={handleChange}>
                    <option value="" disabled>Select type</option>
                    <option value="landowner">Landowner</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>
                {errors.register_type && <span className="field-error">{errors.register_type}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Full Name</label>
                <div className="field-wrapper">
                  <span className="field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  <input className={`field-input${errors.name ? ' input-error' : ''}`} type="text" id="name" placeholder="John Doe"
                    value={formData.name} onChange={handleChange} />
                </div>
                {errors.name && <span className="field-error">{errors.name}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Phone Number</label>
                <div className="field-wrapper">
                  <span className="field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <input className={`field-input${errors.phone_number ? ' input-error' : ''}`} type="tel" id="phone_number" placeholder="+8801915728982"
                    value={formData.phone_number} onChange={handleChange} />
                </div>
                {errors.phone_number && <span className="field-error">{errors.phone_number}</span>}
              </div>

              <div className="field-group">
                <label className="field-label">Email</label>
                <div className="field-wrapper">
                  <span className="field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2" />
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                  </span>
                  <input className={`field-input${errors.email ? ' input-error' : ''}`} type="email" id="email" placeholder="admin@company.com"
                    value={formData.email} onChange={handleChange} autoComplete="email" />
                </div>
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>

              <div className="field-row">
                <div className="field-group">
                  <label className="field-label">Password</label>
                  <div className="field-wrapper">
                    <span className="field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </span>
                    <input className={`field-input${errors.password ? ' input-error' : ''}`} type={showPassword ? "text" : "password"} id="password"
                      placeholder="Min. 6 characters" value={formData.password} onChange={handleChange} />
                    <button type="button" className="pwd-btn" onClick={() => setShowPassword(!showPassword)} tabIndex={-1}>
                      {showPassword ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && <span className="field-error">{errors.password}</span>}
                </div>

                <div className="field-group">
                  <label className="field-label">Confirm Password</label>
                  <div className="field-wrapper">
                    <span className="field-icon">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="M9 12l2 2 4-4" />
                      </svg>
                    </span>
                    <input className={`field-input${errors.confirmPassword ? ' input-error' : ''}`} type={showConfirm ? "text" : "password"} id="confirmPassword"
                      placeholder="Re-enter password" value={formData.confirmPassword} onChange={handleChange} />
                    <button type="button" className="pwd-btn" onClick={() => setShowConfirm(!showConfirm)} tabIndex={-1}>
                      {showConfirm ? (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                          <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      ) : (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.confirmPassword && <span className="field-error">{errors.confirmPassword}</span>}
                </div>
              </div>

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <><span className="spinner" /> Creating account...</>
                ) : (
                  <>Create Account
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <div className="login-link">
              Already have an account? <Link href="/login">Sign in</Link>
            </div>

            <div className="form-footer">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              Protected by 256-bit SSL encryption
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
