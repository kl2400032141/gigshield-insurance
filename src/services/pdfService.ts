import { jsPDF } from 'jspdf';

export const generatePolicyPDF = (policyData: {
  id: string;
  coverage: string;
  premium: string;
  expiryDate: string;
  status: string;
}) => {
  const doc = new jsPDF();

  // Header
  doc.setFillColor(15, 23, 42); // slate-900
  doc.rect(0, 0, 210, 40, 'F');
  
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('GigShield Protection Certificate', 20, 25);
  
  doc.setFontSize(10);
  doc.text(`Certificate ID: ${policyData.id}`, 20, 35);

  // Body
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(16);
  doc.text('Policy Details', 20, 60);
  
  doc.setDrawColor(226, 232, 240); // slate-200
  doc.line(20, 65, 190, 65);

  doc.setFontSize(12);
  doc.text(`Status:`, 20, 80);
  doc.text(policyData.status, 80, 80);

  doc.text(`Coverage Amount:`, 20, 95);
  doc.text(`Rs. ${policyData.coverage}`, 80, 95);

  doc.text(`Weekly Premium:`, 20, 110);
  doc.text(`Rs. ${policyData.premium}`, 80, 110);

  doc.text(`Expiry Date:`, 20, 125);
  doc.text(policyData.expiryDate, 80, 125);

  // Benefits
  doc.setFontSize(16);
  doc.text('Coverage Benefits', 20, 150);
  doc.line(20, 155, 190, 155);

  const benefits = [
    '- Heavy Rainfall (>10mm/day)',
    '- Extreme Heat (>42°C)',
    '- Severe Air Pollution (AQI >400)',
    '- Public Holidays & Curfews',
    '- Platform Technical Outages',
    '- Accidental Injury during work'
  ];

  doc.setFontSize(11);
  benefits.forEach((benefit, index) => {
    doc.text(benefit, 25, 170 + (index * 10));
  });

  // Footer
  doc.setFontSize(10);
  doc.setTextColor(100, 116, 139); // slate-500
  doc.text('This is a computer-generated document. No signature is required.', 105, 280, { align: 'center' });
  doc.text('© 2026 GigShield Protection. All rights reserved.', 105, 285, { align: 'center' });

  doc.save(`GigShield_Certificate_${policyData.id}.pdf`);
};
