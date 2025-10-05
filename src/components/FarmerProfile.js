import React, { useState } from 'react';

const regions = [
  "Banjul",
  "Kanifing",
  "Western Region",
  "North Bank Region",
  "Lower River Region",
  "Central River Region",
  "Upper River Region"
];

export default function FarmerProfile() {
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [village, setVillage] = useState('');

  return (
    <form>
      <div>
        <label>
          <span role="img" aria-label="phone">📞</span> Phone Number (+220):
          <input
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder="Enter phone number"
            pattern="[0-9]{7}"
            required
          />
        </label>
      </div>
      <div>
        <label>
          <span role="img" aria-label="region">🌍</span> Region:
          <select value={region} onChange={e => setRegion(e.target.value)} required>
            <option value="">Select region</option>
            {regions.map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          <span role="img" aria-label="village">🏘️</span> Village:
          <input
            type="text"
            value={village}
            onChange={e => setVillage(e.target.value)}
            placeholder="Enter village name"
            required
          />
        </label>
      </div>
      <button type="submit">Save Profile</button>
    </form>
  );
}
