export const drugs = [
  {
    id: 'arni',
    name: 'Sacubitril/Valsartan (Entresto)',
    class: 'ARNI',
    indication: 'HFrEF',
    dosage: `
- Starting: 24/26 mg or 49/51 mg PO BID
- Target: 97/103 mg PO BID
- Note: Allow 36-hour washout period when switching from ACEi to avoid angioedema.
    `
  },
  {
    id: 'bb',
    name: 'Metoprolol Succinate',
    class: 'Beta-Blocker',
    indication: 'HFrEF, Angina, AFib rate control',
    dosage: `
- HFrEF Starting: 12.5 - 25 mg PO daily
- HFrEF Target: 200 mg PO daily
    `
  },
  {
    id: 'sglt2i',
    name: 'Dapagliflozin / Empagliflozin',
    class: 'SGLT2 Inhibitor',
    indication: 'HFrEF, HFpEF, CKD, T2DM',
    dosage: `
- Dapagliflozin: 10 mg PO daily
- Empagliflozin: 10 mg PO daily
- Note: Monitor for euglycemic DKA and genital mycotic infections.
    `
  },
  {
    id: 'doac',
    name: 'Apixaban (Eliquis)',
    class: 'DOAC (Factor Xa Inhibitor)',
    indication: 'AFib stroke prevention, VTE treatment',
    dosage: `
- AFib: 5 mg PO BID
- Dose reduce to 2.5 mg PO BID if ≥ 2 of: Age ≥ 80, Body weight ≤ 60 kg, Serum Creatinine ≥ 1.5 mg/dL.
    `
  }
];
