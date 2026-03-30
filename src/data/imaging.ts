export const imaging = [
  {
    id: 'echo-lv',
    title: 'Left Ventricular Assessment',
    category: 'Echocardiography',
    content: `
**LVEF (Simpson's Biplane):**
- Normal: 52-72% (Men), 54-74% (Women)
- Mildly Abnormal: 41-51% (Men), 41-53% (Women)
- Moderately Abnormal: 30-40%
- Severely Abnormal: < 30%

**LV Mass Index:**
- Normal: 43-95 g/m² (Women), 49-115 g/m² (Men)
    `
  },
  {
    id: 'echo-diastolic',
    title: 'Diastolic Function',
    category: 'Echocardiography',
    content: `
**Key Parameters:**
- Mitral E/A ratio
- Average E/e' ratio (> 14 indicates increased LAP)
- Septal e' velocity (< 7 cm/s) or Lateral e' velocity (< 10 cm/s)
- TR velocity (> 2.8 m/s)
- LA Volume Index (> 34 mL/m²)
    `
  },
  {
    id: 'ecg-stemi',
    title: 'STEMI Criteria',
    category: 'ECG',
    content: `
**New ST elevation at the J point in ≥ 2 contiguous leads:**
- ≥ 1 mm in all leads except V2-V3.
- In V2-V3:
  - ≥ 2 mm in men ≥ 40 yrs
  - ≥ 2.5 mm in men < 40 yrs
  - ≥ 1.5 mm in women

**Contiguous Leads:**
- Inferior: II, III, aVF
- Lateral: I, aVL, V5, V6
- Anterior: V1-V4
    `
  }
];
