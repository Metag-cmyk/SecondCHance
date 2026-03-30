export const labs = [
  {
    id: 'trop',
    name: 'Troponin (High-Sensitivity)',
    normal: 'Assay-dependent (e.g., < 14 ng/L for women, < 22 ng/L for men)',
    derangement: `
**Elevated in:**
- Type 1 MI (Plaque rupture)
- Type 2 MI (Supply/demand mismatch)
- Heart Failure
- Pulmonary Embolism
- Myocarditis
- Renal Failure
    `
  },
  {
    id: 'bnp',
    name: 'BNP / NT-proBNP',
    normal: 'BNP < 100 pg/mL, NT-proBNP < 300 pg/mL',
    derangement: `
**Elevated in:**
- Heart Failure (HFrEF, HFpEF)
- ACS
- Pulmonary Embolism
- Renal Failure
- Atrial Fibrillation
- Age > 75 (cutoffs are higher)
    `
  },
  {
    id: 'lipid',
    name: 'Lipid Panel',
    normal: 'LDL < 100 mg/dL (or < 70 for high risk), HDL > 40 (men) / > 50 (women), TG < 150 mg/dL',
    derangement: `
**Targets:**
- Very high risk (ASCVD + multiple events): LDL < 55 mg/dL
- High risk (ASCVD): LDL < 70 mg/dL
- Elevated TG (> 500 mg/dL) increases risk of pancreatitis.
    `
  }
];
