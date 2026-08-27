"use client";
import { useRouter } from "next/navigation";
import { useAuth } from "../../../context/AuthContext";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [registerType, setRegisterType] = useState("");
  const [errors, setErrors] = useState({});
  const { login } = useAuth();

  useEffect(() => { setMounted(true); }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setError("");
    setSuccess("");

    if (!registerType) {
      setErrors({ register_type: "Please select login type." });
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, register_type: registerType }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        if (data.token) localStorage.setItem("token", data.token);
        if (data.user) localStorage.setItem("user", JSON.stringify(data.user));
        if (data.roles) localStorage.setItem("roles", JSON.stringify(data.roles));
        if (data.permissions) localStorage.setItem("permissions", JSON.stringify(data.permissions));
        localStorage.setItem("register_type", registerType);

        setSuccess("Login successful! Redirecting...");
        login(data.token, data.user.name, data.roles, data.permissions);
        router.replace("/myportal");
      } else {
        setError(data.message || "Invalid login credentials");
      }
    } catch {
      setError("Something went wrong. Please try again.");
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
        }

        .form-card {
          width: 100%; max-width: 420px;
          opacity: ${mounted ? 1 : 0};
          transform: ${mounted ? 'translateY(0)' : 'translateY(20px)'};
          transition: opacity 0.5s ease, transform 0.5s ease;
        }

        .form-header { margin-bottom: 40px; }
        .form-tag {
          font-size: 11px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; color: #eab308; margin-bottom: 12px;
        }
        .form-title {
          font-size: 28px; font-weight: 800;
          color: #09090b; letter-spacing: -0.8px; margin-bottom: 8px;
        }
        .form-subtitle { font-size: 14px; color: #71717a; line-height: 1.6; }

        .field-group { margin-bottom: 20px; }
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

        .forgot-row {
          display: flex; justify-content: flex-end; margin-bottom: 24px;
        }
        .forgot-link {
          font-size: 13px; color: #eab308;
          text-decoration: none; font-weight: 600;
        }
        .forgot-link:hover { opacity: 0.8; }

        .submit-btn {
          width: 100%; height: 50px; border: none; border-radius: 12px;
          background: #09090b; color: #fff;
          font-family: 'Chivo', sans-serif;
          font-size: 14px; font-weight: 700;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.2s;
          position: relative; overflow: hidden;
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

        .alert {
          display: flex; align-items: flex-start; gap: 10px;
          padding: 14px 16px; border-radius: 12px;
          font-size: 13px; line-height: 1.5; margin-top: 16px;
          font-weight: 500;
        }
        .alert-error {
          background: #fef2f2; border: 1px solid #fecaca; color: #b91c1c;
        }
        .alert-success {
          background: #f0fdf4; border: 1px solid #bbf7d0; color: #15803d;
        }
        .alert-icon { flex-shrink: 0; margin-top: 1px; }

        .divider {
          display: flex; align-items: center; gap: 16px;
          margin: 28px 0;
        }
        .divider-line { flex: 1; height: 1px; background: #e4e4e7; }
        .divider-text { font-size: 12px; color: #a1a1aa; font-weight: 500; }

        .register-link {
          text-align: center;
          font-size: 14px; color: #71717a;
        }
        .register-link a {
          color: #eab308; text-decoration: none; font-weight: 700;
          transition: opacity 0.2s;
        }
        .register-link a:hover { opacity: 0.8; }

        .form-footer {
          margin-top: 32px; padding-top: 24px;
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
              <span className="logo-text">Stellar Structures Limited</span>
            </div>
          </div>

          <div className="left-center">
            <div className="badge">
              <span className="badge-dot" />
              Real Estate Platform
            </div>
            <h1 className="left-h">
              Manage your properties <span>with ease</span>
            </h1>
            <p className="left-desc">
              Streamline your real estate business with powerful tools for property management, client tracking, and deal closures.
            </p>
            <div className="features">
              {[
                { icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z M9 22V12h6v10", label: "Property listings & management" },
                { icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2 M9 3a4 4 0 1 0 0.001 8 A4 4 0 0 0 9 3z M23 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75", label: "Client & lead management" },
                { icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z", label: "Secure document handling" },
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
              <p className="form-tag">Secure Access</p>
              <h2 className="form-title">Welcome back</h2>
              <p className="form-subtitle">Sign in to your administrator account to continue.</p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="field-group">
                <label className="field-label">Login as</label>
                <div className="field-wrapper">
                  <span className="field-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <select className={`field-select${errors.register_type ? ' input-error' : ''}`}
                    value={registerType} onChange={(e) => { setRegisterType(e.target.value); if (errors.register_type) setErrors({}); }}>
                    <option value="" disabled>Select type</option>
                    <option value="landowner">Landowner</option>
                    <option value="buyer">Buyer</option>
                  </select>
                </div>
                {errors.register_type && <span className="field-error">{errors.register_type}</span>}
                <span style={{ fontSize: '12px', color: '#71717a', marginTop: '4px', display: 'block' }}>
                  Select the type you registered with
                </span>
              </div>

              <div className="field-group">
                <label className="field-label">Email</label>
                <div className="field-wrapper">
                
                  <input className="field-input" type="email" placeholder="Enter your email"
                    value={email} onChange={(e) => setEmail(e.target.value)}  autoComplete="email" />
                </div>
              </div>

              <div className="field-group">
                <label className="field-label">Password</label>
                <div className="field-wrapper">
               
                  <input className="field-input" type={showPassword ? "text" : "password"}
                    placeholder="Enter your password" value={password}
                    onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" />
                  <button type="button" className="pwd-btn" onClick={() => setShowPassword(!showPassword)}
                    tabIndex={-1} aria-label={showPassword ? "Hide password" : "Show password"}>
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
              </div>

              {/* <div className="forgot-row">
                <a href="#" className="forgot-link">Forgot password?</a>
              </div> */}

              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? (
                  <><span className="spinner" /> Signing in...</>
                ) : (
                  <>Sign In
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                    </svg>
                  </>
                )}
              </button>

              {error && (
                <div className="alert alert-error" role="alert">
                  <span className="alert-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </span>
                  {error}
                </div>
              )}

              {success && (
                <div className="alert alert-success" role="alert">
                  <span className="alert-icon">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
                    </svg>
                  </span>
                  {success}
                </div>
              )}
            </form>

            <div className="register-link">
              Don&apos;t have an account? <Link href="/register">Create one</Link>
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
