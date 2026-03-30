export const guidelines = [
  {
    id: 'hf',
    title: 'Heart Failure (AHA/ACC/HFSA 2022)',
    category: 'Heart Failure',
    content: `
**Classification:**
- HFrEF: LVEF ≤ 40%
- HFimpEF: Previous LVEF ≤ 40% and a follow-up measurement of LVEF > 40%
- HFmrEF: LVEF 41-49%
- HFpEF: LVEF ≥ 50%

**Stages:**
- Stage A: At risk for HF
- Stage B: Pre-HF
- Stage C: Symptomatic HF
- Stage D: Advanced HF

**GDMT for HFrEF:**
1. ARNI, ACEi, or ARB
2. Beta-blocker
3. MRA
4. SGLT2i
    `
  },
  {
    id: 'acs',
    title: 'Acute Coronary Syndrome (ACS)',
    category: 'Ischemic Heart Disease',
    content: `
**STEMI:**
- Reperfusion therapy: PCI ≤ 90 min (door-to-balloon) or Fibrinolysis ≤ 30 min (door-to-needle) if PCI not available within 120 min.
- DAPT: Aspirin + P2Y12 inhibitor (Ticagrelor or Prasugrel preferred over Clopidogrel).
- Anticoagulation: UFH, Bivalirudin, or Enoxaparin.

**NSTEMI/UA:**
- Risk stratification (e.g., TIMI, GRACE scores).
- Early invasive strategy for high-risk patients.
- Ischemia-guided strategy for low-risk patients.
    `
  },
  {
    id: 'afib',
    title: 'Atrial Fibrillation (AHA/ACC/HRS 2023)',
    category: 'Arrhythmias',
    content: `
**Stroke Prevention:**
- CHA2DS2-VASc score to assess risk.
- Score ≥ 2 (men) or ≥ 3 (women): DOAC recommended over Warfarin (unless moderate-to-severe mitral stenosis or mechanical heart valve).

**Rate vs. Rhythm Control:**
- Rate control: Beta-blockers, Non-DHP CCBs (Diltiazem, Verapamil), Digoxin.
- Rhythm control: Antiarrhythmic drugs (Amiodarone, Flecainide, Sotalol), Cardioversion, Catheter ablation.
    `
  }
];
