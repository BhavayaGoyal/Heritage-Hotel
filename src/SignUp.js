import React, { useState } from 'react';
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    preferences: {
      newsletters: false,
      specialOffers: false,
    },
  });
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData((prev) => ({
        ...prev,
        preferences: {
          ...prev.preferences,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for registering!');
  };
  const backgroundImageUrl = './featured1.png';
  return (
    <div
      style={{
        minHeight: '100vh',
        fontFamily: "'Open Sans', sans-serif",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '3rem 1rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        className="bg-white rounded-4 shadow p-5"
        style={{ maxWidth: '700px', width: '100%' }}
      >
        {/* Logo placeholder */}
        <div
          className="d-flex align-items-center justify-content-center rounded-circle mb-4"
          style={{
            width: '80px',
            height: '80px',
            backgroundColor: '#b5651d', // warm brown
            color: 'white',
            fontFamily: "'Playfair Display', serif",
            fontWeight: '700',
            fontSize: '2rem',
            userSelect: 'none',
            margin: '0 auto',
          }}
        >
          HH
        </div>
        <h1
          className="text-center mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: '#7c4a00', // dark warm brown
            fontWeight: '700',
          }}
        >
          Become a Member 
        </h1>
        <p className="text-center text-muted mb-4">
          Step into a world of elegance — sign up to unlock unforgettable stays
        </p>
        <form onSubmit={handleSubmit}>
          {/* First and Last Name side by side */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label
                htmlFor="firstName"
                className="form-label text-dark fw-semibold"
              >
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder="Mr. Pradeep"
                required
                value={formData.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="lastName"
                className="form-label text-dark fw-semibold"
              >
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder="Kumar"
                required
                value={formData.lastName}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Email and Phone side by side */}
          <div className="row g-3 mb-3">
            <div className="col-md-6">
              <label htmlFor="email" className="form-label text-dark fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="your.email@example.com"
                required
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="phone" className="form-label text-dark fw-semibold">
                Phone Number
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Password and Confirm Password side by side */}
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <label
                htmlFor="password"
                className="form-label text-dark fw-semibold"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="col-md-6">
              <label
                htmlFor="confirmPassword"
                className="form-label text-dark fw-semibold"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                required
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          {/* Preferences checkboxes */}
          <div className="mb-4">
            <p className="fw-semibold text-dark mb-2">Preferences</p>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="newsletters"
                name="newsletters"
                checked={formData.preferences.newsletters}
                onChange={handleInputChange}
              />
              <label className="form-check-label text-dark" htmlFor="newsletters">
                Receive newsletters
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="specialOffers"
                name="specialOffers"
                checked={formData.preferences.specialOffers}
                onChange={handleInputChange}
              />
              <label className="form-check-label text-dark" htmlFor="specialOffers">
                Receive special offers
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn w-100 fw-bold"
            style={{
              backgroundColor: '#b5651d', // warm brown
              color: 'white',
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.1rem',
              border: 'none',
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = '#9a4d00')
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = '#b5651d')
            }
          >
            Create Account
          </button>
        </form>
        <p className="text-center mt-4 text-muted">
          Already have an account?{' '}
          <a
            href="/login"
            className="fw-semibold"
            style={{ color: '#b5651d', textDecoration: 'underline' }}
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};
export default SignUp;