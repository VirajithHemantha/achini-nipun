export type GoogleSheetFormType = 'rsvp' | 'wish';

interface SubmitPayload {
  formType: GoogleSheetFormType;
  event?: string;
  name: string;
  guests?: string;
  dietary?: string;
  message?: string;
}

export async function submitToGoogleSheets(payload: SubmitPayload): Promise<void> {
  const scriptUrl = 'https://script.google.com/macros/s/AKfycbxl0GwJg_G52mSUOmjLeWattjR5eREc4sGrNXpMMAMkIDYJefVdfBvJsr9JxqpzPzSN/exec';

  await fetch(scriptUrl, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify({
      ...payload,
      submittedAt: new Date().toISOString(),
      source: 'wedding-site',
    }),
  });
}
