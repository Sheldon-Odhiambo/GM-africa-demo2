import { jsPDF } from 'jspdf';
import { BookingData } from '../types';
import { CONTACT_INFO } from '../constants';

export const generateBookingPDF = async (data: BookingData) => {
  const doc = new jsPDF();
  
  const primaryRGB = [229, 186, 94]; // #e5ba5e
  const secondaryRGB = [74, 50, 26]; // #4a321a
  
  // --- Header Section ---
  doc.setFillColor(primaryRGB[0], primaryRGB[1], primaryRGB[2]); 
  doc.rect(0, 0, 210, 60, 'F');
  
  // --- Add Real Logo ---
  doc.addImage('/images/logo-removebg-preview.png', 'PNG', 10, 10, 40, 40); // adjust size/position as needed

  // --- Header Text ---
  // doc.setTextColor(secondaryRGB[0], secondaryRGB[1], secondaryRGB[2]);
  // doc.setFontSize(8);
  // doc.setFont('helvetica', 'bold');
  // doc.text('GOOD MORNING', 60, 25);
  
  // doc.setFontSize(40);
  // doc.setFont('times', 'bolditalic');
  // doc.text('FRICA', 60, 42);
  
  // doc.setFontSize(8);
  // doc.setFont('helvetica', 'bold');
  // doc.text('TOURS & SAFARIS', 60, 48);

  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text([
    'Nakuru City, Kenya',
    `Tel: ${CONTACT_INFO.phone}`,
    `Email: ${CONTACT_INFO.email}`,
    'www.goodmorningafrica.com'
  ], 200, 25, { align: 'right' });

  // --- Voucher Body ---
  doc.setTextColor(secondaryRGB[0], secondaryRGB[1], secondaryRGB[2]);
  doc.setFontSize(22);
  doc.setFont('helvetica', 'bold');
  doc.text('BOOKING VOUCHER', 105, 85, { align: 'center' });
  
  doc.setDrawColor(primaryRGB[0], primaryRGB[1], primaryRGB[2]);
  doc.setLineWidth(1);
  doc.line(40, 90, 170, 90);

  const startY = 110;
  const lineSpacing = 12;
  
  const voucherDetails = [
    ['Booking Ref:', data.reference || 'N/A'],
    ['Client Name:', data.name.toUpperCase()],
    ['Phone Number:', data.phone],
    ['Email Address:', data.email],
    ['Service Requested:', data.service],
    ['Preferred Date:', data.date],
    ['Passenger Count:', `${data.passengers} Pax`]
  ];

  voucherDetails.forEach(([label, value], index) => {
    const y = startY + (index * lineSpacing);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(120, 120, 120);
    doc.text(label, 40, y);
    doc.setFontSize(11);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(secondaryRGB[0], secondaryRGB[1], secondaryRGB[2]);
    doc.text(value, 85, y);
    doc.setDrawColor(245, 245, 245);
    doc.line(40, y + 4, 170, y + 4);
  });

  if (data.notes) {
    const noteY = startY + (voucherDetails.length * lineSpacing) + 10;
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.setTextColor(120, 120, 120);
    doc.text('Client Requests:', 40, noteY);
    
    doc.setFont('helvetica', 'italic');
    doc.setTextColor(secondaryRGB[0], secondaryRGB[1], secondaryRGB[2]);
    const splitNotes = doc.splitTextToSize(data.notes, 130);
    doc.text(splitNotes, 40, noteY + 7);
  }

  // --- Footer Section ---
  const pageHeight = doc.internal.pageSize.height;
  doc.setFillColor(primaryRGB[0], primaryRGB[1], primaryRGB[2]);
  doc.rect(0, pageHeight - 45, 210, 45, 'F');
  
  doc.setTextColor(secondaryRGB[0], secondaryRGB[1], secondaryRGB[2]);
  doc.setFontSize(14);
  doc.setFont('helvetica', 'bold');
  doc.text('Asante Sana for choosing Good Morning Africa!', 105, pageHeight - 30, { align: 'center' });
  
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text('This voucher is a preliminary booking request confirmation. Our agent will reach out to finalize payment.', 105, pageHeight - 22, { align: 'center' });
  doc.text(`${CONTACT_INFO.location}`, 105, pageHeight - 16, { align: 'center' });

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://wa.me/${CONTACT_INFO.whatsapp}`;
  try {
    doc.addImage(qrUrl, 'PNG', 170, pageHeight - 40, 30, 30);
    doc.setFontSize(7);
    doc.setFont('helvetica', 'bold');
    doc.text('CHAT WITH US', 185, pageHeight - 7, { align: 'center' });
  } catch (e) {
    console.error("QR Code Error", e);
  }

  doc.save(`GMA_Voucher_${data.reference}.pdf`);
};
